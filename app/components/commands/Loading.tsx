export default function Loading() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="
            animate-pulse
            rounded-2xl
            border
            border-sky-200
            bg-white
            p-6
            shadow-sm
          "
        >
          {/* タイトル */}
          <div className="mb-4 h-7 w-32 rounded-lg bg-slate-200" />

          {/* 説明 */}
          <div className="mb-2 h-4 w-full rounded bg-slate-200" />
          <div className="mb-2 h-4 w-5/6 rounded bg-slate-200" />
          <div className="mb-6 h-4 w-2/3 rounded bg-slate-200" />

          {/* バッジ */}
          <div className="mb-6 flex gap-2">
            <div className="h-7 w-20 rounded-full bg-slate-200" />
            <div className="h-7 w-16 rounded-full bg-slate-200" />
          </div>

          {/* ボタン */}
          <div className="h-11 w-full rounded-xl bg-slate-200" />
        </div>
      ))}
    </div>
  );
}