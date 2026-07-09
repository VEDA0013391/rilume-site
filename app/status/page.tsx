import type { Metadata } from "next";
import {
  FaServer,
  FaUsers,
  FaClock,
  FaCircle,
} from "react-icons/fa";
import { getLatestStatus } from "@/app/lib/status";
import CountUp from "@/app/components/status/CountUp";

export const metadata: Metadata = {
  title: "稼働状況",
};

export default async function StatusPage() {
  const status = await getLatestStatus();
  const recordedDate = status
    ? new Date(status.recordedAt)
    : null;

  // 日本時間表示
  const updated = recordedDate
    ? recordedDate.toLocaleString("ja-JP", {
        timeZone: "Asia/Tokyo",
      })
    : "-";

  // 30分以内ならOnline
  const isOnline = recordedDate
    ? Date.now() - recordedDate.getTime() < 30 * 60 * 1000
    : false;

  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-sky-50 via-cyan-50 to-white">

      <section className="mx-auto max-w-5xl px-6 py-16">

        <h1 className="mb-4 text-center text-5xl font-black text-sky-700">
          稼働状況
        </h1>

        <p className="mb-12 text-center text-lg text-slate-600">
          現在のRilumeの稼働情報です。
        </p>


        {/* Status */}
        <div className="mb-8 flex items-center justify-center gap-3">

          <FaCircle
            className={
              isOnline
                ? "text-green-500"
                : "text-red-500"
            }
          />

          <span
            className={`
              text-xl
              font-bold
              ${
                isOnline
                  ? "text-green-600"
                  : "text-red-600"
              }
            `}
          >
            {isOnline ? "Online" : "Offline"}
          </span>

        </div>


        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow">

            <FaServer className="mb-4 text-4xl text-sky-500" />

            <h2 className="text-lg text-slate-500">
              Servers
            </h2>

            <p className="mt-2 text-5xl font-black text-slate-800">
              {status ? (
                <CountUp value={status.guildCount} />
              ) : (
                "-"
              )}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">

            <FaUsers className="mb-4 text-4xl text-sky-500" />

            <h2 className="text-lg text-slate-500">
              Members
            </h2>

            <p className="mt-2 text-5xl font-black text-slate-800">
              {status ? (
                <CountUp value={status.memberCount} />
              ) : (
                "-"
              )}
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">

            <FaClock className="mb-4 text-4xl text-sky-500" />

            <h2 className="text-lg text-slate-500">
              Last Updated
            </h2>

            <p className="mt-2 text-xl font-semibold text-slate-800">
              {updated}
            </p>

          </div>
        </div>
        
      </section>

    </main>
  );
}