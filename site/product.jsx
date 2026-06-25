// Product Detail — Peptosome Skin Booster

const ProductPage = () => {
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />

      {/* Breadcrumb */}
      <div style={{ padding: '20px 40px', borderBottom: `1px solid ${fnxRule(0.12)}`, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage, display: 'flex', gap: 12 }}>
        <span>Shop</span><span>/</span><span>Boosters</span><span>/</span><span style={{ color: FNX.pineInk }}>Peptosome Skin Booster</span>
      </div>

      {/* HERO — gallery left, buy block right */}
      <section style={{ background: FNX.cream, padding: '56px 40px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>
          {/* Gallery */}
          <div>
            <div style={{ height: 720, background: FNX.bone, position: 'relative', overflow: 'hidden', border: `1px solid ${fnxRule(0.12)}` }}>
              <img src="assets/booster-hero.png" alt="Peptosome Skin Booster"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }} />
            </div>
            <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {[
                { src: 'assets/peptosome-pair.jpg',       pos: '50% 30%', sel: false },
                { src: 'assets/booster-grid.png',         pos: '50% center', sel: false },
                { src: 'assets/booster-hero.png',         pos: '50% 40%', sel: true  },
                { src: 'assets/booster-bottle-front.png', pos: '50% center', sel: false },
              ].map((t, i) => (
                <div key={i} style={{
                  aspectRatio: '1/1', overflow: 'hidden', position: 'relative',
                  background: FNX.bone, border: `1px solid ${t.sel ? FNX.pineInk : fnxRule(0.12)}`,
                  cursor: 'pointer',
                }}>
                  <img src={t.src} alt=""  role="presentation"  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: t.pos }} />
                </div>
              ))}
            </div>
          </div>

          {/* Buy block */}
          <aside style={{ position: 'sticky', top: 24 }}>
            <h1 style={{ ...T.h1, margin: '14px 0 0', color: FNX.pineInk }}>
              Peptosome Skin Booster.
            </h1>
            <p style={{ marginTop: 14, fontSize: 14, color: FNX.sage }}>
              All-in-one skin boosting solution, revitalized by Peptosome.
            </p>

            {/* rating */}
            <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 12, fontSize: 12 }}>
              <span style={{ color: FNX.labRed, letterSpacing: '0.36em' }}>★★★★★</span>
              <span style={{ color: FNX.sage }}>4.92 / 612 reviews</span>
            </div>

            {/* price */}
            <div style={{ marginTop: 28, paddingTop: 20, borderTop: `1px solid ${fnxRule(0.2)}`, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: FNX.serif, fontSize: 36, letterSpacing: '0.02em' }}>₩96,000 <span style={{ fontSize: 14, color: FNX.sage, marginLeft: 4 }}>/ ~$72</span></span>
              <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>50 ML · 1.7 FL.OZ</span>
            </div>

            {/* size selector */}
            <div style={{ marginTop: 24 }}>
              <div style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.sage, marginBottom: 10 }}>Size</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <button style={{ padding: '14px 16px', border: `1px solid ${FNX.pineInk}`, background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.12em', textAlign: 'left' }}>50ml · Standard</button>
                <button style={{ padding: '14px 16px', border: `1px solid ${fnxRule(0.18)}`, background: 'transparent', color: FNX.sage, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.12em', textAlign: 'left' }}>5ml · Sample <span style={{ color: FNX.pineInk, marginLeft: 6 }}>+ ₩4,000</span></button>
              </div>
            </div>

            {/* quantity */}
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${fnxRule(0.18)}`, paddingBottom: 16 }}>
              <span style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.sage }}>Quantity</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, border: `1px solid ${fnxRule(0.2)}`, padding: '4px 10px' }}>
                <button style={{ background: 'none', border: 'none', fontSize: 16, padding: '4px 6px', cursor: 'pointer', color: FNX.pineInk }}>−</button>
                <span style={{ fontFamily: FNX.serif, fontSize: 14, minWidth: 14, textAlign: 'center' }}>1</span>
                <button style={{ background: 'none', border: 'none', fontSize: 16, padding: '4px 6px', cursor: 'pointer', color: FNX.pineInk }}>+</button>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ marginTop: 22, display: 'grid', gap: 10 }}>
              <Btn kind="primary" size="lg" full>Add to Bag · ₩96,000</Btn>
              <Btn kind="ghost" size="md" full style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Subscribe & Save 15%</Btn>
            </div>

            {/* perks */}
            <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 12, color: FNX.sage, lineHeight: 1.7 }}>
              <div>↳ Free shipping over ₩60,000</div>
              <div>↳ Free samples in every order</div>
              <div>↳ 30-day return on unopened</div>
              <div>↳ Worldwide ships</div>
            </div>

            {/* highlights */}
            <div style={{ marginTop: 28, padding: '20px 0', borderTop: `1px solid ${fnxRule(0.2)}`, borderBottom: `1px solid ${fnxRule(0.2)}` }}>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10, fontSize: 13 }}>
                {[
                  { k:'2.0%', v:'VAMTOXIN™ Peptide — SNARE-inhibiting peptide' },
                  { k:'4.0%', v:'Niacinamide — tone clarity' },
                  { k:'○',   v:'Roller applicator — along the grain' },
                  { k:'KR',   v:'Made in Seoul · Cruelty-free · Vegan' },
                ].map((h, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 14, alignItems: 'baseline' }}>
                    <span style={{ fontFamily: FNX.serif, fontSize: 15, letterSpacing: '0.04em', color: FNX.pineInk }}>{h.k}</span>
                    <span style={{ color: FNX.pineInk }}>{h.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* DESCRIPTION */}
      <Section bg={FNX.parchment} padding="100px 40px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <RuleLabel align="left" color={FNX.sage}>The Booster · 01</RuleLabel>
          <div>
            <h2 style={{ ...T.h2, margin: 0, color: FNX.pineInk }}>
              An all-in-one prescription, in a bottle that doesn't shout.
            </h2>
            <p style={{ marginTop: 24, fontSize: 15, lineHeight: 1.85, color: FNX.pineInk, maxWidth: '60ch' }}>
              Peptosome Skin Booster is built around VAMTOXIN™ Peptide 2.0%. A SNARE-inhibiting peptide quiets micro-contractions in expression muscles, Niacinamide 4% evens tone, and the Spicule Complex carries efficacy into the dermis.
            </p>
            <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.85, color: FNX.sage, maxWidth: '60ch' }}>
              Once daily, after toner. A lightweight texture that won't interfere with whatever comes next. Quietest feel, most honest concentration.
            </p>
          </div>
        </div>
      </Section>

      {/* INGREDIENTS — full INCI */}
      <Section bg={FNX.cream} padding="120px 40px">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32, paddingBottom: 22, borderBottom: `1px solid ${fnxRule(0.2)}` }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>02 — Formulation</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.pineInk }}>The full prescription.</h2>
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: FNX.sans, fontSize: 14 }}>
          <thead>
            <tr style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage, textAlign: 'left' }}>
              <th style={{ padding: '12px 0', borderBottom: `1px solid ${fnxRule(0.25)}`, width: 48 }}>No.</th>
              <th style={{ padding: '12px 0', borderBottom: `1px solid ${fnxRule(0.25)}` }}>Ingredient</th>
              <th style={{ padding: '12px 0', borderBottom: `1px solid ${fnxRule(0.25)}` }}>Function</th>
              <th style={{ padding: '12px 0', borderBottom: `1px solid ${fnxRule(0.25)}`, textAlign: 'right', width: 100 }}>%</th>
            </tr>
          </thead>
          <tbody>
            {[
              { i:'01', n:'VAMTOXIN™ Peptide', r:'Acetyl Hexapeptide-8 derivative · SNARE inhibitor',  p:'2.0%', hero:true },
              { i:'02', n:'Spicule Complex',   r:'Marine sponge micro-needles · delivery aid',        p:'0.5%' },
              { i:'03', n:'Centella Asiatica', r:'Madecassoside · TECA · soothing',                     p:'0.5%' },
              { i:'04', n:'Niacinamide',       r:'Vitamin B3 · tone · clarity',                     p:'4.0%' },
              { i:'05', n:'Sodium Hyaluronate',r:'Tri-weight · hydration matrix',                       p:'1.2%' },
              { i:'06', n:'Panthenol',         r:'Pro-Vitamin B5 · barrier support',                       p:'2.0%' },
            ].map((f, i) => (
              <tr key={f.n} style={{ borderBottom: `1px dashed ${fnxRule(0.12)}` }}>
                <td style={{ padding: '20px 0', fontFamily: FNX.mono, fontSize: 12, color: FNX.tan, letterSpacing: '0.14em' }}>{f.i}</td>
                <td style={{ padding: '20px 0', fontFamily: FNX.serif, fontSize: 18, letterSpacing: '0.04em', color: FNX.pineInk }}>
                  {f.n}
                  {f.hero && <span style={{ marginLeft: 12, fontSize: 12, color: FNX.labRed, letterSpacing: '0.16em', textTransform: 'uppercase', verticalAlign: 2 }}>Hero</span>}
                </td>
                <td style={{ padding: '20px 0', fontSize: 13, color: FNX.sage }}>{f.r}</td>
                <td style={{ padding: '20px 0', fontFamily: FNX.serif, fontSize: 18, textAlign: 'right', letterSpacing: '0.06em' }}>{f.p}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: 18, fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>
          * Full INCI of 23 ingredients — Water, Glycerin, Butylene Glycol, Niacinamide, … See PDF below for full ingredient dictionary.
        </div>
      </Section>

      {/* HOW TO USE — ritual */}
      <Section bg={FNX.pineInk} padding="120px 40px" style={{ color: FNX.cream }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <RuleLabel align="center" color="rgba(244,239,224,0.82)">03 — How to Use</RuleLabel>
          <h2 style={{ ...T.h2, margin: '18px 0 0', color: FNX.cream }}>One step in a four-step ritual.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            { n:'01', t:'Cleanse',   k:'Cleanse',   d:'Morning and evening, a gentle cleanser.', active: false },
            { n:'02', t:'Prep',      k:'Prep',   d:'One pass of pH-balanced toner.', active: false },
            { n:'03', t:'Prescribe', k:'Prescribe',   d:'Two to three pumps of Peptosome, with the grain of skin.', active: true },
            { n:'04', t:'Seal',      k:'Seal', d:'Seal with a light cream.', active: false },
          ].map(s => (
            <div key={s.n} style={{
              padding: '24px 20px', borderTop: `1px solid ${s.active ? FNX.labRed : 'rgba(244,239,224,0.25)'}`,
              background: s.active ? 'rgba(244,239,224,0.06)' : 'transparent',
            }}>
              <h3 style={{ margin: '14px 0 4px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26 }}>{s.t}</h3>
              <div style={{ color: 'rgba(244,239,224,0.55)', fontSize: 12, letterSpacing: '0.04em', marginBottom: 12 }}>{s.k}</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(244,239,224,0.85)', margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ROLLER USE — applicator demo */}
      <Section bg={FNX.parchment} padding="120px 40px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>04 — Roller Applicator</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.pineInk }}>
              The roller remembers the angle.
            </h2>
            <p style={{ marginTop: 20, fontSize: 14, lineHeight: 1.85, color: FNX.pineInk, maxWidth: '40ch' }}>
              A stainless steel roller at the bottle top — rolling along the grain disperses the formula evenly, and leaves no fingerprint oil for the quietest finish.
            </p>
            <ol style={{ listStyle: 'none', padding: 0, margin: '28px 0 0', display: 'grid', gap: 12, fontSize: 13 }}>
              {[
                'Pump one or two drops onto the roller to form a small reservoir.',
                'Broad areas (cheeks · forehead) — inside to outside, gently.',
                'Detail areas (around eyes and mouth) — like drawing with a fine pen.',
                'Finish by pressing evenly with palms to seal.',
              ].map((s, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 14, paddingBottom: 10, borderBottom: `1px dashed ${fnxRule(0.15)}` }}>
                  <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.labRed, letterSpacing: '0.14em' }}>0{i+1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, height: 480 }}>
            {[
              { c:'Pump onto roller', l:'01', src: 'assets/serum-pump.png',         pos: '50% center' },
              { c:'Roll along the grain', l:'02', src: 'assets/serum-roller-green.png', pos: '50% center' },
              { c:'Press to settle',      l:'03', src: 'assets/serum-shadow.png',       pos: '50% center' },
            ].map((p, i) => (
              <div key={i} style={{
                background: FNX.bone,
                border: `1px solid ${fnxRule(0.18)}`, position: 'relative', overflow: 'hidden',
              }}>
                <img src={p.src} alt={p.c}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* REAL USERS — testers (replaces clinical) */}
      <Section bg={FNX.cream} padding="120px 40px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>05 — Real Users · Testers</RuleLabel>
            <h2 style={{ ...T.h2, margin: '18px 0 0', color: FNX.pineInk }}>
              Before & After.
            </h2>
            <p style={{ marginTop: 18, color: FNX.pineInk, fontSize: 14, lineHeight: 1.8, maxWidth: '44ch' }}>
              A record from users in their thirties and beyond. Not numbers — the sentences time has left behind.
            </p>
            <ul style={{ listStyle: 'none', margin: '28px 0 0', padding: 0, display: 'grid', gap: 14 }}>
              {[
                '"The roller glide is precise; mornings are especially quiet." — Kyung, Seoul',
                '"The texture absorbs fully before the next step." — Min, Busan',
                `"Now I see what a single prescription can be." — Seo, Seoul`,
              ].map((q, i) => (
                <li key={i} style={{ fontFamily: FNX.serif, fontSize: 14, lineHeight: 1.7, color: FNX.pineInk, paddingLeft: 16, borderLeft: `1px solid ${FNX.tan}` }}>{q}</li>
              ))}
            </ul>
            <p style={{ marginTop: 22, fontSize: 12, color: FNX.sage, letterSpacing: '0.04em' }}>
              * Individual experiences vary. These are user testimonies, not certified efficacy data.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, height: 480 }}>
            <div style={{ position: 'relative', overflow: 'hidden', border: `1px solid ${fnxRule(0.18)}` }}>
              <img src="assets/model-b-before.png" alt="Model B — before"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', border: `1px solid ${fnxRule(0.18)}` }}>
              <img src="assets/model-b-after.png" alt="Model B — after"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
            </div>
          </div>
        </div>
      </Section>

      {/* REVIEWS */}
      <Section bg={FNX.parchment} padding="120px 40px">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40, borderBottom: `1px solid ${fnxRule(0.2)}`, paddingBottom: 22 }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>06 — Reviews</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.pineInk }}>4.92 ★ / 612 reviews</h2>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage }}>
            <span>Filter:</span>
            {['All', 'Photo', '5★', '4★'].map((f, i) => (
              <span key={f} style={{ padding: '6px 12px', border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.18)}`, color: i === 0 ? FNX.pineInk : FNX.sage, borderRadius: 999 }}>{f}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {[
            { r:5, t:'Softer expression lines', a:'Kim · 38 · Seoul · Week 6', d:"In the morning mirror I can feel the lines have softened. Without any heavy procedures, the daily texture has changed." },
            { r:5, t:'Skin that feels quiet', a:'M.T · 36 · Shanghai · Week 7', d:"Since switching, my skin's condition has improved — I look forward to morning care. The words quiet and steady come to mind." },
            { r:5, t:'Honest concentration', a:'Park · 45 · Busan · Week 8', d:"The ingredient list is generous and clear. By week six the fine lines softened. Feels like following a prescription day by day." },
            { r:5, t:'Gentle even for sensitive skin', a:'Y.S · 39 · Tokyo · 6wk', d:"Low irritation, skin texture comes together. Morning makeup sits differently. The quietest ritual of the day." },
          ].map((r, i) => (
            <div key={i} style={{ padding: 32, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ color: FNX.labRed, letterSpacing: '0.4em', fontSize: 12 }}>★★★★★</span>
                <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>VERIFIED</span>
              </div>
              <h3 style={{ margin: '14px 0 12px', fontFamily: FNX.serif, fontSize: 22, fontWeight: 300, letterSpacing: '-0.01em' }}>{r.t}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.85, color: FNX.pineInk }}>{r.d}</p>
              <div style={{ marginTop: 16, fontSize: 12, color: FNX.sage, letterSpacing: '0.06em' }}>{r.a}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Load More Reviews</Btn>
        </div>
      </Section>

      {/* RELATED — Spicule serum */}
      <Section bg={FNX.cream} padding="100px 40px">
        <RuleLabel align="left" color={FNX.tan}>07 — Pair Well With</RuleLabel>
                <h2 style={{ ...T.h2, margin: '14px 0 40px', color: FNX.pineInk }}>Continue the ritual.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { src:'assets/serum-trio.png', t:'Spicule Wrinkle-Free Glow Serum', n:'N°02', p:'₩58,000', s:'20ml', pos: '50% center' },
            { src:'assets/peptosome-pair.jpg', t:'Peptosome — Couple Set', n:'SET', p:'₩172,800 (−10%)', s:'50ml × 2', pos: '50% 30%' },
            { src:'assets/duo-on-stone.jpg', t:'The Collection — Duo', n:'SET', p:'₩142,000 (−8%)', s:'50ml + 20ml', pos: '50% center' },
          ].map((p, i) => (
            <article key={p.t} style={{ background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
                <img src={p.src} alt={p.t} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 22, lineHeight: 1.2 }}>{p.t}</h3>
                <div style={{ marginTop: 12, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: FNX.serif, fontSize: 16 }}>{p.p}</span>
                  <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.16em' }}>{p.s}</span>
                </div>
                <div style={{ marginTop: 18 }}>
                  <Btn kind="ghost" full size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Detail →</Btn>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <SiteFooter variant="pine" />
    </div>
  );
};

window.ProductPage = ProductPage;
