"use client";

import { useEffect, useState } from "react";
import CommandCard from "@/app/components/commands/CommandCard";
import CommandModal from "@/app/components/commands/CommandModal";
import { DiscordCommand } from "@/app/lib/discord";
import Loading from "@/app/components/commands/Loading";

export default function CommandsClient() {
  const [commands, setCommands] = useState<DiscordCommand[]>([]);
  const [selected, setSelected] = useState<DiscordCommand | null>(null);
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/commands");

        if (!res.ok) {
          throw new Error();
        }

        const data = await res.json();

        setCommands(
          data.sort((a: DiscordCommand, b: DiscordCommand) =>
            a.name.localeCompare(b.name)
          )
        );
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  function openModal(command: DiscordCommand) {
    setSelected(command);
    setOpen(true);
  }

  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-sky-50 via-cyan-50 to-white">
      <section className="mx-auto max-w-7xl px-6 py-16">

        <h1 className="mb-4 text-center text-4xl font-bold text-sky-700">
          コマンド一覧
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-slate-600">
          Rilumeで利用できるコマンド一覧です。
          「詳細を見る」からオプションや使用例を確認できます。
        </p>

        {loading && <Loading />}

        {error && (
          <div className="py-20 text-center text-red-500">
            コマンドの取得に失敗しました。
          </div>
        )}

        {!loading && !error && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {commands.map((command) => (
              <CommandCard
                key={command.id}
                command={command}
                onOpen={openModal}
              />
            ))}
          </div>
        )}

        <CommandModal
          command={selected}
          open={open}
          onClose={() => setOpen(false)}
        />

      </section>
    </main>
  );
}