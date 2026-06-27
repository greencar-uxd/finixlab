// Cart · Checkout · Account · 404 · Search — desktop + mobile
// Adds: CartPage, CheckoutPage, AccountPage, NotFoundPage, SearchPage
// Plus mobile variants. All keyed by hash routes.

// ============ CART (desktop) ============
const CartPage = () => {
  const { t } = useLocale();
  const items = [
    { n:'N°01', t:'Peptosome Skin Booster', s:{ en:'50ml · Standard', ko:'50ml · 스탠다드', ja:'50ml · スタンダード' }, p:96000, qty:1, img:'assets/booster-bottle-front.png' },
    { n:'N°02', t:'Spicule Wrinkle-Free Glow Serum', s:{ en:'20ml', ko:'20ml', ja:'20ml' }, p:58000, qty:1, img:'assets/serum-quartet.png' },
  ];
  const sub = items.reduce((a,i) => a + i.p * i.qty, 0);
  const ship = 0;
  const total = sub + ship;
  const krw = (n) => `₩${n.toLocaleString('ko-KR')}`;

  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, minHeight: '100vh' }}>
      <SiteHeader variant="cream" />
      <div style={{ padding: '20px 40px', borderBottom: `1px solid ${fnxRule(0.12)}`, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage, display: 'flex', gap: 12 }}>
        <a href="#/home" style={{ color: 'inherit', textDecoration: 'none' }}>{t({ en:'Home', ko:'홈', ja:'ホーム' })}</a><span>/</span><span style={{ color: FNX.pineInk }}>{t({ en:'Cart', ko:'장바구니', ja:'バッグ' })}</span>
      </div>

      <Section bg={FNX.cream} padding="56px 40px 96px">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32 }}>
          <h1 style={{ ...T.hero, margin: 0, color: FNX.pineInk, fontSize: 80 }}>{t({ en:'Your Bag.', ko:'장바구니.', ja:'バッグ。' })}</h1>
          <span style={{ ...T.eyebrow, color: FNX.sage }}>{items.length} {t({ en:'items', ko:'개 상품', ja:'点' })} · {krw(sub)}</span>
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
                  <div style={{ ...T.caption, color: FNX.sage }}>{t(it.s)}</div>
                  <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 18 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, border: `1px solid ${fnxRule(0.2)}`, padding: '4px 10px' }}>
                      <button style={{ background: 'none', border: 'none', fontSize: 16, padding: '4px 6px', cursor: 'pointer', color: FNX.pineInk }}>−</button>
                      <span style={{ fontFamily: FNX.serif, fontSize: 14, minWidth: 14, textAlign: 'center' }}>{it.qty}</span>
                      <button style={{ background: 'none', border: 'none', fontSize: 16, padding: '4px 6px', cursor: 'pointer', color: FNX.pineInk }}>+</button>
                    </div>
                    <button type="button" style={{ ...T.caption, color: FNX.sage, textDecoration: 'underline', background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit' }}>{t({ en:'Remove', ko:'삭제', ja:'削除' })}</button>
                  </div>
                </div>
                <div style={{ fontFamily: FNX.serif, fontSize: 20, letterSpacing: '0.02em' }}>{krw(it.p * it.qty)}</div>
              </div>
            ))}
            <div style={{ marginTop: 28, paddingTop: 20, borderTop: `1px solid ${fnxRule(0.18)}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Btn kind="ghost" data-go="shop" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} size="sm">{t({ en:'← Continue Shopping', ko:'← 쇼핑 계속하기', ja:'← 買い物を続ける' })}</Btn>
              <span style={{ ...T.caption, color: FNX.sage }}>{t({ en:'Free samples included.', ko:'무료 샘플이 포함됩니다.', ja:'無料サンプル付き。' })}</span>
            </div>
          </div>

          {/* Summary */}
          <aside style={{ background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`, padding: 32 }}>
            <h3 style={{ ...T.h4, margin: 0 }}>{t({ en:'Order Summary', ko:'주문 요약', ja:'ご注文内容' })}</h3>
            <div style={{ marginTop: 22, display: 'grid', gap: 14 }}>
              {[
                [{ en:'Subtotal', ko:'소계', ja:'小計' }, krw(sub)],
                [{ en:'Shipping', ko:'배송', ja:'配送' }, { en:'Free', ko:'무료', ja:'無料' }],
                [{ en:'Estimated tax', ko:'예상 세금', ja:'消費税（概算）' }, { en:'Calculated at checkout', ko:'결제 시 계산', ja:'お支払い時に計算' }],
              ].map(r => (
                <div key={r[0].en} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: FNX.pineInk }}>
                  <span style={{ color: FNX.sage }}>{t(r[0])}</span><span>{t(r[1])}</span>
                </div>
              ))}
              <div style={{ paddingTop: 16, borderTop: `1px solid ${fnxRule(0.2)}`, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ ...T.h4 }}>{t({ en:'Total', ko:'합계', ja:'合計' })}</span>
                <span style={{ ...T.h2, fontSize: 30 }}>{krw(total)}</span>
              </div>
            </div>
            <div style={{ marginTop: 24 }}>
              <Btn kind="primary" full size="lg">{t({ en:'Checkout →', ko:'결제하기 →', ja:'ご購入手続き →' })}</Btn>
            </div>
            <p style={{ marginTop: 14, ...T.caption, color: FNX.sage, textAlign: 'center' }}>
              {t({ en:'Free shipping over ₩60,000 · KR · JP · CN · VN', ko:'₩60,000 이상 무료 배송 · KR · JP · CN · VN', ja:'₩60,000以上で送料無料 · KR · JP · CN · VN' })}
            </p>
            <div style={{ marginTop: 22, paddingTop: 18, borderTop: `1px solid ${fnxRule(0.14)}`, display: 'grid', gap: 8, fontSize: 12, color: FNX.sage }}>
              <div>{t({ en:'↳ 30-day return on unopened', ko:'↳ 미개봉 30일 반품 가능', ja:'↳ 未開封なら30日間返品可能' })}</div>
              <div>{t({ en:'↳ Discreet packaging', ko:'↳ 정보 노출 없는 포장', ja:'↳ プライバシーに配慮した梱包' })}</div>
              <div>{t({ en:'↳ Carbon-offset shipping', ko:'↳ 탄소 상쇄 배송', ja:'↳ カーボンオフセット配送' })}</div>
            </div>
          </aside>
        </div>
      </Section>

      <SiteFooter variant="pine" />
    </div>
  );
};

// ============ EMPTY CART (variant via ?empty hash) ============
const EmptyCartPage = () => {
  const { t } = useLocale();
  return (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
    <SiteHeader variant="cream" />
    <Section bg={FNX.cream} padding="120px 40px">
      <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto' }}>
        <RuleLabel align="center" color={FNX.tan}>{t({ en:'Your Bag', ko:'장바구니', ja:'バッグ' })}</RuleLabel>
        <h1 style={{ ...T.hero, margin: '24px 0 0', fontSize: 80 }}>{t({ en:'An empty bag.', ko:'빈 장바구니.', ja:'空のバッグ。' })}</h1>
        <p style={{ ...T.bodyLg, marginTop: 18, color: FNX.sage }}>
          {t({ en:'Browse the collection to start your prescription.', ko:'컬렉션을 둘러보고 나만의 처방을 시작하세요.', ja:'コレクションを見て、あなたの処方を始めましょう。' })}
        </p>
        <div style={{ marginTop: 32, display: 'flex', gap: 14, justifyContent: 'center' }}>
          <Btn kind="primary" data-go="shop" size="lg">{t({ en:'Shop the Collection →', ko:'컬렉션 보기 →', ja:'コレクションを見る →' })}</Btn>
          <Btn kind="ghost" size="lg" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Order Sample', ko:'샘플 주문', ja:'サンプルを注文' })}</Btn>
        </div>
      </div>
    </Section>
    <SiteFooter variant="pine" />
  </div>
  );
};

// ============ ACCOUNT — login + sign up combined ============
const AccountPage = () => {
  const { t } = useLocale();
  const benefits = [
    { en:'Order tracking · quick reorder', ko:'주문 조회 · 간편 재주문', ja:'注文追跡 · 簡単リオーダー' },
    { en:'Monthly subscription · save 15%', ko:'월 정기구독 · 15% 할인', ja:'月額サブスク · 15%オフ' },
    { en:'Priority clinic partner access', ko:'제휴 클리닉 우선 이용', ja:'提携クリニックへの優先アクセス' },
    { en:'Member-only sample trials', ko:'회원 전용 샘플 체험', ja:'会員限定サンプルトライアル' },
  ];
  return (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
    <SiteHeader variant="cream" />
    <Section bg={FNX.cream} padding="80px 40px 120px">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, maxWidth: 980, margin: '0 auto', alignItems: 'start' }}>
        <div>
          <RuleLabel align="left" color={FNX.tan}>{t({ en:'Returning', ko:'기존 회원', ja:'登録済みの方' })}</RuleLabel>
          <h1 style={{ ...T.h1, margin: '14px 0 0', fontSize: 48 }}>{t({ en:'Sign in.', ko:'로그인.', ja:'ログイン。' })}</h1>
          <form style={{ marginTop: 28, display: 'grid', gap: 18 }}>
            <label style={{ display: 'grid', gap: 6 }}>
              <span style={{ ...T.eyebrow, color: FNX.sage }}>{t({ en:'Email', ko:'이메일', ja:'メール' })}</span>
              <input type="email" translate="no" placeholder="your@email.com" style={inputStyle} />
            </label>
            <label style={{ display: 'grid', gap: 6 }}>
              <span style={{ ...T.eyebrow, color: FNX.sage }}>{t({ en:'Password', ko:'비밀번호', ja:'パスワード' })}</span>
              <input aria-label={t({ en:'Password', ko:'비밀번호', ja:'パスワード' })} type="password" translate="no" placeholder={t({ en:'Enter your password', ko:'비밀번호를 입력하세요', ja:'パスワードを入力してください' })} style={inputStyle} />
            </label>
            <Btn kind="primary" full size="lg">{t({ en:'Sign In →', ko:'로그인 →', ja:'ログイン →' })}</Btn>
            <div style={{ display: 'flex', justifyContent: 'space-between', ...T.caption, color: FNX.sage }}>
              <a href="#" style={{ color: 'inherit' }}>{t({ en:'Forgot password?', ko:'비밀번호를 잊으셨나요?', ja:'パスワードをお忘れですか？' })}</a>
              <a href="#" style={{ color: 'inherit' }}>{t({ en:'Magic link login', ko:'매직 링크 로그인', ja:'マジックリンクでログイン' })}</a>
            </div>
          </form>
        </div>
        <div style={{ background: FNX.bone, padding: 32, border: `1px solid ${fnxRule(0.12)}` }}>
          <RuleLabel align="left" color={FNX.tan}>{t({ en:'New here', ko:'처음이신가요', ja:'はじめての方' })}</RuleLabel>
          <h2 style={{ ...T.h2, margin: '14px 0 0', fontSize: 32 }}>{t({ en:'Create an account.', ko:'회원가입.', ja:'アカウント作成。' })}</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 28px', display: 'grid', gap: 10 }}>
            {benefits.map(b => (
              <li key={b.en} style={{ ...T.body, color: FNX.pineInk, paddingLeft: 14, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, top: 11, width: 6, height: 1, background: FNX.labRed }}/>
                {t(b)}
              </li>
            ))}
          </ul>
          <Btn kind="primary" full size="lg">{t({ en:'Create Account →', ko:'회원가입 →', ja:'アカウント作成 →' })}</Btn>
          <p style={{ marginTop: 14, ...T.caption, color: FNX.sage, textAlign: 'center' }}>{t({ en:'Sign up with Email · Kakao · Apple', ko:'이메일 · 카카오 · Apple로 가입', ja:'メール · Kakao · Appleで登録' })}</p>
        </div>
      </div>
    </Section>
    <SiteFooter variant="pine" />
  </div>
  );
};

const inputStyle = {
  width: '100%', padding: '14px 16px',
  background: FNX.bone, border: `1px solid ${fnxRule(0.18)}`,
  fontFamily: FNX.sans,
  fontSize: 14, color: FNX.pineInk,
};

// ============ SEARCH RESULTS ============
const SearchPage = () => {
  const { t } = useLocale();
  const results = [
    { t:'Peptosome Skin Booster', cat:{ en:'Product · Booster', ko:'제품 · 부스터', ja:'製品 · ブースター' }, img:'assets/booster-bottle-front.png', href:'#/shop/peptosome' },
    { t:'Spicule Wrinkle-Free Glow Serum', cat:{ en:'Product · Serum', ko:'제품 · 세럼', ja:'製品 · セラム' }, img:'assets/serum-quartet.png', href:'#/shop' },
    { t:'On the Quiet Discipline of Peptides', cat:{ en:'Journal · Slow Aging', ko:'저널 · 슬로우 에이징', ja:'ジャーナル · スローエイジング' }, img:'assets/serum-pump.png', href:'#/journal' },
    { t:'VAMTOXIN™ Patent Story', cat:{ en:'Science', ko:'사이언스', ja:'サイエンス' }, img:'assets/booster-box-front.png', href:'#/science' },
  ];
  const [q, setQ] = React.useState('peptide');
  const ql = q.trim().toLowerCase();
  const shown = results.filter(r => (t(r.t) + ' ' + t(r.cat)).toLowerCase().includes(ql));
  const popular = ['peptide', 'vamtoxin', 'serum', 'ritual'];
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />
      <Section bg={FNX.cream} padding="56px 40px 96px">
        <RuleLabel align="left" color={FNX.tan}>{t({ en:'Search', ko:'검색', ja:'検索' })}</RuleLabel>
        <div style={{ marginTop: 18, position: 'relative' }}>
          <input type="search" aria-label={t({ en:'Search', ko:'검색', ja:'検索' })} value={q} onChange={(e) => setQ(e.target.value)} placeholder={t({ en:'Search for prescriptions, journal entries…', ko:'처방, 저널 글을 검색하세요…', ja:'処方やジャーナル記事を検索…' })} style={{
            ...inputStyle, fontSize: 28, padding: '18px 56px 18px 56px',
            border: `1px solid ${fnxRule(0.3)}`,
            fontFamily: '"Pretendard Variable", system-ui, sans-serif', fontWeight: 300,
          }} />
          <span aria-hidden="true" style={{ position: 'absolute', left: 22, top: '50%', transform: 'translateY(-50%)', color: FNX.pineInk, display: 'inline-flex' }}>
            <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5"/><path d="M11 11l3.5 3.5"/></svg>
          </span>
          <button type="button" aria-label={t({ en:'Clear search', ko:'검색어 지우기', ja:'検索をクリア' })} onClick={() => setQ('')} style={{ position: 'absolute', right: 22, top: '50%', transform: 'translateY(-50%)', color: FNX.pineInk, cursor: 'pointer', display: 'inline-flex', border: 'none', background: 'none', padding: 0 }}>
            <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4l8 8M12 4l-8 8"/></svg>
          </button>
        </div>
        <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
          {[
            { en:'All', ko:'전체', ja:'すべて' },
            { en:'Products', ko:'제품', ja:'製品' },
            { en:'Journal', ko:'저널', ja:'ジャーナル' },
            { en:'Science', ko:'사이언스', ja:'サイエンス' },
            { en:'Ingredients', ko:'성분', ja:'成分' },
          ].map((f, i) => (
            <span key={f.en} style={{ padding: '7px 14px', borderRadius: 999, border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.18)}`, color: i === 0 ? FNX.pineInk : FNX.sage, background: i === 0 ? FNX.bone : 'transparent', fontSize: 12 }}>{t(f)}</span>
          ))}
        </div>

        <h2 style={{ ...T.h3, margin: '36px 0 18px', color: FNX.sage, fontSize: 16 }}>
          {ql ? `"${q}" — ${shown.length} ${t({ en:shown.length === 1 ? 'result' : 'results', ko:'건', ja:'件' })}` : t({ en:'Start typing to search', ko:'검색어를 입력하세요', ja:'検索キーワードを入力してください' })}
        </h2>
        {ql && shown.length === 0 ? (
          <div style={{ padding: '40px 0 8px', borderTop: `1px solid ${fnxRule(0.18)}` }}>
            <h3 style={{ ...T.h4, margin: 0, color: FNX.pineInk }}>{t({ en:'No results for', ko:'검색 결과 없음:', ja:'検索結果がありません:' })} “{q}”.</h3>
            <p style={{ ...T.body, color: FNX.sage, marginTop: 10 }}>{t({ en:'Try a shorter term, or one of these:', ko:'더 짧은 검색어를 입력하거나 아래에서 선택해 보세요:', ja:'短いキーワード、または以下からお試しください:' })}</p>
            <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {popular.map(t => (
                <button type="button" key={t} onClick={() => setQ(t)} style={{ font: 'inherit', padding: '7px 14px', borderRadius: 999, border: `1px solid ${fnxRule(0.18)}`, color: FNX.pineInk, background: FNX.bone, fontSize: 12, cursor: 'pointer' }}>{t}</button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 0 }}>
            {shown.map((r, i) => (
              <a key={i} href={r.href} style={{ display: 'grid', gridTemplateColumns: '88px 1fr auto', gap: 24, padding: '20px 0', borderTop: `1px solid ${fnxRule(0.18)}`, color: 'inherit', textDecoration: 'none' }}>
                <div style={{ aspectRatio: '1/1', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
                  <img src={r.img} alt={r.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ ...T.eyebrow, color: FNX.sage }}>{t(r.cat)}</div>
                  <h3 style={{ ...T.h4, margin: '8px 0 0' }}>{r.t}</h3>
                </div>
                <span style={{ alignSelf: 'center', ...T.caption, color: FNX.sage }}>→</span>
              </a>
            ))}
          </div>
        )}
      </Section>
      <SiteFooter variant="pine" />
    </div>
  );
};

// ============ 404 ============
const NotFoundPage = () => {
  const { t } = useLocale();
  return (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, minHeight: '100vh' }}>
    <SiteHeader variant="cream" />
    <Section bg={FNX.cream} padding="160px 40px" style={{ textAlign: 'center' }}>
      <div style={{ maxWidth: 540, margin: '0 auto' }}>
        <div style={{ ...T.eyebrow, color: FNX.labRed }}>{t({ en:'Error · 404', ko:'오류 · 404', ja:'エラー · 404' })}</div>
        <h1 style={{ ...T.hero, margin: '20px 0 0', fontSize: 120 }}>{t({ en:'Quietly, not here.', ko:'조용히, 여기엔 없습니다.', ja:'静かに、ここにはありません。' })}</h1>
        <p style={{ ...T.bodyLg, marginTop: 22, color: FNX.sage }}>
          {t({ en:"The page you're looking for isn't on this shelf.", ko:'찾으시는 페이지가 이 선반에 없습니다.', ja:'お探しのページはこの棚にありません。' })}<br/>
          {t({ en:'Return home, or browse the collection.', ko:'홈으로 돌아가거나 컬렉션을 둘러보세요.', ja:'ホームに戻るか、コレクションをご覧ください。' })}
        </p>
        <div style={{ marginTop: 36, display: 'flex', gap: 14, justifyContent: 'center' }}>
          <Btn kind="primary" data-go="home" size="lg">{t({ en:'← Back to Home', ko:'← 홈으로', ja:'← ホームへ' })}</Btn>
          <Btn kind="ghost" data-go="shop" size="lg" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Shop', ko:'쇼핑', ja:'ショップ' })}</Btn>
        </div>
      </div>
    </Section>
    <SiteFooter variant="pine" />
  </div>
  );
};

// ============ MOBILE CART — aligned to CartPage ============
const CartMobile = () => {
  const { t } = useLocale();
  const items = [
    { n:'N°01', t:'Peptosome Skin Booster', s:{ en:'50ml · Standard', ko:'50ml · 스탠다드', ja:'50ml · スタンダード' }, p:96000, qty:1, img:'assets/booster-bottle-front.png' },
    { n:'N°02', t:'Spicule Wrinkle-Free Glow Serum', s:{ en:'20ml', ko:'20ml', ja:'20ml' }, p:58000, qty:1, img:'assets/serum-quartet.png' },
  ];
  const sub = items.reduce((a,i) => a + i.p * i.qty, 0);
  const ship = 0;
  const total = sub + ship;
  const krw = (n) => `₩${n.toLocaleString('ko-KR')}`;
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <MHeader title={{ en:'Your Bag', ko:'장바구니', ja:'バッグ' }} />

      {/* sticky checkout */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90,
        background: fnxCream(0.96), borderTop: `1px solid ${fnxRule(0.2)}`,
        padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 12,
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ ...T.eyebrow, color: FNX.sage }}>{t({ en:'Total', ko:'합계', ja:'合計' })} · {items.length} {t({ en:'items', ko:'개 상품', ja:'点' })}</div>
          <div style={{ ...T.h4, marginTop: 2 }}>{krw(total)}</div>
        </div>
        <Btn kind="primary">{t({ en:'Checkout →', ko:'결제하기 →', ja:'ご購入手続き →' })}</Btn>
      </div>

      <section style={{ padding: '24px', flex: 1 }}>
        {/* heading + count · subtotal */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
          <h1 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 200, fontSize: 40, lineHeight: 1, letterSpacing: '-0.02em' }}>{t({ en:'Your Bag.', ko:'장바구니.', ja:'バッグ。' })}</h1>
          <span style={{ ...T.eyebrow, color: FNX.sage, fontSize: 11 }}>{items.length} {t({ en:'items', ko:'개 상품', ja:'点' })} · {krw(sub)}</span>
        </div>

        {/* line items */}
        {items.map((it, i) => (
          <div key={it.n} style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 16, padding: '16px 0', borderTop: i === 0 ? `1px solid ${fnxRule(0.18)}` : `1px dashed ${fnxRule(0.14)}` }}>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <img src={it.img} alt={it.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <h3 style={{ margin: '0 0 4px', fontFamily: FNX.serif, fontSize: 16, fontWeight: 400 }}>{it.t}</h3>
              <div style={{ ...T.caption, color: FNX.sage }}>{t(it.s)}</div>
              <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, border: `1px solid ${fnxRule(0.2)}`, padding: '2px 8px' }}>
                  <button style={{ background: 'none', border: 'none', fontSize: 14, padding: '4px 6px', color: FNX.pineInk }}>−</button>
                  <span style={{ fontSize: 13 }}>{it.qty}</span>
                  <button style={{ background: 'none', border: 'none', fontSize: 14, padding: '4px 6px', color: FNX.pineInk }}>+</button>
                </div>
                <span style={{ fontFamily: FNX.serif, fontSize: 16 }}>{krw(it.p * it.qty)}</span>
              </div>
              <a href="#" style={{ display: 'inline-block', marginTop: 8, ...T.caption, color: FNX.sage, textDecoration: 'underline' }}>{t({ en:'Remove', ko:'삭제', ja:'削除' })}</a>
            </div>
          </div>
        ))}

        {/* continue shopping + samples note */}
        <div style={{ marginTop: 18, paddingTop: 16, borderTop: `1px solid ${fnxRule(0.18)}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <Btn kind="ghost" data-go="shop" size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'← Continue', ko:'← 계속하기', ja:'← 続ける' })}</Btn>
          <span style={{ ...T.caption, color: FNX.sage }}>{t({ en:'Free samples included.', ko:'무료 샘플이 포함됩니다.', ja:'無料サンプル付き。' })}</span>
        </div>

        {/* order summary */}
        <div style={{ marginTop: 24, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`, padding: 20 }}>
          <h3 style={{ margin: 0, fontFamily: FNX.serif, fontSize: 16, fontWeight: 400 }}>{t({ en:'Order Summary', ko:'주문 요약', ja:'ご注文内容' })}</h3>
          <div style={{ marginTop: 16, display: 'grid', gap: 12 }}>
            {[
              [{ en:'Subtotal', ko:'소계', ja:'小計' }, krw(sub)],
              [{ en:'Shipping', ko:'배송', ja:'配送' }, { en:'Free', ko:'무료', ja:'無料' }],
              [{ en:'Estimated tax', ko:'예상 세금', ja:'消費税（概算）' }, { en:'Calculated at checkout', ko:'결제 시 계산', ja:'お支払い時に計算' }],
            ].map(r => (
              <div key={r[0].en} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: FNX.pineInk }}>
                <span style={{ color: FNX.sage }}>{t(r[0])}</span><span>{t(r[1])}</span>
              </div>
            ))}
            <div style={{ paddingTop: 14, borderTop: `1px solid ${fnxRule(0.2)}`, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: FNX.serif, fontSize: 16, fontWeight: 400 }}>{t({ en:'Total', ko:'합계', ja:'合計' })}</span>
              <span style={{ fontFamily: FNX.serif, fontSize: 24, letterSpacing: '0.01em' }}>{krw(total)}</span>
            </div>
          </div>
          <p style={{ margin: '14px 0 0', ...T.caption, color: FNX.sage, textAlign: 'center' }}>
            {t({ en:'Free shipping over ₩60,000 · KR · JP · CN · VN', ko:'₩60,000 이상 무료 배송 · KR · JP · CN · VN', ja:'₩60,000以上で送料無料 · KR · JP · CN · VN' })}
          </p>
          <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px solid ${fnxRule(0.14)}`, display: 'grid', gap: 8, fontSize: 12, color: FNX.sage }}>
            <div>{t({ en:'↳ 30-day return on unopened', ko:'↳ 미개봉 30일 반품 가능', ja:'↳ 未開封なら30日間返品可能' })}</div>
            <div>{t({ en:'↳ Discreet packaging', ko:'↳ 정보 노출 없는 포장', ja:'↳ プライバシーに配慮した梱包' })}</div>
            <div>{t({ en:'↳ Carbon-offset shipping', ko:'↳ 탄소 상쇄 배송', ja:'↳ カーボンオフセット配送' })}</div>
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
const AccountMobile = () => {
  const { t } = useLocale();
  const benefits = [
    { en:'Order tracking · quick reorder', ko:'주문 조회 · 간편 재주문', ja:'注文追跡 · 簡単リオーダー' },
    { en:'Monthly subscription · save 15%', ko:'월 정기구독 · 15% 할인', ja:'月額サブスク · 15%オフ' },
    { en:'Priority clinic partner access', ko:'제휴 클리닉 우선 이용', ja:'提携クリニックへの優先アクセス' },
    { en:'Member-only sample trials', ko:'회원 전용 샘플 체험', ja:'会員限定サンプルトライアル' },
  ];
  return (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
    <MHeader title={{ en:'Account', ko:'계정', ja:'アカウント' }} />
    {/* Returning — Sign in */}
    <section style={{ padding: '32px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>{t({ en:'Returning', ko:'기존 회원', ja:'登録済みの方' })}</RuleLabel>
      <h1 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontSize: 36, fontWeight: 300 }}>{t({ en:'Sign in.', ko:'로그인.', ja:'ログイン。' })}</h1>
      <form style={{ marginTop: 24, display: 'grid', gap: 14 }}>
        <label style={{ display: 'grid', gap: 6 }}>
          <span style={{ ...T.eyebrow, color: FNX.sage, fontSize: 11 }}>{t({ en:'Email', ko:'이메일', ja:'メール' })}</span>
          <input type="email" translate="no" placeholder="your@email.com" style={inputStyle} />
        </label>
        <label style={{ display: 'grid', gap: 6 }}>
          <span style={{ ...T.eyebrow, color: FNX.sage, fontSize: 11 }}>{t({ en:'Password', ko:'비밀번호', ja:'パスワード' })}</span>
          <input aria-label={t({ en:'Password', ko:'비밀번호', ja:'パスワード' })} type="password" translate="no" placeholder={t({ en:'Enter your password', ko:'비밀번호를 입력하세요', ja:'パスワードを入力してください' })} style={inputStyle} />
        </label>
        <Btn kind="primary" full size="lg">{t({ en:'Sign In →', ko:'로그인 →', ja:'ログイン →' })}</Btn>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: FNX.sage }}>
          <a href="#" style={{ color: 'inherit' }}>{t({ en:'Forgot password?', ko:'비밀번호를 잊으셨나요?', ja:'パスワードをお忘れですか？' })}</a>
          <a href="#" style={{ color: 'inherit' }}>{t({ en:'Magic link login', ko:'매직 링크 로그인', ja:'マジックリンクでログイン' })}</a>
        </div>
      </form>
    </section>
    {/* New here — Create an account */}
    <section style={{ background: FNX.parchment, padding: '32px 24px' }}>
      <RuleLabel align="left" color={FNX.tan}>{t({ en:'New here', ko:'처음이신가요', ja:'はじめての方' })}</RuleLabel>
      <h2 style={{ margin: '12px 0 14px', fontFamily: FNX.serif, fontSize: 26, fontWeight: 300 }}>{t({ en:'Create an account.', ko:'회원가입.', ja:'アカウント作成。' })}</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'grid', gap: 8 }}>
        {benefits.map(b => (
          <li key={b.en} style={{ fontSize: 13, color: FNX.pineInk, paddingLeft: 14, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, top: 9, width: 6, height: 1, background: FNX.labRed }}/>
            {t(b)}
          </li>
        ))}
      </ul>
      <Btn kind="primary" full size="lg">{t({ en:'Create Account →', ko:'회원가입 →', ja:'アカウント作成 →' })}</Btn>
      <p style={{ margin: '14px 0 0', ...T.caption, color: FNX.sage, textAlign: 'center' }}>{t({ en:'Sign up with Email · Kakao · Apple', ko:'이메일 · 카카오 · Apple로 가입', ja:'メール · Kakao · Appleで登録' })}</p>
    </section>
    <MFooter />
  </div>
  );
};

// ============ MOBILE SEARCH — aligned to SearchPage ============
const SearchMobile = () => {
  const { t } = useLocale();
  const results = [
    { t:'Peptosome Skin Booster', cat:{ en:'Product · Booster', ko:'제품 · 부스터', ja:'製品 · ブースター' }, img:'assets/booster-bottle-front.png', href:'#/shop/peptosome' },
    { t:'Spicule Wrinkle-Free Glow Serum', cat:{ en:'Product · Serum', ko:'제품 · 세럼', ja:'製品 · セラム' }, img:'assets/serum-quartet.png', href:'#/shop' },
    { t:'On the Quiet Discipline of Peptides', cat:{ en:'Journal · Slow Aging', ko:'저널 · 슬로우 에이징', ja:'ジャーナル · スローエイジング' }, img:'assets/serum-pump.png', href:'#/journal' },
    { t:'VAMTOXIN™ Patent Story', cat:{ en:'Science', ko:'사이언스', ja:'サイエンス' }, img:'assets/booster-box-front.png', href:'#/science' },
  ];
  const [q, setQ] = React.useState('peptide');
  const ql = q.trim().toLowerCase();
  const shown = results.filter(r => (t(r.t) + ' ' + t(r.cat)).toLowerCase().includes(ql));
  const popular = ['peptide', 'vamtoxin', 'serum', 'ritual'];
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
      <MHeader title={{ en:'Search', ko:'검색', ja:'検索' }} />
      <section style={{ padding: '24px' }}>
        <RuleLabel align="left" color={FNX.tan}>{t({ en:'Search', ko:'검색', ja:'検索' })}</RuleLabel>
        <div style={{ marginTop: 12, position: 'relative' }}>
          <input type="search" aria-label={t({ en:'Search', ko:'검색', ja:'検索' })} value={q} onChange={(e) => setQ(e.target.value)} placeholder={t({ en:'Search for prescriptions, journal entries…', ko:'처방, 저널 글을 검색하세요…', ja:'処方やジャーナル記事を検索…' })} style={{
            ...inputStyle, fontSize: 20, padding: '14px 44px 14px 44px', fontWeight: 300,
            border: `1px solid ${fnxRule(0.3)}`,
          }} />
          <span aria-hidden="true" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: FNX.pineInk, display: 'inline-flex' }}>
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5"/><path d="M11 11l3.5 3.5"/></svg>
          </span>
          <button type="button" aria-label={t({ en:'Clear search', ko:'검색어 지우기', ja:'検索をクリア' })} onClick={() => setQ('')} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: FNX.pineInk, cursor: 'pointer', display: 'inline-flex', border: 'none', background: 'none', padding: 0 }}>
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4l8 8M12 4l-8 8"/></svg>
          </button>
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 6, overflowX: 'auto' }}>
          {[
            { en:'All', ko:'전체', ja:'すべて' },
            { en:'Products', ko:'제품', ja:'製品' },
            { en:'Journal', ko:'저널', ja:'ジャーナル' },
            { en:'Science', ko:'사이언스', ja:'サイエンス' },
            { en:'Ingredients', ko:'성분', ja:'成分' },
          ].map((f, i) => (
            <span key={f.en} style={{ padding: '6px 12px', borderRadius: 999, border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.18)}`, color: i === 0 ? FNX.pineInk : FNX.sage, background: i === 0 ? FNX.bone : 'transparent', fontSize: 11, whiteSpace: 'nowrap' }}>{t(f)}</span>
          ))}
        </div>
        <h2 style={{ margin: '24px 0 12px', fontSize: 13, color: FNX.sage }}>{ql ? `"${q}" — ${shown.length} ${t({ en:shown.length === 1 ? 'result' : 'results', ko:'건', ja:'件' })}` : t({ en:'Start typing to search', ko:'검색어를 입력하세요', ja:'検索キーワードを入力してください' })}</h2>
        {ql && shown.length === 0 ? (
          <div style={{ padding: '28px 0 8px', borderTop: `1px solid ${fnxRule(0.18)}` }}>
            <h3 style={{ margin: 0, fontFamily: FNX.serif, fontSize: 17, fontWeight: 400, color: FNX.pineInk }}>{t({ en:'No results for', ko:'검색 결과 없음:', ja:'検索結果がありません:' })} “{q}”.</h3>
            <p style={{ margin: '8px 0 0', fontSize: 13, color: FNX.sage }}>{t({ en:'Try a shorter term, or one of these:', ko:'더 짧은 검색어를 입력하거나 아래에서 선택해 보세요:', ja:'短いキーワード、または以下からお試しください:' })}</p>
            <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {popular.map(t => (
                <button type="button" key={t} onClick={() => setQ(t)} style={{ font: 'inherit', padding: '6px 12px', borderRadius: 999, border: `1px solid ${fnxRule(0.18)}`, color: FNX.pineInk, background: FNX.bone, fontSize: 11, cursor: 'pointer' }}>{t}</button>
              ))}
            </div>
          </div>
        ) : shown.map((r, i) => (
          <a key={i} href={r.href} style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: 14, padding: '14px 0', borderTop: `1px solid ${fnxRule(0.18)}`, color: 'inherit', textDecoration: 'none' }}>
            <div style={{ aspectRatio: '1/1', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <img src={r.img} alt={r.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontFamily: FNX.serif, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{t(r.cat)}</div>
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
const NotFoundMobile = () => {
  const { t } = useLocale();
  return (
  <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14, minHeight: '100vh' }}>
    <MHeader />
    <section style={{ padding: '80px 24px', textAlign: 'center' }}>
      <div style={{ ...T.eyebrow, color: FNX.labRed, fontSize: 11 }}>{t({ en:'Error · 404', ko:'오류 · 404', ja:'エラー · 404' })}</div>
      <h1 style={{ margin: '18px 0 0', fontFamily: FNX.serif, fontSize: 56, fontWeight: 200, lineHeight: 1 }}>{t({ en:'Quietly, not here.', ko:'조용히, 여기엔 없습니다.', ja:'静かに、ここにはありません。' })}</h1>
      <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.7, color: FNX.sage }}>
        {t({ en:"The page you're looking for isn't on this shelf.", ko:'찾으시는 페이지가 이 선반에 없습니다.', ja:'お探しのページはこの棚にありません。' })}<br/>
        {t({ en:'Return home, or browse the collection.', ko:'홈으로 돌아가거나 컬렉션을 둘러보세요.', ja:'ホームに戻るか、コレクションをご覧ください。' })}
      </p>
      <div style={{ marginTop: 28, display: 'grid', gap: 10 }}>
        <Btn kind="primary" data-go="home" full>{t({ en:'← Back to Home', ko:'← 홈으로', ja:'← ホームへ' })}</Btn>
        <Btn kind="ghost" data-go="shop" full style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Shop', ko:'쇼핑', ja:'ショップ' })}</Btn>
      </div>
    </section>
    <MFooter />
  </div>
  );
};

Object.assign(window, {
  CartPage, EmptyCartPage, AccountPage, SearchPage, NotFoundPage,
  CartMobile, AccountMobile, SearchMobile, NotFoundMobile,
});
