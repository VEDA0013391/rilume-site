"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { siteConfig } from "@/app/lib/site";

const links = [
  { href: "/", label: "ホーム" },
  { href: "/commands", label: "コマンド" },
  { href: "/status", label: "ステータス" },
  { href: "/terms", label: "利用規約" },
  { href: "/support", label: "サポート" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold text-sky-600"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="text-3xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

      </div>

      {open && (
        <nav className="border-t bg-white md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b px-6 py-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}