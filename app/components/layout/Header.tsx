"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { siteConfig } from "@/app/lib/site";

const links = [
  { href: "/", label: "ホーム" },
  { href: "/commands", label: "コマンド" },
  { href: "/status", label: "稼働状況" },
  { href: "/support", label: "サポート" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/80 backdrop-blur">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

      <Link
        href="/"
        className="
          flex
          items-center
          gap-3
          text-2xl
          font-bold
          text-sky-600
          transition
          hover:scale-105
          whitespace-nowrap
        "
      >
        <img
          src="/icon.png"
          alt={siteConfig.name}
          className="
            h-10
            w-10
            rounded-full
            border-2
            border-sky-200
          "
        />
        {siteConfig.name}
      </Link>

        {/* PC用 */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                relative
                text-gray-700
                transition
                hover:text-sky-600
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-sky-500
                after:transition-all
                hover:after:w-full
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>


        {/* ハンバーガメニュー */}
        <button
          className="
            relative
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            text-3xl
            text-gray-700
            transition
            hover:bg-sky-100
            md:hidden
          "
          onClick={() => setOpen(!open)}
        >
          <span
            className={`
              transition-transform duration-300
              ${open ? "rotate-180 scale-90" : ""}
            `}
          >
            {open ? <HiOutlineX /> : <HiOutlineMenu />}
          </span>
        </button>

      </div>

      {/* スマホ用 */}
      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          ease-in-out
          md:hidden

          ${
            open
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav
          className="
            border-t
            border-sky-100
            bg-white/95
            px-6
            py-4
            backdrop-blur
          "
        >

          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`
                block
                border-b
                border-sky-100
                px-4
                py-4
                text-gray-700

                transition-all
                duration-500
                ease-out

                hover:bg-sky-50
                hover:text-sky-600

                last:border-b-0

                ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-5 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}

        </nav>
      </div>

    </header>
  );
}