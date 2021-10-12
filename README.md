# react-express
react & express boiler plate.

---

# 설명

## 이 프로젝트에 대하여

### 개요
- 이 프로젝트는 react와 express를 사용하기 위해 만들어진 보일러 플레이트입니다.

### 사용
- node : v14.18.0
- `npx create-react-app client`
- `express --no-view server`
- server `npx sequelize init`

### 수정
- `client` 환경설정 추가
    - 최상위 경로에 `.env` 파일 추가
        - build path를 server로 변경 (`/server/build`)

    - `package.json` 수정
        - `proxy: "http://localhost:3001"` 추가

- `server` 파일 수정
    - `public` 폴더 및 하위 파일 삭제
    - `bin/www` 파일 port수정 (`3000 → 3001`)
    - `app.js` static 폴더 수정 (`public → build`)

- `database` 환경설정
    - config 파일 프로젝트 최상단으로 경로 변경 (`/config/database_config.json`)
        - `.gitignore` 추가

    - `sequelize` 설정파일 추가 (`.sequelizerc`)
        - `migrations`, `seeders`, `models` 경로 변경 (`/server/database`)

---

# 사용법

## 개발

### front-end 테스트용

- `client`에서 `npm start` 명령어를 통해 실행.
- `server`에서 `npm start` 명령어를 통해 실행.
- 브라우저에서 `"localhost:3000"` 접속을 통해 front-end 작업을 수행한다.

### 배포용

- `client`에서 `npm run build` 명령어를 통해 빌드.
- `server`에서 `npm start` 명령어를 통해 실행.
- 서버에서 `"3001"` port를 통해 배포를 확인한다.
    - (선택) 포트 변경을 위해 `/server/bin/www` 파일의 port 번호를 수정한다.

## 데이터베이스

### sequelize seed 추가/삭제

- `server`에서 `npm run add:seed` 명령어를 통해 데이터베이스에 시드 추가.
- `server`에서 `npm run remove:seed` 명령어를 통해 데이터베이스에 시드 삭제.

### table 초기화 사용 / table 일반 사용

- `server`에서 `npm start` 명령어를 통해 일반사용.
- `server`에서 `npm run start:clear` 명령어를 통해 table 초기화 후 사용.
    