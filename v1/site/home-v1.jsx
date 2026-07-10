// Home V1 — Recovery Skin Science (desktop)
// Structure per client IA (2026.07 brand update): HERO · OUR BRANDS · CONTACT

const HomeV1 = () => {
  const { t } = useLocale();

  const brands = [
    {
      no: 'Brand 01',
      name: 'FINIXLAB',
      role: { en: 'Daily Slow Aging Care', ko: '데일리 슬로우 에이징 케어', ja: 'デイリー スローエイジングケア' },
      desc: {
        en: 'Built on the skin’s power to recover, FINIXLAB is a slow-aging derma brand that keeps daily skin condition healthy — from inner dryness, texture and radiance to fine lines, daily conditioning care that helps skin age well.',
        ko: 'FINIXLAB은 피부 회복력을 바탕으로, 매일의 피부 컨디션을 건강하게 가꾸는 슬로우에이징 더마 브랜드입니다. 속건조, 피부결, 윤기, 주름 고민까지 — 피부가 건강하게 나이 들어갈 수 있도록 일상 속 데일리 컨디셔닝 케어를 제안합니다.',
        ja: '肌の回復力を土台に、毎日の肌コンディションを健やかに育てるスローエイジング ダーマブランド。インナードライ・キメ・ツヤ・シワの悩みまで、日常のデイリーコンディショニングケアを提案します。',
      },
      cta: { en: 'View FINIXLAB Products →', ko: 'FINIXLAB 제품 보기 →', ja: 'FINIXLAB 製品を見る →' },
      concerns: [
        { en: 'Inner Dryness', ko: '속건조', ja: 'インナードライ' },
        { en: 'Texture', ko: '피부결', ja: 'キメ' },
        { en: 'Radiance', ko: '윤기', ja: 'ツヤ' },
        { en: 'Fine Lines', ko: '주름', ja: 'シワ' },
      ],
      products: [
        { n: 'Peptosome Skin Booster' },
        { n: 'Spicule Wrinkle-Free Glow Serum' },
      ],
      img: '../assets/peptosome-pair.jpg', pos: '50% center', go: 'shop',
    },
    {
      no: 'Brand 02',
      name: 'PureRX',
      role: { en: 'Professional Recovery Care', ko: '프로페셔널 리커버리 케어', ja: 'プロフェッショナル リカバリーケア' },
      desc: {
        en: 'PureRX is a professional recovery derma brand for sensitized skin — a calm, stable recovery solution for sensitive skin, depleted condition, and skin that needs expert-level home care.',
        ko: 'PureRX는 민감해진 피부 컨디션을 위한 전문 리커버리 더마 브랜드입니다. 민감 피부, 피부 컨디션 저하, 전문적인 홈케어가 필요한 피부를 위해 편안하고 안정적인 리커버리 솔루션을 제안합니다.',
        ja: 'PureRXは、敏感になった肌コンディションのための専門リカバリー ダーマブランド。敏感肌、コンディション低下、専門的なホームケアが必要な肌へ、穏やかで安定したリカバリーソリューションを提案します。',
      },
      cta: { en: 'View PureRX Products →', ko: 'PureRX 제품 보기 →', ja: 'PureRX 製品を見る →' },
      concerns: [
        { en: 'Sensitive Skin', ko: '민감 피부', ja: '敏感肌' },
        { en: 'Depleted Condition', ko: '컨디션 저하', ja: 'コンディション低下' },
        { en: 'Pro Home-Care', ko: '전문 홈케어', ja: 'プロ仕様ホームケア' },
      ],
      products: [
        { n: 'PDRN RX Ampoule', soon: true },
      ],
      img: '../assets/serum-box-single.png', pos: '50% center', go: 'shop',
    },
  ];

  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />

      {/* ===================== HERO ===================== */}
      {/* HERO — v1 archive keeps the original cream-heavy editorial split */}
      <section style={{ background: FNX.cream, padding: '80px 40px 100px', position: 'relative' }}>
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'center', maxWidth: 1320, margin: '0 auto' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: FNX.sage }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: FNX.labRed }}/>
              Recovery Skin Science
            </div>
            <h1 style={{ margin: '28px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 56, lineHeight: 1.1, letterSpacing: '-0.02em', color: FNX.pineInk, whiteSpace: 'pre-line' }}>
              {t({
                en: 'Skin doesn’t age.\nIt loses its power\nto recover.',
                ko: '피부는 나이를\n먹는 것이 아니라,\n회복력을 잃어갑니다.',
                ja: '肌は年を取るの\nではなく、回復力を\n失っていく。',
              })}
            </h1>
            <p style={{ marginTop: 32, maxWidth: '48ch', fontSize: 15, lineHeight: 1.9, color: FNX.pineInk }}>
              {t({
                en: 'FINIXLAB is a slow-aging derma brand that studies the skin’s power to recover. Rather than promising fast change, we research how skin regains its own healthy balance and stays beautiful for the long term.',
                ko: 'FINIXLAB은 피부 회복력을 연구하는 슬로우에이징 더마 브랜드입니다. 빠른 변화를 약속하기보다, 피부가 스스로 건강한 균형을 되찾고 오래도록 아름다운 피부를 유지할 수 있도록 연구합니다.',
                ja: 'FINIXLABは、肌の回復力を研究するスローエイジング ダーマブランドです。速い変化を約束するのではなく、肌が自ら健康なバランスを取り戻し、長く美しい肌を保てるよう研究します。',
              })}
            </p>
            <p style={{ marginTop: 22, fontFamily: FNX.serif, fontWeight: 300, fontStyle: 'italic', fontSize: 21, letterSpacing: '-0.01em', color: FNX.pine }}>
              {t({ en: 'So your skin can rise again.', ko: '당신의 피부가 다시 비상할 수 있도록.', ja: 'あなたの肌が、再び羽ばたけるように。' })}
            </p>
            <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Btn kind="primary" size="lg" data-go="about">{t({ en: 'Read the Brand Story →', ko: '브랜드 스토리 보기 →', ja: 'ブランドストーリーを見る →' })}</Btn>
              <Btn kind="ghost" size="lg" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go="shop">{t({ en: 'See the Product Line', ko: '제품 라인업 보기', ja: '製品ラインナップを見る' })}</Btn>
            </div>
          </div>

          {/* Framed hero still — original v1 treatment */}
          <div style={{ position: 'relative' }}>
            <ProductShot src="../assets/booster-hero.png" alt={t({ en: 'FINIXLAB Peptosome Skin Booster', ko: 'FINIXLAB 펩토좀 스킨 부스터', ja: 'FINIXLAB ペプトソーム スキンブースター' })} height={680} objectPosition="50% 40%" bg={FNX.bone} frame />
          </div>
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', left: 40, bottom: 28, display: 'flex', alignItems: 'center', gap: 10, fontFamily: FNX.mono, fontSize: 11, letterSpacing: '0.2em', color: FNX.sage }}>
          <span>SCROLL</span><span style={{ fontSize: 14 }}>↓</span>
        </div>
      </section>

      {/* ===================== OUR BRANDS ===================== */}
      <Section bg={FNX.cream} padding="120px 40px">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 80px' }}>
          <RuleLabel align="center" color={FNX.tan}>{t({ en: 'Our Brands', ko: '아워 브랜드', ja: 'アワーブランド' })}</RuleLabel>
          <h2 style={{ margin: '18px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 52, letterSpacing: '-0.01em', lineHeight: 1.08 }}>
            One Philosophy. Two Brands.
          </h2>
          <p style={{ margin: '22px 0 0', fontSize: 15, lineHeight: 1.85, color: FNX.sage }}>
            {t({
              en: 'Two brands born from one philosophy of skin. They meet your skin at different moments, but the direction we pursue is the same.',
              ko: '하나의 피부 철학에서 시작된 두 개의 브랜드. 피부를 만나는 순간은 다르지만, 우리가 추구하는 방향은 같습니다.',
              ja: '一つの肌哲学から生まれた二つのブランド。肌と出会う瞬間は違っても、目指す方向は同じです。',
            })}
          </p>
        </div>

        {brands.map((b, i) => {
          const imgFirst = i % 2 === 0;
          const imgCol = (
            <div style={{ height: 620, overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <img src={b.img} alt={b.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: b.pos }} />
            </div>
          );
          const txtCol = (
            <div>
              <div style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.tan }}>
                {b.no} · {t(b.role)}
              </div>
              <h3 style={{ margin: '14px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 46, letterSpacing: '0.01em', lineHeight: 1.02 }}>{b.name}</h3>
              <p style={{ margin: '20px 0 0', fontSize: 15, lineHeight: 1.9, color: FNX.pineInk, maxWidth: '48ch' }}>{t(b.desc)}</p>

              <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {b.concerns.map((c, ci) => (
                  <span key={ci} style={{ padding: '7px 14px', borderRadius: 999, border: `1px solid ${fnxRule(0.22)}`, fontSize: 12, letterSpacing: '0.04em', color: FNX.sage }}>{t(c)}</span>
                ))}
              </div>

              <ul style={{ listStyle: 'none', margin: '28px 0 0', padding: 0 }}>
                {b.products.map((p, pi) => (
                  <li key={pi} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, padding: '16px 0', borderTop: `1px solid ${fnxRule(0.18)}` }}>
                    <span style={{ fontFamily: FNX.serif, fontSize: 19, fontWeight: 300, letterSpacing: '0.01em' }}>{p.n}</span>
                    {p.soon
                      ? <span style={{ fontFamily: FNX.mono, fontSize: 10, letterSpacing: '0.16em', color: FNX.labRed, whiteSpace: 'nowrap' }}>{t({ en: 'COMING SOON', ko: '출시 예정', ja: '近日発売' })}</span>
                      : <span style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.sage }}>→</span>}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 32 }}>
                <Btn kind="ghost" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go={b.go}>{t(b.cta)}</Btn>
              </div>
            </div>
          );
          return (
            <div key={b.name} className="rsplit" style={{
              display: 'grid', gridTemplateColumns: imgFirst ? '1.05fr 1fr' : '1fr 1.05fr', gap: 72, alignItems: 'center',
              marginBottom: i < brands.length - 1 ? 96 : 0,
            }}>
              {imgFirst ? <>{imgCol}{txtCol}</> : <>{txtCol}{imgCol}</>}
            </div>
          );
        })}

        {/* SECTION 마무리 — per client doc */}
        <p style={{ margin: '88px auto 0', textAlign: 'center', fontFamily: FNX.serif, fontWeight: 300, fontSize: 22, lineHeight: 1.6, letterSpacing: '-0.01em', color: FNX.pine, maxWidth: '40ch' }}>
          {t({
            en: 'Starting from one philosophy, we propose solutions for each skin’s own condition.',
            ko: '하나의 철학으로 시작해, 서로 다른 피부 컨디션에 맞는 솔루션을 제안합니다.',
            ja: '一つの哲学から始まり、異なる肌コンディションに合うソリューションを提案します。',
          })}
        </p>
      </Section>

      {/* ===================== CONTACT ===================== */}
      <ContactBlock />

      <SiteFooter variant="pine" />
    </div>
  );
};

window.HomeV1 = HomeV1;
