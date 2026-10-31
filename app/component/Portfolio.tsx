"use client";
import React, { useEffect, useState } from "react";
import { FaJava, FaGithub, FaLinkedin, FaDatabase, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { SiSpringboot, SiOracle, SiPostgresql, SiDotnet, SiApachekafka, SiNodedotjs } from "react-icons/si";
import { FiMail, FiPhone, FiArrowRight, FiChevronDown } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";
import { profile, experience, skills, education, projects } from "../data";

const icons: Record<string, React.ReactNode> = {
  java: <FaJava />, spring: <SiSpringboot />, oracle: <SiOracle />, mssql: <FaDatabase />,
  pg: <SiPostgresql />, dotnet: <SiDotnet />, kafka: <SiApachekafka />, node: <SiNodedotjs />,
};

function useReveal() {
  useEffect(() => {
    const io: IntersectionObserver = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const Title = ({ children, sub }: { children: React.ReactNode; sub?: string }) => (
  <div className="reveal text-center mb-12">
    <h2 className="sec-title !mb-2"><i />{children}</h2>
    {sub && <p className="text-xs text-slate-400">{sub}</p>}
  </div>
);

function splitPoint(t: string) {
  const m = t.match(/^([^:]{2,48}):\s+(.+)$/);
  return m ? { head: m[1], body: m[2] } : { head: "", body: t };
}

function HeroArt() {
  return (
    <svg viewBox="0 0 400 320" className="w-full max-w-md float" role="img" aria-label="Developer at desk">
      <polygon points="40,230 200,300 360,230 200,160" fill="#5eead4" opacity=".9" />
      <polygon points="40,230 200,300 200,318 40,248" fill="#2dd4bf" />
      <polygon points="200,300 360,230 360,248 200,318" fill="#14b8a6" />
      <polygon points="150,60 270,100 270,200 150,160" fill="#1e293b" stroke="#475569" strokeWidth="3" />
      <polygon points="158,72 262,108 262,190 158,154" fill="#0f172a" />
      <text x="182" y="128" fill="#5eead4" fontSize="22" fontFamily="monospace" transform="rotate(18 182 128)">{"</>"}</text>
      <polygon points="195,175 225,186 225,198 195,187" fill="#334155" />
      <rect x="86" y="120" width="52" height="30" rx="4" fill="#334155" transform="rotate(8 86 120)" />
      <text x="92" y="142" fill="#fff" fontSize="14" fontWeight="700" transform="rotate(8 92 142)">JAVA</text>
      <rect x="278" y="84" width="58" height="30" rx="4" fill="#334155" transform="rotate(-8 278 84)" />
      <text x="284" y="105" fill="#fff" fontSize="14" fontWeight="700" transform="rotate(-8 284 105)">SQL</text>
      <circle cx="108" cy="190" r="20" fill="#f1c9a5" />
      <path d="M86 186 q22 -30 44 0 z" fill="#1e293b" />
      <rect x="92" y="208" width="34" height="40" rx="10" fill="#5eead4" />
    </svg>
  );
}

type Job = (typeof experience)[number];

function ExperienceItem({ e }: { e: Job }) {
  const [open, setOpen] = useState(false);
  const long = e.summary.length > 230;
  return (
    <div className="reveal relative">
      <span className={`node ${e.current ? "live" : ""}`}><FaBriefcase size={14} /></span>
      <article className="xp-card p-5 md:p-7">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
          <div className="flex items-start gap-4 min-w-0">
            {e.logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={e.logo} alt={e.company} className="h-12 w-auto max-w-[8rem] rounded-lg bg-white p-1.5 object-contain shrink-0" />
            )}
            <div className="min-w-0">
              <h3 className="font-semibold leading-snug">{e.title}</h3>
              <p className="text-teal-300 text-sm">{e.company}</p>
              <p className="text-xs text-slate-400 mt-0.5">{e.team}</p>
            </div>
          </div>
          <div className="flex sm:flex-col sm:items-end gap-2 shrink-0 self-start">
            <span className="chip whitespace-nowrap">{e.period}</span>
            {e.current && (
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-emerald-300">
                <i className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Current role
              </span>
            )}
          </div>
        </div>

        <p
          className="text-sm text-slate-300 mt-5 leading-relaxed text-justify"
          style={open || !long ? undefined : { display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}
        >
          {e.summary}
        </p>
        {long && (
          <button onClick={() => setOpen(!open)} className="mt-2 inline-flex items-center gap-1 text-xs text-teal-300 hover:underline">
            {open ? "Show less" : "Read more"} <FiChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
          </button>
        )}

        <ul className="mt-6 grid sm:grid-cols-2 gap-3">
          {e.points.map((p) => {
            const { head, body } = splitPoint(p);
            return (
              <li key={p} className="xp-point sm:[&:last-child:nth-child(odd)]:col-span-2">
                {head && <p className="text-xs font-semibold text-teal-300 mb-1">{head}</p>}
                <p className="text-xs text-slate-300 leading-relaxed">{body}</p>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
}

export default function Portfolio() {
  useReveal();
  const stats = [
    { v: experience.length, l: "Companies" },
    { v: projects.length, l: "Projects" },
    { v: skills.length, l: "Core technologies" },
  ];
  const focus = ["Backend & APIs", "Frontend", "Corporate Banking", "Core Middleware"];

  return (
    <>
      <div id="top" />
      <Header />

      <section className="hero-bg">
        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-56 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300">
              <i className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Digital Banking Division · Mutual Trust Bank PLC
            </span>
            <p className="text-xs uppercase tracking-widest text-teal-300 mt-6">Full Stack &amp; Banking Systems Developer</p>
            <h1 className="text-4xl md:text-5xl font-semibold mt-2 leading-tight">
              Hi, I&apos;m <span className="bg-gradient-to-r from-teal-200 to-indigo-300 bg-clip-text text-transparent">{profile.name}</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-4 max-w-md">{profile.tagline}</p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a href={profile.cv} download className="btn-outline">Download CV</a>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-teal-300 transition">Contact me <FiArrowRight /></a>
            </div>
            <div className="flex gap-3 mt-8">
              {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 grid place-items-center rounded-full border border-white/10 text-slate-300 hover:border-teal-300 hover:text-teal-300 transition"><FaLinkedin /></a>}
              {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 grid place-items-center rounded-full border border-white/10 text-slate-300 hover:border-teal-300 hover:text-teal-300 transition"><FaGithub /></a>}
              <a href={`mailto:${profile.email}`} aria-label="Email" className="w-9 h-9 grid place-items-center rounded-full border border-white/10 text-slate-300 hover:border-teal-300 hover:text-teal-300 transition"><FiMail /></a>
            </div>
          </div>
          <div className="flex justify-center"><HeroArt /></div>
        </div>
        <div className="skyline" />
      </section>

      <main className="bg-[#262f40]">
        {/* stats strip overlapping the hero */}
        <div className="max-w-4xl mx-auto px-6 -mt-14 relative z-10">
          <div className="reveal grid grid-cols-3 gap-3 md:gap-5">
            {stats.map((s) => (
              <div key={s.l} className="stat py-5 text-center">
                <p className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-teal-200 to-indigo-300 bg-clip-text text-transparent">{s.v}</p>
                <p className="text-[11px] md:text-xs text-slate-400 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <section id="about" className="max-w-4xl mx-auto px-6 pt-24 pb-24">
          <Title>About</Title>
          <div className="reveal grid md:grid-cols-[auto_1fr] gap-10 items-center">
            <div className="relative mx-auto">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-teal-300/40 to-indigo-400/30 blur-xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Anik-gray.png" alt={profile.name} className="relative w-44 h-44 rounded-full object-cover border-4 border-teal-300" />
            </div>
            <div>
              <h3 className="font-semibold mb-3">Get to know me</h3>
              <p className="text-sm text-slate-300 leading-relaxed text-justify">{profile.about}</p>
              <div className="flex flex-wrap gap-2 mt-5">{focus.map((f) => <span key={f} className="chip">{f}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="experience" className="max-w-4xl mx-auto px-6 pb-24">
          <Title sub="Where I have worked and what I have built">Experience</Title>
          <div className="relative pl-12 md:pl-14">
            <div className="rail" />
            <div className="space-y-8">
              {experience.map((e) => <ExperienceItem key={e.company} e={e} />)}
            </div>
          </div>
        </section>

        <section id="education" className="max-w-4xl mx-auto px-6 pb-24">
          <Title>Education</Title>
          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((e) => (
              <div key={e.degree} className="reveal card p-6 flex gap-4">
                <span className="w-11 h-11 shrink-0 grid place-items-center rounded-full bg-[#1d2533] text-teal-300 text-xl"><FaGraduationCap /></span>
                <div>
                  <h3 className="font-semibold text-sm leading-snug">{e.degree}</h3>
                  <p className="text-teal-300 text-sm mt-1">{e.school}</p>
                  <span className={`chip inline-block mt-3 ${e.current ? "bg-teal-300/10" : ""}`}>{e.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="max-w-4xl mx-auto px-6 pb-24">
          <Title sub="Technologies I use day to day">Skills</Title>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((s) => (
              <div key={s.name} className="reveal skill py-6 text-center" style={{ ["--c" as string]: s.color } as React.CSSProperties}>
                <div className="text-5xl flex justify-center" style={{ color: s.color }}>{icons[s.icon]}</div>
                <p className="text-xs text-slate-300 mt-4">{s.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-4xl mx-auto px-6 pb-24">
          <Title sub="Feel free to reach out. I'm happy to talk about projects and opportunities.">Contact</Title>
          <div className="reveal flex flex-wrap justify-center gap-4 text-sm">
            <a href={`tel:${profile.phone}`} className="contact-card px-6 py-4 flex items-center gap-3"><FiPhone className="text-teal-300" />{profile.phone}</a>
            <a href={`mailto:${profile.email}`} className="contact-card px-6 py-4 flex items-center gap-3"><FiMail className="text-teal-300" />{profile.email}</a>
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card px-6 py-4 flex items-center gap-3"><FaLinkedin className="text-teal-300" />LinkedIn</a>}
            {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-card px-6 py-4 flex items-center gap-3"><FaGithub className="text-teal-300" />GitHub</a>}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
