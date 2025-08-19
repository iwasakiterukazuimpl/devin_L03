# devin_L03

# TODO アプリケーション

React フロントエンドと Node.js/Express バックエンドを使用したフルスタック TODO アプリケーション。

## 機能

- タスクの追加と一覧表示
- 日本語インターフェース
- リアルタイムでのタスク管理
- REST API による データ通信

## 技術スタック

### フロントエンド
- **React** (TypeScript)
- **Vite** (開発サーバー・ビルドツール)
- **Tailwind CSS** (スタイリング)
- **shadcn/ui** (UIコンポーネント)

### バックエンド
- **Node.js**
- **Express.js** (Web フレームワーク)
- **CORS** (クロスオリジン対応)
- **メモリ内データ保存** (サーバー再起動でリセット)

## プロジェクト構成

```
devin_L03/
├── todo-app/          # React フロントエンド
│   ├── src/
│   │   ├── App.tsx    # メインコンポーネント
│   │   ├── App.css    # スタイル
│   │   └── components/ui/  # shadcn/ui コンポーネント
│   ├── package.json
│   └── dist/          # ビルド出力
└── backend/           # Node.js/Express バックエンド
    ├── server.js      # Express サーバー
    ├── package.json
    └── node_modules/
```

## セットアップ手順

### 1. リポジトリのクローン

```bash
git clone https://github.com/iwasakiterukazuimpl/devin_L03.git
cd devin_L03
```

### 2. バックエンドのセットアップ

```bash
cd backend
npm install
npm start
```

バックエンドサーバーが `http://localhost:3001` で起動します。

### 3. フロントエンドのセットアップ

新しいターミナルで：

```bash
cd todo-app
npm install
npm run dev
```

フロントエンドが `http://localhost:5173` で起動します。

## API エンドポイント

### GET /todos
全てのタスクを取得

**レスポンス例:**
```json
[
  {
    "id": 1,
    "text": "買い物に行く",
    "createdAt": "2025-08-19T06:27:27.608Z"
  },
  {
    "id": 2,
    "text": "宿題をする",
    "createdAt": "2025-08-19T06:27:39.066Z"
  }
]
```

### POST /todos
新しいタスクを追加

**リクエスト例:**
```json
{
  "text": "新しいタスク"
}
```

**レスポンス例:**
```json
{
  "id": 3,
  "text": "新しいタスク",
  "createdAt": "2025-08-19T06:30:15.123Z"
}
```

## 使用方法

1. バックエンドとフロントエンドの両方を起動
2. ブラウザで `http://localhost:5173` にアクセス
3. 入力欄にタスクを入力
4. 「追加」ボタンをクリックまたは Enter キーを押下
5. タスクが一覧に表示される

## 開発情報

- **フロントエンド開発サーバー**: `npm run dev` (ポート 5173)
- **バックエンド開発サーバー**: `npm start` (ポート 3001)
- **フロントエンドビルド**: `npm run build`
- **データ保存**: メモリ内（サーバー再起動でリセット）

## 注意事項

- バックエンドサーバーを再起動すると、保存されたタスクは全て削除されます
- フロントエンドとバックエンドは異なるポートで動作するため、両方を起動する必要があります
- CORS が有効になっているため、ローカル開発環境で問題なく動作します
