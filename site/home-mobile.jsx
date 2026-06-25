// Mobile Home — adapted from V1 (Editorial), reflowed for 390px width

const HomeMobile = () => {
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
      {/* Mobile Header — shared component with a working hamburger menu */}
      <MHeader />

      {/* HERO */}
      <section style={{ padding: '32px 24px 40px' }}>
        <h1 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 200, fontSize: 44, lineHeight: 1.02, letterSpacing: '-0.02em' }}>
          Real Efficacy, Quietly Delivered.
        </h1>
        <p style={{ margin: '12px 0 0', fontSize: 13, color: FNX.sage, letterSpacing: '0.02em' }}>
          A daily ritual, in clinic-grade concentrations.
        </p>

        <div style={{ marginTop: 28 }}>
          <ProductShot src="assets/booster-hero.png" alt="Peptosome Skin Booster" height={460} bg={FNX.bone} objectPosition="50% 40%" />
        </div>

        <p style={{ marginTop: 22, fontSize: 14, lineHeight: 1.8, color: FNX.pineInk }}>
          VAMTOXIN™ Peptide 2.0% — clinical essence carried into an eight-minute daily ritual.
        </p>

        <div style={{ marginTop: 24, display: 'grid', gap: 10 }}>
          <Btn kind="primary" full>Shop Peptosome · ₩96,000</Btn>
          <Btn kind="ghost" full style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Read the Science</Btn>
        </div>

        {/* stats */}
        <div style={{ marginTop: 32, paddingTop: 20, borderTop: `1px solid ${fnxRule(0.18)}`, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {[
            { k:'2.0%', v:'VAMTOXIN™' },
            { k:'N°01', v:'Sole Patent' },
            { k:'8 min',v:'Daily Ritual' },
          ].map(s => (
            <div key={s.k}>
              <div style={{ fontFamily: FNX.serif, fontSize: 22, letterSpacing: '0.02em', lineHeight: 1 }}>{s.k}</div>
              <div style={{ marginTop: 4, fontSize: 10, color: FNX.sage, letterSpacing: '0.06em' }}>{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MOOD STATEMENT */}
      <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.sage}>The Premise</RuleLabel>
        <p style={{ marginTop: 16, fontFamily: FNX.serif, fontSize: 22, lineHeight: 1.4, letterSpacing: '-0.01em', color: FNX.pineInk }}>
          The essence of procedures becomes a daily ritual. A quiet ritual that settles into skin.
        </p>
        <p style={{ marginTop: 14, fontSize: 13, color: FNX.sage, lineHeight: 1.7 }}>
          Honest in concentration, quietest in touch — a prescription for the time it takes skin to find its own light.
        </p>
      </section>

      {/* INGREDIENT SPOTLIGHT */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.tan}>02 — Formulation</RuleLabel>
        <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
          Concentration<br/>before narrative.
        </h2>
        <ul style={{ listStyle: 'none', margin: '28px 0 0', padding: 0 }}>
          {[
            { i:'01', n:'VAMTOXIN™ Peptide', r:'SNARE-inhibiting peptide', p:'2.0%' },
            { i:'02', n:'Spicule Complex',   r:'Marine micro-needle',         p:'0.5%' },
            { i:'03', n:'Centella Asiatica', r:'Centella extract',         p:'0.5%' },
            { i:'04', n:'Niacinamide',       r:'Tone clarity',      p:'4.0%' },
          ].map((x, idx, arr) => (
            <li key={x.n} style={{
              display: 'grid', gridTemplateColumns: '24px 1fr auto',
              gap: 12, padding: '14px 0',
              borderBottom: `1px dashed ${fnxRule(0.15)}`,
              alignItems: 'baseline',
            }}>
              <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.tan, letterSpacing: '0.18em' }}>{x.i}</span>
              <div>
                <div style={{ fontFamily: FNX.serif, fontSize: 15, letterSpacing: '0.02em' }}>
                  {x.n}
                </div>
                <div style={{ marginTop: 2, fontSize: 12, color: FNX.sage }}>{x.r}</div>
              </div>
              <div style={{ fontFamily: FNX.serif, fontSize: 15, letterSpacing: '0.06em' }}>{x.p}</div>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 18 }}>
          <Btn kind="ghost" full size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>View Full Formula →</Btn>
        </div>
      </section>

      {/* RITUAL */}
      <section style={{ background: FNX.pineInk, color: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color="rgba(244,239,224,0.82)">03 — The Ritual</RuleLabel>
        <h2 style={{ margin: '12px 0 24px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, lineHeight: 1.05 }}>
          Four steps, eight minutes.
        </h2>
        <div style={{ display: 'grid', gap: 0 }}>
          {[
            { n:'01', t:'Cleanse',   k:'Cleanse',   d:'Morning and evening, a gentle cleanser.' },
            { n:'02', t:'Prep',      k:'Prep',   d:'One pass of pH-balanced toner.' },
            { n:'03', t:'Prescribe', k:'Prescribe',   d:'VAMTOXIN™ 2%, once.' },
            { n:'04', t:'Seal',      k:'Seal', d:'Seal with a light cream.' },
          ].map(r => (
            <div key={r.n} style={{ padding: '18px 0', borderTop: '1px solid rgba(244,239,224,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                  <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.tan, letterSpacing: '0.18em' }}>{r.n}</span>
                  <span style={{ fontFamily: FNX.serif, fontSize: 20, letterSpacing: '0.02em' }}>{r.t}</span>
                </div>
                <span style={{ fontSize: 11, color: 'rgba(244,239,224,0.55)' }}>{r.k}</span>
              </div>
              <p style={{ margin: '8px 0 0', fontSize: 12, lineHeight: 1.7, color: 'rgba(244,239,224,0.85)' }}>{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER — testers */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.tan}>04 — Real Users</RuleLabel>
        <h2 style={{ margin: '12px 0 16px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.05 }}>
          Before & After.
        </h2>
        <p style={{ margin: '0 0 18px', fontSize: 13, color: FNX.sage, lineHeight: 1.7 }}>
          Tester records — in their own words, not numbers.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <div style={{ aspectRatio: '1/1', position: 'relative', overflow: 'hidden', border: `1px solid ${fnxRule(0.18)}` }}>
            <img src="assets/model-c-before.png" alt="Model C — before"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
          </div>
          <div style={{ aspectRatio: '1/1', position: 'relative', overflow: 'hidden', border: `1px solid ${fnxRule(0.18)}` }}>
            <img src="assets/model-c-after.png" alt="Model C — after"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
          </div>
        </div>

        <ul style={{ listStyle: 'none', margin: '20px 0 0', padding: 0, display: 'grid', gap: 12 }}>
          {[
            '"The roller glide is precise; mornings feel quiet." — Kyung, Seoul',
            '"The next step lays differently on top." — Min, Busan',
            `"Now I see what a single prescription can be." — Seo, Seoul`,
          ].map((q, i) => (
            <li key={i} style={{ fontFamily: FNX.serif, fontSize: 12, lineHeight: 1.65, color: FNX.pineInk, paddingLeft: 12, borderLeft: `1px solid ${FNX.tan}` }}>{q}</li>
          ))}
        </ul>
      </section>

      {/* JOURNAL */}
      <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.tan}>05 — Journal</RuleLabel>
        <h2 style={{ margin: '12px 0 24px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.05 }}>
          Dispatches.
        </h2>
        {[
          { t:'N°012', cat:'Slow Aging', h:'On The Quiet Discipline of Peptides', img: 'assets/serum-pump.png', pos:'50% center' },
          { t:'N°011', cat:'Interview',  h:'In The Cabinet of A Seoul Dermatologist', img: 'assets/booster-grid.png', pos:'50% center' },
          { t:'N°010', cat:'Method',     h:'Notox · A Verb, Not a Substitute', img: 'assets/serum-roller-green.png', pos:'50% center' },
        ].map((j, i) => (
          <article key={j.t} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 14, padding: '14px 0', borderTop: i === 0 ? `1px solid ${fnxRule(0.2)}` : `1px dashed ${fnxRule(0.14)}`, alignItems: 'start' }}>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <img src={j.img} alt={j.h} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: j.pos }} />
            </div>
            <div>
              <h4 style={{ margin: '6px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 16, lineHeight: 1.25 }}>{j.h}</h4>
            </div>
          </article>
        ))}
      </section>

      

      {/* Mini footer — shared component with clickable nav */}
      <MFooter />
    </div>
  );
};

window.HomeMobile = HomeMobile;
