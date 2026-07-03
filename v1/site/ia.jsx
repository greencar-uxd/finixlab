// IA / Sitemap artboard — shows the full site structure
const IAArtboard = () => {
  const sitemap = [
    {
      t: 'Home',
      sub: '/',
      core: true,
      sections: ['Hero · Slogan', 'Ingredient Spotlight · VAMTOXIN™', 'Ritual · 4-Step Routine', 'Before / After · Clinical Data', 'Editorial · Journal Grid', 'Reviews · Customer Voice', 'Store Locator · Clinic Partners', 'Newsletter'],
    },
    {
      t: 'Shop',
      sub: '/shop',
      sections: ['Product Index', 'Peptosome Skin Booster · /shop/peptosome', 'Sets & Rituals', 'Sample Trials', 'Cart / Checkout'],
    },
    {
      t: 'Science',
      sub: '/science',
      sections: ['VAMTOXIN™ Peptide', 'SNARE Mechanism', 'Clinical Data', 'Formulation Philosophy', 'Notox Method'],
    },
    {
      t: 'Journal',
      sub: '/journal',
      sections: ['Editorial Index', 'Slow Aging Notes', 'Clinic Interviews', 'Dispatch Archive'],
    },
    {
      t: 'About',
      sub: '/about',
      sections: ['Brand Story', 'Founders Letter', 'Clinic Partners', 'Sustainability', 'Press'],
    },
    {
      t: 'Ritual',
      sub: 'home / shop sections',
      muted: true,
      sections: ['Morning · Evening', 'Layering Guide', 'In-Clinic × At-Home', '* Not a standalone page — section within home/product'],
    },
    {
      t: 'Account',
      sub: '/account',
      muted: true,
      sections: ['Login · Sign-up', 'Order History', 'Saved Rituals', 'Address Book'],
    },
    {
      t: 'Care',
      sub: '/care',
      muted: true,
      sections: ['FAQ · Clinical', 'Order & Shipping', 'Returns', 'Contact'],
    },
  ];

  const globalNav = ['About', 'Science', 'Shop', 'Journal'];

  return (
    <div style={{
      width: '100%', minHeight: 1100, background: FNX.cream, color: FNX.pineInk,
      fontFamily: FNX.sans, fontWeight: 300, padding: '64px 80px',
    }}>
      {/* Header */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', borderBottom: `1px solid ${fnxRule(0.2)}`, paddingBottom: 28 }}>
        <div>
          <div style={{ fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage, marginBottom: 18 }}>
            <span style={{ display:'inline-block', width:8, height:8, borderRadius: '50%', background: FNX.labRed, marginRight: 12, verticalAlign: 'middle' }}/>
            Information Architecture · v01 / 2026
          </div>
          <h1 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 56, letterSpacing: '0.02em', lineHeight: 1 }}>
            Finixlab <span style={{ fontStyle: 'normal', color: FNX.sage }}>· Sitemap</span>
          </h1>
        </div>
        <div style={{ fontFamily: FNX.serif, fontSize: 12, color: FNX.sage, textAlign: 'right', lineHeight: 1.7 }}>
          <div style={{ color: FNX.pineInk, marginBottom: 4 }}>Static prototype scope</div>
          5 home variations · 1 product detail<br/>
          About · Science · Journal · Mobile
        </div>
      </div>

      {/* Global nav row */}
      <div style={{ marginTop: 32, padding: '20px 28px', background: FNX.pineInk, color: FNX.cream, display: 'flex', alignItems: 'center', gap: 24 }}>
        <span style={{ fontFamily: FNX.serif, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,239,224,0.55)' }}>Global Nav</span>
        <span style={{ width: 1, height: 14, background: 'rgba(244,239,224,0.2)' }}/>
        <div style={{ display: 'flex', gap: 28, flex: 1 }}>
          {globalNav.map(n => (
            <span key={n} style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{n}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,239,224,0.75)' }}>
          <span>KR ▾</span>
          <span>Search</span>
          <span>Account</span>
          <span style={{ color: FNX.cream }}>Bag · 2</span>
        </div>
      </div>

      {/* Sitemap grid */}
      <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px 24px' }}>
        {sitemap.map((p, i) => (
          <div key={p.t} style={{
            padding: '24px 20px',
            background: p.core ? FNX.bone : FNX.white,
            border: `1px solid ${p.core ? FNX.labRed : fnxRule(0.15)}`,
            opacity: p.muted ? 0.62 : 1,
            position: 'relative',
          }}>
            {p.core && (
              <span style={{
                position: 'absolute', top: -10, right: 16,
                fontFamily: FNX.serif, fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase',
                background: FNX.labRed, color: FNX.cream, padding: '4px 8px',
              }}>Focus</span>
            )}
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
              <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 400, fontSize: 20, letterSpacing: '0.04em' }}>{p.t}</h3>
              <span style={{ fontFamily: FNX.mono, fontSize: 10, letterSpacing: '0.1em', color: FNX.sage }}>{String(i+1).padStart(2,'0')}</span>
            </div>
            <div style={{ fontFamily: FNX.mono, fontSize: 10, letterSpacing: '0.06em', color: FNX.sage, marginBottom: 14, paddingBottom: 12, borderBottom: `1px dashed ${fnxRule(0.15)}` }}>
              {p.sub}
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8 }}>
              {p.sections.map(s => (
                <li key={s} style={{ fontSize: 12, lineHeight: 1.55, color: FNX.pineInk, paddingLeft: 12, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: 8, width: 4, height: 1, background: FNX.tan }}/>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div style={{ marginTop: 40, paddingTop: 24, borderTop: `1px solid ${fnxRule(0.15)}`, display: 'flex', gap: 32, fontSize: 11, color: FNX.sage, fontFamily: FNX.serif, letterSpacing: '0.06em' }}>
        <span style={{ display:'flex', alignItems:'center', gap: 8 }}>
          <span style={{ width: 14, height: 14, background: FNX.bone, border: `1px solid ${FNX.labRed}`, display:'inline-block' }}/>
          Focus page (designed in detail)
        </span>
        <span style={{ display:'flex', alignItems:'center', gap: 8 }}>
          <span style={{ width: 14, height: 14, background: FNX.white, border: `1px solid ${fnxRule(0.15)}`, display:'inline-block' }}/>
          Standard page (wireframe-level)
        </span>
        <span style={{ display:'flex', alignItems:'center', gap: 8 }}>
          <span style={{ width: 14, height: 14, background: FNX.white, border: `1px solid ${fnxRule(0.15)}`, display:'inline-block', opacity: 0.5 }}/>
          Functional page (placeholder)
        </span>
      </div>
    </div>
  );
};

window.IAArtboard = IAArtboard;
