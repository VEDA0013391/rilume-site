import type { Metadata } from "next";
import {
  FaCode,
  FaGithub,
  FaPalette,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import { siteConfig } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "基本情報",
};

const features = [
  {
    icon: FaShieldAlt,
    title: "多機能",
    description: "サーバーを楽しくするコマンドを詰め込んでいます。",
    color: "bg-sky-500",
  },
  {
    icon: FaGithub,
    title: "オープンソース",
    description: "GitHubでソースコードを公開しています。",
    color: "bg-slate-900",
  },
];

const techs = [
  {
    icon: FaCode,
    title: "Language",
    value: "JavaScript",
  },
  {
    icon: FaServer,
    title: "Library",
    value: "Discord.js v14",
  },
  {
    icon: FaCode,
    title: "Website",
    value: "Next.js 16",
  },
  {
    icon: FaPalette,
    title: "UI",
    value: "Tailwind CSS",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-sky-50 via-cyan-50 to-white">

      <section className="mx-auto max-w-6xl px-6 py-16">

        <h1 className="mb-4 text-center text-5xl font-black text-sky-700">
          About
        </h1>

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-9 text-slate-600">
          <span className="font-bold text-sky-600">{siteConfig.name}</span>
          は、便利で使いやすいDiscord Botを目指して開発されています。
          <br />
          豊富な機能を搭載、ユーザーからの意見を取り入れてアップデートも行っています
        </p>

        {/* 特徴 */}
        <h2 className="mb-8 text-3xl font-bold text-slate-800">
          特徴
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-sky-200 bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mb-5 inline-flex rounded-2xl p-4 text-3xl text-white ${feature.color}`}
                >
                  <Icon />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-slate-800">
                  {feature.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 技術情報 */}
        <h2 className="mt-20 mb-8 text-3xl font-bold text-slate-800">
          開発情報
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {techs.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.title}
                className="flex items-center gap-5 rounded-2xl border border-sky-200 bg-white p-5 shadow-sm"
              >
                <div className="rounded-xl bg-sky-500 p-3 text-2xl text-white">
                  <Icon />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    {tech.title}
                  </p>

                  <p className="text-lg font-semibold text-slate-800">
                    {tech.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </section>

    </main>
  );
}