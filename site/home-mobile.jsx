// Mobile Home — section-aligned 1:1 with desktop Home V1 (home-v1.jsx)
// Same section order, copy, and composition as desktop, reflowed for ~390px width.

const HomeMobile = () => {
  const ingredients = [
    { i:'01', n:'VAMTOXIN™ Peptide', r:'SNARE-inhibiting peptide · softens expression lines', p:'2.0%' },
    { i:'02', n:'Spicule Complex',   r:'Marine micro-needle · active delivery',    p:'0.5%' },
    { i:'03', n:'Centella Asiatica', r:'Centella · soothing · barrier support',     p:'0.5%' },
    { i:'04', n:'Niacinamide',       r:'Niacinamide · tone clarity',   p:'4.0%' },
  ];
  const ritual = [
    { n:'01', t:'Cleanse',   k:'Cleanse',   d:'Morning and evening, a gentle cleanser.' },
    { n:'02', t:'Prep',      k:'Prep',   d:'A pH-balanced toner to settle the surface.' },
    { n:'03', t:'Prescribe', k:'Prescribe',   d:'VAMTOXIN™ 2% booster, once.' },
    { n:'04', t:'Seal',      k:'Seal', d:'Seal with a light cream.' },
  ];
  const products = [
    {
      t:'Peptosome Skin Booster',
      d:'All-in-one skin boosting solution, revitalized by Peptosome — VAMTOXIN™ 2.0% — softens expression lines without injection.',
      price:'₩96,000', sub:'~$72 · 50ML', img:'assets/booster-bottle-front.png', go:'shop/peptosome',
    },
    {
      t:'Spicule Wrinkle-Free Glow.',
      d:'VAMTOXIN™ 2.0% · Niacinamide · Hydroxycitric Acid — a single beam of clarity over fine lines.',
      price:'₩58,000', sub:'~$43 · 20ML', img:'assets/serum-shadow.png', go:'shop',
    },
  ];
  const hashtags = [
    { t:'#FineLineFighter', hero:true }, { t:'#SculptedBeauty' }, { t:'#ClinicalGlow' },
    { t:'#Notox', hero:true }, { t:'#BotoxInABottle' }, { t:'#SlowAging' },
    { t:'#QuietRitual' }, { t:'#PeptideDiscipline' }, { t:'#RealEfficacy', hero:true }, { t:'#SkinStillness' },
  ];
  const journal = [
    { h:'On The Quiet Discipline of Peptides', d:'How a single peptide molecule softens the texture of expression.', img:'assets/serum-pump.png', pos:'50% center' },
    { h:'In The Cabinet of A Seoul Dermatologist', d:'A prescription on the clinic shelf, and a cup of tea.', img:'assets/booster-grid.png', pos:'50% center' },
    { h:'Notox · A Verb, Not a Substitute', d:'Not an alternative to procedures, but a daily prescription that brings them home.', img:'assets/serum-roller-green.png', pos:'50% center' },
  ];
  const reviews = [
    { t:'Softer expression lines', d:'In the morning mirror I can feel the lines have softened. Without any heavy procedures, the daily texture has changed.', a:'— Kim · 38 · Seoul' },
    { t:'A bottle that listens',   d:"My skin's tension has eased since I started — morning makeup sits differently. The quietest ritual, once a day.", a:'— Y.S. · 39 · Tokyo' },
    { t:'Honest concentration',    d:'The ingredient list is generous and clear. By week six the fine lines softened. Feels like following a prescription day by day.', a:'— Park · 45 · Busan' },
  ];

  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
      <MHeader />

      {/* HERO — slogan + booster image + intro + CTAs + stats */}
      <section style={{ padding: '32px 24px 40px' }}>
        <RuleLabel align="left" color={FNX.sage}>
          <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background: FNX.labRed, marginRight: 10, verticalAlign: 'middle' }}/>
          Notox · Botox in a Bottle · Vol. 01
        </RuleLabel>
        <h1 style={{ margin: '20px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 44, lineHeight: 1.02, letterSpacing: '-0.02em' }}>
          Real Efficacy, Quietly Delivered.
        </h1>
        <p lang="ko" style={{ margin: '12px 0 0', fontSize: 13, color: FNX.sage, letterSpacing: '0.02em' }}>
          정직한 농도, 조용한 효능.
        </p>

        <div style={{ marginTop: 28 }}>
          <ProductShot src="assets/booster-hero.png" alt="Peptosome Skin Booster" height={460} bg={FNX.bone} objectPosition="50% 40%" />
        </div>

        <p style={{ marginTop: 22, fontSize: 14, lineHeight: 1.8, color: FNX.pineInk }}>
          VAMTOXIN™ Peptide 2.0% — clinic-grade care distilled into a daily ritual. Concentrations stated honestly, formulated with the quietest touch.
        </p>

        <div style={{ marginTop: 24, display: 'grid', gap: 10 }}>
          <Btn kind="primary" full data-go="shop">Shop the Collection →</Btn>
          <Btn kind="ghost" full style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go="science">Read the Science</Btn>
        </div>

        {/* stats */}
        <div style={{ marginTop: 32, paddingTop: 20, borderTop: `1px solid ${fnxRule(0.18)}`, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {[
            { k:'2.0%', v:'VAMTOXIN™ Peptide' },
            { k:'N°01', v:'Supadelixir Sole Patent' },
            { k:'8 min',v:'Daily Slow Ritual' },
          ].map(s => (
            <div key={s.k}>
              <div style={{ fontFamily: FNX.serif, fontSize: 22, letterSpacing: '0.02em', lineHeight: 1 }}>{s.k}</div>
              <div style={{ marginTop: 4, fontSize: 10, color: FNX.sage, letterSpacing: '0.06em' }}>{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THE PREMISE — pair shot + statement */}
      <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
        <ProductShot src="assets/peptosome-pair.jpg" alt="Peptosome on stone" height={300} bg={FNX.parchment} objectPosition="50% center" />
        <RuleLabel align="left" color={FNX.sage} style={{ marginTop: 24 }}>The Premise</RuleLabel>
        <p style={{ marginTop: 16, fontFamily: FNX.serif, fontSize: 23, lineHeight: 1.4, letterSpacing: '-0.01em', color: FNX.pineInk }}>
          A quiet ritual that settles into skin. Honest in concentration, quietest in touch — a prescription for the time it takes skin to find its own light.
        </p>
        <p style={{ marginTop: 16, fontSize: 13, color: FNX.sage, lineHeight: 1.7 }}>
          Finixlab brings together clinical peptide concentrations and the poetic restraint of Korean indie beauty. Ingredients arranged like a clean shelf, finish quiet as midday light.
        </p>
      </section>

      {/* 02 — THE COLLECTION */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <RuleLabel align="left" color={FNX.tan}>02 — The Collection</RuleLabel>
          <Btn kind="ghost" size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go="shop">Shop All →</Btn>
        </div>
        <h2 style={{ margin: '12px 0 24px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
          Two prescriptions, one ritual.
        </h2>
        <div style={{ display: 'grid', gap: 20 }}>
          {products.map(p => (
            <article key={p.t} style={{ background: FNX.bone, padding: 20, border: `1px solid ${fnxRule(0.12)}` }}>
              <div style={{ height: 300, overflow: 'hidden', position: 'relative', background: FNX.cream }}>
                <img src={p.img} alt={p.t} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
              </div>
              <div style={{ marginTop: 18, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 14 }}>
                <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 22, letterSpacing: '-0.01em', lineHeight: 1.15 }}>{p.t}</h3>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: FNX.serif, fontSize: 18, letterSpacing: '0.04em' }}>{p.price}</div>
                  <div style={{ marginTop: 2, fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em' }}>{p.sub}</div>
                </div>
              </div>
              <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.7, color: FNX.sage }}>{p.d}</p>
              <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
                <Btn kind="primary" full data-go="cart">Add to Bag</Btn>
                <Btn kind="ghost" size="md" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go={p.go}>Detail →</Btn>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 03 — FORMULATION */}
      <section style={{ background: FNX.cream, padding: '40px 24px', borderTop: `1px solid ${fnxRule(0.14)}` }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <RuleLabel align="left" color={FNX.tan}>03 — Formulation</RuleLabel>
          <Btn kind="ghost" size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go="shop/peptosome">View Full Formula →</Btn>
        </div>
        <h2 style={{ margin: '12px 0 24px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
          Concentration before narrative.
        </h2>
        <div style={{ height: 320, overflow: 'hidden', position: 'relative', background: FNX.cream, border: `1px solid ${fnxRule(0.12)}` }}>
          <img src="assets/serum-grid.png" alt="Spicule Serum boxes grid"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
        </div>
        <ul style={{ listStyle: 'none', margin: '24px 0 0', padding: 0 }}>
          {ingredients.map((x, idx) => (
            <li key={x.n} style={{
              display: 'grid', gridTemplateColumns: '24px 1fr auto',
              gap: 12, padding: '16px 0', alignItems: 'baseline',
              borderBottom: idx < ingredients.length - 1 ? `1px dashed ${fnxRule(0.15)}` : `1px solid ${fnxRule(0.25)}`,
            }}>
              <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.18em' }}>{x.i}</span>
              <div>
                <div style={{ fontFamily: FNX.serif, fontSize: 16, letterSpacing: '0.02em' }}>{x.n}</div>
                <div style={{ marginTop: 3, fontSize: 12, color: FNX.sage, lineHeight: 1.5 }}>{x.r}</div>
              </div>
              <div style={{ fontFamily: FNX.serif, fontSize: 16, letterSpacing: '0.06em' }}>{x.p}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* 04 — THE RITUAL */}
      <section style={{ background: FNX.pineInk, color: FNX.cream, padding: '40px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <RuleLabel align="center" color="rgba(244,239,224,0.82)">04 — The Ritual</RuleLabel>
          <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, lineHeight: 1.05 }}>
            Four steps, eight minutes.
          </h2>
        </div>
        <div style={{ display: 'grid', gap: 0 }}>
          {ritual.map(r => (
            <div key={r.n} style={{ padding: '18px 0', borderTop: '1px solid rgba(244,239,224,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                  <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.tan, letterSpacing: '0.18em' }}>{r.n}</span>
                  <span style={{ fontFamily: FNX.serif, fontSize: 20, letterSpacing: '0.02em' }}>{r.t}</span>
                </div>
                <span style={{ fontSize: 11, color: 'rgba(244,239,224,0.72)' }}>{r.k}</span>
              </div>
              <p style={{ margin: '8px 0 0', fontSize: 12, lineHeight: 1.7, color: 'rgba(244,239,224,0.85)' }}>{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 05 — REAL USERS · TESTERS */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.tan}>05 — Real Users · Testers</RuleLabel>
        <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, lineHeight: 1.05, letterSpacing: '-0.01em' }}>
          Before & After.
        </h2>
        <p style={{ margin: '14px 0 0', fontSize: 13, color: FNX.pineInk, lineHeight: 1.8 }}>
          A record from real users in their thirties and beyond. Instead of promising numbers, we present what time has left behind, in their own words.
        </p>
        <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1px 1fr', background: FNX.bone, border: `1px solid ${fnxRule(0.18)}`, height: 260 }}>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="assets/model-a-before.png" alt="Model A — before"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
          </div>
          <div style={{ background: fnxRule(0.25) }}/>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="assets/model-a-after.png" alt="Model A — after"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
          </div>
        </div>
        <div style={{ marginTop: 18 }}>
          <Btn kind="ghost" full size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go="shop/peptosome">View all reviews →</Btn>
        </div>
      </section>

      {/* 06 — THE HASHTAG LIBRARY */}
      <section style={{ background: FNX.olive, color: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color="rgba(244,239,224,0.82)">06 — The Hashtag Library</RuleLabel>
        <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 30, lineHeight: 1.05 }}>
          Words we live in lower case.
        </h2>
        <p style={{ margin: '14px 0 0', fontSize: 13, lineHeight: 1.8, color: 'rgba(244,239,224,0.82)' }}>
          Finixlab's copy culture — a brand vocabulary of English hashtags. A single word users use to name their ritual.
        </p>
        <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {hashtags.map((h, i) => (
            <span key={i} style={{
              padding: '8px 14px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 13, letterSpacing: '0.02em',
              color: h.hero ? FNX.pineInk : FNX.cream,
              background: h.hero ? FNX.cream : 'transparent',
              border: `1px solid ${h.hero ? FNX.cream : 'rgba(244,239,224,0.4)'}`,
              borderRadius: 999,
            }}>{h.t}</span>
          ))}
        </div>
      </section>

      {/* 07 — JOURNAL */}
      <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <RuleLabel align="left" color={FNX.tan}>07 — Journal</RuleLabel>
          <Btn kind="ghost" size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go="journal">All Entries →</Btn>
        </div>
        <h2 style={{ margin: '12px 0 24px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, lineHeight: 1.05 }}>
          Dispatches & Quiet Notes.
        </h2>
        {journal.map((j, i) => (
          <article key={j.h} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 14, padding: '16px 0', borderTop: i === 0 ? `1px solid ${fnxRule(0.2)}` : `1px dashed ${fnxRule(0.14)}`, alignItems: 'start' }}>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <img src={j.img} alt={j.h} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: j.pos }} />
            </div>
            <div>
              <h4 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 16, lineHeight: 1.25 }}>
                <a href="#/journal" data-go="journal" style={{ color: 'inherit', textDecoration: 'none' }}>{j.h}</a>
              </h4>
              <p style={{ margin: '8px 0 0', fontSize: 12, color: FNX.sage, lineHeight: 1.6 }}>{j.d}</p>
            </div>
          </article>
        ))}
      </section>

      {/* 08 — CUSTOMER VOICE */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <RuleLabel align="center" color={FNX.tan}>08 — Customer Voice</RuleLabel>
          <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, lineHeight: 1.05 }}>
            A few quiet sentences.
          </h2>
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ padding: 20, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <div role="img" aria-label="Rated 5 out of 5" style={{ color: FNX.pineInk, letterSpacing: '0.4em', fontSize: 12 }}>★★★★★</div>
              <h3 style={{ margin: '12px 0 8px', fontFamily: FNX.serif, fontSize: 18, fontWeight: 300, letterSpacing: '-0.01em' }}>{r.t}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.75, color: FNX.pineInk }}>{r.d}</p>
              <div style={{ marginTop: 14, fontSize: 11, color: FNX.sage }}>{r.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 09 — CLINIC PARTNERS */}
      <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.tan}>09 — Clinic Partners</RuleLabel>
        <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1, color: FNX.pineInk }}>
          In selected clinics, across four cities.
        </h2>
        <p style={{ margin: '16px 0 0', fontSize: 13, color: FNX.pineInk, lineHeight: 1.8 }}>
          Clinical partner network — Seoul · Shanghai · Tokyo · Ho Chi Minh. As a post-procedure prescription, or a daily slow-aging ritual.
        </p>
        <div style={{ marginTop: 20, height: 220, position: 'relative', border: `1px solid ${fnxRule(0.18)}`, overflow: 'hidden' }}>
          <img src="assets/peptosome-pair.jpg" alt="Clinic partners"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
        </div>
      </section>

      {/* Mini footer — shared component with clickable nav */}
      <MFooter />
    </div>
  );
};

window.HomeMobile = HomeMobile;
