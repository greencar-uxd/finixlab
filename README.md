# finixlab

피닉스랩(Finixlab · FNX Lab) 브랜드 웹디자인 프로젝트 자료.

## 🔗 프리뷰 (친구에게 보낼 링크)

표지 페이지 **`index.html`** 하나에 컨셉보드 · 웹사이트 프로토타입 · 디자인 캔버스가 모두 연결돼 있습니다.
아래 방법 중 하나로 링크를 공유하세요.

### 방법 A — GitHub Pages (추천 · 깔끔한 주소)
이 브랜치를 `main`에 머지하면 `.github/workflows/pages.yml`이 자동으로 Pages를 켜고 배포합니다.
배포 후 주소(머지하면 활성화):

> **표지(전체):** https://greencar-uxd.github.io/finixlab/
> **컨셉보드:** https://greencar-uxd.github.io/finixlab/concept
> **웹사이트 프로토타입:** https://greencar-uxd.github.io/finixlab/website

(자동 활성화가 안 될 경우: 저장소 **Settings → Pages → Source = GitHub Actions** 한 번만 선택)

> `concept/`, `website/` 폴더의 `index.html`은 루트의 실제 파일을 iframe으로 감싸
> 깔끔한 주소를 유지하면서 화면을 그대로 보여주는 래퍼입니다.

### 방법 B — 지금 바로 공유 (설정 없이, githack)
public 저장소라 아래 주소를 그대로 보내면 바로 열립니다. `<COMMIT>` 자리에 최신 커밋 SHA를 넣으세요:

> `https://raw.githack.com/Greencar-UXD/finixlab/<COMMIT>/index.html`

## 구조
- `index.html` — **표지/허브** (여기서 시작)
- `Concept Board.html` — 컨셉보드(자체 완결형)
- `Prototype.html` — 클릭형 웹사이트 프로토타입(해시 라우팅 · 반응형)
- `Website Mockup.html` — 전체 화면을 한 캔버스에 펼친 디자인 캔버스
- `assets/` — 제품 이미지 등 디자인 에셋
- `site/`, `luxe/` — 웹사이트 React(JSX) 시안
- `exports/` — 내보내기 산출물
- `uploads/` — 참고 자료(원본 이미지·스크린샷)
- `.github/workflows/pages.yml` — Pages 자동 배포

## 참고
- HTML이 `site/*.jsx`를 브라우저에서 Babel로 불러오는 구조라, 로컬에서 더블클릭(`file://`)하면
  보안정책으로 JSX가 로드되지 않습니다. **링크(http/https)로 열거나** 로컬 서버
  (`python3 -m http.server`)로 확인하세요. `index.html`·`Concept Board.html`은 `file://`에서도 열립니다.
- 아직 디자인 **시안(프로토타입)** 단계로, 결제·로그인 등 실제 기능은 동작하지 않습니다.
