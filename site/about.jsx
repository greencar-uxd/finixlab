// About — Brand Story (Recovery Skin Science)
// Reflects client brand philosophy (2026.07): Perspective · Mission · Identity · Promise · For You

const AboutPage = () => {
  const { t } = useLocale();

  const promiseDont = [
    { en: 'We don’t sell exaggerated anti-aging', ko: '과장된 안티에이징을 말하지 않습니다', ja: '誇張したアンチエイジングを語りません' },
    { en: 'We don’t promise fast results', ko: '빠른 효과를 약속하지 않습니다', ja: '速い効果を約束しません' },
    { en: 'We don’t rely on harsh ingredients', ko: '자극적인 성분에 기대지 않습니다', ja: '刺激的な成分に頼りません' },
  ];
  const promiseDo = [
    { en: 'Recovery-centered formulation', ko: '회복력 중심의 처방', ja: '回復力を軸にした処方' },
    { en: 'Designs that respect the skin barrier', ko: '피부 장벽을 존중하는 설계', ja: '肌バリアを尊重する設計' },
    { en: 'Research into long-term skin health', ko: '장기적인 피부 건강 연구', ja: '長期的な肌の健康の研究' },
  ];

  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />

      {/* HERO */}
      <section style={{ background: FNX.cream, padding: '88px 40px 100px', position: 'relative' }}>
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center', maxWidth: 1320, margin: '0 auto' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: FNX.sage }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: FNX.labRed }}/>
              {t({ en: 'Brand Story · Recovery Skin Science', ko: '브랜드 스토리 · Recovery Skin Science', ja: 'ブランドストーリー · Recovery Skin Science' })}
            </div>
            <h1 style={{ margin: '28px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 50, lineHeight: 1.14, letterSpacing: '-0.02em', color: FNX.pineInk, whiteSpace: 'pre-line' }}>
              {t({
                en: 'Skin doesn’t age.\nIt loses its power\nto recover.',
                ko: '피부는 나이를 먹는 것이\n아니라, 회복력을\n잃어갑니다.',
                ja: '肌は年を取るのではなく、\n時間の中で回復力を\n失っていく。',
              })}
            </h1>
            <p style={{ marginTop: 28, fontSize: 16, lineHeight: 1.9, color: FNX.pineInk, maxWidth: '46ch' }}>
              {t({
                en: 'FINIXLAB is a slow-aging derma brand that studies the skin’s own power to recover — so your skin can rise again.',
                ko: 'FINIXLAB은 피부 스스로의 회복력을 연구하는 슬로우에이징 더마 브랜드입니다. 당신의 피부가 다시 비상할 수 있도록.',
                ja: 'FINIXLABは、肌自身の回復力を研究するスローエイジング ダーマブランドです。あなたの肌が、再び羽ばたけるように。',
              })}
            </p>
          </div>
          <div style={{ height: 640, overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
            <img src="assets/duo-on-stone.jpg" alt={t({ en: 'FINIXLAB', ko: 'FINIXLAB', ja: 'FINIXLAB' })}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 62%' }} />
          </div>
        </div>
      </section>

      {/* 01 — PERSPECTIVE */}
      <Section bg={FNX.parchment} padding="120px 40px">
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <RuleLabel align="center" color={FNX.tan}>{t({ en: '01 — Our Perspective', ko: '01 — 관점', ja: '01 — 視点' })}</RuleLabel>
          <h2 style={{ margin: '20px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 40, lineHeight: 1.28, letterSpacing: '-0.01em', color: FNX.pineInk }}>
            {t({
              en: 'Real change begins with the skin’s own power to recover.',
              ko: '진짜 변화는 피부가 스스로 회복하는 힘에서 시작됩니다.',
              ja: '本当の変化は、肌が自ら回復する力から始まります。',
            })}
          </h2>
          <p style={{ margin: '28px auto 0', fontSize: 16, lineHeight: 1.95, color: FNX.sage, maxWidth: '58ch' }}>
            {t({
              en: 'FINIXLAB does not try to force time backward. Instead, we help skin age slowly and in good health — not chasing what has passed, but caring for the power to recover that remains.',
              ko: 'FINIXLAB은 시간을 억지로 되돌리려 하지 않습니다. 대신 피부가 천천히, 그리고 건강하게 나이 들어갈 수 있도록 돕습니다. 지나간 것을 좇기보다, 남아 있는 회복의 힘을 돌봅니다.',
              ja: 'FINIXLABは時間を無理に巻き戻そうとはしません。代わりに、肌がゆっくりと、健やかに年を重ねられるよう寄り添います。過ぎたものを追うのではなく、残された回復の力をいたわります。',
            })}
          </p>
        </div>
      </Section>

      {/* 02 — MISSION */}
      <Section bg={FNX.cream} padding="120px 40px">
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 72, alignItems: 'center' }}>
          <div style={{ height: 520, overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
            <img src="assets/peptosome-pair.jpg" alt={t({ en: 'FINIXLAB lab', ko: 'FINIXLAB 랩', ja: 'FINIXLAB ラボ' })}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
          </div>
          <div>
            <RuleLabel align="left" color={FNX.tan}>{t({ en: '02 — Mission', ko: '02 — 미션', ja: '02 — ミッション' })}</RuleLabel>
            <h2 style={{ margin: '18px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 40, lineHeight: 1.18, letterSpacing: '-0.01em', whiteSpace: 'pre-line' }}>
              {t({
                en: 'A regenerative derma brand\nstudying baseline recovery.',
                ko: '근본 컨디션의 회복을 연구하는\n재생 더마 브랜드.',
                ja: '根本コンディションの回復を研究する\n再生ダーマブランド。',
              })}
            </h2>
            <p style={{ marginTop: 26, fontSize: 16, lineHeight: 1.9, color: FNX.pineInk, maxWidth: '48ch' }}>
              {t({
                en: 'FINIXLAB researches how skin recovers its baseline condition. Before the immediate results on the surface, we look first at the conditions that let skin recover on its own.',
                ko: 'FINIXLAB은 피부의 근본 컨디션 회복을 연구하는 재생(再生) 더마 브랜드입니다. 겉으로 드러나는 즉각적인 결과보다, 피부가 스스로 회복하는 힘의 조건을 먼저 살핍니다.',
                ja: 'FINIXLABは、肌の根本コンディションの回復を研究する再生ダーマブランドです。表面に現れる即時の結果よりも、肌が自ら回復するための条件をまず見つめます。',
              })}
            </p>
          </div>
        </div>
      </Section>

      {/* 03 — IDENTITY (phoenix) */}
      <Section bg={FNX.pineInk} padding="120px 40px" style={{ color: FNX.cream }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <RuleLabel align="center" color={fnxCream(0.82)}>{t({ en: '03 — Identity', ko: '03 — 아이덴티티', ja: '03 — アイデンティティ' })}</RuleLabel>
          <h2 style={{ margin: '20px 0 0', fontFamily: FNX.serif, fontWeight: 200, fontSize: 52, lineHeight: 1.1, letterSpacing: '-0.01em', color: FNX.cream }}>
            {t({ en: 'FINIXLAB — skin that rises again.', ko: 'FINIXLAB — 다시 비상하는 피부.', ja: 'FINIXLAB — 再び羽ばたく肌。' })}
          </h2>
          <p style={{ margin: '28px auto 0', fontSize: 16, lineHeight: 1.95, color: fnxCream(0.85), maxWidth: '56ch' }}>
            {t({
              en: 'The name comes from the phoenix — the bird that raises itself again. Tired, depleted skin regaining its power to recover and rising once more: that moment of recovery is the story FINIXLAB tells.',
              ko: '브랜드 이름은 스스로를 다시 일으키는 불사조(Phoenix)에서 비롯되었습니다. 지치고 무너진 피부가 회복력을 되찾아 다시 비상하는 순간 — FINIXLAB이 이야기하는 것은 바로 그 회복의 서사입니다.',
              ja: 'ブランド名は、自らを再び起こす不死鳥（フェニックス）に由来します。疲れ、崩れた肌が回復力を取り戻し、再び羽ばたく瞬間 — FINIXLABが語るのは、その回復の物語です。',
            })}
          </p>
        </div>
      </Section>

      {/* 04 — PROMISE */}
      <Section bg={FNX.cream} padding="120px 40px">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
          <RuleLabel align="center" color={FNX.tan}>{t({ en: '04 — Our Promise', ko: '04 — 약속', ja: '04 — 約束' })}</RuleLabel>
          <h2 style={{ margin: '18px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 44, letterSpacing: '-0.01em', lineHeight: 1.12 }}>
            {t({ en: 'What we don’t promise, and what we do.', ko: '약속하지 않는 것, 그리고 약속하는 것.', ja: '約束しないこと、そして約束すること。' })}
          </h2>
        </div>
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ background: FNX.bone, border: `1px solid ${fnxRule(0.14)}`, padding: '40px 36px' }}>
            <div style={{ fontFamily: FNX.serif, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: FNX.sage }}>{t({ en: 'We don’t', ko: '하지 않는 것', ja: 'しないこと' })}</div>
            <ul style={{ listStyle: 'none', margin: '20px 0 0', padding: 0, display: 'grid', gap: 4 }}>
              {promiseDont.map((p, i) => (
                <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'baseline', padding: '16px 0', borderTop: i > 0 ? `1px solid ${fnxRule(0.14)}` : 'none', fontSize: 16, lineHeight: 1.5, color: FNX.sage }}>
                  <span style={{ color: FNX.tan, fontSize: 15 }}>✕</span>{t(p)}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: FNX.pineInk, color: FNX.cream, padding: '40px 36px' }}>
            <div style={{ fontFamily: FNX.serif, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: fnxCream(0.72) }}>{t({ en: 'Instead, we do', ko: '대신 하는 것', ja: '代わりにすること' })}</div>
            <ul style={{ listStyle: 'none', margin: '20px 0 0', padding: 0, display: 'grid', gap: 4 }}>
              {promiseDo.map((p, i) => (
                <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'baseline', padding: '16px 0', borderTop: i > 0 ? `1px solid ${fnxCream(0.16)}` : 'none', fontSize: 16, lineHeight: 1.5, color: FNX.cream }}>
                  <span style={{ color: FNX.labRed, fontSize: 15 }}>✓</span>{t(p)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 05 — FOR YOU */}
      <Section bg={FNX.parchment} padding="120px 40px">
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <RuleLabel align="center" color={FNX.tan}>{t({ en: '05 — For You', ko: '05 — 소비자에게', ja: '05 — あなたへ' })}</RuleLabel>
          <h2 style={{ margin: '20px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 44, lineHeight: 1.2, letterSpacing: '-0.01em', color: FNX.pineInk }}>
            {t({ en: 'Skin is not a competition — it’s something you care for.', ko: '피부는 경쟁이 아니라, 관리의 대상입니다.', ja: '肌は競争ではなく、ケアの対象です。' })}
          </h2>
          <p style={{ margin: '28px auto 0', fontSize: 16, lineHeight: 1.95, color: FNX.sage, maxWidth: '56ch' }}>
            {t({
              en: 'Not faster, not stronger — but looking at your own skin over time and caring for it. FINIXLAB does not try to beat your skin; it stays beside you, aging together.',
              ko: '더 빠르게, 더 강하게가 아니라 — 나의 피부를 오래 들여다보고 돌보는 일. FINIXLAB은 피부를 이기려 하지 않고, 함께 나이 들어가는 방식으로 당신의 곁에 머뭅니다.',
              ja: 'より速く、より強くではなく — 自分の肌を長く見つめ、いたわること。FINIXLABは肌に勝とうとはせず、ともに歳を重ねる形であなたのそばに寄り添います。',
            })}
          </p>
          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Btn kind="primary" size="lg" data-go="shop">{t({ en: 'See the Product Line →', ko: '제품 라인업 보기 →', ja: '製品ラインナップを見る →' })}</Btn>
            <Btn kind="ghost" size="lg" style={{ color: FNX.pineInk, borderColor: FNX.pineInk }} data-go="contact">{t({ en: 'Contact Us', ko: '문의하기', ja: 'お問い合わせ' })}</Btn>
          </div>
        </div>
      </Section>

      <SiteFooter variant="pine" />
    </div>
  );
};

window.AboutPage = AboutPage;
