// Science — VAMTOXIN™ deep dive + Notox method

const SciencePage = () => {
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />

      {/* HERO */}
      <section style={{ background: FNX.pineInk, color: FNX.cream, padding: '88px 56px 100px', position: 'relative' }}>
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'end', paddingTop: 24 }}>
          <div>
            <RuleLabel align="left" color={fnxCream(0.55)}>The Science</RuleLabel>
            <h1 style={{ ...T.h1, margin: '24px 0 0', color: FNX.cream }}>
              VAMTOXIN™ 2.0% — a quiet molecule.
            </h1>
            <p style={{ marginTop: 28, fontSize: 16, lineHeight: 1.85, color: fnxCream(0.85), maxWidth: '52ch' }}>
              A SNARE-inhibiting hexapeptide that acts on micro-contractions in expression muscles. An injection-free prescription — the exact work of a molecule that quiets the surface.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
              <Btn kind="inverse" size="lg">Read the Patent Story</Btn>
              <Btn kind="ghost" size="lg" style={{ color: FNX.cream, borderColor: FNX.cream }}>Shop Peptosome →</Btn>
            </div>
          </div>
          {/* Big SNARE diagram */}
          <div style={{ aspectRatio: '1/1', background: `repeating-linear-gradient(135deg, ${fnxCream(0.06)} 0 14px, transparent 14px 28px)`, border: `1px solid ${fnxCream(0.18)}`, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: FNX.mono, fontSize: 12, color: fnxCream(0.72), letterSpacing: '0.14em' }}>FIG. 01 — VAMTOXIN™ ON SNARE</div>
              </div>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 280 280" style={{ width: 380, height: 380 }}>
                  <circle cx="140" cy="140" r="110" fill="none" stroke={FNX.cream} strokeWidth="0.6" opacity="0.3" />
                  <circle cx="140" cy="140" r="70"  fill="none" stroke={FNX.cream} strokeWidth="0.6" opacity="0.5" />
                  <circle cx="140" cy="140" r="40"  fill="none" stroke={FNX.cream} strokeWidth="0.8" opacity="0.7" />
                  <circle cx="140" cy="140" r="10"  fill={FNX.labRed} />
                  <line x1="40" y1="140" x2="240" y2="140" stroke={FNX.cream} strokeWidth="0.4" opacity="0.3" />
                  <line x1="140" y1="40" x2="140" y2="240" stroke={FNX.cream} strokeWidth="0.4" opacity="0.3" />
                  <text x="155" y="138" fontFamily="ui-monospace" fontSize="6" fill={fnxCream(0.82)}>VAMTOXIN™</text>
                  <text x="36" y="265" fontFamily="ui-monospace" fontSize="6" fill={fnxCream(0.55)}>Synaptic Membrane</text>
                  <text x="36" y="80" fontFamily="ui-monospace" fontSize="6" fill={fnxCream(0.55)}>Synaptic Vesicle</text>
                  <text x="180" y="80" fontFamily="ui-monospace" fontSize="6" fill={fnxCream(0.55)}>SNAP-25</text>
                </svg>
              </div>
              <div style={{ fontFamily: FNX.mono, fontSize: 12, color: fnxCream(0.72), letterSpacing: '0.14em', textAlign: 'right' }}>
                Schematic · not to scale
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MECHANISM — 4 steps */}
      <Section bg={FNX.cream} padding="120px 40px">
        <RuleLabel align="left" color={FNX.tan}>01 — The Mechanism</RuleLabel>
        <h2 style={{ ...T.h2, margin: '14px 0 40px', color: FNX.pineInk }}>
          Quiet expression, at the protein level.
        </h2>
        <div className="r4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            { n:'01', t:'Receptor Bind',    d:"VAMTOXIN™'s hexapeptide residues bind to SNAP-25." },
            { n:'02', t:'SNARE Inhibit',    d:'Temporarily slows SNARE complex formation.' },
            { n:'03', t:'Quiet Expression', d:'Micro-contractions in expression muscles gently settle.' },
            { n:'04', t:'Skin Stillness',   d:'Wrinkle depth measurably softens; the surface settles.' },
          ].map(s => (
            <div key={s.n} style={{ paddingTop: 24, borderTop: `1px solid ${fnxRule(0.18)}` }}>
              <h3 style={{ margin: '14px 0 8px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 22 }}>{s.t}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: FNX.sage }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MOLECULE FACTS */}
      <Section bg={FNX.parchment} padding="100px 40px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 80 }}>
          {[
            ['INCI Name', 'Acetyl Hexapeptide-8 derivative'],
            ['Class', 'SNARE-mimicking peptide'],
            ['Molecular Weight', '888.05 Da'],
            ['Charge at pH 5.5', 'Net +1'],
            ['Concentration', '2.0% (20,000 ppm)'],
            ['Permeation', 'Stratum corneum · with Spicule carrier'],
            ['Stability', '24 months · sealed, 25°C'],
            ['Compatibility', 'Niacinamide, HA, Centella, Vitamin B5'],
          ].map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24, alignItems: 'baseline', padding: '18px 0', borderBottom: `1px dashed ${fnxRule(0.18)}` }}>
              <div style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage }}>{row[0]}</div>
              <div style={{ fontFamily: FNX.serif, fontSize: 17, color: FNX.pineInk, letterSpacing: '0.02em' }}>{row[1]}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* PATENT STORY — Supadelixir VAMTOXIN™ */}
      <Section bg={FNX.cream} padding="120px 40px">
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 48, borderBottom: `1px solid ${fnxRule(0.2)}`, paddingBottom: 22 }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>03 — The Patent</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.pineInk }}>Sole patent, single source.</h2>
            <p style={{ margin: '12px 0 0', color: FNX.sage, fontSize: 14 }}>VAMTOXIN™ is an ingredient held exclusively by Supadelixir.</p>
          </div>
        </div>

        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>
          <div>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <img src="assets/booster-box-front.png" alt="VAMTOXIN™ Patent"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
            </div>
          </div>

          <div>
            <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.2 }}>
              Exclusively licensed,<br/>precisely formulated.
            </h3>
            <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.9, color: FNX.pineInk, maxWidth: '52ch' }}>
              VAMTOXIN™ is a hexapeptide that mimics the mechanism of Botulinum Toxin. Supadelixir holds the ingredient exclusively; Finixlab formulates it — an injection-free prescription at 2.0%.
            </p>

            <div style={{ marginTop: 36, display: 'grid', gap: 0 }}>
              {[
                { l:'Sole Holder',    v:'Supadelixir' },
                { l:'Mechanism',      v:'SNARE complex inhibition — temporary expression softening' },
                { l:'Design Class',   v:'Botulinum-toxin mimetic hexapeptide' },
                { l:'Concentration',  v:'2.0% — Finixlab exclusive license' },
                { l:'Carrier System', v:'Spicule Complex 0.5% — injection-free delivery' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24, padding: '18px 0', borderTop: `1px solid ${fnxRule(0.18)}`, borderBottom: i === 4 ? `1px solid ${fnxRule(0.18)}` : 'none' }}>
                  <span style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage }}>{row.l}</span>
                  <span style={{ fontFamily: FNX.serif, fontSize: 16, color: FNX.pineInk, letterSpacing: '0.02em' }}>{row.v}</span>
                </div>
              ))}
            </div>

            <p style={{ marginTop: 24, fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em', lineHeight: 1.7 }}>
              * Efficacy certification is in preparation. Ingredient design and concentration are stated on the label.
            </p>
          </div>
        </div>
      </Section>

      {/* NOTOX METHOD */}
      <Section bg={FNX.olive} padding="120px 40px" style={{ color: FNX.cream }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={fnxCream(0.55)}>04 — Notox Method</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.cream }}>
              Notox — a verb, not a substitute.
            </h2>
            <p style={{ marginTop: 24, fontSize: 15, lineHeight: 1.85, color: fnxCream(0.85), maxWidth: '48ch' }}>
              We never claim to replace procedures. We simply fill the days between them with a daily prescription. Alongside clinical treatments, or as a daily slow-aging ritual — both in the same place.
            </p>
            <div style={{ marginTop: 32 }}>
              <Btn kind="inverse">Read the Method →</Btn>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, fontFamily: FNX.sans }}>
            {[
              { t:'In-Clinic',  d:'A prescription that accelerates post-procedure recovery.', tag:'AFTER PROCEDURE' },
              { t:'At-Home',    d:'For days between procedures, an eight-minute daily ritual.', tag:'DAILY RITUAL' },
              { t:'Layered',    d:'High-concentration peptide layered with hydration and soothing actives.', tag:'LAYERING' },
              { t:'Quiet',      d:"Doesn't interfere with whatever comes next.", tag:'LIGHTWEIGHT' },
            ].map((c, i) => (
              <div key={i} style={{ padding: 24, border: `1px solid ${fnxCream(0.2)}` }}>
                <div style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.tan, letterSpacing: '0.14em' }}>{c.tag}</div>
                <h3 style={{ margin: '14px 0 10px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 22 }}>{c.t}</h3>
                <p style={{ margin: 0, fontSize: 12, lineHeight: 1.7, color: fnxCream(0.82) }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* DOWNLOADS */}
      <Section bg={FNX.cream} padding="100px 40px">
        <RuleLabel align="left" color={FNX.tan}>05 — Documents</RuleLabel>
        <h2 style={{ ...T.h2, margin: '14px 0 32px', color: FNX.pineInk }}>For the curious.</h2>
        <div className="r3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { t:'VAMTOXIN™ Whitepaper',          s:'PDF · 1.1 MB · 11 pages', tag:'SCIENCE' },
            { t:'Patent Story — Supadelixir',     s:'PDF · 0.8 MB · 6 pages',  tag:'INGREDIENT' },
            { t:'Full INCI Sheet — Peptosome 50ml', s:'PDF · 0.4 MB · 2 pages',  tag:'FORMULATION' },
          ].map((d, i) => (
            <a key={d.t} href="#" style={{
              display: 'block', padding: 24, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`,
              textDecoration: 'none', color: FNX.pineInk,
            }}>
              <div style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.labRed, letterSpacing: '0.24em' }}>{d.tag}</div>
              <h3 style={{ margin: '16px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 22, lineHeight: 1.2 }}>{d.t}</h3>
              <div style={{ marginTop: 18, paddingTop: 14, borderTop: `1px solid ${fnxRule(0.14)}`, display: 'flex', justifyContent: 'space-between', fontSize: 12, color: FNX.sage, fontFamily: FNX.serif, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                <span>{d.s}</span>
                <span>Download ↓</span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <SiteFooter variant="pine" />
    </div>
  );
};

window.SciencePage = SciencePage;
