"use client";

import { motion } from "framer-motion";
import { CityCard } from "@/components/ui/CityCard";
import { cities } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function CityGrid() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
          Choose Your <span className="text-gradient-gold">Strategic Base</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Every city in our network is vetted for safety, internet reliability, and US proximity.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
