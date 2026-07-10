// ABOUT sub-pages — dedicated FINIXLAB / PureRX brand pages + ABOUT sub-nav.
// Reflects client menu doc: ABOUT = Brand Story · Recovery Skin Science · FINIXLAB · PureRX.

// ── ABOUT sub-nav (tabs). active: 'about' | 'science' | 'finixlab' | 'purerx' ──
const ABOUT_TABS = [
  { key: 'about',    go: 'about',          label: { en: 'Brand Story', ko: '브랜드 스토리', ja: 'ブランドストーリー' } },
  { key: 'science',  go: 'science',        label: { en: 'Recovery Skin Science', ko: 'Recovery Skin Science', ja: 'Recovery Skin Science' } },
  { key: 'finixlab', go: 'about/finixlab', label: { en: 'FINIXLAB', ko: 'FINIXLAB', ja: 'FINIXLAB' } },
  { key: 'purerx',   go: 'about/purerx',   label: { en: 'PureRX', ko: 'PureRX', ja: 'PureRX' } },
];
function AboutTabs({ active, mobile = false }) {
  const { t } = useLocale();
  return (
    <div style={{
      background: FNX.cream, borderBottom: `1px solid ${fnxRule(0.14)}`,
      position: mobile ? 'relative' : 'sticky', top: 0, zIndex: mobile ? 'auto' : 20,
    }}>
      <div style={{
        maxWidth: mobile ? 'none' : 1320, margin: '0 auto',
        padding: mobile ? '0 16px' : '0 40px',
        display: 'flex', gap: mobile ? 2 : 4, overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}>
        {ABOUT_TABS.map(tb => {
          const on = tb.key === active;
          return (
            <a key={tb.key} href={`#/${tb.go}`} data-go={tb.go} style={{
              padding: mobile ? '13px 12px' : '16px 18px', whiteSpace: 'nowrap', textDecoration: 'none',
              fontFamily: FNX.serif, fontSize: mobile ? 11 : 13, letterSpacing: '0.08em', textTransform: 'uppercase',
              color: on ? FNX.pineInk : FNX.sage,
              borderBottom: `2px solid ${on ? FNX.labRed : 'transparent'}`,
            }}>{t(tb.label)}</a>
          );
        })}
      </div>
    </div>
  );
}

const BRANDS = {
  FINIXLAB: {
    no: 'Brand 01', name: 'FINIXLAB',
    role: { en: 'Daily Slow Aging Care', ko: '데일리 슬로우 에이징 케어', ja: 'デイリー スローエイジングケア' },
    lead: {
      en: 'FINIXLAB is the daily arm of recovery skin science — slow-aging care that protects the skin’s power to recover within an everyday routine.',
      ko: 'FINIXLAB은 회복 스킨 사이언스의 데일리 라인입니다 — 매일의 루틴 안에서 피부 회복력을 지키는 슬로우 에이징 케어.',
      ja: 'FINIXLABは、リカバリー スキンサイエンスのデイリーライン — 毎日のルーティンの中で肌の回復力を守るスローエイジングケアです。',
    },
    body: [
      { h: { en: 'Recovery within the everyday', ko: '일상 안의 회복', ja: '日常の中の回復' },
        d: { en: 'Not a reversal of time, but daily support so skin keeps its own balance — easing inner dryness and rough texture, keeping radiance and lines healthy over time.', ko: '시간을 되돌리는 것이 아니라, 피부가 스스로의 균형을 지키도록 매일 곁에서 돕습니다. 속건조와 거칠어진 결을 다독이고, 윤기와 주름결을 오래도록 건강하게.', ja: '時間を巻き戻すのではなく、肌が自らのバランスを保てるよう毎日支えます。インナードライやごわつくキメを整え、ツヤとハリを長く健やかに。' } },
      { h: { en: 'Honest, quiet formulation', ko: '정직하고 조용한 처방', ja: '正直で静かな処方' },
        d: { en: 'Concentrations stated on the label, the quietest touch on skin. Consistency is what shapes skin in the end.', ko: '함량은 라벨에 그대로, 손길은 가장 조용하게. 결국 피부를 만드는 것은 꾸준함입니다.', ja: '配合量はラベルにそのまま、タッチは最も静かに。肌をつくるのは、結局つづけることです。' } },
    ],
    concerns: [
      { en: 'Inner Dryness', ko: '속건조', ja: 'インナードライ' },
      { en: 'Texture', ko: '피부결', ja: 'キメ' },
      { en: 'Radiance', ko: '윤기', ja: 'ツヤ' },
      { en: 'Fine Lines', ko: '주름', ja: 'シワ' },
    ],
    products: [
      { name: 'Peptosome Skin Booster', price: '₩96,000', size: '50ml', img: 'assets/booster-bottle-front.png', pos: '50% center', go: 'shop/peptosome',
        d: { en: 'All-in-one skin boosting solution · VAMTOXIN™ 2.0%', ko: '올인원 스킨 부스팅 솔루션 · VAMTOXIN™ 2.0%', ja: 'オールインワン スキンブースティング · VAMTOXIN™ 2.0%' } },
      { name: 'Spicule Wrinkle-Free Glow Serum', price: '₩58,000', size: '20ml', img: 'assets/serum-quartet.png', pos: '50% center', go: 'shop',
        d: { en: 'Metal-roller glow serum · VAMTOXIN™ 2.0% · Niacinamide', ko: '메탈 롤러 글로우 세럼 · VAMTOXIN™ 2.0% · 나이아신아마이드', ja: 'メタルローラー グロウセラム · VAMTOXIN™ 2.0% · ナイアシンアミド' } },
    ],
    img: 'assets/peptosome-pair.jpg', pos: '50% center', accent: FNX.pine,
    cta: { label: { en: 'View FINIXLAB Products →', ko: 'FINIXLAB 제품 보기 →', ja: 'FINIXLAB 製品を見る →' }, go: 'shop' },
  },
  PureRX: {
    no: 'Brand 02', name: 'PureRX',
    role: { en: 'Professional Recovery Care', ko: '전문가용 회복 케어', ja: 'プロフェッショナル リカバリーケア' },
    lead: {
      en: 'PureRX is a professional recovery derma brand for sensitized skin — the professional arm of recovery skin science.',
      ko: 'PureRX는 민감해진 피부 컨디션을 위한 전문 리커버리 더마 브랜드입니다 — 회복 스킨 사이언스의 전문가용 라인.',
      ja: 'PureRXは、敏感になった肌コンディションのための専門リカバリー ダーマブランド — リカバリー スキンサイエンスの専門ラインです。',
    },
    body: [
      { h: { en: 'Respect the barrier', ko: '장벽을 존중하다', ja: 'バリアを尊重する' },
        d: { en: 'For sensitive skin, depleted condition, and skin that needs expert-level home care, PureRX respects the barrier and proposes a calm, stable recovery solution — recovery care, not a quick fix.', ko: '민감 피부, 피부 컨디션 저하, 전문적인 홈케어가 필요한 피부를 위해 — 피부 장벽을 존중하며 편안하고 안정적인 리커버리 솔루션을 제안합니다. 빠른 처방이 아니라, 회복 케어.', ja: '敏感肌、コンディション低下、専門的なホームケアが必要な肌のために — 肌バリアを尊重し、穏やかで安定したリカバリーソリューションを提案します。速い処方ではなく、リカバリーケア。' } },
      { h: { en: 'PDRN, at the core', ko: 'PDRN을 중심으로', ja: 'PDRNを中心に' },
        d: { en: 'Built around PDRN for professional-grade recovery. The full lineup and formulation detail follow once the client’s materials arrive.', ko: 'PDRN을 중심으로 한 전문가용 회복 처방. 전체 라인업과 성분 상세는 자료 수신 후 반영됩니다.', ja: 'PDRNを軸にしたプロ仕様のリカバリー処方。ラインナップと処方の詳細は、資料の受領後に反映します。' } },
    ],
    concerns: [
      { en: 'Sensitive Skin', ko: '민감 피부', ja: '敏感肌' },
      { en: 'Depleted Condition', ko: '컨디션 저하', ja: 'コンディション低下' },
      { en: 'Pro Home-Care', ko: '전문 홈케어', ja: 'プロ仕様ホームケア' },
    ],
    products: [
      { name: 'PDRN RX Ampoule', price: 'TBA', size: '—', img: 'assets/serum-box-single.png', pos: '50% center', go: 'shop', soon: true,
        d: { en: 'Professional recovery ampoule · PDRN', ko: '전문가용 회복 앰플 · PDRN', ja: 'プロ仕様リカバリー アンプル · PDRN' } },
    ],
    img: 'assets/serum-box-single.png', pos: '50% center', accent: FNX.olive,
    cta: { label: { en: 'View PureRX Products →', ko: 'PureRX 제품 보기 →', ja: 'PureRX 製品を見る →' }, go: 'shop' },
  },
};

// ── Desktop brand page ──
function BrandPage({ brand }) {
  const { t } = useLocale();
  const b = BRANDS[brand];
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />
      <AboutTabs active={brand === 'FINIXLAB' ? 'finixlab' : 'purerx'} />

      {/* HERO */}
      <section style={{ background: FNX.cream, padding: '80px 40px 90px' }}>
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'center', maxWidth: 1320, margin: '0 auto' }}>
          <div>
            <div style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.tan }}>
              {b.no} · {t(b.role)}
            </div>
            <h1 style={{ margin: '16px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 72, letterSpacing: '0.01em', lineHeight: 1.0 }}>{b.name}</h1>
            <p style={{ marginTop: 26, fontSize: 17, lineHeight: 1.85, color: FNX.pineInk, maxWidth: '46ch' }}>{t(b.lead)}</p>
            <div style={{ marginTop: 26, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {b.concerns.map((c, i) => (
                <span key={i} style={{ padding: '7px 14px', borderRadius: 999, border: `1px solid ${fnxRule(0.22)}`, fontSize: 12, letterSpacing: '0.04em', color: FNX.sage }}>{t(c)}</span>
              ))}
            </div>
          </div>
          <div style={{ height: 560, overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
            <img src={b.img} alt={b.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: b.pos }} />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <Section bg={FNX.parchment} padding="110px 40px">
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px 64px' }}>
          {b.body.map((blk, i) => (
            <div key={i} style={{ paddingTop: 28, borderTop: `1px solid ${fnxRule(0.18)}` }}>
              <h2 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, lineHeight: 1.2 }}>{t(blk.h)}</h2>
              <p style={{ margin: '16px 0 0', fontSize: 15, lineHeight: 1.9, color: FNX.pineInk, maxWidth: '52ch' }}>{t(blk.d)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section bg={FNX.cream} padding="110px 40px">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, paddingBottom: 20, borderBottom: `1px solid ${fnxRule(0.2)}` }}>
          <h2 style={{ ...T.h2, margin: 0, color: FNX.pineInk }}>{t({ en: 'The Collection', ko: '컬렉션', ja: 'コレクション' })}</h2>
          <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go={b.cta.go}>{t(b.cta.label)}</Btn>
        </div>
        <div className="r3" style={{ display: 'grid', gridTemplateColumns: b.products.length > 1 ? 'repeat(2, 1fr)' : '1fr', gap: 24 }}>
          {b.products.map((p, i) => (
            <article key={i} data-go={p.go} role="link" tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') location.hash = '#/' + p.go; }}
              style={{ background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`, cursor: 'pointer', display: 'grid', gridTemplateColumns: '200px 1fr' }}>
              <div style={{ overflow: 'hidden', position: 'relative', background: FNX.cream }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
              </div>
              <div style={{ padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 24, lineHeight: 1.15 }}>{p.name}</h3>
                  <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.7, color: FNX.sage }}>{t(p.d)}</p>
                </div>
                <div style={{ marginTop: 20, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: FNX.serif, fontSize: 20, letterSpacing: '0.04em' }}>{p.price} <span style={{ fontFamily: FNX.mono, fontSize: 11, color: FNX.sage, marginLeft: 6 }}>{p.size}</span></span>
                  {p.soon
                    ? <span style={{ fontFamily: FNX.mono, fontSize: 10, letterSpacing: '0.16em', color: FNX.labRed }}>{t({ en: 'COMING SOON', ko: '출시 예정', ja: '近日発売' })}</span>
                    : <span style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.pineInk }}>{t({ en: 'Detail →', ko: '자세히 →', ja: '詳細 →' })}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <SiteFooter variant="pine" />
    </div>
  );
}

// ── Mobile brand page ──
function BrandPageMobile({ brand }) {
  const { t } = useLocale();
  const b = BRANDS[brand];
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
      <MHeader title={{ en: 'About / ' + b.name, ko: '브랜드 / ' + b.name, ja: 'ブランド / ' + b.name }} />
      <AboutTabs active={brand === 'FINIXLAB' ? 'finixlab' : 'purerx'} mobile />

      <section style={{ padding: '28px 24px 8px' }}>
        <div style={{ fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.tan }}>{b.no} · {t(b.role)}</div>
        <h1 style={{ margin: '10px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 48, letterSpacing: '0.01em', lineHeight: 1.0 }}>{b.name}</h1>
        <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.85, color: FNX.pineInk }}>{t(b.lead)}</p>
        <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 7 }}>
          {b.concerns.map((c, i) => (
            <span key={i} style={{ padding: '6px 12px', borderRadius: 999, border: `1px solid ${fnxRule(0.22)}`, fontSize: 11, letterSpacing: '0.03em', color: FNX.sage }}>{t(c)}</span>
          ))}
        </div>
        <div style={{ margin: '22px -24px 0', height: 300, overflow: 'hidden', position: 'relative', background: FNX.bone }}>
          <img src={b.img} alt={b.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: b.pos }} />
        </div>
      </section>

      <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
        {b.body.map((blk, i) => (
          <div key={i} style={{ padding: '20px 0', borderTop: `1px solid ${fnxRule(0.18)}` }}>
            <h2 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 24, lineHeight: 1.2 }}>{t(blk.h)}</h2>
            <p style={{ margin: '12px 0 0', fontSize: 14, lineHeight: 1.85, color: FNX.pineInk }}>{t(blk.d)}</p>
          </div>
        ))}
      </section>

      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <h2 style={{ margin: '0 0 20px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26 }}>{t({ en: 'The Collection', ko: '컬렉션', ja: 'コレクション' })}</h2>
        <div style={{ display: 'grid', gap: 16 }}>
          {b.products.map((p, i) => (
            <article key={i} data-go={p.go} style={{ background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`, display: 'grid', gridTemplateColumns: '110px 1fr' }}>
              <div style={{ overflow: 'hidden', position: 'relative', background: FNX.cream }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
              </div>
              <div style={{ padding: 16 }}>
                <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 17, lineHeight: 1.2 }}>{p.name}</h3>
                <p style={{ margin: '8px 0 0', fontSize: 12, lineHeight: 1.6, color: FNX.sage }}>{t(p.d)}</p>
                <div style={{ marginTop: 12, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: FNX.serif, fontSize: 16 }}>{p.price} <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage }}>{p.size}</span></span>
                  {p.soon && <span style={{ fontFamily: FNX.mono, fontSize: 9, letterSpacing: '0.16em', color: FNX.labRed }}>{t({ en: 'COMING SOON', ko: '출시 예정', ja: '近日発売' })}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 22 }}>
          <Btn kind="primary" full data-go={b.cta.go}>{t(b.cta.label)}</Btn>
        </div>
      </section>

      <MFooter />
    </div>
  );
}

const FinixlabPage = () => <BrandPage brand="FINIXLAB" />;
const PureRXPage = () => <BrandPage brand="PureRX" />;
const FinixlabMobile = () => <BrandPageMobile brand="FINIXLAB" />;
const PureRXMobile = () => <BrandPageMobile brand="PureRX" />;

Object.assign(window, { AboutTabs, BrandPage, BrandPageMobile, FinixlabPage, PureRXPage, FinixlabMobile, PureRXMobile });
