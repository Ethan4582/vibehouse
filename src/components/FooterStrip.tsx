"use client";

import { motion } from "framer-motion";
import { useHoverStore } from "./HoverProvider";

export default function FooterStrip() {
   const { isGlobalHovered } = useHoverStore();
   const marqueeText = "EXPERTS, CREATIVE DESIGNERS, AND PROJECT LEADERS. A WAVE OF UNCOMPROMISING DOERS, MAKERS, AND THINKERS; ";

   return (
      <footer className={`fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-4 py-2 uppercase tracking-widest overflow-hidden text-[10px] md:text-sm font-merchant transition-colors duration-700 ${isGlobalHovered
            ? "bg-transparent text-gray-400"
            : "bg-white text-[#E3A8C5] border-t border-gray-100"
         }`}
         style={{ borderTop: isGlobalHovered ? "none" : "" }}
      >
         {/* Left Fixed Element */}
         <div className={`z-10 pr-4 shrink-0 transition-colors duration-700 ${isGlobalHovered ? "bg-black text-white" : "bg-white text-[#E3A8C5]"
            }`}>
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
         <div className={`z-10 pl-4 shrink-0 transition-colors duration-700 ${isGlobalHovered ? "bg-black text-white" : "bg-white text-[#E3A8C5]"
            }`}>
            COPYRIGHT 2026
         </div>
      </footer>
   );
}
