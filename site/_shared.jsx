// Shared design tokens + components for Finixlab website mockups
// Globally exposes: FNX (tokens), SiteHeader, SiteFooter, Slogan, Btn,
// ProductShot, EditorialBlock, RuleLabel, MonoTag, Tag

const FNX = {
  // colors (from concept board)
  pineInk:  '#173830',
  pine:     '#295B52',
  sage:     '#4C5A4B',
  tan:      '#B8A580',
  cream:    '#F4EFE0',
  parchment:'#E8DFC9',
  white:    '#FFFFFF',
  bone:     '#FBF8F2',
  olive:    '#37533D',
  labRed:   '#EE313E',
  // type
  serif:    '"Outfit", "Pretendard Variable", "Pretendard", system-ui, sans-serif',
  sans:     '"Pretendard", system-ui, sans-serif',
  mono:     'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
};

// — semantic roles (layer 2) + scales, built on the primitives above
Object.assign(FNX, {
  labRedDark:      '#D5232F',                 // accent button hover
  textMuted:       FNX.sage,                  // muted text on light surfaces
  textOnDark:      'rgba(244,239,224,0.85)',  // body text on pine/olive
  textOnDarkMuted: 'rgba(244,239,224,0.72)',  // meta/labels on pine/olive
  surface:         FNX.bone,                  // card / input surface
  surfaceAlt:      FNX.parchment,             // alternate section surface
  space:           { xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, xxxl: 64, huge: 96, section: 120 },
});

// ============ TYPE SCALE — single source of truth ============
// One ladder used across every page. Rule of thumb:
//   hero    — exactly 1 per page (96)
//   h1/page — 1 per page (72)
//   h2/section — section headings (44)
//   h3/group   — subsection / pull (28)
//   h4/card    — product/journal card titles (20)
//   body / small / eyebrow — text
const T = {
  // Headings — Pretendard light
  hero:     { fontFamily: '"Pretendard Variable", "Pretendard", system-ui, sans-serif', fontWeight: 200, fontSize: 96,  lineHeight: 1.0,  letterSpacing: '-0.025em' },
  h1:       { fontFamily: '"Pretendard Variable", "Pretendard", system-ui, sans-serif', fontWeight: 300, fontSize: 72,  lineHeight: 1.04, letterSpacing: '-0.02em' },
  h2:       { fontFamily: '"Pretendard Variable", "Pretendard", system-ui, sans-serif', fontWeight: 300, fontSize: 44,  lineHeight: 1.12, letterSpacing: '-0.015em' },
  h3:       { fontFamily: '"Pretendard Variable", "Pretendard", system-ui, sans-serif', fontWeight: 300, fontSize: 28,  lineHeight: 1.22, letterSpacing: '-0.01em' },
  h4:       { fontFamily: '"Pretendard Variable", "Pretendard", system-ui, sans-serif', fontWeight: 300, fontSize: 20,  lineHeight: 1.25, letterSpacing: '0.02em'   },
  // Korean headings — Pretendard 300
  heroKo:   { fontFamily: '"Pretendard", system-ui, sans-serif', fontWeight: 300, fontSize: 80, lineHeight: 1.05, letterSpacing: '-0.01em' },
  h2Ko:     { fontFamily: '"Pretendard", system-ui, sans-serif', fontWeight: 300, fontSize: 40, lineHeight: 1.2,  letterSpacing: '-0.02em' },
  // Body & meta
  bodyLg:   { fontFamily: '"Pretendard", system-ui, sans-serif', fontWeight: 300, fontSize: 16, lineHeight: 1.85 },
  body:     { fontFamily: '"Pretendard", system-ui, sans-serif', fontWeight: 300, fontSize: 14, lineHeight: 1.8  },
  small:    { fontFamily: '"Pretendard", system-ui, sans-serif', fontWeight: 300, fontSize: 13, lineHeight: 1.7  },
  caption:  { fontFamily: '"Pretendard", system-ui, sans-serif', fontWeight: 300, fontSize: 12, lineHeight: 1.6  },
  // Eyebrow / overline (RuleLabel)
  eyebrow:  { fontFamily: '"Pretendard Variable", "Pretendard", system-ui, sans-serif', fontWeight: 400, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase' },
  // Mono utility
  mono:     { fontFamily: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace', fontSize: 12, letterSpacing: '0.14em' },
};

// — global helpers
const fnxRule  = (alpha = 0.18) => `rgba(23,56,48,${alpha})`;
const fnxCream = (alpha = 1)    => `rgba(244,239,224,${alpha})`;   // cream on dark surfaces
const ucLetters = (s) => s.split('').join(' ');

// ============ HEADER ============
// variant: 'cream' (default) | 'pine' | 'transparent'
function SiteHeader({ variant = 'cream', sticky = false, lang = 'EN' }) {
  const isPine = variant === 'pine';
  const fg = isPine ? FNX.cream : FNX.pineInk;
  const subFg = isPine ? fnxCream(0.82) : FNX.sage;
  const ruleColor = isPine ? fnxCream(0.18) : fnxRule(0.14);
  const bg = isPine ? FNX.pine : (variant === 'transparent' ? 'transparent' : FNX.cream);

  return (
    <header style={{
      position: sticky ? 'sticky' : 'relative',
      top: 0, zIndex: 50,
      background: bg,
      color: fg,
      borderBottom: `1px solid ${ruleColor}`,
      padding: '22px 40px',
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      fontFamily: FNX.sans,
      fontWeight: 300,
    }}>
      {/* Logo */}
      <a href="#/home" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
        <img src="assets/fnxlab-logo.png" alt="Finixlab"
          style={{ height: 22, filter: isPine ? 'brightness(0) invert(1) sepia(0.05)' : 'none', opacity: isPine ? 0.95 : 1 }} />
      </a>

      {/* Nav */}
      <nav style={{
        display: 'flex', gap: 28, flex: 1, justifyContent: 'center',
        fontFamily: FNX.serif, fontWeight: 300, fontSize: 13,
        letterSpacing: '0.16em', textTransform: 'uppercase',
      }}>
        {['About', 'Science', 'Shop', 'Journal'].map(l =>
          <a key={l} href={`#/${l.toLowerCase()}`} style={{ color: fg, textDecoration: 'none' }}>{l}</a>
        )}
      </nav>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 12 }}>
        <span style={{ color: subFg, fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.14em' }}>
          {lang} ▾
        </span>
        <span style={{ width: 1, height: 14, background: ruleColor, marginLeft: 4 }}/>
        <a href="#/search" aria-label="Search" style={{ color: fg, textDecoration: 'none', display: 'inline-flex', padding: 4 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="7" cy="7" r="5"/><path d="M11 11l3.5 3.5"/></svg>
        </a>
        <a href="#/account" aria-label="Account" style={{ color: fg, textDecoration: 'none', display: 'inline-flex', padding: 4 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="8" cy="5.5" r="2.5"/><path d="M3 14c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5"/></svg>
        </a>
        <a href="#/cart" aria-label="Bag" style={{ color: fg, textDecoration: 'none', display: 'inline-flex', padding: 4, position: 'relative' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 5h10l-1 9H4L3 5z"/><path d="M6 5V3.5a2 2 0 014 0V5"/></svg>
          <span style={{ position: 'absolute', top: 2, right: 2, width: 5, height: 5, borderRadius: '50%', background: FNX.labRed }}/>
        </a>
      </div>
    </header>
  );
}

// ============ FOOTER ============
function SiteFooter({ variant = 'pine' }) {
  const isPine = variant === 'pine';
  const bg = isPine ? FNX.pineInk : FNX.cream;
  const fg = isPine ? FNX.cream : FNX.pineInk;
  const subFg = isPine ? fnxCream(0.72) : FNX.sage;
  const rule = isPine ? fnxCream(0.12) : fnxRule(0.14);

  const cols = [
    { t:'Shop',  items:['Peptosome Skin Booster','Notox Cream · FW 26','Sets & Rituals','Sample Trials'] },
    { t:'Care',  items:['Customer Care','Order & Shipping','Returns','Product FAQ'] },
    { t:'Brand', items:['Our Science','Sustainability','Press','Partners & Clinics'] },
    { t:'Connect', items:['Instagram','YouTube','Store Locator'] },
  ];

  return (
    <footer style={{ background: bg, color: fg, padding: '40px 40px 32px', fontFamily: FNX.sans, fontWeight: 300 }}>

      {/* Columns */}
      <div style={{
        display:'grid', gridTemplateColumns:'1.4fr repeat(4, 1fr)', gap: 32,
        paddingBottom: 36, borderBottom: `1px solid ${rule}`,
      }}>
        <div>
          <img src="assets/fnxlab-logo.png" alt="Finixlab" style={{ height: 24, filter: isPine ? 'brightness(0) invert(1)' : 'none', opacity: 0.92, marginBottom: 18 }} />
          <p style={{ fontSize: 12, lineHeight: 1.7, color: subFg, maxWidth: '32ch' }}>
            Real Efficacy, Quietly Delivered.
          </p>
          <p style={{ fontSize: 12, lineHeight: 1.7, color: subFg, marginTop: 16 }}>
            Finixlab · Paju, Gyeonggi · KR · Ships globally
          </p>
        </div>
        {cols.map(c => (
          <div key={c.t}>
            <div style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: subFg, marginBottom: 18 }}>{c.t}</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10 }}>
              {c.items.map(i => <li key={i} style={{ fontSize: 13 }}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div style={{
        paddingTop: 24,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 12, color: subFg, fontFamily: FNX.serif, letterSpacing: '0.12em',
      }}>
        <span>© 2026 Finixlab Co., Ltd.</span>
        <span style={{ display:'flex', gap: 18 }}>
          <a href="#/privacy" style={{ color: subFg, textDecoration: 'none' }}>Privacy</a>
          <a href="#/terms" style={{ color: subFg, textDecoration: 'none' }}>Terms</a>
          <a href="#/cookies" style={{ color: subFg, textDecoration: 'none' }}>Cookies</a>
        </span>
        <span>Real Efficacy, Quietly Delivered.</span>
      </div>
    </footer>
  );
}

// ============ BUTTONS & UI ATOMS ============
function Btn({ children, kind = 'primary', size = 'md', style = {}, full = false, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: 'inline-flex', boxSizing: 'border-box', alignItems: 'center', justifyContent: 'center', gap: 8,
    whiteSpace: 'nowrap',
    fontFamily: FNX.serif, fontWeight: 400, letterSpacing: '0.16em',
    textTransform: 'uppercase', cursor: 'pointer', border: '1px solid currentColor',
    transition: 'background-color .22s, color .22s, transform .22s, opacity .22s',
    textDecoration: 'none',
    padding: size === 'lg' ? '16px 28px' : size === 'sm' ? '8px 14px' : '13px 22px',
    fontSize: size === 'lg' ? 13 : 12,
    width: full ? '100%' : 'auto',
    transform: hover ? 'translateY(-1px)' : 'translateY(0)',
  };
  const variants = {
    primary:  { background: hover ? FNX.pine : FNX.pineInk, color: FNX.cream, borderColor: hover ? FNX.pine : FNX.pineInk },
    inverse:  { background: hover ? FNX.white : FNX.cream, color: FNX.pineInk, borderColor: hover ? FNX.white : FNX.cream },
    ghost:    { background: hover ? fnxRule(0.05) : 'transparent', color: 'currentColor' },
    accent:   { background: hover ? FNX.labRedDark : FNX.labRed, color: FNX.cream, borderColor: hover ? FNX.labRedDark : FNX.labRed },
  };
  return <button type="button" className="btn" {...rest} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onFocus={() => setHover(true)} onBlur={() => setHover(false)} style={{ ...base, ...variants[kind], ...style }}>{children}</button>;
}

// ============ SLOGAN / EDITORIAL ============
function Slogan({ size = 'md', align = 'left', color = FNX.pineInk, en = 'Real Efficacy,\nQuietly Delivered.', ko = '정직한 농도, 조용한 효능.' }) {
  const sizes = {
    sm: { en: 36, ko: 16 },
    md: { en: 56, ko: 19 },
    lg: { en: 88, ko: 22 },
    xl: { en: 120, ko: 26 },
  };
  const s = sizes[size];
  return (
    <div style={{ textAlign: align, color }}>
      <h1 style={{
        margin: 0, fontFamily: FNX.serif, fontWeight: 300,
        fontSize: s.en, lineHeight: 1.05, letterSpacing: '-0.01em',
        whiteSpace: 'pre-line',
      }}>{en}</h1>
      <p lang="ko" style={{
        margin: '20px 0 0', fontFamily: FNX.sans, fontWeight: 300,
        fontSize: s.ko, letterSpacing: '-0.02em', opacity: 0.7,
      }}>{ko}</p>
    </div>
  );
}

// ============ PRODUCT SHOT (uses real photo) ============
function ProductShot({ src = 'assets/fnxlab-product.jpg', alt = 'Peptosome Skin Booster', bg = FNX.bone, height = 520, objectPosition = '58% center', children, frame = false, contain = false }) {
  return (
    <div style={{
      width: '100%', height,
      background: bg, position: 'relative', overflow: 'hidden',
      border: frame ? `1px solid ${fnxRule(0.12)}` : 'none',
    }}>
      <img src={src} alt={alt}
        style={{
          width: '100%', height: '100%',
          objectFit: contain ? 'contain' : 'cover',
          objectPosition,
          display: 'block',
        }} />
      {children}
    </div>
  );
}

// ============ MISC ATOMS ============
function MonoTag({ children, color = FNX.pineInk, bg = 'rgba(244,239,224,0.92)' }) {
  return (
    <span style={{
      fontFamily: FNX.mono, fontSize: 12, letterSpacing: '0.14em',
      color, background: bg, padding: '6px 10px',
      border: `1px solid ${fnxRule(0.18)}`, display: 'inline-block',
    }}>{children}</span>
  );
}

function Tag({ children, accent = false }) {
  const c = accent ? FNX.labRed : FNX.pineInk;
  return (
    <span style={{
      border: `1px solid ${accent ? FNX.labRed : fnxRule(0.2)}`,
      borderRadius: 999, padding: '8px 14px', fontSize: 12, letterSpacing: '0.04em',
      color: c, fontFamily: FNX.sans, fontWeight: 300,
    }}>{children}</span>
  );
}

function RuleLabel() {
  // eyebrow/section labels removed per design — render nothing site-wide
  return null;
}
function RuleLabelOld({ children, color, align = 'left' }) {
  return (
    <div style={{
      fontFamily: FNX.serif, fontSize: 12, fontWeight: 300,
      letterSpacing: '0.14em', textTransform: 'uppercase',
      color: color || FNX.sage, display: 'flex', alignItems: 'center', gap: 12,
      justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
    }}>
      {align !== 'left' && <span style={{ width: 24, height: 1, background: 'currentColor', opacity: 0.4 }}/>}
      <span>{children}</span>
      {align !== 'right' && <span style={{ width: 24, height: 1, background: 'currentColor', opacity: 0.4 }}/>}
    </div>
  );
}

// Editorial section wrapper with responsive container
function Section({ bg = FNX.cream, padding = '120px 40px', children, style = {}, contained = true }) {
  return (
    <section style={{
      background: bg, padding,
      fontFamily: FNX.sans, fontWeight: 300, color: FNX.pineInk,
      ...style,
    }}>
      {contained ? <div style={{ maxWidth: 1320, margin: '0 auto' }}>{children}</div> : children}
    </section>
  );
}

// Vertical divider with text
function VRule({ children, color = FNX.sage }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em',
      textTransform: 'uppercase', color,
    }}>
      <span style={{ flex: 1, height: 1, background: 'currentColor', opacity: 0.3 }}/>
      {children}
      <span style={{ flex: 1, height: 1, background: 'currentColor', opacity: 0.3 }}/>
    </div>
  );
}

// ============ TOAST ============
// Global transient toast. Call window.fnxToast('message') from anywhere
// (e.g. Add-to-Bag onClick). <ToastHost/> is mounted once at the app root.
function ToastHost() {
  const [msg, setMsg] = React.useState(null);
  const timer = React.useRef(null);
  React.useEffect(() => {
    window.fnxToast = (m) => {
      setMsg(m);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setMsg(null), 2600);
    };
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, []);
  if (!msg) return null;
  return (
    <div role="status" aria-live="polite" style={{
      position: 'fixed', left: '50%', bottom: 28, transform: 'translateX(-50%)', zIndex: 200,
      background: FNX.pineInk, color: FNX.cream, padding: '14px 22px',
      fontFamily: FNX.serif, fontSize: 13, letterSpacing: '0.06em',
      boxShadow: '0 6px 24px rgba(23,56,48,0.25)',
      display: 'inline-flex', alignItems: 'center', gap: 12, maxWidth: '90vw',
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: FNX.labRed, flexShrink: 0 }}/>
      {msg}
    </div>
  );
}

// expose globally
Object.assign(window, {
  FNX, T, fnxRule, fnxCream, ucLetters,
  SiteHeader, SiteFooter, Btn, Slogan, ProductShot,
  MonoTag, Tag, RuleLabel, Section, VRule, ToastHost,
});
