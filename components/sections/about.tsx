"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Compass, HardHat, Ruler } from "lucide-react";
import { images } from "@/public";

const expertise = [
  {
    icon: Building2,
    title: "Structural Engineering",
    text: "Structural analysis, concrete structures, steel structures and foundation systems.",
  },
  {
    icon: HardHat,
    title: "Construction Management",
    text: "Site supervision, quality control, project coordination and execution.",
  },
  {
    icon: Compass,
    title: "Infrastructure",
    text: "Infrastructure planning, roads, bridges and civil engineering systems.",
  },
  {
    icon: Ruler,
    title: "Technical Design",
    text: "Engineering drawings, BIM coordination and technical documentation.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-y border-white/10 bg-[#111416] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">

        {/* ───────────────── INTRO ───────────────── */}

        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative corner */}

            <div className="absolute -right-3 -top-3 z-10 flex h-14 w-14 items-center justify-center border border-[#F59E0B]/50 bg-[#111416] font-mono text-xs text-[#F59E0B]">
              NA
            </div>

            {/* Image */}

            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#0B0D0E]">

              <Image
                src={images.nbras}
                alt="Nbras Ahmad - Civil Engineer"
                fill
                priority
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              {/* Dark gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E]/80 via-transparent to-transparent" />

              {/* Engineering grid */}

              <div className="engineering-grid-small absolute inset-0 opacity-20" />

              {/* Image information */}

              <div className="absolute bottom-6 left-6">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                  Civil Engineer
                </p>

                <p className="mt-1 text-xl font-medium">
                  Nebras Ahmad
                </p>
              </div>

            </div>

            {/* Image caption */}

            <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-white/25">
              <span>Profile / 01</span>
              <span>Engineering Portfolio</span>
            </div>
          </motion.div>


          {/* CONTENT */}

          <div className="flex flex-col justify-center">

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >

              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#F59E0B]">
                03 / About
              </p>

              <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
                Nebras
                <br />
                <span className="text-white/25">
                  Ahmad.
                </span>
              </h2>

              <div className="mt-8 h-px w-24 bg-[#F59E0B]" />

              <p className="mt-10 max-w-3xl text-xl leading-9 text-white/70 md:text-3xl md:leading-[1.5]">
                I’m Nebras Ahmad, a civil engineer focused on creating reliable,
                efficient and technically sound structures — from initial
                concept and analysis to construction and final delivery.
              </p>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/40">
                My approach combines engineering fundamentals, modern digital
                tools and practical site experience to solve complex construction
                challenges while maintaining quality, safety and efficiency.
              </p>

              {/* Personal information */}

              <div className="mt-10 grid max-w-2xl grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3">

                <div className="border-b border-r border-white/10 p-4 md:p-5">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                    Profession
                  </p>

                  <p className="mt-2 text-sm text-white/70">
                    Civil Engineer
                  </p>
                </div>

                <div className="border-b border-r border-white/10 p-4 md:p-5">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                    Specialization
                  </p>

                  <p className="mt-2 text-sm text-white/70">
                    Structural
                  </p>
                </div>

                <div className="border-b border-r border-white/10 p-4 md:p-5">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                    Focus
                  </p>

                  <p className="mt-2 text-sm text-white/70">
                    Engineering
                  </p>
                </div>

              </div>

            </motion.div>
          </div>
        </div>

        <div className="mt-24 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">

          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group border-b border-r border-white/10 p-7 transition duration-300 hover:bg-white/[0.02] md:p-8"
              >

                <div className="flex items-center justify-between">

                  <Icon
                    size={22}
                    className="text-[#F59E0B] transition-transform duration-300 group-hover:-translate-y-1"
                    strokeWidth={1.5}
                  />

                  <span className="font-mono text-xs text-white/20">
                    0{index + 1}
                  </span>

                </div>

                <h3 className="mt-16 text-lg font-medium">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/35">
                  {item.text}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}