// その他のエラー
"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-sky-50 via-cyan-50 to-white">
      <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">

        <h1 className="error-code mb-4 text-8xl font-black text-red-500">
          502
        </h1>

        <h2 className="mb-4 text-3xl font-bold text-slate-800">
          Bad Gateway
        </h2>

        <p className="mb-10 max-w-xl leading-8 text-slate-600">
          サーバーとの通信中にエラーが発生しました。
          時間をおいてもう一度お試しください。
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <button
            onClick={() => reset()}
            className="rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-600"
          >
            再試行
          </button>

          <Link
            href="/"
            className="rounded-xl border border-sky-300 bg-white px-8 py-4 font-semibold text-sky-700 transition hover:bg-sky-100"
          >
            ホームへ戻る
          </Link>

        </div>

      </section>
    </main>
  );
}