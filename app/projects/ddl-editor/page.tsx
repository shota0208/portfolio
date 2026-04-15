import Link from "next/link";

export default function DDLEditorPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">DDL Editor</h1>

      <p className="mb-4">
        テーブル定義・カラム追加・制約設定・SQL生成をUIで行えるデータベース設計ツールです。
      </p>

      <ul className="list-disc ml-6 mb-6">
        <li>テーブル追加・削除</li>
        <li>カラム追加・編集</li>
        <li>NOT NULL / PK / UNIQUE / CHECK / DEFAULT</li>
        <li>外部キー設定</li>
        <li>SQL自動生成</li>
        <li>JSON保存・読み込み</li>
      </ul>

      <p className="mb-4">リンクはこちら：</p>

      <ul className="list-disc ml-6 space-y-2">
        <li>
          <a
            href="https://shota0208-ddl-editor.vercel.app/"
            target="_blank"
            className="text-blue-600 underline"
          >
            デモサイト（Vercel）
          </a>
        </li>
        <li>
          <a
            href="https://github.com/shota0208/shota0208-ddl-editor"
            target="_blank"
            className="text-blue-600 underline"
          >
            GitHub リポジトリ
          </a>
        </li>
      </ul>
    </main>
  );
}
