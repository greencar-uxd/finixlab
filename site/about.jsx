// About — Brand Story

const AboutPage = () => {
  const pillars = [
    { n:'01', t:'Honesty in concentration', k:'Honest concentration',     d:'Active concentrations stated on the label, in the language of prescription rather than marketing.' },
    { n:'02', t:'Clinic in everyday',       k:'Clinic to everyday', d:'The essence of procedures, distilled into eight daily minutes. Measurable change instead of heavy promises.' },
    { n:'03', t:'A quiet ritual',           k:'Quiet ritual',     d:'The quietest touch. Consistency is what shapes skin in the end.' },
    { n:'04', t:'Slow Asia',                k:'Slow Asia',     d:'From Seoul to Shanghai, Tokyo and Ho Chi Minh. The poetic restraint of Korean indie beauty placed alongside clinical honesty.' },
  ];

  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />

      {/* HERO */}
      <section style={{ background: FNX.cream, padding: '88px 56px 100px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={FNX.sage}>
              <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background: FNX.labRed, marginRight: 10, verticalAlign: 'middle' }}/>
              About Finixlab
            </RuleLabel>
            <h1 style={{ ...T.hero, margin: '28px 0 0', color: FNX.pineInk }}>
              A quiet pharmacy of light.
            </h1>
            <p style={{ marginTop: 28, fontSize: 16, lineHeight: 1.85, color: FNX.pineInk, maxWidth: '46ch' }}>
              Finixlab is a slow-aging brand that brings together clinical peptide concentrations and the poetic restraint of Korean indie beauty. A pharmacy-clean shelf of prescriptions, with a touch as quiet as midday light.
            </p>
            <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, paddingTop: 24, borderTop: `1px solid ${fnxRule(0.18)}` }}>
              {[
                { k:'2024', v:'Founded · Seoul' },
                { k:'04', v:'Cities · KR/CN/JP/VN' },
                { k:'31', v:'Clinic Partners' },
              ].map(s => (
                <div key={s.k}>
                  <div style={{ fontFamily: FNX.serif, fontSize: 28, lineHeight: 1 }}>{s.k}</div>
                  <div style={{ marginTop: 6, fontSize: 12, color: FNX.sage, letterSpacing: '0.06em' }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ height: 680, overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
            <img src="assets/peptosome-pair.jpg" alt="Peptosome pair"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
          </div>
        </div>
      </section>

      {/* FOUNDER'S LETTER */}
      <Section bg={FNX.parchment} padding="120px 40px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
          <div>
            <RuleLabel align="left" color={FNX.sage}>Founder's Letter · 01</RuleLabel>
            <h2 style={{ margin: '20px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.2 }}>
              The bottle, in lower case.
            </h2>
            <div style={{ marginTop: 28, paddingTop: 18, borderTop: `1px solid ${fnxRule(0.18)}` }}>
              <div style={{ fontFamily: FNX.serif, fontSize: 16 }}>Hyungju Park</div>
              <div style={{ marginTop: 4, fontSize: 12, color: FNX.sage, letterSpacing: '0.06em' }}>Founder</div>
              <div style={{ marginTop: 14, fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>Seoul · April 2024</div>
            </div>
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.95, color: FNX.pineInk, columnCount: 2, columnGap: 48 }}>
            <p style={{ margin: 0, breakInside: 'avoid' }}>
              <span style={{ float:'left', fontFamily: FNX.serif, fontSize: 72, lineHeight: 0.85, marginRight: 12, marginTop: 6, fontWeight: 300 }}>O</span>nce I started watching patients sit in front of the mirror for days after a procedure, I knew. The brief stillness of softened expressions, slowly returning to everyday lines — and I wondered, what if we could prescribe something for those days.
            </p>
            <p style={{ margin: '16px 0 0' }}>
              Finixlab is for those in-between days. Not an alternative to procedures, but a way to carry their essence into daily skin. While a single prescription stays with you each day, we prescribe the quietest possible ritual.
            </p>
            <p style={{ margin: '16px 0 0' }}>
              Concentrations are stated on the label. VAMTOXIN™ 2%, Niacinamide 4%, Spicule 0.5% — concentration before narrative. The nine-week study is the measure of that honesty, arranged like a single prescription.
            </p>
            <p style={{ margin: '16px 0 0', color: FNX.sage, fontSize: 14 }}>
              What we prescribe is consistency, not efficacy. Eight minutes a day that keep the surface from dulling — that single thing, as quietly as possible.
            </p>
          </div>
        </div>
      </Section>

      {/* PILLARS — 4 principles */}
      <Section bg={FNX.cream} padding="120px 40px">
        <RuleLabel align="left" color={FNX.tan}>02 — Principles</RuleLabel>
        <h2 style={{ ...T.h2, margin: '14px 0 40px', color: FNX.pineInk }}>
          Four quiet principles.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px 64px' }}>
          {pillars.map(p => (
            <div key={p.n} style={{ paddingTop: 28, borderTop: `1px solid ${fnxRule(0.18)}` }}>
              <h3 style={{ margin: '16px 0 14px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 32, lineHeight: 1.15 }}>{p.t}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.85, color: FNX.pineInk, maxWidth: '52ch' }}>{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* LAB IMAGE STRIP */}
      <section style={{ background: FNX.parchment, padding: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 560 }}>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="assets/serum-trio.png" alt="Lab collection"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
          </div>
          <div style={{ padding: '88px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <RuleLabel align="left" color={FNX.tan}>03 — The Lab</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.pineInk }}>
              Made in Seoul, by hand and instrument.
            </h2>
            <p style={{ marginTop: 24, fontSize: 15, lineHeight: 1.85, color: FNX.pineInk, maxWidth: '42ch' }}>
              All products are produced in small batches at our Seoul lab and GMP-certified partner facilities. A new batch every eight weeks, with batch numbers printed on every label.
            </p>
            <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {[
                { k:'GMP', v:'CGMP · ISO 22716' },
                { k:'IRB', v:'Clinical · Seoul' },
                { k:'PETA',v:'Cruelty-free · Vegan' },
                { k:'EWG', v:'Green · skin-safe' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 12, padding: '12px 0', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
                  <span style={{ fontFamily: FNX.serif, fontSize: 16, letterSpacing: '0.04em' }}>{c.k}</span>
                  <span style={{ fontSize: 12, color: FNX.sage }}>{c.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <Section bg={FNX.cream} padding="120px 40px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>04 — Sustainability</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.pineInk }}>
              Quietly considered for the earth.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
            {[
              { t:'PCR Glass', d:'Glass bottles use 60% recycled glass. Labels printed on FSC-certified paper.' },
              { t:'Refill-Ready', d:'From spring 2026, 50ml bottles run on a refill system. Bring back the bottle for −15% off.' },
              { t:'Local Batch', d:'Small-batch production at GMP partner facilities to minimize shipping distance.' },
              { t:'1% for Skin', d:'1% of revenue is donated to a Korean dermatology research fellowship.' },
            ].map((c, i) => (
              <div key={c.t} style={{ paddingTop: 24, borderTop: `1px solid ${fnxRule(0.18)}` }}>
                <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 22 }}>{c.t}</h3>
                <p style={{ margin: '12px 0 0', fontSize: 13, lineHeight: 1.7, color: FNX.pineInk }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CLINIC PARTNERS */}
      <Section bg={FNX.olive} padding="120px 40px" style={{ color: FNX.cream }}>
        <RuleLabel align="left" color="rgba(244,239,224,0.55)">05 — Clinic Partners</RuleLabel>
        <h2 style={{ ...T.h2, margin: '14px 0 40px', color: FNX.cream }}>
          A network of slow-thinking clinics.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {[
            { c:'Seoul · 14', n:['Cheongdam Skin Lab', 'Hannam-dong Clinic', 'Yongsan Dermal', 'Yeoksam Aesthetics', '+ 10 partners'] },
            { c:'Shanghai · 6', n:['Xintiandi Dermatology', 'Jing\'an Skin Studio', 'Pudong Aesthetics', '+ 3 partners'] },
            { c:'Tokyo · 5', n:['Aoyama Clinic', 'Daikanyama Skin', 'Ginza Dermal', '+ 2 partners'] },
            { c:'HCMC · 3', n:['District 1 Skin Studio', 'Thao Dien Clinic', '+ 1 partner'] },
          ].map(city => (
            <div key={city.c} style={{ paddingTop: 22, borderTop: '1px solid rgba(244,239,224,0.18)' }}>
              <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 22, letterSpacing: '0.04em' }}>{city.c}</h3>
              <ul style={{ listStyle: 'none', margin: '18px 0 0', padding: 0, display: 'grid', gap: 8, fontSize: 12, color: 'rgba(244,239,224,0.82)' }}>
                {city.n.map(p => <li key={p}>· {p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <SiteFooter variant="pine" />
    </div>
  );
};

window.AboutPage = AboutPage;
