"use client";

import { useRef } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { images } from "../lib/assetData";


const rowData = [
   { imgs: [images[0]], offsets: ["-78%"], rotate: [-2], pb: "12vh", w: ["40vw"] },
    { imgs: [images[0]], offsets: ["-28%"], rotate: [-8], pb: "12vh", w: ["40vw"] },



   { imgs: [images[2], images[3]], offsets: ["-22%", "20%"], rotate: [1, -1], pb: "8vh", w: ["20vw", "38vw"] },
   { imgs: [images[4]], offsets: ["-32%"], rotate: [-3], pb: "18vh", w: ["28vw"] },
   { imgs: [images[5], images[6]], offsets: ["-24%", "22%"], rotate: [-1.5, 2], pb: "12vh", w: ["35vw", "34vw"] },
   { imgs: [images[7]], offsets: ["-38%"], rotate: [-5], pb: "20vh", w: ["30vw"] },
   { imgs: [images[8], images[9]], offsets: ["-26%", "24%"], rotate: [-1, 0], pb: "14vh", w: ["36vw", "36vw"] },
   { imgs: [images[10]], offsets: ["32%"], rotate: [2], pb: "8vh", w: ["22vw"] },
];

function GalleryRow({ row }: { row: typeof rowData[0] }) {
   const ref = useRef<HTMLDivElement>(null);

   // Monitor the scroll position relative to this specific row layer
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
   });

   // Apply a spring to the scroll progress for an ultra-smooth, fluid feel
   const smoothProgress = useSpring(scrollYProgress, {
      damping: 50,
      stiffness: 80,
      mass: 0.5,
   });

   // Map the smooth scroll progress to a very subtle Y translation (10-30px range).
   // Only moves upward as the user scrolls down.
   const y = useTransform(smoothProgress, [0, 1], [15, -15]);

   return (
      <div
         ref={ref}
         style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            paddingBottom: row.pb, // variable vertical spacing between this layer and the next
            position: "relative",
         }}
      >
         {row.imgs.map((src, j) => {
            return (
               <motion.div
                  key={j}
                  style={{
                     // Horizontal offset to avoid strict central alignment.
                     position: row.imgs.length > 1 ? "absolute" : "relative",
                     left: row.imgs.length > 1 ? "50%" : "auto",
                     transform: row.imgs.length > 1
                        ? `translateX(-50%) translateX(${row.offsets[j]}) rotate(${row.rotate[j]}deg)`
                        : `translateX(${row.offsets[j]}) rotate(${row.rotate[j]}deg)`,
                     width: row.w[j],
                     minWidth: "200px",
                     maxWidth: "800px",
                     y, // Apply very subtle vertical translation to each image directly
                  }}
               >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                     src={src}
                     alt=""
                     style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        objectFit: "cover",
                     }}
                     loading="lazy"
                  />
               </motion.div>
            );
         })}
      </div>
   );
}

export default function ScrollGallery() {
   return (
      <div style={{ backgroundColor: "#ffffff", padding: "15vh 0 25vh 0", overflow: "hidden" }}>
         {rowData.map((row, i) => (
            <GalleryRow key={i} row={row} />
         ))}
      </div>
   );
}
