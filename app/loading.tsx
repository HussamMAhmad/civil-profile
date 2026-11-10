"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0B0D0E] text-[#F4F4F2]">

      {/* Engineering Grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F59E0B]/[0.035] blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 flex w-full max-w-[500px] flex-col items-center px-6">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex h-24 w-24 items-center justify-center border border-[#F59E0B]/50"
        >
          {/* Corner marks */}
          <span className="absolute -left-[1px] -top-[1px] h-3 w-3 border-l border-t border-[#F59E0B]" />
          <span className="absolute -right-[1px] -top-[1px] h-3 w-3 border-r border-t border-[#F59E0B]" />
          <span className="absolute -bottom-[1px] -left-[1px] h-3 w-3 border-b border-l border-[#F59E0B]" />
          <span className="absolute -bottom-[1px] -right-[1px] h-3 w-3 border-b border-r border-[#F59E0B]" />

          <span className="text-2xl font-semibold tracking-[-0.05em] text-[#F59E0B]">
            NA
          </span>

          {/* Rotating line */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-4"
          >
            <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#F59E0B]" />
          </motion.div>
        </motion.div>


        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-sm font-semibold tracking-[0.18em]">
            NBRAS AHMAD
          </p>

          <p className="mt-2 text-[9px] uppercase tracking-[0.35em] text-white/30">
            Civil Engineer
          </p>
        </motion.div>


        {/* Loading Line */}
        <div className="mt-14 w-full max-w-[320px]">

          <div className="mb-3 flex items-center justify-between">

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
              Initializing
            </span>

            <motion.span
              className="font-mono text-[10px] text-[#F59E0B]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <LoadingPercentage />
            </motion.span>

          </div>


          {/* Progress Track */}

          <div className="relative h-px w-full overflow-hidden bg-white/10">

            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2.2,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="absolute left-0 top-0 h-full bg-[#F59E0B]"
            />

          </div>

        </div>


        {/* Bottom Technical Info */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center gap-4 text-[8px] uppercase tracking-[0.25em] text-white/20"
        >
          <span>Portfolio</span>

          <span className="h-1 w-1 rounded-full bg-[#F59E0B]/50" />

          <span>Engineering</span>

          <span className="h-1 w-1 rounded-full bg-[#F59E0B]/50" />

          <span>2026</span>
        </motion.div>

      </div>


      {/* Bottom Left Coordinate */}
      <div className="absolute bottom-6 left-6 font-mono text-[8px] text-white/15">
        NA / 001
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-6 right-6 font-mono text-[8px] text-white/15">
        SYSTEM.READY
      </div>

    </main>
  );
}

function LoadingPercentage() {
  return (
    <motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 2.2,
          times: [0, 0.1, 0.9, 1],
          ease: "linear",
        }}
      >
        100%
      </motion.span>
    </motion.span>
  );
}