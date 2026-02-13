"use client";

import { motion } from "framer-motion";
import { CityCard } from "@/components/ui/CityCard";
import { cities } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

export function CityGrid() {
  const { dict } = useLanguage();

  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 space-y-6"
      >
        <h2 className="text-5xl md:text-7xl font-serif font-black text-white leading-tight">
          {dict.city_grid.title_line_1} <span className="text-gradient-mexican italic">{dict.city_grid.title_highlight}</span>
        </h2>
        <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
          {dict.city_grid.subtitle}
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"
      >
        {cities.map((city) => (
          <motion.div key={city.slug} variants={item}>
            <CityCard
              name={city.name}
              slug={city.slug}
              image={city.image}
              vibe={city.vibe}
              stats={city.stats}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
