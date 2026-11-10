"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

import "yet-another-react-lightbox/styles.css";

import { Project } from "@/data/projects";

function Gallery({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = project.gallery.map((img) => ({
    src: img.src,
    alt: project.title,
    width: img.width,
    height: img.height,
  }));

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36">

      {/* ───────────────── HEADER ───────────────── */}

      <div className="mb-12 flex items-end justify-between">

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#F59E0B]">
            Project Gallery
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Inside the
            <br />

            <span className="text-white/20">
              project.
            </span>
          </h2>
        </div>

        <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-white/20 md:block">
          {String(project.gallery.length).padStart(2, "0")} Images
        </span>

      </div>


      {/* ───────────────── GALLERY ───────────────── */}

      <div className="grid gap-5 md:grid-cols-2">

        {project.gallery.map((image, index) => (

          <button
            key={index}
            type="button"
            onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}
            className={`
              group relative block w-full cursor-zoom-in
              overflow-hidden border border-white/10
              bg-[#111416] text-left
              focus:outline-none
              focus:ring-1
              focus:ring-[#F59E0B]/60

              ${
                index === 0
                  ? "aspect-[16/10] md:col-span-2"
                  : "aspect-[4/3]"
              }
            `}
          >

            {/* IMAGE */}

            <Image
              src={image}
              alt={`${project.title} — image ${index + 1}`}
              fill
              sizes={
                index === 0
                  ? "(max-width: 768px) 100vw, 100vw"
                  : "(max-width: 768px) 100vw, 50vw"
              }
              priority={index === 0}
              className="
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.04]
              "
            />


            {/* OVERLAY */}

            <div
              className="
                absolute inset-0
                bg-[#0B0D0E]/0
                transition-all duration-500
                group-hover:bg-[#0B0D0E]/40
              "
            />


            {/* ZOOM ICON */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div
                className="
                  flex h-14 w-14
                  scale-90 items-center justify-center
                  border border-white/30
                  bg-[#0B0D0E]/50
                  opacity-0
                  backdrop-blur-sm
                  transition-all duration-500
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              >

                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-white"
                >
                  <circle cx="11" cy="11" r="7" />

                  <path d="m20 20-4-4" />

                  <path d="M11 8v6" />

                  <path d="M8 11h6" />
                </svg>

              </div>

            </div>


            {/* IMAGE NUMBER */}

            <div className="absolute left-5 top-5">

              <span
                className="
                  border border-white/15
                  bg-[#0B0D0E]/60
                  px-2.5 py-1.5
                  font-mono text-[9px]
                  text-white/60
                  backdrop-blur-sm
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

            </div>

            {/* BOTTOM INFO */}

            <div
              className="
                absolute bottom-0 left-0 right-0
                translate-y-2
                p-5
                opacity-0
                transition-all duration-500
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >

              <div className="flex items-end justify-between">

                <span className="text-[9px] uppercase tracking-[0.25em] text-white/60">
                  View Image
                </span>

              </div>

            </div>

          </button>

        ))}

      </div>


      {/* ───────────────── LIGHTBOX ───────────────── */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}

        plugins={[
          Zoom,
          Fullscreen,
        ]}

        carousel={{
          finite: false,
          preload: 2,

          imageFit: "contain",

          padding: "0px",
          spacing: "0px",
        }}

        zoom={{
          minZoom: 1,
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          scrollToZoom: true,
        }}

        animation={{
          fade: 300,
          swipe: 300,
          navigation: 400,
        }}

        controller={{
          closeOnBackdropClick: true,
        }}

        styles={{
          container: {
            backgroundColor: "rgba(5, 7, 8, 0.98)",
          },
        }}
      />

    </section>
  );
}

export default Gallery;