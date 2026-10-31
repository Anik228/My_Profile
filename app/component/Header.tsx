"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data";

const links = [["About", "/#about"], ["Experience", "/#experience"], ["Education", "/#education"], ["Skills", "/#skills"], ["Projects", "/projects"], ["Contact", "/#contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#1d2533]/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-sm"><span className="text-teal-300">✓ </span>{profile.name}<span className="text-teal-300"> &gt;</span></Link>
        <div className="hidden md:flex gap-10 text-sm text-slate-300">
          {links.map(([n, h]) => <Link key={h} href={h} className="hover:text-teal-300 transition">{n}</Link>)}
        </div>
        <button aria-label="Menu" className="md:hidden text-xl" onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
      </nav>
      {open && <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm">{links.map(([n, h]) => <Link key={h} href={h} onClick={() => setOpen(false)}>{n}</Link>)}</div>}
    </header>
  );
}
