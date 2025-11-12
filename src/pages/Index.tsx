import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Lightbulb,
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

/**
 * Homepage.tsx
 * Full combined homepage component for ThePromptSpace
 * - Hero (rotating words, CTAs, count-up, social)
 * - Problem & Solution
 * - GEO demo
 * - Building the Future (features)
 * - Safe & Respectful Community
 * - Ecosystem diagram
 * - Feedback form (POST /api/feedback, mailto fallback)
 * - Footer with DPIIT badge + animated socials
 *
 * Note: Requires Tailwind CSS + Framer Motion + react-icons + lucide-react
 */

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

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % rotatingWords.length),
      1800
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // simple animated count up to 100
    let start = 0;
    const end = 100;
    const duration = 1500;
    const stepTime = 20;
    const increment = Math.max(1, Math.floor((end - start) / (duration / stepTime)));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { Icon: FaDiscord, href: "https://discord.gg/Amtkdgf9Jc", color: "text-[#6366F1]" },
    { Icon: FaInstagram, href: "https://www.instagram.com/thepromptspace?igsh=MW5nZ3dhNHhpczdoNA==", color: "text-pink-500" },
    { Icon: FaTwitter, href: "https://x.com/thepromptspace", color: "text-sky-400" },
    { Icon: FaLinkedin, href: "https://linkedin.com/company/thepromptspace", color: "text-cyan-400" },
  ];

  return (
    <header className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 bg-gradient-to-b from-[#0B0E1A] to-[#101226] text-gray-100 overflow-hidden">
      <motion.div
        aria-hidden
        className="w-14 h-14 rounded-full mb-8 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] shadow-lg"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
        <span className="text-white">The Future of </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.42 }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#6366F1]"
          >
            {rotatingWords[index]}
          </motion.span>
        </AnimatePresence>
      </h1>

      <p className="max-w-2xl text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
        ThePromptSpace is building the backbone of the creator economy — powered by GEO (General Engine Optimization)
        for prompt discoverability and performance.
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="flex flex-col items-center">
          <a
            href="/groups"
            className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#6366F1] hover:opacity-95 transition"
          >
            Join Communities →
          </a>
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
            Enter group discussions to chat, learn, and collaborate with others on prompt design and AI workflows.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="/prompts"
            className="px-6 py-3 rounded-lg font-semibold border border-[#3B82F6] text-[#93C5FD] hover:bg-white/2 transition"
          >
            Explore Prompts →
          </a>
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
            Browse AI prompts across categories like art, writing, coding, and more. Save, remix, and share with the community.
          </p>
        </div>
      </div>

      <p className="text-gray-400 italic mb-6 text-sm">
        {count}+ early creators shaping the product — join the early access list.
      </p>

      <nav className="flex gap-6 mt-4" aria-label="social links">
        {socialLinks.map((s, i) => {
          const Icon = s.Icon;
          return (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className={`transition-colors duration-300 ${s.color}`}
              aria-label={`Open ${s.href}`}
            >
              <Icon size={20} />
            </motion.a>
          );
        })}
      </nav>
    </header>
  );
}

/* ----------------------- PROBLEM + GEO DEMO + WHY SECTION ---------------------- */
function ProblemSolutionGeo() {
  const bars = [
    { label: "Discoverability", value: 65, colorFrom: "from-[#3B82F6]" },
    { label: "Performance", value: 85, colorFrom: "from-[#6366F1]" },
    { label: "Engagement", value: 72, colorFrom: "from-[#8B5CF6]" },
  ];

  return (
    <section className="bg-[#0B0E1A] text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#6366F1]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Problem We're Solving
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-[#0F1220] to-[#141629] border border-[#1F2937]/30"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#93C5FD]">Current Challenges</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Prompts are copied without credit.</li>
              <li>• No reliable way to build prompt portfolios.</li>
              <li>• Creator communities are scattered and fragmented.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-[#0F1220] to-[#141629] border border-[#1F2937]/30"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#C7B2FF]">Our Solution</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Verified creator credit and protection.</li>
              <li>• AI-driven GEO optimization for visibility.</li>
              <li>• Community tools built for collaboration.</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#0E1220] to-[#0A0C18] py-20 px-6">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#6366F1]"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          How GEO Works
        </motion.h3>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
          GEO (General Engine Optimization) ranks prompts by performance and engagement, giving creators fair visibility across categories.
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 items-end">
          {bars.map((b, i) => (
            <motion.div
              key={b.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="h-44 w-4 mx-auto relative bg-[#121426] rounded-lg overflow-hidden">
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${b.colorFrom} to-transparent`}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${b.value}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
              <p className="mt-4 font-semibold text-gray-300">{b.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- BUILDING THE FUTURE --------------------------- */
function FutureCommunity() {
  const features = [
    {
      Icon: Lock,
      title: "Prompt Licensing Engine",
      desc: "Verified licensing through originality scanning and attribution.",
      tag: "Coming Soon",
    },
    {
      Icon: Trophy,
      title: "AI Portfolio & Badges",
      desc: "Turn prompts into portfolios with verified achievements.",
      tag: "Coming Soon",
    },
    {
      Icon: Globe,
      title: "The GitHub for Prompts",
      desc: "Versioning, community review, and clear ownership for prompts.",
      tag: "Coming Soon",
    },
  ];

  const community = [
    {
      Icon: ShieldCheck,
      title: "Moderation Tools",
      desc: "Advanced moderation keeps collaboration positive and inclusive.",
    },
    {
      Icon: Users,
      title: "Role-Based Permissions",
      desc: "Creators, moderators, and admins have clear and fair roles.",
    },
    {
      Icon: Flag,
      title: "Reporting System",
      desc: "Quick, transparent reporting for accountability.",
    },
    {
      Icon: Heart,
      title: "Creator-First Values",
      desc: "Features built around fairness, recognition, and respect.",
    },
  ];

  return (
    <section className="bg-[#0B0E1A] text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#6366F1]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Building the Future
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#0F1220] to-[#141629] border border-[#1F2937]/30 hover:border-[#6366F1]/40 transition shadow-sm"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B82F6]/20 to-[#6366F1]/20">
                <f.Icon className="text-[#93C5FD]" size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-100">{f.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{f.desc}</p>
              <span className="inline-block text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-400">
                {f.tag}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.h3
          className="text-2xl font-semibold text-center mb-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Safe & Respectful Community
        </motion.h3>

        <div className="grid md:grid-cols-4 gap-6">
          {community.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#0F1220] to-[#141629] border border-[#1F2937]/30 hover:border-[#6366F1]/40 transition"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B82F6]/20 to-[#6366F1]/20">
                <c.Icon className="text-[#C7B2FF]" size={20} />
              </div>
              <h4 className="text-md font-semibold mb-2 text-gray-100">{c.title}</h4>
              <p className="text-gray-400 text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- ECOSYSTEM + FEEDBACK + FOOTER ---------------------- */
export default function Homepage() {
  // Feedback form handler — tries POST, falls back to mailto
  async function handleFeedbackSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: { [k: string]: string } = {};
    for (const [k, v] of data.entries()) payload[k] = String(v);

    // Try posting to server endpoint first
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
      // otherwise fallthrough to mailto
    } catch (err) {
      // ignore and fallback to mailto
    }

    // mailto fallback
    const subject = encodeURIComponent("Feedback from ThePromptSpace homepage");
    const body = encodeURIComponent(
      `Name: ${payload.name || ""}\nEmail: ${payload.email || ""}\n\nMessage:\n${payload.message || ""}`
    );
    window.location.href = `mailto:thepromptspace@gmail.com?subject=${subject}&body=${body}`;
  }

  const social = [
    { Icon: FaDiscord, href: "https://discord.gg/Amtkdgf9Jc", color: "hover:text-[#6366F1]" },
    { Icon: FaInstagram, href: "https://www.instagram.com/thepromptspace?igsh=MW5nZ3dhNHhpczdoNA==", color: "hover:text-pink-500" },
    { Icon: FaTwitter, href: "https://x.com/thepromptspace", color: "hover:text-sky-400" },
    { Icon: FaLinkedin, href: "https://linkedin.com/company/thepromptspace", color: "hover:text-cyan-400" },
  ];

  return (
    <main className="antialiased">
      <HeroSection />
      <ProblemSolutionGeo />
      <FutureCommunity />

      {/* Ecosystem */}
      <section className="bg-[#0B0E1A] text-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#6366F1]"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            ThePromptSpace Ecosystem
          </motion.h2>

          <p className="max-w-2xl mx-auto text-center text-gray-400 mb-12">
            A connected network of creators, GEO intelligence, and businesses — all working together to make prompt ownership, discovery, and licensing seamless.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.div
              className="text-center w-64 p-6 rounded-2xl bg-gradient-to-b from-[#0F1220] to-[#141629] border border-[#1F2937]/30"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B82F6]/20 to-[#6366F1]/20 border border-indigo-500/30">
                <MessageCircle className="text-[#93C5FD]" size={20} />
              </div>
              <h4 className="font-semibold text-gray-100 mb-2">Creators</h4>
              <p className="text-gray-400 text-sm">Upload prompts, collaborate, and build verified portfolios.</p>
            </motion.div>

            <motion.div
              className="hidden md:block w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#6366F1]"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.8 }}
            />

            <motion.div
              className="text-center w-64 p-6 rounded-2xl bg-gradient-to-b from-[#0F1220] to-[#141629] border border-[#1F2937]/30"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#6366F1]/20 to-[#8B5CF6]/20 border border-indigo-500/30">
                <Mail className="text-[#C7B2FF]" size={20} />
              </div>
              <h4 className="font-semibold text-gray-100 mb-2">GEO Engine</h4>
              <p className="text-gray-400 text-sm">Optimizes visibility and ranking across the platform.</p>
            </motion.div>

            <motion.div
              className="hidden md:block w-24 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.8 }}
            />

            <motion.div
              className="text-center w-64 p-6 rounded-2xl bg-gradient-to-b from-[#0F1220] to-[#141629] border border-[#1F2937]/30"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#8B5CF6]/20 to-[#C084FC]/20 border border-indigo-500/30">
                <Send className="text-[#D4B8FF]" size={20} />
              </div>
              <h4 className="font-semibold text-gray-100 mb-2">Businesses</h4>
              <p className="text-gray-400 text-sm">Discover and license the best AI prompts from verified creators.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="bg-[#0B0E1A] text-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <motion.h3
            className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#6366F1]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Have a Question or Feedback?
          </motion.h3>
          <p className="text-center text-gray-400 mb-8">We read every message. Help shape ThePromptSpace by sharing your thoughts below.</p>

          <form
            onSubmit={handleFeedbackSubmit}
            className="bg-gradient-to-b from-[#0F1220] to-[#141629] border border-[#1F2937]/30 rounded-2xl p-6 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400 block mb-1">Your Name (optional)</label>
                <input name="name" type="text" placeholder="Enter your name" className="w-full px-3 py-2 rounded-md bg-[#0E1022] border border-gray-700 text-gray-100 focus:border-[#6366F1] outline-none" />
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1">Your Email (optional)</label>
                <input name="email" type="email" placeholder="Enter your email" className="w-full px-3 py-2 rounded-md bg-[#0E1022] border border-gray-700 text-gray-100 focus:border-[#6366F1] outline-none" />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 block mb-1">Message</label>
              <textarea name="message" rows={4} required placeholder="Type your question or feedback..." className="w-full px-3 py-2 rounded-md bg-[#0E1022] border border-gray-700 text-gray-100 focus:border-[#6366F1] outline-none"></textarea>
            </div>

            <div className="flex items-center justify-between gap-4">
              <button type="submit" className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-semibold hover:opacity-95 transition">
                Send Message
              </button>
              <p className="text-sm text-gray-400">Or email us directly: <a className="text-[#93C5FD] underline" href="mailto:thepromptspace@gmail.com">thepromptspace@gmail.com</a></p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080912] border-t border-gray-800 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <p className="text-gray-400 text-sm mb-2">© 2025 ThePromptSpace — DPIIT Registered Startup</p>
          <p className="text-gray-500 text-xs mb-6">Empowering creators through verified ownership, collaboration, and AI innovation.</p>

          <div className="flex gap-6 mb-4">
            {social.map((s, i) => {
              const Icon = s.Icon;
              return (
                <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} className={`${s.color} transition-colors`}>
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>

          <div className="flex gap-4 text-xs text-gray-500">
            <a href="/about" className="hover:text-gray-300">About</a>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
            <a href="/privacy" className="hover:text-gray-300">Privacy</a>
            <a href="/terms" className="hover:text-gray-300">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
