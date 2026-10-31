"use client";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { profile, projects, companies } from "../data";

export default function ProjectsView() {
  const [filter, setFilter] = useState<string>("All");
  const shown = projects.filter((p) => filter === "All" || p.company === filter);
  return (
    <>
      <div id="top" />
      <Header />
      <section className="hero-bg">
        <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-28 text-center">
          <p className="text-xs uppercase tracking-widest text-teal-300">Selected work</p>
          <h1 className="text-3xl md:text-4xl font-medium mt-2">Projects</h1>
          <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto">Banking, payments and telecom systems I have built across MTB, LEADS and Supernova.</p>
        </div>
        <div className="skyline" />
      </section>
      <main className="bg-[#262f40] min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {companies.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`text-xs uppercase tracking-wider px-4 py-1.5 rounded border transition ${filter === c ? "bg-teal-300 text-slate-900 border-teal-300" : "border-teal-300/50 text-teal-300 hover:border-teal-300"}`}>{c}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {shown.map((p) => (
              <article key={p.title} className="card p-6 flex flex-col">
                <p className="text-[10px] uppercase tracking-widest text-teal-300 mb-1">{p.company}</p>
                <h2 className="font-semibold">{p.title}</h2>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">{p.desc}</p>
                {p.points && (
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                    {p.points.map((pt) => <li key={pt} className="flex gap-2"><span className="text-teal-300">▹</span>{pt}</li>)}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mt-5">{p.stack.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
