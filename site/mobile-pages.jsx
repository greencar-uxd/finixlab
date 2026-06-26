// Mobile Shop · Product · Science · Journal · About
// All adapted from desktop versions, reflowed for 390px

// ============ MOBILE HEADER (shared) ============
const MHeader = ({ title }) => {
  const [open, setOpen] = React.useState(false);
  return (
  <React.Fragment>
    <header style={{ background: FNX.cream, padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${fnxRule(0.14)}`, position: 'sticky', top: 0, zIndex: 5 }}>
      <a href="#/home" aria-label="Finixlab — Home" style={{ display: 'flex', textDecoration: 'none' }}>
        <img src="assets/fnxlab-logo.png" alt="Finixlab" style={{ height: 16 }} />
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, color: FNX.pineInk }}>
        <a href="#/search" aria-label="Search" style={{ color: 'inherit', display: 'inline-flex' }}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="7" cy="7" r="5"/><path d="M11 11l3.5 3.5"/></svg>
        </a>
        <a href="#/account" aria-label="Account" style={{ color: 'inherit', display: 'inline-flex' }}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="8" cy="5.5" r="2.5"/><path d="M3 14c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5"/></svg>
        </a>
        <a href="#/cart" aria-label="Bag" style={{ color: 'inherit', display: 'inline-flex', position: 'relative' }}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 5h10l-1 9H4L3 5z"/><path d="M6 5V3.5a2 2 0 014 0V5"/></svg>
          <span style={{ position: 'absolute', top: -1, right: -1, width: 5, height: 5, borderRadius: '50%', background: FNX.labRed }}/>
        </a>
        <button onClick={() => setOpen(true)} aria-label="Menu" style={{ background: 'none', border: 'none', padding: 0, color: FNX.pineInk, fontSize: 20, lineHeight: 1, cursor: 'pointer', display: 'inline-flex' }}>≡</button>
      </div>
    </header>
    {title && <div style={{ padding: '14px 24px', borderBottom: `1px solid ${fnxRule(0.1)}`, fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.pineInk }}>{title}</div>}

    {/* Full-screen mobile menu overlay */}
    {open && (
      <div style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: FNX.pineInk, color: FNX.cream,
        padding: 'clamp(20px, 6vw, 30px)', display: 'flex', flexDirection: 'column',
        height: '100dvh', overflowY: 'auto',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '24px 1fr 24px', alignItems: 'center', marginBottom: 'clamp(16px, 5vw, 32px)' }}>
          <span style={{ fontFamily: FNX.mono, fontSize: 11, color: 'rgba(244,239,224,0.72)', letterSpacing: '0.18em' }}>MENU</span>
          <div/>
          <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', padding: 0, color: FNX.cream, fontSize: 24, lineHeight: 1, cursor: 'pointer' }}>×</button>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', flex: 1, marginTop: 'clamp(8px, 3vw, 24px)' }}>
          {[
            { l:'About',   h:'#/about' },
            { l:'Science', h:'#/science' },
            { l:'Shop',    h:'#/shop' },
            { l:'Journal', h:'#/journal' },
          ].map((it, i, arr) => (
            <a key={it.l} href={it.h} onClick={() => setOpen(false)} style={{
              fontFamily: FNX.serif, fontWeight: 200, fontSize: 'clamp(28px, 8vw, 40px)', letterSpacing: '0.02em',
              color: FNX.cream, textDecoration: 'none',
              padding: 'clamp(13px, 3.6vw, 20px) 0',
              borderBottom: i < arr.length - 1 ? '1px solid rgba(244,239,224,0.18)' : 'none',
            }}>{it.l}</a>
          ))}
        </nav>
        <div style={{ paddingTop: 22, borderTop: '1px solid rgba(244,239,224,0.18)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.18em', color: 'rgba(244,239,224,0.82)' }}>
          <span>EN · JP ▾</span>
          <span style={{ fontSize: 11, letterSpacing: '0.06em', color: 'rgba(244,239,224,0.72)' }}>Ships globally from Korea</span>
        </div>
      </div>
    )}
  </React.Fragment>
  );
};

const MFooter = () => (
  <footer style={{ background: FNX.pineInk, color: 'rgba(244,239,224,0.72)', padding: '32px 24px', fontSize: 11, lineHeight: 1.8, fontFamily: FNX.serif, letterSpacing: '0.08em' }}>
    <img src="assets/fnxlab-logo.png" alt="Finixlab" style={{ height: 18, filter: 'brightness(0) invert(1)', opacity: 0.9, marginBottom: 16 }} />
    <div>Finixlab · Real Efficacy, Quietly Delivered.</div>
    <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: '6px 14px' }}>
      {['About','Science','Shop','Journal','Care','Account'].map(l =>
        <a key={l} href={`#/${l.toLowerCase()}`} style={{ color: 'rgba(244,239,224,0.72)', textDecoration: 'none' }}>{l}</a>
      )}
    </div>
    <div style={{ marginTop: 18, paddingTop: 12, borderTop: '1px solid rgba(244,239,224,0.1)', fontSize: 10 }}>
      © 2026 Finixlab Co., Ltd. · Paju, Gyeonggi · Ships globally
    </div>
  </footer>
);

// ============ MOBILE SHOP ============
const ShopMobile = () => {
  const products = [
    {
      n:'N°01', t:'Peptosome Skin Booster',
      tagline:'All-in-one skin boosting solution, revitalized by Peptosome.',
      price:'₩96,000', size:'50ml',
      img:'assets/booster-bottle-front.png', pos:'50% center',
      tags:['VAMTOXIN™ 2%', 'Bestseller'], stock:'In stock',
    },
    {
      n:'N°02', t:'Spicule Wrinkle-Free Glow Serum',
      tagline:'Radiant Renewal. VAMTOXIN™ 20,000ppm · Hydro Niamid™.',
      price:'₩58,000', size:'20ml',
      img:'assets/serum-quartet.png', pos:'50% center',
      tags:['Hydro Niamid™', 'Spot Care'], stock:'In stock',
    },
    {
      n:'N°03', t:'Notox Cream — Coming Soon',
      tagline:'The final seal. VAMTOXIN™ 1.5% in a velvet cream.',
      price:'TBA', size:'50ml',
      img:'assets/duo-on-stone.jpg', pos:'50% 70%',
      tags:['Cream'], stock:'Notify me', muted:true,
    },
  ];
  const sets = [
    { n:'SET-01', t:'Peptosome — Couple Set', info:'50ml × 2', price:'₩172,800', save:'−10%', img:'assets/peptosome-pair.jpg', pos:'50% 30%' },
    { n:'SET-02', t:'The Collection — Duo', info:'50ml + 20ml', price:'₩142,000', save:'−8%', img:'assets/duo-on-stone.jpg', pos:'50% center' },
    { n:'SET-03', t:'Sample Trial — Try All', info:'5ml × 2 · with usage card', price:'₩12,000', img:'assets/serum-box-single.png', pos:'50% center' },
  ];
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
      <MHeader title="Home / Shop" />

      {/* MASTHEAD */}
      <section style={{ padding: '32px 24px 24px', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
        <RuleLabel align="left" color={FNX.sage}>
          <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background: FNX.labRed, marginRight: 10, verticalAlign: 'middle' }}/>
          The Collection · Vol. 01 / 2026
        </RuleLabel>
        <h1 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.02em' }}>Shop.</h1>
        <p style={{ marginTop: 16, fontSize: 14, color: FNX.pineInk, opacity: 0.78, lineHeight: 1.7 }}>
          Three prescriptions — a booster, a serum, and a closing cream. Every concentration on the label.
        </p>
        <div style={{ marginTop: 18, fontFamily: FNX.serif, fontSize: 12, color: FNX.sage, letterSpacing: '0.06em', lineHeight: 1.9 }}>
          <div>{products.length} pieces · {sets.length} sets</div>
          <div>Free shipping over ₩60,000</div>
          <div>Ships to Worldwide</div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section style={{ padding: '20px 24px', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto' }}>
          {['All','Booster','Serum','Cream','Sets'].map((c, i) => (
            <span key={c} style={{
              padding: '7px 14px', borderRadius: 999,
              border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.18)}`,
              color: i === 0 ? FNX.pineInk : FNX.sage,
              background: i === 0 ? FNX.bone : 'transparent',
              fontSize: 11, letterSpacing: '0.06em', whiteSpace: 'nowrap',
            }}>{c}</span>
          ))}
        </div>
      </section>

      {/* SINGLE PIECES */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${fnxRule(0.2)}` }}>
          <h2 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, letterSpacing: '-0.01em' }}>Single Pieces.</h2>
          <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em' }}>{products.length} ITEMS</span>
        </div>
        <div style={{ display: 'grid', gap: 20 }}>
          {products.map(p => (
            <a key={p.n} href="#/shop/peptosome" data-go="shop/peptosome" style={{ textDecoration: 'none', color: 'inherit', display: 'block', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`, opacity: p.muted ? 0.78 : 1 }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: FNX.cream, position: 'relative' }}>
                <img src={p.img} alt={p.t} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
              </div>
              <div style={{ padding: '20px 18px 22px' }}>
                <h3 style={{ margin: 0, fontFamily: FNX.serif, fontSize: 20, fontWeight: 300, lineHeight: 1.15, letterSpacing: '-0.01em' }}>{p.t}</h3>
                <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.7, color: FNX.sage }}>{p.tagline}</p>
                <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ padding: '4px 10px', border: `1px solid ${fnxRule(0.18)}`, borderRadius: 999, fontSize: 11, letterSpacing: '0.08em', color: FNX.sage }}>{t}</span>
                  ))}
                </div>
                <div style={{ marginTop: 18, paddingTop: 14, borderTop: `1px solid ${fnxRule(0.16)}`, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontFamily: FNX.serif, fontSize: 18, letterSpacing: '0.04em' }}>{p.price}</span>
                    <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em', marginLeft: 8 }}>{p.size.toUpperCase()}</span>
                  </div>
                  <span style={{ fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: p.muted ? FNX.sage : FNX.pineInk }}>{p.stock}</span>
                </div>
                <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: p.muted ? '1fr' : '1fr auto', gap: 10 }}>
                  {p.muted ? (
                    <Btn kind="ghost" full size="md" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Notify Me →</Btn>
                  ) : (
                    <React.Fragment>
                      <Btn kind="primary" full>Add to Bag</Btn>
                      <Btn kind="ghost" size="md" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Detail →</Btn>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SETS & RITUALS */}
      <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${fnxRule(0.2)}` }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>02 — Sets &amp; Rituals</RuleLabel>
            <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, letterSpacing: '-0.01em' }}>Together, a discount.</h2>
          </div>
          <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em' }}>{sets.length} SETS</span>
        </div>
        <div style={{ display: 'grid', gap: 16 }}>
          {sets.map(s => (
            <article key={s.n} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <div style={{ overflow: 'hidden', position: 'relative', background: FNX.cream }}>
                <img src={s.img} alt={s.t} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.pos }} />
              </div>
              <div style={{ padding: 18, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.24em' }}>{s.n}</span>
                    {s.save && <span style={{ fontFamily: FNX.serif, fontSize: 11, color: FNX.labRed, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{s.save}</span>}
                  </div>
                  <h3 style={{ margin: '12px 0 6px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 18, lineHeight: 1.2 }}>{s.t}</h3>
                  <div style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em' }}>{s.info.toUpperCase()}</div>
                </div>
                <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: FNX.serif, fontSize: 16, letterSpacing: '0.04em' }}>{s.price}</span>
                  <Btn kind="ghost" size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Shop →</Btn>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BEFORE YOU COMMIT — sample trial */}
      <section style={{ background: FNX.olive, color: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color="rgba(244,239,224,0.55)">03 — Before You Commit</RuleLabel>
        <h2 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1 }}>Try the ritual at sample size.</h2>
        <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.85, color: 'rgba(244,239,224,0.85)' }}>
          Two weeks of booster and serum at 5ml each — to see which prescription suits your skin first.
        </p>
        <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { k:'14 days', v:'Trial duration' },
            { k:'2 × 5ml', v:'Booster + Serum' },
            { k:'KR ₩0', v:'Shipping included' },
            { k:'−15%', v:'Credit on next order' },
          ].map((b, i) => (
            <div key={i} style={{ padding: 18, border: '1px solid rgba(244,239,224,0.2)' }}>
              <div style={{ fontFamily: FNX.serif, fontSize: 22, letterSpacing: '0.02em' }}>{b.k}</div>
              <div style={{ marginTop: 6, fontSize: 11, color: 'rgba(244,239,224,0.82)', letterSpacing: '0.06em' }}>{b.v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24, display: 'grid', gap: 10 }}>
          <Btn kind="inverse" full>Order Sample · ₩12,000</Btn>
          <Btn kind="ghost" full style={{ color: FNX.cream, borderColor: FNX.cream }}>How to Choose →</Btn>
        </div>
      </section>

      <MFooter />
    </div>
  );
};

// ============ MOBILE PRODUCT ============
const ProductMobile = () => (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14, paddingBottom: 80 }}>
    <MHeader title="Shop / Peptosome" />

    {/* Sticky bottom Add-to-Bag bar — mobile-only functional pattern */}
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90,
      background: 'rgba(244,239,224,0.96)', borderTop: `1px solid ${fnxRule(0.2)}`,
      padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 12,
      backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: FNX.serif, fontSize: 11, color: FNX.sage, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Peptosome · 50ml</div>
        <div style={{ fontFamily: FNX.serif, fontSize: 18, letterSpacing: '0.02em', marginTop: 2 }}>₩96,000 <span style={{ fontSize: '0.65em', opacity: 0.6 }}>/ ~$72</span></div>
      </div>
      <Btn kind="primary" size="md">Add to Bag</Btn>
    </div>

    {/* HERO — gallery */}
    <section style={{ padding: '0' }}>
      <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: FNX.bone }}>
        <img src="assets/booster-hero.png" alt="Peptosome Skin Booster" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, padding: '12px 24px' }}>
        {[
          { src:'assets/peptosome-pair.jpg', pos:'50% 30%', sel:false },
          { src:'assets/booster-grid.png', pos:'50% center', sel:false },
          { src:'assets/booster-hero.png', pos:'50% 40%', sel:true },
          { src:'assets/booster-bottle-front.png', pos:'50% center', sel:false },
        ].map((t, i) => (
          <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden', background: FNX.bone, border: `1px solid ${t.sel ? FNX.pineInk : fnxRule(0.12)}` }}>
            <img src={t.src} alt=""  role="presentation"  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: t.pos }} />
          </div>
        ))}
      </div>
    </section>

    {/* HERO — buy block */}
    <section style={{ padding: '24px 24px 40px' }}>
      <h1 style={{ margin: '10px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 38, lineHeight: 1.02 }}>Peptosome Skin Booster.</h1>
      <p style={{ marginTop: 14, fontSize: 14, color: FNX.sage }}>
        All-in-one skin boosting solution, revitalized by Peptosome.
      </p>
      <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 12, fontSize: 12 }}>
        <span style={{ color: FNX.pineInk, letterSpacing: '0.36em' }}>★★★★★</span>
        <span style={{ color: FNX.sage }}>4.92 / 612 reviews</span>
      </div>
      <div style={{ marginTop: 22, paddingTop: 16, borderTop: `1px solid ${fnxRule(0.2)}`, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: FNX.serif, fontSize: 28, letterSpacing: '0.02em' }}>₩96,000 <span style={{ fontSize: 14, color: FNX.sage, marginLeft: 4 }}>/ ~$72</span></span>
        <span style={{ fontFamily: FNX.mono, fontSize: 11, color: FNX.sage, letterSpacing: '0.14em' }}>50 ML · 1.7 FL.OZ</span>
      </div>

      {/* size selector */}
      <div style={{ marginTop: 22 }}>
        <div style={{ fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.sage, marginBottom: 10 }}>Size</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <button style={{ padding: '14px 14px', border: `1px solid ${FNX.pineInk}`, background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.12em', textAlign: 'left' }}>50ml · Standard</button>
          <button style={{ padding: '14px 14px', border: `1px solid ${fnxRule(0.18)}`, background: 'transparent', color: FNX.sage, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.12em', textAlign: 'left' }}>5ml · Sample <span style={{ color: FNX.pineInk, marginLeft: 6 }}>+ ₩4,000</span></button>
        </div>
      </div>

      {/* quantity */}
      <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${fnxRule(0.18)}`, paddingBottom: 16 }}>
        <span style={{ fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.sage }}>Quantity</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, border: `1px solid ${fnxRule(0.2)}`, padding: '4px 10px' }}>
          <button style={{ background: 'none', border: 'none', fontSize: 16, padding: '4px 6px', cursor: 'pointer', color: FNX.pineInk }}>−</button>
          <span style={{ fontFamily: FNX.serif, fontSize: 14, minWidth: 14, textAlign: 'center' }}>1</span>
          <button style={{ background: 'none', border: 'none', fontSize: 16, padding: '4px 6px', cursor: 'pointer', color: FNX.pineInk }}>+</button>
        </div>
      </div>

      <div style={{ marginTop: 20, display: 'grid', gap: 10 }}>
        <Btn kind="primary" size="lg" full>Add to Bag · ₩96,000</Btn>
        <Btn kind="ghost" full style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Subscribe & Save 15%</Btn>
      </div>

      {/* perks */}
      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 12, color: FNX.sage, lineHeight: 1.7 }}>
        <div>↳ Free shipping over ₩60,000</div>
        <div>↳ Free samples in every order</div>
        <div>↳ 30-day return on unopened</div>
        <div>↳ Worldwide ships</div>
      </div>

      {/* highlights */}
      <div style={{ marginTop: 24, padding: '18px 0', borderTop: `1px solid ${fnxRule(0.2)}`, borderBottom: `1px solid ${fnxRule(0.2)}` }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10, fontSize: 13 }}>
          {[
            { k:'2.0%', v:'VAMTOXIN™ Peptide — SNARE-inhibiting peptide' },
            { k:'4.0%', v:'Niacinamide — tone clarity' },
            { k:'○', v:'Roller applicator — along the grain' },
            { k:'KR', v:'Made in Seoul · Cruelty-free · Vegan' },
          ].map((h, i) => (
            <li key={i} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 12, alignItems: 'baseline' }}>
              <span style={{ fontFamily: FNX.serif, fontSize: 15, letterSpacing: '0.04em', color: FNX.pineInk }}>{h.k}</span>
              <span style={{ color: FNX.pineInk }}>{h.v}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* DESCRIPTION — 01 */}
    <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.sage}>The Booster · 01</RuleLabel>
      <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.15 }}>
        An all-in-one prescription, in a bottle that doesn't shout.
      </h2>
      <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.85, color: FNX.pineInk }}>
        Peptosome Skin Booster is built around VAMTOXIN™ Peptide 2.0%. A SNARE-inhibiting peptide quiets micro-contractions in expression muscles, Niacinamide 4% evens tone, and the Spicule Complex carries efficacy into the dermis.
      </p>
      <p style={{ marginTop: 14, fontSize: 13, lineHeight: 1.85, color: FNX.sage }}>
        Once daily, after toner. A lightweight texture that won't interfere with whatever comes next. Quietest feel, most honest concentration.
      </p>
    </section>

    {/* FORMULATION — 02 */}
    <section style={{ background: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>02 — Formulation</RuleLabel>
      <h2 style={{ margin: '12px 0 16px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.15 }}>The full prescription.</h2>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {[
          { i:'01', n:'VAMTOXIN™ Peptide', r:'Acetyl Hexapeptide-8 derivative · SNARE inhibitor', p:'2.0%' },
          { i:'02', n:'Spicule Complex',   r:'Marine sponge micro-needles · delivery aid', p:'0.5%' },
          { i:'03', n:'Centella Asiatica', r:'Madecassoside · TECA · soothing', p:'0.5%' },
          { i:'04', n:'Niacinamide',       r:'Vitamin B3 · tone · clarity', p:'4.0%' },
          { i:'05', n:'Sodium Hyaluronate',r:'Tri-weight · hydration matrix', p:'1.2%' },
          { i:'06', n:'Panthenol',         r:'Pro-Vitamin B5 · barrier support', p:'2.0%' },
        ].map((x) => (
          <li key={x.n} style={{ display: 'grid', gridTemplateColumns: '24px 1fr auto', gap: 12, padding: '14px 0', borderBottom: `1px dashed ${fnxRule(0.15)}`, alignItems: 'baseline' }}>
            <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.18em' }}>{x.i}</span>
            <div>
              <div style={{ fontFamily: FNX.serif, fontSize: 15 }}>{x.n}</div>
              <div style={{ marginTop: 2, fontSize: 12, color: FNX.sage }}>{x.r}</div>
            </div>
            <div style={{ fontFamily: FNX.serif, fontSize: 15, letterSpacing: '0.06em' }}>{x.p}</div>
          </li>
        ))}
      </ul>
    </section>

    {/* HOW TO USE — 03 */}
    <section style={{ background: FNX.pineInk, color: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color="rgba(244,239,224,0.82)">03 — How to Use</RuleLabel>
      <h2 style={{ margin: '12px 0 18px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>One step in a four-step ritual.</h2>
      {[
        { n:'01', t:'Cleanse', k:'Cleanse', d:'Morning and evening, a gentle cleanser.' },
        { n:'02', t:'Prep', k:'Prep', d:'One pass of pH-balanced toner.' },
        { n:'03', t:'Prescribe', k:'Prescribe', d:'Two to three pumps of Peptosome, with the grain of skin.', active:true },
        { n:'04', t:'Seal', k:'Seal', d:'Seal with a light cream.' },
      ].map(s => (
        <div key={s.n} style={{ padding: '18px 0', borderTop: `1px solid ${s.active ? FNX.labRed : 'rgba(244,239,224,0.25)'}`, background: s.active ? 'rgba(244,239,224,0.06)' : 'transparent' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <span style={{ fontFamily: FNX.mono, fontSize: 11, color: s.active ? FNX.labRed : FNX.tan, letterSpacing: '0.18em' }}>{s.n}</span>
              <span style={{ fontFamily: FNX.serif, fontSize: 20 }}>{s.t}</span>
            </div>
            <span style={{ fontSize: 11, color: 'rgba(244,239,224,0.72)' }}>{s.k}</span>
          </div>
          <p style={{ margin: '8px 0 0', fontSize: 12, lineHeight: 1.7, color: 'rgba(244,239,224,0.85)' }}>{s.d}</p>
        </div>
      ))}
    </section>

    {/* ROLLER APPLICATOR — 04 */}
    <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>04 — Roller Applicator</RuleLabel>
      <h2 style={{ margin: '12px 0 16px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>The roller remembers the angle.</h2>
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.85, color: FNX.pineInk }}>
        A stainless steel roller at the bottle top — rolling along the grain disperses the formula evenly, and leaves no fingerprint oil for the quietest finish.
      </p>
      <ol style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'grid', gap: 12, fontSize: 13 }}>
        {[
          'Pump one or two drops onto the roller to form a small reservoir.',
          'Broad areas (cheeks · forehead) — inside to outside, gently.',
          'Detail areas (around eyes and mouth) — like drawing with a fine pen.',
          'Finish by pressing evenly with palms to seal.',
        ].map((s, i) => (
          <li key={i} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 12, paddingBottom: 10, borderBottom: `1px dashed ${fnxRule(0.15)}` }}>
            <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.labRed, letterSpacing: '0.14em' }}>0{i+1}</span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
      <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
        {[
          { c:'Pump onto roller', src:'assets/serum-pump.png', pos:'50% center' },
          { c:'Roll along the grain', src:'assets/serum-roller-green.png', pos:'50% center' },
          { c:'Press to settle', src:'assets/serum-shadow.png', pos:'50% center' },
        ].map((p, i) => (
          <div key={i} style={{ aspectRatio: '3/4', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.18)}`, position: 'relative' }}>
            <img src={p.src} alt={p.c} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
          </div>
        ))}
      </div>
    </section>

    {/* REAL USERS · TESTERS — 05 */}
    <section style={{ background: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>05 — Real Users · Testers</RuleLabel>
      <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.05 }}>Before & After.</h2>
      <p style={{ marginTop: 16, color: FNX.pineInk, fontSize: 14, lineHeight: 1.8 }}>
        A record from users in their thirties and beyond. Not numbers — the sentences time has left behind.
      </p>
      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{ aspectRatio: '4/5', position: 'relative', overflow: 'hidden', border: `1px solid ${fnxRule(0.18)}` }}>
          <img src="assets/model-b-before.png" alt="Model B — before" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
        </div>
        <div style={{ aspectRatio: '4/5', position: 'relative', overflow: 'hidden', border: `1px solid ${fnxRule(0.18)}` }}>
          <img src="assets/model-b-after.png" alt="Model B — after" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
        </div>
      </div>
      <ul style={{ listStyle: 'none', margin: '22px 0 0', padding: 0, display: 'grid', gap: 14 }}>
        {[
          '"The roller glide is precise; mornings are especially quiet." — Kyung, Seoul',
          '"The texture absorbs fully before the next step." — Min, Busan',
          '"Now I see what a single prescription can be." — Seo, Seoul',
        ].map((q, i) => (
          <li key={i} style={{ fontFamily: FNX.serif, fontSize: 14, lineHeight: 1.7, color: FNX.pineInk, paddingLeft: 16, borderLeft: `1px solid ${FNX.tan}` }}>{q}</li>
        ))}
      </ul>
    </section>

    {/* REVIEWS — 06 */}
    <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18, borderBottom: `1px solid ${fnxRule(0.2)}`, paddingBottom: 16 }}>
        <div>
          <RuleLabel align="left" color={FNX.tan}>06 — Reviews</RuleLabel>
          <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 24 }}>4.92 ★ / 612 reviews</h2>
        </div>
      </div>
      <div style={{ display: 'grid', gap: 12 }}>
        {[
          { t:'Softer expression lines', a:'Kim · 38 · Seoul · Week 6', d:'In the morning mirror I can feel the lines have softened. Without any heavy procedures, the daily texture has changed.' },
          { t:'Skin that feels quiet', a:'M.T · 36 · Shanghai · Week 7', d:"Since switching, my skin's condition has improved — I look forward to morning care. The words quiet and steady come to mind." },
          { t:'Honest concentration', a:'Park · 45 · Busan · Week 8', d:'The ingredient list is generous and clear. By week six the fine lines softened. Feels like following a prescription day by day.' },
          { t:'Gentle even for sensitive skin', a:'Y.S · 39 · Tokyo · 6wk', d:'Low irritation, skin texture comes together. Morning makeup sits differently. The quietest ritual of the day.' },
        ].map((r, i) => (
          <div key={i} style={{ padding: 20, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <span style={{ color: FNX.pineInk, letterSpacing: '0.4em', fontSize: 11 }}>★★★★★</span>
              <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em' }}>VERIFIED</span>
            </div>
            <h3 style={{ margin: '12px 0 8px', fontFamily: FNX.serif, fontSize: 18, fontWeight: 300, letterSpacing: '-0.01em' }}>{r.t}</h3>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.8, color: FNX.pineInk }}>{r.d}</p>
            <div style={{ marginTop: 12, fontSize: 11, color: FNX.sage, letterSpacing: '0.06em' }}>{r.a}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 22 }}>
        <Btn kind="ghost" full style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Load More Reviews</Btn>
      </div>
    </section>

    {/* PAIR WELL WITH — 07 */}
    <section style={{ background: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>07 — Pair Well With</RuleLabel>
      <h2 style={{ margin: '12px 0 24px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>Continue the ritual.</h2>
      <div style={{ display: 'grid', gap: 16 }}>
        {[
          { src:'assets/serum-trio.png', t:'Spicule Wrinkle-Free Glow Serum', p:'₩58,000', s:'20ml', pos:'50% center' },
          { src:'assets/peptosome-pair.jpg', t:'Peptosome — Couple Set', p:'₩172,800 (−10%)', s:'50ml × 2', pos:'50% 30%' },
          { src:'assets/duo-on-stone.jpg', t:'The Collection — Duo', p:'₩142,000 (−8%)', s:'50ml + 20ml', pos:'50% center' },
        ].map((p) => (
          <article key={p.t} style={{ background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
              <img src={p.src} alt={p.t} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
            </div>
            <div style={{ padding: 18 }}>
              <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 20, lineHeight: 1.2 }}>{p.t}</h3>
              <div style={{ marginTop: 12, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: FNX.serif, fontSize: 16 }}>{p.p}</span>
                <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.16em' }}>{p.s}</span>
              </div>
              <div style={{ marginTop: 16 }}>
                <Btn kind="ghost" full size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Detail →</Btn>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <MFooter />
  </div>
);

// ============ MOBILE SCIENCE ============
const ScienceMobile = () => (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
    <MHeader title="Science / VAMTOXIN™" />

    {/* HERO */}
    <section style={{ background: FNX.pineInk, color: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color="rgba(244,239,224,0.55)">The Science</RuleLabel>
      <h1 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 44, lineHeight: 0.98, letterSpacing: '-0.02em' }}>
        VAMTOXIN™ 2.0% — a quiet molecule.
      </h1>
      <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.85, color: 'rgba(244,239,224,0.85)' }}>
        A SNARE-inhibiting hexapeptide that acts on micro-contractions in expression muscles. An injection-free prescription — the exact work of a molecule that quiets the surface.
      </p>
      <div style={{ marginTop: 24, display: 'grid', gap: 10 }}>
        <Btn kind="inverse" full>Read the Patent Story</Btn>
        <Btn kind="ghost" full style={{ color: FNX.cream, borderColor: FNX.cream }}>Shop Peptosome →</Btn>
      </div>
      {/* SNARE diagram */}
      <div style={{ marginTop: 28, aspectRatio: '1/1', background: 'repeating-linear-gradient(135deg, rgba(244,239,224,0.06) 0 14px, transparent 14px 28px)', border: '1px solid rgba(244,239,224,0.18)', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: FNX.mono, fontSize: 10, color: 'rgba(244,239,224,0.72)', letterSpacing: '0.14em' }}>FIG. 01 — VAMTOXIN™ ON SNARE</div>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 280 280" style={{ width: '85%', height: '85%' }}>
              <circle cx="140" cy="140" r="110" fill="none" stroke={FNX.cream} strokeWidth="0.6" opacity="0.3" />
              <circle cx="140" cy="140" r="70"  fill="none" stroke={FNX.cream} strokeWidth="0.6" opacity="0.5" />
              <circle cx="140" cy="140" r="40"  fill="none" stroke={FNX.cream} strokeWidth="0.8" opacity="0.7" />
              <circle cx="140" cy="140" r="10"  fill={FNX.labRed} />
              <line x1="40" y1="140" x2="240" y2="140" stroke={FNX.cream} strokeWidth="0.4" opacity="0.3" />
              <line x1="140" y1="40" x2="140" y2="240" stroke={FNX.cream} strokeWidth="0.4" opacity="0.3" />
              <text x="155" y="138" fontFamily="ui-monospace" fontSize="6" fill="rgba(244,239,224,0.82)">VAMTOXIN™</text>
              <text x="36" y="265" fontFamily="ui-monospace" fontSize="6" fill="rgba(244,239,224,0.55)">Synaptic Membrane</text>
              <text x="36" y="80" fontFamily="ui-monospace" fontSize="6" fill="rgba(244,239,224,0.55)">Synaptic Vesicle</text>
              <text x="180" y="80" fontFamily="ui-monospace" fontSize="6" fill="rgba(244,239,224,0.55)">SNAP-25</text>
            </svg>
          </div>
          <div style={{ fontFamily: FNX.mono, fontSize: 10, color: 'rgba(244,239,224,0.72)', letterSpacing: '0.14em', textAlign: 'right' }}>Schematic · not to scale</div>
        </div>
      </div>
    </section>

    {/* MECHANISM — 01 */}
    <section style={{ background: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>01 — The Mechanism</RuleLabel>
      <h2 style={{ margin: '12px 0 18px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>Quiet expression, at the protein level.</h2>
      {[
        { n:'01', t:'Receptor Bind',    d:"VAMTOXIN™'s hexapeptide residues bind to SNAP-25." },
        { n:'02', t:'SNARE Inhibit',    d:'Temporarily slows SNARE complex formation.' },
        { n:'03', t:'Quiet Expression', d:'Micro-contractions in expression muscles gently settle.' },
        { n:'04', t:'Skin Stillness',   d:'Wrinkle depth measurably softens; the surface settles.' },
      ].map(s => (
        <div key={s.n} style={{ padding: '16px 0', borderTop: `1px solid ${fnxRule(0.18)}` }}>
          <h3 style={{ margin: '0 0 6px', fontFamily: FNX.serif, fontSize: 20, fontWeight: 300 }}>{s.t}</h3>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: FNX.sage }}>{s.d}</p>
        </div>
      ))}
    </section>

    {/* THE MOLECULE — 02 */}
    <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.sage}>The Molecule · 02</RuleLabel>
      <div style={{ marginTop: 12 }}>
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
          <div key={i} style={{ padding: '14px 0', borderBottom: `1px dashed ${fnxRule(0.18)}` }}>
            <div style={{ fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage }}>{row[0]}</div>
            <div style={{ marginTop: 4, fontFamily: FNX.serif, fontSize: 16, color: FNX.pineInk, letterSpacing: '0.02em' }}>{row[1]}</div>
          </div>
        ))}
      </div>
    </section>

    {/* THE PATENT — 03 */}
    <section style={{ background: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>03 — The Patent</RuleLabel>
      <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>Sole patent, single source.</h2>
      <p style={{ margin: '12px 0 0', color: FNX.sage, fontSize: 14 }}>VAMTOXIN™ is an ingredient held exclusively by Supadelixir.</p>
      <div style={{ marginTop: 20, aspectRatio: '3/4', overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
        <img src="assets/booster-box-front.png" alt="VAMTOXIN™ Patent" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
      </div>
      <h3 style={{ margin: '20px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 22, lineHeight: 1.2 }}>A peptide that was designed, not borrowed.</h3>
      <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.9, color: FNX.pineInk }}>
        VAMTOXIN™ is a hexapeptide designed to mimic the mechanism of Botulinum Toxin. Supadelixir holds the ingredient exclusively; Finixlab formulates it — an injection-free prescription at 2.0%.
      </p>
      <div style={{ marginTop: 24, display: 'grid', gap: 0 }}>
        {[
          { l:'Sole Holder',    v:'Supadelixir' },
          { l:'Mechanism',      v:'SNARE complex inhibition — temporary expression softening' },
          { l:'Design Class',   v:'Botulinum-toxin mimetic hexapeptide' },
          { l:'Concentration',  v:'2.0% — Finixlab exclusive license' },
          { l:'Carrier System', v:'Spicule Complex 0.5% — injection-free delivery' },
        ].map((row, i) => (
          <div key={i} style={{ padding: '14px 0', borderTop: `1px solid ${fnxRule(0.18)}`, borderBottom: i === 4 ? `1px solid ${fnxRule(0.18)}` : 'none' }}>
            <div style={{ fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage }}>{row.l}</div>
            <div style={{ marginTop: 4, fontFamily: FNX.serif, fontSize: 15, color: FNX.pineInk, letterSpacing: '0.02em' }}>{row.v}</div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 20, fontFamily: FNX.mono, fontSize: 11, color: FNX.sage, letterSpacing: '0.14em', lineHeight: 1.7 }}>
        * Efficacy certification is in preparation. Ingredient design and concentration are stated on the label.
      </p>
    </section>

    {/* NOTOX METHOD — 04 */}
    <section style={{ background: FNX.olive, color: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color="rgba(244,239,224,0.55)">04 — Notox Method</RuleLabel>
      <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1 }}>Notox — a verb, not a substitute.</h2>
      <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.85, color: 'rgba(244,239,224,0.85)' }}>
        We never claim to replace procedures. We simply fill the days between them with a daily prescription. Alongside clinical treatments, or as a daily slow-aging ritual — both in the same place.
      </p>
      <div style={{ marginTop: 24 }}>
        <Btn kind="inverse" full>Read the Method →</Btn>
      </div>
      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {[
          { t:'In-Clinic',  d:'A prescription that accelerates post-procedure recovery.', tag:'AFTER PROCEDURE' },
          { t:'At-Home',    d:'For days between procedures, an eight-minute daily ritual.', tag:'DAILY RITUAL' },
          { t:'Layered',    d:'High-concentration peptide layered with hydration and soothing actives.', tag:'LAYERING' },
          { t:'Quiet',      d:"Doesn't interfere with whatever comes next.", tag:'LIGHTWEIGHT' },
        ].map((c, i) => (
          <div key={i} style={{ padding: 18, border: '1px solid rgba(244,239,224,0.2)' }}>
            <div style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.tan, letterSpacing: '0.14em' }}>{c.tag}</div>
            <h3 style={{ margin: '12px 0 8px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 18 }}>{c.t}</h3>
            <p style={{ margin: 0, fontSize: 12, lineHeight: 1.7, color: 'rgba(244,239,224,0.82)' }}>{c.d}</p>
          </div>
        ))}
      </div>
    </section>

    {/* DOCUMENTS — 05 */}
    <section style={{ background: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>05 — Documents</RuleLabel>
      <h2 style={{ margin: '12px 0 24px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>For the curious.</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {[
          { t:'VAMTOXIN™ Whitepaper',          s:'PDF · 1.1 MB · 11 pages', tag:'SCIENCE' },
          { t:'Patent Story — Supadelixir',     s:'PDF · 0.8 MB · 6 pages',  tag:'INGREDIENT' },
          { t:'Full INCI Sheet — Peptosome 50ml', s:'PDF · 0.4 MB · 2 pages',  tag:'FORMULATION' },
        ].map((d) => (
          <a key={d.t} href="#" style={{ display: 'block', padding: 20, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`, textDecoration: 'none', color: FNX.pineInk }}>
            <div style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.labRed, letterSpacing: '0.24em' }}>{d.tag}</div>
            <h3 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 20, lineHeight: 1.2 }}>{d.t}</h3>
            <div style={{ marginTop: 16, paddingTop: 12, borderTop: `1px solid ${fnxRule(0.14)}`, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: FNX.sage, fontFamily: FNX.serif, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              <span>{d.s}</span>
              <span>Download ↓</span>
            </div>
          </a>
        ))}
      </div>
    </section>

    <MFooter />
  </div>
);

// ============ MOBILE JOURNAL ============
const JournalMobile = () => {
  const featured = {
    h:'On the Quiet Discipline of Peptides',
    sub:"Peptides' quiet practice — how a single molecule softens the texture of expression.",
    author:'Hyungju Park · Founder',
    minutes:'7 min',
    img:'assets/serum-pump.png', pos:'50% center',
  };
  const articles = [
    { n:'N°011', h:'In the Cabinet of a Seoul Dermatologist',  img:'assets/booster-grid.png', pos:'50% center' },
    { n:'N°010', h:'Notox — A Verb, Not a Substitute',           img:'assets/serum-roller-green.png', pos:'50% center' },
    { n:'N°009', h:'Niacinamide at 4%: Where the Glow Begins',  img:'assets/booster-bottle-front.png', pos:'50% center' },
    { n:'N°008', h:'Three Weeks After a Procedure: The Quiet In-Between', img:'assets/serum-shadow.png', pos:'50% center' },
    { n:'N°007', h:'Eight Minutes, in a Slow Bathroom',          img:'assets/peptosome-pair.jpg', pos:'50% center' },
    { n:'N°006', h:'On the Word "Anti": Why We Don\'t Say It',   img:'assets/duo-on-stone.jpg', pos:'50% center' },
  ];
  const cats = ['All', 'Slow Aging', 'Method', 'Interview', 'Ingredient'];
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
      <MHeader title="Journal" />

      {/* MASTHEAD */}
      <section style={{ padding: '32px 24px 24px', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
        <h1 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 200, fontSize: 52, lineHeight: 0.95, letterSpacing: '-0.02em' }}>The Journal.</h1>
        <p style={{ marginTop: 14, fontFamily: FNX.serif, fontSize: 13, color: FNX.sage, lineHeight: 1.7, letterSpacing: '0.04em' }}>Quiet dispatches, once a month.</p>
        <div style={{ marginTop: 18 }}>
          <Btn kind="primary" size="sm">Subscribe →</Btn>
        </div>
      </section>

      {/* CATEGORY BAR */}
      <section style={{ padding: '20px 24px', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto', alignItems: 'center', fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.06em' }}>
          {cats.map((c, i) => (
            <span key={c} style={{
              padding: '7px 14px', borderRadius: 999, whiteSpace: 'nowrap', textTransform: 'uppercase',
              border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.18)}`,
              color: i === 0 ? FNX.pineInk : FNX.sage,
              background: i === 0 ? FNX.bone : 'transparent',
            }}>{c}</span>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.tan}>Featured · This Month</RuleLabel>
        <div style={{ marginTop: 18, aspectRatio: '4/5', overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
          <img src={featured.img} alt={featured.h} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: featured.pos }} />
        </div>
        <h2 style={{ margin: '20px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1, letterSpacing: '-0.01em' }}>{featured.h}</h2>
        <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.85, color: FNX.pineInk }}>{featured.sub}</p>
        <p style={{ marginTop: 14, fontSize: 13, lineHeight: 1.85, color: FNX.sage }}>
          Nine weeks of a molecule quieting the surface. What we prescribe is consistency, not efficacy — the idea that eight minutes a day keep the surface from dulling.
        </p>
        <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 14, paddingTop: 16, borderTop: `1px solid ${fnxRule(0.18)}` }}>
          <span style={{ fontSize: 12, color: FNX.pineInk, fontFamily: FNX.serif, letterSpacing: '0.04em' }}>{featured.author}</span>
          <span style={{ width: 1, height: 12, background: fnxRule(0.3) }}/>
          <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em' }}>{featured.minutes.toUpperCase()}</span>
          <span style={{ flex: 1 }}/>
          <Btn kind="ghost" size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Read →</Btn>
        </div>
      </section>

      {/* ALL DISPATCHES */}
      <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, borderBottom: `1px solid ${fnxRule(0.2)}`, paddingBottom: 16 }}>
          <h2 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, letterSpacing: '-0.01em' }}>All Dispatches.</h2>
          <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em' }}>SORT · NEWEST</span>
        </div>
        <div style={{ display: 'grid', gap: 24 }}>
          {articles.map(a => (
            <article key={a.n} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
                <img src={a.img} alt={a.h} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: a.pos }} />
              </div>
              <h3 style={{ margin: '12px 0 8px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 20, lineHeight: 1.2, letterSpacing: '-0.01em' }}>{a.h}</h3>
              <span style={{ fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.14em', color: FNX.sage, textTransform: 'uppercase' }}>Read →</span>
            </article>
          ))}
        </div>

        {/* pagination */}
        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', gap: 8, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em' }}>
          {['‹', '01', '02', '03', '04', '›'].map((p, i) => (
            <span key={i} style={{
              minWidth: 36, height: 36, padding: '0 10px',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              border: `1px solid ${i === 1 ? FNX.pineInk : fnxRule(0.18)}`,
              color: i === 1 ? FNX.pineInk : FNX.sage,
              background: i === 1 ? FNX.bone : 'transparent',
            }}>{p}</span>
          ))}
        </div>
      </section>

      <MFooter />
    </div>
  );
};

// ============ MOBILE ABOUT ============
const AboutMobile = () => {
  const pillars = [
    { n:'01', t:'Honesty in concentration', d:'Active concentrations stated on the label, in the language of prescription rather than marketing.' },
    { n:'02', t:'Clinic in everyday',       d:'The essence of procedures, distilled into eight daily minutes. Measurable change instead of heavy promises.' },
    { n:'03', t:'A quiet ritual',           d:'The quietest touch. Consistency is what shapes skin in the end.' },
    { n:'04', t:'Slow Asia',                d:'From Seoul to Shanghai, Tokyo and Ho Chi Minh. The poetic restraint of Asian indie beauty placed alongside clinical honesty.' },
  ];
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
      <MHeader title="About" />

      {/* HERO */}
      <section style={{ padding: '32px 24px' }}>
        <RuleLabel align="left" color={FNX.sage}>
          <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background: FNX.labRed, marginRight: 10, verticalAlign: 'middle' }}/>
          About Finixlab
        </RuleLabel>
        <h1 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 44, lineHeight: 0.98 }}>A quiet pharmacy of light.</h1>
        <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.85, color: FNX.pineInk }}>
          Finixlab is a slow-aging brand that brings together clinical peptide concentrations and the poetic restraint of Korean indie beauty. A pharmacy-clean shelf of prescriptions, with a touch as quiet as midday light.
        </p>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, paddingTop: 20, borderTop: `1px solid ${fnxRule(0.18)}` }}>
          {[
            { k:'2024', v:'Founded · Seoul' },
            { k:'04', v:'Cities · KR/CN/JP/VN' },
            { k:'31', v:'Clinic Partners' },
          ].map(s => (
            <div key={s.k}>
              <div style={{ fontFamily: FNX.serif, fontSize: 24, lineHeight: 1 }}>{s.k}</div>
              <div style={{ marginTop: 6, fontSize: 10, color: FNX.sage, letterSpacing: '0.06em' }}>{s.v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24, aspectRatio: '4/5', overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
          <img src="assets/peptosome-pair.jpg" alt="Peptosome pair" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
        </div>
      </section>

      {/* FOUNDER'S LETTER — 01 */}
      <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.sage}>Founder's Letter · 01</RuleLabel>
        <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.2 }}>The bottle, in lower case.</h2>
        <div style={{ marginTop: 20, fontSize: 15, lineHeight: 1.95, color: FNX.pineInk }}>
          <p style={{ margin: 0 }}>
            <span style={{ float:'left', fontFamily: FNX.serif, fontSize: 64, lineHeight: 0.85, marginRight: 12, marginTop: 6, fontWeight: 300 }}>O</span>nce I started watching patients sit in front of the mirror for days after a procedure, I knew. The brief stillness of softened expressions, slowly returning to everyday lines — and I wondered, what if we could prescribe something for those days.
          </p>
          <p style={{ margin: '16px 0 0' }}>
            Finixlab is for those in-between days. Not an alternative to procedures, but a way to carry their essence into daily skin. While a single prescription stays with you each day, we prescribe the quietest possible ritual.
          </p>
          <p style={{ margin: '16px 0 0' }}>
            Concentrations are stated on the label. VAMTOXIN™ 2%, Niacinamide 4%, Spicule 0.5% — concentration before narrative. The nine-week study is the measure of that honesty, arranged like a single prescription.
          </p>
          <p style={{ margin: '16px 0 0', color: FNX.sage, fontSize: 14 }}>
            What we prescribe is consistency, not efficacy. Eight minutes a day that keep the surface from dulling — that single thing, as quietly as possible.
          </p>
        </div>
        <div style={{ marginTop: 24, paddingTop: 16, borderTop: `1px solid ${fnxRule(0.18)}` }}>
          <div style={{ fontFamily: FNX.serif, fontSize: 16 }}>Hyungju Park</div>
          <div style={{ marginTop: 4, fontSize: 12, color: FNX.sage, letterSpacing: '0.06em' }}>Founder</div>
          <div style={{ marginTop: 12, fontFamily: FNX.mono, fontSize: 11, color: FNX.sage, letterSpacing: '0.14em' }}>Seoul · April 2024</div>
        </div>
      </section>

      {/* PRINCIPLES — 02 */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.tan}>02 — Principles</RuleLabel>
        <h2 style={{ margin: '12px 0 24px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1 }}>Four quiet principles.</h2>
        {pillars.map(p => (
          <div key={p.n} style={{ padding: '20px 0', borderTop: `1px solid ${fnxRule(0.18)}` }}>
            <h3 style={{ margin: '0 0 10px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 24, lineHeight: 1.15 }}>{p.t}</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.85, color: FNX.pineInk }}>{p.d}</p>
          </div>
        ))}
      </section>

      {/* THE LAB — 03 */}
      <section style={{ background: FNX.parchment, padding: 0 }}>
        <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
          <img src="assets/serum-trio.png" alt="Lab collection" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
        </div>
        <div style={{ padding: '40px 24px' }}>
          <RuleLabel align="left" color={FNX.tan}>03 — The Lab</RuleLabel>
          <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1 }}>Made in Seoul, by hand and instrument.</h2>
          <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.85, color: FNX.pineInk }}>
            All products are produced in small batches at our Seoul lab and GMP-certified partner facilities. A new batch every eight weeks, with batch numbers printed on every label.
          </p>
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { k:'GMP', v:'CGMP · ISO 22716' },
              { k:'IRB', v:'Clinical · Seoul' },
              { k:'PETA',v:'Cruelty-free · Vegan' },
              { k:'EWG', v:'Green · skin-safe' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 10, padding: '12px 0', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
                <span style={{ fontFamily: FNX.serif, fontSize: 16, letterSpacing: '0.04em' }}>{c.k}</span>
                <span style={{ fontSize: 11, color: FNX.sage }}>{c.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY — 04 */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.tan}>04 — Sustainability</RuleLabel>
        <h2 style={{ margin: '12px 0 24px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1 }}>Quietly considered for the earth.</h2>
        {[
          { t:'PCR Glass', d:'Glass bottles use 60% recycled glass. Labels printed on FSC-certified paper.' },
          { t:'Refill-Ready', d:'From spring 2026, 50ml bottles run on a refill system. Bring back the bottle for −15% off.' },
          { t:'Local Batch', d:'Small-batch production at GMP partner facilities to minimize shipping distance.' },
          { t:'1% for Skin', d:'1% of revenue is donated to a Korean dermatology research fellowship.' },
        ].map(c => (
          <div key={c.t} style={{ padding: '18px 0', borderTop: `1px solid ${fnxRule(0.18)}` }}>
            <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 20 }}>{c.t}</h3>
            <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.7, color: FNX.pineInk }}>{c.d}</p>
          </div>
        ))}
      </section>

      {/* CLINIC PARTNERS — 05 */}
      <section style={{ background: FNX.olive, color: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color="rgba(244,239,224,0.55)">05 — Clinic Partners</RuleLabel>
        <h2 style={{ margin: '12px 0 24px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1 }}>A network of slow-thinking clinics.</h2>
        {[
          { c:'Seoul · 14', n:['Cheongdam Skin Lab', 'Hannam-dong Clinic', 'Yongsan Dermal', 'Yeoksam Aesthetics', '+ 10 partners'] },
          { c:'Shanghai · 6', n:['Xintiandi Dermatology', 'Jing\'an Skin Studio', 'Pudong Aesthetics', '+ 3 partners'] },
          { c:'Tokyo · 5', n:['Aoyama Clinic', 'Daikanyama Skin', 'Ginza Dermal', '+ 2 partners'] },
          { c:'HCMC · 3', n:['District 1 Skin Studio', 'Thao Dien Clinic', '+ 1 partner'] },
        ].map(city => (
          <div key={city.c} style={{ padding: '20px 0', borderTop: '1px solid rgba(244,239,224,0.18)' }}>
            <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 20, letterSpacing: '0.04em' }}>{city.c}</h3>
            <ul style={{ listStyle: 'none', margin: '14px 0 0', padding: 0, display: 'grid', gap: 8, fontSize: 12, color: 'rgba(244,239,224,0.82)' }}>
              {city.n.map(p => <li key={p}>· {p}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <MFooter />
    </div>
  );
};

Object.assign(window, { ShopMobile, ProductMobile, ScienceMobile, JournalMobile, AboutMobile, MHeader, MFooter });
