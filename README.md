## 프로젝트 구조

```
BigDataApp/
├── BigDataApp-FE/                 # 프론트엔드 디렉토리 (Next.js)
│   ├── .next/                    # Next.js 빌드 출력 디렉토리
│   ├── node_modules/             # 의존성 패키지 디렉토리
│   ├── public/                   # 정적 파일 디렉토리
│   ├── src/                      # 소스 코드
│   │   ├── app/                  # Next.js 13+ App Router
│   │   │   ├── layout.tsx        # 레이아웃 컴포넌트
│   │   │   └── ...
│   ├── .gitignore                # Git 무시 파일
│   ├── next.config.mjs           # Next.js 설정 파일
│   ├── package.json              # 프로젝트 메타데이터 및 스크립트
│   ├── postcss.config.mjs        # PostCSS 설정
│   └── tailwind.config.ts        # Tailwind CSS 설정
```

## 기술 스택

- **프론트엔드**
  - Next.js 13+ (App Router)
  - TypeScript
  - Tailwind CSS
  - React

## 개발 환경 설정

1. 저장소 클론
```bash
git clone [저장소 URL]
cd BigDataApp/BigDataApp-FE
```

2. 의존성 설치
```bash
npm install
# 또는
yarn install
```

3. 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
```

4. 브라우저에서 확인
```
http://localhost:3000
```

## 빌드 및 배포

프로덕션 빌드:
```bash
npm run build
```

빌드 후 실행:
```bash
npm start
```

## 기여 방법

1. 이슈 생성
2. 기능 브랜치 생성 (`feature/기능명`)
3. 코드 수정 및 커밋
4. Pull Request 생성
