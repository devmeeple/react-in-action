# React in Action

- React 기본기를 탄탄하게 다진다.
- 간단한 애플리케이션을 구현한다.

## 선수 지식

- HTML, CSS, JavaScript

# pnpm

npm 보다 조금 더 빠르고 편리한 패키지 매니저(Package manager).

> 💬 시작은 npm, 프로젝트를 할 때는 Yarn을 사용했다. 소문만 무성한 pnpm 드디어 사용해본다.

## pnpm이란?

익숙했던 npm을 뒤로하고 pnpm을 마주하기로 결심했다. 그런데 강점이 있어야 구미가 당기지 않을까.

* 패키지 설치방식의 변화로 디스크 공간을 절약한다.
    * 다른 패키지 매니저는 여러 프로젝트를 같은 디렉터리에서 사용하면 중복으로 설치했다. 그런데 pnpm은 한 번만 설치하고 이를 공유한다.
* 패키지 설치 속도가 압도적으로 빠르다.
    * 효율적인 캐싱(caching)으로 설치 시간을 줄인다.
* 프로젝트 의존성을 엄격하게 관리한다. 사용자의 실수를 사전에 방지한다.

## 설치하기

```shell
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

[공식문서](https://pnpm.io/installation)에서 친절하게 안내한다. 여러 방법 중 스크립트를 사용해서 설치했다.

> 💬 다른 방법으로 진행해도 좋다.

### 확인하기

```shell
pnpm --version
```

설치한 pnpm 버전을 출력한다.

# Real DOM vs. Virtual DOM

- 상태 변화가 일어났을 때 어떻게 처리하는가에 따라 DOM을 구분한다.
- 기존의 DOM 은 상태가 변화했을 때 모든 데이터를 변경한다. 반면 Virtual DOM은 변화가 생긴 부분만 변경한다.
- 그렇다면 Virtual DOM은 어떤 기술을 사용할까?
    - 간단하게 생각하면 Real DOM(기존)을 경량화해서 복사한 것이 Virtual DOM이다.
    - Snap shot 기술을 사용해서 변경을 업데이트한다.

> Snap shot 기술이면 Git 이랑 비슷한 기술인가?

# React 설치하기

Next.js, Remix 등을 사용할 수 있다. 하지만 프레임워크 없이 Vite를 사용해서 설치한다.

```shell
pnpm create vite
```

## Babel

Babel은 현대의 JavaScript 문법을 다양한 브라우저에서 사용할 수 있도록 호환성에 맞게 문법을 변환해 주는 도구다.

## Webpack

- 현대의 웹 개발은 프레임워크, 라이브러리, 이미지 등 다양한 자료가 모여 만들어진다. Webpack은 이러한 다양한 모듈을 모아 경량화한다.
- 현재는 Webpack 외에 다양한 번들러를 사용한다. 예를 들어 Vite를 사용한다. 자세한 이야기는 [다음](https://vitejs.dev/guide/why.html)을 참고한다.

# NPM, NPX

- 이전에는 패키지를 다운로드할 때 `npm install -g`를 사용해서 전역 디렉터리에 설치했다.
    - 불필요한 패키지가 쌓여서 저장 공간을 낭비한다.
- 하지만 npx를 사용해서 다운로드하지 않고, 레지스트리(Registry)에서 패키지를 가져와 임시로 실행하는 방법이다.
    - 저장 공간을 낭비하지 않는다.

# React 애플리케이션 구조

- `index.html`: 브라우저에서 실행할 수 있도록 코드를 추가한다.
- `public`: 빌드 도구로 처리되지 않고 브라우저에 직접 제공하는 정적 파일을 관리한다.
- `src`: 소스 코드를 저장한다.
- `src/main`: 진입점이다.
    - 이전 강의에서는 `index` 파일이다. 변경된 걸까? Vite를 사용해서 그런 건지 검증이 필요하다.

## Vite 포트를 변경하는 방법

Vite는 5173 포트를 기본으로 사용한다. 하지만 포트를 변경하려면 어떻게 해야 할까?

1. 명령을 작성할 때 포트를 변경한다.(CLI)

```shell
yarn run dev -- --open --port 3000
```

2. script를 수정한다.

```shell
"dev": "vite --open --port 3000",
```

3. 설정 파일을 수정한다.

`vite.config`에 server 옵션을 추가한다.

## Naming Convention

- JavaScript에서 변수를 작성할 때 소문자 camelCase를 선호한다.
- 반면 React 컴포넌트(Component)는 PascalCase를 사용한다.
    - 기존 HTML 태그가 아님을 분명하게 구분한다.

# JSX 연습하기

- className = class

```typescript jsx
<button type="button" className="primary">
  좋아요
</button>
```

- 표현식을 사용해서 렌더링 가능하다.

```typescript jsx
<h1> 어서 오세요! {title.toUpperCase()}</h1>
<h1> 어서 오세요! {2 + 2}!</h1>
```

- 주석을 중괄호 안에 작성한다.

```typescript jsx
{
  /* 1 + 1 = 2 */
}
<h1>1 + 1 = {1 + 1}<h1>
```
