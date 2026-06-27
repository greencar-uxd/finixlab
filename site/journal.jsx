// Journal — Editorial Index

const JournalPage = () => {
  const { t } = useLocale();
  const featured = {
    n:'N°012', cat:{ en:'Slow Aging', ko:'슬로우 에이징', ja:'スロー エイジング' }, date:'May 2026',
    h:{ en:'On the Quiet Discipline of Peptides', ko:'펩타이드의 조용한 규율에 관하여', ja:'ペプチドの、静かな規律について' },
    sub:{ en:"Peptides' quiet practice — how a single molecule softens the texture of expression.", ko:'펩타이드의 조용한 실천 — 하나의 분자가 표정의 결을 어떻게 부드럽게 하는가.', ja:'ペプチドの静かな実践 — 一つの分子が、表情の肌理をどうやわらげるのか。' },
    author:{ en:'Hyungju Park · Founder', ko:'Hyungju Park · 창업자', ja:'Hyungju Park · 創業者' },
    minutes:{ en:'7 min', ko:'7분', ja:'7分' },
    img:'assets/serum-pump.png', pos: '50% center',
  };

  const articles = [
    { n:'N°011', cat:{ en:'Interview', ko:'인터뷰', ja:'インタビュー' },  date:'Apr 2026', h:{ en:'In the Cabinet of a Seoul Dermatologist', ko:'서울 피부과 의사의 캐비닛 속에서', ja:'ソウルの皮膚科医のキャビネットの中で' },  img:'assets/booster-grid.png', pos:'50% center' },
    { n:'N°010', cat:{ en:'Method', ko:'메소드', ja:'メソッド' },     date:'Mar 2026', h:{ en:'Notox — A Verb, Not a Substitute', ko:'Notox — 대체가 아니라, 하나의 동사', ja:'Notox — 代わりではなく、ひとつの動詞' },           img:'assets/serum-roller-green.png', pos:'50% center' },
    { n:'N°009', cat:{ en:'Ingredient', ko:'성분', ja:'成分' }, date:'Mar 2026', h:{ en:'Niacinamide at 4%: Where the Glow Begins', ko:'Niacinamide 4%: 광채가 시작되는 곳', ja:'Niacinamide 4%：輝きが始まるところ' },  img:'assets/booster-bottle-front.png', pos:'50% center' },
    { n:'N°008', cat:{ en:'Clinic', ko:'클리닉', ja:'クリニック' },     date:'Feb 2026', h:{ en:'Three Weeks After a Procedure: The Quiet In-Between', ko:'시술 3주 후: 조용한 사이의 시간', ja:'施術から三週間後：静かな、あいだの時間' }, img:'assets/serum-shadow.png', pos:'50% center' },
    { n:'N°007', cat:{ en:'Ritual', ko:'리추얼', ja:'リチュアル' },     date:'Feb 2026', h:{ en:'Eight Minutes, in a Slow Bathroom', ko:'느린 욕실에서의, 8분', ja:'ゆっくりとした浴室での、8分' },          img:'assets/peptosome-pair.jpg', pos:'50% center' },
    { n:'N°006', cat:{ en:'Slow Aging', ko:'슬로우 에이징', ja:'スロー エイジング' }, date:'Jan 2026', h:{ en:'On the Word "Anti": Why We Don\'t Say It', ko:'"안티"라는 말에 관하여: 우리가 그것을 말하지 않는 이유', ja:'「アンチ」という言葉について：私たちがそれを言わない理由' },   img:'assets/duo-on-stone.jpg', pos:'50% center' },
  ];

  const cats = [
    { en:'All', ko:'전체', ja:'すべて' },
    { en:'Slow Aging', ko:'슬로우 에이징', ja:'スロー エイジング' },
    { en:'Method', ko:'메소드', ja:'メソッド' },
    { en:'Interview', ko:'인터뷰', ja:'インタビュー' },
    { en:'Ingredient', ko:'성분', ja:'成分' },
  ];

  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />

      {/* MASTHEAD */}
      <section style={{ background: FNX.cream, padding: '64px 40px 32px', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end' }}>
          <h1 style={{ ...T.hero, margin: 0, color: FNX.pineInk }}>
            {t({ en:'The Journal.', ko:'저널.', ja:'ジャーナル。' })}
          </h1>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: FNX.serif, fontSize: 13, color: FNX.sage, lineHeight: 1.7, letterSpacing: '0.04em' }}>
              {t({ en:'Quiet dispatches, once a month.', ko:'한 달에 한 번, 조용한 소식.', ja:'月に一度、静かな便り。' })}
            </div>
            <div style={{ marginTop: 18 }}>
              <Btn kind="primary" size="sm">{t({ en:'Subscribe →', ko:'구독하기 →', ja:'購読する →' })}</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY BAR */}
      <div style={{ background: FNX.cream, padding: '20px 40px', borderBottom: `1px solid ${fnxRule(0.18)}`, display: 'flex', gap: 18, alignItems: 'center', overflow: 'auto', fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
        {cats.map((c, i) => (
          <button type="button" key={i} style={{
            font: 'inherit',
            padding: '8px 16px', borderRadius: 999,
            border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.18)}`,
            color: i === 0 ? FNX.pineInk : FNX.sage,
            background: i === 0 ? FNX.bone : 'transparent',
            cursor: 'pointer', whiteSpace: 'nowrap',
          }}>{t(c)}</button>
        ))}
        <span style={{ flex: 1 }}/>
        <span style={{ color: FNX.sage, fontFamily: FNX.mono, fontSize: 12, letterSpacing: '0.14em' }}>{articles.length + 1} {t({ en:'ENTRIES', ko:'편', ja:'本' })}</span>
      </div>

      {/* FEATURED */}
      <Section bg={FNX.cream} padding="80px 40px">
        <RuleLabel align="left" color={FNX.tan}>{t({ en:'Featured · This Month', ko:'이달의 추천', ja:'今月のおすすめ' })}</RuleLabel>
        <div className="rsplit" style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div style={{ height: 600, overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
            <img src={featured.img} alt={t(featured.h)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: featured.pos }} />
          </div>
          <div>
            <h2 style={{ ...T.h2, margin: 0, color: FNX.pineInk }}>
              {t(featured.h)}
            </h2>
            <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.85, color: FNX.pineInk, maxWidth: '46ch' }}>
              {t(featured.sub)}
            </p>
            <p style={{ marginTop: 16, fontSize: 13, lineHeight: 1.85, color: FNX.sage, maxWidth: '52ch' }}>
              {t({ en:'Nine weeks of a molecule quieting the surface. What we prescribe is consistency, not efficacy — the idea that eight minutes a day keep the surface from dulling.', ko:'분자가 피부 표면을 가라앉히는 9주. 우리가 처방하는 것은 효능이 아니라 꾸준함입니다 — 하루 8분이 표면을 흐려지지 않게 지킨다는 생각.', ja:'分子が肌の表面を静めていく9週間。私たちが処方するのは、効能ではなく、つづけること — 一日8分が、表面をくすませないという考え。' })}
            </p>
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 18, paddingTop: 18, borderTop: `1px solid ${fnxRule(0.18)}` }}>
              <span style={{ fontSize: 12, color: FNX.pineInk, fontFamily: FNX.serif, letterSpacing: '0.04em' }}>
                {t(featured.author)}
              </span>
              <span style={{ width: 1, height: 12, background: fnxRule(0.3) }}/>
              <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>{t(featured.minutes).toUpperCase()}</span>
              <span style={{ flex: 1 }}/>
              <Btn kind="ghost" size="md" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Read →', ko:'읽기 →', ja:'読む →' })}</Btn>
            </div>
          </div>
        </div>
      </Section>

      {/* GRID */}
      <Section bg={FNX.parchment} padding="100px 40px">
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 40, borderBottom: `1px solid ${fnxRule(0.2)}`, paddingBottom: 22 }}>
          <h2 style={{ ...T.h2, margin: 0, color: FNX.pineInk }}>{t({ en:'All Dispatches.', ko:'모든 소식.', ja:'すべての便り。' })}</h2>
          <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>{t({ en:'SORT · NEWEST', ko:'정렬 · 최신순', ja:'並び替え · 新着順' })}</span>
        </div>
        <div className="r3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {articles.map(a => (
            <article key={a.n} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
                <img src={a.img} alt={t(a.h)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: a.pos }} />
              </div>
              <h3 style={{ margin: '10px 0 8px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 24, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                <a href="#/journal" data-go="journal" style={{ color: 'inherit', textDecoration: 'none' }}>{t(a.h)}</a>
              </h3>
              <span style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', color: FNX.sage, textTransform: 'uppercase', marginTop: 8 }}>{t({ en:'Read →', ko:'읽기 →', ja:'読む →' })}</span>
            </article>
          ))}
        </div>

        {/* pagination */}
        <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center', gap: 8, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em' }}>
          {['‹', '01', '02', '03', '04', '›'].map((p, i) => (
            <button type="button" key={i} style={{
              font: 'inherit',
              minWidth: 36, height: 36, padding: '0 10px',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              border: `1px solid ${i === 1 ? FNX.pineInk : fnxRule(0.18)}`,
              color: i === 1 ? FNX.pineInk : FNX.sage,
              background: i === 1 ? FNX.bone : 'transparent',
              cursor: 'pointer',
            }}>{p}</button>
          ))}
        </div>
      </Section>



      <SiteFooter variant="pine" />
    </div>
  );
};

window.JournalPage = JournalPage;
