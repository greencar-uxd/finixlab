// Journal — Editorial Index

const JournalPage = () => {
  const featured = {
    n:'N°012', cat:'Slow Aging', date:'May 2026',
    h:'On the Quiet Discipline of Peptides',
    sub:"Peptides' quiet practice — how a single molecule softens the texture of expression.",
    author:'Hyejin Yoon · Founder',
    minutes:'7 min',
    img:'assets/serum-pump.png', pos: '50% center',
  };

  const articles = [
    { n:'N°011', cat:'Interview',  date:'Apr 2026', h:'In the Cabinet of a Seoul Dermatologist',  img:'assets/booster-grid.png', pos:'50% center' },
    { n:'N°010', cat:'Method',     date:'Mar 2026', h:'Notox — A Verb, Not a Substitute',           img:'assets/serum-roller-green.png', pos:'50% center' },
    { n:'N°009', cat:'Ingredient', date:'Mar 2026', h:'Niacinamide at 4%: Where the Glow Begins',  img:'assets/booster-bottle-front.png', pos:'50% center' },
    { n:'N°008', cat:'Clinic',     date:'Feb 2026', h:'Three Weeks After a Procedure: The Quiet In-Between', img:'assets/serum-shadow.png', pos:'50% center' },
    { n:'N°007', cat:'Ritual',     date:'Feb 2026', h:'Eight Minutes, in a Slow Bathroom',          img:'assets/peptosome-pair.jpg', pos:'50% center' },
    { n:'N°006', cat:'Slow Aging', date:'Jan 2026', h:'On the Word "Anti": Why We Don\'t Say It',   img:'assets/duo-on-stone.jpg', pos:'50% center' },
  ];

  const cats = ['All', 'Slow Aging', 'Method', 'Interview', 'Ingredient'];

  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />

      {/* MASTHEAD */}
      <section style={{ background: FNX.cream, padding: '64px 40px 32px', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end' }}>
          <h1 style={{ ...T.hero, margin: 0, color: FNX.pineInk }}>
            The Journal.
          </h1>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: FNX.serif, fontSize: 13, color: FNX.sage, lineHeight: 1.7, letterSpacing: '0.04em' }}>
              Quiet dispatches, once a month.
            </div>
            <div style={{ marginTop: 18 }}>
              <Btn kind="primary" size="sm">Subscribe →</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY BAR */}
      <div style={{ background: FNX.cream, padding: '20px 40px', borderBottom: `1px solid ${fnxRule(0.18)}`, display: 'flex', gap: 18, alignItems: 'center', overflow: 'auto', fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
        {cats.map((c, i) => (
          <span key={c} style={{
            padding: '8px 16px', borderRadius: 999,
            border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.18)}`,
            color: i === 0 ? FNX.pineInk : FNX.sage,
            background: i === 0 ? FNX.bone : 'transparent',
            cursor: 'pointer', whiteSpace: 'nowrap',
          }}>{c}</span>
        ))}
        <span style={{ flex: 1 }}/>
        <span style={{ color: FNX.sage, fontFamily: FNX.mono, fontSize: 12, letterSpacing: '0.14em' }}>{articles.length + 1} ENTRIES</span>
      </div>

      {/* FEATURED */}
      <Section bg={FNX.cream} padding="80px 40px">
        <RuleLabel align="left" color={FNX.tan}>Featured · This Month</RuleLabel>
        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div style={{ height: 600, overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
            <img src={featured.img} alt={featured.h}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: featured.pos }} />
          </div>
          <div>
            <div style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.labRed, letterSpacing: '0.24em', marginBottom: 18 }}>
              {featured.n} · {featured.cat} · {featured.date}
            </div>
            <h2 style={{ ...T.h2, margin: 0, color: FNX.pineInk }}>
              {featured.h}
            </h2>
            <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.85, color: FNX.pineInk, maxWidth: '46ch' }}>
              {featured.sub}
            </p>
            <p style={{ marginTop: 16, fontSize: 13, lineHeight: 1.85, color: FNX.sage, maxWidth: '52ch' }}>
              Nine weeks of a molecule quieting the surface. What we prescribe is consistency, not efficacy — the idea that eight minutes a day keep the surface from dulling.
            </p>
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 18, paddingTop: 18, borderTop: `1px solid ${fnxRule(0.18)}` }}>
              <span style={{ fontSize: 12, color: FNX.pineInk, fontFamily: FNX.serif, letterSpacing: '0.04em' }}>
                {featured.author}
              </span>
              <span style={{ width: 1, height: 12, background: fnxRule(0.3) }}/>
              <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>{featured.minutes.toUpperCase()}</span>
              <span style={{ flex: 1 }}/>
              <Btn kind="ghost" size="md" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Read →</Btn>
            </div>
          </div>
        </div>
      </Section>

      {/* GRID */}
      <Section bg={FNX.parchment} padding="100px 40px">
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 40, borderBottom: `1px solid ${fnxRule(0.2)}`, paddingBottom: 22 }}>
          <h2 style={{ ...T.h2, margin: 0, color: FNX.pineInk }}>All Dispatches.</h2>
          <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>SORT · NEWEST</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {articles.map(a => (
            <article key={a.n} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
                <img src={a.img} alt={a.h} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: a.pos }} />
              </div>
              <div style={{ marginTop: 18, fontFamily: FNX.mono, fontSize: 12, color: FNX.tan, letterSpacing: '0.14em' }}>
                {a.cat.toUpperCase()} · {a.date.toUpperCase()}
              </div>
              <h3 style={{ margin: '10px 0 8px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 24, lineHeight: 1.2, letterSpacing: '-0.01em' }}>{a.h}</h3>
              <span style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', color: FNX.sage, textTransform: 'uppercase', marginTop: 8 }}>Read →</span>
            </article>
          ))}
        </div>

        {/* pagination */}
        <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center', gap: 8, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em' }}>
          {['‹', '01', '02', '03', '04', '›'].map((p, i) => (
            <span key={i} style={{
              minWidth: 36, height: 36, padding: '0 10px',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              border: `1px solid ${i === 1 ? FNX.pineInk : fnxRule(0.18)}`,
              color: i === 1 ? FNX.pineInk : FNX.sage,
              background: i === 1 ? FNX.bone : 'transparent',
              cursor: 'pointer',
            }}>{p}</span>
          ))}
        </div>
      </Section>

      

      <SiteFooter variant="pine" />
    </div>
  );
};

window.JournalPage = JournalPage;
