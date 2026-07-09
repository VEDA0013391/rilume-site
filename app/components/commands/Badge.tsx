// カラーバッジ
type Color =
  | "sky"
  | "emerald"
  | "red"
  | "amber"
  | "slate";

type Props = {
  children: React.ReactNode;
  color?: Color;
};

const colors: Record<Color, string> = {
  sky: "bg-sky-100 text-sky-700 border-sky-200",
  emerald: "bg-emerald-100 text-emerald-700 border-emerald-200",
  red: "bg-red-100 text-red-700 border-red-200",
  amber: "bg-amber-100 text-amber-700 border-amber-200",
  slate: "bg-slate-100 text-slate-700 border-slate-200",
};

export default function Badge({
  children,
  color = "sky",
}: Props) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-3
        py-1
        text-xs
        font-semibold
        tracking-wide
        ${colors[color]}
      `}
    >
      {children}
    </span>
  );
}