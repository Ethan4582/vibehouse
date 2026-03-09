"use client";

import { useState } from "react";
import { useHoverStore } from "./HoverProvider";

export default function InformationPanel() {
   const [isOpen, setIsOpen] = useState(false);
   const { isGlobalHovered } = useHoverStore();

   return (
      <>
         {/* Trigger Button */}
         <button
            onClick={() => setIsOpen(true)}
            className="fixed top-8 left-8 z-[60] group flex items-start gap-0 transition-transform active:scale-95"
            aria-label="Open Information Panel"
         >
            {/* Massive Emoji - reduced size */}
            <span className="text-3xl sm:text-5xl -mt-2 -ml-2 select-none pointer-events-none drop-shadow-sm transition-transform group-hover:scale-80">
               <span className="inline-block group-hover:hidden" aria-hidden="true">👋🏻</span>
               <span className="hidden group-hover:inline-block" aria-hidden="true">👆🏻</span>
            </span>

            {/* The Badge - rounded corners and larger text */}
            <div
               className={`text-[10px] sm:text-[12px] font-medium uppercase tracking-[0.15em] px-3 py-1 rounded-md border ml-2 mt-4 leading-none font-merchant transition-colors duration-700 ${isGlobalHovered
                     ? "bg-transparent text-[#ff5252] border-[#ff5252]"
                     : "bg-[#ff5252] text-black border-black/5"
                  }`}
            >
               INFORMATION
            </div>
         </button>

         {/* Contact Button */}
         <a
            href="https://x.com/SinghAshir65848"
            className={`fixed top-[46px] right-8 z-[60] text-[10px] sm:text-[12px] font-medium uppercase tracking-[0.15em] px-3 py-1 rounded-md border leading-none font-merchant transition-all duration-700 hover:scale-105 active:scale-95 ${isGlobalHovered
                  ? "bg-transparent text-[#ff75d6] border-[#ff75d6]"
                  : "bg-[#ff75d6] text-black border-black/5"
               }`}
         >
            CONTACT
         </a>

         {/* Overlay Background */}
         <div
            className={`fixed inset-0 z-[70] bg-black/10 backdrop-blur-[1px] transition-opacity duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
               }`}
            onClick={() => setIsOpen(false)}
         />

         {/* Slide-in Card */}
         <div
            className={`fixed top-12 left-8 z-[80] w-[calc(100vw-64px)] sm:w-[650px] max-h-[82vh] bg-[#fdfdfd] rounded-[2.5rem] shadow-xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col overflow-hidden border border-gray-50 ${isOpen ? "translate-x-0" : "-translate-x-[125%]"
               }`}
         >
            {/* Close Button */}
            <button
               onClick={() => setIsOpen(false)}
               className="absolute top-10 right-12 text-[10px] sm:text-[11px] font-bold text-gray-300 hover:text-black transition-colors z-10 font-merchant"
               aria-label="Close Information Panel"
            >
               [X]
            </button>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto pt-20 pb-0 px-12 sm:px-20 hide-scrollbar font-merchant text-[13px]">

               {/* Header Area */}
               <h2 className="text-2xl sm:text-[24px] mb-12 tracking-tight text-gray-900 leading-none font-htc-hand">
                  re•bel•lious in•gen•ious <span className="bg-[#00ff00] text-black px-1.5 mx-0.5">none</span>•quiv•a•lent
               </h2>

               {/* Main Paragraph Section - High letter and line spacing for studio feel */}
               <div className="leading-[2.2] mb-12 space-y-12 text-gray-800 uppercase tracking-[0.1em]">
                  <p>
                     HOME TO AN ARSENAL <span className="bg-[#00ff00] text-black px-1 font-bold">OF</span> THE LEADING
                     CREATIVES THAT PRIDE THEMSELVES ON
                     BEING VIBE <span className="bg-[#00ff00] text-black px-1 font-bold">MAKERS</span>. WE <span className="bg-[#00ff00] text-black px-1 font-bold">ARE</span> UNCOMPROMISING
                     DOERS AND DREAMERS, DISRUPTORS AND
                     BUILDERS, THINKERS AND SHIFTERS. WE
                     ARE CONNECTED BY OUR STORIES, <span className="bg-[#00ff00] text-black px-1 font-bold">MAS</span>
                     TERING THE ART OF THE UNSEEN.
                  </p>
                  <p>
                     <span className="bg-[#00ff00] text-black px-1 font-bold">SMART</span>ER TOGETHER, <span className="bg-[#00ff00] text-black px-1 font-bold">WE ARE</span> A FOCUSED
                     FAMILY <span className="bg-[#00ff00] text-black px-1 font-bold">OF</span> VISIONARIES.
                  </p>
               </div>

               <div className="mb-12 uppercase tracking-[0.1em] text-gray-800">
                  <p className="mb-6">
                     WE ARE VIBE<span className="bg-[#00ff00] text-black px-1">HOUSE</span>.
                  </p>
                  <p>
                     WELCOME TO THE CLUB.
                  </p>
               </div>

               {/* Member List */}
               <div className="mb-20 relative">
                  <div className="flex justify-between border-b border-gray-50 pb-4 mb-8 font-bold uppercase tracking-[0.2em] text-gray-300">
                     <span>Residents</span>
                     <span>[11]</span>
                  </div>
                  <ul className="space-y-5 uppercase text-gray-700 tracking-[0.08em]">
                     <li className="border-b border-gray-50 border-dotted pb-2 flex items-center">SPIKE JORDAN</li>
                     <li className="border-b border-gray-50 border-dotted pb-2 flex items-center">KAJAL</li>
                     <li className="border-b border-gray-50 border-dotted pb-2 flex items-center">MICHAEL PRIETO</li>
                     <li className="border-b border-gray-50 border-dotted pb-2 flex items-center">LUKE GILBERT</li>
                     <li className="border-b border-gray-200 border-dotted pb-2 flex items-center">FRANKLIN RICART</li>
                  </ul>

                  {/* Reference Image Drawing Overlay */}
                  <div className="absolute right-[-40px] bottom-[-60px] w-64 h-64 pointer-events-none opacity-80 select-none">
                     <img
                        src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F090680fd74b24e6de75d5032545f44810e82103f?generation=1773007083161099&alt=media"
                        alt="Studio illustration"
                        className="w-full h-full object-contain"
                     />
                  </div>
               </div>

            </div>

            {/* Fixed Contact Section at Bottom */}
            <div className="bg-[#fafafa] p-12 sm:px-20 mt-auto grid grid-cols-[140px_1fr] gap-y-4 font-merchant text-[12px] border-t border-gray-50 rounded-b-[2.5rem]">
               <span className="uppercase text-black tracking-[0.15em]">Email:</span>
               <a href="mailto:contact@vibehouse.com" className="text-gray-900 border-b border-transparent hover:border-black/20 transition-all w-fit tracking-[0.05em]">contact@vibehouse.com</a>

               <span className="uppercase text-black tracking-[0.15em]">X:</span>
               <a href="https://x.com/SinghAshir65848" target="_blank" rel="noopener noreferrer" className="text-gray-900 border-b border-transparent hover:border-black/20 transition-all w-fit tracking-[0.05em]">/vibehouse</a>

               <span className="uppercase text-black tracking-[0.15em]">Creator:</span>
               <a href="https://ash-cv.vercel.app/" className="text-gray-900 border-b border-transparent hover:border-black/20 transition-all w-fit uppercase tracking-[0.05em]">Ashirwad Singh</a>
            </div>

         </div>

         <style dangerouslySetInnerHTML={{
            __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
      </>
   );
}
