// Shop Index — Product List

const ShopPage = () => {
  const { t } = useLocale();
  const products = [
    {
      n:'N°01', t:{ en:'Peptosome Skin Booster', ko:'펩토좀 스킨 부스터', ja:'ペプトソーム スキンブースター' },
      tagline:{ en:'All-in-one skin boosting solution, revitalized by Peptosome.', ko:'펩토좀으로 되살아나는 올인원 스킨 부스팅 솔루션.', ja:'ペプトソームで生まれ変わる、オールインワンの肌ブースティングソリューション。' },
      desc:{ en:'A booster that keeps expressions soft.', ko:'표정을 부드럽게 지켜주는 부스터.', ja:'表情をやわらかく保つブースター。' },
      price:'₩96,000', size:'50ml',
      img:'assets/booster-bottle-front.png', pos:'50% center',
      tags:[{ en:'Hero', ko:'대표 제품', ja:'ヒーロー' }, { en:'VAMTOXIN™ 2%', ko:'VAMTOXIN™ 2%', ja:'VAMTOXIN™ 2%' }, { en:'Bestseller', ko:'베스트셀러', ja:'ベストセラー' }],
      stock:{ en:'In stock', ko:'재고 있음', ja:'在庫あり' },
      cat:'Booster',
    },
    {
      n:'N°02', t:{ en:'Spicule Wrinkle-Free Glow Serum', ko:'스피큘 링클프리 글로우 세럼', ja:'スピキュール リンクルフリー グロウ セラム' },
      tagline:{ en:'Radiant Renewal. VAMTOXIN™ 2.0% · Niacinamide.', ko:'빛나는 리뉴얼. VAMTOXIN™ 2.0% · 나이아신아마이드.', ja:'輝くリニューアル。VAMTOXIN™ 2.0% · ナイアシンアミド。' },
      desc:{ en:'Clarity that settles over fine lines.', ko:'잔주름 위에 내려앉는 맑음.', ja:'小じわの上に行き渡る透明感。' },
      price:'₩58,000', size:'20ml',
      img:'assets/serum-quartet.png', pos:'50% center',
      tags:[{ en:'New', ko:'신제품', ja:'新発売' }, { en:'Niacinamide', ko:'나이아신아마이드', ja:'ナイアシンアミド' }, { en:'Spot Care', ko:'스팟 케어', ja:'スポットケア' }],
      stock:{ en:'In stock', ko:'재고 있음', ja:'在庫あり' },
      cat:'Serum',
    },
    {
      n:'N°03', t:{ en:'Notox Cream — Coming Soon', ko:'노톡스 크림 — 출시 예정', ja:'ノトックス クリーム — 近日発売' },
      tagline:{ en:'The final seal. VAMTOXIN™ 1.5% in a velvet cream.', ko:'마지막 봉인. 벨벳 크림에 담은 VAMTOXIN™ 1.5%.', ja:'最後の封印。ベルベットクリームに込めたVAMTOXIN™ 1.5%。' },
      desc:{ en:'A final seal, the lightest cream.', ko:'마지막을 봉인하는 가장 가벼운 크림.', ja:'仕上げを封じる、最も軽やかなクリーム。' },
      price:'TBA', size:'50ml',
      img:'assets/duo-on-stone.jpg', pos:'50% 70%',
      tags:[{ en:'Coming · FW 26', ko:'출시 예정 · FW 26', ja:'近日発売 · FW 26' }, { en:'Cream', ko:'크림', ja:'クリーム' }],
      stock:{ en:'Notify me', ko:'알림 신청', ja:'通知を受け取る' },
      cat:'Cream',
      muted:true,
    },
  ];

  const sets = [
    {
      n:'SET-01', t:{ en:'Peptosome — Couple Set', ko:'펩토좀 — 커플 세트', ja:'ペプトソーム — カップルセット' },
      info:{ en:'50ml × 2', ko:'50ml × 2', ja:'50ml × 2' }, price:'₩172,800', save:'−10%',
      img:'assets/peptosome-pair.jpg', pos:'50% 30%',
    },
    {
      n:'SET-02', t:{ en:'The Collection — Duo', ko:'더 컬렉션 — 듀오', ja:'ザ・コレクション — デュオ' },
      info:{ en:'50ml + 20ml', ko:'50ml + 20ml', ja:'50ml + 20ml' }, price:'₩142,000', save:'−8%',
      img:'assets/duo-on-stone.jpg', pos:'50% center',
    },
    {
      n:'SET-03', t:{ en:'Sample Trial — Try All', ko:'샘플 체험 — 전 제품 체험', ja:'サンプル トライアル — 全種お試し' },
      info:{ en:'5ml × 2 · with usage card', ko:'5ml × 2 · 사용 가이드 카드 포함', ja:'5ml × 2 · 使い方カード付き' }, price:'₩12,000',
      img:'assets/serum-box-single.png', pos:'50% center',
    },
  ];

  const filters = {
    Category: [{ en:'All', ko:'전체', ja:'すべて' }, { en:'Booster', ko:'부스터', ja:'ブースター' }, { en:'Serum', ko:'세럼', ja:'セラム' }, { en:'Cream', ko:'크림', ja:'クリーム' }, { en:'Sets', ko:'세트', ja:'セット' }],
    Concern:  [{ en:'All', ko:'전체', ja:'すべて' }, { en:'Slow Aging', ko:'슬로우 에이징', ja:'スローエイジング' }, { en:'Texture', ko:'결 관리', ja:'キメ' }, { en:'Wrinkle', ko:'주름', ja:'シワ' }, { en:'Glow', ko:'광채', ja:'ツヤ' }, { en:'Hydration', ko:'수분', ja:'うるおい' }],
    Format:   [{ en:'All', ko:'전체', ja:'すべて' }, { en:'Bottle', ko:'보틀', ja:'ボトル' }, { en:'Tube', ko:'튜브', ja:'チューブ' }, { en:'Sample', ko:'샘플', ja:'サンプル' }],
  };
  const filterLabels = {
    Category: { en:'Category', ko:'카테고리', ja:'カテゴリー' },
    Concern:  { en:'Concern', ko:'고민', ja:'お悩み' },
    Format:   { en:'Format', ko:'형태', ja:'タイプ' },
  };

  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />

      {/* MASTHEAD */}
      <section style={{ background: FNX.cream, padding: '64px 40px 48px', borderBottom: `1px solid ${fnxRule(0.18)}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end' }}>
          <div>
            <RuleLabel align="left" color={FNX.sage}>
              <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background: FNX.labRed, marginRight: 10, verticalAlign: 'middle' }}/>
              {t({ en:'The Collection · Vol. 01 / 2026', ko:'더 컬렉션 · Vol. 01 / 2026', ja:'ザ・コレクション · Vol. 01 / 2026' })}
            </RuleLabel>
            <h1 style={{ ...T.hero, margin: '24px 0 0', color: FNX.pineInk }}>
              {t({ en:'Shop.', ko:'숍.', ja:'ショップ。' })}
            </h1>
            <p style={{ marginTop: 20, fontSize: 16, color: FNX.pineInk, opacity: 0.78, maxWidth: '44ch', letterSpacing: '-0.01em' }}>
              {t({ en:'Three prescriptions — a booster, a serum, and a closing cream. Every concentration on the label.', ko:'세 가지 처방 — 부스터, 세럼, 그리고 마무리 크림. 모든 농도를 라벨에 그대로.', ja:'三つの処方 — ブースター、セラム、そして仕上げのクリーム。すべての濃度をラベルに明記。' })}
            </p>
          </div>
          <div style={{ textAlign: 'right', fontFamily: FNX.serif, fontSize: 12, color: FNX.sage, letterSpacing: '0.06em', lineHeight: 1.8 }}>
            <div>{products.length} {t({ en:'pieces', ko:'제품', ja:'品' })} · {sets.length} {t({ en:'sets', ko:'세트', ja:'セット' })}</div>
            <div>{t({ en:'Free shipping over ₩60,000', ko:'₩60,000 이상 무료배송', ja:'₩60,000以上で送料無料' })}</div>
            <div>{t({ en:'Ships worldwide', ko:'전 세계 배송', ja:'世界中へ配送' })}</div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div style={{ background: FNX.cream, padding: '24px 40px', borderBottom: `1px solid ${fnxRule(0.18)}`, display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        {Object.entries(filters).map(([k, v]) => (
          <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.sage }}>{t(filterLabels[k])}</span>
            <div style={{ display: 'flex', gap: 6 }}>
              {v.map((f, i) => (
                <button type="button" key={f.en} style={{
                  font: 'inherit',
                  padding: '6px 12px', borderRadius: 999,
                  border: `1px solid ${i === 0 ? FNX.pineInk : fnxRule(0.18)}`,
                  color: i === 0 ? FNX.pineInk : FNX.sage,
                  background: i === 0 ? FNX.bone : 'transparent',
                  fontSize: 12, letterSpacing: '0.06em', cursor: 'pointer',
                }}>{t(f)}</button>
              ))}
            </div>
          </div>
        ))}
        <span style={{ flex: 1 }}/>
        <button type="button" style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em', border: 'none', background: 'transparent', cursor: 'pointer', padding: 0 }}>{t({ en:'SORT · FEATURED ▾', ko:'정렬 · 추천순 ▾', ja:'並び替え · おすすめ順 ▾' })}</button>
      </div>

      {/* PRODUCT GRID */}
      <Section bg={FNX.cream} padding="80px 40px">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32, paddingBottom: 18, borderBottom: `1px solid ${fnxRule(0.2)}` }}>
          <h2 style={{ ...T.h2, margin: 0, color: FNX.pineInk }}>{t({ en:'Single Pieces.', ko:'단품.', ja:'単品。' })}</h2>
          <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>{products.length} {t({ en:'ITEMS', ko:'개', ja:'点' })}</span>
        </div>

        <div className="r3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {products.map(p => (
            <div key={p.n} data-go="shop/peptosome" role="link" tabIndex={0}
              onKeyDown={(e)=>{ if(e.key==='Enter'){ location.hash = '#/shop/peptosome'; } }}
              style={{
              textDecoration: 'none', color: 'inherit', cursor: 'pointer',
              background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`,
              opacity: p.muted ? 0.78 : 1, position: 'relative', display: 'block',
            }}>
              <div style={{ aspectRatio: '3/4', overflow: 'hidden', position: 'relative', background: FNX.cream }}>
                <img src={p.img} alt={t(p.t)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.pos }} />
              </div>
              <div style={{ padding: '24px 24px 28px' }}>
                <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 24, lineHeight: 1.15, letterSpacing: '-0.01em' }}>{t(p.t)}</h3>
                <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.7, color: FNX.sage }}>{t(p.tagline)}</p>

                <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.slice(1).map(tag => (
                    <span key={tag.en} style={{
                      padding: '4px 10px', border: `1px solid ${fnxRule(0.18)}`, borderRadius: 999,
                      fontSize: 12, letterSpacing: '0.08em', color: FNX.sage,
                    }}>{t(tag)}</span>
                  ))}
                </div>

                <div style={{ marginTop: 22, paddingTop: 16, borderTop: `1px solid ${fnxRule(0.16)}`, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontFamily: FNX.serif, fontSize: 20, letterSpacing: '0.04em' }}>{p.price}</span>
                    <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em', marginLeft: 8 }}>{p.size}</span>
                  </div>
                  <span style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: p.muted ? FNX.sage : FNX.pineInk }}>{t(p.stock)}</span>
                </div>

                <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: p.muted ? '1fr' : '1fr auto', gap: 10 }}>
                  {p.muted ? (
                    <Btn kind="ghost" full size="md" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Notify Me →', ko:'재입고 알림 →', ja:'入荷通知 →' })}</Btn>
                  ) : (
                    <>
                      <Btn kind="primary" full onClick={() => window.fnxToast && window.fnxToast(t({ en:'Added to bag', ko:'장바구니에 담았습니다', ja:'バッグに追加しました' }))}>{t({ en:'Add to Bag', ko:'장바구니 담기', ja:'バッグに追加' })}</Btn>
                      <Btn kind="ghost" size="md" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Detail →', ko:'자세히 →', ja:'詳細 →' })}</Btn>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SETS */}
      <Section bg={FNX.parchment} padding="80px 40px">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32, paddingBottom: 18, borderBottom: `1px solid ${fnxRule(0.2)}` }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>{t({ en:'02 — Sets & Rituals', ko:'02 — 세트 & 리추얼', ja:'02 — セット & リチュアル' })}</RuleLabel>
            <h2 style={{ ...T.h2, margin: '12px 0 0', color: FNX.pineInk }}>{t({ en:'Together, a discount.', ko:'함께라면, 더 좋은 가격.', ja:'まとめて、お得に。' })}</h2>
          </div>
          <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>{sets.length} {t({ en:'SETS', ko:'세트', ja:'セット' })}</span>
        </div>

        <div className="r3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {sets.map(s => (
            <article key={s.n} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 0, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <div style={{ overflow: 'hidden', position: 'relative', background: FNX.cream }}>
                <img src={s.img} alt={t(s.t)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.pos }} />
              </div>
              <div style={{ padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.24em' }}>{s.n}</span>
                    {s.save && (
                      <span style={{ fontFamily: FNX.serif, fontSize: 12, color: FNX.labRed, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{s.save}</span>
                    )}
                  </div>
                  <h3 style={{ margin: '14px 0 6px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 20, lineHeight: 1.2 }}>{t(s.t)}</h3>
                  <div style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em' }}>{t(s.info).toUpperCase()}</div>
                </div>
                <div style={{ marginTop: 16, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: FNX.serif, fontSize: 18, letterSpacing: '0.04em' }}>{s.price}</span>
                  <Btn kind="ghost" size="sm" data-go="shop" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }}>{t({ en:'Shop →', ko:'숍 →', ja:'ショップ →' })}</Btn>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* SAMPLE / TRIAL */}
      <Section bg={FNX.olive} padding="80px 40px" style={{ color: FNX.cream }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={fnxCream(0.55)}>{t({ en:'03 — Before You Commit', ko:'03 — 결정하기 전에', ja:'03 — 決める前に' })}</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.cream }}>
              {t({ en:'Try the ritual at sample size.', ko:'리추얼을 샘플 사이즈로 먼저.', ja:'リチュアルをサンプルサイズで。' })}
            </h2>
            <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.85, color: fnxCream(0.85), maxWidth: '42ch' }}>
              {t({ en:'Two weeks of booster and serum at 5ml each — to see which prescription suits your skin first.', ko:'부스터와 세럼을 각 5ml씩 2주간 — 어떤 처방이 내 피부에 맞는지 먼저 확인하세요.', ja:'ブースターとセラムを各5ml、2週間 — どの処方が肌に合うかをまず確かめて。' })}
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 14 }}>
              <Btn kind="inverse">{t({ en:'Order Sample · ₩12,000', ko:'샘플 주문 · ₩12,000', ja:'サンプルを注文 · ₩12,000' })}</Btn>
              <Btn kind="ghost" style={{ color: FNX.cream, borderColor: FNX.cream }}>{t({ en:'How to Choose →', ko:'고르는 법 →', ja:'選び方 →' })}</Btn>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { k:'14 days', v:{ en:'Trial duration', ko:'체험 기간', ja:'お試し期間' } },
              { k:'2 × 5ml', v:{ en:'Booster + Serum', ko:'부스터 + 세럼', ja:'ブースター + セラム' } },
              { k:'KR ₩0', v:{ en:'Shipping included', ko:'배송비 포함', ja:'送料込み' } },
              { k:'−15%', v:{ en:'Credit on next order', ko:'다음 주문 적립', ja:'次回注文クレジット' } },
            ].map((b, i) => (
              <div key={i} style={{ padding: 22, border: `1px solid ${fnxCream(0.2)}` }}>
                <div style={{ fontFamily: FNX.serif, fontSize: 26, letterSpacing: '0.02em' }}>{b.k}</div>
                <div style={{ marginTop: 8, fontSize: 12, color: fnxCream(0.82), letterSpacing: '0.06em' }}>{t(b.v)}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <SiteFooter variant="pine" />
    </div>
  );
};

window.ShopPage = ShopPage;
