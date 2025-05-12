# 📦 @ph-mold/ph-ui 패키지 배포 가이드

P&M 프로젝트의 공용 UI 컴포넌트 패키지인 `@ph-mold/ph-ui`를 개발하고 배포하는 절차를 정리한 문서입니다.

---

## 🆙 1. 버전 업데이트

```bash
npm version patch   # 또는 minor / major
```

| 타입  | 설명               |
| ----- | ------------------ |
| patch | 버그 수정          |
| minor | 기능 추가 (호환됨) |
| major | Breaking Changes   |

> 실행 시 `package.json`이 자동 수정되고, Git 태그가 생성됩니다.

---

## 🔨 2. 빌드

```bash
npm run build
```

- Vite 기반 빌드
- `dist/` 폴더에 JS, CSS, 타입 파일 생성

---

## 🚀 3. 배포

```bash
npm publish --access public
```

> `@ph-mold/ph-ui`처럼 scope 패키지는 반드시 `--access public` 옵션이 필요합니다.

---

## ✅ 4. 배포 확인

```bash
npm view @ph-mold/ph-ui
npm view @ph-mold/ph-ui versions
```

---

## 📥 5. 다른 프로젝트에서 설치

```bash
npm install @ph-mold/ph-ui
```

---

## 🚀 전체 자동 배포 커맨드 (1줄)

```bash
npm run build && npm version patch && npm publish --access public
```

---

## ❗ 자주 발생하는 문제

| 문제                      | 원인                                         | 해결 방법                                                        |
| ------------------------- | -------------------------------------------- | ---------------------------------------------------------------- |
| `404 Not Found`           | 레지스트리 설정 오류                         | `npm config get registry` → `https://registry.npmjs.org/`로 설정 |
| 타입 자동완성 안됨        | `types` 또는 `exports` 누락                  | `types`, `exports["."]` 정확히 설정                              |
| peer dependency 충돌      | 프로젝트의 react/tailwindcss 버전 불일치     | 해당 버전 맞춰서 설치하거나 `--legacy-peer-deps` 사용            |
| 설치는 되는데 import 에러 | `main/module/types` 또는 `exports` 설정 오류 | 경로 및 필드 확인 필요                                           |

---

## 🔍 유용한 npm 명령어

```bash
npm whoami                      # 현재 로그인된 사용자 확인
npm login                       # 로그인
npm logout                      # 로그아웃
npm config get registry         # 현재 레지스트리 주소
npm config set registry https://registry.npmjs.org/  # 기본 레지스트리로 변경
npm cache clean --force         # 캐시 삭제
```

---

## 📚 참고 링크

- [NPM 공식 문서](https://docs.npmjs.com)
- [Vite 라이브러리 모드](https://vitejs.dev/guide/build.html#library-mode)
- [Storybook 공식 문서](https://storybook.js.org/docs/react)
