"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

type ProjectCardProps = {
  project: {
    slug: string;
    number: string;
    title: string;
    category: string;
    year: string;
    location: string;
    image: StaticImageData;
  };
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative aspect-[16/8] overflow-hidden border border-white/10 bg-[#111416]">

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E]/80 via-transparent to-transparent" />

          <div className="absolute left-6 bottom-6 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center border border-[#F59E0B]/50 bg-[#0B0D0E]/80 text-xs text-[#F59E0B]">
              {project.number}
            </span>

            <span className="text-xs uppercase tracking-[0.2em] text-white/60">
              {project.category}
            </span>
          </div>

          <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#0B0D0E]/70 backdrop-blur-md transition-all duration-300 group-hover:border-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-[#0B0D0E]">
            <ArrowUpRight size={18} />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">

          <div>
            <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
              {project.title}
            </h3>

            <p className="mt-2 text-sm text-white/40">
              {project.category}
            </p>
          </div>

          <div className="flex gap-6 text-xs uppercase tracking-[0.15em] text-white/30">
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>

        </div>
      </Link>
    </motion.article>
  );
}