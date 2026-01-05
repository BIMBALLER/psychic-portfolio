"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      
      {/* 1. HERO SECTION */}
      <section className="px-8 pt-32 pb-20 max-w-7xl mx-auto">
        {/* ... your existing hero code ... */}
      </section>

      {/* 2. ADD THE MARQUEE HERE (Between Hero and Projects) */}
      <div className="py-20 bg-white text-black -rotate-1 relative z-10">
        <div className="flex overflow-hidden whitespace-nowrap border-y border-black py-4">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 text-6xl font-black uppercase tracking-tighter"
          >
            <span>React.js</span>
            <span>Next.js 16</span>
            <span>Tailwind CSS</span>
            <span>Framer Motion</span>
            <span>UI Design</span>
            <span>React.js</span>
            <span>Next.js 16</span>
            <span>Tailwind CSS</span>
            <span>Framer Motion</span>
            <span>UI Design</span>
          </motion.div>
        </div>
      </div>

      {/* 3. PROJECT GALLERY SECTION */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        {/* ... your project grid code ... */}
      </section>

    </main>
  );
}