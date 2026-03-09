"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { type Asset } from "../lib/assetData";
import { motion } from "framer-motion";

export default function RelatedAssetsSlider({ assets }: { assets: Asset[] }) {
   const sliderRef = useRef<HTMLDivElement>(null);

   // Simple smooth-scroll handling for mousewheel over the horizontal area
   // Lenis handles vertical, but for horizontal sections we can translate wheel
   useEffect(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const handleWheel = (e: WheelEvent) => {
         // Only translate vertical scroll to horizontal if the user is scrolling natively
         if (e.deltaY !== 0 && e.deltaX === 0) {
            // We don't want to swallow vertical scroll completely unless we are at boundaries, 
            // but for a true horizontal masonry/slider it's often nicer to just let it overflow nicely.
         }
      };

      // Optional: uncomment to capture vertical wheel for horizontal scrolling
      // slider.addEventListener("wheel", handleWheel, { passive: false });
      // return () => slider.removeEventListener("wheel", handleWheel);
   }, []);

   return (
      <div className="w-full pb-20">
         <div className="px-6 md:px-12 mb-8 flex justify-between items-end border-b border-white/10 pb-6">
            <h3 className="text-xl md:text-3xl font-htc-hand tracking-wide">More from the Archive</h3>
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-merchant">Swipe to explore</span>
         </div>

         <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-12 pb-10"
         >
            {assets.map((asset, index) => (
               <Link href={`/blog/${asset.id}`} key={asset.id} className="snap-start shrink-0 group">
                  {/* Card container matching the visual style of ScrollGallery somewhat (portrait) */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: index * 0.1 }}
                     className="w-[75vw] sm:w-[40vw] md:w-[25vw] lg:w-[calc(25vw-1.5rem)] pb-[130%] relative overflow-hidden bg-white/5 cursor-pointer group-hover:bg-white/10 transition-colors"
                  >
                     {asset.image ? (
                        <img
                           src={asset.image}
                           alt={asset.label}
                           className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                           loading="lazy"
                        />
                     ) : asset.video ? (
                        <video
                           src={asset.video}
                           muted
                           loop
                           autoPlay
                           playsInline
                           className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                     ) : null}

                     {/* Overlay gradient & text */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                     <div className="absolute bottom-0 left-0 w-full p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 font-merchant">
                        <div className="text-[10px] tracking-[0.15em] uppercase text-[#00ff00] mb-1">{asset.time}</div>
                        <div className="text-sm tracking-wide text-white leading-tight">{asset.label}</div>
                     </div>
                  </motion.div>
               </Link>
            ))}
         </div>
      </div>
   );
}
