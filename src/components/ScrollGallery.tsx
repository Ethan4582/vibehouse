"use client";

import { useRef, useState } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { images } from "../lib/assetData";

const imageData: {
   src: string;
   x: number;      // vw — left position from screen left
   y: number;      // vh — top position in canvas
   w: number;      // vw — image width
   h: number;      // vh — image height (thickness)
   rotate: number; // deg — START rotation angle
   mt: number;     // vh — extra margin/space ABOVE this image (added to y when rendering)
   mb: number;     // vh — documents desired space BELOW (add to y of next image manually)
   label: string;
   time: string;
}[] = [
      { src: images[1], x: 8, y: 8, w: 40, h: 48, rotate: -6, mt: 0, mb: 5, label: "NEON STREET DRIP", time: "00:03:22" },
      { src: images[0], x: 46, y: 10, w: 44, h: 48, rotate: 4, mt: 30, mb: 5, label: "TOKYO MIDNIGHT DRIVE", time: "00:02:41" },
      { src: images[2], x: 1, y: 86, w: 42, h: 48, rotate: 6, mt: 0, mb: 0, label: "ROOFTOP CITY VIBES", time: "00:01:58" },
      { src: images[3], x: 42, y: 144, w: 20, h: 52, rotate: 10, mt: 0, mb: 10, label: "MILAN STREET STYLE", time: "00:02:15" },
      { src: images[4], x: 52, y: 220, w: 44, h: 48, rotate: -10, mt: 0, mb: 10, label: "SUPERCAR GARAGE NIGHT", time: "00:03:05" },
      { src: images[5], x: 2, y: 240, w: 44, h: 48, rotate: 6, mt: 0, mb: 5, label: "PARIS RUNWAY DROP", time: "00:02:33" },
      { src: images[6], x: 66, y: 280, w: 20, h: 49, rotate: -2, mt: 0, mb: 10, label: "LATE NIGHT COFFEE CLUB", time: "00:01:52" },
      { src: images[7], x: 14, y: 320, w: 44, h: 48, rotate: 6, mt: 0, mb: 10, label: "VINTAGE PORSCHE RUN", time: "00:02:44" },
      { src: images[8], x: 56, y: 367, w: 26, h: 49, rotate: -8, mt: 0, mb: 0, label: "SOHO STREET MODEL", time: "00:01:39" },
      { src: images[9], x: 26, y: 430, w: 20, h: 50, rotate: -8, mt: 0, mb: 10, label: "LUXURY NIGHT GARAGE", time: "00:02:58" },
      { src: images[10], x: 52, y: 465, w: 44, h: 48, rotate: -10, mt: 0, mb: 0, label: "DESERT LAMBO SESSION", time: "00:03:10" },
      { src: images[11], x: 12, y: 510, w: 26, h: 48, rotate: -8, mt: 0, mb: 10, label: "BROOKLYN FASHION WALK", time: "00:01:57" },
      { src: images[11], x: 29, y: 560, w: 44, h: 48, rotate: -4, mt: 6, mb: 10, label: "CITY LIGHTS PORTRAIT", time: "00:02:06" },
      { src: images[11], x: 61, y: 630, w: 20, h: 49, rotate: -4, mt: 6, mb: 10, label: "NIGHT BIKE CRUISE", time: "00:02:18" },
      { src: images[12], x: 1, y: 650, w: 42, h: 48, rotate: 8, mt: 0, mb: 0, label: "LOS ANGELES SUNSET FIT", time: "00:02:36" },
      { src: images[13], x: 51, y: 710, w: 46, h: 48, rotate: 14, mt: 0, mb: 0, label: "STREET CULTURE DROP", time: "00:02:09" },
      { src: images[14], x: 31, y: 760, w: 20, h: 49, rotate: -6, mt: 6, mb: 10, label: "TOKYO DRIFT NIGHT", time: "00:01:48" },
      { src: images[15], x: 61, y: 810, w: 20, h: 49, rotate: -6, mt: 6, mb: 10, label: "URBAN ROOFTOP SHOOT", time: "00:02:21" },
      { src: images[16], x: 8, y: 880, w: 44, h: 48, rotate: 10, mt: 0, mb: 0, label: "FERRARI CLUB NIGHT", time: "00:02:43" },
      { src: images[17], x: 49, y: 910, w: 46, h: 46, rotate: 10, mt: 0, mb: 0, label: "MODEL OFF DUTY", time: "00:01:54" },
      { src: images[18], x: 16, y: 950, w: 20, h: 49, rotate: -4, mt: 6, mb: 10, label: "CITY BIKE LIFESTYLE", time: "00:02:02" },
      { src: images[19], x: 28, y: 1020, w: 44, h: 48, rotate: -8, mt: 0, mb: 0, label: "NEON DISTRICT WALK", time: "00:02:27" },
      { src: images[20], x: 52, y: 1080, w: 44, h: 48, rotate: -10, mt: 0, mb: 10, label: "MIDNIGHT ROLLS ROYCE", time: "00:03:11" },
      { src: images[21], x: 2, y: 1100, w: 44, h: 48, rotate: 6, mt: 0, mb: 5, label: "SUMMER STREET DRIP", time: "00:01:46" },
      { src: images[22], x: 62, y: 1160, w: 28, h: 49, rotate: -10, mt: 0, mb: 10, label: "HYPE CLUB ARRIVAL", time: "00:02:12" },
      { src: images[23], x: 28, y: 1200, w: 20, h: 49, rotate: -10, mt: 0, mb: 10, label: "CITY PORTRAIT MODE", time: "00:01:59" },
      { src: images[24], x: 46, y: 1250, w: 44, h: 48, rotate: -6, mt: 0, mb: 5, label: "LUXURY HOTEL NIGHT", time: "00:02:38" },
      { src: images[25], x: 22, y: 1310, w: 20, h: 49, rotate: 6, mt: 0, mb: 10, label: "PARIS COFFEE FIT", time: "00:01:44" },
      { src: images[26], x: 61, y: 1350, w: 20, h: 49, rotate: 6, mt: 0, mb: 10, label: "NIGHT STREET PORSCHE", time: "00:02:53" },
      { src: images[27], x: 2, y: 1410, w: 44, h: 48, rotate: -10, mt: 0, mb: 10, label: "URBAN SKYLINE WALK", time: "00:02:07" },
      { src: images[28], x: 18, y: 1460, w: 44, h: 48, rotate: 6, mt: 0, mb: 10, label: "MIDNIGHT LAMBO RUN", time: "00:02:58" },
      { src: images[29], x: 60, y: 1495, w: 20, h: 49, rotate: -8, mt: 6, mb: 10, label: "TOKYO STREET FIT", time: "00:01:42" },
      { src: images[30], x: 6, y: 1540, w: 42, h: 48, rotate: 10, mt: 0, mb: 5, label: "NEON NIGHT DRIVE", time: "00:03:05" },
      { src: images[31], x: 52, y: 1580, w: 44, h: 48, rotate: -6, mt: 0, mb: 10, label: "PARIS RUNWAY VIBES", time: "00:02:11" },
      { src: images[32], x: 26, y: 1635, w: 20, h: 50, rotate: -4, mt: 0, mb: 10, label: "VINTAGE PORSCHE CLUB", time: "00:02:37" },
      { src: images[33], x: 64, y: 1680, w: 26, h: 49, rotate: 8, mt: 0, mb: 0, label: "SOHO MODEL WALK", time: "00:01:55" },
      { src: images[34], x: 10, y: 1720, w: 44, h: 48, rotate: -10, mt: 0, mb: 10, label: "NIGHT CITY DRIP", time: "00:02:49" },
   ];

// Total canvas height in vh — bump this up if images overflow the bottom
const CANVAS_HEIGHT_VH = 1780;

function ParallaxImage({ img }: { img: typeof imageData[0] }) {
   const ref = useRef<HTMLDivElement>(null);
   const [isHovered, setIsHovered] = useState(false);

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
   });

   const smoothProgress = useSpring(scrollYProgress, {
      damping: 50,
      stiffness: 80,
      mass: 0.5,
   });

   // Subtle upward drift — ONLY while the image is moving through the viewport
   const scrollY = useTransform(smoothProgress, [0, 1], [10, -10]);

   // Rotation straightens out to 0 degrees exactly when passing the middle of the viewport
   const rotation = useTransform(smoothProgress, [0, 0.5, 1], [img.rotate, 0, 0]);

   // Final top = y (base) + mt (extra space above)
   const topVh = img.y + img.mt;

   return (
      <motion.div
         ref={ref}
         className="cursor-pointer" // Removed tailwind group, handling hover with React state
         onPointerEnter={() => setIsHovered(true)}
         onPointerLeave={() => setIsHovered(false)}
         style={{
            position: "absolute",
            left: `${img.x}vw`,
            top: `${topVh}vh`,
            width: `${img.w}vw`,
            height: `${img.h}vh`, // Use h property for thickness (height)
            rotate: rotation,
            y: scrollY,
            zIndex: isHovered ? 10 : 1, // Elevate z-index on hover so strip overlaps other elements
         }}
      >
         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img
            src={img.src}
            alt={img.label}
            style={{
               width: "100%",
               height: "100%", // Fill the height defined in h
               display: "block",
               objectFit: "cover", // Ensure image fills the box without stretching
            }}
            loading="lazy"
         />

         {/* Pure CSS Grid animated Hover Strip. Fixes framer-motion height calculation flash bugs. calc(100%-1px) seals any tiny subpixel gap */}
         <div
            style={{ fontFamily: "'merchant', sans-serif" }}
            className="absolute top-[calc(100%-1px)] left-0 w-full bg-black text-white pointer-events-none"
         >
            <div
               className={`grid transition-all duration-300 ease-out ${isHovered ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
               <div className="overflow-hidden">
                  <div className="px-2 py-1 flex justify-between items-center text-[9px] sm:text-[11px] tracking-widest uppercase gap-2 whitespace-nowrap">
                     <span className="truncate" style={{ lineHeight: "1.1" }}>{img.label}</span>
                     <span className="shrink-0" style={{ lineHeight: "1.1" }}>{img.time}</span>
                  </div>
               </div>
            </div>
         </div>
      </motion.div>
   );
}

export default function ScrollGallery() {
   return (
      <div style={{ backgroundColor: "#ffffff", paddingTop: "15vh", paddingBottom: "20vh" }}>
         <div
            style={{
               position: "relative",
               width: "100%",
               height: `${CANVAS_HEIGHT_VH}vh`,
               overflow: "hidden",
            }}
         >
            {imageData.map((img, i) => (
               <ParallaxImage key={i} img={img} />
            ))}
         </div>
      </div>
   );
}

