"use client";

import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Shield, Thermometer, Wifi } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CityCardProps {
  name: string;
  slug: string;
  image: string;
  vibe: string[];
  stats: {
    cost: number; // 1-5
    safety: number; // 1-5
    temp: string; // e.g. "Hot"
    internet: string;
  };
}

export function CityCard({ name, slug, image, vibe, stats }: CityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative w-full h-[400px] rounded-3xl overflow-hidden glass-card"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-ocean-900/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
        
        {/* Vibe Tags */}
        <div className="flex gap-2">
          {vibe.map((v) => (
            <span key={v} className="px-3 py-1 text-xs font-semibold text-ocean-900 bg-sand-400 rounded-full">
              {v}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-3xl font-serif font-bold text-white group-hover:text-sand-400 transition-colors">
          {name}
        </h3>

        {/* Stats Grid */}
        <div className="flex items-center gap-6 text-slate-300 text-sm">
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4 text-sand-400" />
            <span>{"$".repeat(stats.cost)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>{stats.safety}/5</span>
          </div>
          <div className="flex items-center gap-1">
            <Thermometer className="w-4 h-4 text-orange-400" />
            <span>{stats.temp}</span>
          </div>
          <div className="flex items-center gap-1">
            <Wifi className="w-4 h-4 text-blue-400" />
            <span>{stats.internet}</span>
          </div>
        </div>

        {/* CTA */}
        <Link 
          href={`/city/${slug}`}
          className="flex items-center justify-between w-full p-3 mt-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors border border-white/10"
        >
          <span className="font-medium">Explore Hub</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
