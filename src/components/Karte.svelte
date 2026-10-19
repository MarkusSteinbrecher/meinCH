<script lang="ts">
  /*
   * Clickable map of cantons or municipalities. The paths are computed at build time (lib/karte.ts);
   * without JavaScript every area is still a link. With `ueben`, it becomes a «find the area» quiz.
   */
  type Flaeche = { id: number; code: string; name: string; d: string; href?: string; info?: string };
  type Props = {
    breite: number; hoehe: number; flaechen: Flaeche[]; seen: string; grenzen: string;
    umriss?: string; titel: string; einheit?: string; ueben?: boolean; markiert?: number;
  };
  let { breite, hoehe, flaechen, seen, grenzen, umriss, titel, einheit = 'Kanton', ueben = false, markiert }: Props = $props();

  let aktiv = $state<Flaeche | null>(null);
  let modus = $state<'erkunden' | 'ueben'>('erkunden');
  let gesucht = $state<Flaeche | null>(null);
  let antwort = $state<{ id: number; richtig: boolean } | null>(null);
  let richtig = $state(0);
  let versuche = $state(0);
  let offen = $state<Flaeche[]>([]);

  function neueFrage() {
    if (offen.length === 0) offen = [...flaechen].sort(() => Math.random() - 0.5);
    gesucht = offen[0];
    offen = offen.slice(1);
    antwort = null;
  }

  function starten() {
    modus = 'ueben';
    richtig = 0;
    versuche = 0;
    offen = [];
    neueFrage();
  }

  function waehlen(f: Flaeche, e: MouseEvent) {
    if (modus !== 'ueben' || !gesucht) return;
    e.preventDefault();
    if (antwort) return neueFrage();
    versuche++;
    const ok = f.id === gesucht.id;
    if (ok) richtig++;
    antwort = { id: f.id, richtig: ok };
  }

  const zustand = (f: Flaeche) => {
    if (modus === 'ueben' && antwort) {
      if (f.id === gesucht?.id) return 'richtig';
      if (f.id === antwort.id) return 'falsch';
    }
    if (modus === 'erkunden' && f.id === markiert) return 'markiert';
    return undefined;
  };
</script>

<figure class="karte">
  <div class="karte__kopf">
    {#if modus === 'erkunden'}
      <p class="karte__anzeige" aria-live="polite">
        {#if aktiv}<strong>{aktiv.name}</strong>{#if aktiv.info}<span>{aktiv.info}</span>{/if}{:else}<span>{titel}: {einheit} wählen</span>{/if}
      </p>
      {#if ueben}<button type="button" data-size="sm" onclick={starten}>{einheit === 'Kanton' ? 'Kantone' : 'Gemeinden'} üben</button>{/if}
    {:else}
      <p class="karte__anzeige" aria-live="polite">
        {#if antwort}
          <strong>{antwort.richtig ? 'Richtig' : 'Falsch'}</strong>
          <span>{antwort.richtig ? `Das ist ${gesucht?.name}.` : `Das war ${flaechen.find((f) => f.id === antwort?.id)?.name}. ${gesucht?.name} ist grün markiert.`} Klicke irgendwo für die nächste Frage.</span>
        {:else}
          <span>Wo liegt</span><strong>{gesucht?.name}?</strong>
        {/if}
      </p>
      <div class="karte__stand">
        <span>{richtig} von {versuche} richtig</span>
        <button type="button" data-size="sm" data-variant="ghost" onclick={() => { modus = 'erkunden'; antwort = null; }}>Beenden</button>
      </div>
    {/if}
  </div>
  <svg viewBox={`0 0 ${breite} ${hoehe}`} role="img" aria-label={titel}>
    {#each flaechen as f (f.id)}
      <a
        href={f.href}
        aria-label={f.name}
        onmouseenter={() => (aktiv = f)}
        onmouseleave={() => (aktiv = null)}
        onfocus={() => (aktiv = f)}
        onblur={() => (aktiv = null)}
        onclick={(e) => waehlen(f, e)}
      >
        <path d={f.d} data-zustand={zustand(f)} />
      </a>
    {/each}
    {#if umriss}
      <clipPath id="karte-umriss"><path d={umriss} /></clipPath>
    {/if}
    <path class="karte__seen" d={seen} clip-path={umriss ? 'url(#karte-umriss)' : undefined} />
    <path class="karte__grenzen" d={grenzen} />
  </svg>
</figure>

<style>
  .karte { margin: 0; display: grid; gap: var(--space-3); }
  .karte__kopf { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: var(--space-3); min-height: var(--space-10); }
  .karte__anzeige { margin: 0; display: flex; flex-wrap: wrap; align-items: baseline; gap: var(--space-1) var(--space-2); font: var(--font-body); letter-spacing: var(--tracking-md); }
  .karte__anzeige strong { font: var(--font-title); letter-spacing: var(--tracking-xl); }
  .karte__anzeige span { color: var(--fg-muted); }
  .karte__stand { display: flex; align-items: center; gap: var(--space-3); font: var(--font-label); letter-spacing: var(--tracking-sm); color: var(--fg-muted); font-variant-numeric: tabular-nums; }
  svg { width: 100%; height: auto; display: block; }
  a { cursor: pointer; outline: none; }
  a path { fill: var(--fill-subtle); stroke: none; transition: fill var(--duration) var(--ease); }
  a:hover path, a:focus-visible path { fill: var(--accent-tint); }
  a:focus-visible path { stroke: var(--accent-solid); stroke-width: 2; }
  path[data-zustand='markiert'] { fill: var(--accent-solid); }
  a:hover path[data-zustand='markiert'] { fill: var(--accent-solid-hover); }
  path[data-zustand='richtig'] { fill: var(--good-tint); stroke: var(--good-border); stroke-width: 2; }
  path[data-zustand='falsch'] { fill: var(--bad-tint); stroke: var(--bad-border); stroke-width: 2; }
  .karte__seen { fill: var(--fill-active); pointer-events: none; }
  .karte__grenzen { fill: none; stroke: var(--fg-subtle); stroke-width: 0.75; stroke-linejoin: round; pointer-events: none; }
</style>
