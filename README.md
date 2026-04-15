# DDL Editor - データベース設計ツール

UI 上でテーブル定義・カラム追加・制約設定・SQL生成を行える  
データベース設計ツールです。

Next.js + React を使用し、実務に近い DB 設計フローを  
ブラウザ上で再現しています。

---

## 🔗 デモ（Vercel）
https://shota0208-ddl-editor.vercel.app/

## 💻 GitHub リポジトリ
https://github.com/shota0208/shota0208-ddl-editor

---

## 📸 スクリーンショット

<img src="/screenshot.png" width="600" />

---

## ✨ 主な機能

- テーブル追加・削除  
- カラム追加・編集  
- NOT NULL / PRIMARY KEY / UNIQUE  
- CHECK 制約  
- DEFAULT 値設定  
- 外部キー設定  
- SQL 自動生成  
- JSON 保存・読み込み  

---

## 🛠 技術構成（Tech Stack）

- **Next.js (App Router)**
- **React Hooks**
- **TypeScript**
- **Tailwind CSS**
- **MySQL（ローカル接続）**
- **Vercel（デプロイ）**

---

## 💡 工夫した点

- UI だけで DB 設計が完結するように設計  
- JSON で保存・読み込みできるため、複数の設計を管理可能  
- SQL を自動生成し、実務の CREATE TABLE に近い形式を再現  
- Next.js の API Routes を使い、フロントとバックエンドを統合  
- カラムごとに制約を細かく設定できる柔軟な UI を実装  

---

## 🚀 セットアップ方法

```bash
npm install
npm run dev
