// 404エラー
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-sky-50 via-cyan-50 to-white">
      <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">

        <h1 className="error-code mb-4 text-8xl font-black text-sky-700">
          404
        </h1>

        <h2 className="mb-4 text-3xl font-bold text-slate-800">
          ページが見つかりません
        </h2>

        <p className="mb-10 max-w-xl leading-8 text-slate-600">
          お探しのページは存在しないか、
          移動または削除された可能性があります。
        </p>

        <Link
          href="/"
          className="rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-600"
        >
          ホームへ戻る
        </Link>

      </section>
    </main>
  );
}