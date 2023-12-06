# 마켓

## Next.js / tailwindCSS / prisma / postgreSQL / SWR

공부하며 진행중이라 주석이 많습니다ㅜㅜ!
(커밋 기록 살펴보며 복기 하기)

## 1차 인증 처리 구현 넥스트 어스 사용

### - prisma/postgreSQL 세팅(레일웨이 사용)

#### &emsp;- 도커 스터디 필요

#### &emsp;- 미들웨어로 특정 경로 설정

#### &emsp;- 로그인된 유저만 접근

#### &emsp;- 어드민만 접근

#### &emsp;- 로그인된 유저는 로그인/회원가입 페이지 접근 불가

#### &emsp;- 공통 인풋/버튼 (인풋 처리는 리액트 훅 폼 사용)

## 2차 상품 업로드 구현

### - product 스키마 작성

### - 이미지 업로드 컴포넌트 클라우디너라 연동

#### &emsp;- TS: 설정에서 signed를 unsigned로 바꾸어야 업로드 가능

#### &emsp;- TS: 넥스트컨피그에서 도메인을 설정해주어야 한다.

### - 카카오맵스API연동

#### &emsp;- TS: URL에 &autoload=false를 넣어주니 지도가 보임(구글 검색)

## 3차 메인페이지

### - 가독성을 위한 폴더 생성

#### &emsp;- app/(home)/page.tsx

#### &emsp;- app/(home) -> 경로에 영향을 주지 않음

### - product 테이블에서 데이터를 가져오기 위한 액션 추가

### - 좋아요 기능 커스텀 훅스 작성

### - 페이지네이션(오프셋) take=6 처리

### - loader 컴포넌트 생성 -> 로딩 처리

## 4차 상품 상세 페이지

### - 해당 아이디에 맞는 아이템 가져오는 액션 생성

### - 카카오맵스 detailPage props분기처리(클릭x)

## 5차 채팅 구현

### - 반응형 조건부 출력 상태 정의

### - Polling사용(실시간은 중요하지만 사용자가 없기에 구현에 집중)

#### &emsp;- 쓸모업는 요청이 많아질 수 있음 / 주기가 짧으면 서버 부하 / 길면 실시간의 의미 상실

### - API 생성 / 채팅 라우트 생성

### - SWR사용 패칭 / 뮤테이션

### - 최신 메시지 자동 스크롤 Ref설정

## 서버컴포넌트 메타데이터 추가
