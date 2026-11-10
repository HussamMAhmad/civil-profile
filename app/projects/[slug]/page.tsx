import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Suspense } from "react";
import SuspenseLoader from "@/components/ui/suspense-loader";

async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B0D0E] text-[#F4F4F2]">
      {/* Header */}
      <section className="engineering-grid border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-36 md:px-8 md:pt-44">
          <Link
            href="/#projects"
            className="mb-16 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 transition hover:text-[#F59E0B]"
          >
            <ArrowLeft size={15} />
            Back to Projects
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.6fr]">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#F59E0B]">
                {project.number} / {project.category}
              </p>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-8xl">
                {project.title}
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 md:text-lg">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 border-l border-white/10">
              <div className="border-b border-white/10 p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Location
                </p>

                <p className="mt-2 text-sm">{project.location}</p>
              </div>

              <div className="border-b border-l border-white/10 p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Year
                </p>

                <p className="mt-2 text-sm">{project.year}</p>
              </div>

              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Area
                </p>

                <p className="mt-2 text-sm">{project.area}</p>
              </div>

              <div className="border-l border-white/10 p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Role
                </p>

                <p className="mt-2 text-sm">{project.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="mx-auto max-w-[1440px] px-5 py-10 md:px-8 md:py-16">
        <div className="relative aspect-[16/8] overflow-hidden border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Challenge / Solution */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-32">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#F59E0B]">
              01 / Challenge
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-tight">
              The Challenge
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/40">
              {project.challenge}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#F59E0B]">
              02 / Solution
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-tight">
              The Solution
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/40">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="border-y border-white/10 bg-[#111416]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-[0.25em] text-[#F59E0B]">
            Technical Tools
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="border border-white/10 px-5 py-3 text-sm text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#F59E0B]">
              Project Gallery
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Inside the
              <br />
              <span className="text-white/20">project.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {project.gallery.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden border border-white/10 ${
                index === 0 ? "aspect-[16/10] md:col-span-2" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image}
                alt={`${project.title} ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="engineering-grid border-t border-white/10 py-32">
        <div className="mx-auto max-w-[1440px] px-5 text-center md:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#F59E0B]">
            Next Project
          </p>

          <Link
            href="/#projects"
            className="group mt-8 inline-flex items-center gap-3 text-3xl font-medium md:text-5xl"
          >
            Explore More Projects
            <ArrowUpRight
              size={28}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <ProjectContent params={params}/>
    </Suspense>
  );
}
