/* Finixlab mood studies — lightweight EN/KO/JA i18n.
   Swaps element innerHTML by matching against a shared dictionary and injects a
   floating language switcher. No framework; each mood page just loads this file.
   Brand/product names (Peptosome, VAMTOXIN, PureRX, PDRN…), prices, %, and the
   English display headers are intentionally NOT translated. */
(function () {
  var KEY = 'fnx-lang', LANGS = ['ko', 'en', 'ja'], LABEL = { ko: 'KO', en: 'EN', ja: '日本語' };

  // Dictionary — each entry carries all three languages (may contain inline <br>, <span>, <b>).
  var D = [
    // ── shared footer tagline (outer column div innerHTML) ──
    { ko: '<div class="fb">FINIXLAB</div>당신의 피부가 다시 비상할 수 있도록.<br>피부 회복력을 연구하는 슬로우에이징 더마.',
      en: '<div class="fb">FINIXLAB</div>So your skin can rise again.<br>A slow-aging derma studying the skin’s power to recover.',
      ja: '<div class="fb">FINIXLAB</div>あなたの肌が、再び羽ばたけるように。<br>肌の回復力を研究するスローエイジング ダーマ。' },
    // ── footer SHOP column (product names kept EN; translate 출시 예정) ──
    { ko: '<div class="fb" style="font-size:11px">SHOP</div>Peptosome Skin Booster<br>Spicule Glow Serum<br>PDRN RX Ampoule · 출시 예정',
      en: '<div class="fb" style="font-size:11px">SHOP</div>Peptosome Skin Booster<br>Spicule Glow Serum<br>PDRN RX Ampoule · Coming Soon',
      ja: '<div class="fb" style="font-size:11px">SHOP</div>Peptosome Skin Booster<br>Spicule Glow Serum<br>PDRN RX Ampoule · 近日発売' },
    // ── headline elements with <br> (block innerHTML match) ──
    { ko: '피부는 나이를 먹는 것이<br>아니라, 회복력을 잃어갑니다.', en: 'Skin doesn’t age.<br>It loses its power to recover.', ja: '肌は年を取るのではなく、<br>回復力を失っていく。' },
    { ko: '당신의 피부가<br>다시 비상할 수 있도록.', en: 'So your skin<br>can rise again.', ja: 'あなたの肌が、<br>再び羽ばたけるように。' },
    // ── section headers with a KO fragment ──
    { ko: 'Before &amp; After — 기록', en: 'Before &amp; After — Record', ja: 'Before &amp; After — 記録' },
    { ko: '전성분', en: 'Full Ingredients', ja: '全成分' },
    // ── principle labels ──
    { ko: '원칙 01', en: 'Principle 01', ja: '原則 01' },
    { ko: '원칙 02', en: 'Principle 02', ja: '原則 02' },
    { ko: '원칙 03', en: 'Principle 03', ja: '原則 03' },
    { ko: '원칙 04', en: 'Principle 04', ja: '原則 04' },
    // ── manifesto / sub-lines ──
    { ko: '피부는 나이를 먹는 것이 아니라, 회복력을 잃어갑니다 — 피부 회복력을 연구하는 슬로우에이징 더마.',
      en: 'Skin doesn’t age — it loses its power to recover. A slow-aging derma studying skin recovery.',
      ja: '肌は年を取るのではなく、回復力を失っていく — 肌の回復力を研究するスローエイジング ダーマ。' },
    { ko: '피부는 나이를 먹는 것이 아니라, 회복력을 잃어갑니다.<br>당신의 피부가 다시 비상할 수 있도록.',
      en: 'Skin doesn’t age — it loses its power to recover.<br>So your skin can rise again.',
      ja: '肌は年を取るのではなく、回復力を失っていく。<br>あなたの肌が、再び羽ばたけるように。' },
    { ko: '피부가 다시 비상할 수 있도록 · Recovery Skin Science',
      en: 'So your skin can rise again · Recovery Skin Science',
      ja: 'あなたの肌が、再び羽ばたけるように · Recovery Skin Science' },
    { ko: '피부 회복력을 연구하는 슬로우에이징 더마 — 피부과·에스테틱이 신뢰하는 회복 케어 솔루션을 만듭니다.',
      en: 'A slow-aging derma studying skin recovery — recovery-care solutions trusted by dermatology & aesthetic partners.',
      ja: '肌の回復力を研究するスローエイジング ダーマ — 皮膚科・エステが信頼するリカバリーケア ソリューションをつくります。' },
    { ko: 'VAMTOXIN™ 펩타이드 2.0%. 클리닉 수준의 케어를 매일의 리추얼로 — 함량은 정직하게, 손길은 가장 고요하게. 중국·일본·베트남의 30대+ 피부를 위한 슬로우 에이징.',
      en: 'VAMTOXIN™ Peptide 2.0%. Clinic-grade care as a daily ritual — concentrations stated honestly, the quietest touch. Slow-aging for skin in its 30s and beyond across CN · JP · VN.',
      ja: 'VAMTOXIN™ ペプチド2.0%。クリニック品質のケアを毎日のリチュアルへ — 配合量は正直に、タッチは最も静かに。中国・日本・ベトナムの30代以上の肌へ、スローエイジング。' },
    // ── section intros ──
    { ko: '과장 대신 근거로 설명합니다. 성분이 무엇이고, 어떻게 작용하도록 설계했는지 — 그리고 아직 확인 중인 것은 무엇인지.',
      en: 'Evidence over exaggeration — what the ingredients are, how they’re designed to work, and what we’re still confirming.',
      ja: '誇張ではなく根拠で説明します。成分は何か、どう働くよう設計したか — そしてまだ確認中のものは何か。' },
    { ko: '성분과 루틴, 그리고 조용한 효능에 관한 기록. 브랜드가 생각하는 방식.',
      en: 'Notes on ingredients, rituals and quiet efficacy — how the brand thinks.',
      ja: '成分とルーティン、そして静かな効能についての記録。ブランドの考え方。' },
    { ko: '펩타이드 함량 표기의 원칙에 대하여. 펩타이드 함량 표기의 원칙, 그리고 왜 우리가 숫자를 감추지 않는지에 대한 기록입니다. (본문 자리)',
      en: 'On the principle of stating peptide concentrations — and why we don’t hide the numbers. (Body copy placeholder)',
      ja: 'ペプチド配合量を明記する原則について — そして、なぜ数字を隠さないのかの記録です。（本文プレースホルダー）' },
    // ── ingredient roles (first span innerHTML) ──
    { ko: 'VAMTOXIN™ Peptide <span class="d">— SNARE 억제 펩타이드 · 표정 주름 케어</span>',
      en: 'VAMTOXIN™ Peptide <span class="d">— SNARE-inhibiting peptide · expression-line care</span>',
      ja: 'VAMTOXIN™ Peptide <span class="d">— SNARE阻害ペプチド · 表情ジワケア</span>' },
    { ko: 'Spicule Complex <span class="d">— 해양 마이크로 니들 · 유효성분 전달</span>',
      en: 'Spicule Complex <span class="d">— marine micro-needle · active delivery</span>',
      ja: 'Spicule Complex <span class="d">— マリン マイクロニードル · 有効成分デリバリー</span>' },
    { ko: 'Centella Asiatica <span class="d">— 센텔라 · 진정 · 장벽 케어</span>',
      en: 'Centella Asiatica <span class="d">— centella · soothing · barrier care</span>',
      ja: 'Centella Asiatica <span class="d">— ツボクサ · 鎮静 · バリアケア</span>' },
    { ko: 'Niacinamide <span class="d">— 나이아신아마이드 · 맑은 톤</span>',
      en: 'Niacinamide <span class="d">— niacinamide · clear tone</span>',
      ja: 'Niacinamide <span class="d">— ナイアシンアミド · 澄んだトーン</span>' },
    // ── science mechanism ──
    { ko: 'SNARE 억제 계열 펩타이드로, 표정 라인 케어를 목표로 설계된 핵심 성분입니다. 함량을 정직하게 표기합니다.',
      en: 'A SNARE-inhibiting peptide designed as the hero active for expression-line care. Its concentration is stated honestly.',
      ja: 'SNARE阻害系ペプチドで、表情ラインのケアを目指して設計した中核成分。配合量を正直に表記します。' },
    { ko: '해양 유래 마이크로 스피큘 구조로 유효성분 전달을 돕도록 구성했습니다. 눈가·표정 라인 롤링 케어에 활용합니다.',
      en: 'Marine-derived micro-spicule structures formulated to aid active delivery — used for rolling care around the eyes and expression lines.',
      ja: '海洋由来のマイクロスピキュール構造で有効成分の浸透を助けるよう構成。目元・表情ラインのローリングケアに用います。' },
    { ko: '함량은 마케팅이 아니라 기록입니다.',
      en: 'Concentration is a record, not marketing.',
      ja: '配合量はマーケティングではなく、記録です。' },
    { ko: '대부분의 브랜드가 “함유”만 표기할 때, 피닉스랩은 핵심 성분의 농도를 %로 밝힙니다. 표기 함량(2.0 · 0.5 · 0.5 · 4.0%)은 확정 수치이며, 배합 목적과 사용법을 함께 설명합니다.',
      en: 'Where most brands only say “contains,” FINIXLAB states the concentration of each hero active as a %. The stated figures (2.0 · 0.5 · 0.5 · 4.0%) are fixed, and we explain each ingredient’s purpose and use.',
      ja: '多くのブランドが「配合」とだけ記すところ、FINIXLABは中核成分の濃度を%で明示します。表記の数値（2.0 · 0.5 · 0.5 · 4.0%）は確定値で、配合目的と使い方もあわせて説明します。' },
    { ko: '인체적용시험·안정성·전성분 등 시험 데이터는 <b>원료·시험 자료 수신 후 게재 예정 【자료 대기】</b>입니다. 확인되지 않은 수치나 효능 표현은 싣지 않습니다.',
      en: 'Clinical, stability and full-ingredient test data are <b>to be published once source & test documents arrive 【pending】</b>. We don’t publish unverified figures or efficacy claims.',
      ja: 'ヒト適用試験・安定性・全成分などの試験データは<b>原料・試験資料の受領後に掲載予定【資料待ち】</b>です。未確認の数値や効能表現は掲載しません。' },
    // ── ritual steps ──
    { ko: '아침과 저녁, 부드러운 클렌저로.', en: 'Morning and evening, a gentle cleanser.', ja: '朝と夜、やさしいクレンザーで。' },
    { ko: 'pH 밸런스 토너로 피부 결을 정돈.', en: 'A pH-balanced toner to settle the surface.', ja: 'pHバランストナーで肌のキメを整える。' },
    { ko: 'VAMTOXIN™ 2% 부스터, 한 번.', en: 'VAMTOXIN™ 2% booster, once.', ja: 'VAMTOXIN™ 2% ブースターを一度。' },
    { ko: '가벼운 크림으로 마무리.', en: 'Finish with a light cream.', ja: '軽やかなクリームで仕上げる。' },
    // ── before/after captions ──
    { ko: 'Day 0 · 기록 시작', en: 'Day 0 · record begins', ja: 'Day 0 · 記録開始' },
    { ko: 'Day 21 · 피부 결·윤기 기록', en: 'Day 21 · texture & radiance', ja: 'Day 21 · キメ・ツヤの記録' },
    // ── reviews (bodies) ──
    { ko: '아침에 거울 볼 때 눈가가 한결 부드러워 보여요. 무엇보다 자극이 없어서 매일 쓰게 됩니다.',
      en: 'In the morning mirror the area around my eyes looks softer. Above all, no irritation — so I use it daily.',
      ja: '朝の鏡で目元が一段とやわらかく見えます。何より刺激がないので毎日使えます。' },
    { ko: '과장 없이 함량을 그대로 적어둔 게 신뢰가 갔어요. 3주째, 피부 결이 달라졌다는 말을 들었습니다.',
      en: 'Stating the concentrations plainly, without hype, earned my trust. By week three, people said my skin’s texture had changed.',
      ja: '誇張なく配合量をそのまま記しているのが信頼できました。3週目で、肌のキメが変わったと言われました。' },
    { ko: '성분표를 보고 골랐는데 윤기가 확실히 좋아졌어요. 롤러 세럼은 눈가 루틴에 정착.',
      en: 'I chose it by the ingredient list, and the radiance clearly improved. The roller serum has become my eye-area ritual.',
      ja: '成分表を見て選びましたが、ツヤが確かに良くなりました。ローラーセラムは目元ルーティンに定着。' },
    // ── journal notes ──
    { ko: '펩타이드 함량 표기의 원칙에 대하여', en: 'On the principle of stating peptide concentrations', ja: 'ペプチド配合量を明記する原則について' },
    { ko: '서울의 한 피부과 캐비닛에서', en: 'From a Seoul dermatologist’s cabinet', ja: 'ソウルのある皮膚科のキャビネットで' },
    { ko: '되돌림이 아니라, 회복입니다', en: 'Recovery, not reversal', ja: '巻き戻しではなく、回復です' },
    { ko: '한 달에 한 번, 조용히. 새 저널과 성분 노트를 받아보세요.',
      en: 'Once a month, quietly. New journal entries and ingredient notes to your inbox.',
      ja: '月に一度、静かに。新しいジャーナルと成分ノートをお届けします。' },
    // ── about page ──
    { ko: 'FINIXLAB은 피부 회복력을 연구하는 슬로우에이징 더마 브랜드입니다. 시간을 되돌리려 하지 않고, 피부가 천천히 건강하게 나이 들도록 돕습니다.',
      en: 'FINIXLAB is a slow-aging derma brand that studies the skin’s power to recover. Rather than turning back time, it helps skin age slowly and in good health.',
      ja: 'FINIXLABは、肌の回復力を研究するスローエイジング ダーマブランドです。時間を巻き戻すのではなく、肌がゆっくり健やかに歳を重ねられるよう寄り添います。' },
    { ko: '진짜 변화는 피부가 스스로 회복하는 힘에서 시작됩니다. FINIXLAB은 피부의 근본 컨디션 회복을 연구하는 재생(再生) 더마 브랜드입니다. 겉으로 드러나는 결과보다, 피부가 스스로 회복하는 힘의 조건을 먼저 살핍니다.',
      en: 'Real change begins with the skin’s own power to recover. FINIXLAB is a regenerative derma brand that researches the recovery of skin’s baseline condition — looking first at the conditions that let skin recover on its own, before any visible result.',
      ja: '本当の変化は、肌が自ら回復する力から始まります。FINIXLABは、肌の根本コンディションの回復を研究する再生ダーマブランドです。表面の結果よりも、肌が自ら回復するための条件をまず見つめます。' },
    { ko: '브랜드 이름은 스스로를 다시 일으키는 불사조에서 비롯되었습니다. 지치고 무너진 피부가 회복력을 되찾아 다시 비상하는 순간 — FINIXLAB이 이야기하는 것은 그 회복의 서사입니다.',
      en: 'The name comes from the phoenix, the bird that raises itself again. Tired, depleted skin regaining its power to recover and rising once more — that recovery is the story FINIXLAB tells.',
      ja: 'ブランド名は、自らを再び起こす不死鳥に由来します。疲れ、崩れた肌が回復力を取り戻し、再び羽ばたく瞬間 — FINIXLABが語るのは、その回復の物語です。' },
    { ko: '과장된 안티에이징이 아니라, 피부 스스로의 회복력을 우선합니다.',
      en: 'Not exaggerated anti-aging — the skin’s own power to recover comes first.',
      ja: '誇張したアンチエイジングではなく、肌自身の回復力を優先します。' },
    { ko: '빠른 효과를 약속하지 않고, 자극적인 성분에 의존하지 않습니다.',
      en: 'We don’t promise fast results, and we don’t rely on harsh ingredients.',
      ja: '速い効果を約束せず、刺激的な成分に頼りません。' },
    { ko: '피부 장벽을 존중하는 설계와 회복력 중심의 처방.',
      en: 'Barrier-respecting design and recovery-centered formulation.',
      ja: '肌バリアを尊重する設計と、回復力を軸にした処方。' },
    { ko: 'FINIXLAB(데일리 슬로우 에이징)과 PureRX(전문가용 회복 케어).',
      en: 'FINIXLAB (daily slow-aging) and PureRX (professional recovery care).',
      ja: 'FINIXLAB（デイリー スローエイジング）とPureRX（プロ仕様リカバリーケア）。' },
    { ko: '과장된 안티에이징을 말하지 않습니다.', en: 'We don’t sell exaggerated anti-aging.', ja: '誇張したアンチエイジングを語りません。' },
    { ko: '회복력 중심의 처방과 피부 장벽을 존중하는 설계.', en: 'Recovery-centered formulation and barrier-respecting design.', ja: '回復力を軸にした処方と、肌バリアを尊重する設計。' },
    { ko: '피부는 경쟁이 아니라 관리의 대상 — 장기적인 피부 건강을 연구합니다.', en: 'Skin is something to care for, not to compete with — we research long-term skin health.', ja: '肌は競争ではなくケアの対象 — 長期的な肌の健康を研究します。' },
    { ko: '피부과·에스테틱 파트너 채널을 통해 제품을 검증하고 공급합니다. 대량 견적·교육·B2B 문의를 지원합니다. — 서울 · 상하이 · 도쿄 · 호치민',
      en: 'We validate and supply through dermatology & aesthetic partner channels, with bulk quotes, training and B2B inquiries. — Seoul · Shanghai · Tokyo · Ho Chi Minh',
      ja: '皮膚科・エステのパートナーチャネルを通じて製品を検証・供給し、大口見積・研修・B2Bのお問い合わせに対応します。 — ソウル · 上海 · 東京 · ホーチミン' },
    // ── product page ──
    { ko: '올인원 스킨 부스팅 솔루션 · Revitalized by Peptosome',
      en: 'All-in-one skin-boosting solution · Revitalized by Peptosome',
      ja: 'オールインワン スキンブースティング ソリューション · Revitalized by Peptosome' },
    { ko: '클리닉 수준의 펩타이드 케어를 매일의 리추얼로. VAMTOXIN™ 펩타이드 2.0%가 표정 라인을 부드럽게, 피부 결과 윤기를 조용히 정돈합니다. 함량은 정직하게 표기합니다.',
      en: 'Clinic-grade peptide care as a daily ritual. VAMTOXIN™ Peptide 2.0% softens expression lines and quietly refines texture and radiance. Concentrations stated honestly.',
      ja: 'クリニック品質のペプチドケアを毎日のリチュアルへ。VAMTOXIN™ ペプチド2.0%が表情ラインをやわらげ、キメとツヤを静かに整えます。配合量は正直に表記します。' },
    { ko: '메탈 롤러 · 눈가 롤링 케어 · 부스터와 하나의 리추얼로.',
      en: 'Metal roller · rolling care around the eyes · one ritual with the booster.',
      ja: 'メタルローラー · 目元ローリングケア · ブースターとひとつのリチュアルに。' },
    { ko: '배송 — 오후 2시 이전 주문 시 당일 출고 (자리) · 3만원 이상 무료배송 (자리)<br>피부과·에스테틱 B2B 대량 문의 — 별도 견적',
      en: 'Shipping — same-day dispatch for orders before 2pm (placeholder) · free over ₩30,000 (placeholder)<br>Dermatology & aesthetic B2B bulk inquiries — separate quote',
      ja: '配送 — 14時までのご注文で当日出荷（仮）· ₩30,000以上で送料無料（仮）<br>皮膚科・エステ B2B大口のお問い合わせ — 別途お見積り' },
    { ko: '전성분표 — 피닉스랩 원료·전성분 자료 수신 후 기입 예정 【자료 대기】. 표기 함량(2.0% · 0.5% · 0.5% · 4.0%)은 확정 수치입니다.',
      en: 'Full ingredient list — to be filled in once FINIXLAB source & ingredient documents arrive 【pending】. Stated concentrations (2.0% · 0.5% · 0.5% · 4.0%) are fixed.',
      ja: '全成分表 — FINIXLABの原料・全成分資料の受領後に記載予定【資料待ち】。表記の配合量（2.0% · 0.5% · 0.5% · 4.0%）は確定値です。' },
    { ko: 'Subscribe · 4주 리추얼 (준비 중)', en: 'Subscribe · 4-week ritual (coming soon)', ja: 'Subscribe · 4週間リチュアル（準備中）' },
    { ko: '이메일 주소', en: 'Email address', ja: 'メールアドレス' },

    // ── ingredient roles as standalone .d spans (Le Labo etc.) ──
    { ko: '— SNARE 억제 펩타이드 · 표정 주름 케어', en: '— SNARE-inhibiting peptide · expression-line care', ja: '— SNARE阻害ペプチド · 表情ジワケア' },
    { ko: '— 해양 마이크로 니들 · 유효성분 전달', en: '— marine micro-needle · active delivery', ja: '— マリン マイクロニードル · 有効成分デリバリー' },
    { ko: '— 센텔라 · 진정 · 장벽 케어', en: '— centella · soothing · barrier care', ja: '— ツボクサ · 鎮静 · バリアケア' },
    { ko: '— 나이아신아마이드 · 맑은 톤', en: '— niacinamide · clear tone', ja: '— ナイアシンアミド · 澄んだトーン' },
    // ── CTA / slogan (period) ──
    { ko: '당신의 피부가 다시 비상할 수 있도록.', en: 'So your skin can rise again.', ja: 'あなたの肌が、再び羽ばたけるように。' },
    { ko: '확실한 효능을, 조용하게.', en: 'Certain care, quietly.', ja: '確かなケアを、静かに。' },
    // ── shared stat labels ──
    { ko: 'Supadelixir 단독 특허', en: 'Supadelixir Sole Patent', ja: 'Supadelixir 単独特許' },
    { ko: '매일의 슬로우 리추얼', en: 'Daily Slow Ritual', ja: '毎日のスローリチュアル' },
    { ko: '독점 라이선스 성분', en: 'Exclusively licensed ingredient', ja: '独占ライセンス成分' },
    { ko: '정직하게 표기한 핵심 함량', en: 'Hero concentration, honestly stated', ja: '正直に表記した中核配合量' },
    // ── section headers ──
    { ko: 'Field Notes — 기록', en: 'Field Notes — Record', ja: 'Field Notes — 記録' },
    { ko: 'Texture &amp; Glow — 21일의 기록', en: 'Texture &amp; Glow — 21-Day Record', ja: 'Texture &amp; Glow — 21日間の記録' },
    { ko: '세 가지 약속', en: 'Three Promises', ja: '三つの約束' },
    { ko: '두 개의 처방, 하나의 리추얼', en: 'Two prescriptions, one ritual', ja: '二つの処方、一つのリチュアル' },
    { ko: '여덟 분의 사용법', en: 'The Eight-Minute Method', ja: '8分の使い方' },
    { ko: '스물하루의 기록', en: 'A Twenty-One-Day Record', ja: '21日間の記録' },
    { ko: '조용한 문장들', en: 'Quiet Sentences', ja: '静かな言葉たち' },
    { ko: '리추얼 레터 — 한 달에 한 번, 조용히.', en: 'Ritual Letter — once a month, quietly.', ja: 'リチュアルレター — 月に一度、静かに。' },
    // ── before/after captions ──
    { ko: 'Day 21 · 피부 결·윤기', en: 'Day 21 · texture & radiance', ja: 'Day 21 · キメ・ツヤ' },
    { ko: 'Day 21 · 피부 결 · 윤기', en: 'Day 21 · texture & radiance', ja: 'Day 21 · キメ・ツヤ' },
    { ko: '스물하루의 기록 · 피부 결 · 윤기', en: 'A 21-day record · texture · radiance', ja: '21日間の記録 · キメ · ツヤ' },
    // ── snow peak promises ──
    { ko: '핵심 성분 함량을 숫자 그대로 표기 — 2.0%는 2.0%.', en: 'Hero-active concentrations stated as numbers — 2.0% means 2.0%.', ja: '中核成分の配合量を数字のまま表記 — 2.0%は2.0%。' },
    { ko: '피부과·에스테틱 현장에서 출발한 처방 설계.', en: 'Formulation designed from dermatology & aesthetic practice.', ja: '皮膚科・エステの現場から生まれた処方設計。' },
    { ko: '자극적인 약속 대신, 매일 8분의 조용한 리추얼.', en: 'Instead of loud promises, a quiet eight-minute daily ritual.', ja: '刺激的な約束ではなく、毎日8分の静かなリチュアル。' },
    { ko: '서울 · 상하이 · 도쿄 · 호치민 — 국문·영문·일문 지원.', en: 'Seoul · Shanghai · Tokyo · Ho Chi Minh — KR · EN · JP support.', ja: 'ソウル · 上海 · 東京 · ホーチミン — 韓・英・日対応。' },
    { ko: 'CLINIC PARTNER NETWORK — 서울 · 상하이 · 도쿄 · 호치민', en: 'CLINIC PARTNER NETWORK — Seoul · Shanghai · Tokyo · Ho Chi Minh', ja: 'CLINIC PARTNER NETWORK — ソウル · 上海 · 東京 · ホーチミン' },
    { ko: '서울 · 상하이 · 도쿄 · 호치민', en: 'Seoul · Shanghai · Tokyo · Ho Chi Minh', ja: 'ソウル · 上海 · 東京 · ホーチミン' },
    { ko: '피부과 · 에스테틱 채널', en: 'Dermatology · aesthetic channel', ja: '皮膚科 · エステ チャネル' },
    { ko: '서울', en: 'Seoul', ja: 'ソウル' },
    { ko: '상하이', en: 'Shanghai', ja: '上海' },
    { ko: '도쿄', en: 'Tokyo', ja: '東京' },
    { ko: '호치민', en: 'Ho Chi Minh', ja: 'ホーチミン' },
    { ko: 'B2B 문의하기', en: 'B2B Inquiry', ja: 'B2Bのお問い合わせ' },
    // ── EN mood points / products / review ──
    { ko: 'VAMTOXIN™ 펩타이드 함량을 숫자 그대로. 과장 없이 기록합니다.', en: 'VAMTOXIN™ Peptide concentration, stated as a number — recorded without hype.', ja: 'VAMTOXIN™ ペプチドの配合量を数字のまま。誇張なく記録します。' },
    { ko: 'Supadelixir 단독 특허 라이선스 성분으로 처방을 설계했습니다.', en: 'Formulated with the Supadelixir sole-patent licensed ingredient.', ja: 'Supadelixirの単独特許ライセンス成分で処方を設計しました。' },
    { ko: '하루 8분, 피부가 스스로 회복하도록 돕습니다.', en: 'Eight minutes a day, helping skin recover on its own.', ja: '一日8分、肌が自ら回復するのを助けます。' },
    { ko: '올인원 스킨 부스팅 솔루션. VAMTOXIN™ 2.0%로 피부 결과 윤기를 매일 케어합니다.', en: 'All-in-one skin-boosting solution. VAMTOXIN™ 2.0% cares for texture and radiance daily.', ja: 'オールインワン スキンブースティング。VAMTOXIN™ 2.0%でキメとツヤを毎日ケア。' },
    { ko: '메탈 롤러 타입 세럼. 스피큘 마이크로 니들로 눈가·표정 라인을 부드럽게 롤링 케어.', en: 'A metal-roller serum. Spicule micro-needles gently roll-care the eye and expression lines.', ja: 'メタルローラータイプのセラム。スピキュール マイクロニードルで目元・表情ラインをやさしくローリングケア。' },
    { ko: '“과장 없이 함량을 그대로 적어둔 게 신뢰가 갔어요.<br>3주째, 피부 결이 달라졌다는 말을 들었습니다.”', en: '“Stating the concentrations plainly, without hype, earned my trust.<br>By week three, people said my skin’s texture had changed.”', ja: '「誇張なく配合量をそのまま記しているのが信頼できました。<br>3週目で、肌のキメが変わったと言われました。」' },
    // ── UVX bodies ──
    { ko: '스피큘 글로우 세럼의 메탈 롤러가 눈가를 따라 미끄러지며, 피부가 스스로 회복하는 리듬을 되찾아 줍니다. 차갑고, 조용하고, 정확하게.', en: 'The Spicule Glow Serum’s metal roller glides along the eye area, helping skin regain its own rhythm of recovery. Cool, quiet, precise.', ja: 'スピキュール グロウセラムのメタルローラーが目元に沿って滑り、肌が自ら回復するリズムを取り戻します。冷たく、静かに、正確に。' },
    { ko: '대부분이 감추는 함량을, 우리는 크게 적습니다. VAMTOXIN™ 펩타이드 2.0% — 정직이 곧 메시지입니다.', en: 'The concentration most brands hide, we write large. VAMTOXIN™ Peptide 2.0% — honesty is the message.', ja: '多くが隠す配合量を、私たちは大きく記します。VAMTOXIN™ ペプチド2.0% — 正直さこそがメッセージです。' },
    // ── Proya lines ──
    { ko: 'SNARE 억제 펩타이드가 표정 라인에 작용하는 원리부터, 스피큘 마이크로 니들의 유효성분 전달까지 — 피닉스랩의 처방은 과장 대신 근거로 설명합니다. 함량은 정직하게, 결과는 조용하게.', en: 'From how the SNARE-inhibiting peptide acts on expression lines to how Spicule micro-needles deliver actives — FINIXLAB explains its formulation with evidence, not exaggeration. Concentrations honest, results quiet.', ja: 'SNARE阻害ペプチドが表情ラインに働く仕組みから、スピキュール マイクロニードルの有効成分デリバリーまで — FINIXLABの処方は誇張ではなく根拠で説明します。配合量は正直に、結果は静かに。' },
    { ko: '올인원 스킨 부스터 · VAMTOXIN™ 2.0%', en: 'All-in-one skin booster · VAMTOXIN™ 2.0%', ja: 'オールインワン スキンブースター · VAMTOXIN™ 2.0%' },
    { ko: '메탈 롤러 · 눈가 롤링 케어', en: 'Metal roller · eye-area rolling care', ja: 'メタルローラー · 目元ローリングケア' },
    { ko: '부스터 + 세럼 · 하나의 리추얼', en: 'Booster + serum · one ritual', ja: 'ブースター + セラム · 一つのリチュアル' },
    { ko: '피부과·에스테틱 파트너를 위한 B2B 채널. 대량 견적·교육·공급을 지원합니다.', en: 'A B2B channel for dermatology & aesthetic partners — bulk quotes, training and supply.', ja: '皮膚科・エステのパートナー向けB2Bチャネル。大口見積・研修・供給に対応します。' },
    // ── Proya stat pills (.l div = label<br>sublabel) ──
    { ko: 'VAMTOXIN™ Peptide<br>정직하게 표기한 핵심 함량', en: 'VAMTOXIN™ Peptide<br>Hero concentration, honestly stated', ja: 'VAMTOXIN™ Peptide<br>正直に表記した中核配合量' },
    { ko: 'Supadelixir 단독 특허<br>독점 라이선스 성분', en: 'Supadelixir Sole Patent<br>Exclusively licensed ingredient', ja: 'Supadelixir 単独特許<br>独占ライセンス成分' },
    { ko: '피부과 · 에스테틱 채널<br>서울 · 상하이 · 도쿄 · 호치민', en: 'Dermatology · aesthetic channel<br>Seoul · Shanghai · Tokyo · Ho Chi Minh', ja: '皮膚科 · エステ チャネル<br>ソウル · 上海 · 東京 · ホーチミン' },

    // ══ product pages (bespoke per mood) ══
    // descriptions
    { ko: 'VAMTOXIN™ 2.0%. 피부가 스스로 회복하도록. 표정 라인은 부드럽게, 광택은 조용하게.', en: 'VAMTOXIN™ 2.0%. So skin can recover on its own. Expression lines softened, shine kept quiet.', ja: 'VAMTOXIN™ 2.0%。肌が自ら回復するように。表情ラインはやわらかく、ツヤは静かに。' },
    { ko: '올인원 스킨 부스팅 솔루션. VAMTOXIN™ 펩타이드 2.0%가 표정 라인을 부드럽게, 피부 결과 윤기를 조용히 정돈합니다. 아침·저녁 토너 이후 한 번.', en: 'All-in-one skin-boosting solution. VAMTOXIN™ Peptide 2.0% softens expression lines and quietly refines texture and radiance. Once, after morning and evening toner.', ja: 'オールインワン スキンブースティング。VAMTOXIN™ ペプチド2.0%が表情ラインをやわらげ、キメとツヤを静かに整えます。朝晩の化粧水のあとに一度。' },
    { ko: '클리닉 수준의 펩타이드 케어를 매일의 리추얼로. VAMTOXIN™ 2.0% — 함량을 저울에 단 그대로 기록합니다. 표정 라인은 부드럽게, 광택은 조용하게.', en: 'Clinic-grade peptide care as a daily ritual. VAMTOXIN™ 2.0% — the concentration recorded exactly as weighed. Expression lines softened, shine kept quiet.', ja: 'クリニック品質のペプチドケアを毎日のリチュアルへ。VAMTOXIN™ 2.0% — 量りにかけたままの配合量を記録。表情ラインはやわらかく、ツヤは静かに。' },
    { ko: '클리닉 수준의 펩타이드 케어를 매일의 리추얼로. VAMTOXIN™ 2.0%가 표정 라인을 부드럽게, 피부 결과 윤기를 조용히 정돈합니다.', en: 'Clinic-grade peptide care as a daily ritual. VAMTOXIN™ 2.0% softens expression lines and quietly refines texture and radiance.', ja: 'クリニック品質のペプチドケアを毎日のリチュアルへ。VAMTOXIN™ 2.0%が表情ラインをやわらげ、キメとツヤを静かに整えます。' },
    { ko: '임상 펩타이드 VAMTOXIN™ 2.0% 기반 올인원 스킨 부스터. 표정 라인을 부드럽게, 피부 결과 윤기를 조용히 정돈합니다. 함량은 정직하게 표기합니다.', en: 'An all-in-one skin booster built on clinical VAMTOXIN™ Peptide 2.0%. Softens expression lines, quietly refines texture and radiance. Concentrations stated honestly.', ja: '臨床ペプチドVAMTOXIN™ 2.0%を基盤にしたオールインワン スキンブースター。表情ラインをやわらげ、キメとツヤを静かに整えます。配合量は正直に表記します。' },
    { ko: '메탈 롤러 · 눈가 롤링 케어 · 하나의 프로토콜로.', en: 'Metal roller · eye-area rolling care · one protocol.', ja: 'メタルローラー · 目元ローリングケア · 一つのプロトコルに。' },
    { ko: '정직하게 기록한 함량', en: 'Concentration, honestly recorded', ja: '正直に記録した配合量' },
    // ingredient roles without dash (UVX)
    { ko: 'SNARE 억제 펩타이드 · 표정 주름 케어', en: 'SNARE-inhibiting peptide · expression-line care', ja: 'SNARE阻害ペプチド · 表情ジワケア' },
    { ko: '해양 마이크로 니들 · 유효성분 전달', en: 'marine micro-needle · active delivery', ja: 'マリン マイクロニードル · 有効成分デリバリー' },
    { ko: '센텔라 · 진정 · 장벽 케어', en: 'centella · soothing · barrier care', ja: 'ツボクサ · 鎮静 · バリアケア' },
    { ko: '나이아신아마이드 · 맑은 톤', en: 'niacinamide · clear tone', ja: 'ナイアシンアミド · 澄んだトーン' },
    // ritual steps with dash (Proya)
    { ko: '— 아침과 저녁, 부드러운 클렌저로.', en: '— Morning and evening, a gentle cleanser.', ja: '— 朝と夜、やさしいクレンザーで。' },
    { ko: '— pH 밸런스 토너로 피부 결을 정돈.', en: '— A pH-balanced toner to settle the surface.', ja: '— pHバランストナーで肌のキメを整える。' },
    { ko: '— VAMTOXIN™ 2% 부스터, 한 번.', en: '— VAMTOXIN™ 2% booster, once.', ja: '— VAMTOXIN™ 2% ブースターを一度。' },
    { ko: '— 가벼운 크림으로 마무리.', en: '— Finish with a light cream.', ja: '— 軽やかなクリームで仕上げる。' },
    // ingredient / full-list notices (variants)
    { ko: 'FULL INGREDIENT LIST — 원료·전성분 자료 수신 후 기입 【자료 대기】. 표기 함량(2.0 / 0.5 / 0.5 / 4.0%)은 확정 수치.', en: 'FULL INGREDIENT LIST — to be filled in once source & ingredient documents arrive 【pending】. Stated concentrations (2.0 / 0.5 / 0.5 / 4.0%) are fixed.', ja: 'FULL INGREDIENT LIST — 原料・全成分資料の受領後に記載【資料待ち】。表記の配合量（2.0 / 0.5 / 0.5 / 4.0%）は確定値。' },
    { ko: 'FULL INCI LIST — 원료·전성분 자료 수신 후 기입 【자료 대기】. 표기 함량(2.0 / 0.5 / 0.5 / 4.0%)은 확정 수치.', en: 'FULL INCI LIST — to be filled in once source & ingredient documents arrive 【pending】. Stated concentrations (2.0 / 0.5 / 0.5 / 4.0%) are fixed.', ja: 'FULL INCI LIST — 原料・全成分資料の受領後に記載【資料待ち】。表記の配合量（2.0 / 0.5 / 0.5 / 4.0%）は確定値。' },
    { ko: '전성분표 — 원료·전성분 자료 수신 후 기입 예정 【자료 대기】. 표기 함량(2.0/0.5/0.5/4.0%)은 확정 수치.', en: 'Full ingredient list — to be filled in once source & ingredient documents arrive 【pending】. Stated concentrations (2.0/0.5/0.5/4.0%) are fixed.', ja: '全成分表 — 原料・全成分資料の受領後に記載予定【資料待ち】。表記の配合量（2.0/0.5/0.5/4.0%）は確定値。' },
    { ko: '전성분표 — 피닉스랩 원료·전성분 자료 수신 후 기입 예정 【자료 대기】. 표기 함량(2.0% · 0.5% · 0.5% · 4.0%)은 확정 수치입니다.', en: 'Full ingredient list — to be filled in once FINIXLAB source & ingredient documents arrive 【pending】. Stated concentrations (2.0% · 0.5% · 0.5% · 4.0%) are fixed.', ja: '全成分表 — FINIXLABの原料・全成分資料の受領後に記載予定【資料待ち】。表記の配合量（2.0% · 0.5% · 0.5% · 4.0%）は確定値です。' },
    // buy / shipping blocks
    { ko: '★★★★★ 4.92 · 리뷰 612 (시안 수치)', en: '★★★★★ 4.92 · 612 reviews (mock figure)', ja: '★★★★★ 4.92 · レビュー612（仮の数値）' },
    { ko: '★★★★★ 4.92 · 리뷰 612 (시안 수치) · 피부과·에스테틱 채널 공급', en: '★★★★★ 4.92 · 612 reviews (mock figure) · supplied via dermatology & aesthetic channels', ja: '★★★★★ 4.92 · レビュー612（仮の数値）· 皮膚科・エステチャネル供給' },
    { ko: '1개 — ₩96,000', en: '1 unit — ₩96,000', ja: '1個 — ₩96,000' },
    { ko: '듀오(+세럼) — ₩139,000 (자리)', en: 'Duo (+serum) — ₩139,000 (placeholder)', ja: 'デュオ(+セラム) — ₩139,000（仮）' },
    { ko: 'Buy Now — 네이버페이 (자리)', en: 'Buy Now — Naver Pay (placeholder)', ja: '今すぐ購入 — Naver Pay（仮）' },
    { ko: '🚚 오후 2시 이전 주문 당일 출고 (자리) · ₩30,000 이상 무료배송 (자리)', en: '🚚 Same-day dispatch for orders before 2pm (placeholder) · free over ₩30,000 (placeholder)', ja: '🚚 14時までのご注文で当日出荷（仮）· ₩30,000以上で送料無料（仮）' },
    { ko: '🏥 피부과·에스테틱 B2B 문의 — 별도 견적', en: '🏥 Dermatology & aesthetic B2B inquiries — separate quote', ja: '🏥 皮膚科・エステ B2Bのお問い合わせ — 別途お見積り' },
    { ko: '🚚 오후 2시 이전 주문 당일 출고 (자리) · ₩30,000 이상 무료배송 (자리)<br>🏥 피부과·에스테틱 B2B 문의 — 별도 견적', en: '🚚 Same-day dispatch for orders before 2pm (placeholder) · free over ₩30,000 (placeholder)<br>🏥 Dermatology & aesthetic B2B inquiries — separate quote', ja: '🚚 14時までのご注文で当日出荷（仮）· ₩30,000以上で送料無料（仮）<br>🏥 皮膚科・エステ B2Bのお問い合わせ — 別途お見積り' },
    { ko: 'Cleanse(아침과 저녁, 부드러운 클렌저로) → Prep(pH 밸런스 토너로 피부 결을 정돈) → Prescribe(VAMTOXIN™ 2% 부스터, 한 번) → Seal(가벼운 크림으로 마무리)', en: 'Cleanse (morning & evening, a gentle cleanser) → Prep (a pH-balanced toner to settle the surface) → Prescribe (VAMTOXIN™ 2% booster, once) → Seal (finish with a light cream)', ja: 'Cleanse（朝晩、やさしいクレンザーで）→ Prep（pHバランストナーでキメを整える）→ Prescribe（VAMTOXIN™ 2% ブースターを一度）→ Seal（軽やかなクリームで仕上げる）' },
    { ko: '배송·교환·반품 정책 자리 — 오픈 전 확정 문구로 교체.', en: 'Shipping / exchange / return policy placeholder — to be replaced with final copy before launch.', ja: '配送・交換・返品ポリシーの仮テキスト — 公開前に確定文言へ差し替え。' },
    { ko: 'REFILL PROGRAM (준비 중)', en: 'REFILL PROGRAM (coming soon)', ja: 'REFILL PROGRAM（準備中）' },
    { ko: 'SHIPPING — D+1 DISPATCH (자리) · FREE OVER ₩30,000 (자리)', en: 'SHIPPING — D+1 DISPATCH (placeholder) · FREE OVER ₩30,000 (placeholder)', ja: 'SHIPPING — D+1 DISPATCH（仮）· FREE OVER ₩30,000（仮）' },
    { ko: 'SHIPPING — D+1 DISPATCH (자리) · FREE OVER ₩30,000 (자리)<br>B2B — CLINIC &amp; AESTHETIC INQUIRY, SEPARATE SHEET', en: 'SHIPPING — D+1 DISPATCH (placeholder) · FREE OVER ₩30,000 (placeholder)<br>B2B — CLINIC &amp; AESTHETIC INQUIRY, SEPARATE SHEET', ja: 'SHIPPING — D+1 DISPATCH（仮）· FREE OVER ₩30,000（仮）<br>B2B — CLINIC &amp; AESTHETIC INQUIRY, SEPARATE SHEET' },
    { ko: 'ペプトソーム スキンブースター — 정직한 농도의 올인원 부스터', en: 'Peptosome Skin Booster — an all-in-one booster of honest concentration', ja: 'ペプトソーム スキンブースター — 正直な配合量のオールインワン ブースター' },
    { ko: '/ 50ml · ¥9,800 (자리)', en: '/ 50ml · ¥9,800 (placeholder)', ja: '/ 50ml · ¥9,800（仮）' },
    { ko: 'Find in Clinic — 서울 · 상하이 · 도쿄 · 호치민', en: 'Find in Clinic — Seoul · Shanghai · Tokyo · Ho Chi Minh', ja: 'Find in Clinic — ソウル · 上海 · 東京 · ホーチミン' },
    { ko: '국제 배송 — 日本 · 中国 · Việt Nam (자리) · 세부 정책 오픈 전 확정', en: 'International shipping — Japan · China · Vietnam (placeholder) · details finalized before launch', ja: '国際配送 — 日本 · 中国 · Việt Nam（仮）· 詳細は公開前に確定' },
    { ko: 'B2B 대량 견적 문의', en: 'B2B bulk-quote inquiry', ja: 'B2B大口見積のお問い合わせ' },
    { ko: '국내 배송 정책 자리 · 피부과·에스테틱 공급가 별도 · 세금계산서 발행 가능 (자리)', en: 'Domestic shipping policy placeholder · separate dermatology/aesthetic supply price · tax invoice available (placeholder)', ja: '国内配送ポリシー仮 · 皮膚科・エステ供給価格は別途 · 税務インボイス発行可（仮）' },
    // reviews wrapped in curly quotes with <br>
    { ko: '“과장 없이 함량을 그대로 적어둔 게 신뢰가 갔어요.<br>3주째, 피부 결이 달라졌다는 말을 들었습니다.”', en: '“Stating the concentrations plainly, without hype, earned my trust.<br>By week three, people said my skin’s texture had changed.”', ja: '「誇張なく配合量をそのまま記しているのが信頼できました。<br>3週目で、肌のキメが変わったと言われました。」' },
    { ko: '“아침에 거울 볼 때 눈가가 한결 부드러워 보여요.<br>무엇보다 자극이 없어서 매일 쓰게 됩니다.”', en: '“In the morning mirror the area around my eyes looks softer.<br>Above all, no irritation — so I use it daily.”', ja: '「朝の鏡で目元が一段とやわらかく見えます。<br>何より刺激がないので毎日使えます。」' },
  ];

  function norm(s) { return (s == null ? '' : String(s)).replace(/<br\s*\/?>/gi, '<br>').replace(/\s+/g, ' ').trim(); }
  var map = {};
  D.forEach(function (e) { LANGS.forEach(function (l) { if (e[l] != null) map[norm(e[l])] = e; }); });

  var bound = []; // {el, entry}
  function collect() {
    var els = document.querySelectorAll('h1,h2,h3,h4,p,span,div,a,figcaption,li,button,summary,section');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.getAttribute('data-i18n-bound')) continue;
      var e = map[norm(el.innerHTML)];
      if (e) { bound.push({ el: el, entry: e }); el.setAttribute('data-i18n-bound', '1'); }
    }
  }
  function apply(lang) {
    for (var i = 0; i < bound.length; i++) { var v = bound[i].entry[lang]; if (v != null) bound[i].el.innerHTML = v; }
    try { document.documentElement.lang = lang; } catch (e) {}
  }
  function current() { try { return localStorage.getItem(KEY) || 'ko'; } catch (e) { return 'ko'; } }
  function setLang(l) { try { localStorage.setItem(KEY, l); } catch (e) {} apply(l); paint(); }

  var box;
  function paint() {
    if (!box) return;
    var cur = current();
    [].forEach.call(box.children, function (b) {
      var on = b.getAttribute('data-l') === cur;
      b.style.color = on ? '#fff' : 'rgba(255,255,255,.62)';
      b.style.fontWeight = on ? '600' : '400';
    });
  }
  function switcher() {
    box = document.createElement('div');
    box.setAttribute('role', 'group');
    box.setAttribute('aria-label', 'Language');
    box.style.cssText = 'position:fixed;right:16px;bottom:16px;z-index:9999;display:flex;gap:2px;align-items:center;' +
      'padding:6px 8px;border-radius:999px;background:rgba(20,20,20,.62);backdrop-filter:blur(10px);' +
      '-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.18);font-family:"Outfit",system-ui,sans-serif;' +
      'font-size:11px;letter-spacing:.1em;box-shadow:0 6px 22px rgba(0,0,0,.28)';
    LANGS.forEach(function (l, i) {
      if (i) { var d = document.createElement('span'); d.textContent = '·'; d.style.cssText = 'color:rgba(255,255,255,.35);padding:0 1px'; box.appendChild(d); }
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = LABEL[l]; b.setAttribute('data-l', l);
      b.style.cssText = 'background:none;border:none;cursor:pointer;font:inherit;padding:4px 7px;color:rgba(255,255,255,.62);letter-spacing:inherit';
      b.addEventListener('click', function () { setLang(l); });
      box.appendChild(b);
    });
    document.body.appendChild(box);
  }

  function init() { collect(); apply(current()); switcher(); paint(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
