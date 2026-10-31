import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone, FiArrowUp } from "react-icons/fi";
import { profile } from "../data";

const nav = [["About", "/#about"], ["Experience", "/#experience"], ["Education", "/#education"], ["Skills", "/#skills"], ["Projects", "/projects"], ["Contact", "/#contact"]];

export default function Footer() {
  const social = [
    { href: profile.linkedin, label: "LinkedIn", icon: <FaLinkedinIn />, ext: true },
    { href: profile.github, label: "GitHub", icon: <FaGithub />, ext: true },
    { href: `mailto:${profile.email}`, label: "Email", icon: <FiMail />, ext: false },
    { href: `tel:${profile.phone}`, label: "Phone", icon: <FiPhone />, ext: false },
  ].filter((x) => x.href);

  return (
    <footer className="relative bg-[#171e2b]">
      <div className="h-px bg-gradient-to-r from-transparent via-teal-300/70 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-semibold"><span className="text-teal-300">✓ </span>{profile.name}<span className="text-teal-300"> &gt;</span></p>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed max-w-xs">Software Engineer building secure, scalable banking and payment systems at Mutual Trust Bank PLC.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-teal-300 mb-4">Explore</p>
            <ul className="space-y-2 text-sm text-slate-400">
              {nav.map(([n, h]) => <li key={h}><Link href={h} className="hover:text-teal-300 transition">{n}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-teal-300 mb-4">Connect</p>
            <div className="flex gap-3">
              {social.map((x) => (
                <a key={x.label} href={x.href} aria-label={x.label} {...(x.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="w-10 h-10 grid place-items-center rounded-full border border-white/10 text-slate-300 hover:border-teal-300 hover:text-teal-300 hover:-translate-y-0.5 transition">
                  {x.icon}
                </a>
              ))}
            </div>
            <a href={`mailto:${profile.email}`} className="block text-sm text-slate-400 hover:text-teal-300 transition mt-4">{profile.email}</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <Link href="/#top" className="inline-flex items-center gap-1.5 hover:text-teal-300 transition">Back to top <FiArrowUp /></Link>
        </div>
      </div>
    </footer>
  );
}
