// Mobile Home — section-aligned 1:1 with desktop Home V1 (home-v1.jsx)
// Same section order, copy, and composition as desktop, reflowed for ~390px width.

const HomeMobile = () => {
  const { t } = useLocale();
  const ingredients = [
    { i:'01', n:'VAMTOXIN™ Peptide', r:{ en:'SNARE-inhibiting peptide · softens expression lines', ko:'SNARE 억제 펩타이드 · 표정 주름을 부드럽게', ja:'SNARE阻害ペプチド · 表情ジワをやわらげる' }, p:'2.0%' },
    { i:'02', n:'Spicule Complex',   r:{ en:'Marine micro-needle · active delivery', ko:'해양 마이크로니들 · 유효 성분 전달', ja:'マリンマイクロニードル · 有効成分デリバリー' },    p:'0.5%' },
    { i:'03', n:'Centella Asiatica', r:{ en:'Centella · soothing · barrier support', ko:'센텔라 · 진정 · 장벽 강화', ja:'ツボクサ · 鎮静 · バリアサポート' },     p:'0.5%' },
    { i:'04', n:'Niacinamide',       r:{ en:'Niacinamide · tone clarity', ko:'나이아신아마이드 · 톤 정돈', ja:'ナイアシンアミド · トーンクリア' },   p:'4.0%' },
  ];
  const ritual = [
    { n:'01', t:{ en:'Cleanse',   ko:'클렌징',   ja:'クレンジング' },   k:{ en:'Cleanse',   ko:'클렌징',   ja:'クレンジング' },   d:{ en:'Morning and evening, a gentle cleanser.', ko:'아침과 저녁, 순한 클렌저로.', ja:'朝と夜、やさしいクレンザーで。' } },
    { n:'02', t:{ en:'Prep',      ko:'프렙',      ja:'プレップ' },      k:{ en:'Prep',      ko:'프렙',      ja:'プレップ' },   d:{ en:'A pH-balanced toner to settle the surface.', ko:'pH 밸런스 토너로 피부 결을 정돈합니다.', ja:'pHバランストナーで肌表面を整える。' } },
    { n:'03', t:{ en:'Prescribe', ko:'프리스크라이브', ja:'プリスクライブ' }, k:{ en:'Prescribe', ko:'프리스크라이브', ja:'プリスクライブ' },   d:{ en:'VAMTOXIN™ 2% booster, once.', ko:'VAMTOXIN™ 2% 부스터, 하루 한 번.', ja:'VAMTOXIN™ 2% ブースターを一度。' } },
    { n:'04', t:{ en:'Seal',      ko:'씰',      ja:'シール' },      k:{ en:'Seal', ko:'씰', ja:'シール' }, d:{ en:'Seal with a light cream.', ko:'가벼운 크림으로 마무리합니다.', ja:'軽やかなクリームで閉じ込める。' } },
  ];
  const products = [
    {
      t:'Peptosome Skin Booster',
      d:{ en:'All-in-one skin boosting solution, revitalized by Peptosome — VAMTOXIN™ 2.0% — softens expression lines without injection.', ko:'Peptosome로 활력을 더한 올인원 스킨 부스팅 솔루션 — VAMTOXIN™ 2.0% — 시술 없이 표정 주름을 부드럽게.', ja:'Peptosomeが活力を与えるオールインワン スキンブースティング ソリューション — VAMTOXIN™ 2.0% — 注射なしで表情ジワをやわらげる。' },
      price:'₩96,000', sub:'~$72 · 50ML', img:'assets/booster-bottle-front.png', go:'shop/peptosome',
    },
    {
      t:'Spicule Wrinkle-Free Glow.',
      d:{ en:'VAMTOXIN™ 2.0% · Niacinamide · Hydroxycitric Acid — a single beam of clarity over fine lines.', ko:'VAMTOXIN™ 2.0% · 나이아신아마이드 · 하이드록시시트릭애씨드 — 잔주름 위로 비치는 한 줄기 맑은 빛.', ja:'VAMTOXIN™ 2.0% · ナイアシンアミド · ヒドロキシクエン酸 — 小ジワに射す一筋の透明感。' },
      price:'₩58,000', sub:'~$43 · 20ML', img:'assets/serum-shadow.png', go:'shop',
    },
  ];
  const hashtags = [
    { t:'#FineLineFighter', hero:true }, { t:'#SculptedBeauty' }, { t:'#ClinicalGlow' },
    { t:'#Notox', hero:true }, { t:'#BotoxInABottle' }, { t:'#SlowAging' },
    { t:'#QuietRitual' }, { t:'#PeptideDiscipline' }, { t:'#RealEfficacy', hero:true }, { t:'#SkinStillness' },
  ];
  const journal = [
    { h:{ en:'On The Quiet Discipline of Peptides', ko:'펩타이드의 조용한 절제에 대하여', ja:'ペプチドの静かな規律について' }, d:{ en:'How a single peptide molecule softens the texture of expression.', ko:'하나의 펩타이드 분자가 표정의 결을 어떻게 부드럽게 하는가.', ja:'一つのペプチド分子が表情の質感をいかにやわらげるか。' }, img:'assets/serum-pump.png', pos:'50% center' },
    { h:{ en:'In The Cabinet of A Seoul Dermatologist', ko:'서울 피부과 의사의 진열장에서', ja:'ソウルの皮膚科医のキャビネットにて' }, d:{ en:'A prescription on the clinic shelf, and a cup of tea.', ko:'클리닉 선반 위의 처방전, 그리고 한 잔의 차.', ja:'クリニックの棚にある処方箋と、一杯のお茶。' }, img:'assets/booster-grid.png', pos:'50% center' },
    { h:{ en:'Notox · A Verb, Not a Substitute', ko:'Notox · 대체가 아닌, 하나의 동사', ja:'Notox · 代替ではなく、一つの動詞' }, d:{ en:'Not an alternative to procedures, but a daily prescription that brings them home.', ko:'시술의 대체가 아닌, 그 효과를 일상으로 가져오는 매일의 처방.', ja:'施術の代わりではなく、その効果を日常に持ち帰る毎日の処方。' }, img:'assets/serum-roller-green.png', pos:'50% center' },
  ];
  const reviews = [
    { t:{ en:'Softer expression lines', ko:'한결 부드러워진 표정 주름', ja:'やわらいだ表情ジワ' }, d:{ en:'In the morning mirror I can feel the lines have softened. Without any heavy procedures, the daily texture has changed.', ko:'아침 거울 속에서 주름이 부드러워진 게 느껴져요. 부담스러운 시술 없이도 매일의 피부 결이 달라졌습니다.', ja:'朝の鏡で、シワがやわらいだのを感じます。負担の大きい施術なしで、毎日の肌の質感が変わりました。' }, a:'— Kim · 38 · Seoul' },
    { t:{ en:'A bottle that listens', ko:'귀 기울여 주는 한 병', ja:'寄り添ってくれる一本' },   d:{ en:"My skin's tension has eased since I started — morning makeup sits differently. The quietest ritual, once a day.", ko:'사용한 뒤로 피부의 긴장이 풀렸어요 — 아침 메이크업이 다르게 얹힙니다. 하루 한 번, 가장 조용한 리추얼.', ja:'使い始めてから肌の緊張がほぐれました — 朝のメイクのりが違います。一日一度、最も静かなリチュアル。' }, a:'— Y.S. · 39 · Tokyo' },
    { t:{ en:'Honest concentration', ko:'정직한 농도', ja:'正直な濃度' },    d:{ en:'The ingredient list is generous and clear. By week six the fine lines softened. Feels like following a prescription day by day.', ko:'성분표가 넉넉하고 투명합니다. 6주째가 되니 잔주름이 부드러워졌어요. 매일 처방을 따르는 기분입니다.', ja:'成分表が惜しみなく明快です。6週目には小ジワがやわらぎました。毎日処方に従っているような感覚です。' }, a:'— Park · 45 · Busan' },
  ];

  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300, fontSize: 14 }}>
      <MHeader />

      {/* HERO — slogan + booster image + intro + CTAs + stats */}
      <section style={{ padding: '32px 24px 40px' }}>
        <RuleLabel align="left" color={FNX.sage}>
          <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background: FNX.labRed, marginRight: 10, verticalAlign: 'middle' }}/>
          {t({ en:'Notox · Botox in a Bottle · Vol. 01', ko:'Notox · 보틀 속의 보톡스 · Vol. 01', ja:'Notox · ボトルの中のボトックス · Vol. 01' })}
        </RuleLabel>
        <h1 style={{ margin: '20px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 44, lineHeight: 1.02, letterSpacing: '-0.02em' }}>
          {t({ en:'Real Efficacy, Quietly Delivered.', ko:'정직한 효능을, 조용히 전합니다.', ja:'確かな効果を、静かに届ける。' })}
        </h1>
        <p lang="ko" style={{ margin: '12px 0 0', fontSize: 13, color: FNX.sage, letterSpacing: '0.02em' }}>
          {t({ en:'Honest concentration, quiet efficacy.', ko:'정직한 농도, 조용한 효능.', ja:'正直な濃度、静かな効能。' })}
        </p>

        <div style={{ marginTop: 28 }}>
          <ProductShot src="assets/booster-hero.png" alt={t({ en:'Peptosome Skin Booster', ko:'Peptosome Skin Booster', ja:'Peptosome Skin Booster' })} height={460} bg={FNX.bone} objectPosition="50% 40%" />
        </div>

        <p style={{ marginTop: 22, fontSize: 14, lineHeight: 1.8, color: FNX.pineInk }}>
          {t({ en:'VAMTOXIN™ Peptide 2.0% — clinic-grade care distilled into a daily ritual. Concentrations stated honestly, formulated with the quietest touch.', ko:'VAMTOXIN™ 펩타이드 2.0% — 클리닉 수준의 케어를 매일의 리추얼로 응축했습니다. 농도는 정직하게 밝히고, 가장 조용한 손길로 배합했습니다.', ja:'VAMTOXIN™ ペプチド 2.0% — クリニックグレードのケアを毎日のリチュアルに凝縮。濃度は正直に明記し、最も静かな手つきで処方しました。' })}
        </p>

        <div style={{ marginTop: 24, display: 'grid', gap: 10 }}>
          <Btn kind="primary" full data-go="shop">{t({ en:'Shop the Collection →', ko:'컬렉션 보기 →', ja:'コレクションを見る →' })}</Btn>
          <Btn kind="ghost" full style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go="science">{t({ en:'Read the Science', ko:'사이언스 보기', ja:'サイエンスを読む' })}</Btn>
        </div>

        {/* stats */}
        <div style={{ marginTop: 32, paddingTop: 20, borderTop: `1px solid ${fnxRule(0.18)}`, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {[
            { k:'2.0%', v:{ en:'VAMTOXIN™ Peptide', ko:'VAMTOXIN™ 펩타이드', ja:'VAMTOXIN™ ペプチド' } },
            { k:'N°01', v:{ en:'Supadelixir Sole Patent', ko:'Supadelixir 단독 특허', ja:'Supadelixir 単独特許' } },
            { k:'8 min',v:{ en:'Daily Slow Ritual', ko:'매일의 슬로우 리추얼', ja:'毎日のスローリチュアル' } },
          ].map(s => (
            <div key={s.k}>
              <div style={{ fontFamily: FNX.serif, fontSize: 22, letterSpacing: '0.02em', lineHeight: 1 }}>{s.k}</div>
              <div style={{ marginTop: 4, fontSize: 10, color: FNX.sage, letterSpacing: '0.06em' }}>{t(s.v)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THE PREMISE — pair shot + statement */}
      <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
        <ProductShot src="assets/peptosome-pair.jpg" alt={t({ en:'Peptosome on stone', ko:'돌 위의 Peptosome', ja:'石の上のPeptosome' })} height={300} bg={FNX.parchment} objectPosition="50% center" />
        <RuleLabel align="left" color={FNX.sage} style={{ marginTop: 24 }}>{t({ en:'The Premise', ko:'전제', ja:'前提' })}</RuleLabel>
        <p style={{ marginTop: 16, fontFamily: FNX.serif, fontSize: 23, lineHeight: 1.4, letterSpacing: '-0.01em', color: FNX.pineInk }}>
          {t({ en:'A quiet ritual that settles into skin. Honest in concentration, quietest in touch — a prescription for the time it takes skin to find its own light.', ko:'피부에 가만히 스며드는 조용한 리추얼. 농도는 정직하게, 손길은 가장 조용하게 — 피부가 스스로의 빛을 찾는 시간을 위한 처방.', ja:'肌に静かに溶け込むリチュアル。濃度は正直に、手つきは最も静かに — 肌が自らの輝きを取り戻すための処方。' })}
        </p>
        <p style={{ marginTop: 16, fontSize: 13, color: FNX.sage, lineHeight: 1.7 }}>
          {t({ en:'Finixlab brings together clinical peptide concentrations and the poetic restraint of Korean indie beauty. Ingredients arranged like a clean shelf, finish quiet as midday light.', ko:'Finixlab는 클리닉 수준의 펩타이드 농도와 한국 인디 뷰티의 시적인 절제를 함께 담습니다. 깔끔한 선반처럼 정돈된 성분, 한낮의 빛처럼 잔잔한 마무리.', ja:'Finixlabはクリニカルなペプチド濃度と、韓国インディービューティの詩的な抑制を一つに。清潔な棚のように整えた成分、真昼の光のように静かな仕上がり。' })}
        </p>
      </section>

      {/* 02 — THE COLLECTION */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, margin: '0 0 24px' }}>
          <h2 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            {t({ en:'Two prescriptions, one ritual.', ko:'두 개의 처방, 하나의 리추얼.', ja:'二つの処方、一つのリチュアル。' })}
          </h2>
          <Btn kind="ghost" size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk, flexShrink: 0 }} data-go="shop">{t({ en:'Shop All →', ko:'전체 보기 →', ja:'すべて見る →' })}</Btn>
        </div>
        <div style={{ display: 'grid', gap: 20 }}>
          {products.map(p => (
            <article key={p.t} style={{ background: FNX.bone, padding: 20, border: `1px solid ${fnxRule(0.12)}` }}>
              <div style={{ height: 300, overflow: 'hidden', position: 'relative', background: FNX.cream }}>
                <img src={p.img} alt={p.t} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
              </div>
              <div style={{ marginTop: 18, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 14 }}>
                <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 22, letterSpacing: '-0.01em', lineHeight: 1.15 }}>{p.t}</h3>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: FNX.serif, fontSize: 18, letterSpacing: '0.04em' }}>{p.price}</div>
                  <div style={{ marginTop: 2, fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.14em' }}>{p.sub}</div>
                </div>
              </div>
              <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.7, color: FNX.sage }}>{t(p.d)}</p>
              <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
                <Btn kind="primary" full onClick={() => window.fnxToast && window.fnxToast('Added to bag')}>{t({ en:'Add to Bag', ko:'장바구니 담기', ja:'バッグに追加' })}</Btn>
                <Btn kind="ghost" size="md" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go={p.go}>{t({ en:'Detail →', ko:'자세히 →', ja:'詳細 →' })}</Btn>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 03 — FORMULATION */}
      <section style={{ background: FNX.cream, padding: '40px 24px', borderTop: `1px solid ${fnxRule(0.14)}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, margin: '0 0 24px' }}>
          <h2 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            {t({ en:'Concentration before narrative.', ko:'서사보다 농도.', ja:'物語よりも濃度。' })}
          </h2>
          <Btn kind="ghost" size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk, flexShrink: 0 }} data-go="shop/peptosome">{t({ en:'Formula →', ko:'포뮬러 →', ja:'処方 →' })}</Btn>
        </div>
        <div style={{ height: 320, overflow: 'hidden', position: 'relative', background: FNX.cream, border: `1px solid ${fnxRule(0.12)}` }}>
          <img src="assets/serum-grid.png" alt={t({ en:'Spicule Serum boxes grid', ko:'Spicule 세럼 박스 그리드', ja:'Spicule セラムの箱グリッド' })}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
        </div>
        <ul style={{ listStyle: 'none', margin: '24px 0 0', padding: 0 }}>
          {ingredients.map((x, idx) => (
            <li key={x.n} style={{
              display: 'grid', gridTemplateColumns: '24px 1fr auto',
              gap: 12, padding: '16px 0', alignItems: 'baseline',
              borderBottom: idx < ingredients.length - 1 ? `1px dashed ${fnxRule(0.15)}` : `1px solid ${fnxRule(0.25)}`,
            }}>
              <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.sage, letterSpacing: '0.18em' }}>{x.i}</span>
              <div>
                <div style={{ fontFamily: FNX.serif, fontSize: 16, letterSpacing: '0.02em' }}>{x.n}</div>
                <div style={{ marginTop: 3, fontSize: 12, color: FNX.sage, lineHeight: 1.5 }}>{t(x.r)}</div>
              </div>
              <div style={{ fontFamily: FNX.serif, fontSize: 16, letterSpacing: '0.06em' }}>{x.p}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* 04 — THE RITUAL */}
      <section style={{ background: FNX.pineInk, color: FNX.cream, padding: '40px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <RuleLabel align="center" color={fnxCream(0.82)}>{t({ en:'04 — The Ritual', ko:'04 — 리추얼', ja:'04 — リチュアル' })}</RuleLabel>
          <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, lineHeight: 1.05 }}>
            {t({ en:'Four steps, eight minutes.', ko:'네 단계, 8분.', ja:'四つのステップ、八分。' })}
          </h2>
        </div>
        <div style={{ display: 'grid', gap: 0 }}>
          {ritual.map(r => (
            <div key={r.n} style={{ padding: '18px 0', borderTop: `1px solid ${fnxCream(0.2)}` }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                  <span style={{ fontFamily: FNX.mono, fontSize: 10, color: FNX.tan, letterSpacing: '0.18em' }}>{r.n}</span>
                  <span style={{ fontFamily: FNX.serif, fontSize: 20, letterSpacing: '0.02em' }}>{t(r.t)}</span>
                </div>
                <span style={{ fontSize: 11, color: fnxCream(0.72) }}>{t(r.k)}</span>
              </div>
              <p style={{ margin: '8px 0 0', fontSize: 12, lineHeight: 1.7, color: fnxCream(0.85) }}>{t(r.d)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 05 — REAL USERS · TESTERS */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.tan}>{t({ en:'05 — Real Users · Testers', ko:'05 — 실사용자 · 테스터', ja:'05 — リアルユーザー · テスター' })}</RuleLabel>
        <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, lineHeight: 1.05, letterSpacing: '-0.01em' }}>
          {t({ en:'Before & After.', ko:'전후 비교.', ja:'ビフォー & アフター。' })}
        </h2>
        <p style={{ margin: '14px 0 0', fontSize: 13, color: FNX.pineInk, lineHeight: 1.8 }}>
          {t({ en:'A record from real users in their thirties and beyond. Instead of promising numbers, we present what time has left behind, in their own words.', ko:'30대 이상 실사용자들의 기록. 숫자를 약속하는 대신, 시간이 남긴 흔적을 그들의 말로 전합니다.', ja:'30代以上のリアルユーザーの記録。数字を約束する代わりに、時間が残したものを彼ら自身の言葉でお届けします。' })}
        </p>
        <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1px 1fr', background: FNX.bone, border: `1px solid ${fnxRule(0.18)}`, height: 260 }}>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="assets/model-a-before.png" alt={t({ en:'Model A — before', ko:'모델 A — 사용 전', ja:'モデルA — 使用前' })}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
          </div>
          <div style={{ background: fnxRule(0.25) }}/>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="assets/model-a-after.png" alt={t({ en:'Model A — after', ko:'모델 A — 사용 후', ja:'モデルA — 使用後' })}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
          </div>
        </div>
        <div style={{ marginTop: 18 }}>
          <Btn kind="ghost" full size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go="shop/peptosome">{t({ en:'View all reviews →', ko:'모든 리뷰 보기 →', ja:'すべてのレビューを見る →' })}</Btn>
        </div>
      </section>

      {/* 06 — THE HASHTAG LIBRARY */}
      <section style={{ background: FNX.olive, color: FNX.cream, padding: '40px 24px' }}>
        <RuleLabel align="left" color={fnxCream(0.82)}>{t({ en:'06 — The Hashtag Library', ko:'06 — 해시태그 라이브러리', ja:'06 — ハッシュタグ ライブラリ' })}</RuleLabel>
        <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 30, lineHeight: 1.05 }}>
          {t({ en:'Words we live in lower case.', ko:'우리가 소문자로 살아가는 단어들.', ja:'小文字で生きる言葉たち。' })}
        </h2>
        <p style={{ margin: '14px 0 0', fontSize: 13, lineHeight: 1.8, color: fnxCream(0.82) }}>
          {t({ en:"Finixlab's copy culture — a brand vocabulary of English hashtags. A single word users use to name their ritual.", ko:'Finixlab의 카피 문화 — 영어 해시태그로 이루어진 브랜드 어휘. 사용자가 자신의 리추얼을 부르는 단 하나의 단어.', ja:'Finixlabのコピー文化 — 英語ハッシュタグでつくるブランド語彙。ユーザーが自分のリチュアルを呼ぶたった一つの言葉。' })}
        </p>
        <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {hashtags.map((h, i) => (
            <span key={i} style={{
              padding: '8px 14px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 13, letterSpacing: '0.02em',
              color: h.hero ? FNX.pineInk : FNX.cream,
              background: h.hero ? FNX.cream : 'transparent',
              border: `1px solid ${h.hero ? FNX.cream : fnxCream(0.4)}`,
              borderRadius: 999,
            }}>{h.t}</span>
          ))}
        </div>
      </section>

      {/* 07 — JOURNAL */}
      <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, margin: '0 0 24px' }}>
          <h2 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, lineHeight: 1.05 }}>
            {t({ en:'Dispatches & Quiet Notes.', ko:'기록과 조용한 노트.', ja:'ディスパッチと静かなノート。' })}
          </h2>
          <Btn kind="ghost" size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk, flexShrink: 0 }} data-go="journal">{t({ en:'All Entries →', ko:'전체 보기 →', ja:'すべての記事 →' })}</Btn>
        </div>
        {journal.map((j, i) => (
          <article key={j.img} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 14, padding: '16px 0', borderTop: i === 0 ? `1px solid ${fnxRule(0.2)}` : `1px dashed ${fnxRule(0.14)}`, alignItems: 'start' }}>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <img src={j.img} alt={t(j.h)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: j.pos }} />
            </div>
            <div>
              <h4 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 16, lineHeight: 1.25 }}>
                <a href="#/journal" data-go="journal" style={{ color: 'inherit', textDecoration: 'none' }}>{t(j.h)}</a>
              </h4>
              <p style={{ margin: '8px 0 0', fontSize: 12, color: FNX.sage, lineHeight: 1.6 }}>{t(j.d)}</p>
            </div>
          </article>
        ))}
      </section>

      {/* 08 — CUSTOMER VOICE */}
      <section style={{ background: FNX.cream, padding: '40px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <RuleLabel align="center" color={FNX.tan}>{t({ en:'08 — Customer Voice', ko:'08 — 고객의 목소리', ja:'08 — お客様の声' })}</RuleLabel>
          <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, lineHeight: 1.05 }}>
            {t({ en:'A few quiet sentences.', ko:'몇 줄의 조용한 문장.', ja:'いくつかの静かな言葉。' })}
          </h2>
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ padding: 20, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <div role="img" aria-label={t({ en:'Rated 5 out of 5', ko:'5점 만점에 5점', ja:'5点満点中5点' })} style={{ color: FNX.pineInk, letterSpacing: '0.4em', fontSize: 12 }}>★★★★★</div>
              <h3 style={{ margin: '12px 0 8px', fontFamily: FNX.serif, fontSize: 18, fontWeight: 300, letterSpacing: '-0.01em' }}>{t(r.t)}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.75, color: FNX.pineInk }}>{t(r.d)}</p>
              <div style={{ marginTop: 14, fontSize: 11, color: FNX.sage }}>{r.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 09 — CLINIC PARTNERS */}
      <section style={{ background: FNX.parchment, padding: '40px 24px' }}>
        <RuleLabel align="left" color={FNX.tan}>{t({ en:'09 — Clinic Partners', ko:'09 — 클리닉 파트너', ja:'09 — クリニックパートナー' })}</RuleLabel>
        <h2 style={{ margin: '12px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1, color: FNX.pineInk }}>
          {t({ en:'In selected clinics, across four cities.', ko:'네 도시의 선별된 클리닉에서.', ja:'四つの都市の厳選クリニックで。' })}
        </h2>
        <p style={{ margin: '16px 0 0', fontSize: 13, color: FNX.pineInk, lineHeight: 1.8 }}>
          {t({ en:'Clinical partner network — Seoul · Shanghai · Tokyo · Ho Chi Minh. As a post-procedure prescription, or a daily slow-aging ritual.', ko:'클리닉 파트너 네트워크 — 서울 · 상하이 · 도쿄 · 호치민. 시술 후 처방으로, 또는 매일의 슬로우 에이징 리추얼로.', ja:'クリニカルパートナーネットワーク — ソウル · 上海 · 東京 · ホーチミン。施術後の処方として、あるいは毎日のスローエイジング リチュアルとして。' })}
        </p>
        <div style={{ marginTop: 20, height: 220, position: 'relative', border: `1px solid ${fnxRule(0.18)}`, overflow: 'hidden' }}>
          <img src="assets/peptosome-pair.jpg" alt={t({ en:'Clinic partners', ko:'클리닉 파트너', ja:'クリニックパートナー' })}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
        </div>
      </section>

      {/* Mini footer — shared component with clickable nav */}
      <MFooter />
    </div>
  );
};

window.HomeMobile = HomeMobile;
