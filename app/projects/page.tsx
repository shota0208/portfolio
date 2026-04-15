import Link from "next/link";
export default function Projects() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <ul className="space-y-4">
        <li>
          <a href="/projects/ddl-editor" className="text-blue-600 underline">
            DDL Editor（データベース設計ツール）
          </a>
        </li>

        <li>
          <a href="#" className="text-blue-600 underline">
            他の作品（後で追加）
          </a>
        </li>
      </ul>
    </main>
  );
}
