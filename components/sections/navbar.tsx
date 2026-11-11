"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { images } from "@/public";

const navigation = [
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "let's Talk",
    href: "/#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-[1440px] px-5 py-5 md:px-8">
        {/* ───────────────── NAVBAR ───────────────── */}

        <nav className="relative border border-white/10 bg-[#0B0D0E]/80 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            {/* LOGO */}

            <Link
              href="/"
              onClick={closeMenu}
              className="group flex items-center gap-3"
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                <Image
                  src={images.logo}
                  alt="Nebras logo"
                  fill
                  sizes="44px"
                  className="object-contain transition duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold leading-none tracking-[0.14em] text-[#F4F4F2]">
                  NEBRAS
                </p>

                <div className="mt-1.5 flex items-center gap-2">
                  <span className="h-px w-4 bg-[#F59E0B]" />

                  <p className="text-[8px] uppercase leading-none tracking-[0.25em] text-white/35">
                    Civil Engineer
                  </p>
                </div>
              </div>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/#contact"
                className="group flex items-center gap-2 border border-white/10 px-4 py-2 text-sm transition duration-300 hover:border-[#F59E0B] hover:text-[#F59E0B]"
              >
                Let's Talk
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* ───────────────── MOBILE BUTTON ───────────────── */}

            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative flex h-10 w-10 items-center justify-center border border-white/10 transition hover:border-[#F59E0B] hover:text-[#F59E0B] md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* ───────────────── MOBILE MENU ───────────────── */}

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden md:hidden"
              >
                <div className="border-t border-white/10">
                  {/* Mobile Links */}

                  <div className="px-4 py-4">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.06,
                          duration: 0.3,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="group flex items-center justify-between border-b border-white/[0.06] py-5"
                        >
                          <div className="flex items-center gap-4">
                            <span className="font-mono text-[9px] text-[#F59E0B]/60">
                              0{index + 1}
                            </span>

                            <span className="text-base text-white/70 transition group-hover:text-white">
                              {item.label}
                            </span>
                          </div>

                          <ArrowUpRight
                            size={16}
                            className="text-white/20 transition group-hover:text-[#F59E0B] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technical Footer */}

                  <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-4">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                      NBRAS AHMAD
                    </span>

                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                      CIVIL ENGINEER
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
