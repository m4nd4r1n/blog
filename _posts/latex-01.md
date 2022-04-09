---
title: Visual Studio Code에서 LaTeX 편집하기
excerpt: LaTeX
date: "2022-04-09 19:03:37"
author:
  name: m4nd4r1n
  picture: /assets/blog/authors/m4nd4r1n.jpeg
ogImage:
  url: ""
published: true
coverImage: /assets/blog/LaTeX.png
---

# LaTeX

LaTeX는 고품질 조판 시스템입니다. 여기에는 기술 및 과학 문서 작성을 위해 설계된 기능이 포함됩니다. LaTeX는 과학 문서의 커뮤니케이션 및 출판을 위한 사실상의 표준입니다. LaTeX는 무료 소프트웨어로 제공됩니다.

> _출처_ - _[공식 문서](https://www.latex-project.org/help/documentation/)_

<br>

## 1. texlive 설치

### Mac

```shell
$ brew install texlive
```

### Windows

[설치 링크](https://www.tug.org/texlive/windows.html)

<br>

## 2. LaTeX Workshop [확장 프로그램](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) 설치

<br>

## 3. 편집

```latex
% main.tex

\documentclass[12pt]{article}
\usepackage{amsmath}
\title{\LaTeX}
\date{}
\begin{document}
  \maketitle
  \LaTeX{} is a document preparation system for the \TeX{}
  typesetting program. It offers programmable desktop publishing
  features and extensive facilities for automating most aspects of
  typesetting and desktop publishing, including numbering and
  cross-referencing, tables and figures, page layout, bibliographies,
  and much more. \LaTeX{} was originally written in 1984 by Leslie
  Lamport and has become the dominant method for using \TeX; few
  people write in plain \TeX{} anymore. The current version  is
  \LaTeXe.

  % This is a comment; it will not be shown in the final output.
  % The following shows a little of the typesetting power of LaTeX:
  \begin{align}
    E &= mc^2                              \\
    m &= \frac{m_0}{\sqrt{1-\frac{v^2}{c^2}}}
  \end{align}
\end{document}
```

저장하면 자동으로 다음과 같이 pdf 문서를 생성한다.

![](/assets/blog/LaTeX-preview.png)
