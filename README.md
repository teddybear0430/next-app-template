# Next.js Template

Next.jsのボイラーテンプレート。

## 概要

- Prettier, ESlintの設定済み。
- エイリアス設定済み。
- husky, pre-commit設定済み。
    - コミットする時に以下のチェックを実行
        - ESLintのチェック
        - コードのフォーマット
        - TypeScriptの型チェック
- scaffdog設定済み
    - componetのテンプレートを生成できる

## scaffdog

### pnpm scaffdogを実行する

```
pnpm scaffdog
```

CLIに沿って、コンポーネント名を入力すると以下のディレクトリ構造のコンポーネントが作成されます。   
CLIで、```Button```と入力した場合は以下のコンポーネントが生成されます。

```
.
├── components
└── Button
    ├── Button.tsx
    └── index.ts
```
