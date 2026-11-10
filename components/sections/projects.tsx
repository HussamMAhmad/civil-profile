"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="border-y border-white/10 bg-[#0B0D0E] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">

        {/* HEADER */}

        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>

            <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#F59E0B]">
              <span className="h-px w-8 bg-[#F59E0B]" />
              02 / Projects
            </p>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
              SELECTED
              <br />

              <span className="text-white/20">
                PROJECTS.
              </span>
            </h2>

          </div>


          <Link
            href="/projects"
            className="group flex w-fit items-center gap-3 border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.15em] transition hover:border-[#F59E0B] hover:text-[#F59E0B]"
          >
            View All Projects

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>


        {/* PROJECTS */}

        <div className="grid gap-x-6 gap-y-16 md:grid-cols-2">

          {featuredProjects.map((project, index) => (

            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
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

                  <div className="absolute inset-0 bg-[#0B0D0E]/20 transition group-hover:bg-transparent" />


                  {/* CATEGORY */}

                  <div className="absolute left-5 top-5 border border-white/15 bg-[#0B0D0E]/70 px-3 py-1.5 backdrop-blur-md">

                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#F59E0B]">
                      {project.category}
                    </span>

                  </div>


                  {/* ARROW */}

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

                      <h3 className="text-2xl font-medium tracking-[-0.03em] transition group-hover:text-[#F59E0B]">
                        {project.title}
                      </h3>

                    </div>

                    <span className="text-xs text-white/25">
                      {project.year}
                    </span>

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>


        {/* VIEW ALL */}

        <div className="mt-20 flex justify-center">

          <Link
            href="/projects"
            className="group flex items-center gap-4 border border-white/15 px-8 py-4 text-xs uppercase tracking-[0.2em] transition hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#0B0D0E]"
          >
            Explore All Projects

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}