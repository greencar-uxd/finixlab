// Mobile Shop · Product · Science · Journal · About
// All adapted from desktop versions, reflowed for 390px

// ============ MOBILE HEADER (shared) ============
const MHeader = ({ title }) => {
  const { t } = useLocale();
  const [open, setOpen] = React.useState(false);
  return (
  <React.Fragment>
    <header style={{ background: FNX.cream, padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${fnxRule(0.14)}`, position: 'sticky', top: 0, zIndex: 5 }}>
      <a href="#/home" aria-label="Finixlab — Home" style={{ display: 'flex', textDecoration: 'none' }}>
        <img src="assets/fnxlab-logo.png" alt="Finixlab" style={{ height: 16 }} />
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 2, color: FNX.pineInk, marginRight: -10 }}>
        <a href="#/search" aria-label="Search" style={{ color: 'inherit', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 44, minHeight: 44 }}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="7" cy="7" r="5"/><path d="M11 11l3.5 3.5"/></svg>
        </a>
        <a href="#/account" aria-label="Account" style={{ color: 'inherit', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 44, minHeight: 44 }}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="8" cy="5.5" r="2.5"/><path d="M3 14c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5"/></svg>
        </a>
        <a href="#/cart" aria-label="Bag" style={{ color: 'inherit', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 44, minHeight: 44, position: 'relative' }}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 5h10l-1 9H4L3 5z"/><path d="M6 5V3.5a2 2 0 014 0V5"/></svg>
          <span style={{ position: 'absolute', top: 10, right: 10, width: 5, height: 5, borderRadius: '50%', background: FNX.labRed }}/>
        </a>
        <button onClick={() => setOpen(true)} aria-label="Menu" style={{ background: 'none', border: 'none', padding: 0, color: FNX.pineInk, fontSize: 20, lineHeight: 1, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 44, minHeight: 44 }}>≡</button>
      </div>
    </header>
    {title && <div style={{ padding: '14px 24px', borderBottom: `1px solid ${fnxRule(0.1)}`, fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.pineInk }}>{t(title)}</div>}

    {/* Full-screen mobile menu overlay */}
    {open && (
      <div style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: FNX.pineInk, color: FNX.cream,
        padding: 'clamp(20px, 6vw, 30px)', display: 'flex', flexDirection: 'column',
        height: '100dvh', overflowY: 'auto',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '24px 1fr 24px', alignItems: 'center', marginBottom: 'clamp(16px, 5vw, 32px)' }}>
          <span style={{ fontFamily: FNX.mono, fontSize: 11, color: fnxCream(0.72), letterSpacing: '0.18em' }}>{t({ en:'MENU', ko:'메뉴', ja:'メニュー' })}</span>
          <div/>
          <button onClick={() => setOpen(false)} aria-label="Close menu" style={{ background: 'none', border: 'none', padding: 0, color: FNX.cream, fontSize: 24, lineHeight: 1, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 44, minHeight: 44, margin: '-10px -10px -10px auto' }}>×</button>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', flex: 1, marginTop: 'clamp(8px, 3vw, 24px)' }}>
          {[
            { l:{ en:'About',   ko:'브랜드',     ja:'ブランド' },   h:'#/about' },
            { l:{ en:'Science', ko:'사이언스',   ja:'サイエンス' }, h:'#/science' },
            { l:{ en:'Shop',    ko:'제품',       ja:'ショップ' },   h:'#/shop' },
            { l:{ en:'Journal', ko:'저널',       ja:'ジャーナル' }, h:'#/journal' },
          ].map((it, i, arr) => (
            <a key={it.h} href={it.h} onClick={() => setOpen(false)} style={{
              fontFamily: FNX.serif, fontWeight: 200, fontSize: 'clamp(28px, 8vw, 40px)', letterSpacing: '0.02em',
              color: FNX.cream, textDecoration: 'none',
              padding: 'clamp(13px, 3.6vw, 20px) 0',
              borderBottom: i < arr.length - 1 ? `1px solid ${fnxCream(0.18)}` : 'none',
            }}>{t(it.l)}</a>
          ))}
        </nav>
        <div style={{ paddingTop: 22, borderTop: `1px solid ${fnxCream(0.18)}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.18em', color: fnxCream(0.82) }}>
          <LangSwitcher sub={fnxCream(0.82)} up align="left" />
          <span style={{ fontSize: 11, letterSpacing: '0.06em', color: fnxCream(0.72) }}>{t({ en:'Ships globally from Korea', ko:'한국에서 전 세계로 배송', ja:'韓国から世界へ配送' })}</span>
        </div>
      </div>
    )}
  </React.Fragment>
  );
};

const MFooter = () => {
  const { t } = useLocale();
  const footLinks = [
    { key:'about',   label:{ en:'About',   ko:'브랜드',     ja:'ブランド' } },
    { key:'science', label:{ en:'Science', ko:'사이언스',   ja:'サイエンス' } },
    { key:'shop',    label:{ en:'Shop',    ko:'제품',       ja:'ショップ' } },
    { key:'journal', label:{ en:'Journal', ko:'저널',       ja:'ジャーナル' } },
    { key:'care',    label:{ en:'Care',    ko:'고객지원',   ja:'サポート' } },
    { key:'account', label:{ en:'Account', ko:'계정',       ja:'アカウント' } },
  ];
  return (
  <footer style={{ background: FNX.pineInk, color: fnxCream(0.72), padding: '32px 24px', fontSize: 11, lineHeight: 1.8, fontFamily: FNX.serif, letterSpacing: '0.08em' }}>
    <img src="assets/fnxlab-logo.png" alt="Finixlab" style={{ height: 18, filter: 'brightness(0) invert(1)', opacity: 0.9, marginBottom: 16 }} />
    <div>Finixlab · {t({ en:'Real Efficacy, Quietly Delivered.', ko:'정직한 효능을, 조용히 전합니다.', ja:'確かな効果を、静かに届ける。' })}</div>
    <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: '6px 14px' }}>
      {footLinks.map(l =>
        <a key={l.key} href={`#/${l.key}`} style={{ color: fnxCream(0.72), textDecoration: 'none' }}>{t(l.label)}</a>
      )}
    </div>
    <div style={{ marginTop: 18, paddingTop: 12, borderTop: `1px solid ${fnxCream(0.1)}`, fontSize: 10 }}>
      © 2026 Finixlab Co., Ltd. · {t({ en:'Paju, Gyeonggi · Ships globally', ko:'경기 파주 · 전 세계 배송', ja:'京畿道 坡州 · 世界配送' })}
    </div>
  </footer>
  );
};

// ============ MOBILE SHOP ============
const ShopMobile = () => {
  const { t } = useLocale();
  const products = [
    {
      n:'N°01', t:{ en:'Peptosome Skin Booster', ko:'펩토좀 스킨 부스터', ja:'ペプトソーム スキンブースター' },
      tagline:{ en:'All-in-one skin boosting solution, revitalized by Peptosome.', ko:'펩토좀으로 되살린 올인원 스킨 부스팅 솔루션.', ja:'ペプトソームで蘇る、オールインワンのスキンブースティング。' },
      price:'₩96,000', size:'50ml',
      img:'assets/booster-bottle-front.png', pos:'50% center',
      tags:['VAMTOXIN™ 2%', { en:'Bestseller', ko:'베스트셀러', ja:'ベストセラー' }], stock:{ en:'In stock', ko:'재고 있음', ja:'在庫あり' },
    },
    {
      n:'N°02', t:{ en:'Spicule Wrinkle-Free Glow Serum', ko:'스피큘 링클프리 글로우 세럼', ja:'スピキュール リンクルフリー グロウセラム' },
      tagline:{ en:'Radiant Renewal. VAMTOXIN™ 2.0% · Niacinamide.', ko:'빛나는 리뉴얼. VAMTOXIN™ 2.0% · 나이아신아마이드.', ja:'輝くリニューアル。VAMTOXIN™ 2.0% · ナイアシンアミド。' },
      price:'₩58,000', size:'20ml',
      img:'assets/serum-quartet.png', pos:'50% center',
      tags:['Niacinamide', { en:'Spot Care', ko:'스팟 케어', ja:'スポットケア' }], stock:{ en:'In stock', ko:'재고 있음', ja:'在庫あり' },
    },
    {
      n:'N°03', t:{ en:'Notox Cream — Coming Soon', ko:'노톡스 크림 — 출시 예정', ja:'ノトックス クリーム — 近日発売' },
      tagline:{ en:'The final seal. VAMTOXIN™ 1.5% in a velvet cream.', ko:'마지막 봉인. 벨벳 크림에 담긴 VAMTOXIN™ 1.5%.', ja:'最後の封印。ベルベットクリームに込めたVAMTOXIN™ 1.5%。' },
      price:'TBA', size:'50ml',
      img:'assets/duo-on-stone.jpg', pos:'50% 70%',
      tags:[{ en:'Cream', ko:'크림', ja:'クリーム' }], stock:{ en:'Notify me', ko:'알림 신청', ja:'通知を受け取る' }, muted:true,
    },
  ];
  const sets = [
    { n:'SET-01', t:{ en:'Peptosome — Couple Set', ko:'펩토좀 — 커플 세트', ja:'ペプトソーム — カップルセット' }, info:'50ml × 2', price:'₩172,800', save:'−10%', img:'assets/peptosome-pair.jpg', pos:'50% 30%' },
    { n:'SET-02', t:{ en:'The Collection — Duo', ko:'더 컬렉션 — 듀오', ja:'ザ・コレクション — デュオ' }, info:'50ml + 20ml', price:'₩142,000', save:'−8%', img:'assets/duo-on-stone.jpg', pos:'50% center' },
    { n:'SET-03', t:{ en:'Sample Trial — Try All', ko:'샘플 트라이얼 — 전체 체험', ja:'サンプルトライアル — 全部お試し' }, info:{ en:'5ml × 2 · with usage card', ko:'5ml × 2 · 사용 안내 카드 포함', ja:'5ml × 2 · 使用ガイド付き' }, price:'₩12,000', img:'assets/serum-box-single.png', pos:'50% center' },
  ];
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
      <MHeader title={{ en:'Home / Shop', ko:'홈 / 제품', ja:'ホーム / ショップ' }} />

      {/* MASTHEAD */}
      <section style={{ padding: '32px 24px 24px', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
        <RuleLabel align="left" color={FNX.sage}>
          <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background: FNX.labRed, marginRight: 10, verticalAlign: 'middle' }}/>
          {t({ en:'The Collection · Vol. 01 / 2026', ko:'더 컬렉션 · Vol. 01 / 2026', ja:'ザ・コレクション · Vol. 01 / 2026' })}
        </RuleLabel>
        <h1 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.02em' }}>{t({ en:'Shop.', ko:'제품.', ja:'ショップ.' })}</h1>
        <p style={{ marginTop: 16, fontSize: 14, color: FNX.pineInk, opacity: 0.78, lineHeight: 1.7 }}>
          {t({ en:'Three prescriptions — a booster, a serum, and a closing cream. Every concentration on the label.', ko:'세 가지 처방 — 부스터, 세럼, 그리고 마무리 크림. 모든 농도를 라벨에 그대로.', ja:'三つの処方 — ブースター、セラム、そして仕上げのクリーム。すべての濃度をラベルに。' })}
        </p>
        <div style={{ marginTop: 18, fontFamily: FNX.serif, fontSize: 12, color: FNX.sage, letterSpacing: '0.06em', lineHeight: 1.9 }}>
          <div>{products.length} {t({ en:'pieces', ko:'제품', ja:'アイテム' })} · {sets.length} {t({ en:'sets', ko:'세트', ja:'セット' })}</div>
          <div>{t({ en:'Free shipping over ₩60,000', ko:'₩60,000 이상 무료 배송', ja:'₩60,000以上で送料無料' })}</div>
          <div>{t({ en:'Ships worldwide', ko:'전 세계 배송', ja:'世界配送' })}</div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section style={{ padding: '20px 24px', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto' }}>
          {[
            { en:'All', ko:'전체', ja:'すべて' },
            { en:'Booster', ko:'부스터', ja:'ブースター' },
            { en:'Serum', ko:'세럼', ja:'セラム' },
            { en:'Cream', ko:'크림', ja:'クリーム' },
            { en:'Sets', ko:'세트', ja:'セット' },
          ].map((c, i) => (
            <button type="button" key={c.en} style={{
              font: 'inherit',
              padding: '7px 14px', borderRadius: 999,
              border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.18)}`,
              color: i === 0 ? FNX.pineInk : FNX.sage,
              background: i === 0 ? FNX.bone : 'transparent',
              fontSize: 11, letterSpacing: '0.06em', whiteSpace: 'nowrap', cursor: 'pointer',
            }}>{t(c)}</button>
          ))}
        </div>
      </section>

      {/* SINGLE PIECES */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${fnxRule(0.2)}` }}>
          <h2 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, letterSpacing: '-0.01em' }}>{t({ en:'Single Pieces.', ko:'단품.', ja:'単品。' })}</h2>
          <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em' }}>{products.length} {t({ en:'ITEMS', ko:'개', ja:'点' })}</span>
        </div>
        <div style={{ display: 'grid', gap: 20 }}>
          {products.map(p => (
            <a key={p.n} href="#/shop/peptosome" data-go="shop/peptosome" style={{ textDecoration: 'none', color: 'inherit', display: 'block', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`, opacity: p.muted ? 0.78 : 1 }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: FNX.cream, position: 'relative' }}>
                <img src={p.img} alt={t(p.t)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
              </div>
              <div style={{ padding: '20px 18px 22px' }}>
                <h3 style={{ margin: 0, fontFamily: FNX.serif, fontSize: 20, fontWeight: 300, lineHeight: 1.15, letterSpacing: '-0.01em' }}>{t(p.t)}</h3>
                <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.7, color: FNX.sage }}>{t(p.tagline)}</p>
                <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.map((tag, ti) => (
                    <span key={ti} style={{ padding: '4px 10px', border: `1px solid ${fnxRule(0.18)}`, borderRadius: 999, fontSize: 11, letterSpacing: '0.08em', color: FNX.sage }}>{typeof tag === 'string' ? tag : t(tag)}</span>
                  ))}
                </div>
                <div style={{ marginTop: 18, paddingTop: 14, borderTop: `1px solid ${fnxRule(0.16)}`, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontFamily: FNX.serif, fontSize: 18, letterSpacing: '0.04em' }}>{p.price}</span>
                    <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em', marginLeft: 8 }}>{p.size.toUpperCase()}</span>
                  </div>
                  <span style={{ fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: p.muted ? FNX.sage : FNX.pineInk }}>{t(p.stock)}</span>
                </div>
                <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: p.muted ? '1fr' : '1fr auto', gap: 10 }}>
                  {p.muted ? (
                    <Btn kind="ghost" full size="md" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Notify Me →', ko:'재입고 알림 →', ja:'入荷通知 →' })}</Btn>
                  ) : (
                    <React.Fragment>
                      <Btn kind="primary" full onClick={() => window.fnxToast && window.fnxToast('Added to bag')}>{t({ en:'Add to Bag', ko:'장바구니 담기', ja:'バッグに追加' })}</Btn>
                      <Btn kind="ghost" size="md" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Detail →', ko:'자세히 →', ja:'詳細 →' })}</Btn>
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
            <RuleLabel align="left" color={FNX.tan}>{t({ en:'02 — Sets & Rituals', ko:'02 — 세트 & 리추얼', ja:'02 — セット & リチュアル' })}</RuleLabel>
            <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, letterSpacing: '-0.01em' }}>{t({ en:'Together, a discount.', ko:'함께 사면, 할인.', ja:'まとめて、割引。' })}</h2>
          </div>
          <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em' }}>{sets.length} {t({ en:'SETS', ko:'세트', ja:'セット' })}</span>
        </div>
        <div style={{ display: 'grid', gap: 16 }}>
          {sets.map(s => (
            <article key={s.n} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <div style={{ overflow: 'hidden', position: 'relative', background: FNX.cream }}>
                <img src={s.img} alt={t(s.t)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.pos }} />
              </div>
              <div style={{ padding: 18, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.24em' }}>{s.n}</span>
                    {s.save && <span style={{ fontFamily: FNX.serif, fontSize: 11, color: FNX.labRed, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{s.save}</span>}
                  </div>
                  <h3 style={{ margin: '12px 0 6px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 18, lineHeight: 1.2 }}>{t(s.t)}</h3>
                  <div style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em' }}>{(typeof s.info === 'string' ? s.info : t(s.info)).toUpperCase()}</div>
                </div>
                <div style={{ marginTop: 14, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: FNX.serif, fontSize: 16, letterSpacing: '0.04em' }}>{s.price}</span>
                  <Btn kind="ghost" size="sm" data-go="shop" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Shop →', ko:'쇼핑하기 →', ja:'ショップ →' })}</Btn>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BEFORE YOU COMMIT — sample trial */}
      <section style={{ background: FNX.olive, color: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color={fnxCream(0.55)}>{t({ en:'03 — Before You Commit', ko:'03 — 결정하기 전에', ja:'03 — 決める前に' })}</RuleLabel>
        <h2 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1 }}>{t({ en:'Try the ritual at sample size.', ko:'샘플 사이즈로 리추얼을 경험하세요.', ja:'サンプルサイズでリチュアルを。' })}</h2>
        <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.85, color: fnxCream(0.85) }}>
          {t({ en:'Two weeks of booster and serum at 5ml each — to see which prescription suits your skin first.', ko:'각 5ml의 부스터와 세럼으로 2주 — 어떤 처방이 내 피부에 맞는지 먼저 확인하세요.', ja:'各5mlのブースターとセラムで2週間 — どの処方が肌に合うかをまず確かめて。' })}
        </p>
        <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { k:'14 days', v:{ en:'Trial duration', ko:'체험 기간', ja:'お試し期間' } },
            { k:'2 × 5ml', v:{ en:'Booster + Serum', ko:'부스터 + 세럼', ja:'ブースター + セラム' } },
            { k:'KR ₩0', v:{ en:'Shipping included', ko:'배송비 포함', ja:'送料込み' } },
            { k:'−15%', v:{ en:'Credit on next order', ko:'다음 주문 적립', ja:'次回注文クレジット' } },
          ].map((b, i) => (
            <div key={i} style={{ padding: 18, border: `1px solid ${fnxCream(0.2)}` }}>
              <div style={{ fontFamily: FNX.serif, fontSize: 22, letterSpacing: '0.02em' }}>{b.k}</div>
              <div style={{ marginTop: 6, fontSize: 11, color: fnxCream(0.82), letterSpacing: '0.06em' }}>{t(b.v)}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24, display: 'grid', gap: 10 }}>
          <Btn kind="inverse" full>{t({ en:'Order Sample', ko:'샘플 주문', ja:'サンプルを注文' })} · ₩12,000</Btn>
          <Btn kind="ghost" full style={{ color: FNX.cream, borderColor: FNX.cream }}>{t({ en:'How to Choose →', ko:'고르는 법 →', ja:'選び方 →' })}</Btn>
        </div>
      </section>

      <MFooter />
    </div>
  );
};

// ============ MOBILE PRODUCT ============
const ProductMobile = () => {
  const { t } = useLocale();
  return (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14, paddingBottom: 80 }}>
    <MHeader title={{ en:'Shop / Peptosome', ko:'제품 / 펩토좀', ja:'ショップ / ペプトソーム' }} />

    {/* Sticky bottom Add-to-Bag bar — mobile-only functional pattern */}
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90,
      background: fnxCream(0.96), borderTop: `1px solid ${fnxRule(0.2)}`,
      padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 12,
      backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: FNX.serif, fontSize: 11, color: FNX.sage, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Peptosome · 50ml</div>
        <div style={{ fontFamily: FNX.serif, fontSize: 18, letterSpacing: '0.02em', marginTop: 2 }}>₩96,000 <span style={{ fontSize: '0.65em', opacity: 0.6 }}>/ ~$72</span></div>
      </div>
      <Btn kind="primary" size="md" onClick={() => window.fnxToast && window.fnxToast('Added to bag')}>{t({ en:'Add to Bag', ko:'장바구니 담기', ja:'バッグに追加' })}</Btn>
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
      <h1 style={{ margin: '10px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 38, lineHeight: 1.02 }}>{t({ en:'Peptosome Skin Booster.', ko:'펩토좀 스킨 부스터.', ja:'ペプトソーム スキンブースター。' })}</h1>
      <p style={{ marginTop: 14, fontSize: 14, color: FNX.sage }}>
        {t({ en:'All-in-one skin boosting solution, revitalized by Peptosome.', ko:'펩토좀으로 되살린 올인원 스킨 부스팅 솔루션.', ja:'ペプトソームで蘇る、オールインワンのスキンブースティング。' })}
      </p>
      <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 12, fontSize: 12 }}>
        <span role="img" aria-label="Rated 5 out of 5" style={{ color: FNX.pineInk, letterSpacing: '0.36em' }}>★★★★★</span>
        <span style={{ color: FNX.sage }}>4.92 / 612 {t({ en:'reviews', ko:'리뷰', ja:'レビュー' })}</span>
      </div>
      <div style={{ marginTop: 22, paddingTop: 16, borderTop: `1px solid ${fnxRule(0.2)}`, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: FNX.serif, fontSize: 28, letterSpacing: '0.02em' }}>₩96,000 <span style={{ fontSize: 14, color: FNX.sage, marginLeft: 4 }}>/ ~$72</span></span>
        <span style={{ fontFamily: FNX.mono, fontSize: 11, color: FNX.sage, letterSpacing: '0.14em' }}>50 ML · 1.7 FL.OZ</span>
      </div>

      {/* size selector */}
      <div style={{ marginTop: 22 }}>
        <div style={{ fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.sage, marginBottom: 10 }}>{t({ en:'Size', ko:'용량', ja:'サイズ' })}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <button style={{ padding: '14px 14px', border: `1px solid ${FNX.pineInk}`, background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.12em', textAlign: 'left' }}>50ml · {t({ en:'Standard', ko:'스탠다드', ja:'スタンダード' })}</button>
          <button style={{ padding: '14px 14px', border: `1px solid ${fnxRule(0.18)}`, background: 'transparent', color: FNX.sage, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.12em', textAlign: 'left' }}>5ml · {t({ en:'Sample', ko:'샘플', ja:'サンプル' })} <span style={{ color: FNX.pineInk, marginLeft: 6 }}>+ ₩4,000</span></button>
        </div>
      </div>

      {/* quantity */}
      <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${fnxRule(0.18)}`, paddingBottom: 16 }}>
        <span style={{ fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.sage }}>{t({ en:'Quantity', ko:'수량', ja:'数量' })}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, border: `1px solid ${fnxRule(0.2)}`, padding: '0 4px' }}>
          <button aria-label="Decrease quantity" style={{ background: 'none', border: 'none', fontSize: 16, cursor: 'pointer', color: FNX.pineInk, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 44, minHeight: 44 }}>−</button>
          <span style={{ fontFamily: FNX.serif, fontSize: 14, minWidth: 14, textAlign: 'center' }}>1</span>
          <button aria-label="Increase quantity" style={{ background: 'none', border: 'none', fontSize: 16, cursor: 'pointer', color: FNX.pineInk, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 44, minHeight: 44 }}>+</button>
        </div>
      </div>

      <div style={{ marginTop: 20, display: 'grid', gap: 10 }}>
        <Btn kind="primary" size="lg" full onClick={() => window.fnxToast && window.fnxToast('Added to bag')}>{t({ en:'Add to Bag', ko:'장바구니 담기', ja:'バッグに追加' })} · ₩96,000</Btn>
        <Btn kind="ghost" full style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Subscribe & Save 15%', ko:'정기구독 15% 할인', ja:'定期購入で15%オフ' })}</Btn>
      </div>

      {/* perks */}
      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 12, color: FNX.sage, lineHeight: 1.7 }}>
        <div>↳ {t({ en:'Free shipping over ₩60,000', ko:'₩60,000 이상 무료 배송', ja:'₩60,000以上で送料無料' })}</div>
        <div>↳ {t({ en:'Free samples in every order', ko:'모든 주문에 무료 샘플', ja:'全注文に無料サンプル' })}</div>
        <div>↳ {t({ en:'30-day return on unopened', ko:'미개봉 30일 반품', ja:'未開封30日返品' })}</div>
        <div>↳ {t({ en:'Ships worldwide', ko:'전 세계 배송', ja:'世界配送' })}</div>
      </div>

      {/* highlights */}
      <div style={{ marginTop: 24, padding: '18px 0', borderTop: `1px solid ${fnxRule(0.2)}`, borderBottom: `1px solid ${fnxRule(0.2)}` }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10, fontSize: 13 }}>
          {[
            { k:'2.0%', v:{ en:'VAMTOXIN™ Peptide — SNARE-inhibiting peptide', ko:'VAMTOXIN™ 펩타이드 — SNARE 억제 펩타이드', ja:'VAMTOXIN™ ペプチド — SNARE阻害ペプチド' } },
            { k:'4.0%', v:{ en:'Niacinamide — tone clarity', ko:'나이아신아마이드 — 톤 정돈', ja:'ナイアシンアミド — トーンの透明感' } },
            { k:'○', v:{ en:'Roller applicator — along the grain', ko:'롤러 어플리케이터 — 결을 따라', ja:'ローラーアプリケーター — 肌の流れに沿って' } },
            { k:'KR', v:{ en:'Made in Seoul · Cruelty-free · Vegan', ko:'서울 제조 · 동물실험 없음 · 비건', ja:'ソウル製造 · 動物実験なし · ヴィーガン' } },
          ].map((h, i) => (
            <li key={i} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 12, alignItems: 'baseline' }}>
              <span style={{ fontFamily: FNX.serif, fontSize: 15, letterSpacing: '0.04em', color: FNX.pineInk }}>{h.k}</span>
              <span style={{ color: FNX.pineInk }}>{t(h.v)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* DESCRIPTION — 01 */}
    <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.sage}>{t({ en:'The Booster · 01', ko:'더 부스터 · 01', ja:'ザ・ブースター · 01' })}</RuleLabel>
      <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.15 }}>
        {t({ en:"An all-in-one prescription, in a bottle that doesn't shout.", ko:'요란하지 않은 병에 담긴 올인원 처방.', ja:'主張しないボトルに込めた、オールインワンの処方。' })}
      </h2>
      <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.85, color: FNX.pineInk }}>
        {t({ en:'Peptosome Skin Booster is built around VAMTOXIN™ Peptide 2.0%. A SNARE-inhibiting peptide quiets micro-contractions in expression muscles, Niacinamide 4% evens tone, and the Spicule Complex carries efficacy into the dermis.', ko:'펩토좀 스킨 부스터는 VAMTOXIN™ 펩타이드 2.0%를 중심으로 설계되었습니다. SNARE 억제 펩타이드가 표정근의 미세 수축을 가라앉히고, 나이아신아마이드 4%가 톤을 정돈하며, 스피큘 콤플렉스가 효능을 진피로 전달합니다.', ja:'ペプトソーム スキンブースターは、VAMTOXIN™ ペプチド2.0%を中心に設計。SNARE阻害ペプチドが表情筋の微細な収縮を静め、ナイアシンアミド4%がトーンを整え、スピキュールコンプレックスが効果を真皮へ届けます。' })}
      </p>
      <p style={{ marginTop: 14, fontSize: 13, lineHeight: 1.85, color: FNX.sage }}>
        {t({ en:'Once daily, after toner. A lightweight texture that won\'t interfere with whatever comes next. Quietest feel, most honest concentration.', ko:'하루 한 번, 토너 다음에. 다음 단계를 방해하지 않는 가벼운 텍스처. 가장 조용한 사용감, 가장 정직한 농도.', ja:'1日1回、化粧水のあとに。次の工程を邪魔しない軽やかなテクスチャー。最も静かな使用感、最も正直な濃度。' })}
      </p>
    </section>

    {/* FORMULATION — 02 */}
    <section style={{ background: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>{t({ en:'02 — Formulation', ko:'02 — 포뮬레이션', ja:'02 — 処方' })}</RuleLabel>
      <h2 style={{ margin: '12px 0 16px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.15 }}>{t({ en:'The full prescription.', ko:'전체 처방.', ja:'処方のすべて。' })}</h2>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {[
          { i:'01', n:'VAMTOXIN™ Peptide', r:{ en:'Acetyl Hexapeptide-8 derivative · SNARE inhibitor', ko:'아세틸 헥사펩타이드-8 유도체 · SNARE 억제제', ja:'アセチルヘキサペプチド-8誘導体 · SNARE阻害剤' }, p:'2.0%' },
          { i:'02', n:'Spicule Complex',   r:{ en:'Marine sponge micro-needles · delivery aid', ko:'해양 스펀지 마이크로니들 · 전달 보조', ja:'海綿マイクロニードル · 浸透補助' }, p:'0.5%' },
          { i:'03', n:'Centella Asiatica', r:{ en:'Madecassoside · TECA · soothing', ko:'마데카소사이드 · TECA · 진정', ja:'マデカッソシド · TECA · 鎮静' }, p:'0.5%' },
          { i:'04', n:'Niacinamide',       r:{ en:'Vitamin B3 · tone · clarity', ko:'비타민 B3 · 톤 · 투명감', ja:'ビタミンB3 · トーン · 透明感' }, p:'4.0%' },
          { i:'05', n:'Sodium Hyaluronate',r:{ en:'Tri-weight · hydration matrix', ko:'3중 분자량 · 수분 매트릭스', ja:'三段階分子量 · うるおいマトリックス' }, p:'1.2%' },
          { i:'06', n:'Panthenol',         r:{ en:'Pro-Vitamin B5 · barrier support', ko:'프로비타민 B5 · 장벽 지지', ja:'プロビタミンB5 · バリアサポート' }, p:'2.0%' },
        ].map((x) => (
          <li key={x.n} style={{ display: 'grid', gridTemplateColumns: '24px 1fr auto', gap: 12, padding: '14px 0', borderBottom: `1px dashed ${fnxRule(0.15)}`, alignItems: 'baseline' }}>
            <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.18em' }}>{x.i}</span>
            <div>
              <div style={{ fontFamily: FNX.serif, fontSize: 15 }}>{x.n}</div>
              <div style={{ marginTop: 2, fontSize: 12, color: FNX.sage }}>{t(x.r)}</div>
            </div>
            <div style={{ fontFamily: FNX.serif, fontSize: 15, letterSpacing: '0.06em' }}>{x.p}</div>
          </li>
        ))}
      </ul>
    </section>

    {/* HOW TO USE — 03 */}
    <section style={{ background: FNX.pineInk, color: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color={fnxCream(0.82)}>{t({ en:'03 — How to Use', ko:'03 — 사용법', ja:'03 — 使い方' })}</RuleLabel>
      <h2 style={{ margin: '12px 0 18px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>{t({ en:'One step in a four-step ritual.', ko:'네 단계 리추얼 속, 하나의 단계.', ja:'四つのステップ、その一歩。' })}</h2>
      {[
        { n:'01', t:{ en:'Cleanse', ko:'클렌즈', ja:'クレンズ' }, k:{ en:'Cleanse', ko:'클렌징', ja:'洗浄' }, d:{ en:'Morning and evening, a gentle cleanser.', ko:'아침과 저녁, 순한 클렌저로.', ja:'朝と夜、やさしいクレンザーで。' } },
        { n:'02', t:{ en:'Prep', ko:'프렙', ja:'プレップ' }, k:{ en:'Prep', ko:'준비', ja:'準備' }, d:{ en:'One pass of pH-balanced toner.', ko:'pH 밸런스 토너 한 번.', ja:'pHバランス化粧水をひと塗り。' } },
        { n:'03', t:{ en:'Prescribe', ko:'프리스크라이브', ja:'プリスクライブ' }, k:{ en:'Prescribe', ko:'처방', ja:'処方' }, d:{ en:'Two to three pumps of Peptosome, with the grain of skin.', ko:'펩토좀 2~3펌프, 피부 결을 따라.', ja:'ペプトソームを2〜3プッシュ、肌の流れに沿って。' }, active:true },
        { n:'04', t:{ en:'Seal', ko:'씰', ja:'シール' }, k:{ en:'Seal', ko:'마무리', ja:'仕上げ' }, d:{ en:'Seal with a light cream.', ko:'가벼운 크림으로 마무리.', ja:'軽いクリームで封をする。' } },
      ].map(s => (
        <div key={s.n} style={{ padding: '18px 0', borderTop: `1px solid ${s.active ? FNX.labRed : fnxCream(0.25)}`, background: s.active ? fnxCream(0.06) : 'transparent' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <span style={{ fontFamily: FNX.mono, fontSize: 11, color: s.active ? FNX.labRed : FNX.tan, letterSpacing: '0.18em' }}>{s.n}</span>
              <span style={{ fontFamily: FNX.serif, fontSize: 20 }}>{t(s.t)}</span>
            </div>
            <span style={{ fontSize: 11, color: fnxCream(0.72) }}>{t(s.k)}</span>
          </div>
          <p style={{ margin: '8px 0 0', fontSize: 12, lineHeight: 1.7, color: fnxCream(0.85) }}>{t(s.d)}</p>
        </div>
      ))}
    </section>

    {/* ROLLER APPLICATOR — 04 */}
    <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>{t({ en:'04 — Roller Applicator', ko:'04 — 롤러 어플리케이터', ja:'04 — ローラーアプリケーター' })}</RuleLabel>
      <h2 style={{ margin: '12px 0 16px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>{t({ en:'The roller remembers the angle.', ko:'롤러가 각도를 기억합니다.', ja:'ローラーが角度を覚えている。' })}</h2>
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.85, color: FNX.pineInk }}>
        {t({ en:'A stainless steel roller at the bottle top — rolling along the grain disperses the formula evenly, and leaves no fingerprint oil for the quietest finish.', ko:'병 상단의 스테인리스 스틸 롤러 — 결을 따라 굴리면 포뮬러가 고르게 퍼지고, 지문 유분이 남지 않아 가장 조용한 마무리를 완성합니다.', ja:'ボトル上部のステンレススチールローラー — 流れに沿って転がすと処方が均一に広がり、指の皮脂を残さず最も静かな仕上がりに。' })}
      </p>
      <ol style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'grid', gap: 12, fontSize: 13 }}>
        {[
          { en:'Pump one or two drops onto the roller to form a small reservoir.', ko:'롤러에 한두 방울을 펌핑해 작은 저장소를 만듭니다.', ja:'ローラーに1〜2滴をプッシュし、小さなたまりを作る。' },
          { en:'Broad areas (cheeks · forehead) — inside to outside, gently.', ko:'넓은 부위(볼 · 이마) — 안쪽에서 바깥쪽으로, 부드럽게.', ja:'広い部分(頬 · 額) — 内側から外側へ、やさしく。' },
          { en:'Detail areas (around eyes and mouth) — like drawing with a fine pen.', ko:'섬세한 부위(눈가와 입가) — 가는 펜으로 그리듯이.', ja:'細かい部分(目元・口元) — 細いペンで描くように。' },
          { en:'Finish by pressing evenly with palms to seal.', ko:'손바닥으로 고르게 눌러 마무리합니다.', ja:'手のひらで均一に押さえて仕上げる。' },
        ].map((s, i) => (
          <li key={i} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 12, paddingBottom: 10, borderBottom: `1px dashed ${fnxRule(0.15)}` }}>
            <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.labRed, letterSpacing: '0.14em' }}>0{i+1}</span>
            <span>{t(s)}</span>
          </li>
        ))}
      </ol>
      <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
        {[
          { c:{ en:'Pump onto roller', ko:'롤러에 펌핑', ja:'ローラーにプッシュ' }, src:'assets/serum-pump.png', pos:'50% center' },
          { c:{ en:'Roll along the grain', ko:'결을 따라 굴리기', ja:'流れに沿って転がす' }, src:'assets/serum-roller-green.png', pos:'50% center' },
          { c:{ en:'Press to settle', ko:'눌러서 안착', ja:'押さえてなじませる' }, src:'assets/serum-shadow.png', pos:'50% center' },
        ].map((p, i) => (
          <div key={i} style={{ aspectRatio: '3/4', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.18)}`, position: 'relative' }}>
            <img src={p.src} alt={t(p.c)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
          </div>
        ))}
      </div>
    </section>

    {/* REAL USERS · TESTERS — 05 */}
    <section style={{ background: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>{t({ en:'05 — Real Users · Testers', ko:'05 — 실사용자 · 테스터', ja:'05 — 実ユーザー · テスター' })}</RuleLabel>
      <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.05 }}>{t({ en:'Before & After.', ko:'비포 & 애프터.', ja:'ビフォー & アフター。' })}</h2>
      <p style={{ marginTop: 16, color: FNX.pineInk, fontSize: 14, lineHeight: 1.8 }}>
        {t({ en:'A record from users in their thirties and beyond. Not numbers — the sentences time has left behind.', ko:'30대 이상 사용자들의 기록. 숫자가 아니라 — 시간이 남긴 문장들.', ja:'30代以上のユーザーの記録。数字ではなく — 時間が残した言葉。' })}
      </p>
      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div style={{ aspectRatio: '4/5', position: 'relative', overflow: 'hidden', border: `1px solid ${fnxRule(0.18)}` }}>
          <img src="assets/model-b-before.png" alt={t({ en:'Model B — before', ko:'모델 B — 비포', ja:'モデルB — ビフォー' })} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
        </div>
        <div style={{ aspectRatio: '4/5', position: 'relative', overflow: 'hidden', border: `1px solid ${fnxRule(0.18)}` }}>
          <img src="assets/model-b-after.png" alt={t({ en:'Model B — after', ko:'모델 B — 애프터', ja:'モデルB — アフター' })} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
        </div>
      </div>
      <ul style={{ listStyle: 'none', margin: '22px 0 0', padding: 0, display: 'grid', gap: 14 }}>
        {[
          { en:'"The roller glide is precise; mornings are especially quiet." — Kyung, Seoul', ko:'"롤러의 미끄러짐이 정확해요. 아침이 특히 조용합니다." — 경, 서울', ja:'「ローラーの滑りが正確。朝が特に静かです。」 — キョン、ソウル' },
          { en:'"The texture absorbs fully before the next step." — Min, Busan', ko:'"다음 단계 전에 텍스처가 완전히 흡수돼요." — 민, 부산', ja:'「次の工程の前にテクスチャーが完全に吸収されます。」 — ミン、釜山' },
          { en:'"Now I see what a single prescription can be." — Seo, Seoul', ko:'"하나의 처방이 무엇일 수 있는지 이제 알겠어요." — 서, 서울', ja:'「一つの処方が何になり得るか、今わかります。」 — ソ、ソウル' },
        ].map((q, i) => (
          <li key={i} style={{ fontFamily: FNX.serif, fontSize: 14, lineHeight: 1.7, color: FNX.pineInk, paddingLeft: 16, borderLeft: `1px solid ${FNX.tan}` }}>{t(q)}</li>
        ))}
      </ul>
    </section>

    {/* REVIEWS — 06 */}
    <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18, borderBottom: `1px solid ${fnxRule(0.2)}`, paddingBottom: 16 }}>
        <div>
          <RuleLabel align="left" color={FNX.tan}>{t({ en:'06 — Reviews', ko:'06 — 리뷰', ja:'06 — レビュー' })}</RuleLabel>
          <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 24 }}>4.92 ★ / 612 {t({ en:'reviews', ko:'리뷰', ja:'レビュー' })}</h2>
        </div>
      </div>
      <div style={{ display: 'grid', gap: 12 }}>
        {[
          { t:{ en:'Softer expression lines', ko:'부드러워진 표정 주름', ja:'やわらいだ表情ジワ' }, a:{ en:'Kim · 38 · Seoul · Week 6', ko:'김 · 38 · 서울 · 6주차', ja:'キム · 38 · ソウル · 6週目' }, d:{ en:'In the morning mirror I can feel the lines have softened. Without any heavy procedures, the daily texture has changed.', ko:'아침 거울 속, 주름이 부드러워진 게 느껴져요. 무거운 시술 없이 매일의 결이 달라졌습니다.', ja:'朝の鏡で、シワがやわらいだのを感じます。重い施術なしに、日々の肌の質感が変わりました。' } },
          { t:{ en:'Skin that feels quiet', ko:'조용해진 피부', ja:'静かに感じる肌' }, a:{ en:'M.T · 36 · Shanghai · Week 7', ko:'M.T · 36 · 상하이 · 7주차', ja:'M.T · 36 · 上海 · 7週目' }, d:{ en:"Since switching, my skin's condition has improved — I look forward to morning care. The words quiet and steady come to mind.", ko:'바꾼 뒤로 피부 컨디션이 좋아져 — 아침 케어가 기다려져요. 조용하고 한결같다는 말이 떠오릅니다.', ja:'切り替えてから肌の調子が良くなり — 朝のケアが楽しみに。静かで、揺るがないという言葉が浮かびます。' } },
          { t:{ en:'Honest concentration', ko:'정직한 농도', ja:'正直な濃度' }, a:{ en:'Park · 45 · Busan · Week 8', ko:'박 · 45 · 부산 · 8주차', ja:'パク · 45 · 釜山 · 8週目' }, d:{ en:'The ingredient list is generous and clear. By week six the fine lines softened. Feels like following a prescription day by day.', ko:'성분 리스트가 넉넉하고 명확해요. 6주차에 잔주름이 부드러워졌습니다. 매일 처방을 따르는 기분이에요.', ja:'成分リストが惜しみなく明確。6週目には小ジワがやわらぎました。毎日処方に従うような感覚です。' } },
          { t:{ en:'Gentle even for sensitive skin', ko:'민감성 피부에도 순하게', ja:'敏感肌にもやさしく' }, a:{ en:'Y.S · 39 · Tokyo · 6wk', ko:'Y.S · 39 · 도쿄 · 6주', ja:'Y.S · 39 · 東京 · 6週' }, d:{ en:'Low irritation, skin texture comes together. Morning makeup sits differently. The quietest ritual of the day.', ko:'자극이 적고 피부 결이 정돈돼요. 아침 메이크업이 다르게 올라갑니다. 하루 중 가장 조용한 리추얼.', ja:'刺激が少なく、肌のキメが整います。朝のメイクののりが違います。一日で最も静かなリチュアル。' } },
        ].map((r, i) => (
          <div key={i} style={{ padding: 20, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <span role="img" aria-label="Rated 5 out of 5" style={{ color: FNX.pineInk, letterSpacing: '0.4em', fontSize: 11 }}>★★★★★</span>
              <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em' }}>{t({ en:'VERIFIED', ko:'인증됨', ja:'認証済み' })}</span>
            </div>
            <h3 style={{ margin: '12px 0 8px', fontFamily: FNX.serif, fontSize: 18, fontWeight: 300, letterSpacing: '-0.01em' }}>{t(r.t)}</h3>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.8, color: FNX.pineInk }}>{t(r.d)}</p>
            <div style={{ marginTop: 12, fontSize: 11, color: FNX.sage, letterSpacing: '0.06em' }}>{t(r.a)}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 22 }}>
        <Btn kind="ghost" full style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Load More Reviews', ko:'리뷰 더 보기', ja:'レビューをもっと見る' })}</Btn>
      </div>
    </section>

    {/* PAIR WELL WITH — 07 */}
    <section style={{ background: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>{t({ en:'07 — Pair Well With', ko:'07 — 함께 쓰면 좋은', ja:'07 — 相性のよい組み合わせ' })}</RuleLabel>
      <h2 style={{ margin: '12px 0 24px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>{t({ en:'Continue the ritual.', ko:'리추얼을 이어가세요.', ja:'リチュアルを続ける。' })}</h2>
      <div style={{ display: 'grid', gap: 16 }}>
        {[
          { src:'assets/serum-trio.png', t:{ en:'Spicule Wrinkle-Free Glow Serum', ko:'스피큘 링클프리 글로우 세럼', ja:'スピキュール リンクルフリー グロウセラム' }, p:'₩58,000', s:'20ml', pos:'50% center' },
          { src:'assets/peptosome-pair.jpg', t:{ en:'Peptosome — Couple Set', ko:'펩토좀 — 커플 세트', ja:'ペプトソーム — カップルセット' }, p:'₩172,800 (−10%)', s:'50ml × 2', pos:'50% 30%' },
          { src:'assets/duo-on-stone.jpg', t:{ en:'The Collection — Duo', ko:'더 컬렉션 — 듀오', ja:'ザ・コレクション — デュオ' }, p:'₩142,000 (−8%)', s:'50ml + 20ml', pos:'50% center' },
        ].map((p, pi) => (
          <article key={pi} style={{ background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
              <img src={p.src} alt={t(p.t)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
            </div>
            <div style={{ padding: 18 }}>
              <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 20, lineHeight: 1.2 }}>{t(p.t)}</h3>
              <div style={{ marginTop: 12, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: FNX.serif, fontSize: 16 }}>{p.p}</span>
                <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.16em' }}>{p.s}</span>
              </div>
              <div style={{ marginTop: 16 }}>
                <Btn kind="ghost" full size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Detail →', ko:'자세히 →', ja:'詳細 →' })}</Btn>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <MFooter />
  </div>
  );
};

// ============ MOBILE SCIENCE ============
const ScienceMobile = () => {
  const { t } = useLocale();
  return (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
    <MHeader title={{ en:'Science / VAMTOXIN™', ko:'사이언스 / VAMTOXIN™', ja:'サイエンス / VAMTOXIN™' }} />

    {/* HERO */}
    <section style={{ background: FNX.pineInk, color: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color={fnxCream(0.55)}>{t({ en:'The Science', ko:'더 사이언스', ja:'ザ・サイエンス' })}</RuleLabel>
      <h1 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 44, lineHeight: 0.98, letterSpacing: '-0.02em' }}>
        {t({ en:'VAMTOXIN™ 2.0% — a quiet molecule.', ko:'VAMTOXIN™ 2.0% — 조용한 분자.', ja:'VAMTOXIN™ 2.0% — 静かな分子。' })}
      </h1>
      <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.85, color: fnxCream(0.85) }}>
        {t({ en:'A SNARE-inhibiting hexapeptide that acts on micro-contractions in expression muscles. An injection-free prescription — the exact work of a molecule that quiets the surface.', ko:'표정근의 미세 수축에 작용하는 SNARE 억제 헥사펩타이드. 주사 없는 처방 — 표면을 가라앉히는 분자의 정확한 작용.', ja:'表情筋の微細な収縮に作用するSNARE阻害ヘキサペプチド。注射のない処方 — 表面を静める分子の、確かな働き。' })}
      </p>
      <div style={{ marginTop: 24, display: 'grid', gap: 10 }}>
        <Btn kind="inverse" full>{t({ en:'Read the Patent Story', ko:'특허 스토리 읽기', ja:'特許ストーリーを読む' })}</Btn>
        <Btn kind="ghost" full data-go="shop/peptosome" style={{ color: FNX.cream, borderColor: FNX.cream }}>{t({ en:'Shop Peptosome →', ko:'펩토좀 쇼핑 →', ja:'ペプトソームを見る →' })}</Btn>
      </div>
      {/* SNARE diagram */}
      <div style={{ marginTop: 28, aspectRatio: '1/1', background: `repeating-linear-gradient(135deg, ${fnxCream(0.06)} 0 14px, transparent 14px 28px)`, border: `1px solid ${fnxCream(0.18)}`, position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: FNX.mono, fontSize: 10, color: fnxCream(0.72), letterSpacing: '0.14em' }}>{t({ en:'FIG. 01 — VAMTOXIN™ ON SNARE', ko:'그림 01 — SNARE에 작용하는 VAMTOXIN™', ja:'図 01 — SNAREに作用するVAMTOXIN™' })}</div>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 280 280" style={{ width: '85%', height: '85%' }}>
              <circle cx="140" cy="140" r="110" fill="none" stroke={FNX.cream} strokeWidth="0.6" opacity="0.3" />
              <circle cx="140" cy="140" r="70"  fill="none" stroke={FNX.cream} strokeWidth="0.6" opacity="0.5" />
              <circle cx="140" cy="140" r="40"  fill="none" stroke={FNX.cream} strokeWidth="0.8" opacity="0.7" />
              <circle cx="140" cy="140" r="10"  fill={FNX.labRed} />
              <line x1="40" y1="140" x2="240" y2="140" stroke={FNX.cream} strokeWidth="0.4" opacity="0.3" />
              <line x1="140" y1="40" x2="140" y2="240" stroke={FNX.cream} strokeWidth="0.4" opacity="0.3" />
              <text x="155" y="138" fontFamily="ui-monospace" fontSize="6" fill={fnxCream(0.82)}>VAMTOXIN™</text>
              <text x="36" y="265" fontFamily="ui-monospace" fontSize="6" fill={fnxCream(0.55)}>Synaptic Membrane</text>
              <text x="36" y="80" fontFamily="ui-monospace" fontSize="6" fill={fnxCream(0.55)}>Synaptic Vesicle</text>
              <text x="180" y="80" fontFamily="ui-monospace" fontSize="6" fill={fnxCream(0.55)}>SNAP-25</text>
            </svg>
          </div>
          <div style={{ fontFamily: FNX.mono, fontSize: 10, color: fnxCream(0.72), letterSpacing: '0.14em', textAlign: 'right' }}>{t({ en:'Schematic · not to scale', ko:'개략도 · 실제 비율 아님', ja:'概略図 · 縮尺は不正確' })}</div>
        </div>
      </div>
    </section>

    {/* MECHANISM — 01 */}
    <section style={{ background: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>{t({ en:'01 — The Mechanism', ko:'01 — 메커니즘', ja:'01 — メカニズム' })}</RuleLabel>
      <h2 style={{ margin: '12px 0 18px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>{t({ en:'Quiet expression, at the protein level.', ko:'단백질 차원에서, 조용한 표정.', ja:'タンパク質レベルで、静かな表情。' })}</h2>
      {[
        { n:'01', t:{ en:'Receptor Bind', ko:'수용체 결합', ja:'受容体結合' },    d:{ en:"VAMTOXIN™'s hexapeptide residues bind to SNAP-25.", ko:'VAMTOXIN™의 헥사펩타이드 잔기가 SNAP-25에 결합합니다.', ja:'VAMTOXIN™のヘキサペプチド残基がSNAP-25に結合する。' } },
        { n:'02', t:{ en:'SNARE Inhibit', ko:'SNARE 억제', ja:'SNARE阻害' },    d:{ en:'Temporarily slows SNARE complex formation.', ko:'SNARE 복합체 형성을 일시적으로 늦춥니다.', ja:'SNARE複合体の形成を一時的に遅らせる。' } },
        { n:'03', t:{ en:'Quiet Expression', ko:'조용한 표정', ja:'静かな表情' }, d:{ en:'Micro-contractions in expression muscles gently settle.', ko:'표정근의 미세 수축이 부드럽게 가라앉습니다.', ja:'表情筋の微細な収縮がやさしく落ち着く。' } },
        { n:'04', t:{ en:'Skin Stillness', ko:'피부의 고요', ja:'肌の静けさ' },   d:{ en:'Wrinkle depth measurably softens; the surface settles.', ko:'주름 깊이가 측정 가능하게 부드러워지고, 표면이 안정됩니다.', ja:'シワの深さが測定可能なほどやわらぎ、表面が落ち着く。' } },
      ].map(s => (
        <div key={s.n} style={{ padding: '16px 0', borderTop: `1px solid ${fnxRule(0.18)}` }}>
          <h3 style={{ margin: '0 0 6px', fontFamily: FNX.serif, fontSize: 20, fontWeight: 300 }}>{t(s.t)}</h3>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: FNX.sage }}>{t(s.d)}</p>
        </div>
      ))}
    </section>

    {/* THE MOLECULE — 02 */}
    <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.sage}>{t({ en:'The Molecule · 02', ko:'더 몰리큘 · 02', ja:'ザ・モレキュール · 02' })}</RuleLabel>
      <div style={{ marginTop: 12 }}>
        {[
          [{ en:'INCI Name', ko:'INCI 명칭', ja:'INCI 名称' }, 'Acetyl Hexapeptide-8 derivative'],
          [{ en:'Class', ko:'분류', ja:'分類' }, { en:'SNARE-mimicking peptide', ko:'SNARE 모방 펩타이드', ja:'SNARE模倣ペプチド' }],
          [{ en:'Molecular Weight', ko:'분자량', ja:'分子量' }, '888.05 Da'],
          [{ en:'Charge at pH 5.5', ko:'pH 5.5에서의 전하', ja:'pH 5.5での電荷' }, 'Net +1'],
          [{ en:'Concentration', ko:'농도', ja:'濃度' }, '2.0% (20,000 ppm)'],
          [{ en:'Permeation', ko:'침투', ja:'浸透' }, { en:'Stratum corneum · with Spicule carrier', ko:'각질층 · 스피큘 캐리어 동반', ja:'角質層 · スピキュールキャリア併用' }],
          [{ en:'Stability', ko:'안정성', ja:'安定性' }, { en:'24 months · sealed, 25°C', ko:'24개월 · 밀봉, 25°C', ja:'24か月 · 密封、25°C' }],
          [{ en:'Compatibility', ko:'호환성', ja:'相性' }, 'Niacinamide, HA, Centella, Vitamin B5'],
        ].map((row, i) => (
          <div key={i} style={{ padding: '14px 0', borderBottom: `1px dashed ${fnxRule(0.18)}` }}>
            <div style={{ fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage }}>{t(row[0])}</div>
            <div style={{ marginTop: 4, fontFamily: FNX.serif, fontSize: 16, color: FNX.pineInk, letterSpacing: '0.02em' }}>{typeof row[1] === 'string' ? row[1] : t(row[1])}</div>
          </div>
        ))}
      </div>
    </section>

    {/* THE PATENT — 03 */}
    <section style={{ background: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>{t({ en:'03 — The Patent', ko:'03 — 특허', ja:'03 — 特許' })}</RuleLabel>
      <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>{t({ en:'Sole patent, single source.', ko:'단독 특허, 단일 공급원.', ja:'唯一の特許、単一の供給源。' })}</h2>
      <p style={{ margin: '12px 0 0', color: FNX.sage, fontSize: 14 }}>{t({ en:'VAMTOXIN™ is an ingredient held exclusively by Supadelixir.', ko:'VAMTOXIN™은 Supadelixir가 독점 보유한 성분입니다.', ja:'VAMTOXIN™はSupadelixirが独占的に保有する成分です。' })}</p>
      <div style={{ marginTop: 20, aspectRatio: '3/4', overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
        <img src="assets/booster-box-front.png" alt={t({ en:'VAMTOXIN™ Patent', ko:'VAMTOXIN™ 특허', ja:'VAMTOXIN™ 特許' })} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
      </div>
      <h3 style={{ margin: '20px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 22, lineHeight: 1.2 }}>{t({ en:'Exclusively licensed, precisely formulated.', ko:'독점 라이선스, 정밀한 처방.', ja:'独占ライセンス、緻密な処方。' })}</h3>
      <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.9, color: FNX.pineInk }}>
        {t({ en:'VAMTOXIN™ is a hexapeptide that mimics the mechanism of Botulinum Toxin. Supadelixir holds the ingredient exclusively; Finixlab formulates it — an injection-free prescription at 2.0%.', ko:'VAMTOXIN™은 보툴리눔 톡신의 메커니즘을 모방한 헥사펩타이드입니다. Supadelixir가 성분을 독점 보유하고, Finixlab이 이를 처방합니다 — 주사 없는 2.0% 처방.', ja:'VAMTOXIN™はボツリヌストキシンのメカニズムを模倣したヘキサペプチドです。Supadelixirが成分を独占保有し、Finixlabがそれを処方します — 注射のない2.0%処方。' })}
      </p>
      <div style={{ marginTop: 24, display: 'grid', gap: 0 }}>
        {[
          { l:{ en:'Sole Holder', ko:'단독 보유사', ja:'単独保有社' },    v:'Supadelixir' },
          { l:{ en:'Mechanism', ko:'메커니즘', ja:'メカニズム' },      v:{ en:'SNARE complex inhibition — temporary expression softening', ko:'SNARE 복합체 억제 — 일시적 표정 완화', ja:'SNARE複合体阻害 — 一時的な表情の緩和' } },
          { l:{ en:'Design Class', ko:'설계 분류', ja:'設計分類' },   v:{ en:'Botulinum-toxin mimetic hexapeptide', ko:'보툴리눔 톡신 모방 헥사펩타이드', ja:'ボツリヌストキシン模倣ヘキサペプチド' } },
          { l:{ en:'Concentration', ko:'농도', ja:'濃度' },  v:{ en:'2.0% — Finixlab exclusive license', ko:'2.0% — Finixlab 독점 라이선스', ja:'2.0% — Finixlab独占ライセンス' } },
          { l:{ en:'Carrier System', ko:'전달 시스템', ja:'キャリアシステム' }, v:{ en:'Spicule Complex 0.5% — injection-free delivery', ko:'스피큘 콤플렉스 0.5% — 주사 없는 전달', ja:'スピキュールコンプレックス0.5% — 注射のない浸透' } },
        ].map((row, i) => (
          <div key={i} style={{ padding: '14px 0', borderTop: `1px solid ${fnxRule(0.18)}`, borderBottom: i === 4 ? `1px solid ${fnxRule(0.18)}` : 'none' }}>
            <div style={{ fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage }}>{t(row.l)}</div>
            <div style={{ marginTop: 4, fontFamily: FNX.serif, fontSize: 15, color: FNX.pineInk, letterSpacing: '0.02em' }}>{typeof row.v === 'string' ? row.v : t(row.v)}</div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 20, fontFamily: FNX.mono, fontSize: 11, color: FNX.sage, letterSpacing: '0.14em', lineHeight: 1.7 }}>
        {t({ en:'* Efficacy certification is in preparation. Ingredient design and concentration are stated on the label.', ko:'* 효능 인증은 준비 중입니다. 성분 설계와 농도는 라벨에 명시되어 있습니다.', ja:'* 効能認証は準備中です。成分設計と濃度はラベルに記載しています。' })}
      </p>
    </section>

    {/* NOTOX METHOD — 04 */}
    <section style={{ background: FNX.olive, color: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color={fnxCream(0.55)}>{t({ en:'04 — Notox Method', ko:'04 — 노톡스 메서드', ja:'04 — ノトックス メソッド' })}</RuleLabel>
      <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1 }}>{t({ en:'Notox — a verb, not a substitute.', ko:'노톡스 — 대체가 아니라, 동사.', ja:'ノトックス — 代替ではなく、動詞。' })}</h2>
      <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.85, color: fnxCream(0.85) }}>
        {t({ en:'We never claim to replace procedures. We simply fill the days between them with a daily prescription. Alongside clinical treatments, or as a daily slow-aging ritual — both in the same place.', ko:'시술을 대체한다고 말하지 않습니다. 그저 그 사이의 날들을 매일의 처방으로 채울 뿐입니다. 임상 시술과 함께, 혹은 매일의 슬로우 에이징 리추얼로 — 같은 자리에서.', ja:'施術を置き換えるとは言いません。ただ、その間の日々を毎日の処方で満たすだけ。臨床施術とともに、あるいは毎日のスローエイジング・リチュアルとして — 同じ場所で。' })}
      </p>
      <div style={{ marginTop: 24 }}>
        <Btn kind="inverse" full>{t({ en:'Read the Method →', ko:'메서드 읽기 →', ja:'メソッドを読む →' })}</Btn>
      </div>
      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {[
          { t:{ en:'In-Clinic', ko:'클리닉에서', ja:'クリニックで' },  d:{ en:'A prescription that accelerates post-procedure recovery.', ko:'시술 후 회복을 앞당기는 처방.', ja:'施術後の回復を早める処方。' }, tag:{ en:'AFTER PROCEDURE', ko:'시술 후', ja:'施術後' } },
          { t:{ en:'At-Home', ko:'집에서', ja:'自宅で' },    d:{ en:'For days between procedures, an eight-minute daily ritual.', ko:'시술 사이의 날들을 위한, 하루 8분의 리추얼.', ja:'施術の合間の日々に、1日8分のリチュアル。' }, tag:{ en:'DAILY RITUAL', ko:'데일리 리추얼', ja:'デイリーリチュアル' } },
          { t:{ en:'Layered', ko:'레이어드', ja:'レイヤード' },    d:{ en:'High-concentration peptide layered with hydration and soothing actives.', ko:'고농도 펩타이드를 수분·진정 성분과 레이어링.', ja:'高濃度ペプチドを保湿・鎮静成分とレイヤリング。' }, tag:{ en:'LAYERING', ko:'레이어링', ja:'レイヤリング' } },
          { t:{ en:'Quiet', ko:'조용한', ja:'静か' },      d:{ en:"Doesn't interfere with whatever comes next.", ko:'다음에 오는 무엇도 방해하지 않습니다.', ja:'次に来る何も邪魔しない。' }, tag:{ en:'LIGHTWEIGHT', ko:'가벼움', ja:'軽やか' } },
        ].map((c, i) => (
          <div key={i} style={{ padding: 18, border: `1px solid ${fnxCream(0.2)}` }}>
            <div style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.tan, letterSpacing: '0.14em' }}>{t(c.tag)}</div>
            <h3 style={{ margin: '12px 0 8px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 18 }}>{t(c.t)}</h3>
            <p style={{ margin: 0, fontSize: 12, lineHeight: 1.7, color: fnxCream(0.82) }}>{t(c.d)}</p>
          </div>
        ))}
      </div>
    </section>

    {/* DOCUMENTS — 05 */}
    <section style={{ background: FNX.cream, padding: '40px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>{t({ en:'05 — Documents', ko:'05 — 자료', ja:'05 — ドキュメント' })}</RuleLabel>
      <h2 style={{ margin: '12px 0 24px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.1 }}>{t({ en:'For the curious.', ko:'궁금한 이들을 위해.', ja:'もっと知りたい人へ。' })}</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {[
          { t:{ en:'VAMTOXIN™ Whitepaper', ko:'VAMTOXIN™ 백서', ja:'VAMTOXIN™ ホワイトペーパー' },          s:{ en:'PDF · 1.1 MB · 11 pages', ko:'PDF · 1.1 MB · 11페이지', ja:'PDF · 1.1 MB · 11ページ' }, tag:{ en:'SCIENCE', ko:'사이언스', ja:'サイエンス' } },
          { t:{ en:'Patent Story — Supadelixir', ko:'특허 스토리 — Supadelixir', ja:'特許ストーリー — Supadelixir' },     s:{ en:'PDF · 0.8 MB · 6 pages', ko:'PDF · 0.8 MB · 6페이지', ja:'PDF · 0.8 MB · 6ページ' },  tag:{ en:'INGREDIENT', ko:'성분', ja:'成分' } },
          { t:{ en:'Full INCI Sheet — Peptosome 50ml', ko:'전성분표 — Peptosome 50ml', ja:'全成分シート — Peptosome 50ml' }, s:{ en:'PDF · 0.4 MB · 2 pages', ko:'PDF · 0.4 MB · 2페이지', ja:'PDF · 0.4 MB · 2ページ' },  tag:{ en:'FORMULATION', ko:'포뮬레이션', ja:'処方' } },
        ].map((d, di) => (
          <a key={di} href="#" style={{ display: 'block', padding: 20, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`, textDecoration: 'none', color: FNX.pineInk }}>
            <div style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.labRed, letterSpacing: '0.24em' }}>{t(d.tag)}</div>
            <h3 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 20, lineHeight: 1.2 }}>{t(d.t)}</h3>
            <div style={{ marginTop: 16, paddingTop: 12, borderTop: `1px solid ${fnxRule(0.14)}`, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: FNX.sage, fontFamily: FNX.serif, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              <span>{t(d.s)}</span>
              <span>{t({ en:'Download ↓', ko:'다운로드 ↓', ja:'ダウンロード ↓' })}</span>
            </div>
          </a>
        ))}
      </div>
    </section>

    <MFooter />
  </div>
  );
};

// ============ MOBILE JOURNAL ============
const JournalMobile = () => {
  const { t } = useLocale();
  const featured = {
    h:{ en:'On the Quiet Discipline of Peptides', ko:'펩타이드의 조용한 규율에 대하여', ja:'ペプチドの静かな規律について' },
    sub:{ en:"Peptides' quiet practice — how a single molecule softens the texture of expression.", ko:'펩타이드의 조용한 실천 — 하나의 분자가 표정의 결을 부드럽게 하는 방식.', ja:'ペプチドの静かな実践 — 一つの分子が表情の質感をやわらげる方法。' },
    author:{ en:'Hyungju Park · Founder', ko:'박형주 · 창립자', ja:'パク・ヒョンジュ · 創業者' },
    minutes:{ en:'7 min', ko:'7분', ja:'7分' },
    img:'assets/serum-pump.png', pos:'50% center',
  };
  const articles = [
    { n:'N°011', h:{ en:'In the Cabinet of a Seoul Dermatologist', ko:'서울 피부과 의사의 캐비닛 속에서', ja:'ソウルの皮膚科医のキャビネットの中で' },  img:'assets/booster-grid.png', pos:'50% center' },
    { n:'N°010', h:{ en:'Notox — A Verb, Not a Substitute', ko:'노톡스 — 대체가 아니라, 동사', ja:'ノトックス — 代替ではなく、動詞' },           img:'assets/serum-roller-green.png', pos:'50% center' },
    { n:'N°009', h:{ en:'Niacinamide at 4%: Where the Glow Begins', ko:'나이아신아마이드 4%: 광채가 시작되는 곳', ja:'ナイアシンアミド4%：輝きが始まる場所' },  img:'assets/booster-bottle-front.png', pos:'50% center' },
    { n:'N°008', h:{ en:'Three Weeks After a Procedure: The Quiet In-Between', ko:'시술 3주 후: 조용한 사이의 시간', ja:'施術から3週間後：静かな間（あわい）' }, img:'assets/serum-shadow.png', pos:'50% center' },
    { n:'N°007', h:{ en:'Eight Minutes, in a Slow Bathroom', ko:'느린 욕실에서의 8분', ja:'ゆっくりとした浴室での8分' },          img:'assets/peptosome-pair.jpg', pos:'50% center' },
    { n:'N°006', h:{ en:'On the Word "Anti": Why We Don\'t Say It', ko:'"안티"라는 말에 대하여: 우리가 쓰지 않는 이유', ja:'「アンチ」という言葉について：私たちが使わない理由' },   img:'assets/duo-on-stone.jpg', pos:'50% center' },
  ];
  const cats = [
    { en:'All', ko:'전체', ja:'すべて' },
    { en:'Slow Aging', ko:'슬로우 에이징', ja:'スローエイジング' },
    { en:'Method', ko:'메서드', ja:'メソッド' },
    { en:'Interview', ko:'인터뷰', ja:'インタビュー' },
    { en:'Ingredient', ko:'성분', ja:'成分' },
  ];
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
      <MHeader title={{ en:'Journal', ko:'저널', ja:'ジャーナル' }} />

      {/* MASTHEAD */}
      <section style={{ padding: '32px 24px 24px', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
        <h1 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 200, fontSize: 52, lineHeight: 0.95, letterSpacing: '-0.02em' }}>{t({ en:'The Journal.', ko:'더 저널.', ja:'ザ・ジャーナル。' })}</h1>
        <p style={{ marginTop: 14, fontFamily: FNX.serif, fontSize: 13, color: FNX.sage, lineHeight: 1.7, letterSpacing: '0.04em' }}>{t({ en:'Quiet dispatches, once a month.', ko:'한 달에 한 번, 조용한 소식.', ja:'月に一度、静かな便り。' })}</p>
        <div style={{ marginTop: 18 }}>
          <Btn kind="primary" size="sm">{t({ en:'Subscribe →', ko:'구독하기 →', ja:'購読する →' })}</Btn>
        </div>
      </section>

      {/* CATEGORY BAR */}
      <section style={{ padding: '20px 24px', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto', alignItems: 'center', fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.06em' }}>
          {cats.map((c, i) => (
            <button type="button" key={c.en} style={{
              font: 'inherit',
              padding: '7px 14px', borderRadius: 999, whiteSpace: 'nowrap', textTransform: 'uppercase',
              border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.18)}`,
              color: i === 0 ? FNX.pineInk : FNX.sage,
              background: i === 0 ? FNX.bone : 'transparent',
              cursor: 'pointer',
            }}>{t(c)}</button>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.tan}>{t({ en:'Featured · This Month', ko:'주목 · 이번 달', ja:'注目 · 今月' })}</RuleLabel>
        <div style={{ marginTop: 18, aspectRatio: '4/5', overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
          <img src={featured.img} alt={t(featured.h)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: featured.pos }} />
        </div>
        <h2 style={{ margin: '20px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1, letterSpacing: '-0.01em' }}>{t(featured.h)}</h2>
        <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.85, color: FNX.pineInk }}>{t(featured.sub)}</p>
        <p style={{ marginTop: 14, fontSize: 13, lineHeight: 1.85, color: FNX.sage }}>
          {t({ en:'Nine weeks of a molecule quieting the surface. What we prescribe is consistency, not efficacy — the idea that eight minutes a day keep the surface from dulling.', ko:'표면을 가라앉히는 분자의 9주. 우리가 처방하는 것은 효능이 아니라 꾸준함 — 하루 8분이 표면을 흐려지지 않게 한다는 생각.', ja:'表面を静める分子の9週間。私たちが処方するのは効能ではなく、続けること — 1日8分が表面をくすませない、という考え。' })}
        </p>
        <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 14, paddingTop: 16, borderTop: `1px solid ${fnxRule(0.18)}` }}>
          <span style={{ fontSize: 12, color: FNX.pineInk, fontFamily: FNX.serif, letterSpacing: '0.04em' }}>{t(featured.author)}</span>
          <span style={{ width: 1, height: 12, background: fnxRule(0.3) }}/>
          <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em' }}>{t(featured.minutes).toUpperCase()}</span>
          <span style={{ flex: 1 }}/>
          <Btn kind="ghost" size="sm" data-go="journal" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Read →', ko:'읽기 →', ja:'読む →' })}</Btn>
        </div>
      </section>

      {/* ALL DISPATCHES */}
      <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, borderBottom: `1px solid ${fnxRule(0.2)}`, paddingBottom: 16 }}>
          <h2 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, letterSpacing: '-0.01em' }}>{t({ en:'All Dispatches.', ko:'모든 소식.', ja:'すべての便り。' })}</h2>
          <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em' }}>{t({ en:'SORT · NEWEST', ko:'정렬 · 최신순', ja:'並び替え · 新着順' })}</span>
        </div>
        <div style={{ display: 'grid', gap: 24 }}>
          {articles.map(a => (
            <article key={a.n} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
                <img src={a.img} alt={t(a.h)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: a.pos }} />
              </div>
              <h3 style={{ margin: '12px 0 8px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 20, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                <a href="#/journal" data-go="journal" style={{ color: 'inherit', textDecoration: 'none' }}>{t(a.h)}</a>
              </h3>
              <span style={{ fontFamily: FNX.serif, fontSize: 11, letterSpacing: '0.14em', color: FNX.sage, textTransform: 'uppercase' }}>{t({ en:'Read →', ko:'읽기 →', ja:'読む →' })}</span>
            </article>
          ))}
        </div>

        {/* pagination */}
        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', gap: 8, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em' }}>
          {['‹', '01', '02', '03', '04', '›'].map((p, i) => (
            <button type="button" key={i} style={{
              font: 'inherit',
              minWidth: 44, height: 44, padding: '0 10px',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              border: `1px solid ${i === 1 ? FNX.pineInk : fnxRule(0.18)}`,
              color: i === 1 ? FNX.pineInk : FNX.sage,
              background: i === 1 ? FNX.bone : 'transparent',
              cursor: 'pointer',
            }}>{p}</button>
          ))}
        </div>
      </section>

      <MFooter />
    </div>
  );
};

// ============ MOBILE ABOUT ============
const AboutMobile = () => {
  const { t } = useLocale();
  const pillars = [
    { n:'01', t:{ en:'Honesty in concentration', ko:'농도의 정직함', ja:'濃度の正直さ' }, d:{ en:'Active concentrations stated on the label, in the language of prescription rather than marketing.', ko:'유효 성분 농도를 라벨에 명시합니다. 마케팅이 아니라 처방의 언어로.', ja:'有効成分の濃度をラベルに記載。マーケティングではなく、処方の言葉で。' } },
    { n:'02', t:{ en:'Clinic in everyday', ko:'일상 속의 클리닉', ja:'日常の中のクリニック' },       d:{ en:'The essence of procedures, distilled into eight daily minutes. Measurable change instead of heavy promises.', ko:'시술의 본질을 하루 8분으로 응축합니다. 거창한 약속이 아니라 측정 가능한 변화로.', ja:'施術の本質を1日8分に凝縮。大げさな約束ではなく、測定できる変化を。' } },
    { n:'03', t:{ en:'A quiet ritual', ko:'조용한 리추얼', ja:'静かなリチュアル' },           d:{ en:'The quietest touch. Consistency is what shapes skin in the end.', ko:'가장 조용한 손길. 결국 피부를 만드는 것은 꾸준함입니다.', ja:'最も静かな手触り。結局、肌をつくるのは続けること。' } },
    { n:'04', t:{ en:'Slow Asia', ko:'슬로우 아시아', ja:'スロー・アジア' },                d:{ en:'From Seoul to Shanghai, Tokyo and Ho Chi Minh. The poetic restraint of Korean indie beauty placed alongside clinical honesty.', ko:'서울에서 상하이, 도쿄, 호치민까지. 한국 인디 뷰티의 시적 절제를 임상적 정직함과 나란히.', ja:'ソウルから上海、東京、ホーチミンまで。韓国インディビューティーの詩的な抑制を、臨床的な正直さとともに。' } },
  ];
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
      <MHeader title={{ en:'About', ko:'브랜드', ja:'ブランド' }} />

      {/* HERO */}
      <section style={{ padding: '32px 24px' }}>
        <RuleLabel align="left" color={FNX.sage}>
          <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background: FNX.labRed, marginRight: 10, verticalAlign: 'middle' }}/>
          {t({ en:'About Finixlab', ko:'Finixlab 소개', ja:'Finixlabについて' })}
        </RuleLabel>
        <h1 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 44, lineHeight: 0.98 }}>{t({ en:'A quiet pharmacy of light.', ko:'빛의 조용한 약국.', ja:'光の、静かな薬局。' })}</h1>
        <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.85, color: FNX.pineInk }}>
          {t({ en:'Finixlab is a slow-aging brand that brings together clinical peptide concentrations and the poetic restraint of Korean indie beauty. A pharmacy-clean shelf of prescriptions, with a touch as quiet as midday light.', ko:'Finixlab은 임상 수준의 펩타이드 농도와 한국 인디 뷰티의 시적 절제를 함께 담은 슬로우 에이징 브랜드입니다. 약국처럼 정갈한 처방의 선반, 한낮의 빛처럼 조용한 손길로.', ja:'Finixlabは、臨床レベルのペプチド濃度と韓国インディビューティーの詩的な抑制をひとつにしたスローエイジングブランド。薬局のように清潔な処方の棚を、真昼の光のように静かな手触りで。' })}
        </p>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, paddingTop: 20, borderTop: `1px solid ${fnxRule(0.18)}` }}>
          {[
            { k:'2024', v:{ en:'Founded · Seoul', ko:'설립 · 서울', ja:'設立 · ソウル' } },
            { k:'04', v:{ en:'Cities · KR/CN/JP/VN', ko:'도시 · 한/중/일/베', ja:'都市 · 韓/中/日/越' } },
            { k:'31', v:{ en:'Clinic Partners', ko:'클리닉 파트너', ja:'クリニックパートナー' } },
          ].map(s => (
            <div key={s.k}>
              <div style={{ fontFamily: FNX.serif, fontSize: 24, lineHeight: 1 }}>{s.k}</div>
              <div style={{ marginTop: 6, fontSize: 10, color: FNX.sage, letterSpacing: '0.06em' }}>{t(s.v)}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24, aspectRatio: '4/5', overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
          <img src="assets/peptosome-pair.jpg" alt={t({ en:'Peptosome pair', ko:'펩토좀 페어', ja:'ペプトソーム ペア' })} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
        </div>
      </section>

      {/* FOUNDER'S LETTER — 01 */}
      <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.sage}>{t({ en:"Founder's Letter · 01", ko:'창립자의 편지 · 01', ja:'創業者の手紙 · 01' })}</RuleLabel>
        <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26, lineHeight: 1.2 }}>{t({ en:'The bottle, in lower case.', ko:'소문자로 쓴 병.', ja:'小文字で書いたボトル。' })}</h2>
        <div style={{ marginTop: 20, fontSize: 15, lineHeight: 1.95, color: FNX.pineInk }}>
          <p style={{ margin: 0 }}>
            <span style={{ float:'left', fontFamily: FNX.serif, fontSize: 64, lineHeight: 0.85, marginRight: 12, marginTop: 6, fontWeight: 300 }}>{t({ en:'O', ko:'시', ja:'施' })}</span>{t({ en:'nce I started watching patients sit in front of the mirror for days after a procedure, I knew. The brief stillness of softened expressions, slowly returning to everyday lines — and I wondered, what if we could prescribe something for those days.', ko:'술 후 며칠 동안 거울 앞에 앉아 있는 환자들을 지켜보기 시작하면서, 알게 되었습니다. 부드러워진 표정의 짧은 고요가 다시 일상의 주름으로 천천히 돌아가는 모습 — 그 날들을 위한 무언가를 처방할 수 있다면 어떨까, 하고 생각했습니다.', ja:'術後の数日間、鏡の前に座る患者を見つめるようになって、わかりました。やわらいだ表情の束の間の静けさが、ゆっくりと日常のシワへ戻っていく — その日々に何かを処方できたら、と思ったのです。' })}
          </p>
          <p style={{ margin: '16px 0 0' }}>
            {t({ en:'Finixlab is for those in-between days. Not an alternative to procedures, but a way to carry their essence into daily skin. While a single prescription stays with you each day, we prescribe the quietest possible ritual.', ko:'Finixlab은 그 사이의 날들을 위한 것입니다. 시술의 대안이 아니라, 그 본질을 매일의 피부로 옮기는 방법. 하나의 처방이 매일 곁에 머무는 동안, 우리는 가능한 한 가장 조용한 리추얼을 처방합니다.', ja:'Finixlabは、その合間の日々のためのもの。施術の代替ではなく、その本質を毎日の肌へ運ぶ方法です。一つの処方が日々そばにある間、私たちは可能なかぎり静かなリチュアルを処方します。' })}
          </p>
          <p style={{ margin: '16px 0 0' }}>
            {t({ en:'Concentrations are stated on the label. VAMTOXIN™ 2%, Niacinamide 4%, Spicule 0.5% — concentration before narrative. The nine-week study is the measure of that honesty, arranged like a single prescription.', ko:'농도는 라벨에 명시되어 있습니다. VAMTOXIN™ 2%, 나이아신아마이드 4%, 스피큘 0.5% — 서사보다 먼저 농도. 9주 연구는 그 정직함의 척도이며, 하나의 처방처럼 정돈되어 있습니다.', ja:'濃度はラベルに記載しています。VAMTOXIN™ 2%、ナイアシンアミド4%、スピキュール0.5% — 物語より先に濃度を。9週間の研究は、その正直さの尺度であり、一つの処方のように整えられています。' })}
          </p>
          <p style={{ margin: '16px 0 0', color: FNX.sage, fontSize: 14 }}>
            {t({ en:'What we prescribe is consistency, not efficacy. Eight minutes a day that keep the surface from dulling — that single thing, as quietly as possible.', ko:'우리가 처방하는 것은 효능이 아니라 꾸준함입니다. 표면을 흐려지지 않게 하는 하루 8분 — 그 한 가지를, 가능한 한 조용하게.', ja:'私たちが処方するのは効能ではなく、続けること。表面をくすませない1日8分 — その一つを、できるだけ静かに。' })}
          </p>
        </div>
        <div style={{ marginTop: 24, paddingTop: 16, borderTop: `1px solid ${fnxRule(0.18)}` }}>
          <div style={{ fontFamily: FNX.serif, fontSize: 16 }}>{t({ en:'Hyungju Park', ko:'박형주', ja:'パク・ヒョンジュ' })}</div>
          <div style={{ marginTop: 4, fontSize: 12, color: FNX.sage, letterSpacing: '0.06em' }}>{t({ en:'Founder', ko:'창립자', ja:'創業者' })}</div>
          <div style={{ marginTop: 12, fontFamily: FNX.mono, fontSize: 11, color: FNX.sage, letterSpacing: '0.14em' }}>{t({ en:'Seoul · April 2024', ko:'서울 · 2024년 4월', ja:'ソウル · 2024年4月' })}</div>
        </div>
      </section>

      {/* PRINCIPLES — 02 */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.tan}>{t({ en:'02 — Principles', ko:'02 — 원칙', ja:'02 — 原則' })}</RuleLabel>
        <h2 style={{ margin: '12px 0 24px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1 }}>{t({ en:'Four quiet principles.', ko:'네 가지 조용한 원칙.', ja:'四つの静かな原則。' })}</h2>
        {pillars.map(p => (
          <div key={p.n} style={{ padding: '20px 0', borderTop: `1px solid ${fnxRule(0.18)}` }}>
            <h3 style={{ margin: '0 0 10px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 24, lineHeight: 1.15 }}>{t(p.t)}</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.85, color: FNX.pineInk }}>{t(p.d)}</p>
          </div>
        ))}
      </section>

      {/* THE LAB — 03 */}
      <section style={{ background: FNX.parchment, padding: 0 }}>
        <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
          <img src="assets/serum-trio.png" alt={t({ en:'Lab collection', ko:'랩 컬렉션', ja:'ラボコレクション' })} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
        </div>
        <div style={{ padding: '40px 24px' }}>
          <RuleLabel align="left" color={FNX.tan}>{t({ en:'03 — The Lab', ko:'03 — 더 랩', ja:'03 — ザ・ラボ' })}</RuleLabel>
          <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1 }}>{t({ en:'Made in Seoul, by hand and instrument.', ko:'서울에서, 손과 기기로 만듭니다.', ja:'ソウルで、手と機器によって。' })}</h2>
          <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.85, color: FNX.pineInk }}>
            {t({ en:'All products are produced in small batches at our Seoul lab and GMP-certified partner facilities. A new batch every eight weeks, with batch numbers printed on every label.', ko:'모든 제품은 서울 랩과 GMP 인증 파트너 시설에서 소량 배치로 생산됩니다. 8주마다 새로운 배치, 모든 라벨에 배치 번호를 인쇄합니다.', ja:'すべての製品は、ソウルのラボとGMP認証パートナー施設で少量バッチ生産されます。8週間ごとに新しいバッチ、すべてのラベルにバッチ番号を印字。' })}
          </p>
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { k:'GMP', v:'CGMP · ISO 22716' },
              { k:'IRB', v:{ en:'Clinical · Seoul', ko:'임상 · 서울', ja:'臨床 · ソウル' } },
              { k:'PETA',v:{ en:'Cruelty-free · Vegan', ko:'동물실험 없음 · 비건', ja:'動物実験なし · ヴィーガン' } },
              { k:'EWG', v:{ en:'Green · skin-safe', ko:'그린 · 피부 안전', ja:'グリーン · 肌にやさしい' } },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 10, padding: '12px 0', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
                <span style={{ fontFamily: FNX.serif, fontSize: 16, letterSpacing: '0.04em' }}>{c.k}</span>
                <span style={{ fontSize: 11, color: FNX.sage }}>{typeof c.v === 'string' ? c.v : t(c.v)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY — 04 */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.tan}>{t({ en:'04 — Sustainability', ko:'04 — 지속가능성', ja:'04 — サステナビリティ' })}</RuleLabel>
        <h2 style={{ margin: '12px 0 24px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1 }}>{t({ en:'Quietly considered for the earth.', ko:'지구를 위한 조용한 고민.', ja:'地球のための、静かな配慮。' })}</h2>
        {[
          { t:{ en:'PCR Glass', ko:'PCR 글라스', ja:'PCRガラス' }, d:{ en:'Glass bottles use 60% recycled glass. Labels printed on FSC-certified paper.', ko:'유리병은 재활용 유리 60%를 사용합니다. 라벨은 FSC 인증 종이에 인쇄합니다.', ja:'ガラスボトルは再生ガラスを60%使用。ラベルはFSC認証紙に印刷。' } },
          { t:{ en:'Refill-Ready', ko:'리필 가능', ja:'リフィル対応' }, d:{ en:'From spring 2026, 50ml bottles run on a refill system. Bring back the bottle for −15% off.', ko:'2026년 봄부터 50ml 병은 리필 시스템으로 운영됩니다. 병을 가져오면 15% 할인.', ja:'2026年春から、50mlボトルはリフィルシステムに。ボトルを持ち込むと15%オフ。' } },
          { t:{ en:'Local Batch', ko:'로컬 배치', ja:'ローカルバッチ' }, d:{ en:'Small-batch production at GMP partner facilities to minimize shipping distance.', ko:'배송 거리를 최소화하기 위해 GMP 파트너 시설에서 소량 배치로 생산합니다.', ja:'輸送距離を最小化するため、GMPパートナー施設で少量バッチ生産。' } },
          { t:{ en:'1% for Skin', ko:'1% 포 스킨', ja:'1% フォー スキン' }, d:{ en:'1% of revenue is donated to a Korean dermatology research fellowship.', ko:'매출의 1%를 한국 피부과학 연구 펠로십에 기부합니다.', ja:'売上の1%を韓国の皮膚科学研究フェローシップに寄付します。' } },
        ].map(c => (
          <div key={c.t.en} style={{ padding: '18px 0', borderTop: `1px solid ${fnxRule(0.18)}` }}>
            <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 20 }}>{t(c.t)}</h3>
            <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.7, color: FNX.pineInk }}>{t(c.d)}</p>
          </div>
        ))}
      </section>

      {/* CLINIC PARTNERS — 05 */}
      <section style={{ background: FNX.olive, color: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color={fnxCream(0.55)}>{t({ en:'05 — Clinic Partners', ko:'05 — 클리닉 파트너', ja:'05 — クリニックパートナー' })}</RuleLabel>
        <h2 style={{ margin: '12px 0 24px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1 }}>{t({ en:'A network of slow-thinking clinics.', ko:'느리게 생각하는 클리닉들의 네트워크.', ja:'ゆっくり考えるクリニックのネットワーク。' })}</h2>
        {[
          { c:{ en:'Seoul · 14', ko:'서울 · 14', ja:'ソウル · 14' }, n:['Cheongdam Skin Lab', 'Hannam-dong Clinic', 'Yongsan Dermal', 'Yeoksam Aesthetics', { en:'+ 10 partners', ko:'+ 10개 파트너', ja:'+ 10パートナー' }] },
          { c:{ en:'Shanghai · 6', ko:'상하이 · 6', ja:'上海 · 6' }, n:['Xintiandi Dermatology', 'Jing\'an Skin Studio', 'Pudong Aesthetics', { en:'+ 3 partners', ko:'+ 3개 파트너', ja:'+ 3パートナー' }] },
          { c:{ en:'Tokyo · 5', ko:'도쿄 · 5', ja:'東京 · 5' }, n:['Aoyama Clinic', 'Daikanyama Skin', 'Ginza Dermal', { en:'+ 2 partners', ko:'+ 2개 파트너', ja:'+ 2パートナー' }] },
          { c:{ en:'HCMC · 3', ko:'호치민 · 3', ja:'ホーチミン · 3' }, n:['District 1 Skin Studio', 'Thao Dien Clinic', { en:'+ 1 partner', ko:'+ 1개 파트너', ja:'+ 1パートナー' }] },
        ].map(city => (
          <div key={city.c.en} style={{ padding: '20px 0', borderTop: `1px solid ${fnxCream(0.18)}` }}>
            <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 20, letterSpacing: '0.04em' }}>{t(city.c)}</h3>
            <ul style={{ listStyle: 'none', margin: '14px 0 0', padding: 0, display: 'grid', gap: 8, fontSize: 12, color: fnxCream(0.82) }}>
              {city.n.map((p, pi) => <li key={pi}>· {typeof p === 'string' ? p : t(p)}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <MFooter />
    </div>
  );
};

Object.assign(window, { ShopMobile, ProductMobile, ScienceMobile, JournalMobile, AboutMobile, MHeader, MFooter });
