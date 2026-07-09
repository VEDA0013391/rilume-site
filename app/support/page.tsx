import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/app/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サポート",
};

export default function Support() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-sky-50 via-cyan-50 to-white">
      <section className="mx-auto max-w-6xl px-6 py-16">

        <h1 className="mb-4 text-center text-4xl font-bold text-sky-700">
          サポート
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-center text-lg leading-8 text-slate-600">
          以下からお気軽にご連絡ください。
        </p>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Twitter */}
          <div className="rounded-3xl border border-sky-200 bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-slate-900 p-4 text-3xl text-white">
                <FaXTwitter />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  X (Twitter)
                </h2>
                <p className="text-slate-500">
                  Xから報告したい方はこちら
                </p>
              </div>
            </div>

            <p className="mb-8 leading-8 text-slate-600">
              バグ報告や機能提案などをDMで受け付けています。
            </p>

            <a
              href={siteConfig.twitter_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Xで連絡する
            </a>
          </div>

          {/* Discord */}
          <div className="rounded-3xl border border-sky-200 bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-[#5865F2] p-4 text-3xl text-white">
                <FaDiscord />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Discord
                </h2>
                <p className="text-slate-500">
                  Discordで連絡したい方はこちら
                </p>
              </div>
            </div>

            <p className="mb-8 leading-8 text-slate-600">
              サポートサーバーでは、質問・バグ報告・機能提案などを受け付けています。
            </p>

            <a
              href={siteConfig.server_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl bg-[#5865F2] px-6 py-3 font-semibold text-white transition hover:bg-[#4752C4]"
            >
              サポートサーバーへ
            </a>
          </div>

        </div>

      </section>
    </main>
  );
}