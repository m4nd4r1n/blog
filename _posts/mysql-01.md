---
title: MySQL 계정 생성, 권한 부여
excerpt: MySQL Ver 8.0.28 for macos12.2 on arm64 (Homebrew)
date: "2022-03-30 17:20:17"
author:
  name: m4nd4r1n
  picture: /assets/blog/authors/m4nd4r1n.jpeg
ogImage:
  url: ""
published: true
coverImage: /assets/blog/mysql.png
---

# 1. MySQL 접속

```shell
mysql.server start
```

```shell
mysql -u root -p
```

<br>

# 2. 계정 추가

```shell
mysql> use mysql;
```

```shell
mysql> create user ACCOUNT@localhost identified by 'PASSWORD';
```

> ACCOUNT와 PASSWORD는 원하는 것으로 변경

<br>

# 3. 권한 부여

### 모든 DB와 테이블에 대한 모든 권한

```shell
mysql> grant all privileges on *.* to ACCOUNT@localhost;
```

### 특정 DB에 대한 모든 권한

```shell
mysql> grant all privileges on DB.* to ACCOUNT@localhost;
```

<br>

# 4. 메모리에 반영

```shell
mysql> flush privileges;
```
