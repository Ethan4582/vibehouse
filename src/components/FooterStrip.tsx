"use client";

import { motion } from "framer-motion";

export default function FooterStrip() {
   const marqueeText = "EXPERTS, CREATIVE DESIGNERS, AND PROJECT LEADERS. A WAVE OF UNCOMPROMISING DOERS, MAKERS, AND THINKERS; ";

   return (
      <footer className="fixed bottom-0 left-0 w-full bg-white z-50 flex justify-between items-center px-4 py-2 border-t border-gray-100 uppercase tracking-widest text-[#E3A8C5] overflow-hidden text-[10px] md:text-sm font-merchant"
         style={{ borderTop: "none" }}
      >
         {/* Left Fixed Element */}
         <div className="z-10 bg-white pr-4 shrink-0">
            VibeHouse
         </div>

         {/* Middle Scrolling Element */}
         <div className="flex-1 overflow-hidden relative flex items-center">
            {/* 
               We use identical spans of text for seamless looping.
            */}
            <motion.div
               animate={{ x: [0, "-50%"] }}
               transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 30,
               }}
               className="flex whitespace-nowrap"
            >
               <span className="mr-8">{marqueeText}</span>
               <span className="mr-8">{marqueeText}</span>
               <span className="mr-8">{marqueeText}</span>
               <span className="mr-8">{marqueeText}</span>
            </motion.div>
         </div>

         {/* Right Fixed Element */}
         <div className="z-10 bg-white pl-4 shrink-0">
            COPYRIGHT 2026
         </div>
      </footer>
   );
}
