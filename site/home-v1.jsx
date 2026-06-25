// Home V1 — Editorial Hero (Cream-heavy, Aesop-influenced)
// Now actively uses product imagery throughout

const HomeV1 = () => {
  const ingredients = [
    { i:'01', n:'VAMTOXIN™ Peptide', r:'SNARE-inhibiting peptide · softens expression lines', p:'2.0%' },
    { i:'02', n:'Spicule Complex',   r:'Marine micro-needle · active delivery',    p:'0.5%' },
    { i:'03', n:'Centella Asiatica', r:'Centella · soothing · barrier support',     p:'0.5%' },
    { i:'04', n:'Niacinamide',       r:'Niacinamide · tone clarity',   p:'4.0%' },
  ];
  const ritual = [
    { n:'01', t:'Cleanse',   k:'Cleanse',   d:'Morning and evening, a gentle cleanser.' },
    { n:'02', t:'Prep',      k:'Prep',   d:'A pH-balanced toner to settle the surface.' },
    { n:'03', t:'Prescribe', k:'Prescribe',   d:'VAMTOXIN™ 2% booster, once.' },
    { n:'04', t:'Seal',      k:'Seal', d:'Seal with a light cream.' },
  ];

  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />

      {/* HERO — slogan + duo-on-stone */}
      <section style={{ background: FNX.cream, padding: '80px 40px 120px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={FNX.sage}>
              <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background: FNX.labRed, marginRight: 10, verticalAlign: 'middle' }}/>
              Notox · Botox in a Bottle · Vol. 01
            </RuleLabel>
            <div style={{ marginTop: 28 }}>
              <Slogan size="lg" en={'Real Efficacy,\nQuietly Delivered.'} ko="A daily ritual, in clinic-grade concentrations." />
            </div>
            <p style={{ marginTop: 36, maxWidth: '48ch', fontSize: 15, lineHeight: 1.85, color: FNX.pineInk }}>
              VAMTOXIN™ Peptide 2.0% — clinic-grade care distilled into a daily ritual. Concentrations stated honestly, formulated with the quietest touch.
            </p>
            <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 18 }}>
              <Btn kind="primary" size="lg" data-go="shop">Shop the Collection →</Btn>
              <Btn kind="ghost" size="lg" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go="science">Read the Science</Btn>
            </div>
            <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, paddingTop: 28, borderTop: `1px solid ${fnxRule(0.18)}` }}>
              {[
                { k:'2.0%', v:'VAMTOXIN™ Peptide' },
                { k:'N°01', v:'Supadelixir Sole Patent' },
                { k:'8 min',v:'Daily Slow Ritual' },
              ].map(s => (
                <div key={s.k}>
                  <div style={{ fontFamily: FNX.serif, fontSize: 32, fontWeight: 300, letterSpacing: '0.02em', lineHeight: 1 }}>{s.k}</div>
                  <div style={{ marginTop: 6, fontSize: 12, color: FNX.sage, letterSpacing: '0.06em' }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image — duo on stone */}
          <div style={{ position: 'relative' }}>
            <ProductShot src="assets/booster-hero.png" alt="Peptosome Skin Booster collection" height={720} objectPosition="50% 40%" bg={FNX.bone} />
          </div>
        </div>
      </section>

      {/* MOOD STATEMENT + decorative pair shot */}
      <Section bg={FNX.parchment} padding="120px 40px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
          <ProductShot src="assets/peptosome-pair.jpg" alt="Peptosome on stone" height={540} objectPosition="50% center" bg={FNX.parchment} />
          <div>
            <RuleLabel align="left" color={FNX.sage}>The Premise</RuleLabel>
            <p style={{ marginTop: 22, fontFamily: FNX.serif, fontWeight: 300, fontSize: 32, lineHeight: 1.35, letterSpacing: '-0.01em', color: FNX.pineInk }}>
              A quiet ritual that settles into skin. Honest in concentration, quietest in touch — a prescription for the time it takes skin to find its own light.
            </p>
            <p style={{ marginTop: 28, maxWidth: '52ch', fontSize: 14, lineHeight: 1.85, color: FNX.sage }}>
              Finixlab brings together clinical peptide concentrations and the poetic restraint of Korean indie beauty. Ingredients arranged like a clean shelf, finish quiet as midday light.
            </p>
          </div>
        </div>
      </Section>

      {/* THE COLLECTION — two products side by side */}
      <Section bg={FNX.cream} padding="120px 40px">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48, paddingBottom: 22, borderBottom: `1px solid ${fnxRule(0.2)}` }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>02 — The Collection</RuleLabel>
            <h2 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 56, letterSpacing: '-0.01em', lineHeight: 1.05 }}>
              Two prescriptions, one ritual.
            </h2>
            <p style={{ margin: '12px 0 0', color: FNX.sage, fontSize: 14, letterSpacing: '0.02em' }}>Two prescriptions, one ritual.</p>
          </div>
          <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>Shop All →</Btn>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Card 1 — Peptosome */}
          <article style={{ background: FNX.bone, padding: 36, border: `1px solid ${fnxRule(0.12)}` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-start' }}>
              <span style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.labRed }}>Hero</span>
            </div>
            <div style={{ marginTop: 24, height: 480, overflow: 'hidden', position: 'relative', background: FNX.cream }}>
              <img src="assets/booster-bottle-front.png" alt="Peptosome Skin Booster"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
            </div>
            <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: 24 }}>
              <div>
                <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 32, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                  Peptosome Skin Booster
                </h3>
                <p style={{ marginTop: 12, fontSize: 13, lineHeight: 1.7, color: FNX.sage, margin: '12px 0 0' }}>
                  All-in-one skin boosting solution, revitalized by Peptosome —
                  VAMTOXIN™ 2.0% — softens expression lines without injection.
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: FNX.serif, fontSize: 22, letterSpacing: '0.04em' }}>₩96,000</div>
                <div style={{ marginTop: 4, fontFamily: FNX.mono, fontSize: 11, color: FNX.sage, letterSpacing: '0.14em' }}>~$72 · 50ML</div>
              </div>
            </div>
            <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
              <Btn kind="primary" full style={{}} data-go="cart">Add to Bag</Btn>
              <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} size="md" data-go="shop/peptosome">Detail →</Btn>
            </div>
          </article>

          {/* Card 2 — Spicule serum */}
          <article style={{ background: FNX.bone, padding: 36, border: `1px solid ${fnxRule(0.12)}` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-start' }}>
              <span style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.sage }}>New</span>
            </div>
            <div style={{ marginTop: 24, height: 480, overflow: 'hidden', position: 'relative', background: FNX.cream }}>
              <img src="assets/serum-shadow.png" alt="Spicule Wrinkle-Free Glow Serum"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
            </div>
            <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: 24 }}>
              <div>
                <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 32, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                  Spicule Wrinkle-Free Glow.
                </h3>
                <p style={{ marginTop: 12, fontSize: 13, lineHeight: 1.7, color: FNX.sage, margin: '12px 0 0' }}>
                  VAMTOXIN™ 20,000ppm · Hydro Niamid™ · Hydroxycitric Acid — a single beam of clarity over fine lines.
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: FNX.serif, fontSize: 22, letterSpacing: '0.04em' }}>₩58,000</div>
                <div style={{ marginTop: 4, fontFamily: FNX.mono, fontSize: 11, color: FNX.sage, letterSpacing: '0.14em' }}>~$43 · 20ML</div>
              </div>
            </div>
            <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
              <Btn kind="primary" full style={{}} data-go="cart">Add to Bag</Btn>
              <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} size="md" data-go="shop/peptosome">Detail →</Btn>
            </div>
          </article>
        </div>
      </Section>

      {/* INGREDIENT SPOTLIGHT */}
      <Section bg={FNX.cream} padding="120px 40px" style={{ borderTop: `1px solid ${fnxRule(0.14)}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'baseline', borderBottom: `1px solid ${fnxRule(0.2)}`, paddingBottom: 24, marginBottom: 48 }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>03 — Formulation</RuleLabel>
            <h2 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 56, letterSpacing: '-0.01em', lineHeight: 1.05 }}>
              Concentration before narrative.
            </h2>
            <p style={{ margin: '12px 0 0', color: FNX.sage, fontSize: 14, letterSpacing: '0.02em' }}>Concentration before narrative.</p>
          </div>
          <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>View Full Formula →</Btn>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>
          {/* Big still image — serum-grid editorial pattern */}
          <div style={{ height: 580, overflow: 'hidden', position: 'relative', background: FNX.cream, border: `1px solid ${fnxRule(0.12)}` }}>
            <img src="assets/serum-grid.png" alt="Spicule Serum boxes grid"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
          </div>

          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {ingredients.map((x, idx) => (
              <li key={x.n} style={{
                display: 'grid', gridTemplateColumns: '40px 1fr auto',
                alignItems: 'baseline', gap: 24, padding: '24px 0',
                borderBottom: idx < ingredients.length - 1 ? `1px dashed ${fnxRule(0.15)}` : `1px solid ${fnxRule(0.25)}`,
              }}>
                <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.tan, letterSpacing: '0.14em' }}>{x.i}</span>
                <div>
                  <div style={{ fontFamily: FNX.serif, fontSize: 22, fontWeight: 300, letterSpacing: '0.02em' }}>
                    {x.n}
                    {idx === 0 && <span style={{ marginLeft: 12, fontSize: 12, color: FNX.labRed, letterSpacing: '0.16em', textTransform: 'uppercase', verticalAlign: 3 }}>Hero</span>}
                  </div>
                  <div style={{ marginTop: 6, fontSize: 13, color: FNX.sage, lineHeight: 1.55 }}>{x.r}</div>
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
          <RuleLabel align="center" color="rgba(244,239,224,0.82)">04 — The Ritual</RuleLabel>
          <h2 style={{ margin: '18px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 56, letterSpacing: '0.02em', color: FNX.cream }}>
            Four steps, eight minutes.
          </h2>
          <p style={{ margin: '12px 0 0', color: 'rgba(244,239,224,0.82)', fontSize: 14 }}>Four steps, eight minutes.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {ritual.map(r => (
            <div key={r.n} style={{ borderTop: '1px solid rgba(244,239,224,0.25)', paddingTop: 24 }}>
              <div style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.tan, letterSpacing: '0.24em' }}>{r.n}</div>
              <h3 style={{ margin: '16px 0 6px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 30, letterSpacing: '0.02em' }}>{r.t}</h3>
              <div style={{ color: 'rgba(244,239,224,0.55)', fontSize: 12, letterSpacing: '0.04em', marginBottom: 14 }}>{r.k}</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(244,239,224,0.85)', margin: 0 }}>{r.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* BEFORE / AFTER — visual only, no metrics */}
      <Section bg={FNX.cream} padding="120px 40px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>05 — Real Users · Testers</RuleLabel>
            <h2 style={{ margin: '18px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 52, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
              Before & After.
            </h2>
            <p style={{ marginTop: 22, color: FNX.pineInk, fontSize: 15, lineHeight: 1.85, maxWidth: '46ch' }}>
              A record from real users in their thirties and beyond. Instead of promising numbers, we present what time has left behind, in their own words.
            </p>
            <p style={{ marginTop: 14, color: FNX.sage, fontSize: 12, letterSpacing: '0.04em' }}>
              * Individual results vary. These are user experiences, not certified efficacy data.
            </p>
            <div style={{ marginTop: 32 }}>
              <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>View all reviews →</Btn>
            </div>
          </div>
          <div style={{ position: 'relative', height: 520, background: FNX.bone, border: `1px solid ${fnxRule(0.18)}` }}>
            <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1px 1fr' }}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src="assets/model-a-before.png" alt="Model A — before"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
              </div>
              <div style={{ background: fnxRule(0.25) }}/>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src="assets/model-a-after.png" alt="Model A — after"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* HASHTAG LIBRARY — brand copy culture */}
      <Section bg={FNX.olive} padding="100px 40px" style={{ color: FNX.cream }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color="rgba(244,239,224,0.82)">06 — The Hashtag Library</RuleLabel>
            <h2 style={{ margin: '18px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 56, lineHeight: 1.05 }}>
              Words we live in lower case.
            </h2>
            <p style={{ marginTop: 22, fontSize: 14, lineHeight: 1.85, color: 'rgba(244,239,224,0.82)', maxWidth: '36ch' }}>
              Finixlab's copy culture — a brand vocabulary of English hashtags. A single word users use to name their ritual.
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
                border: `1px solid ${h.hero ? FNX.cream : 'rgba(244,239,224,0.4)'}`,
                borderRadius: 999,
              }}>{h.t}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* JOURNAL */}
      <Section bg={FNX.parchment} padding="120px 40px">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48, borderBottom: `1px solid ${fnxRule(0.2)}`, paddingBottom: 22 }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>07 — Journal</RuleLabel>
            <h2 style={{ margin: '18px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 48, letterSpacing: '0.02em' }}>
              Dispatches & Quiet Notes.
            </h2>
          </div>
          <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>All Entries →</Btn>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            {
              t:'No.012', cat:'Slow Aging',
              h:'On The Quiet Discipline of Peptides',
              d:'How a single peptide molecule softens the texture of expression.',
              imgKind: 'still', imgSrc: 'assets/serum-pump.png', pos: '50% center',
            },
            {
              t:'No.011', cat:'Interview',
              h:'In The Cabinet of A Seoul Dermatologist',
              d:'A prescription on the clinic shelf, and a cup of tea.',
              imgKind: 'still', imgSrc: 'assets/booster-grid.png', pos: '50% center',
            },
            {
              t:'No.010', cat:'Method',
              h:'Notox · A Verb, Not a Substitute',
              d:'Not an alternative to procedures, but a daily prescription that brings them home.',
              imgKind: 'still', imgSrc: 'assets/serum-roller-green.png', pos: '50% center',
            },
          ].map((j) => (
            <article key={j.t} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
                <img src={j.imgSrc} alt={j.h}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: j.pos, display: 'block' }} />
              </div>
              <div style={{ marginTop: 18, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.sage }}>
                {j.t} · {j.cat}
              </div>
              <h3 style={{ margin: '10px 0 8px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 24, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{j.h}</h3>
              <p style={{ margin: 0, fontSize: 13, color: FNX.sage, lineHeight: 1.7 }}>{j.d}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* REVIEWS */}
      <Section bg={FNX.cream} padding="120px 40px">
        <RuleLabel align="center" color={FNX.tan}>08 — Customer Voice</RuleLabel>
        <h2 style={{ margin: '18px 0 64px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 48, letterSpacing: '0.02em', textAlign: 'center' }}>
          A few quiet sentences.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {[
            { r: 5, t:'Softer expression lines', d:'In the morning mirror I can feel the lines have softened. Without any heavy procedures, the daily texture has changed.', a:'— Kim · 38 · Seoul' },
            { r: 5, t:'A bottle that listens',  d:"My skin's tension has eased since I started — morning makeup sits differently. The quietest ritual, once a day.", a:'— Y.S. · 39 · Tokyo' },
            { r: 5, t:'Honest concentration', d:'The ingredient list is generous and clear. By week six the fine lines softened. Feels like following a prescription day by day.', a:'— Park · 45 · Busan' },
          ].map((r, i) => (
            <div key={i} style={{ padding: 32, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <div style={{ color: FNX.labRed, letterSpacing: '0.4em', fontSize: 14 }}>★★★★★</div>
              <h3 style={{ margin: '18px 0 12px', fontFamily: FNX.serif, fontSize: 22, fontWeight: 300, letterSpacing: '-0.01em' }}>{r.t}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.85, color: FNX.pineInk }}>{r.d}</p>
              <div style={{ marginTop: 18, fontSize: 12, color: FNX.sage }}>{r.a}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* STORE LOCATOR */}
      <Section bg={FNX.parchment} padding="100px 40px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>09 — Clinic Partners</RuleLabel>
            <h2 style={{ ...T.h2, margin: '18px 0 0', color: FNX.pineInk }}>
              In selected clinics, across four cities.
            </h2>
            <p style={{ marginTop: 22, ...T.body, color: FNX.pineInk, maxWidth: '40ch' }}>
              Clinical partner network — Seoul · Shanghai · Tokyo · Ho Chi Minh. As a post-procedure prescription, or a daily slow-aging ritual.
            </p>
            <Btn kind="primary" style={{ marginTop: 28 }}>Find a Clinic →</Btn>
          </div>
          <div style={{ height: 320, position: 'relative', border: '1px solid rgba(244,239,224,0.18)', overflow: 'hidden' }}>
            <img src="assets/peptosome-pair.jpg" alt="Clinic partners"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
          </div>
        </div>
      </Section>

      <SiteFooter variant="pine" />
    </div>
  );
};

window.HomeV1 = HomeV1;
