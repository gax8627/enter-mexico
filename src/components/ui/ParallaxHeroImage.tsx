"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxHeroImageProps {
  src: string;
  alt: string;
}

export function ParallaxHeroImage({ src, alt }: ParallaxHeroImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full overflow-hidden">
      <motion.div style={{ y, opacity }} className="relative w-full h-[120%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/10 via-ocean-900/30 to-ocean-900" />
      </motion.div>
    </div>
  );
}
