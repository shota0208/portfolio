import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">西井しょうた</h1>
      <p className="text-lg text-gray-600 mb-8">
        データ構造とUIをつなぐWebエンジニア志望
      </p>

      <div className="space-y-2 text-center">
        <p>Next.js / React / TypeScript / SQL / Vercel</p>
        <p>GitHub・作品リンクは下の Projects から</p>
      </div>
      <Link href="/projects"
      className="text-bulue-600 underline text-lg hover:text-blue-800 mt-6"
        >
        projects ページへ
        </Link>
    </main>
  );
}
