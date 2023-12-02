# 마켓

## Next.js / tailwindCSS / prisma / postgreSQL

공부하며 진행중이라 주석이 많습니다ㅜㅜ!
(커밋 기록 살펴보며 복기 하기)

## 1차 인증 처리 구현 넥스트 어스 사용

### - prisma/postgreSQL 세팅(레일웨이 사용)

#### - 도커 스터디 필요

#### - 미들웨어로 특정 경로 설정

#### - 로그인된 유저만 접근

#### - 어드민만 접근

#### - 로그인된 유저는 로그인/회원가입 페이지 접근 불가

#### - 공통 인풋/버튼 (인풋 처리는 리액트 훅 폼 사용)

## 2차 상품 업로드 구현

### - product 스키마 작성

### - 이미지 업로드 컴포넌트 클라우디너라 연동

#### - TS: 설정에서 signed를 unsigned로 바꾸어야 업로드 가능

#### - TS: 넥스트컨피그에서 도메인을 설정해주어야 한다.

### - 카카오맵스API연동

#### - TS: URL에 &autoload=false를 넣어주니 지도가 보임(구글 검색)

## 3차 메인페이지

### - 가독성을 위한 폴더 생성

#### - app/(home)/page.tsx

#### - app/(home) -> 경로에 영향을 주지 않음

### - product 테이블에서 데이터를 가져오기 위한 액션 추가

### - 좋아요 기능 커스텀 훅스 작성

### - 페이지네이션(오프셋) take=6 처리

### - loader 컴포넌트 생성 -> 로딩 처리
