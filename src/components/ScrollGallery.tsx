"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { images } from "../lib/assetData";

// ─── Layout config for each image ───────────────────────────────────────────
// "col" determines parallax speed group.
// "top" is the initial vertical offset inside the sticky viewport (px).
// "left" is the horizontal position as a CSS value.
// "width" / "height" are the rendered image dimensions.
// "rotate" adds a subtle tilt.
const imageConfigs = [
   { col: 0, top: 40, left: "2%", width: 340, height: 420, rotate: -2 },
   { col: 1, top: 120, left: "28%", width: 280, height: 360, rotate: 1 },
   { col: 2, top: 60, left: "54%", width: 380, height: 460, rotate: -1 },
   { col: 3, top: 200, left: "78%", width: 260, height: 340, rotate: 2 },
   { col: 0, top: 520, left: "6%", width: 300, height: 380, rotate: 1 },
   { col: 1, top: 500, left: "32%", width: 360, height: 440, rotate: -2 },
   { col: 2, top: 560, left: "58%", width: 260, height: 320, rotate: 1 },
   { col: 3, top: 620, left: "76%", width: 300, height: 360, rotate: -1 },
   { col: 0, top: 1000, left: "10%", width: 320, height: 400, rotate: -1 },
   { col: 1, top: 960, left: "36%", width: 280, height: 350, rotate: 2 },
   { col: 2, top: 1040, left: "62%", width: 340, height: 420, rotate: -2 },
] as const;

// Columns with higher speed move more per scroll unit (feel faster)
const columnSpeed: Record<number, number> = {
   0: 1.3,
   1: 0.7,
   2: 1.1,
   3: 0.5,
};

// ─── Single image with its own parallax translateY ──────────────────────────
function ParallaxImage({
   src,
   cfg,
   scrollYProgress,
}: {
   src: string;
   cfg: (typeof imageConfigs)[number];
   scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
   const travel = columnSpeed[cfg.col] * 700; // px to travel across full scroll
   const translateY = useTransform(scrollYProgress, [0, 1], ["0px", `-${travel}px`]);

   return (
      <motion.div
         style={{
            position: "absolute",
            top: cfg.top,
            left: cfg.left,
            width: cfg.width,
            rotate: cfg.rotate,
            translateY,
            willChange: "transform",
         }}
      >
         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img
            src={src}
            alt=""
            style={{ display: "block", width: "100%", height: cfg.height, objectFit: "cover" }}
            loading="lazy"
         />
      </motion.div>
   );
}

// ─── Main export ─────────────────────────────────────────────────────────────
export default function ScrollGallery() {
   const containerRef = useRef<HTMLDivElement>(null);

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"],
   });

   return (
      /*
       * The container is tall so there's scroll distance to work with.
       * The inner div is sticky, keeping everything visible in the viewport
       * while the parent scrolls. Images translate upward at different speeds.
       */
      <div
         ref={containerRef}
         style={{ height: "300vh", position: "relative", background: "#fff" }}
      >
         <div
            style={{
               position: "sticky",
               top: 0,
               height: "100vh",
               overflow: "hidden",
            }}
         >
            {images.slice(0, imageConfigs.length).map((src, i) => (
               <ParallaxImage
                  key={i}
                  src={src}
                  cfg={imageConfigs[i]}
                  scrollYProgress={scrollYProgress}
               />
            ))}
         </div>
      </div>
   );
}
