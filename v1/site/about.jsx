// About — Brand Story

const AboutPage = () => {
  const { t } = useLocale();
  const pillars = [
    { n:'01', t:{ en:'Honest concentration', ko:'정직한 농도', ja:'正直な濃度' },     d:{ en:'Active concentrations stated on the label, in the language of prescription rather than marketing.', ko:'마케팅의 언어가 아닌, 처방의 언어로. 활성 성분의 농도를 라벨 위에 그대로 적습니다.', ja:'マーケティングではなく処方の言葉で。有効成分の濃度をそのままラベルに記します。' } },
    { n:'02', t:{ en:'Clinic to everyday', ko:'일상이 된 클리닉', ja:'日常になるクリニック' }, d:{ en:'The essence of procedures, distilled into eight daily minutes. Measurable change instead of heavy promises.', ko:'시술의 본질을 하루 8분에 담았습니다. 무거운 약속 대신, 측정 가능한 변화를.', ja:'施術の本質を一日8分に。重い約束ではなく、測れる変化を。' } },
    { n:'03', t:{ en:'Quiet ritual', ko:'조용한 의식', ja:'静かな儀式' },     d:{ en:'The quietest touch. Consistency is what shapes skin in the end.', ko:'가장 조용한 손길. 결국 피부를 만드는 것은 꾸준함입니다.', ja:'もっとも静かな手つき。肌をかたちづくるのは、結局つづけることです。' } },
    { n:'04', t:{ en:'Slow Asia', ko:'슬로우 아시아', ja:'スロー アジア' },     d:{ en:'From Seoul to Shanghai, Tokyo and Ho Chi Minh. The poetic restraint of Korean indie beauty placed alongside clinical honesty.', ko:'서울에서 상하이, 도쿄와 호치민까지. 한국 인디 뷰티의 시적인 절제를 임상적 정직함 곁에 둡니다.', ja:'ソウルから上海、東京、ホーチミンへ。韓国インディビューティーの詩的な抑制を、臨床的な正直さのそばに。' } },
  ];

  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />

      {/* HERO */}
      <section style={{ background: FNX.cream, padding: '88px 56px 100px', position: 'relative' }}>
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={FNX.sage}>
              <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background: FNX.labRed, marginRight: 10, verticalAlign: 'middle' }}/>
              {t({ en:'About Finixlab', ko:'Finixlab 소개', ja:'Finixlab について' })}
            </RuleLabel>
            <h1 style={{ ...T.hero, margin: '28px 0 0', color: FNX.pineInk }}>
              {t({ en:'A quiet pharmacy of light.', ko:'빛의 조용한 약방.', ja:'光の、静かな薬房。' })}
            </h1>
            <p style={{ marginTop: 28, fontSize: 16, lineHeight: 1.85, color: FNX.pineInk, maxWidth: '46ch' }}>
              {t({ en:'Finixlab is a slow-aging brand that brings together clinical peptide concentrations and the poetic restraint of Korean indie beauty. A pharmacy-clean shelf of prescriptions, with a touch as quiet as midday light.', ko:'Finixlab은 임상적인 펩타이드 농도와 한국 인디 뷰티의 시적인 절제를 함께 담은 슬로우 에이징 브랜드입니다. 약방처럼 정갈한 처방의 선반, 그리고 한낮의 빛처럼 조용한 손길.', ja:'Finixlab は、臨床的なペプチド濃度と韓国インディビューティーの詩的な抑制をひとつにしたスローエイジングブランドです。薬房のように清潔な処方の棚と、真昼の光のように静かな手つき。' })}
            </p>
            <div className="r3" style={{ marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, paddingTop: 24, borderTop: `1px solid ${fnxRule(0.18)}` }}>
              {[
                { k:'2024', v:{ en:'Founded · Seoul', ko:'설립 · 서울', ja:'設立 · ソウル' } },
                { k:'04', v:{ en:'Cities · KR/CN/JP/VN', ko:'도시 · KR/CN/JP/VN', ja:'都市 · KR/CN/JP/VN' } },
                { k:'31', v:{ en:'Clinic Partners', ko:'클리닉 파트너', ja:'クリニックパートナー' } },
              ].map(s => (
                <div key={s.k}>
                  <div style={{ fontFamily: FNX.serif, fontSize: 28, lineHeight: 1 }}>{s.k}</div>
                  <div style={{ marginTop: 6, fontSize: 12, color: FNX.sage, letterSpacing: '0.06em' }}>{t(s.v)}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ height: 680, overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
            <img src="../assets/peptosome-pair.jpg" alt="Peptosome pair"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
          </div>
        </div>
      </section>

      {/* FOUNDER'S LETTER */}
      <Section bg={FNX.parchment} padding="120px 40px">
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
          <div>
            <RuleLabel align="left" color={FNX.sage}>{t({ en:"Founder's Letter · 01", ko:'창업자의 편지 · 01', ja:'創業者の手紙 · 01' })}</RuleLabel>
            <h2 style={{ margin: '20px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.2 }}>
              {t({ en:'The bottle, in lower case.', ko:'소문자로 쓰인 한 병.', ja:'小文字で書かれた、一本。' })}
            </h2>
            <div style={{ marginTop: 28, paddingTop: 18, borderTop: `1px solid ${fnxRule(0.18)}` }}>
              <div style={{ fontFamily: FNX.serif, fontSize: 16 }}>Hyungju Park</div>
              <div style={{ marginTop: 4, fontSize: 12, color: FNX.sage, letterSpacing: '0.06em' }}>{t({ en:'Founder', ko:'창업자', ja:'創業者' })}</div>
              <div style={{ marginTop: 14, fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>{t({ en:'Seoul · April 2024', ko:'서울 · 2024년 4월', ja:'ソウル · 2024年4月' })}</div>
            </div>
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.95, color: FNX.pineInk, columnCount: 2, columnGap: 48 }}>
            <p style={{ margin: 0, breakInside: 'avoid' }}>
              <span style={{ float:'left', fontFamily: FNX.serif, fontSize: 72, lineHeight: 0.85, marginRight: 12, marginTop: 6, fontWeight: 300 }}>O</span>{t({ en:'nce I started watching patients sit in front of the mirror for days after a procedure, I knew. The brief stillness of softened expressions, slowly returning to everyday lines — and I wondered, what if we could prescribe something for those days.', ko:'시술을 마친 환자들이 며칠씩 거울 앞에 앉아 있는 모습을 지켜보면서, 나는 알게 되었습니다. 부드러워진 표정의 짧은 고요함이, 천천히 일상의 주름으로 돌아가는 그 시간. 그 며칠을 위해 무언가를 처방할 수 있다면, 하고 생각했습니다.', ja:'施術を終えた患者たちが、何日も鏡の前に座っている姿を見つめるうちに、私は気づきました。やわらいだ表情のつかの間の静けさが、ゆっくりと日常の線へ戻っていく。その数日のために、何かを処方できたなら、と。' })}
            </p>
            <p style={{ margin: '16px 0 0' }}>
              {t({ en:'Finixlab is for those in-between days. Not an alternative to procedures, but a way to carry their essence into daily skin. While a single prescription stays with you each day, we prescribe the quietest possible ritual.', ko:'Finixlab은 그 사이의 날들을 위한 것입니다. 시술을 대신하는 것이 아니라, 그 본질을 매일의 피부로 옮겨오는 방법. 하루하루 곁에 머무는 한 번의 처방으로, 우리는 가장 조용한 의식을 처방합니다.', ja:'Finixlab は、その「あいだの日々」のためにあります。施術の代わりではなく、その本質を毎日の肌へと運ぶ方法。一日ごとに寄り添う一度の処方として、もっとも静かな儀式を処方します。' })}
            </p>
            <p style={{ margin: '16px 0 0' }}>
              {t({ en:'Concentrations are stated on the label. VAMTOXIN™ 2%, Niacinamide 4%, Spicule 0.5% — concentration before narrative. The nine-week study is the measure of that honesty, arranged like a single prescription.', ko:'농도는 라벨 위에 그대로 적습니다. VAMTOXIN™ 2%, Niacinamide 4%, Spicule 0.5% — 이야기보다 먼저, 농도. 9주간의 연구는 그 정직함의 척도로, 한 번의 처방처럼 정리되어 있습니다.', ja:'濃度はそのままラベルに記します。VAMTOXIN™ 2%、Niacinamide 4%、Spicule 0.5% — 物語よりもまず、濃度。9週間の研究は、その正直さのものさしとして、一度の処方のように整えられています。' })}
            </p>
            <p style={{ margin: '16px 0 0', color: FNX.sage, fontSize: 14 }}>
              {t({ en:'What we prescribe is consistency, not efficacy. Eight minutes a day that keep the surface from dulling — that single thing, as quietly as possible.', ko:'우리가 처방하는 것은 효능이 아니라 꾸준함입니다. 피부 표면이 흐려지지 않게 지키는 하루 8분 — 그 한 가지를, 가능한 한 조용하게.', ja:'私たちが処方するのは、効能ではなく、つづけること。肌の表面がくすまないよう保つ一日8分 — その一つを、できるだけ静かに。' })}
            </p>
          </div>
        </div>
      </Section>

      {/* PILLARS — 4 principles */}
      <Section bg={FNX.cream} padding="120px 40px">
        <RuleLabel align="left" color={FNX.tan}>{t({ en:'02 — Principles', ko:'02 — 원칙', ja:'02 — 原則' })}</RuleLabel>
        <h2 style={{ ...T.h2, margin: '14px 0 40px', color: FNX.pineInk }}>
          {t({ en:'Four quiet principles.', ko:'네 가지 조용한 원칙.', ja:'四つの、静かな原則。' })}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px 64px' }}>
          {pillars.map(p => (
            <div key={p.n} style={{ paddingTop: 28, borderTop: `1px solid ${fnxRule(0.18)}` }}>
              <h3 style={{ margin: '16px 0 14px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 32, lineHeight: 1.15 }}>{t(p.t)}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.85, color: FNX.pineInk, maxWidth: '52ch' }}>{t(p.d)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* LAB IMAGE STRIP */}
      <section style={{ background: FNX.parchment, padding: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 560 }}>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="../assets/serum-trio.png" alt={t({ en:'Lab collection', ko:'랩 컬렉션', ja:'ラボ コレクション' })}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
          </div>
          <div style={{ padding: '88px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <RuleLabel align="left" color={FNX.tan}>{t({ en:'03 — The Lab', ko:'03 — 랩', ja:'03 — ラボ' })}</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.pineInk }}>
              {t({ en:'Made in Seoul, by hand and instrument.', ko:'서울에서, 손과 장비로 만듭니다.', ja:'ソウルで、手と機器によって。' })}
            </h2>
            <p style={{ marginTop: 24, fontSize: 15, lineHeight: 1.85, color: FNX.pineInk, maxWidth: '42ch' }}>
              {t({ en:'All products are produced in small batches at our Seoul lab and GMP-certified partner facilities. A new batch every eight weeks, with batch numbers printed on every label.', ko:'모든 제품은 서울 랩과 GMP 인증 파트너 시설에서 소량으로 생산됩니다. 8주마다 새로운 배치, 그리고 모든 라벨에 인쇄된 배치 번호.', ja:'すべての製品は、ソウルのラボと GMP 認証パートナー施設で少量ずつ生産されます。8週ごとの新しいバッチ、そしてすべてのラベルに印刷されたバッチ番号。' })}
            </p>
            <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {[
                { k:'GMP', v:'CGMP · ISO 22716' },
                { k:'IRB', v:{ en:'Clinical · Seoul', ko:'임상 · 서울', ja:'臨床 · ソウル' } },
                { k:'PETA',v:{ en:'Cruelty-free · Vegan', ko:'동물실험 없음 · 비건', ja:'動物実験なし · ヴィーガン' } },
                { k:'EWG', v:{ en:'Green · skin-safe', ko:'그린 · 피부 안전', ja:'グリーン · 肌にやさしい' } },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 12, padding: '12px 0', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
                  <span style={{ fontFamily: FNX.serif, fontSize: 16, letterSpacing: '0.04em' }}>{c.k}</span>
                  <span style={{ fontSize: 12, color: FNX.sage }}>{t(c.v)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <Section bg={FNX.cream} padding="120px 40px">
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>{t({ en:'04 — Sustainability', ko:'04 — 지속가능성', ja:'04 — サステナビリティ' })}</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.pineInk }}>
              {t({ en:'Quietly considered for the earth.', ko:'지구를 위한 조용한 고민.', ja:'地球のための、静かな配慮。' })}
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
            {[
              { t:{ en:'PCR Glass', ko:'PCR 유리', ja:'PCR ガラス' }, d:{ en:'Glass bottles use 60% recycled glass. Labels printed on FSC-certified paper.', ko:'유리병은 60% 재생 유리를 사용합니다. 라벨은 FSC 인증 종이에 인쇄됩니다.', ja:'ガラス瓶は60%の再生ガラスを使用。ラベルは FSC 認証紙に印刷しています。' } },
              { t:{ en:'Refill-Ready', ko:'리필 가능', ja:'リフィル対応' }, d:{ en:'From spring 2026, 50ml bottles run on a refill system. Bring back the bottle for −15% off.', ko:'2026년 봄부터 50ml 보틀은 리필 시스템으로 운영됩니다. 빈 병을 가져오시면 −15%.', ja:'2026年春から、50ml ボトルはリフィルシステムで運用します。空きボトルのお持ち込みで −15%。' } },
              { t:{ en:'Local Batch', ko:'로컬 배치', ja:'ローカル バッチ' }, d:{ en:'Small-batch production at GMP partner facilities to minimize shipping distance.', ko:'운송 거리를 줄이기 위해 GMP 파트너 시설에서 소량으로 생산합니다.', ja:'輸送距離を抑えるため、GMP パートナー施設で少量ずつ生産しています。' } },
              { t:{ en:'1% for Skin', ko:'1% for Skin', ja:'1% for Skin' }, d:{ en:'1% of revenue is donated to a Korean dermatology research fellowship.', ko:'매출의 1%를 한국 피부과학 연구 펠로십에 기부합니다.', ja:'売上の1%を、韓国の皮膚科学研究フェローシップに寄付しています。' } },
            ].map((c, i) => (
              <div key={i} style={{ paddingTop: 24, borderTop: `1px solid ${fnxRule(0.18)}` }}>
                <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 22 }}>{t(c.t)}</h3>
                <p style={{ margin: '12px 0 0', fontSize: 13, lineHeight: 1.7, color: FNX.pineInk }}>{t(c.d)}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CLINIC PARTNERS */}
      <Section bg={FNX.olive} padding="120px 40px" style={{ color: FNX.cream }}>
        <RuleLabel align="left" color={fnxCream(0.55)}>{t({ en:'05 — Clinic Partners', ko:'05 — 클리닉 파트너', ja:'05 — クリニックパートナー' })}</RuleLabel>
        <h2 style={{ ...T.h2, margin: '14px 0 40px', color: FNX.cream }}>
          {t({ en:'A network of slow-thinking clinics.', ko:'천천히 생각하는 클리닉의 네트워크.', ja:'ゆっくり考えるクリニックのネットワーク。' })}
        </h2>
        <div className="r4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {[
            { c:{ en:'Seoul · 14', ko:'서울 · 14', ja:'ソウル · 14' }, n:['Cheongdam Skin Lab', 'Hannam-dong Clinic', 'Yongsan Dermal', 'Yeoksam Aesthetics', { en:'+ 10 partners', ko:'+ 파트너 10곳', ja:'+ パートナー10施設' }] },
            { c:{ en:'Shanghai · 6', ko:'상하이 · 6', ja:'上海 · 6' }, n:['Xintiandi Dermatology', 'Jing\'an Skin Studio', 'Pudong Aesthetics', { en:'+ 3 partners', ko:'+ 파트너 3곳', ja:'+ パートナー3施設' }] },
            { c:{ en:'Tokyo · 5', ko:'도쿄 · 5', ja:'東京 · 5' }, n:['Aoyama Clinic', 'Daikanyama Skin', 'Ginza Dermal', { en:'+ 2 partners', ko:'+ 파트너 2곳', ja:'+ パートナー2施設' }] },
            { c:{ en:'HCMC · 3', ko:'호치민 · 3', ja:'ホーチミン · 3' }, n:['District 1 Skin Studio', 'Thao Dien Clinic', { en:'+ 1 partner', ko:'+ 파트너 1곳', ja:'+ パートナー1施設' }] },
          ].map((city, ci) => (
            <div key={ci} style={{ paddingTop: 22, borderTop: `1px solid ${fnxCream(0.18)}` }}>
              <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 22, letterSpacing: '0.04em' }}>{t(city.c)}</h3>
              <ul style={{ listStyle: 'none', margin: '18px 0 0', padding: 0, display: 'grid', gap: 8, fontSize: 12, color: fnxCream(0.82) }}>
                {city.n.map((p, pi) => <li key={pi}>· {t(p)}</li>)}
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
