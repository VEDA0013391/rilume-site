import Image from "next/image";
import { siteConfig } from "@/app/lib/site";

export default function Home() {
  const titleChars = siteConfig.name.split("");

  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-sky-50 via-cyan-50 to-white">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">

        <div className="icon-ring mb-8">
          <Image
            src="/icon.png"
            alt={siteConfig.name}
            width={176}
            height={176}
            priority
            className="rounded-full bg-white p-1"
          />
        </div>

        <h1 className="mb-5 text-6xl font-black text-sky-700">
          {titleChars.map((char, index) => (
            <span
              key={index}
              className="title-char"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="max-w-xl text-lg leading-8 text-slate-600">
          {siteConfig.description}
          <br />
          {siteConfig.longDescription}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <a
            href={siteConfig.invite_url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-600"
          >
            サーバーに追加
          </a>

          <a
            href={siteConfig.server_url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-sky-300 bg-white px-8 py-4 font-semibold text-sky-700 transition hover:bg-sky-100"
          >
            サポートサーバー
          </a>

        </div>

      </section>
    </main>
  );
}