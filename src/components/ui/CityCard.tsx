"use client";

import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Shield, Thermometer, Wifi } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface CityCardProps {
  name: string;
  slug: string;
  image: string;
  vibe: string[];
  stats: {
    cost: number;
    safety: number;
    temp: string;
    internet: string;
  };
}

export function CityCard({ name, slug, image, vibe, stats }: CityCardProps) {
  const { dict } = useLanguage();

  return (
    <motion.div
      whileHover={{ y: -12 }}
      className="mexican-card group h-[450px]"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0 shadow-inner"
      />
      
      {/* Gradient Overlay - Modern Mexican Palette */}
      <div className="absolute inset-0 bg-gradient-to-t from-mex-black via-mex-black/40 to-transparent group-hover:from-mex-black group-hover:via-mex-black/60 transition-all duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end gap-5">
        
        {/* Vibe Tags */}
        <div className="flex flex-wrap gap-2">
          {vibe.map((v) => (
            <span key={v} className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white bg-terracotta shadow-lg rounded-lg">
              {v}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-4xl font-serif font-black text-white group-hover:text-turquoise transition-colors drop-shadow-2xl">
          {name}
        </h3>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 text-slate-200 text-xs font-bold border-t border-white/10 pt-4">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-sun-yellow" />
            <span>{"$".repeat(stats.cost)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-turquoise" />
            <span>{stats.safety}/5</span>
          </div>
          <div className="flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-terracotta" />
            <span>{stats.temp}</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-sun-yellow" />
            <span>{stats.internet}</span>
          </div>
        </div>

        {/* CTA */}
        <Link 
          href={`/city/${slug}`}
          className="flex items-center justify-between w-full p-4 mt-2 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-mex-black backdrop-blur-xl transition-all duration-300 border border-white/20 group-hover:shadow-[0_10px_30px_rgba(64,224,208,0.3)]"
        >
          <span className="font-black uppercase tracking-widest text-xs">{dict.city_card.explore}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
