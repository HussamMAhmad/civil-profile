"use client";

import { motion } from "framer-motion";

export default function SuspenseLoader() {
  return (
    <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden bg-[#0B0D0E]">

      {/* Engineering Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Center */}
      <div className="relative z-10 w-full max-w-md px-6">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-[#F59E0B]/40">
              <span className="text-[10px] font-semibold text-[#F59E0B]">
                NA
              </span>
            </div>

            <div>
              <div className="h-2 w-24 overflow-hidden bg-white/10">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-full w-1/2 bg-[#F59E0B]/60"
                />
              </div>

              <div className="mt-2 h-1.5 w-16 bg-white/5" />
            </div>
          </div>

          <span className="font-mono text-[9px] text-white/20">
            LOADING
          </span>

        </div>


        {/* Skeleton */}
        <div className="space-y-4">

          <SkeletonLine className="h-10 w-[85%]" />
          <SkeletonLine className="h-10 w-[65%]" />

          <div className="pt-4">
            <SkeletonLine className="h-2 w-full" />
            <SkeletonLine className="mt-3 h-2 w-[92%]" />
            <SkeletonLine className="mt-3 h-2 w-[72%]" />
          </div>

        </div>


        {/* Progress */}
        <div className="mt-10">

          <div className="mb-3 flex justify-between">
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
              Loading content
            </span>

            <span className="font-mono text-[9px] text-[#F59E0B]/60">
              ...
            </span>
          </div>

          <div className="relative h-px overflow-hidden bg-white/10">

            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-1/3 bg-[#F59E0B]"
            />

          </div>

        </div>


        {/* Technical footer */}
        <div className="mt-6 flex justify-between font-mono text-[8px] uppercase tracking-[0.2em] text-white/15">
          <span>NA / SYSTEM</span>
          <span>PLEASE WAIT</span>
        </div>

      </div>

    </div>
  );
}


function SkeletonLine({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-white/[0.045] ${className}`}
    >
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
      />
    </div>
  );
}