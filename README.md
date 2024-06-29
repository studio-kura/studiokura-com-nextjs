# studiokura-com-nextjs

Studio Kura 絵画教室のウェブサイト。

- パッケージマネージャー: [Yarn](https://yarnpkg.com/)
- フレームワーク: [Next.js](https://nextjs.org/)
- React コンポーネント: [Chakra UI](https://v2.chakra-ui.com/)

## ローカル環境での開発までの準備

### 必要なソフトをインストール

- [git](https://git-scm.com/) (バージョン管理)
- [Node.js](https://nodejs.org/) (JavaScript エンジン)
- [Yarn](https://yarnpkg.com/) (パッケージマネージャー)
- [Visual Studio Code](https://code.visualstudio.com/) (など任意のコードエディタ)

### リポジトリを clone

リポジトリを自分のパソコンにダウンロードして、Github 上のリポジトリと紐づける。

\* 新しく Vercel にデプロイする場合、Github 上でリポジトリを Github 個人アカウントで fork して、代わりにそれを clone すると良い。

```sh
git clone https://github.com/studio-kura/studiokura-com-nextjs.git
```

### 環境変数を用意する

`.env.sample` を複製し `.env.local` と名付ける。

```sh
cp  .env.sample .env.local
```

`.env.sample` をそのままにし `.env.local` の環境変数を埋める。

- `NEXT_PUBLIC_CDN_DOMAIN` と `NEXT_PUBLIC_CDN_DIRECTORY` に関しては下記に説明あり
- `NEXT_PUBLIC_PHONE_NUMBER`: 絵画教室の電話番号
- `CONTACT_FORM_API_URI`: [Studio Kura 情報管理システム](https://github.com/studio-kura/studiokura-cake-intranet)の Contact submit エンドポイントの URI
- `KINDERGARTENS_FORM_API_URI`: 情報管理システムの KindergartenContact submit エンドポイントの URI

\* 実際の環境変数の値は、非公開ドキュメントを参照

### CDN を用意・更新

ロゴと favicon が `public/` に入っているが、それ以外の画像が CDN に置いてある。画像の要求が返されれば良いので、ただの nginx や apache、もしくは AWS の S3 などで実装できる。

- `NEXT_PUBLIC_CDN_DOMAIN`: 画像が置いてあるドメインかサブドメイン (例: cdn.\*\*\*\*\*\*\*\*.com)
- `NEXT_PUBLIC_CDN_DIRECTORY`: ドメインの中で、画像が置いてあるディレクトリ（ない場合は `/` で良い）

* 実際の環境変数の値は、非公開ドキュメントを参照

新しい画像を追加する場合は `tools/populate-cdn.sh` に新しい画像をダウンロードできるコマンドを追加する。

## ローカル環境での開発

1. リポジトリのディレクトリに入る: `cd studiokura-com-nextjs`
2. 必要なパッケージをインストール: `yarn`
3. 開発用サーバーを起動: `yarn dev`
4. 作業が終わる時やサーバーを再起動したい場合: Ctrl+C で終了させる

開発用サーバーを起動している間、コードに加えたほとんどの変更がそのまま反映される。

1. 作業する場合はまず一つの [issue](https://github.com/studio-kura/studiokura-com-nextjs/issues) を目的にしてブランチを切る: `git switch -c feature/issue-{issue-number}/{issue-description}`
2. ローカルサーバーで確認しながら作業を進める
3. キリがいいところでコミットする: `git add` からの `git commit`
4. 新しいコミットの入ったブランチを Github にプッシュする: `git push`
5. Github 上で PR を作成すると、テスト用デプロイが行われるのでそれも確認する
6. PR が merge されると、本番環境へのデプロイが行われる

\* リポジトリを fork していても issue は大本のものを使う

\* PR の件名・内容やコミットのメッセージは言語を問わないが、ブランチ名は手短に英語で書く（主に issue 番号で識別するので、プレッシャーを感じないこと）

\* PR ごとのテストデプロイは、デプロイが設定されているリポジトリでのみ行われる（個人の fork を推薦）
