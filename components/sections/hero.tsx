"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { images } from "@/public";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="engineering-grid relative min-h-screen overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#F59E0B]/5 blur-[140px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-5 pb-20 pt-32 md:px-8">
        {/* ───────────────── INTRO ───────────────── */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#F59E0B]" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              Nebras Ahmad
            </span>
          </div>

          <p className="ml-14 mt-3 text-[10px] uppercase tracking-[0.25em] text-[#F59E0B]">
            Civil Engineer · Structural Engineering
          </p>
        </motion.div>

        {/* ───────────────── HERO CONTENT ───────────────── */}

        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* LEFT */}

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-5xl text-[clamp(4rem,9vw,9rem)] font-bold leading-[0.82] tracking-[-0.07em]"
            >
              NEBRAS
              <br />
              <span className="text-white/20">AHMAD</span>
            </motion.h1>

            {/* Profession */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8"
            >
              <p className="text-2xl font-medium tracking-tight md:text-4xl">
                Civil Engineer
              </p>

              <p className="mt-2 text-lg text-[#F59E0B] md:text-xl">
                Engineering What Lasts.
              </p>
            </motion.div>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 max-w-xl text-base leading-7 text-white/50 md:text-lg"
            >
              Designing and delivering reliable structures through engineering
              precision, technical expertise and real-world construction
              experience.
            </motion.p>

            {/* Actions */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="group flex items-center gap-3 bg-[#F59E0B] px-6 py-3.5 text-sm font-semibold text-[#0B0D0E] transition hover:bg-[#FFB52E]"
              >
                View Projects
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#about"
                className="flex items-center gap-3 border border-white/10 px-6 py-3.5 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
              >
                About Me
              </a>
            </motion.div>
          </div>

          {/* ───────────────── ARCHITECTURAL IMAGE ───────────────── */}

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto w-full max-w-[520px] lg:ml-auto"
          >
            {/* Technical top label */}

            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
                Architectural Study
              </span>

              <span className="font-mono text-[9px] text-[#F59E0B]/70">
                01 / 01
              </span>
            </div>

            {/* Main Frame */}

            <div className="relative w-[calc(100%-5px)] aspect-[4/5] overflow-hidden border border-white/10 bg-[#111416]">
              {/* Image */}

              <Image
                src={images.hero}
                alt="Architectural engineering project"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-center transition duration-1000 hover:scale-[1.025]"
              />

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E]/70 via-transparent to-[#0B0D0E]/10" />

              {/* Engineering Grid */}

              <div className="engineering-grid-small pointer-events-none absolute inset-0 opacity-[0.12]" />

              {/* Technical Crosshair */}

              <div className="absolute left-6 top-6 h-6 w-6">
                <span className="absolute left-1/2 top-0 h-6 w-px bg-white/30" />
                <span className="absolute left-0 top-1/2 h-px w-6 bg-white/30" />
              </div>

              {/* Top Right Corner */}

              <div className="absolute right-6 top-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
                  Structural
                </span>
              </div>

              {/* Bottom Information */}

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                      Featured Visual
                    </p>

                    <p className="mt-1 text-sm font-medium text-white/90 md:text-base">
                      Modern Structural Architecture
                    </p>
                  </div>

                  <span className="font-mono text-[9px] text-[#F59E0B]">
                    NE / 001
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ───────────────── SCROLL ───────────────── */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/30 md:left-8"
        >
          <ArrowDown size={15} />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
