// コマンド詳細用モーダル
"use client";

import { useEffect, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { DiscordCommand } from "@/app/lib/discord";
import Badge from "./Badge";

type Props = {
  command: DiscordCommand | null;
  open: boolean;
  onClose: () => void;
};

function PreviewImage({ name }: { name: string }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        className="
          flex
          h-72
          items-center
          justify-center
          rounded-2xl
          border-2
          border-dashed
          border-slate-300
          text-slate-400
        "
      >
        画像はありません
      </div>
    );
  }

  return (
    <img
      src={`/commands/${name}.png`}
      alt={name}
      onError={() => setImageError(true)}
      className="
        w-full
        rounded-2xl
        border
        border-slate-200
        shadow
      "
    />
  );
}

export default function CommandModal({
  command,
  open,
  onClose,
}: Props) {
  useEffect(() => {
    if (!open) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [open, onClose]);

  if (!open || !command) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        p-4
        backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-3xl
          overflow-y-auto
          rounded-3xl
          bg-white
          p-8
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            rounded-lg
            p-2
            text-2xl
            text-slate-500
            transition
            hover:bg-slate-100
          "
        >
          <HiOutlineX />
        </button>

        <h2 className="mb-2 text-4xl font-bold text-sky-700">
        {command.type === 1 ? `/${command.name}` : command.name}
        </h2>

        <p className="mb-8 text-lg leading-8 text-slate-600">
          {command.description || "説明はありません。"}
        </p>

        <h3 className="mb-4 text-2xl font-semibold">
          オプション
        </h3>

        {command.options?.length ? (
          <div className="space-y-4">
            {command.options.map((option) => (
              <div
                key={option.name}
                className="
                  rounded-xl
                  border
                  border-slate-200
                  p-4
                "
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h4 className="font-bold">
                    {option.name}
                  </h4>

                  {option.required && (
                    <Badge color="red">
                      REQUIRED
                    </Badge>
                  )}
                </div>

                <p className="mt-2 text-slate-600">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-500">
            オプションはありません。
          </p>
        )}

        <h3 className="mb-4 mt-10 text-2xl font-semibold">
          プレビュー
        </h3>

        <PreviewImage
          key={command.name}
          name={command.name}
        />
      </div>
    </div>
  );
}