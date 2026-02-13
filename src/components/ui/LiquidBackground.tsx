"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function LiquidBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed inset-0 -z-10 overflow-hidden bg-ocean-900",
        className,
      )}
    >
      {/* Deep Ocean Base */}
      <div className="absolute inset-0 bg-ocean-900" />

      {/* Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-ocean-800 mix-blend-multiply filter blur-3xl opacity-70"
      />

      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-sand-500/20 mix-blend-color-dodge filter blur-3xl opacity-50"
      />

      <motion.div
        animate={{
          x: [0, 20, -40, 0],
          y: [0, -20, 40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-blue-900/40 mix-blend-overlay filter blur-[100px] opacity-60"
      />

      {/* Noise Overlay for Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
    </div>
  );
}
