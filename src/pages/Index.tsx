import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Send, Lock, Trophy, Globe, Flag, Heart, Shield, Users } from 'lucide-react';
import { FaDiscord, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Homepage() {
  const rotatingWords = ['Ideas','Innovation','Creators','Ownership','AI Prompts','Solutions','Intelligence'];
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % rotatingWords.length), 1800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const step = 20;
    const inc = Math.max(1, Math.floor((end - start) / (1500 / step)));
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
    { Icon: FaDiscord, href: 'https://discord.gg/Amtkdgf9Jc', color: 'hover:text-[#6366F1]' },
    { Icon: FaInstagram, href: 'https://www.instagram.com/thepromptspace?igsh=MW5nZ3dhNHhpczdoNA==', color: 'hover:text-pink-500' },
    { Icon: FaTwitter, href: 'https://x.com/thepromptspace', color: 'hover:text-sky-400' },
    { Icon: FaLinkedin, href: 'https://linkedin.com/company/thepromptspace', color: 'hover:text-cyan-400' }
  ];

  async function handleFeedbackSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        alert('Thanks — your message was received.');
        form.reset();
        return;
      }
    } catch {}
    const subject = encodeURIComponent('Feedback from ThePromptSpace homepage');
    const body = encodeURIComponent(`Name: ${payload.name || ''}\nEmail: ${payload.email || ''}\n\nMessage:\n${payload.message || ''}`);
    window.location.href = `mailto:thepromptspace@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className='bg-[#0B0E1A] text-gray-100 antialiased'>

      {/* HERO SECTION */}
      <section className='flex flex-col items-center text-center px-6 py-24 md:py-32 bg-gradient-to-b from-[#0B0E1A] to-[#101226]'>
        <motion.div className='w-14 h-14 mb-8 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1]' animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />

        <h1 className='text-4xl md:text-6xl font-extrabold mb-4'>
          The Future of{' '}
          <AnimatePresence mode='wait'>
            <motion.span key={index} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className='bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#6366F1]'>
              {rotatingWords[index]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <p className='max-w-2xl text-gray-300 mb-8'>
          ThePromptSpace is building the backbone of the creator economy — powered by GEO (General Engine Optimization) for prompt discoverability and performance.
        </p>

        <div className='flex flex-col md:flex-row gap-6 mb-12'>
          <div className='flex flex-col items-center'>
            <a href='/groups' className='px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#6366F1] hover:opacity-95 transition'>Join Communities →</a>
            <p className='text-sm text-gray-400 mt-2 max-w-xs'>Enter group discussions to chat, learn, and collaborate with others on prompt design and AI workflows.</p>
          </div>
          <div className='flex flex-col items-center'>
            <a href='/prompts' className='px-6 py-3 rounded-lg font-semibold border border-[#3B82F6] text-[#93C5FD] hover:bg-white/2 transition'>Explore Prompts →</a>
            <p className='text-sm text-gray-400 mt-2 max-w-xs'>Browse AI prompts across categories like art, writing, coding, and more. Save, remix, and share with the community.</p>
          </div>
        </div>

        <p className='text-gray-400 italic mb-6 text-sm'>{count}+ early creators shaping the product — join the early access list.</p>

        <div className='flex gap-6 mt-4'>
          {socials.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.a key={i} href={s.href} target='_blank' rel='noopener noreferrer' whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} className={`transition-colors duration-300 ${s.color}`}>
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* PROBLEM & SOLUTION */}
      <section className='py-20 px-6 bg-[#0B0E1A]'>
        <motion.h2 className='text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#6366F1]' initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>The Problem We're Solving</motion.h2>

        <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className='p-6 rounded-2xl bg-gradient-to-b from-[#0F1220] to-[#141629] border border-[#1F2937]/30'>
            <h3 className='text-xl font-semibold mb-4 text-[#93C5FD]'>Current Challenges</h3>
            <ul className='space-y-3 text-gray-300'>
              <li>• Prompts are copied without credit.</li>
              <li>• No reliable way to build prompt portfolios.</li>
              <li>• Scattered and fragmented communities.</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className='p-6 rounded-2xl bg-gradient-to-b from-[#0F1220] to-[#141629] border border-[#1F2937]/30'>
            <h3 className='text-xl font-semibold mb-4 text-[#C7B2FF]'>Our Solution</h3>
            <ul className='space-y-3 text-gray-300'>
              <li>• Verified creator credit and protection.</li>
              <li>• AI-driven GEO optimization for visibility.</li>
              <li>• Community tools for collaboration.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FUTURE SECTION */}
      <section className='py-20 bg-[#0B0E1A]'>
        <motion.h2 className='text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#6366F1]' initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}>Building the Future</motion.h2>

        <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center'>
          {[
            { Icon: Lock, title: 'Prompt Licensing Engine', desc: 'Verified licensing via originality scanning and attribution.' },
            { Icon: Trophy, title: 'AI Portfolio & Badges', desc: 'Turn prompts into verified portfolios with achievements.' },
            { Icon: Globe, title: 'The GitHub for Prompts', desc: 'Versioning, community review, and ownership for prompts.' }
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className='p-6 rounded-2xl bg-gradient-to-b from-[#0F1220] to-[#141629] border border-[#1F2937]/30 hover:border-[#6366F1]/40 transition'>
              <f.Icon size={28} className='mx-auto mb-4 text-[#93C5FD]' />
              <h3 className='text-lg font-semibold mb-2 text-gray-100'>{f.title}</h3>
              <p className='text-gray-400 text-sm'>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEEDBACK */}
      <section className='py-20 px-6 bg-[#0B0E1A]'>
        <motion.h3 className='text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#6366F1]' initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}>Have a Question or Feedback?</motion.h3>
        <p className='text-center text-gray-400 mb-8'>We read every message. Help shape ThePromptSpace by sharing your thoughts below.</p>

        <form onSubmit={handleFeedbackSubmit} className='max-w-3xl mx-auto bg-gradient-to-b from-[#0F1220] to-[#141629] border border-[#1F2937]/30 rounded-2xl p-6 space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            <div>
              <label className='text-sm text-gray-400 block mb-1'>Your Name (optional)</label>
              <input name='name' type='text' placeholder='Enter your name' className='w-full px-3 py-2 rounded-md bg-[#0E1022] border border-gray-700 text-gray-100 focus:border-[#6366F1] outline-none' />
            </div>
            <div>
              <label className='text-sm text-gray-400 block mb-1'>Your Email (optional)</label>
              <input name='email' type='email' placeholder='Enter your email' className='w-full px-3 py-2 rounded-md bg-[#0E1022] border border-gray-700 text-gray-100 focus:border-[#6366F1] outline-none' />
            </div>
          </div>
          <div>
            <label className='text-sm text-gray-400 block mb-1'>Message</label>
            <textarea name='message' rows={4} required placeholder='Type your question or feedback...' className='w-full px-3 py-2 rounded-md bg-[#0E1022] border border-gray-700 text-gray-100 focus:border-[#6366F1] outline-none' />
          </div>
          <button type='submit' className='w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-[#3B82F6] to-[#6366F1] hover:opacity-95 transition'>Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className='bg-[#080912] border-t border-gray-800 py-10 text-center'>
        <p className='text-gray-400 text-sm mb-2'>© 2025 ThePromptSpace — DPIIT Registered Startup</p>
        <p className='text-gray-500 text-xs mb-6'>Empowering creators through verified ownership, collaboration, and AI innovation.</p>

        <div className='flex gap-6 justify-center mb-4'>
          {socials.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.a key={i} href={s.href} target='_blank' rel='noopener noreferrer' whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} className={`${s.color} transition-colors`}>
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>

        <div className='flex justify-center gap-4 text-xs text-gray-500'>
          <a href='/about' className='hover:text-gray-300'>About</a>
          <a href='/contact' className='hover:text-gray-300'>Contact</a>
          <a href='/privacy' className='hover:text-gray-300'>Privacy</a>
          <a href='/terms' className='hover:text-gray-300'>Terms</a>
        </div>
      </footer>
    </main>
  );
}
