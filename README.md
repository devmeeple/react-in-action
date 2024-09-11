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
