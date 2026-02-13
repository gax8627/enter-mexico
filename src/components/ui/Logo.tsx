"use client";

import { motion } from "framer-motion";

export function Logo() {
  return (
    <div className="flex items-center gap-2 group">
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Abstract Tricolor Mexican Flag Background */}
        <div className="absolute inset-0 flex rounded-lg overflow-hidden shadow-lg border border-white/10">
          <div className="w-1/3 h-full bg-[#006341]" /> {/* Green */}
          <div className="w-1/3 h-full bg-white" />      {/* White */}
          <div className="w-1/3 h-full bg-[#C8102E]" /> {/* Red */}
        </div>
        
        {/* Centered Sun/Diamond - Symbolic of clarity and strategy */}
        <motion.div 
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative z-10 w-6 h-6 flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#006341]/80 drop-shadow-sm">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="white" strokeWidth="1" />
          </svg>
        </motion.div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl font-serif font-black tracking-tighter text-white leading-none">
          ENTER <span className="text-[#006341]">MEXICO</span>
        </span>
        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#C8102E] leading-none mt-1">
          Premium Concierge
        </span>
      </div>
    </div>
  );
}
