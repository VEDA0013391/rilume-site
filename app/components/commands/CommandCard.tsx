"use client";

import { DiscordCommand } from "@/app/lib/discord";
import { getIntegrationNames, getTypeName } from "@/app/lib/command";
import Badge from "./Badge";

type Props = {
  command: DiscordCommand;
  onOpen: (command: DiscordCommand) => void;
};

export default function CommandCard({ command, onOpen }: Props) {
  const integrations = getIntegrationNames(command.integration_types);

  return (
    <div
      className="
        rounded-2xl
        border
        border-sky-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <h2 className="mb-2 text-2xl font-bold text-sky-700">
        {command.type === 1 ? `/${command.name}` : command.name}
      </h2>

      <p className="mb-6 min-h-12 text-slate-600">
        {command.description || "コマンドの説明がありません"}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {/* Type */}
        <Badge color="sky">{getTypeName(command.type)}</Badge>

        {/* Integration types */}
        {integrations.map((integration) => (
          <Badge key={integration} color="emerald">
            {integration}
          </Badge>
        ))}

        {/* NSFW */}
        {command.nsfw && <Badge color="red">NSFW</Badge>}
      </div>

      {/* 詳細ボタン */}
      <button
        onClick={() => onOpen(command)}
        className="
          w-full
          rounded-xl
          bg-sky-500
          px-4
          py-3
          font-semibold
          text-white
          transition
          hover:bg-sky-600
        "
      >
        詳細を見る
      </button>
    </div>
  );
}