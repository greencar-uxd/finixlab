// Cart · Checkout · Account · 404 · Search — desktop + mobile
// Adds: CartPage, CheckoutPage, AccountPage, NotFoundPage, SearchPage
// Plus mobile variants. All keyed by hash routes.

// ============ CART (desktop) ============
const CartPage = () => {
  const items = [
    { n:'N°01', t:'Peptosome Skin Booster', s:'50ml · Standard', p:96000, qty:1, img:'assets/booster-bottle-front.png' },
    { n:'N°02', t:'Spicule Wrinkle-Free Glow Serum', s:'20ml', p:58000, qty:1, img:'assets/serum-quartet.png' },
  ];
  const sub = items.reduce((a,i) => a + i.p * i.qty, 0);
  const ship = 0;
  const total = sub + ship;
  const krw = (n) => `₩${n.toLocaleString('ko-KR')}`;

  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, minHeight: '100vh' }}>
      <SiteHeader variant="cream" />
      <div style={{ padding: '20px 40px', borderBottom: `1px solid ${fnxRule(0.12)}`, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage, display: 'flex', gap: 12 }}>
        <a href="#/home" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a><span>/</span><span style={{ color: FNX.pineInk }}>Cart</span>
      </div>

      <Section bg={FNX.cream} padding="56px 40px 96px">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32 }}>
          <h1 style={{ ...T.hero, margin: 0, color: FNX.pineInk, fontSize: 80 }}>Your Bag.</h1>
          <span style={{ ...T.eyebrow, color: FNX.sage }}>{items.length} items · {krw(sub)}</span>
        </div>

        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 56, alignItems: 'start' }}>
          {/* Line items */}
          <div>
            {items.map(it => (
              <div key={it.n} style={{ display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: 24, padding: '24px 0', borderTop: `1px solid ${fnxRule(0.18)}`, alignItems: 'start' }}>
                <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
                  <img src={it.img} alt={it.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h3 style={{ ...T.h4, margin: '0 0 4px' }}>{it.t}</h3>
                  <div style={{ ...T.caption, color: FNX.sage }}>{it.s}</div>
                  <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 18 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, border: `1px solid ${fnxRule(0.2)}`, padding: '4px 10px' }}>
                      <button style={{ background: 'none', border: 'none', fontSize: 16, padding: '4px 6px', cursor: 'pointer', color: FNX.pineInk }}>−</button>
                      <span style={{ fontFamily: FNX.serif, fontSize: 14, minWidth: 14, textAlign: 'center' }}>{it.qty}</span>
                      <button style={{ background: 'none', border: 'none', fontSize: 16, padding: '4px 6px', cursor: 'pointer', color: FNX.pineInk }}>+</button>
                    </div>
                    <button type="button" style={{ ...T.caption, color: FNX.sage, textDecoration: 'underline', background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit' }}>Remove</button>
                  </div>
                </div>
                <div style={{ fontFamily: FNX.serif, fontSize: 20, letterSpacing: '0.02em' }}>{krw(it.p * it.qty)}</div>
              </div>
            ))}
            <div style={{ marginTop: 28, paddingTop: 20, borderTop: `1px solid ${fnxRule(0.18)}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} size="sm">← Continue Shopping</Btn>
              <span style={{ ...T.caption, color: FNX.sage }}>Free samples included.</span>
            </div>
          </div>

          {/* Summary */}
          <aside style={{ background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`, padding: 32 }}>
            <h3 style={{ ...T.h4, margin: 0 }}>Order Summary</h3>
            <div style={{ marginTop: 22, display: 'grid', gap: 14 }}>
              {[['Subtotal', krw(sub)], ['Shipping', 'Free'], ['Estimated tax', 'Calculated at checkout']].map(r => (
                <div key={r[0]} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: FNX.pineInk }}>
                  <span style={{ color: FNX.sage }}>{r[0]}</span><span>{r[1]}</span>
                </div>
              ))}
              <div style={{ paddingTop: 16, borderTop: `1px solid ${fnxRule(0.2)}`, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ ...T.h4 }}>Total</span>
                <span style={{ ...T.h2, fontSize: 30 }}>{krw(total)}</span>
              </div>
            </div>
            <div style={{ marginTop: 24 }}>
              <Btn kind="primary" full size="lg">Checkout →</Btn>
            </div>
            <p style={{ marginTop: 14, ...T.caption, color: FNX.sage, textAlign: 'center' }}>
              Free shipping over ₩60,000 · KR · JP · CN · VN
            </p>
            <div style={{ marginTop: 22, paddingTop: 18, borderTop: `1px solid ${fnxRule(0.14)}`, display: 'grid', gap: 8, fontSize: 12, color: FNX.sage }}>
              <div>↳ 30-day return on unopened</div>
              <div>↳ Discreet packaging</div>
              <div>↳ Carbon-offset shipping</div>
            </div>
          </aside>
        </div>
      </Section>

      <SiteFooter variant="pine" />
    </div>
  );
};

// ============ EMPTY CART (variant via ?empty hash) ============
const EmptyCartPage = () => (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
    <SiteHeader variant="cream" />
    <Section bg={FNX.cream} padding="120px 40px">
      <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto' }}>
        <RuleLabel align="center" color={FNX.tan}>Your Bag</RuleLabel>
        <h1 style={{ ...T.hero, margin: '24px 0 0', fontSize: 80 }}>An empty bag.</h1>
        <p style={{ ...T.bodyLg, marginTop: 18, color: FNX.sage }}>
          Browse the collection to start your prescription.
        </p>
        <div style={{ marginTop: 32, display: 'flex', gap: 14, justifyContent: 'center' }}>
          <Btn kind="primary" size="lg">Shop the Collection →</Btn>
          <Btn kind="ghost" size="lg" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Order Sample</Btn>
        </div>
      </div>
    </Section>
    <SiteFooter variant="pine" />
  </div>
);

// ============ ACCOUNT — login + sign up combined ============
const AccountPage = () => (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
    <SiteHeader variant="cream" />
    <Section bg={FNX.cream} padding="80px 40px 120px">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, maxWidth: 980, margin: '0 auto', alignItems: 'start' }}>
        <div>
          <RuleLabel align="left" color={FNX.tan}>Returning</RuleLabel>
          <h1 style={{ ...T.h1, margin: '14px 0 0', fontSize: 48 }}>Sign in.</h1>
          <form style={{ marginTop: 28, display: 'grid', gap: 18 }}>
            <label style={{ display: 'grid', gap: 6 }}>
              <span style={{ ...T.eyebrow, color: FNX.sage }}>Email</span>
              <input type="email" placeholder="your@email.com" style={inputStyle} />
            </label>
            <label style={{ display: 'grid', gap: 6 }}>
              <span style={{ ...T.eyebrow, color: FNX.sage }}>Password</span>
              <input aria-label="Password" type="password" placeholder="••••••••" style={inputStyle} />
            </label>
            <Btn kind="primary" full size="lg">Sign In →</Btn>
            <div style={{ display: 'flex', justifyContent: 'space-between', ...T.caption, color: FNX.sage }}>
              <a href="#" style={{ color: 'inherit' }}>Forgot password?</a>
              <a href="#" style={{ color: 'inherit' }}>Magic link login</a>
            </div>
          </form>
        </div>
        <div style={{ background: FNX.bone, padding: 32, border: `1px solid ${fnxRule(0.12)}` }}>
          <RuleLabel align="left" color={FNX.tan}>New here</RuleLabel>
          <h2 style={{ ...T.h2, margin: '14px 0 0', fontSize: 32 }}>Create an account.</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 28px', display: 'grid', gap: 10 }}>
            {['Order tracking · quick reorder','Monthly subscription · save 15%','Priority clinic partner access','Member-only sample trials'].map(b => (
              <li key={b} style={{ ...T.body, color: FNX.pineInk, paddingLeft: 14, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: 11, width: 6, height: 1, background: FNX.labRed }}/>
                {b}
              </li>
            ))}
          </ul>
          <Btn kind="primary" full size="lg">Create Account →</Btn>
          <p style={{ marginTop: 14, ...T.caption, color: FNX.sage, textAlign: 'center' }}>Sign up with Email · Kakao · Apple</p>
        </div>
      </div>
    </Section>
    <SiteFooter variant="pine" />
  </div>
);

const inputStyle = {
  width: '100%', padding: '14px 16px',
  background: FNX.bone, border: `1px solid ${fnxRule(0.18)}`,
  fontFamily: FNX.sans,
  fontSize: 14, color: FNX.pineInk,
};

// ============ SEARCH RESULTS ============
const SearchPage = () => {
  const results = [
    { t:'Peptosome Skin Booster', cat:'Product · Booster', img:'assets/booster-bottle-front.png', href:'#/shop/peptosome' },
    { t:'Spicule Wrinkle-Free Glow Serum', cat:'Product · Serum', img:'assets/serum-quartet.png', href:'#/shop' },
    { t:'On the Quiet Discipline of Peptides', cat:'Journal · Slow Aging', img:'assets/serum-pump.png', href:'#/journal' },
    { t:'VAMTOXIN™ Patent Story', cat:'Science', img:'assets/booster-box-front.png', href:'#/science' },
  ];
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />
      <Section bg={FNX.cream} padding="56px 40px 96px">
        <RuleLabel align="left" color={FNX.tan}>Search</RuleLabel>
        <div style={{ marginTop: 18, position: 'relative' }}>
          <input type="search" aria-label="Search" defaultValue="peptide" placeholder="Search for prescriptions, journal entries…" style={{
            ...inputStyle, fontSize: 28, padding: '18px 56px 18px 56px',
            border: `1px solid ${fnxRule(0.3)}`,
            fontFamily: '"Pretendard Variable", system-ui, sans-serif', fontWeight: 300,
          }} />
          <span aria-hidden="true" style={{ position: 'absolute', left: 22, top: '50%', transform: 'translateY(-50%)', color: FNX.pineInk, display: 'inline-flex' }}>
            <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5"/><path d="M11 11l3.5 3.5"/></svg>
          </span>
          <button type="button" aria-label="Clear search" style={{ position: 'absolute', right: 22, top: '50%', transform: 'translateY(-50%)', color: FNX.pineInk, cursor: 'pointer', display: 'inline-flex', border: 'none', background: 'none', padding: 0 }}>
            <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4l8 8M12 4l-8 8"/></svg>
          </button>
        </div>
        <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
          {['All', 'Products', 'Journal', 'Science', 'Ingredients'].map((f, i) => (
            <span key={f} style={{ padding: '7px 14px', borderRadius: 999, border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.18)}`, color: i === 0 ? FNX.pineInk : FNX.sage, background: i === 0 ? FNX.bone : 'transparent', fontSize: 12 }}>{f}</span>
          ))}
        </div>

        <h2 style={{ ...T.h3, margin: '36px 0 18px', color: FNX.sage, fontSize: 16 }}>
          "peptide" — {results.length} results
        </h2>
        <div style={{ display: 'grid', gap: 0 }}>
          {results.map((r, i) => (
            <a key={i} href={r.href} style={{ display: 'grid', gridTemplateColumns: '88px 1fr auto', gap: 24, padding: '20px 0', borderTop: `1px solid ${fnxRule(0.18)}`, color: 'inherit', textDecoration: 'none' }}>
              <div style={{ aspectRatio: '1/1', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
                <img src={r.img} alt={r.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ ...T.eyebrow, color: FNX.sage }}>{r.cat}</div>
                <h3 style={{ ...T.h4, margin: '8px 0 0' }}>{r.t}</h3>
              </div>
              <span style={{ alignSelf: 'center', ...T.caption, color: FNX.sage }}>→</span>
            </a>
          ))}
        </div>
      </Section>
      <SiteFooter variant="pine" />
    </div>
  );
};

// ============ 404 ============
const NotFoundPage = () => (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, minHeight: '100vh' }}>
    <SiteHeader variant="cream" />
    <Section bg={FNX.cream} padding="160px 40px" style={{ textAlign: 'center' }}>
      <div style={{ maxWidth: 540, margin: '0 auto' }}>
        <div style={{ ...T.eyebrow, color: FNX.labRed }}>Error · 404</div>
        <h1 style={{ ...T.hero, margin: '20px 0 0', fontSize: 120 }}>Quietly, not here.</h1>
        <p style={{ ...T.bodyLg, marginTop: 22, color: FNX.sage }}>
          The page you're looking for isn't on this shelf.<br/>
          Return home, or browse the collection.
        </p>
        <div style={{ marginTop: 36, display: 'flex', gap: 14, justifyContent: 'center' }}>
          <Btn kind="primary" size="lg">← Back to Home</Btn>
          <Btn kind="ghost" size="lg" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Shop</Btn>
        </div>
      </div>
    </Section>
    <SiteFooter variant="pine" />
  </div>
);

// ============ MOBILE CART — aligned to CartPage ============
const CartMobile = () => {
  const items = [
    { n:'N°01', t:'Peptosome Skin Booster', s:'50ml · Standard', p:96000, qty:1, img:'assets/booster-bottle-front.png' },
    { n:'N°02', t:'Spicule Wrinkle-Free Glow Serum', s:'20ml', p:58000, qty:1, img:'assets/serum-quartet.png' },
  ];
  const sub = items.reduce((a,i) => a + i.p * i.qty, 0);
  const ship = 0;
  const total = sub + ship;
  const krw = (n) => `₩${n.toLocaleString('ko-KR')}`;
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <MHeader title="Your Bag" />

      {/* sticky checkout */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90,
        background: fnxCream(0.96), borderTop: `1px solid ${fnxRule(0.2)}`,
        padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 12,
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ ...T.eyebrow, color: FNX.sage }}>Total · {items.length} items</div>
          <div style={{ ...T.h4, marginTop: 2 }}>{krw(total)}</div>
        </div>
        <Btn kind="primary">Checkout →</Btn>
      </div>

      <section style={{ padding: '24px', flex: 1 }}>
        {/* heading + count · subtotal */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
          <h1 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 200, fontSize: 40, lineHeight: 1, letterSpacing: '-0.02em' }}>Your Bag.</h1>
          <span style={{ ...T.eyebrow, color: FNX.sage, fontSize: 11 }}>{items.length} items · {krw(sub)}</span>
        </div>

        {/* line items */}
        {items.map((it, i) => (
          <div key={it.n} style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 16, padding: '16px 0', borderTop: i === 0 ? `1px solid ${fnxRule(0.18)}` : `1px dashed ${fnxRule(0.14)}` }}>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <img src={it.img} alt={it.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <h3 style={{ margin: '0 0 4px', fontFamily: FNX.serif, fontSize: 16, fontWeight: 400 }}>{it.t}</h3>
              <div style={{ ...T.caption, color: FNX.sage }}>{it.s}</div>
              <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, border: `1px solid ${fnxRule(0.2)}`, padding: '2px 8px' }}>
                  <button style={{ background: 'none', border: 'none', fontSize: 14, padding: '4px 6px', color: FNX.pineInk }}>−</button>
                  <span style={{ fontSize: 13 }}>{it.qty}</span>
                  <button style={{ background: 'none', border: 'none', fontSize: 14, padding: '4px 6px', color: FNX.pineInk }}>+</button>
                </div>
                <span style={{ fontFamily: FNX.serif, fontSize: 16 }}>{krw(it.p * it.qty)}</span>
              </div>
              <a href="#" style={{ display: 'inline-block', marginTop: 8, ...T.caption, color: FNX.sage, textDecoration: 'underline' }}>Remove</a>
            </div>
          </div>
        ))}

        {/* continue shopping + samples note */}
        <div style={{ marginTop: 18, paddingTop: 16, borderTop: `1px solid ${fnxRule(0.18)}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <Btn kind="ghost" size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>← Continue</Btn>
          <span style={{ ...T.caption, color: FNX.sage }}>Free samples included.</span>
        </div>

        {/* order summary */}
        <div style={{ marginTop: 24, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`, padding: 20 }}>
          <h3 style={{ margin: 0, fontFamily: FNX.serif, fontSize: 16, fontWeight: 400 }}>Order Summary</h3>
          <div style={{ marginTop: 16, display: 'grid', gap: 12 }}>
            {[['Subtotal', krw(sub)], ['Shipping', 'Free'], ['Estimated tax', 'Calculated at checkout']].map(r => (
              <div key={r[0]} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: FNX.pineInk }}>
                <span style={{ color: FNX.sage }}>{r[0]}</span><span>{r[1]}</span>
              </div>
            ))}
            <div style={{ paddingTop: 14, borderTop: `1px solid ${fnxRule(0.2)}`, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: FNX.serif, fontSize: 16, fontWeight: 400 }}>Total</span>
              <span style={{ fontFamily: FNX.serif, fontSize: 24, letterSpacing: '0.01em' }}>{krw(total)}</span>
            </div>
          </div>
          <p style={{ margin: '14px 0 0', ...T.caption, color: FNX.sage, textAlign: 'center' }}>
            Free shipping over ₩60,000 · KR · JP · CN · VN
          </p>
          <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px solid ${fnxRule(0.14)}`, display: 'grid', gap: 8, fontSize: 12, color: FNX.sage }}>
            <div>↳ 30-day return on unopened</div>
            <div>↳ Discreet packaging</div>
            <div>↳ Carbon-offset shipping</div>
          </div>
        </div>
      </section>

      <div style={{ paddingBottom: 72, background: FNX.pineInk }}>
        <MFooter />
      </div>
    </div>
  );
};

// ============ MOBILE ACCOUNT — aligned to AccountPage ============
const AccountMobile = () => (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
    <MHeader title="Account" />
    {/* Returning — Sign in */}
    <section style={{ padding: '32px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>Returning</RuleLabel>
      <h1 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontSize: 36, fontWeight: 300 }}>Sign in.</h1>
      <form style={{ marginTop: 24, display: 'grid', gap: 14 }}>
        <label style={{ display: 'grid', gap: 6 }}>
          <span style={{ ...T.eyebrow, color: FNX.sage, fontSize: 11 }}>Email</span>
          <input type="email" placeholder="your@email.com" style={inputStyle} />
        </label>
        <label style={{ display: 'grid', gap: 6 }}>
          <span style={{ ...T.eyebrow, color: FNX.sage, fontSize: 11 }}>Password</span>
          <input aria-label="Password" type="password" placeholder="••••••••" style={inputStyle} />
        </label>
        <Btn kind="primary" full size="lg">Sign In →</Btn>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: FNX.sage }}>
          <a href="#" style={{ color: 'inherit' }}>Forgot password?</a>
          <a href="#" style={{ color: 'inherit' }}>Magic link login</a>
        </div>
      </form>
    </section>
    {/* New here — Create an account */}
    <section style={{ background: FNX.parchment, padding: '32px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>New here</RuleLabel>
      <h2 style={{ margin: '12px 0 14px', fontFamily: FNX.serif, fontSize: 26, fontWeight: 300 }}>Create an account.</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'grid', gap: 8 }}>
        {['Order tracking · quick reorder','Monthly subscription · save 15%','Priority clinic partner access','Member-only sample trials'].map(b => (
          <li key={b} style={{ fontSize: 13, color: FNX.pineInk, paddingLeft: 14, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, top: 9, width: 6, height: 1, background: FNX.labRed }}/>
            {b}
          </li>
        ))}
      </ul>
      <Btn kind="primary" full size="lg">Create Account →</Btn>
      <p style={{ margin: '14px 0 0', ...T.caption, color: FNX.sage, textAlign: 'center' }}>Sign up with Email · Kakao · Apple</p>
    </section>
    <MFooter />
  </div>
);

// ============ MOBILE SEARCH — aligned to SearchPage ============
const SearchMobile = () => {
  const results = [
    { t:'Peptosome Skin Booster', cat:'Product · Booster', img:'assets/booster-bottle-front.png', href:'#/shop/peptosome' },
    { t:'Spicule Wrinkle-Free Glow Serum', cat:'Product · Serum', img:'assets/serum-quartet.png', href:'#/shop' },
    { t:'On the Quiet Discipline of Peptides', cat:'Journal · Slow Aging', img:'assets/serum-pump.png', href:'#/journal' },
    { t:'VAMTOXIN™ Patent Story', cat:'Science', img:'assets/booster-box-front.png', href:'#/science' },
  ];
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
      <MHeader title="Search" />
      <section style={{ padding: '24px' }}>
        <RuleLabel align="left" color={FNX.tan}>Search</RuleLabel>
        <div style={{ marginTop: 12, position: 'relative' }}>
          <input type="search" aria-label="Search" defaultValue="peptide" placeholder="Search for prescriptions, journal entries…" style={{
            ...inputStyle, fontSize: 20, padding: '14px 44px 14px 44px', fontWeight: 300,
            border: `1px solid ${fnxRule(0.3)}`,
          }} />
          <span aria-hidden="true" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: FNX.pineInk, display: 'inline-flex' }}>
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5"/><path d="M11 11l3.5 3.5"/></svg>
          </span>
          <button type="button" aria-label="Clear search" style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: FNX.pineInk, cursor: 'pointer', display: 'inline-flex', border: 'none', background: 'none', padding: 0 }}>
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4l8 8M12 4l-8 8"/></svg>
          </button>
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 6, overflowX: 'auto' }}>
          {['All','Products','Journal','Science','Ingredients'].map((f, i) => (
            <span key={f} style={{ padding: '6px 12px', borderRadius: 999, border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.18)}`, color: i === 0 ? FNX.pineInk : FNX.sage, background: i === 0 ? FNX.bone : 'transparent', fontSize: 11, whiteSpace: 'nowrap' }}>{f}</span>
          ))}
        </div>
        <h2 style={{ margin: '24px 0 12px', fontSize: 13, color: FNX.sage }}>"peptide" — {results.length} results</h2>
        {results.map((r, i) => (
          <a key={i} href={r.href} style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: 14, padding: '14px 0', borderTop: `1px solid ${fnxRule(0.18)}`, color: 'inherit', textDecoration: 'none' }}>
            <div style={{ aspectRatio: '1/1', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <img src={r.img} alt={r.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontFamily: FNX.serif, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{r.cat}</div>
              <h3 style={{ margin: '6px 0 0', fontFamily: FNX.serif, fontSize: 15, fontWeight: 400 }}>{r.t}</h3>
            </div>
            <span style={{ alignSelf: 'center', ...T.caption, color: FNX.sage }}>→</span>
          </a>
        ))}
      </section>
      <MFooter />
    </div>
  );
};

// ============ MOBILE 404 ============
const NotFoundMobile = () => (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14, minHeight: '100vh' }}>
    <MHeader />
    <section style={{ padding: '80px 24px', textAlign: 'center' }}>
      <div style={{ ...T.eyebrow, color: FNX.labRed, fontSize: 11 }}>Error · 404</div>
      <h1 style={{ margin: '18px 0 0', fontFamily: FNX.serif, fontSize: 56, fontWeight: 200, lineHeight: 1 }}>Quietly, not here.</h1>
      <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.7, color: FNX.sage }}>
        The page you're looking for isn't on this shelf.<br/>
        Return home, or browse the collection.
      </p>
      <div style={{ marginTop: 28, display: 'grid', gap: 10 }}>
        <Btn kind="primary" full>← Back to Home</Btn>
        <Btn kind="ghost" full style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Shop</Btn>
      </div>
    </section>
    <MFooter />
  </div>
);

Object.assign(window, {
  CartPage, EmptyCartPage, AccountPage, SearchPage, NotFoundPage,
  CartMobile, AccountMobile, SearchMobile, NotFoundMobile,
});
