// Product Detail — Peptosome Skin Booster

const ProductPage = () => {
  const { t } = useLocale();
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />

      {/* HERO — gallery left, buy block right */}
      <section style={{ background: FNX.cream, padding: '56px 40px 96px' }}>
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>
          {/* Gallery */}
          <div>
            <div style={{ height: 720, background: FNX.bone, position: 'relative', overflow: 'hidden', border: `1px solid ${fnxRule(0.12)}` }}>
              <img src="assets/booster-hero.png" alt="Peptosome Skin Booster"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }} />
            </div>
            <div className="r4" style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {[
                { src: 'assets/peptosome-pair.jpg',       pos: '50% 30%', sel: false },
                { src: 'assets/booster-grid.png',         pos: '50% center', sel: false },
                { src: 'assets/booster-hero.png',         pos: '50% 40%', sel: true  },
                { src: 'assets/booster-bottle-front.png', pos: '50% center', sel: false },
              ].map((t, i) => (
                <div key={i} style={{
                  aspectRatio: '1/1', overflow: 'hidden', position: 'relative',
                  background: FNX.bone, border: `1px solid ${t.sel ? FNX.pineInk : fnxRule(0.12)}`,
                  cursor: 'pointer',
                }}>
                  <img src={t.src} alt=""  role="presentation"  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: t.pos }} />
                </div>
              ))}
            </div>
          </div>

          {/* Buy block */}
          <aside style={{ position: 'sticky', top: 24 }}>
            <h1 style={{ ...T.h1, margin: '14px 0 0', color: FNX.pineInk }}>
              Peptosome Skin Booster.
            </h1>
            <p style={{ marginTop: 14, fontSize: 14, color: FNX.sage }}>
              {t({ en:'All-in-one skin boosting solution, revitalized by Peptosome.', ko:'펩토좀으로 되살아난 올인원 스킨 부스팅 솔루션.', ja:'ペプトソームで生まれ変わる、オールインワンのスキンブースティング ソリューション。' })}
            </p>

            {/* rating */}
            <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 12, fontSize: 12 }}>
              <span role="img" aria-label={t({ en:'Rated 5 out of 5', ko:'별점 5점 만점에 5점', ja:'5点満点中5点' })} style={{ color: FNX.pineInk, letterSpacing: '0.36em' }}>★★★★★</span>
              <span style={{ color: FNX.sage }}>{t({ en:'4.92 / 612 reviews', ko:'4.92 / 리뷰 612개', ja:'4.92 / レビュー612件' })}</span>
            </div>

            {/* price */}
            <div style={{ marginTop: 28, paddingTop: 20, borderTop: `1px solid ${fnxRule(0.2)}`, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: FNX.serif, fontSize: 36, letterSpacing: '0.02em' }}>₩96,000 <span style={{ fontSize: 14, color: FNX.sage, marginLeft: 4 }}>/ ~$72</span></span>
              <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>50 ML · 1.7 FL.OZ</span>
            </div>

            {/* size selector */}
            <div style={{ marginTop: 24 }}>
              <div style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.sage, marginBottom: 10 }}>{t({ en:'Size', ko:'용량', ja:'サイズ' })}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <button style={{ padding: '14px 16px', border: `1px solid ${FNX.pineInk}`, background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.12em', textAlign: 'left' }}>50ml · {t({ en:'Standard', ko:'스탠다드', ja:'スタンダード' })}</button>
                <button style={{ padding: '14px 16px', border: `1px solid ${fnxRule(0.18)}`, background: 'transparent', color: FNX.sage, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.12em', textAlign: 'left' }}>5ml · {t({ en:'Sample', ko:'샘플', ja:'サンプル' })} <span style={{ color: FNX.pineInk, marginLeft: 6 }}>+ ₩4,000</span></button>
              </div>
            </div>

            {/* quantity */}
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${fnxRule(0.18)}`, paddingBottom: 16 }}>
              <span style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.sage }}>{t({ en:'Quantity', ko:'수량', ja:'数量' })}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, border: `1px solid ${fnxRule(0.2)}`, padding: '4px 10px' }}>
                <button style={{ background: 'none', border: 'none', fontSize: 16, padding: '4px 6px', cursor: 'pointer', color: FNX.pineInk }}>−</button>
                <span style={{ fontFamily: FNX.serif, fontSize: 14, minWidth: 14, textAlign: 'center' }}>1</span>
                <button style={{ background: 'none', border: 'none', fontSize: 16, padding: '4px 6px', cursor: 'pointer', color: FNX.pineInk }}>+</button>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ marginTop: 22, display: 'grid', gap: 10 }}>
              <Btn kind="primary" size="lg" full onClick={() => window.fnxToast && window.fnxToast('Added to bag')}>{t({ en:'Add to Bag', ko:'장바구니 담기', ja:'バッグに追加' })} · ₩96,000</Btn>
              <Btn kind="ghost" size="md" full style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Subscribe & Save 15%', ko:'정기구독 15% 할인', ja:'定期購入で15%オフ' })}</Btn>
            </div>

            {/* perks */}
            <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 12, color: FNX.sage, lineHeight: 1.7 }}>
              <div>↳ {t({ en:'Free shipping over ₩60,000', ko:'₩60,000 이상 무료 배송', ja:'₩60,000以上で送料無料' })}</div>
              <div>↳ {t({ en:'Free samples in every order', ko:'모든 주문에 무료 샘플 증정', ja:'全ご注文に無料サンプル' })}</div>
              <div>↳ {t({ en:'30-day return on unopened', ko:'미개봉 30일 반품 가능', ja:'未開封なら30日間返品可' })}</div>
              <div>↳ {t({ en:'Ships worldwide', ko:'전 세계 배송', ja:'世界中へ配送' })}</div>
            </div>

            {/* highlights */}
            <div style={{ marginTop: 28, padding: '20px 0', borderTop: `1px solid ${fnxRule(0.2)}`, borderBottom: `1px solid ${fnxRule(0.2)}` }}>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10, fontSize: 13 }}>
                {[
                  { k:'2.0%', v:{ en:'VAMTOXIN™ Peptide — SNARE-inhibiting peptide', ko:'VAMTOXIN™ 펩타이드 — SNARE 억제 펩타이드', ja:'VAMTOXIN™ ペプチド — SNARE阻害ペプチド' } },
                  { k:'4.0%', v:{ en:'Niacinamide — tone clarity', ko:'Niacinamide — 톤 정돈', ja:'Niacinamide — トーンクリア' } },
                  { k:'○',   v:{ en:'Roller applicator — along the grain', ko:'롤러 어플리케이터 — 결을 따라', ja:'ローラーアプリケーター — 肌の流れに沿って' } },
                  { k:'KR',   v:{ en:'Made in Seoul · Cruelty-free · Vegan', ko:'서울 제조 · 동물실험 무관 · 비건', ja:'ソウル製造 · 動物実験フリー · ヴィーガン' } },
                ].map((h, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 14, alignItems: 'baseline' }}>
                    <span style={{ fontFamily: FNX.serif, fontSize: 15, letterSpacing: '0.04em', color: FNX.pineInk }}>{h.k}</span>
                    <span style={{ color: FNX.pineInk }}>{t(h.v)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* DESCRIPTION */}
      <Section bg={FNX.parchment} padding="100px 40px">
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
          <h2 style={{ ...T.h2, margin: 0, color: FNX.pineInk }}>
            {t({ en:"An all-in-one prescription, in a bottle that doesn't shout.", ko:'요란하지 않은 한 병에 담긴 올인원 처방.', ja:'主張しすぎない一本に込めた、オールインワンの処方。' })}
          </h2>
          <div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.85, color: FNX.pineInk }}>
              {t({ en:'Peptosome Skin Booster is built around VAMTOXIN™ Peptide 2.0%. A SNARE-inhibiting peptide quiets micro-contractions in expression muscles, Niacinamide 4% evens tone, and the Spicule Complex carries efficacy into the dermis.', ko:'펩토좀 스킨 부스터는 VAMTOXIN™ 펩타이드 2.0%를 중심으로 설계되었습니다. SNARE 억제 펩타이드가 표정근의 미세 수축을 진정시키고, Niacinamide 4%가 피부 톤을 정돈하며, Spicule Complex가 유효 성분을 진피층까지 전달합니다.', ja:'ペプトソーム スキンブースターはVAMTOXIN™ ペプチド2.0%を中心に設計。SNARE阻害ペプチドが表情筋の微細な収縮を鎮め、Niacinamide 4%がトーンを整え、Spicule Complexが有効成分を真皮層へ届けます。' })}
            </p>
            <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.85, color: FNX.sage }}>
              {t({ en:"Once daily, after toner. A lightweight texture that won't interfere with whatever comes next. Quietest feel, most honest concentration.", ko:'하루 한 번, 토너 다음 단계에. 다음에 무엇이 오든 방해하지 않는 가벼운 텍스처. 가장 조용한 사용감, 가장 정직한 농도.', ja:'1日1回、化粧水のあとに。次のどんなステップも邪魔しない軽やかなテクスチャー。最も静かな使い心地と、最も誠実な濃度を。' })}
            </p>
          </div>
        </div>
      </Section>

      {/* INGREDIENTS — full INCI */}
      <Section bg={FNX.cream} padding="120px 40px">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32 }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>{t({ en:'02 — Formulation', ko:'02 — 포뮬레이션', ja:'02 — フォーミュレーション' })}</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.pineInk }}>{t({ en:'The full prescription.', ko:'전체 처방.', ja:'処方のすべて。' })}</h2>
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: FNX.sans, fontSize: 14 }}>
          <thead>
            <tr style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage, textAlign: 'left' }}>
              <th style={{ padding: '12px 0', borderBottom: `1px solid ${fnxRule(0.25)}`, width: 48 }}>{t({ en:'No.', ko:'번호', ja:'No.' })}</th>
              <th style={{ padding: '12px 0', borderBottom: `1px solid ${fnxRule(0.25)}` }}>{t({ en:'Ingredient', ko:'성분', ja:'成分' })}</th>
              <th style={{ padding: '12px 0', borderBottom: `1px solid ${fnxRule(0.25)}` }}>{t({ en:'Function', ko:'기능', ja:'はたらき' })}</th>
              <th style={{ padding: '12px 0', borderBottom: `1px solid ${fnxRule(0.25)}`, textAlign: 'right', width: 100 }}>%</th>
            </tr>
          </thead>
          <tbody>
            {[
              { i:'01', n:'VAMTOXIN™ Peptide', r:{ en:'Acetyl Hexapeptide-8 derivative · SNARE inhibitor', ko:'Acetyl Hexapeptide-8 유도체 · SNARE 억제제', ja:'Acetyl Hexapeptide-8 誘導体 · SNARE阻害剤' },  p:'2.0%', hero:true },
              { i:'02', n:'Spicule Complex',   r:{ en:'Marine sponge micro-needles · delivery aid', ko:'해양 스펀지 마이크로니들 · 전달 보조', ja:'海綿スポンジ マイクロニードル · 浸透サポート' },        p:'0.5%' },
              { i:'03', n:'Centella Asiatica', r:{ en:'Madecassoside · TECA · soothing', ko:'Madecassoside · TECA · 진정', ja:'Madecassoside · TECA · 鎮静' },                     p:'0.5%' },
              { i:'04', n:'Niacinamide',       r:{ en:'Vitamin B3 · tone · clarity', ko:'Vitamin B3 · 톤 · 투명감', ja:'Vitamin B3 · トーン · 透明感' },                     p:'4.0%' },
              { i:'05', n:'Sodium Hyaluronate',r:{ en:'Tri-weight · hydration matrix', ko:'3중 분자량 · 수분 매트릭스', ja:'3層分子量 · 水分マトリックス' },                       p:'1.2%' },
              { i:'06', n:'Panthenol',         r:{ en:'Pro-Vitamin B5 · barrier support', ko:'Pro-Vitamin B5 · 장벽 강화', ja:'Pro-Vitamin B5 · バリアサポート' },                       p:'2.0%' },
            ].map((f, i) => (
              <tr key={f.n} style={{ borderBottom: `1px dashed ${fnxRule(0.12)}` }}>
                <td style={{ padding: '20px 0', fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>{f.i}</td>
                <td style={{ padding: '20px 0', fontFamily: FNX.serif, fontSize: 18, letterSpacing: '0.04em', color: FNX.pineInk }}>
                  {f.n}
                </td>
                <td style={{ padding: '20px 0', fontSize: 13, color: FNX.sage }}>{t(f.r)}</td>
                <td style={{ padding: '20px 0', fontFamily: FNX.serif, fontSize: 18, textAlign: 'right', letterSpacing: '0.06em' }}>{f.p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      {/* HOW TO USE — ritual */}
      <Section bg={FNX.pineInk} padding="120px 40px" style={{ color: FNX.cream }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <RuleLabel align="center" color={fnxCream(0.82)}>{t({ en:'03 — How to Use', ko:'03 — 사용법', ja:'03 — 使い方' })}</RuleLabel>
          <h2 style={{ ...T.h2, margin: '18px 0 0', color: FNX.cream }}>{t({ en:'One step in a four-step ritual.', ko:'네 단계 리추얼 중 한 단계.', ja:'4ステップのリチュアルの、ひとつのステップ。' })}</h2>
        </div>
        <div className="r4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            { n:'01', t:{ en:'Cleanse', ko:'클렌즈', ja:'クレンズ' },   k:{ en:'Cleanse', ko:'클렌징', ja:'洗顔' },   d:{ en:'Morning and evening, a gentle cleanser.', ko:'아침과 저녁, 순한 클렌저로.', ja:'朝と夜、やさしいクレンザーで。' }, active: false },
            { n:'02', t:{ en:'Prep', ko:'프렙', ja:'プレップ' },      k:{ en:'Prep', ko:'준비', ja:'下準備' },   d:{ en:'One pass of pH-balanced toner.', ko:'pH 밸런스 토너를 한 번 발라.', ja:'pHバランス化粧水をひとなじみ。' }, active: false },
            { n:'03', t:{ en:'Prescribe', ko:'프리스크라이브', ja:'プリスクライブ' }, k:{ en:'Prescribe', ko:'처방', ja:'処方' },   d:{ en:'Two to three pumps of Peptosome, with the grain of skin.', ko:'펩토좀 2~3펌프를 피부 결을 따라.', ja:'ペプトソームを2〜3プッシュ、肌の流れに沿って。' }, active: true },
            { n:'04', t:{ en:'Seal', ko:'씰', ja:'シール' },      k:{ en:'Seal', ko:'마무리', ja:'仕上げ' }, d:{ en:'Seal with a light cream.', ko:'가벼운 크림으로 마무리.', ja:'軽めのクリームでフタを。' }, active: false },
          ].map(s => (
            <div key={s.n} style={{
              padding: '24px 20px', borderTop: `1px solid ${s.active ? FNX.labRed : fnxCream(0.25)}`,
              background: s.active ? fnxCream(0.06) : 'transparent',
            }}>
              <h3 style={{ margin: '14px 0 4px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 26 }}>{t(s.t)}</h3>
              <div style={{ color: fnxCream(0.72), fontSize: 12, letterSpacing: '0.04em', marginBottom: 12 }}>{t(s.k)}</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: fnxCream(0.85), margin: 0 }}>{t(s.d)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ROLLER USE — applicator demo */}
      <Section bg={FNX.parchment} padding="120px 40px">
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>{t({ en:'04 — Roller Applicator', ko:'04 — 롤러 어플리케이터', ja:'04 — ローラーアプリケーター' })}</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.pineInk }}>
              {t({ en:'The roller remembers the angle.', ko:'롤러가 각도를 기억합니다.', ja:'ローラーが角度を覚えています。' })}
            </h2>
            <p style={{ marginTop: 20, fontSize: 14, lineHeight: 1.85, color: FNX.pineInk, maxWidth: '40ch' }}>
              {t({ en:'A stainless steel roller at the bottle top — rolling along the grain disperses the formula evenly, and leaves no fingerprint oil for the quietest finish.', ko:'보틀 상단의 스테인리스 스틸 롤러 — 결을 따라 굴리면 포뮬러가 고르게 퍼지고, 손끝의 유분이 닿지 않아 가장 조용한 마무리를 남깁니다.', ja:'ボトル上部のステンレススチール ローラー — 肌の流れに沿って転がすとフォーミュラが均一に広がり、指先の皮脂がつかず最も静かな仕上がりに。' })}
            </p>
            <ol style={{ listStyle: 'none', padding: 0, margin: '28px 0 0', display: 'grid', gap: 12, fontSize: 13 }}>
              {[
                { en:'Pump one or two drops onto the roller to form a small reservoir.', ko:'롤러 위에 한두 방울을 펌핑해 작은 저장점을 만듭니다.', ja:'ローラーに1〜2滴をプッシュし、小さなたまりを作ります。' },
                { en:'Broad areas (cheeks · forehead) — inside to outside, gently.', ko:'넓은 부위(볼 · 이마) — 안쪽에서 바깥쪽으로, 부드럽게.', ja:'広い面(頬 · 額) — 内側から外側へ、やさしく。' },
                { en:'Detail areas (around eyes and mouth) — like drawing with a fine pen.', ko:'섬세한 부위(눈가와 입가) — 가는 펜으로 그리듯이.', ja:'細かい部分(目元・口元) — 細いペンで描くように。' },
                { en:'Finish by pressing evenly with palms to seal.', ko:'손바닥으로 고르게 눌러 마무리합니다.', ja:'手のひらで均一に押さえて仕上げます。' },
              ].map((s, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 14, paddingBottom: 10, borderBottom: `1px dashed ${fnxRule(0.15)}` }}>
                  <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.labRed, letterSpacing: '0.14em' }}>0{i+1}</span>
                  <span>{t(s)}</span>
                </li>
              ))}
            </ol>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, height: 480 }}>
            {[
              { c:{ en:'Pump onto roller', ko:'롤러에 펌핑', ja:'ローラーにプッシュ' }, l:'01', src: 'assets/serum-pump.png',         pos: '50% center' },
              { c:{ en:'Roll along the grain', ko:'결을 따라 롤링', ja:'肌の流れに沿ってローリング' }, l:'02', src: 'assets/serum-roller-green.png', pos: '50% center' },
              { c:{ en:'Press to settle', ko:'눌러서 안착', ja:'押さえてなじませる' },      l:'03', src: 'assets/serum-shadow.png',       pos: '50% center' },
            ].map((p, i) => (
              <div key={i} style={{
                background: FNX.bone,
                border: `1px solid ${fnxRule(0.18)}`, position: 'relative', overflow: 'hidden',
              }}>
                <img src={p.src} alt={t(p.c)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* REAL USERS — testers (replaces clinical) */}
      <Section bg={FNX.cream} padding="120px 40px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>{t({ en:'05 — Real Users · Testers', ko:'05 — 실사용자 · 테스터', ja:'05 — 実ユーザー · テスター' })}</RuleLabel>
            <h2 style={{ ...T.h2, margin: '18px 0 0', color: FNX.pineInk }}>
              {t({ en:'Before & After.', ko:'비포 & 애프터.', ja:'ビフォー & アフター。' })}
            </h2>
            <p style={{ marginTop: 18, color: FNX.pineInk, fontSize: 14, lineHeight: 1.8, maxWidth: '44ch' }}>
              {t({ en:'A record from users in their thirties and beyond. Not numbers — the sentences time has left behind.', ko:'30대 이상 사용자들이 남긴 기록. 숫자가 아니라, 시간이 남긴 문장들.', ja:'30代以上のユーザーが残した記録。数字ではなく、時間が残した言葉たち。' })}
            </p>
            <ul style={{ listStyle: 'none', margin: '28px 0 0', padding: 0, display: 'grid', gap: 14 }}>
              {[
                { en:'"The roller glide is precise; mornings are especially quiet." — Kyung, Seoul', ko:'"롤러의 글라이드가 정밀해서 아침이 특히 조용해요." — Kyung, Seoul', ja:'「ローラーの滑りが正確で、朝が特に静かです。」 — Kyung, Seoul' },
                { en:'"The texture absorbs fully before the next step." — Min, Busan', ko:'"다음 단계 전에 텍스처가 완전히 흡수돼요." — Min, Busan', ja:'「次のステップの前にテクスチャーがしっかり浸透します。」 — Min, Busan' },
                { en:`"Now I see what a single prescription can be." — Seo, Seoul`, ko:'"이제 하나의 처방이 어디까지 될 수 있는지 알겠어요." — Seo, Seoul', ja:'「ひとつの処方がここまでできると、今わかりました。」 — Seo, Seoul' },
              ].map((q, i) => (
                <li key={i} style={{ fontFamily: FNX.serif, fontSize: 14, lineHeight: 1.7, color: FNX.pineInk, paddingLeft: 16, borderLeft: `1px solid ${FNX.tan}` }}>{t(q)}</li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, height: 480 }}>
            <div style={{ position: 'relative', overflow: 'hidden', border: `1px solid ${fnxRule(0.18)}` }}>
              <img src="assets/model-b-before.png" alt={t({ en:'Model B — before', ko:'모델 B — 사용 전', ja:'モデルB — 使用前' })}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', border: `1px solid ${fnxRule(0.18)}` }}>
              <img src="assets/model-b-after.png" alt={t({ en:'Model B — after', ko:'모델 B — 사용 후', ja:'モデルB — 使用後' })}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
            </div>
          </div>
        </div>
      </Section>

      {/* REVIEWS */}
      <Section bg={FNX.parchment} padding="120px 40px">
        <div className="sechead" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 20, marginBottom: 40, borderBottom: `1px solid ${fnxRule(0.2)}`, paddingBottom: 22 }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>{t({ en:'06 — Reviews', ko:'06 — 리뷰', ja:'06 — レビュー' })}</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.pineInk }}>{t({ en:'4.92 ★ / 612 reviews', ko:'4.92 ★ / 리뷰 612개', ja:'4.92 ★ / レビュー612件' })}</h2>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage }}>
            <span>{t({ en:'Filter:', ko:'필터:', ja:'絞り込み:' })}</span>
            {[
              { en:'All', ko:'전체', ja:'すべて' },
              { en:'Photo', ko:'포토', ja:'写真' },
              { en:'5★', ko:'5★', ja:'5★' },
              { en:'4★', ko:'4★', ja:'4★' },
            ].map((f, i) => (
              <button type="button" key={f.en} style={{ font: 'inherit', padding: '6px 12px', border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.18)}`, color: i === 0 ? FNX.pineInk : FNX.sage, borderRadius: 999, background: 'transparent', cursor: 'pointer' }}>{t(f)}</button>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {[
            { r:5, t:{ en:'Softer expression lines', ko:'한결 부드러워진 표정 주름', ja:'やわらいだ表情ジワ' }, a:{ en:'Kim · 38 · Seoul · Week 6', ko:'Kim · 38 · 서울 · 6주차', ja:'Kim · 38 · ソウル · 6週目' }, d:{ en:"In the morning mirror I can feel the lines have softened. Without any heavy procedures, the daily texture has changed.", ko:'아침 거울 앞에서 주름이 부드러워진 게 느껴져요. 무리한 시술 없이도 매일의 피부결이 달라졌어요.', ja:'朝の鏡で、シワがやわらいだのを感じます。大がかりな施術なしに、毎日の肌の質感が変わりました。' } },
            { r:5, t:{ en:'Skin that feels quiet', ko:'조용해진 피부', ja:'静かに整う肌' }, a:{ en:'M.T · 36 · Shanghai · Week 7', ko:'M.T · 36 · 상하이 · 7주차', ja:'M.T · 36 · 上海 · 7週目' }, d:{ en:"Since switching, my skin's condition has improved — I look forward to morning care. The words quiet and steady come to mind.", ko:'바꾼 뒤로 피부 컨디션이 좋아져서 아침 케어가 기다려져요. 조용하고 한결같다는 말이 떠올라요.', ja:'切り替えてから肌の調子がよくなり、朝のケアが楽しみに。静かで、ぶれない、という言葉が浮かびます。' } },
            { r:5, t:{ en:'Honest concentration', ko:'정직한 농도', ja:'誠実な濃度' }, a:{ en:'Park · 45 · Busan · Week 8', ko:'Park · 45 · 부산 · 8주차', ja:'Park · 45 · 釜山 · 8週目' }, d:{ en:"The ingredient list is generous and clear. By week six the fine lines softened. Feels like following a prescription day by day.", ko:'성분 구성이 넉넉하고 명확해요. 6주차쯤 잔주름이 부드러워졌고요. 매일 처방을 따르는 기분이에요.', ja:'成分構成が惜しみなく、明快です。6週目あたりで小ジワがやわらぎました。毎日処方をたどっているような感覚です。' } },
            { r:5, t:{ en:'Gentle even for sensitive skin', ko:'민감 피부에도 순한', ja:'敏感肌にもやさしい' }, a:{ en:'Y.S · 39 · Tokyo · 6wk', ko:'Y.S · 39 · 도쿄 · 6주차', ja:'Y.S · 39 · 東京 · 6週目' }, d:{ en:"Low irritation, skin texture comes together. Morning makeup sits differently. The quietest ritual of the day.", ko:'자극이 적고 피부결이 정돈돼요. 아침 메이크업이 다르게 올라와요. 하루 중 가장 조용한 리추얼.', ja:'刺激が少なく、肌のキメが整います。朝のメイクのノリが違います。一日でいちばん静かなリチュアル。' } },
          ].map((r, i) => (
            <div key={i} style={{ padding: 32, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span role="img" aria-label={t({ en:'Rated 5 out of 5', ko:'별점 5점 만점에 5점', ja:'5点満点中5点' })} style={{ color: FNX.pineInk, letterSpacing: '0.4em', fontSize: 12 }}>★★★★★</span>
                <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>{t({ en:'VERIFIED', ko:'인증됨', ja:'認証済み' })}</span>
              </div>
              <h3 style={{ margin: '14px 0 12px', fontFamily: FNX.serif, fontSize: 22, fontWeight: 300, letterSpacing: '-0.01em' }}>{t(r.t)}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.85, color: FNX.pineInk }}>{t(r.d)}</p>
              <div style={{ marginTop: 16, fontSize: 12, color: FNX.sage, letterSpacing: '0.06em' }}>{t(r.a)}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Load More Reviews', ko:'리뷰 더 보기', ja:'レビューをもっと見る' })}</Btn>
        </div>
      </Section>

      {/* RELATED — Spicule serum */}
      <Section bg={FNX.cream} padding="100px 40px">
        <RuleLabel align="left" color={FNX.tan}>{t({ en:'07 — Pair Well With', ko:'07 — 함께 쓰면 좋은', ja:'07 — 相性の良いアイテム' })}</RuleLabel>
                <h2 style={{ ...T.h2, margin: '14px 0 40px', color: FNX.pineInk }}>{t({ en:'Continue the ritual.', ko:'리추얼을 이어가세요.', ja:'リチュアルを続けて。' })}</h2>
        <div className="r3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { src:'assets/serum-trio.png', t:'Spicule Wrinkle-Free Glow Serum', n:'N°02', p:'₩58,000', s:'20ml', pos: '50% center' },
            { src:'assets/peptosome-pair.jpg', t:'Peptosome — Couple Set', n:'SET', p:'₩172,800 (−10%)', s:'50ml × 2', pos: '50% 30%' },
            { src:'assets/duo-on-stone.jpg', t:'The Collection — Duo', n:'SET', p:'₩142,000 (−8%)', s:'50ml + 20ml', pos: '50% center' },
          ].map((p, i) => (
            <article key={p.t} style={{ background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
                <img src={p.src} alt={p.t} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 22, lineHeight: 1.2 }}>{p.t}</h3>
                <div style={{ marginTop: 12, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: FNX.serif, fontSize: 16 }}>{p.p}</span>
                  <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.16em' }}>{p.s}</span>
                </div>
                <div style={{ marginTop: 18 }}>
                  <Btn kind="ghost" full size="sm" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Detail →', ko:'자세히 →', ja:'詳細 →' })}</Btn>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <SiteFooter variant="pine" />
    </div>
  );
};

window.ProductPage = ProductPage;
