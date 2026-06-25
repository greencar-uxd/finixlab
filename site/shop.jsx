// Shop Index — Product List

const ShopPage = () => {
  const products = [
    {
      n:'N°01', t:'Peptosome Skin Booster',
      tagline:'All-in-one skin boosting solution, revitalized by Peptosome.',
      desc:'A booster that keeps expressions soft.',
      price:'₩96,000', size:'50ml',
      img:'assets/booster-bottle-front.png', pos:'50% center',
      tags:['Hero', 'VAMTOXIN™ 2%', 'Bestseller'],
      stock:'In stock',
      cat:'Booster',
    },
    {
      n:'N°02', t:'Spicule Wrinkle-Free Glow Serum',
      tagline:'Radiant Renewal. VAMTOXIN™ 20,000ppm · Hydro Niamid™.',
      desc:'Clarity that settles over fine lines.',
      price:'₩58,000', size:'20ml',
      img:'assets/serum-quartet.png', pos:'50% center',
      tags:['New', 'Hydro Niamid™', 'Spot Care'],
      stock:'In stock',
      cat:'Serum',
    },
    {
      n:'N°03', t:'Notox Cream — Coming Soon',
      tagline:'The final seal. VAMTOXIN™ 1.5% in a velvet cream.',
      desc:'A final seal, the lightest cream.',
      price:'TBA', size:'50ml',
      img:'assets/duo-on-stone.jpg', pos:'50% 70%',
      tags:['Coming · FW 26', 'Cream'],
      stock:'Notify me',
      cat:'Cream',
      muted:true,
    },
  ];

  const sets = [
    {
      n:'SET-01', t:'Peptosome — Couple Set',
      info:'50ml × 2', price:'₩172,800', save:'−10%',
      img:'assets/peptosome-pair.jpg', pos:'50% 30%',
    },
    {
      n:'SET-02', t:'The Collection — Duo',
      info:'50ml + 20ml', price:'₩142,000', save:'−8%',
      img:'assets/duo-on-stone.jpg', pos:'50% center',
    },
    {
      n:'SET-03', t:'Sample Trial — Try All',
      info:'5ml × 2 · with usage card', price:'₩12,000',
      img:'assets/serum-box-single.png', pos:'50% center',
    },
  ];

  const filters = {
    Category: ['All', 'Booster', 'Serum', 'Cream', 'Sets'],
    Concern:  ['All', 'Slow Aging', 'Texture', 'Wrinkle', 'Glow', 'Hydration'],
    Format:   ['All', 'Bottle', 'Tube', 'Sample'],
  };

  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />

      {/* MASTHEAD */}
      <section style={{ background: FNX.cream, padding: '64px 40px 48px', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end' }}>
          <div>
            <RuleLabel align="left" color={FNX.sage}>
              <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background: FNX.labRed, marginRight: 10, verticalAlign: 'middle' }}/>
              The Collection · Vol. 01 / 2026
            </RuleLabel>
            <h1 style={{ ...T.hero, margin: '24px 0 0', color: FNX.pineInk }}>
              Shop.
            </h1>
            <p style={{ marginTop: 20, fontSize: 16, color: FNX.pineInk, opacity: 0.78, maxWidth: '44ch', letterSpacing: '-0.01em' }}>
              Three prescriptions — a booster, a serum, and a closing cream. Every concentration on the label.
            </p>
          </div>
          <div style={{ textAlign: 'right', fontFamily: FNX.serif, fontSize: 12, color: FNX.sage, letterSpacing: '0.06em', lineHeight: 1.8 }}>
            <div>{products.length} pieces · {sets.length} sets</div>
            <div>Free shipping over ₩60,000</div>
            <div>Ships to Worldwide</div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div style={{ background: FNX.cream, padding: '24px 40px', borderBottom: `1px solid ${fnxRule(0.18)}`, display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        {Object.entries(filters).map(([k, v]) => (
          <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.sage }}>{k}</span>
            <div style={{ display: 'flex', gap: 6 }}>
              {v.map((f, i) => (
                <span key={f} style={{
                  padding: '6px 12px', borderRadius: 999,
                  border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.18)}`,
                  color: i === 0 ? FNX.pineInk : FNX.sage,
                  background: i === 0 ? FNX.bone : 'transparent',
                  fontSize: 12, letterSpacing: '0.06em', cursor: 'pointer',
                }}>{f}</span>
              ))}
            </div>
          </div>
        ))}
        <span style={{ flex: 1 }}/>
        <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>SORT · FEATURED ▾</span>
      </div>

      {/* PRODUCT GRID */}
      <Section bg={FNX.cream} padding="80px 40px">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32, paddingBottom: 18, borderBottom: `1px solid ${fnxRule(0.2)}` }}>
          <h2 style={{ ...T.h2, margin: 0, color: FNX.pineInk }}>Single Pieces.</h2>
          <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>{products.length} ITEMS</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {products.map(p => (
            <div key={p.n} data-go="shop/peptosome" style={{
              textDecoration: 'none', color: 'inherit', cursor: 'pointer',
              background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`,
              opacity: p.muted ? 0.78 : 1, position: 'relative', display: 'block',
            }}>
              <div style={{ aspectRatio: '3/4', overflow: 'hidden', position: 'relative', background: FNX.cream }}>
                <img src={p.img} alt={p.t}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
              </div>
              <div style={{ padding: '24px 24px 28px' }}>
                <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 24, lineHeight: 1.15, letterSpacing: '-0.01em' }}>{p.t}</h3>
                <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.7, color: FNX.sage }}>{p.tagline}</p>
                <p style={{ margin: '6px 0 0', fontSize: 12, color: FNX.pineInk, opacity: 0.6 }}>{p.ko}</p>

                <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.slice(1).map(t => (
                    <span key={t} style={{
                      padding: '4px 10px', border: `1px solid ${fnxRule(0.18)}`, borderRadius: 999,
                      fontSize: 12, letterSpacing: '0.08em', color: FNX.sage,
                    }}>{t}</span>
                  ))}
                </div>

                <div style={{ marginTop: 22, paddingTop: 16, borderTop: `1px solid ${fnxRule(0.16)}`, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontFamily: FNX.serif, fontSize: 20, letterSpacing: '0.04em' }}>{p.price}</span>
                    <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em', marginLeft: 8 }}>{p.size}</span>
                  </div>
                  <span style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: p.muted ? FNX.sage : FNX.pineInk }}>{p.stock}</span>
                </div>

                <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: p.muted ? '1fr' : '1fr auto', gap: 10 }}>
                  {p.muted ? (
                    <Btn kind="ghost" full size="md" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Notify Me →</Btn>
                  ) : (
                    <>
                      <Btn kind="primary" full>Add to Bag</Btn>
                      <Btn kind="ghost" size="md" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Detail →</Btn>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SETS */}
      <Section bg={FNX.parchment} padding="80px 40px">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32, paddingBottom: 18, borderBottom: `1px solid ${fnxRule(0.2)}` }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>02 — Sets &amp; Rituals</RuleLabel>
            <h2 style={{ ...T.h2, margin: '12px 0 0', color: FNX.pineInk }}>Together, a discount.</h2>
          </div>
          <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>{sets.length} SETS</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {sets.map(s => (
            <article key={s.n} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 0, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <div style={{ overflow: 'hidden', position: 'relative', background: FNX.cream }}>
                <img src={s.img} alt={s.t} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.pos }} />
              </div>
              <div style={{ padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.tan, letterSpacing: '0.24em' }}>{s.n}</span>
                    {s.save && (
                      <span style={{ fontFamily: FNX.serif, fontSize: 12, color: FNX.labRed, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{s.save}</span>
                    )}
                  </div>
                  <h3 style={{ margin: '14px 0 6px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 20, lineHeight: 1.2 }}>{s.t}</h3>
                  <div style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>{s.info.toUpperCase()}</div>
                </div>
                <div style={{ marginTop: 16, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: FNX.serif, fontSize: 18, letterSpacing: '0.04em' }}>{s.price}</span>
                  <Btn kind="ghost" size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Shop →</Btn>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* SAMPLE / TRIAL */}
      <Section bg={FNX.olive} padding="80px 40px" style={{ color: FNX.cream }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color="rgba(244,239,224,0.55)">03 — Before You Commit</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.cream }}>
              Try the ritual at sample size.
            </h2>
            <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.85, color: 'rgba(244,239,224,0.85)', maxWidth: '42ch' }}>
              Two weeks of booster and serum at 5ml each — to see which prescription suits your skin first.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 14 }}>
              <Btn kind="inverse">Order Sample · ₩12,000</Btn>
              <Btn kind="ghost" style={{ color: FNX.cream, borderColor: FNX.cream }}>How to Choose →</Btn>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { k:'14 days', v:'Trial duration' },
              { k:'2 × 5ml', v:'Booster + Serum' },
              { k:'KR ₩0', v:'Shipping included' },
              { k:'−15%', v:'Credit on next order' },
            ].map((b, i) => (
              <div key={i} style={{ padding: 22, border: '1px solid rgba(244,239,224,0.2)' }}>
                <div style={{ fontFamily: FNX.serif, fontSize: 26, letterSpacing: '0.02em' }}>{b.k}</div>
                <div style={{ marginTop: 8, fontSize: 12, color: 'rgba(244,239,224,0.82)', letterSpacing: '0.06em' }}>{b.v}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <SiteFooter variant="pine" />
    </div>
  );
};

window.ShopPage = ShopPage;
