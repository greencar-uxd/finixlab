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
        padding: '24px', display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '24px 1fr 24px', alignItems: 'center', marginBottom: 32 }}>
          <span style={{ fontFamily: FNX.mono, fontSize: 11, color: 'rgba(244,239,224,0.55)', letterSpacing: '0.18em' }}>MENU</span>
          <div/>
          <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', padding: 0, color: FNX.cream, fontSize: 24, lineHeight: 1, cursor: 'pointer' }}>×</button>
        </div>
        <nav style={{ display: 'grid', gap: 4, flex: 1 }}>
          {[
            { l:'About',   h:'#/about' },
            { l:'Science', h:'#/science' },
            { l:'Shop',    h:'#/shop' },
            { l:'Journal', h:'#/journal' },
          ].map(it => (
            <a key={it.l} href={it.h} onClick={() => setOpen(false)} style={{
              fontFamily: FNX.serif, fontWeight: 200, fontSize: 40, letterSpacing: '0.02em',
              color: FNX.cream, textDecoration: 'none',
              padding: '20px 0', borderBottom: '1px solid rgba(244,239,224,0.18)',
            }}>{it.l}</a>
          ))}
        </nav>
        <div style={{ paddingTop: 24, borderTop: '1px solid rgba(244,239,224,0.18)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.18em', color: 'rgba(244,239,224,0.82)' }}>
          <span>EN · JP ▾</span>
          <span style={{ fontSize: 11, letterSpacing: '0.06em', color: 'rgba(244,239,224,0.6)' }}>Ships globally from Korea</span>
        </div>
      </div>
    )}
  </React.Fragment>
  );
};

const MFooter = () => (
  <footer style={{ background: FNX.pineInk, color: 'rgba(244,239,224,0.55)', padding: '32px 24px', fontSize: 11, lineHeight: 1.8, fontFamily: FNX.serif, letterSpacing: '0.08em' }}>
    <img src="assets/fnxlab-logo.png" alt="Finixlab" style={{ height: 18, filter: 'brightness(0) invert(1)', opacity: 0.9, marginBottom: 16 }} />
    <div>Finixlab · Real Efficacy, Quietly Delivered.</div>
    <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: '6px 14px' }}>
      {['About','Science','Shop','Journal','Care','Account'].map(l =>
        <a key={l} href={`#/${l.toLowerCase()}`} style={{ color: 'rgba(244,239,224,0.55)', textDecoration: 'none' }}>{l}</a>
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
    { n:'N°01', t:'Peptosome Skin Booster', tag:'Hero', price:'₩96,000', size:'50ml', img:'assets/booster-bottle-front.png', pos:'50% center' },
    { n:'N°02', t:'Spicule Wrinkle-Free Glow Serum', tag:'New', price:'₩58,000', size:'20ml', img:'assets/serum-quartet.png', pos:'50% center' },
    { n:'N°03', t:'Notox Cream — Coming', tag:'FW 26', price:'TBA', size:'50ml', img:'assets/duo-on-stone.jpg', pos:'50% 70%', muted: true },
  ];
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
      <MHeader title="Home / Shop" />
      <section style={{ padding: '32px 24px' }}>
        <RuleLabel align="left" color={FNX.sage}>The Collection · Vol. 01</RuleLabel>
        <h1 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.02em' }}>Shop.</h1>
        <p style={{ marginTop: 14, fontSize: 13, color: FNX.pineInk, opacity: 0.78 }}>
          Three prescriptions — a booster, a serum, and a closing cream.
        </p>
      </section>

      <section style={{ padding: '0 24px 24px' }}>
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 12 }}>
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

      <section style={{ padding: '0 24px 40px', display: 'grid', gap: 16 }}>
        {products.map(p => (
          <a key={p.n} href="#/shop/peptosome" style={{ textDecoration: 'none', color: 'inherit', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`, opacity: p.muted ? 0.7 : 1 }}>
            <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: FNX.cream, position: 'relative' }}>
              <img src={p.img} alt={p.t} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
              <span style={{ position: 'absolute', top: 12, left: 12, fontFamily: FNX.mono, fontSize: 10, color: FNX.pineInk, background: 'rgba(244,239,224,0.92)', padding: '4px 8px', letterSpacing: '0.16em' }}>{p.n}</span>
              {p.tag && <span style={{ position: 'absolute', top: 12, right: 12, fontFamily: FNX.serif, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.cream, background: p.tag === 'Hero' ? FNX.labRed : FNX.pineInk, padding: '4px 8px' }}>{p.tag}</span>}
            </div>
            <div style={{ padding: 18 }}>
              <h3 style={{ margin: 0, fontFamily: FNX.serif, fontSize: 18, fontWeight: 300, lineHeight: 1.2 }}>{p.t}</h3>
              <div style={{ marginTop: 10, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: FNX.serif, fontSize: 16 }}>{p.price}</span>
                <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.16em' }}>{p.size.toUpperCase()}</span>
              </div>
            </div>
          </a>
        ))}
      </section>

      <MFooter />
    </div>
  );
};

// ============ MOBILE PRODUCT ============
const ProductMobile = () => (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14, paddingBottom: 80 }}>
    <MHeader title="Shop / Peptosome" />

    {/* Sticky bottom Add-to-Bag bar */}
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

    <section style={{ padding: '0' }}>
      <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: FNX.bone }}>
        <img src="assets/booster-hero.png" alt="Peptosome Skin Booster" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, padding: '12px 24px' }}>
        {['assets/booster-bottle-front.png','assets/booster-grid.png','assets/serum-pump.png','assets/serum-shadow.png'].map((s, i) => (
          <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden', background: FNX.bone, border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.12)}` }}>
            <img src={s} alt=""  role="presentation"  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </section>

    <section style={{ padding: '24px 24px 40px' }}>
      <div style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.tan, letterSpacing: '0.24em' }}>N°01 · BOOSTER</div>
      <h1 style={{ margin: '10px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 38, lineHeight: 1.02 }}>Peptosome Skin Booster.</h1>
      <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 12, fontSize: 12 }}>
        <span style={{ color: FNX.labRed, letterSpacing: '0.36em' }}>★★★★★</span>
        <span style={{ color: FNX.sage }}>4.92 / 612 reviews</span>
      </div>
      <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.8, color: FNX.pineInk }}>
        VAMTOXIN™ Peptide 2.0% — clinical essence carried into an eight-minute daily ritual.
      </p>
      <div style={{ marginTop: 22, paddingTop: 14, borderTop: `1px solid ${fnxRule(0.2)}`, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: FNX.serif, fontSize: 28, letterSpacing: '0.02em' }}>₩96,000 <span style={{ fontSize: 14, color: FNX.sage, marginLeft: 4 }}>/ ~$72</span></span>
        <span style={{ fontFamily: FNX.mono, fontSize: 11, color: FNX.sage, letterSpacing: '0.14em' }}>50ML · 1.7 FL.OZ</span>
      </div>
      <div style={{ marginTop: 20, display: 'grid', gap: 10 }}>
        <Btn kind="primary" full>Add to Bag · ₩96,000</Btn>
        <Btn kind="ghost" full style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Subscribe & Save 15%</Btn>
      </div>
    </section>

    <section style={{ background: FNX.parchment, padding: '32px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>02 — Formulation</RuleLabel>
      <h2 style={{ margin: '12px 0 16px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.15 }}>The full prescription.</h2>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {[
          { i:'01', n:'VAMTOXIN™ Peptide', r:'SNARE-inhibiting hexapeptide', p:'2.0%' },
          { i:'02', n:'Spicule Complex',   r:'Delivery aid',              p:'0.5%' },
          { i:'03', n:'Centella Asiatica', r:'Soothing',                   p:'0.5%' },
          { i:'04', n:'Niacinamide',       r:'Tone clarity',         p:'4.0%' },
        ].map((x, idx) => (
          <li key={x.n} style={{ display: 'grid', gridTemplateColumns: '24px 1fr auto', gap: 12, padding: '14px 0', borderBottom: `1px dashed ${fnxRule(0.15)}`, alignItems: 'baseline' }}>
            <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.tan, letterSpacing: '0.18em' }}>{x.i}</span>
            <div>
              <div style={{ fontFamily: FNX.serif, fontSize: 15 }}>
                {x.n}
                {idx === 0 && <span style={{ marginLeft: 8, fontSize: 10, color: FNX.labRed, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Hero</span>}
              </div>
              <div style={{ marginTop: 2, fontSize: 12, color: FNX.sage }}>{x.r}</div>
            </div>
            <div style={{ fontFamily: FNX.serif, fontSize: 15, letterSpacing: '0.06em' }}>{x.p}</div>
          </li>
        ))}
      </ul>
    </section>

    <section style={{ background: FNX.pineInk, color: FNX.cream, padding: '32px 24px' }}>
      <RuleLabel align="left" color="rgba(244,239,224,0.82)">03 — How to Use</RuleLabel>
      <h2 style={{ margin: '12px 0 18px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>Four steps, eight minutes.</h2>
      {[
        { n:'01', t:'Cleanse', k:'Cleanse' },
        { n:'02', t:'Prep', k:'Prep' },
        { n:'03', t:'Prescribe', k:'Prescribe', active:true },
        { n:'04', t:'Seal', k:'Seal' },
      ].map(s => (
        <div key={s.n} style={{ padding: '14px 0', borderTop: `1px solid ${s.active ? FNX.labRed : 'rgba(244,239,224,0.2)'}`, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <span style={{ fontFamily: FNX.mono, fontSize: 11, color: s.active ? FNX.labRed : FNX.tan, letterSpacing: '0.18em' }}>{s.n}</span>
            <span style={{ fontFamily: FNX.serif, fontSize: 18 }}>{s.t}</span>
          </div>
          <span style={{ fontSize: 11, color: 'rgba(244,239,224,0.55)' }}>{s.k}</span>
        </div>
      ))}
    </section>

    <section style={{ background: FNX.parchment, padding: '32px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>04 — Roller Applicator</RuleLabel>
      <h2 style={{ margin: '12px 0 16px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>The roller remembers the angle.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
        {['assets/serum-pump.png','assets/serum-roller-green.png','assets/serum-shadow.png'].map((src, i) => (
          <div key={i} style={{ aspectRatio: '3/4', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.18)}`, position: 'relative' }}>
            <img src={src} alt=""  role="presentation"  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <span style={{ position: 'absolute', top: 8, left: 8, fontFamily: FNX.mono, fontSize: 10, background: 'rgba(244,239,224,0.92)', color: FNX.pineInk, padding: '3px 6px', letterSpacing: '0.14em' }}>0{i+1}</span>
          </div>
        ))}
      </div>
    </section>

    <section style={{ background: FNX.cream, padding: '32px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>05 — Reviews</RuleLabel>
      <h2 style={{ margin: '12px 0 16px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 24 }}>4.92 ★ / 612 reviews</h2>
      {[
        { t:'Softer expression lines', a:'Kim · 38 · Seoul', d:'In the morning mirror, the lines feel softened.' },
        { t:'Skin that feels quiet',         a:'M.T · 36 · Shanghai', d:'Since switching, my skin has settled — I look forward to morning care.' },
      ].map((r, i) => (
        <div key={i} style={{ padding: '16px 0', borderTop: i === 0 ? `1px solid ${fnxRule(0.2)}` : `1px dashed ${fnxRule(0.14)}` }}>
          <div style={{ color: FNX.labRed, letterSpacing: '0.36em', fontSize: 11 }}>★★★★★</div>
          <h4 style={{ margin: '10px 0 6px', fontFamily: FNX.serif, fontSize: 17, fontWeight: 300 }}>{r.t}</h4>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7 }}>{r.d}</p>
          <div style={{ marginTop: 10, fontSize: 11, color: FNX.sage }}>{r.a}</div>
        </div>
      ))}
    </section>

    <MFooter />
  </div>
);

// ============ MOBILE SCIENCE ============
const ScienceMobile = () => (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
    <MHeader title="Science / VAMTOXIN™" />

    <section style={{ background: FNX.pineInk, color: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color="rgba(244,239,224,0.55)">The Science</RuleLabel>
      <h1 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 44, lineHeight: 0.98, letterSpacing: '-0.02em' }}>
        VAMTOXIN™ 2.0% — a quiet molecule.
      </h1>
      <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.7, color: 'rgba(244,239,224,0.85)' }}>
        A SNARE-inhibiting hexapeptide acting on expression muscles. An injection-free prescription.
      </p>
      <div style={{ marginTop: 24, display: 'grid', gap: 10 }}>
        <Btn kind="inverse" full>Read the Patent Story</Btn>
        <Btn kind="ghost" full style={{ color: FNX.cream, borderColor: FNX.cream }}>Shop Peptosome →</Btn>
      </div>
    </section>

    <section style={{ background: FNX.cream, padding: '32px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>01 — Mechanism</RuleLabel>
      <h2 style={{ margin: '12px 0 18px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>Quiet expression, at the protein level.</h2>
      {[
        { n:'01', t:'Receptor Bind',    d:'Hexapeptide residues bind to SNAP-25.' },
        { n:'02', t:'SNARE Inhibit',    d:'Temporarily slows SNARE complex formation.' },
        { n:'03', t:'Quiet Expression', d:'Micro-contractions settle.' },
        { n:'04', t:'Skin Stillness',   d:'The surface settles.' },
      ].map(s => (
        <div key={s.n} style={{ padding: '14px 0', borderTop: `1px solid ${fnxRule(0.18)}` }}>
          <div style={{ fontFamily: FNX.mono, fontSize: 11, color: FNX.labRed, letterSpacing: '0.18em' }}>STEP {s.n}</div>
          <h3 style={{ margin: '8px 0 4px', fontFamily: FNX.serif, fontSize: 18, fontWeight: 300 }}>{s.t}</h3>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: FNX.sage }}>{s.d}</p>
        </div>
      ))}
    </section>

    <section style={{ background: FNX.parchment, padding: '32px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>02 — The Patent</RuleLabel>
      <h2 style={{ margin: '12px 0 14px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 24, lineHeight: 1.15 }}>Sole patent, single source.</h2>
      <div style={{ aspectRatio: '3/4', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`, marginBottom: 16 }}>
        <img src="assets/booster-box-front.png" alt="VAMTOXIN™ Patent" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <p style={{ marginTop: 0, fontSize: 14, lineHeight: 1.8, color: FNX.pineInk }}>
        VAMTOXIN™ is an ingredient held exclusively by Supadelixir. A hexapeptide that mimics the Botulinum Toxin mechanism — Finixlab formulates it under exclusive license at 2.0%.
      </p>
      <div style={{ marginTop: 18, display: 'grid', gap: 0 }}>
        {[
          ['Sole Holder',   'Supadelixir'],
          ['Mechanism',     'SNARE complex inhibition'],
          ['Concentration', '2.0% (20,000 ppm)'],
        ].map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 14, padding: '12px 0', borderTop: `1px solid ${fnxRule(0.18)}` }}>
            <span style={{ fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.sage }}>{row[0]}</span>
            <span style={{ fontFamily: FNX.serif, fontSize: 14, color: FNX.pineInk }}>{row[1]}</span>
          </div>
        ))}
      </div>
    </section>

    <section style={{ background: FNX.olive, color: FNX.cream, padding: '32px 24px' }}>
      <RuleLabel align="left" color="rgba(244,239,224,0.55)">03 — Notox Method</RuleLabel>
      <h2 style={{ margin: '12px 0 16px', fontFamily: FNX.serif, fontWeight: 200, fontSize: 30, lineHeight: 1.1 }}>Notox — a verb, not a substitute.</h2>
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: 'rgba(244,239,224,0.85)' }}>
        We never claim to replace procedures. We simply fill the days between them with a daily prescription.
      </p>
    </section>

    <MFooter />
  </div>
);

// ============ MOBILE JOURNAL ============
const JournalMobile = () => {
  const articles = [
    { n:'N°012', cat:'Slow Aging', h:'On the Quiet Discipline of Peptides', img:'assets/serum-pump.png' },
    { n:'N°011', cat:'Interview',  h:'In the Cabinet of a Seoul Dermatologist', img:'assets/booster-grid.png' },
    { n:'N°010', cat:'Method',     h:'Notox — A Verb, Not a Substitute', img:'assets/serum-roller-green.png' },
    { n:'N°009', cat:'Ingredient', h:'Niacinamide at 4%', img:'assets/booster-bottle-front.png' },
    { n:'N°008', cat:'Clinic',     h:'Three Weeks After a Procedure', img:'assets/serum-shadow.png' },
  ];
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
      <MHeader title="Journal" />

      <section style={{ padding: '32px 24px' }}>
        <RuleLabel align="left" color={FNX.sage}>Vol. 01 / 2026</RuleLabel>
        <h1 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 52, lineHeight: 0.95, letterSpacing: '-0.02em' }}>The Journal.</h1>
        <p style={{ marginTop: 12, fontSize: 13, color: FNX.sage }}>Quiet dispatches, once a month.</p>
      </section>

      <section style={{ padding: '0 24px 24px' }}>
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 12 }}>
          {['All','Slow Aging','Method','Interview','Ingredient','Ritual'].map((c, i) => (
            <span key={c} style={{
              padding: '7px 14px', borderRadius: 999, fontSize: 11, letterSpacing: '0.06em', whiteSpace: 'nowrap',
              border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.18)}`,
              color: i === 0 ? FNX.pineInk : FNX.sage,
              background: i === 0 ? FNX.bone : 'transparent',
            }}>{c}</span>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 24px 40px' }}>
        {articles.map((a, i) => (
          <article key={a.n} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 14, padding: '16px 0', borderTop: i === 0 ? `1px solid ${fnxRule(0.2)}` : `1px dashed ${fnxRule(0.14)}` }}>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <img src={a.img} alt={a.h} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.tan, letterSpacing: '0.18em' }}>{a.n} · {a.cat}</div>
              <h3 style={{ margin: '8px 0 0', fontFamily: FNX.serif, fontSize: 17, fontWeight: 300, lineHeight: 1.25 }}>{a.h}</h3>
            </div>
          </article>
        ))}
      </section>

      

      <MFooter />
    </div>
  );
};

// ============ MOBILE ABOUT ============
const AboutMobile = () => (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
    <MHeader title="About" />

    <section style={{ padding: '32px 24px' }}>
      <RuleLabel align="left" color={FNX.sage}>About Finixlab</RuleLabel>
      <h1 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 44, lineHeight: 0.98 }}>A quiet pharmacy of light.</h1>
      <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.8, color: FNX.pineInk }}>
        Finixlab is a slow-aging brand that brings together clinical peptide concentrations and the poetic restraint of Korean indie beauty.
      </p>
    </section>

    <section style={{ padding: '0 24px 32px' }}>
      <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
        <img src="assets/peptosome-pair.jpg" alt="Peptosome pair" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </section>

    <section style={{ background: FNX.parchment, padding: '32px 24px' }}>
      <RuleLabel align="left" color={FNX.sage}>Founder's Letter · 01</RuleLabel>
      <h2 style={{ margin: '12px 0 6px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 22, lineHeight: 1.2 }}>The bottle, in lower case.</h2>
      <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.8, color: FNX.pineInk }}>
        I often watched patients sit in front of the mirror for days after a procedure. The brief stillness of softened expressions, slowly returning to everyday lines — and I wondered, what if we could prescribe something for those days.
      </p>
      <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.8, color: FNX.pineInk }}>
        While a single prescription stays with the skin each day, we prescribe the quietest possible ritual.
      </p>
      <div style={{ marginTop: 18, paddingTop: 14, borderTop: `1px solid ${fnxRule(0.18)}`, fontSize: 12 }}>
        <div style={{ fontFamily: FNX.serif, fontSize: 14 }}>Hyejin Yoon</div>
        <div style={{ marginTop: 2, color: FNX.sage }}>Founder</div>
      </div>
    </section>

    <section style={{ background: FNX.cream, padding: '32px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>02 — Principles</RuleLabel>
      <h2 style={{ margin: '12px 0 18px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26 }}>Four quiet principles.</h2>
      {[
        { n:'01', t:'Honesty in concentration', k:'Honest concentration' },
        { n:'02', t:'Clinic in everyday', k:'Clinic to everyday' },
        { n:'03', t:'A quiet ritual', k:'Quiet ritual' },
        { n:'04', t:'Slow Asia', k:'Slow Asia' },
      ].map(p => (
        <div key={p.n} style={{ padding: '14px 0', borderTop: `1px solid ${fnxRule(0.18)}` }}>
          <span style={{ fontFamily: FNX.mono, fontSize: 11, color: FNX.labRed, letterSpacing: '0.18em' }}>PRINCIPLE {p.n}</span>
          <h3 style={{ margin: '8px 0 4px', fontFamily: FNX.serif, fontSize: 18, fontWeight: 300 }}>{p.t}</h3>
          <p style={{ margin: 0, fontSize: 12, color: FNX.sage }}>{p.k}</p>
        </div>
      ))}
    </section>

    <section style={{ background: FNX.cream, padding: '32px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>04 — Sustainability</RuleLabel>
      <h2 style={{ margin: '12px 0 18px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26 }}>Quietly considered for the earth.</h2>
      {[
        { t:'PCR Glass',     d:'60% recycled glass bottle · FSC-certified label.' },
        { t:'Refill-Ready',  d:'50ml refill program from spring 2026. −15% when you return the bottle.' },
        { t:'Local Batch',   d:'Small-batch production at Seoul GMP partner facility.' },
        { t:'1% for Skin',   d:'1% of revenue donated to a Korean dermatology fellowship.' },
      ].map(c => (
        <div key={c.t} style={{ padding: '14px 0', borderTop: `1px solid ${fnxRule(0.18)}` }}>
          <h3 style={{ margin: 0, fontFamily: FNX.serif, fontSize: 17, fontWeight: 300 }}>{c.t}</h3>
          <p style={{ margin: '6px 0 0', fontSize: 13, lineHeight: 1.65, color: FNX.pineInk }}>{c.d}</p>
        </div>
      ))}
    </section>

    <section style={{ background: FNX.olive, color: FNX.cream, padding: '32px 24px' }}>
      <RuleLabel align="left" color="rgba(244,239,224,0.55)">05 — Clinic Partners</RuleLabel>
      <h2 style={{ margin: '12px 0 16px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>A network of slow-thinking clinics.</h2>
      {[
        ['Seoul', '14'],
        ['Shanghai', '6'],
        ['Tokyo', '5'],
        ['Ho Chi Minh', '3'],
      ].map(c => (
        <div key={c[0]} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0', borderTop: '1px solid rgba(244,239,224,0.18)' }}>
          <span style={{ fontFamily: FNX.serif, fontSize: 17 }}>{c[0]}</span>
          <span style={{ fontFamily: FNX.mono, fontSize: 11, color: 'rgba(244,239,224,0.82)', letterSpacing: '0.18em' }}>{c[1]} PARTNERS</span>
        </div>
      ))}
    </section>

    <MFooter />
  </div>
);

Object.assign(window, { ShopMobile, ProductMobile, ScienceMobile, JournalMobile, AboutMobile, MHeader, MFooter });
