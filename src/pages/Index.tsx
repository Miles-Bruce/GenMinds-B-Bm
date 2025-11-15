import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Users,
  Mail,
  MessageCircle,
  Send,
  Lock,
  Trophy,
  Globe,
  Flag,
  Heart,
} from "lucide-react";
import { FaDiscord, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

/* ----------------------------- THEME COLORS ----------------------------- */
/*
  BACKGROUND:    #0B0B0B (jet black)
  CARD BG:       #161616 (charcoal)
  ACCENT 1:      #EAB308 (warm gold)
  ACCENT 2:      #FACC15 (amber)
  TEXT PRIMARY:  #E5E7EB (gray-200)
  TEXT SECONDARY:#9CA3AF (gray-400)
  BORDERS:       #27272A
*/

const GOLD_FROM = "from-[#EAB308]";
const GOLD_TO   = "to-[#FACC15]";
const GOLD_TEXT = "bg-clip-text text-transparent bg-gradient-to-r from-[#EAB308] to-[#FACC15]";

const BG_GRADIENT = "bg-gradient-to-b from-[#0B0B0B] to-[#161616]";
const CARD_BG = "bg-gradient-to-b from-[#111111] to-[#161616] border border-[#27272A]/40";

/* ----------------------------- HERO SECTION ----------------------------- */
function HeroSection() {
  const rotatingWords = [
    "Ideas",
    "Innovation",
    "Creators",
    "Ownership",
    "AI Prompts",
    "Solutions",
    "Intelligence",
  ];

  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  // Rotating words animation
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % rotatingWords.length),
      1800
    );
    return () => clearInterval(interval);
  }, []);

  // Count-up to 100+
  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 1600;
    const step = 20;
    const inc = Math.max(1, Math.floor((end - start) / (duration / step)));
    const timer = setInterval(() => {
      start += inc;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, step);
    return () => clearInterval(timer);
  }, []);

  const socials = [
    { Icon: FaDiscord, href: "https://discord.gg/Amtkdgf9Jc" },
    { Icon: FaInstagram, href: "https://www.instagram.com/thepromptspace?igsh=MW5nZ3dhNHhpczdoNA==" },
    { Icon: FaTwitter, href: "https://x.com/thepromptspace" },
    { Icon: FaLinkedin, href: "https://linkedin.com/company/thepromptspace" },
  ];

  return (
    <header
      className={`${BG_GRADIENT} px-6 py-24 md:py-32 text-gray-200 flex flex-col items-center text-center`}
    >
      <motion.div
        className="w-14 h-14 rounded-full mb-8 bg-gradient-to-r from-[#EAB308] to-[#FACC15] shadow-[0_0_18px_rgba(234,179,8,0.4)]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />

      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
        <span className="text-gray-100">The Future of </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.42 }}
            className={`${GOLD_TEXT}`}
          >
            {rotatingWords[index]}
          </motion.span>
        </AnimatePresence>
      </h1>

      <p className="max-w-2xl text-gray-400 mb-8 leading-relaxed">
        ThePromptSpace is building the backbone of the creator economy — powered
        by GEO (General Engine Optimization) for prompt discoverability and fair visibility.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <a
          href="/groups"
          className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-black shadow-[0_0_10px_rgba(250,204,21,0.3)] hover:opacity-95"
        >
          Join Communities →
        </a>
        <a
          href="/prompts"
          className="px-6 py-3 rounded-lg font-semibold border border-[#EAB308]/50 text-[#FACC15] hover:bg-[#FACC15]/10"
        >
          Explore Prompts →
        </a>
      </div>

      <p className="text-gray-400 text-sm italic mb-6">
        {count}+ early creators shaping the platform.
      </p>

      {/* Socials */}
      <div className="flex gap-6">
        {socials.map((s, i) => {
          const Icon = s.Icon;
          return (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              whileHover={{ scale: 1.15 }}
              className="text-gray-400 hover:text-[#FACC15]"
            >
              <Icon size={20} />
            </motion.a>
          );
        })}
      </div>
    </header>
  );
}

/* --------------------------- PROBLEM + GEO --------------------------- */
function ProblemSolutionGeo() {
  const bars = [
    { label: "Discoverability", value: 65, color: "from-[#EAB308]" },
    { label: "Performance", value: 85, color: "from-[#FACC15]" },
    { label: "Engagement", value: 72, color: "from-[#FDE68A]" },
  ];

  return (
    <section className="bg-[#0B0B0B] text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-10 ${GOLD_TEXT}`}
        >
          The Problem We're Solving
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`${CARD_BG} p-6 rounded-2xl`}>
            <h3 className="text-xl font-semibold mb-4 text-[#FACC15]">
              Current Challenges
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>• Prompts are copied without credit.</li>
              <li>• No reliable way to build prompt portfolios.</li>
              <li>• Creator communities are fragmented.</li>
            </ul>
          </div>

          <div className={`${CARD_BG} p-6 rounded-2xl`}>
            <h3 className="text-xl font-semibold mb-4 text-[#FDE68A]">
              Our Solution
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>• Verified creator credit and attribution.</li>
              <li>• GEO optimization for fair ranking.</li>
              <li>• Collaboration-first tools built for creators.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* GEO Demo */}
      <div className="px-6 py-20 bg-[#111111]">
        <h3
          className={`text-3xl font-semibold text-center mb-6 ${GOLD_TEXT}`}
        >
          How GEO Works
        </h3>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 items-end">
          {bars.map((b, i) => (
            <div key={i} className="text-center">
              <div className="h-44 w-4 mx-auto relative bg-[#1C1C1C] rounded-lg overflow-hidden">
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${b.color} to-transparent`}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${b.value}%` }}
                  transition={{ duration: 1.4 }}
                />
              </div>
              <p className="mt-4 text-gray-300 font-semibold">{b.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- FUTURE + COMMUNITY --------------------------- */
function FutureCommunity() {
  const features = [
    {
      Icon: Lock,
      title: "Prompt Licensing Engine",
      desc: "Verified licensing through originality scanning and attribution.",
    },
    {
      Icon: Trophy,
      title: "AI Portfolio & Badges",
      desc: "Turn prompts into verified portfolios with unique achievements.",
    },
    {
      Icon: Globe,
      title: "The GitHub for Prompts",
      desc: "Versioning, history, and community review built for creators.",
    },
  ];

  const community = [
    { Icon: Shield, title: "Moderation Tools", desc: "Safe, transparent community governance." },
    { Icon: Users, title: "Role-Based Access", desc: "Creators, mods, admins with clear roles." },
    { Icon: Flag, title: "Reporting System", desc: "Fast and fair accountability tools." },
    { Icon: Heart, title: "Creator-First Values", desc: "Recognition, fairness, and quality." },
  ];

  return (
    <section className="bg-[#0B0B0B] text-gray-200 py-20 px-6">
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 ${GOLD_TEXT}`}>
        Building the Future
      </h2>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {features.map((f, i) => (
          <div
            key={i}
            className={`${CARD_BG} p-6 rounded-2xl hover:border-[#FACC15]/40 transition`}
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#EAB308]/20 to-[#FACC15]/20">
              <f.Icon className="text-[#FACC15]" size={22} />
            </div>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{f.desc}</p>
            <span className="text-xs border border-gray-700 px-3 py-1 rounded-full text-gray-400">
              Coming Soon
            </span>
          </div>
        ))}
      </div>

      {/* Community */}
      <h3 className="text-2xl font-semibold text-center mb-6 text-gray-100">
        Safe & Respectful Community
      </h3>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {community.map((c, i) => (
          <div
            key={i}
            className={`${CARD_BG} p-6 rounded-2xl hover:border-[#FACC15]/40 transition`}
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#FACC15]/20 to-[#FDE68A]/20">
              <c.Icon className="text-[#FDE68A]" size={20} />
            </div>
            <h4 className="text-md font-semibold mb-2">{c.title}</h4>
            <p className="text-gray-400 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- FEEDBACK + FOOTER --------------------------- */
export default function Homepage() {
  async function handleFeedbackSubmit(e: any) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Thanks — we received your message.");
        form.reset();
        return;
      }
    } catch {}

    const subject = encodeURIComponent("Feedback from ThePromptSpace");
    const body = encodeURIComponent(
      `Name: ${payload.name || ""}\nEmail: ${payload.email || ""}\n\nMessage:\n${payload.message || ""}`
    );
    window.location.href = `mailto:thepromptspace@gmail.com?subject=${subject}&body=${body}`;
  }

  const socials = [
    { Icon: FaDiscord, href: "https://discord.gg/Amtkdgf9Jc" },
    { Icon: FaInstagram, href: "https://www.instagram.com/thepromptspace?igsh=MW5nZ3dhNHhpczdoNA==" },
    { Icon: FaTwitter, href: "https://x.com/thepromptspace" },
    { Icon: FaLinkedin, href: "https://linkedin.com/company/thepromptspace" },
  ];

  return (
    <main className="antialiased bg-[#0B0B0B]">
      <HeroSection />
      <ProblemSolutionGeo />
      <FutureCommunity />

      {/* Feedback */}
      <section className="px-6 py-20 bg-[#0B0B0B]">
        <h3
          className={`text-3xl font-bold text-center mb-4 ${GOLD_TEXT}`}
        >
          Have a Question or Feedback?
        </h3>
        <p className="text-center text-gray-400 mb-8">
          We review every message to improve ThePromptSpace.
        </p>

        <form
          onSubmit={handleFeedbackSubmit}
          className={`${CARD_BG} max-w-3xl mx-auto p-6 rounded-2xl space-y-4`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Your Name (optional)"
              className="w-full px-3 py-2 bg-[#111111] border border-[#27272A] rounded-md text-gray-200 focus:border-[#FACC15] outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email (optional)"
              className="w-full px-3 py-2 bg-[#111111] border border-[#27272A] rounded-md text-gray-200 focus:border-[#FACC15] outline-none"
            />
          </div>

          <textarea
            name="message"
            rows={4}
            required
            placeholder="Type your question or feedback..."
            className="w-full px-3 py-2 bg-[#111111] border border-[#27272A] rounded-md text-gray-200 focus:border-[#FACC15] outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-[#FACC15] to-[#EAB308] text-black shadow-[0_0_10px_rgba(250,204,21,0.3)] hover:opacity-95"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#080808] py-10 border-t border-[#27272A]">
        <p className="text-gray-400 text-center text-sm mb-2">
          © 2025 ThePromptSpace — DPIIT Registered Startup
        </p>
        <p className="text-gray-500 text-center text-xs mb-6">
          Empowering creators through verified ownership, collaboration, and AI innovation.
        </p>

        <div className="flex justify-center gap-6 mb-4">
          {socials.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                whileHover={{ scale: 1.15 }}
                className="text-gray-500 hover:text-[#FACC15]"
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 text-xs text-gray-500">
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
          <a href="/privacy" className="hover:text-gray-300">Privacy</a>
          <a href="/terms" className="hover:text-gray-300">Terms</a>
        </div>
      </footer>
    </main>
  );
}
