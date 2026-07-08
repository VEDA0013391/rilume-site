import fs from "fs";
import path from "path";
import { M_PLUS_Rounded_1c } from "next/font/google";

const rounded = M_PLUS_Rounded_1c({
  weight: [
    "400",
    "500",
    "700",
  ],
  subsets: ["latin"],
});

type Props = {
  title: string;
  file: "terms.txt" | "privacy-policy.txt";
};

export default function PolicyViewer({ title, file }: Props) {
  const filePath = path.join(process.cwd(), "app/content", file);
  const content = fs.readFileSync(filePath, "utf8");

  const sections = content
    .split(/\n(?=\d+\.\s)/)
    .map((section) => section.trim())
    .filter(Boolean);

  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-sky-50 via-cyan-50 to-white">
      <div className="mx-auto max-w-5xl px-6 py-16">

        <h1 className="mb-8 text-4xl font-bold text-sky-700">
          {title}
        </h1>

        <div
          className={`
            ${rounded.className}
            max-h-[70vh]
            overflow-y-auto
            rounded-2xl
            border
            border-sky-200
            bg-white
            p-8
            shadow
          `}
        >
          {sections.map((section, index) => (
            <div key={index}>

              <pre
                className="
                  whitespace-pre-wrap
                  leading-8
                  tracking-wide
                  text-slate-700
                "
              >
                {section}
              </pre>

              {index !== sections.length - 1 && (
                <hr className="my-8 border-slate-200" />
              )}

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}