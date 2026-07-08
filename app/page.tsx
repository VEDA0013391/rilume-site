import { siteConfig } from "@/app/lib/site";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-sky-50 via-cyan-50 to-white">

      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">

        <img
          src="/icon.png"
          alt="Rilume"
          className="mb-8 h-44 w-44 rounded-full border-4 border-sky-200 shadow-xl"
        />

        <h1 className="mb-5 text-6xl font-black text-sky-700">
          {siteConfig.name}
        </h1>

        <p className="max-w-xl text-lg leading-8 text-slate-600">
          {siteConfig.description}
          <br />
          {siteConfig.longDescription}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <a
            href={siteConfig.invite_url}
            className="rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-600"
            target="_blank"
          >
            サーバーに追加
          </a>

          <a
            href={siteConfig.server_url}
            className="rounded-xl border border-sky-300 bg-white px-8 py-4 font-semibold text-sky-700 transition hover:bg-sky-100"
            target="_blank"
          >
            サポートサーバー
          </a>

        </div>

      </section>

    </main>
  );
}