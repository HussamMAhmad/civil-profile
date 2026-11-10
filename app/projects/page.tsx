"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { projects } from "@/data/projects";

const filters = ["All", "Revit", "ETABS"] as const;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main className="min-h-screen bg-[#0B0D0E] text-[#F4F4F2]">

      {/* ───────────────── HERO ───────────────── */}

      <section className="engineering-grid border-b border-white/10">

        <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-40 md:px-8 md:pb-32 md:pt-48">

          <Link
            href="/"
            className="mb-14 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/30 transition hover:text-[#F59E0B]"
          >
            <ArrowLeft size={14} />
            Back Home
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">

            <div>

              <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#F59E0B]">
                <span className="h-px w-8 bg-[#F59E0B]" />
                Portfolio / 01
              </p>

              <h1 className="text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
                SELECTED
                <br />

                <span className="text-white/20">
                  PROJECTS.
                </span>
              </h1>

            </div>

            <p className="max-w-md text-lg leading-8 text-white/40">
              A collection of engineering projects covering BIM,
              structural analysis, technical design and construction
              documentation.
            </p>

          </div>

        </div>

      </section>


      {/* ───────────────── FILTER ───────────────── */}

      <section className="border-b border-white/10">

        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">

          <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
            Filter Projects
          </p>

          <div className="flex flex-wrap gap-2">

            {filters.map((filter) => {

              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`border px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition ${
                    active
                      ? "border-[#F59E0B] bg-[#F59E0B] text-[#0B0D0E]"
                      : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}

          </div>

          <p className="font-mono text-xs text-white/20">
            {filteredProjects.length.toString().padStart(2, "0")} PROJECTS
          </p>

        </div>

      </section>


      {/* ───────────────── PROJECT GRID ───────────────── */}

      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-[1440px] px-5 md:px-8">

          <motion.div
            layout
            className="grid gap-x-6 gap-y-16 md:grid-cols-2"
          >

            {filteredProjects.map((project, index) => (

              <motion.div
                layout
                key={project.slug}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
              >

                <Link
                  href={`/projects/${project.slug}`}
                  className="group block"
                >

                  {/* IMAGE */}

                  <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#111416]">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    <div className="absolute inset-0 bg-[#0B0D0E]/20 transition group-hover:bg-[#0B0D0E]/5" />

                    {/* Category */}

                    <div className="absolute left-5 top-5 border border-white/15 bg-[#0B0D0E]/70 px-3 py-1.5 backdrop-blur-md">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#F59E0B]">
                        {project.category}
                      </span>
                    </div>

                    {/* Arrow */}

                    <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center border border-white/20 bg-[#0B0D0E]/70 opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={18} />
                    </div>

                  </div>


                  {/* INFO */}

                  <div className="mt-5">

                    <div className="flex items-start justify-between gap-5">

                      <div>

                        <p className="mb-2 font-mono text-[10px] text-[#F59E0B]">
                          {project.number} / {project.category}
                        </p>

                        <h2 className="text-2xl font-medium tracking-[-0.03em] transition group-hover:text-[#F59E0B]">
                          {project.title}
                        </h2>

                      </div>

                      <span className="shrink-0 text-xs text-white/25">
                        {project.year}
                      </span>

                    </div>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
                      {project.description}
                    </p>


                    {/* Tags */}

                    <div className="mt-5 flex flex-wrap gap-2">

                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.15em] text-white/25"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>

                </Link>

              </motion.div>

            ))}

          </motion.div>


          {/* Empty */}

          {filteredProjects.length === 0 && (
            <div className="flex min-h-[300px] items-center justify-center border border-white/10">
              <p className="text-sm text-white/30">
                No projects found in this category.
              </p>
            </div>
          )}

        </div>

      </section>


      {/* ───────────────── CTA ───────────────── */}

      <section className="border-t border-white/10 py-28 md:py-40">

        <div className="mx-auto max-w-[1440px] px-5 md:px-8">

          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-[#F59E0B]">
                Have a project?
              </p>

              <h2 className="mt-5 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-8xl">
                LET'S
                <br />

                <span className="text-white/20">
                  BUILD
                </span>

                <br />

                <span className="text-[#F59E0B]">
                  TOGETHER.
                </span>
              </h2>

            </div>

            <Link
              href="/#contact"
              className="group flex w-fit items-center gap-3 border border-white/15 px-7 py-4 text-sm transition hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#0B0D0E]"
            >
              Start a Conversation

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </section>


      {/* ───────────────── FOOTER ───────────────── */}

      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">

          <div>
            <p className="text-sm font-semibold tracking-[0.08em]">
              NBRAS AHMAD
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/25">
              Civil Engineer
            </p>
          </div>

          <div className="text-xs text-white/25">
            © 2026 Nbras Ahmad
          </div>

        </div>

      </footer>

    </main>
  );
}