// Science — VAMTOXIN™ deep dive + Notox method

const SciencePage = () => {
  const { t } = useLocale();
  return (
    <div style={{ width: '100%', background: FNX.cream, color: FNX.pineInk, fontFamily: FNX.sans, fontWeight: 300 }}>
      <SiteHeader variant="cream" />

      {/* HERO */}
      <section style={{ background: FNX.pineInk, color: FNX.cream, padding: '88px 56px 100px', position: 'relative' }}>
        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'end', paddingTop: 24 }}>
          <div>
            <RuleLabel align="left" color={fnxCream(0.55)}>{t({ en:'The Science', ko:'사이언스', ja:'サイエンス' })}</RuleLabel>
            <h1 style={{ ...T.h1, margin: '24px 0 0', color: FNX.cream }}>
              {t({ en:'VAMTOXIN™ 2.0% — a quiet molecule.', ko:'VAMTOXIN™ 2.0% — 조용한 분자.', ja:'VAMTOXIN™ 2.0% — 静かな分子。' })}
            </h1>
            <p style={{ marginTop: 28, fontSize: 16, lineHeight: 1.85, color: fnxCream(0.85), maxWidth: '52ch' }}>
              {t({ en:'A SNARE-inhibiting hexapeptide that acts on micro-contractions in expression muscles. An injection-free prescription — the exact work of a molecule that quiets the surface.', ko:'표정근의 미세 수축에 작용하는 SNARE 억제 헥사펩타이드. 주사 없는 처방으로, 피부 표면을 가라앉히는 분자의 정확한 일.', ja:'表情筋の微細な収縮に働きかける SNARE 阻害ヘキサペプチド。注射のいらない処方として、肌の表面を静める分子の、確かな仕事。' })}
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
              <Btn kind="inverse" size="lg">{t({ en:'Read the Patent Story', ko:'특허 스토리 보기', ja:'特許ストーリーを読む' })}</Btn>
              <Btn kind="ghost" size="lg" data-go="shop/peptosome" style={{ color: FNX.cream, borderColor: FNX.cream }}>{t({ en:'Shop Peptosome →', ko:'Peptosome 보기 →', ja:'Peptosome を見る →' })}</Btn>
            </div>
          </div>
          {/* Big SNARE diagram */}
          <div style={{ aspectRatio: '1/1', background: `repeating-linear-gradient(135deg, ${fnxCream(0.06)} 0 14px, transparent 14px 28px)`, border: `1px solid ${fnxCream(0.18)}`, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: FNX.mono, fontSize: 12, color: fnxCream(0.72), letterSpacing: '0.14em' }}>FIG. 01 — VAMTOXIN™ ON SNARE</div>
              </div>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 280 280" style={{ width: 380, height: 380 }}>
                  <circle cx="140" cy="140" r="110" fill="none" stroke={FNX.cream} strokeWidth="0.6" opacity="0.3" />
                  <circle cx="140" cy="140" r="70"  fill="none" stroke={FNX.cream} strokeWidth="0.6" opacity="0.5" />
                  <circle cx="140" cy="140" r="40"  fill="none" stroke={FNX.cream} strokeWidth="0.8" opacity="0.7" />
                  <circle cx="140" cy="140" r="10"  fill={FNX.labRed} />
                  <line x1="40" y1="140" x2="240" y2="140" stroke={FNX.cream} strokeWidth="0.4" opacity="0.3" />
                  <line x1="140" y1="40" x2="140" y2="240" stroke={FNX.cream} strokeWidth="0.4" opacity="0.3" />
                  <text x="155" y="138" fontFamily="ui-monospace" fontSize="6" fill={fnxCream(0.82)}>VAMTOXIN™</text>
                  <text x="36" y="265" fontFamily="ui-monospace" fontSize="6" fill={fnxCream(0.55)}>Synaptic Membrane</text>
                  <text x="36" y="80" fontFamily="ui-monospace" fontSize="6" fill={fnxCream(0.55)}>Synaptic Vesicle</text>
                  <text x="180" y="80" fontFamily="ui-monospace" fontSize="6" fill={fnxCream(0.55)}>SNAP-25</text>
                </svg>
              </div>
              <div style={{ fontFamily: FNX.mono, fontSize: 12, color: fnxCream(0.72), letterSpacing: '0.14em', textAlign: 'right' }}>
                {t({ en:'Schematic · not to scale', ko:'개념도 · 실제 비율 아님', ja:'概念図 · 縮尺は実際と異なります' })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MECHANISM — 4 steps */}
      <Section bg={FNX.cream} padding="120px 40px">
        <RuleLabel align="left" color={FNX.tan}>{t({ en:'01 — The Mechanism', ko:'01 — 메커니즘', ja:'01 — メカニズム' })}</RuleLabel>
        <h2 style={{ ...T.h2, margin: '14px 0 40px', color: FNX.pineInk }}>
          {t({ en:'Quiet expression, at the protein level.', ko:'단백질 수준에서, 조용해지는 표정.', ja:'タンパク質のレベルで、静まる表情。' })}
        </h2>
        <div className="r4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            { n:'01', t:{ en:'Receptor Bind', ko:'수용체 결합', ja:'受容体への結合' },    d:{ en:"VAMTOXIN™'s hexapeptide residues bind to SNAP-25.", ko:'VAMTOXIN™의 헥사펩타이드 잔기가 SNAP-25에 결합합니다.', ja:'VAMTOXIN™ のヘキサペプチド残基が SNAP-25 に結合します。' } },
            { n:'02', t:{ en:'SNARE Inhibit', ko:'SNARE 억제', ja:'SNARE 阻害' },    d:{ en:'Temporarily slows SNARE complex formation.', ko:'SNARE 복합체의 형성을 일시적으로 늦춥니다.', ja:'SNARE 複合体の形成を一時的に遅らせます。' } },
            { n:'03', t:{ en:'Quiet Expression', ko:'조용한 표정', ja:'静かな表情' }, d:{ en:'Micro-contractions in expression muscles gently settle.', ko:'표정근의 미세한 수축이 부드럽게 가라앉습니다.', ja:'表情筋の微細な収縮が、やわらかく静まります。' } },
            { n:'04', t:{ en:'Skin Stillness', ko:'피부의 고요', ja:'肌の静けさ' },   d:{ en:'Wrinkle depth measurably softens; the surface settles.', ko:'주름의 깊이가 측정 가능하게 부드러워지고, 표면이 안정됩니다.', ja:'シワの深さが測れるほどやわらぎ、表面が落ち着きます。' } },
          ].map(s => (
            <div key={s.n} style={{ paddingTop: 24, borderTop: `1px solid ${fnxRule(0.18)}` }}>
              <h3 style={{ margin: '14px 0 8px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 22 }}>{t(s.t)}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: FNX.sage }}>{t(s.d)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MOLECULE FACTS */}
      <Section bg={FNX.parchment} padding="100px 40px">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 80 }}>
          {[
            [{ en:'INCI Name', ko:'INCI 명칭', ja:'INCI 名' }, 'Acetyl Hexapeptide-8 derivative'],
            [{ en:'Class', ko:'분류', ja:'分類' }, { en:'SNARE-mimicking peptide', ko:'SNARE 모방 펩타이드', ja:'SNARE 模倣ペプチド' }],
            [{ en:'Molecular Weight', ko:'분자량', ja:'分子量' }, '888.05 Da'],
            [{ en:'Charge at pH 5.5', ko:'pH 5.5에서의 전하', ja:'pH 5.5 での電荷' }, 'Net +1'],
            [{ en:'Concentration', ko:'농도', ja:'濃度' }, '2.0% (20,000 ppm)'],
            [{ en:'Permeation', ko:'침투', ja:'浸透' }, { en:'Stratum corneum · with Spicule carrier', ko:'각질층 · Spicule 캐리어와 함께', ja:'角質層 · Spicule キャリアとともに' }],
            [{ en:'Stability', ko:'안정성', ja:'安定性' }, { en:'24 months · sealed, 25°C', ko:'24개월 · 밀봉, 25°C', ja:'24ヶ月 · 密封, 25°C' }],
            [{ en:'Compatibility', ko:'호환성', ja:'相性' }, 'Niacinamide, HA, Centella, Vitamin B5'],
          ].map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24, alignItems: 'baseline', padding: '18px 0', borderBottom: `1px dashed ${fnxRule(0.18)}` }}>
              <div style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage }}>{t(row[0])}</div>
              <div style={{ fontFamily: FNX.serif, fontSize: 17, color: FNX.pineInk, letterSpacing: '0.02em' }}>{t(row[1])}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* PATENT STORY — Supadelixir VAMTOXIN™ */}
      <Section bg={FNX.cream} padding="120px 40px">
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 48, borderBottom: `1px solid ${fnxRule(0.2)}`, paddingBottom: 22 }}>
          <div>
            <RuleLabel align="left" color={FNX.tan}>{t({ en:'03 — The Patent', ko:'03 — 특허', ja:'03 — 特許' })}</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.pineInk }}>{t({ en:'Sole patent, single source.', ko:'단 하나의 특허, 단 하나의 원천.', ja:'唯一の特許、唯一の源。' })}</h2>
            <p style={{ margin: '12px 0 0', color: FNX.sage, fontSize: 14 }}>{t({ en:'VAMTOXIN™ is an ingredient held exclusively by Supadelixir.', ko:'VAMTOXIN™은 Supadelixir이 독점적으로 보유한 성분입니다.', ja:'VAMTOXIN™ は Supadelixir が独占的に保有する成分です。' })}</p>
          </div>
        </div>

        <div className="rsplit" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>
          <div>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden', position: 'relative', background: FNX.bone, border: `1px solid ${fnxRule(0.12)}` }}>
              <img src="../assets/booster-box-front.png" alt="VAMTOXIN™ Patent"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% center' }} />
            </div>
          </div>

          <div>
            <h3 style={{ margin: 0, fontFamily: FNX.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.2 }}>
              {t({ en:'Exclusively licensed, precisely formulated.', ko:'독점 라이선스로, 정밀하게 배합되어.', ja:'独占ライセンスで、緻密に処方される。' })}
            </h3>
            <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.9, color: FNX.pineInk, maxWidth: '52ch' }}>
              {t({ en:'VAMTOXIN™ is a hexapeptide that mimics the mechanism of Botulinum Toxin. Supadelixir holds the ingredient exclusively; Finixlab formulates it — an injection-free prescription at 2.0%.', ko:'VAMTOXIN™은 보툴리눔 톡신의 메커니즘을 모방한 헥사펩타이드입니다. 성분은 Supadelixir이 독점 보유하고, Finixlab이 배합합니다 — 2.0%의 주사 없는 처방으로.', ja:'VAMTOXIN™ は、ボツリヌストキシンのメカニズムを模倣したヘキサペプチドです。成分は Supadelixir が独占的に保有し、Finixlab が処方します — 2.0% の、注射のいらない処方として。' })}
            </p>

            <div style={{ marginTop: 36, display: 'grid', gap: 0 }}>
              {[
                { l:{ en:'Sole Holder', ko:'단독 보유', ja:'単独保有' },    v:'Supadelixir' },
                { l:{ en:'Mechanism', ko:'메커니즘', ja:'メカニズム' },      v:{ en:'SNARE complex inhibition — temporary expression softening', ko:'SNARE 복합체 억제 — 일시적인 표정 완화', ja:'SNARE 複合体の阻害 — 一時的な表情のやわらぎ' } },
                { l:{ en:'Design Class', ko:'설계 분류', ja:'設計分類' },   v:{ en:'Botulinum-toxin mimetic hexapeptide', ko:'보툴리눔 톡신 모방 헥사펩타이드', ja:'ボツリヌストキシン模倣ヘキサペプチド' } },
                { l:{ en:'Concentration', ko:'농도', ja:'濃度' },  v:{ en:'2.0% — Finixlab exclusive license', ko:'2.0% — Finixlab 독점 라이선스', ja:'2.0% — Finixlab 独占ライセンス' } },
                { l:{ en:'Carrier System', ko:'전달 시스템', ja:'キャリアシステム' }, v:{ en:'Spicule Complex 0.5% — injection-free delivery', ko:'Spicule Complex 0.5% — 주사 없는 전달', ja:'Spicule Complex 0.5% — 注射のいらない送達' } },
              ].map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24, padding: '18px 0', borderTop: `1px solid ${fnxRule(0.18)}`, borderBottom: i === 4 ? `1px solid ${fnxRule(0.18)}` : 'none' }}>
                  <span style={{ fontFamily: FNX.serif, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: FNX.sage }}>{t(row.l)}</span>
                  <span style={{ fontFamily: FNX.serif, fontSize: 16, color: FNX.pineInk, letterSpacing: '0.02em' }}>{t(row.v)}</span>
                </div>
              ))}
            </div>

            <p style={{ marginTop: 24, fontFamily: FNX.mono, fontSize: 12, color: FNX.sage, letterSpacing: '0.14em', lineHeight: 1.7 }}>
              {t({ en:'* Efficacy certification is in preparation. Ingredient design and concentration are stated on the label.', ko:'* 효능 인증은 준비 중입니다. 성분 설계와 농도는 라벨에 표기되어 있습니다.', ja:'* 効能認証は準備中です。成分設計と濃度はラベルに記載しています。' })}
            </p>
          </div>
        </div>
      </Section>

      {/* NOTOX METHOD */}
      <Section bg={FNX.olive} padding="120px 40px" style={{ color: FNX.cream }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <RuleLabel align="left" color={fnxCream(0.55)}>{t({ en:'04 — Notox Method', ko:'04 — Notox 메소드', ja:'04 — Notox メソッド' })}</RuleLabel>
            <h2 style={{ ...T.h2, margin: '14px 0 0', color: FNX.cream }}>
              {t({ en:'Notox — a verb, not a substitute.', ko:'Notox — 대체가 아니라, 하나의 동사.', ja:'Notox — 代わりではなく、ひとつの動詞。' })}
            </h2>
            <p style={{ marginTop: 24, fontSize: 15, lineHeight: 1.85, color: fnxCream(0.85), maxWidth: '48ch' }}>
              {t({ en:'We never claim to replace procedures. We simply fill the days between them with a daily prescription. Alongside clinical treatments, or as a daily slow-aging ritual — both in the same place.', ko:'우리는 시술을 대신한다고 말하지 않습니다. 다만 그 사이의 날들을 매일의 처방으로 채울 뿐입니다. 임상 시술과 함께, 혹은 매일의 슬로우 에이징 의식으로 — 둘 다 같은 자리에서.', ja:'私たちは施術の代わりだとは言いません。ただ、そのあいだの日々を、毎日の処方で満たすだけです。臨床的な施術とともに、あるいは毎日のスローエイジングの儀式として — どちらも同じ場所で。' })}
            </p>
            <div style={{ marginTop: 32 }}>
              <Btn kind="inverse">{t({ en:'Read the Method →', ko:'메소드 보기 →', ja:'メソッドを読む →' })}</Btn>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, fontFamily: FNX.sans }}>
            {[
              { t:{ en:'In-Clinic', ko:'클리닉에서', ja:'クリニックで' },  d:{ en:'A prescription that accelerates post-procedure recovery.', ko:'시술 후 회복을 앞당기는 처방.', ja:'施術後の回復を早める処方。' }, tag:{ en:'AFTER PROCEDURE', ko:'시술 후', ja:'施術後' } },
              { t:{ en:'At-Home', ko:'집에서', ja:'自宅で' },    d:{ en:'For days between procedures, an eight-minute daily ritual.', ko:'시술과 시술 사이의 날들을 위한, 하루 8분의 의식.', ja:'施術と施術のあいだの日々のための、一日8分の儀式。' }, tag:{ en:'DAILY RITUAL', ko:'데일리 리추얼', ja:'デイリーリチュアル' } },
              { t:{ en:'Layered', ko:'레이어드', ja:'レイヤード' },    d:{ en:'High-concentration peptide layered with hydration and soothing actives.', ko:'고농도 펩타이드를 수분·진정 성분과 함께 레이어링.', ja:'高濃度ペプチドを、保湿・鎮静成分とともにレイヤリング。' }, tag:{ en:'LAYERING', ko:'레이어링', ja:'レイヤリング' } },
              { t:{ en:'Quiet', ko:'조용함', ja:'静けさ' },      d:{ en:"Doesn't interfere with whatever comes next.", ko:'다음에 무엇이 오든, 방해하지 않습니다.', ja:'次に何が来ても、邪魔をしません。' }, tag:{ en:'LIGHTWEIGHT', ko:'가벼움', ja:'軽やか' } },
            ].map((c, i) => (
              <div key={i} style={{ padding: 24, border: `1px solid ${fnxCream(0.2)}` }}>
                <div style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.tan, letterSpacing: '0.14em' }}>{t(c.tag)}</div>
                <h3 style={{ margin: '14px 0 10px', fontFamily: FNX.serif, fontWeight: 300, fontSize: 22 }}>{t(c.t)}</h3>
                <p style={{ margin: 0, fontSize: 12, lineHeight: 1.7, color: fnxCream(0.82) }}>{t(c.d)}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* DOWNLOADS */}
      <Section bg={FNX.cream} padding="100px 40px">
        <RuleLabel align="left" color={FNX.tan}>{t({ en:'05 — Documents', ko:'05 — 문서', ja:'05 — ドキュメント' })}</RuleLabel>
        <h2 style={{ ...T.h2, margin: '14px 0 32px', color: FNX.pineInk }}>{t({ en:'For the curious.', ko:'궁금한 분들을 위해.', ja:'もっと知りたい方へ。' })}</h2>
        <div className="r3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { t:'VAMTOXIN™ Whitepaper',          s:{ en:'PDF · 1.1 MB · 11 pages', ko:'PDF · 1.1 MB · 11페이지', ja:'PDF · 1.1 MB · 11ページ' }, tag:{ en:'SCIENCE', ko:'사이언스', ja:'サイエンス' } },
            { t:{ en:'Patent Story — Supadelixir', ko:'특허 스토리 — Supadelixir', ja:'特許ストーリー — Supadelixir' },     s:{ en:'PDF · 0.8 MB · 6 pages', ko:'PDF · 0.8 MB · 6페이지', ja:'PDF · 0.8 MB · 6ページ' },  tag:{ en:'INGREDIENT', ko:'성분', ja:'成分' } },
            { t:{ en:'Full INCI Sheet — Peptosome 50ml', ko:'전체 INCI 시트 — Peptosome 50ml', ja:'全 INCI シート — Peptosome 50ml' }, s:{ en:'PDF · 0.4 MB · 2 pages', ko:'PDF · 0.4 MB · 2페이지', ja:'PDF · 0.4 MB · 2ページ' },  tag:{ en:'FORMULATION', ko:'포뮬레이션', ja:'処方' } },
          ].map((d, i) => (
            <a key={i} href="#" style={{
              display: 'block', padding: 24, background: FNX.bone, border: `1px solid ${fnxRule(0.12)}`,
              textDecoration: 'none', color: FNX.pineInk,
            }}>
              <div style={{ fontFamily: FNX.mono, fontSize: 12, color: FNX.labRed, letterSpacing: '0.24em' }}>{t(d.tag)}</div>
              <h3 style={{ margin: '16px 0 0', fontFamily: FNX.serif, fontWeight: 300, fontSize: 22, lineHeight: 1.2 }}>{t(d.t)}</h3>
              <div style={{ marginTop: 18, paddingTop: 14, borderTop: `1px solid ${fnxRule(0.14)}`, display: 'flex', justifyContent: 'space-between', fontSize: 12, color: FNX.sage, fontFamily: FNX.serif, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                <span>{t(d.s)}</span>
                <span>{t({ en:'Download ↓', ko:'다운로드 ↓', ja:'ダウンロード ↓' })}</span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <SiteFooter variant="pine" />
    </div>
  );
};

window.SciencePage = SciencePage;
