---
title: PlanetScale 시작하기
excerpt: PlanetScale
date: "2022-04-12 22:49:06"
author:
  name: m4nd4r1n
  picture: /assets/blog/authors/m4nd4r1n.jpeg
ogImage:
  url: ""
published: true
coverImage: /assets/blog/planetscale.png
---

# Planet Scale

MySQL 호환 Serverless 데이터베이스 플랫폼

> [공식 문서](https://docs.planetscale.com/)

<br>

> ### Vitess
>
> MySQL을 scaling 하기 위한 데이터베이스 클러스터링 시스템
>
> [공식 문서](https://vitess.io/docs/)

<br>

## PlanetScale CLI 설치

### macOS

```shell
brew install planetscale/tap/pscale
```

<br>

### Linux

[Release 페이지](https://github.com/planetscale/cli/releases)에서 .deb 또는 .rpm 파일 다운로드 후 `sudo dpkg -i` 또는 `sudo rpm -i`로 설치

<br>

### Windows

`scoop`으로 설치

```shell
scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
scoop install pscale mysql
```

> 출처 - [PlanetScale GitHub](https://github.com/planetscale/cli#installation)

<br>

## PlanetScale DB 생성 및 연결하기

### 로그인

```shell
pscale auth login
```

<br>

### 지역 확인하기

```shell
pscale region list
```

<br>

### DB 생성하기

```shell
pscale database create <database> --region <region>
```

<br>

### DB 연결하기

> MySQL 서버가 실행중인 경우 포트 충돌
>
> 다른 포트로 연결하기

```shell
pscale connect <database> <branch> --port <port>
```

<br>

연결 후 [TablePlus](https://tableplus.com/)등을 통해 `mysql://127.0.0.1:<port>/<database>`로 접속
