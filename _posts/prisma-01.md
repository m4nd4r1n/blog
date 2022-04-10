---
title: Prisma 시작하기
excerpt: Prisma v3.12.0
date: "2022-04-01 01:53:23"
author:
  name: m4nd4r1n
  picture: /assets/blog/authors/m4nd4r1n.jpeg
ogImage:
  url: ""
published: true
coverImage: /assets/blog/prisma.png
---

# Prisma

Node.js 및 Typescript ORM(Object Relational Mapping)

PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, CockroachDB(프리뷰) 지원

> [공식 문서](https://www.prisma.io/docs/)

<br>

## Prisma 설치

### npm

```shell
$ npm i -D prisma
```

### yarn

```shell
$ yarn add -D prisma
```

<br>

## Prisma 프로젝트 생성

```shell
$ npx prisma init
```

<br>

## DB 연결

```text
# .env 파일
# PostgreSQL, MySQL 등의 DB URL 입력

DATABASE_URL=postgresql://<사용자>:<비밀번호>@<주소>:5432/<DB명>
```

<br>

## DB 테이블 작성

> Visual Studio Code를 사용하는 경우 [확장 프로그램](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) 설치하기

```ts
// prisma/schema.prisma 파일

generator client {
  provider = "prisma-client-js"
}

datasource db {
  // 사용하는 DB에 맞게 provider 설정
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// 테이블 작성

model User {
  id        Int       @id @default(autoincrement())
  name      String    @unique
  phone     String    @unique
  createdAt DateTime? @default(now())
  updateAt  DateTime? @updatedAt
}
```

> [Prisma schema 공식 문서](https://www.prisma.io/docs/concepts/components/prisma-schema)

<br>

## DB에 적용

```shell
$ npx prisma db push
```

<br>

## + Prisma Studio

```shell
$ npx prisma studio
```
