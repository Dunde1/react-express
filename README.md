# react-express

react & express boiler plate. (TypeScript ver)

---

# 설명

## 이 프로젝트에 대하여

### 개요

- 이 프로젝트는 react와 express를 사용하기 위해 만들어진 보일러 플레이트입니다.
- TypeScript 버전입니다.

### 사용

- node : v14.18.1 (21.11.06.)
- `npx create-react-app client --template-typescript`
- `npm i -g typescript`

### 수정

- `server`

  - `tsc --init` 사용으로 `tsconfig.json` 파일 생성.
  - `tsconfig.json` 파일 수정

    ```json
    {
      "compilerOptions": {
        "lib": ["es5", "es6"],
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "outDir": "./dist",
        "rootDir": "./src",
        "esModuleInterop": true
      }
    }
    ```

- `client` 환경설정 추가
  - `package.json` 수정
    - `proxy: "http://localhost:3001"` 추가

---
