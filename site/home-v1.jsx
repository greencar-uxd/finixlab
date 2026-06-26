// Home V1 — Editorial Hero (Cream-heavy, Aesop-influenced)
// Now actively uses product imagery throughout

const HomeV1 = () => {
  const { t } = useLocale();
  const ingredients = [
    { i:'01', n:'VAMTOXIN™ Peptide', r:{ en:'SNARE-inhibiting peptide · softens expression lines', ko:'SNARE 억제 펩타이드 · 표정 주름을 부드럽게', ja:'SNARE阻害ペプチド · 表情ジワをやわらげる' }, p:'2.0%' },
    { i:'02', n:'Spicule Complex',   r:{ en:'Marine micro-needle · active delivery', ko:'해양 마이크로 니들 · 유효성분 전달', ja:'マリン マイクロニードル · 有効成分デリバリー' },    p:'0.5%' },
    { i:'03', n:'Centella Asiatica', r:{ en:'Centella · soothing · barrier support', ko:'센텔라 · 진정 · 장벽 케어', ja:'ツボクサ · 鎮静 · バリアケア' },     p:'0.5%' },
    { i:'04', n:'Niacinamide',       r:{ en:'Niacinamide · tone clarity', ko:'나이아신아마이드 · 맑은 톤', ja:'ナイアシンアミド · 澄んだトーン' },   p:'4.0%' },
  ];
  const ritual = [
    { n:'01', t:{ en:'Cleanse', ko:'클렌즈', ja:'クレンズ' },   k:{ en:'Cleanse', ko:'클렌즈', ja:'クレンズ' },   d:{ en:'Morning and evening, a gentle cleanser.', ko:'아침과 저녁, 부드러운 클렌저로.', ja:'朝と夜、やさしいクレンザーで。' } },
    { n:'02', t:{ en:'Prep', ko:'프렙', ja:'プレップ' },      k:{ en:'Prep', ko:'프렙', ja:'プレップ' },   d:{ en:'A pH-balanced toner to settle the surface.', ko:'pH 밸런스 토너로 피부 결을 정돈.', ja:'pHバランストナーで肌のキメを整える。' } },
    { n:'03', t:{ en:'Prescribe', ko:'프리스크라이브', ja:'プリスクライブ' }, k:{ en:'Prescribe', ko:'프리스크라이브', ja:'プリスクライブ' },   d:{ en:'VAMTOXIN™ 2% booster, once.', ko:'VAMTOXIN™ 2% 부스터, 한 번.', ja:'VAMTOXIN™ 2% ブースター、一度。' } },
    { n:'04', t:{ en:'Seal', ko:'씰', ja:'シール' },      k:{ en:'Seal', ko:'씰', ja:'シール' }, d:{ en:'Seal with a light cream.', ko:'가벼운 크림으로 마무리.', ja:'軽やかなクリームで仕上げる。' } },
  ];

  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />

      {/* HERO — slogan + duo-on-stone */}
      <section style={{ background: FNX.cream, padding: '80px 40px 120px', position: 'relative' }}>
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={FNX.sage}>
              <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background: FNX.labRed, marginRight: 10, verticalAlign: 'middle' }}/>
              {t({ en:'Notox · Botox in a Bottle · Vol. 01', ko:'Notox · 보틀 속 보톡스 · Vol. 01', ja:'Notox · ボトルの中のボトックス · Vol. 01' })}
            </RuleLabel>
            <div style={{ marginTop: 28 }}>
              <Slogan size="lg" />
            </div>
            <p style={{ marginTop: 36, maxWidth: '48ch', fontSize: 15, lineHeight: 1.85, color: FNX.pineInk }}>
              {t({ en:'VAMTOXIN™ Peptide 2.0% — clinic-grade care distilled into a daily ritual. Concentrations stated honestly, formulated with the quietest touch.', ko:'VAMTOXIN™ 펩타이드 2.0% — 클리닉 수준의 케어를 매일의 리추얼로 담았습니다. 함량은 정직하게, 손길은 가장 고요하게.', ja:'VAMTOXIN™ ペプチド 2.0% — クリニック品質のケアを毎日のリチュアルへ。配合量は正直に、タッチは最も静かに。' })}
            </p>
            <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 18 }}>
              <Btn kind="primary" size="lg" data-go="shop">{t({ en:'Shop the Collection →', ko:'컬렉션 보기 →', ja:'コレクションを見る →' })}</Btn>
              <Btn kind="ghost" size="lg" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go="science">{t({ en:'Read the Science', ko:'사이언스 보기', ja:'サイエンスを読む' })}</Btn>
            </div>
            <div className="r3" style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, paddingTop: 28, borderTop: `1px solid ${fnxRule(0.18)}` }}>
              {[
                { k:'2.0%', v:{ en:'VAMTOXIN™ Peptide', ko:'VAMTOXIN™ 펩타이드', ja:'VAMTOXIN™ ペプチド' } },
                { k:'N°01', v:{ en:'Supadelixir Sole Patent', ko:'Supadelixir 단독 특허', ja:'Supadelixir 単独特許' } },
                { k:'8 min',v:{ en:'Daily Slow Ritual', ko:'매일의 슬로우 리추얼', ja:'毎日のスロー リチュアル' } },
              ].map(s => (
                <div key={s.k}>
                  <div style={{ fontFamily: FNX.serif, fontSize: 32, fontWeight: 300, letterSpacing: '0.02em', lineHeight: 1 }}>{s.k}</div>
                  <div style={{ marginTop: 6, fontSize: 12, color: FNX.sage, letterSpacing: '0.06em' }}>{t(s.v)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image — duo on stone */}
          <div style={{ position: 'relative' }}>
            <ProductShot src="assets/booster-hero.png" alt={t({ en:'Peptosome Skin Booster collection', ko:'Peptosome Skin Booster 컬렉션', ja:'Peptosome Skin Booster コレクション' })} height={720} objectPosition="50% 40%" bg={FNX.bone} />
          </div>
        </div>
      </section>

      {/* MOOD STATEMENT + decorative pair shot */}
      <Section bg={FNX.parchment} padding="120px 40px">
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
          <ProductShot src="assets/peptosome-pair.jpg" alt={t({ en:'Peptosome on stone', ko:'돌 위의 Peptosome', ja:'石の上の Peptosome' })} height={540} objectPosition="50% center" bg={FNX.parchment} />
          <div>
            <RuleLabel align="left" color={FNX.sage}>{t({ en:'The Premise', ko:'프레미스', ja:'前提' })}</RuleLabel>
            <p style={{ marginTop: 22, fontFamily: FNX.serif, fontWeight: 300, fontSize: 32, lineHeight: 1.35, letterSpacing: '-0.01em', color: FNX.pineInk }}>
              {t({ en:'A quiet ritual that settles into skin. Honest in concentration, quietest in touch — a prescription for the time it takes skin to find its own light.', ko:'피부에 고요히 스며드는 리추얼. 함량은 정직하게, 손길은 가장 고요하게 — 피부가 스스로의 빛을 찾는 시간을 위한 처방.', ja:'肌に静かに溶け込むリチュアル。配合量は正直に、タッチは最も静かに — 肌が自らの輝きを取り戻す時間のための処方。' })}
            </p>
            <p style={{ marginTop: 28, maxWidth: '52ch', fontSize: 14, lineHeight: 1.85, color: FNX.sage }}>
              {t({ en:'Finixlab brings together clinical peptide concentrations and the poetic restraint of Korean indie beauty. Ingredients arranged like a clean shelf, finish quiet as midday light.', ko:'Finixlab는 클리닉 수준의 펩타이드 함량과 한국 인디 뷰티의 시적인 절제를 함께 담습니다. 깔끔한 선반처럼 정돈된 성분, 한낮의 빛처럼 고요한 마무리.', ja:'Finixlab はクリニカルなペプチド配合と韓国インディービューティーの詩的な抑制を併せ持ちます。整然とした棚のように並ぶ成分、真昼の光のように静かな仕上がり。' })}
            </p>
          </div>
        </div>
      </Section>

      {/* THE COLLECTION — two products side by side */}
      <Section bg={FNX.cream} padding="120px 40px">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, marginBottom: 48, paddingBottom: 22, borderBottom: `1px solid ${fnxRule(0.2)}` }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>{t({ en:'02 — The Collection', ko:'02 — 컬렉션', ja:'02 — コレクション' })}</RuleLabel>
            <h2 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 56, letterSpacing: '-0.01em', lineHeight: 1.05 }}>
              {t({ en:'Two prescriptions, one ritual.', ko:'두 개의 처방, 하나의 리추얼.', ja:'二つの処方、一つのリチュアル。' })}
            </h2>
          </div>
          <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go="shop">{t({ en:'Shop All →', ko:'전체 보기 →', ja:'すべて見る →' })}</Btn>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Card 1 — Peptosome */}
          <article style={{ background: FNX.bone, padding: 36, border: `1px solid ${fnxRule(0.12)}` }}>
            <div style={{ marginTop: 24, height: 480, overflow: 'hidden', position: 'relative', background: FNX.cream }}>
              <img src="assets/booster-bottle-front.png" alt={t({ en:'Peptosome Skin Booster', ko:'Peptosome Skin Booster', ja:'Peptosome Skin Booster' })}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
            </div>
            <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: 24 }}>
              <div>
                <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 32, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                  Peptosome Skin Booster
                </h3>
                <p style={{ marginTop: 12, fontSize: 13, lineHeight: 1.7, color: FNX.sage, margin: '12px 0 0' }}>
                  {t({ en:'All-in-one skin boosting solution, revitalized by Peptosome — VAMTOXIN™ 2.0% — softens expression lines without injection.', ko:'Peptosome로 되살아난 올인원 스킨 부스팅 솔루션 — VAMTOXIN™ 2.0% — 시술 없이 표정 주름을 부드럽게.', ja:'Peptosome で生まれ変わるオールインワン スキンブースティング ソリューション — VAMTOXIN™ 2.0% — 注射なしで表情ジワをやわらげる。' })}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: FNX.serif, fontSize: 22, letterSpacing: '0.04em' }}>₩96,000</div>
                <div style={{ marginTop: 4, fontFamily: FNX.mono, fontSize: 11, color: FNX.sage, letterSpacing: '0.14em' }}>~$72 · 50ML</div>
              </div>
            </div>
            <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
              <Btn kind="primary" full style={{}} onClick={() => window.fnxToast && window.fnxToast('Added to bag')}>{t({ en:'Add to Bag', ko:'장바구니 담기', ja:'バッグに追加' })}</Btn>
              <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} size="md" data-go="shop/peptosome">{t({ en:'Detail →', ko:'자세히 →', ja:'詳細 →' })}</Btn>
            </div>
          </article>

          {/* Card 2 — Spicule serum */}
          <article style={{ background: FNX.bone, padding: 36, border: `1px solid ${fnxRule(0.12)}` }}>
            <div style={{ marginTop: 24, height: 480, overflow: 'hidden', position: 'relative', background: FNX.cream }}>
              <img src="assets/serum-shadow.png" alt={t({ en:'Spicule Wrinkle-Free Glow Serum', ko:'Spicule Wrinkle-Free Glow Serum', ja:'Spicule Wrinkle-Free Glow Serum' })}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
            </div>
            <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: 24 }}>
              <div>
                <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 32, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                  Spicule Wrinkle-Free Glow.
                </h3>
                <p style={{ marginTop: 12, fontSize: 13, lineHeight: 1.7, color: FNX.sage, margin: '12px 0 0' }}>
                  {t({ en:'VAMTOXIN™ 2.0% · Niacinamide · Hydroxycitric Acid — a single beam of clarity over fine lines.', ko:'VAMTOXIN™ 2.0% · 나이아신아마이드 · 하이드록시시트릭 애시드 — 잔주름 위로 번지는 한 줄기 맑은 빛.', ja:'VAMTOXIN™ 2.0% · ナイアシンアミド · ヒドロキシクエン酸 — 小ジワに差す一筋の澄んだ輝き。' })}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: FNX.serif, fontSize: 22, letterSpacing: '0.04em' }}>₩58,000</div>
                <div style={{ marginTop: 4, fontFamily: FNX.mono, fontSize: 11, color: FNX.sage, letterSpacing: '0.14em' }}>~$43 · 20ML</div>
              </div>
            </div>
            <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
              <Btn kind="primary" full style={{}} onClick={() => window.fnxToast && window.fnxToast('Added to bag')}>{t({ en:'Add to Bag', ko:'장바구니 담기', ja:'バッグに追加' })}</Btn>
              <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} size="md" data-go="shop/peptosome">{t({ en:'Detail →', ko:'자세히 →', ja:'詳細 →' })}</Btn>
            </div>
          </article>
        </div>
      </Section>

      {/* INGREDIENT SPOTLIGHT */}
      <Section bg={FNX.cream} padding="120px 40px" style={{ borderTop: `1px solid ${fnxRule(0.14)}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', columnGap: 32, alignItems: 'center', borderBottom: `1px solid ${fnxRule(0.2)}`, paddingBottom: 24, marginBottom: 48 }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>{t({ en:'03 — Formulation', ko:'03 — 포뮬레이션', ja:'03 — フォーミュレーション' })}</RuleLabel>
            <h2 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 56, letterSpacing: '-0.01em', lineHeight: 1.05 }}>
              {t({ en:'Concentration before narrative.', ko:'서사보다 함량.', ja:'物語より配合量。' })}
            </h2>
          </div>
          <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'View Full Formula →', ko:'전체 포뮬러 보기 →', ja:'全成分を見る →' })}</Btn>
        </div>

        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>
          {/* Big still image — serum-grid editorial pattern */}
          <div style={{ height: 580, overflow: 'hidden', position: 'relative', background: FNX.cream, border: `1px solid ${fnxRule(0.12)}` }}>
            <img src="assets/serum-grid.png" alt={t({ en:'Spicule Serum boxes grid', ko:'Spicule Serum 박스 그리드', ja:'Spicule Serum ボックス グリッド' })}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
          </div>

          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {ingredients.map((x, idx) => (
              <li key={x.n} style={{
                display: 'grid', gridTemplateColumns: '40px 1fr auto',
                alignItems: 'baseline', gap: 24, padding: '24px 0',
                borderBottom: idx < ingredients.length - 1 ? `1px dashed ${fnxRule(0.15)}` : `1px solid ${fnxRule(0.25)}`,
              }}>
                <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>{x.i}</span>
                <div>
                  <div style={{ fontFamily: FNX.serif, fontSize: 22, fontWeight: 300, letterSpacing: '0.02em' }}>
                    {x.n}
                  </div>
                  <div style={{ marginTop: 6, fontSize: 13, color: FNX.sage, lineHeight: 1.55 }}>{t(x.r)}</div>
                </div>
                <div style={{ fontFamily: FNX.serif, fontSize: 22, fontWeight: 300, letterSpacing: '0.06em' }}>{x.p}</div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* RITUAL — pine bg */}
      <Section bg={FNX.pineInk} padding="120px 40px" style={{ color: FNX.cream }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <RuleLabel align="center" color={fnxCream(0.82)}>{t({ en:'04 — The Ritual', ko:'04 — 리추얼', ja:'04 — リチュアル' })}</RuleLabel>
          <h2 style={{ margin: '18px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 56, letterSpacing: '0.02em', color: FNX.cream }}>
            {t({ en:'Four steps, eight minutes.', ko:'네 단계, 8분.', ja:'四つのステップ、八分。' })}
          </h2>
        </div>
        <div className="r4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {ritual.map(r => (
            <div key={r.n} style={{ borderTop: `1px solid ${fnxCream(0.25)}`, paddingTop: 24 }}>
              <div style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.tan, letterSpacing: '0.24em' }}>{r.n}</div>
              <h3 style={{ margin: '16px 0 6px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, letterSpacing: '0.02em' }}>{t(r.t)}</h3>
              <div style={{ color: fnxCream(0.72), fontSize: 12, letterSpacing: '0.04em', marginBottom: 14 }}>{t(r.k)}</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: fnxCream(0.85), margin: 0 }}>{t(r.d)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* BEFORE / AFTER — visual only, no metrics */}
      <Section bg={FNX.cream} padding="120px 40px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>{t({ en:'05 — Real Users · Testers', ko:'05 — 실사용자 · 테스터', ja:'05 — 実ユーザー · テスター' })}</RuleLabel>
            <h2 style={{ margin: '18px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 52, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
              {t({ en:'Before & After.', ko:'비포 & 애프터.', ja:'ビフォー & アフター。' })}
            </h2>
            <p style={{ marginTop: 22, color: FNX.pineInk, fontSize: 15, lineHeight: 1.85, maxWidth: '46ch' }}>
              {t({ en:'A record from real users in their thirties and beyond. Instead of promising numbers, we present what time has left behind, in their own words.', ko:'30대 이상의 실사용자들이 남긴 기록. 숫자를 약속하는 대신, 시간이 남긴 변화를 그들의 언어로 전합니다.', ja:'30代以上の実ユーザーが残した記録。数字を約束する代わりに、時間が残したものを彼女たち自身の言葉で。' })}
            </p>
            <div style={{ marginTop: 32 }}>
              <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'View all reviews →', ko:'리뷰 전체 보기 →', ja:'すべてのレビューを見る →' })}</Btn>
            </div>
          </div>
          <div style={{ position: 'relative', height: 520, background: FNX.bone, border: `1px solid ${fnxRule(0.18)}` }}>
            <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1px 1fr' }}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src="assets/model-a-before.png" alt={t({ en:'Model A — before', ko:'모델 A — 비포', ja:'モデル A — ビフォー' })}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
              </div>
              <div style={{ background: fnxRule(0.25) }}/>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src="assets/model-a-after.png" alt={t({ en:'Model A — after', ko:'모델 A — 애프터', ja:'モデル A — アフター' })}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* HASHTAG LIBRARY — brand copy culture */}
      <Section bg={FNX.olive} padding="100px 40px" style={{ color: FNX.cream }}>
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={fnxCream(0.82)}>{t({ en:'06 — The Hashtag Library', ko:'06 — 해시태그 라이브러리', ja:'06 — ハッシュタグ ライブラリー' })}</RuleLabel>
            <h2 style={{ margin: '18px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 56, lineHeight: 1.05 }}>
              {t({ en:'Words we live in lower case.', ko:'소문자로 살아가는 단어들.', ja:'小文字で生きる言葉たち。' })}
            </h2>
            <p style={{ marginTop: 22, fontSize: 14, lineHeight: 1.85, color: fnxCream(0.82), maxWidth: '36ch' }}>
              {t({ en:"Finixlab's copy culture — a brand vocabulary of English hashtags. A single word users use to name their ritual.", ko:'Finixlab의 카피 문화 — 영어 해시태그로 이루어진 브랜드 보캐뷸러리. 사용자가 자신의 리추얼을 부르는 한 단어.', ja:'Finixlab のコピー文化 — 英語ハッシュタグによるブランドボキャブラリー。ユーザーが自らのリチュアルを名づける一つの言葉。' })}
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              { t:'#FineLineFighter', hero:true },
              { t:'#SculptedBeauty' },
              { t:'#ClinicalGlow' },
              { t:'#Notox',           hero:true },
              { t:'#BotoxInABottle' },
              { t:'#SlowAging' },
              { t:'#QuietRitual' },
              { t:'#PeptideDiscipline' },
              { t:'#RealEfficacy',    hero:true },
              { t:'#SkinStillness' },
            ].map((h, i) => (
              <span key={i} style={{
                padding: '11px 18px',
                fontFamily: FNX.serif, fontWeight: 300,
                fontSize: 14,
                letterSpacing: '0.02em',
                color: h.hero ? FNX.pineInk : FNX.cream,
                background: h.hero ? FNX.cream : 'transparent',
                border: `1px solid ${h.hero ? FNX.cream : fnxCream(0.4)}`,
                borderRadius: 999,
              }}>{h.t}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* JOURNAL */}
      <Section bg={FNX.parchment} padding="120px 40px">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, marginBottom: 48 }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>{t({ en:'07 — Journal', ko:'07 — 저널', ja:'07 — ジャーナル' })}</RuleLabel>
            <h2 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 48, letterSpacing: '0.02em' }}>
              {t({ en:'Dispatches & Quiet Notes.', ko:'디스패치 & 고요한 노트.', ja:'ディスパッチ & 静かなノート。' })}
            </h2>
          </div>
          <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'All Entries →', ko:'전체 글 보기 →', ja:'すべての記事 →' })}</Btn>
        </div>
        <div className="r3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            {
              t:'No.012', cat:{ en:'Slow Aging', ko:'슬로우 에이징', ja:'スロー エイジング' },
              h:{ en:'On The Quiet Discipline of Peptides', ko:'펩타이드의 고요한 절제에 관하여', ja:'ペプチドの静かな規律について' },
              d:{ en:'How a single peptide molecule softens the texture of expression.', ko:'하나의 펩타이드 분자가 표정의 결을 부드럽게 하는 방식.', ja:'一つのペプチド分子が表情のキメをやわらげる仕組み。' },
              imgKind: 'still', imgSrc: 'assets/serum-pump.png', pos: '50% center',
            },
            {
              t:'No.011', cat:{ en:'Interview', ko:'인터뷰', ja:'インタビュー' },
              h:{ en:'In The Cabinet of A Seoul Dermatologist', ko:'서울 피부과 의사의 캐비닛에서', ja:'ソウルの皮膚科医のキャビネットで' },
              d:{ en:'A prescription on the clinic shelf, and a cup of tea.', ko:'클리닉 선반 위의 처방, 그리고 한 잔의 차.', ja:'クリニックの棚にある処方と、一杯のお茶。' },
              imgKind: 'still', imgSrc: 'assets/booster-grid.png', pos: '50% center',
            },
            {
              t:'No.010', cat:{ en:'Method', ko:'메소드', ja:'メソッド' },
              h:{ en:'Notox · A Verb, Not a Substitute', ko:'Notox · 대체가 아닌, 하나의 동사', ja:'Notox · 代替ではなく、一つの動詞' },
              d:{ en:'Not an alternative to procedures, but a daily prescription that brings them home.', ko:'시술의 대안이 아니라, 그것을 일상으로 가져오는 매일의 처방.', ja:'施術の代わりではなく、それを日常に持ち帰る毎日の処方。' },
              imgKind: 'still', imgSrc: 'assets/serum-roller-green.png', pos: '50% center',
            },
          ].map((j) => (
            <article key={j.t} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
                <img src={j.imgSrc} alt={t(j.h)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: j.pos, display: 'block' }} />
              </div>
              <h3 style={{ margin: '10px 0 8px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 24, letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                <a href="#/journal" data-go="journal" style={{ color: 'inherit', textDecoration: 'none' }}>{t(j.h)}</a>
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: FNX.sage, lineHeight: 1.7 }}>{t(j.d)}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* REVIEWS */}
      <Section bg={FNX.cream} padding="120px 40px">
        <RuleLabel align="center" color={FNX.tan}>{t({ en:'08 — Customer Voice', ko:'08 — 고객의 목소리', ja:'08 — お客様の声' })}</RuleLabel>
        <h2 style={{ margin: '18px 0 64px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 48, letterSpacing: '0.02em', textAlign: 'center' }}>
          {t({ en:'A few quiet sentences.', ko:'몇 개의 고요한 문장.', ja:'いくつかの静かな文章。' })}
        </h2>
        <div className="r3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            { r: 5, t:{ en:'Softer expression lines', ko:'부드러워진 표정 주름', ja:'やわらいだ表情ジワ' }, d:{ en:'In the morning mirror I can feel the lines have softened. Without any heavy procedures, the daily texture has changed.', ko:'아침 거울 앞에서 주름이 부드러워진 게 느껴져요. 부담스러운 시술 없이도 매일의 결이 달라졌습니다.', ja:'朝の鏡でシワがやわらいだのを感じます。負担の大きい施術なしで、毎日のキメが変わりました。' }, a:'— Kim · 38 · Seoul' },
            { r: 5, t:{ en:'A bottle that listens', ko:'귀 기울여 주는 한 병', ja:'寄り添ってくれる一本' },  d:{ en:"My skin's tension has eased since I started — morning makeup sits differently. The quietest ritual, once a day.", ko:'사용한 뒤로 피부의 긴장이 풀렸어요 — 아침 화장이 다르게 얹힙니다. 하루 한 번, 가장 고요한 리추얼.', ja:'使い始めてから肌のこわばりがほぐれました — 朝のメイクのりが違います。一日一度、最も静かなリチュアル。' }, a:'— Y.S. · 39 · Tokyo' },
            { r: 5, t:{ en:'Honest concentration', ko:'정직한 함량', ja:'正直な配合量' }, d:{ en:'The ingredient list is generous and clear. By week six the fine lines softened. Feels like following a prescription day by day.', ko:'성분 리스트가 넉넉하고 투명해요. 6주 차에 잔주름이 부드러워졌습니다. 하루하루 처방을 따르는 기분이에요.', ja:'成分リストが充実していて明快です。6週目で小ジワがやわらぎました。日々処方に従っているような感覚です。' }, a:'— Park · 45 · Busan' },
          ].map((r, i) => (
            <div key={i} style={{ padding: 32, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <div role="img" aria-label={t({ en:'Rated 5 out of 5', ko:'5점 만점에 5점', ja:'5点満点中5点' })} style={{ color: FNX.pineInk, letterSpacing: '0.4em', fontSize: 14 }}>★★★★★</div>
              <h3 style={{ margin: '18px 0 12px', fontFamily: FNX.serif, fontSize: 22, fontWeight: 300, letterSpacing: '-0.01em' }}>{t(r.t)}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.85, color: FNX.pineInk }}>{t(r.d)}</p>
              <div style={{ marginTop: 18, fontSize: 12, color: FNX.sage }}>{r.a}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* STORE LOCATOR */}
      <Section bg={FNX.parchment} padding="100px 40px">
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>{t({ en:'09 — Clinic Partners', ko:'09 — 클리닉 파트너', ja:'09 — クリニックパートナー' })}</RuleLabel>
            <h2 style={{ ...T.h2, margin: '18px 0 0', color: FNX.pineInk }}>
              {t({ en:'In selected clinics, across four cities.', ko:'네 도시, 엄선된 클리닉에서.', ja:'四つの都市、選ばれたクリニックで。' })}
            </h2>
            <p style={{ marginTop: 22, ...T.body, color: FNX.pineInk, maxWidth: '40ch' }}>
              {t({ en:'Clinical partner network — Seoul · Shanghai · Tokyo · Ho Chi Minh. As a post-procedure prescription, or a daily slow-aging ritual.', ko:'클리닉 파트너 네트워크 — 서울 · 상하이 · 도쿄 · 호치민. 시술 후 처방으로, 또는 매일의 슬로우 에이징 리추얼로.', ja:'クリニカル パートナー ネットワーク — ソウル · 上海 · 東京 · ホーチミン。施術後の処方として、あるいは毎日のスローエイジング リチュアルとして。' })}
            </p>
          </div>
          <div style={{ height: 320, position: 'relative', border: `1px solid ${fnxCream(0.18)}`, overflow: 'hidden' }}>
            <img src="assets/peptosome-pair.jpg" alt={t({ en:'Clinic partners', ko:'클리닉 파트너', ja:'クリニックパートナー' })}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
          </div>
        </div>
      </Section>

      <SiteFooter variant="pine" />
    </div>
  );
};

window.HomeV1 = HomeV1;
