# sakenowa

[さけのわ API](https://sakenowa.com/)から取得した
日本酒ランキング情報をもとに、React・Recoil を用いた日本酒ランキング閲覧サイト

## Dependency

- build
  - vite 2.7
- Front
  - React 17.0
  - Recoil 0.5
  - typescript 4.4
- Design
  - emotion 11.7
  - mui 5.3
- test
  - vitest 0.2

## Setup

- `git clone https://github.com/ogaru-sh/SakeRanking`
- `npm install`
- `npm run build`
- `npm run start`
- `http://localhost:3000/`へアクセス

### Develop mode

`npm run dev`

### Demo

- firebase
  - https://sakeranking.web.app
  - さけのわ API へアクセスする際に、現状はローカルから接続のみ可能
  - Demo を確認する際は `npm run dev` を実行したあと確認可能

### Function

- タブ
  - ランキング
    - さけのわ API から日本酒ランキングを取得し表示
  - お気に入り
    - ランキングページでスターボタンを押したものをお気に入りとして表示
