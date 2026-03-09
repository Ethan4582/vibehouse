"use client";

import { useState } from "react";

export default function InformationPanel() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         {/* Trigger Button */}
         <button
            onClick={() => setIsOpen(true)}
            className="fixed top-8 left-8 z-[60] group flex items-start gap-0 transition-transform active:scale-95"
            aria-label="Open Information Panel"
         >
            {/* Massive Emoji */}
            <span className="text-7xl sm:text-8xl -mt-6 -ml-4 select-none pointer-events-none drop-shadow-sm transition-transform group-hover:scale-110">
               <span className="inline-block group-hover:hidden" aria-hidden="true">👋</span>
               <span className="hidden group-hover:inline-block" aria-hidden="true">☝️</span>
            </span>

            {/* The Badge - Increased gap by adjusting margin */}
            <div
               className="bg-[#ff5252] text-black text-[8px] sm:text-[9px] font-medium uppercase tracking-[0.15em] px-2 py-[1px] border border-black/5 ml-2 mt-4 leading-none font-merchant"
            >
               INFORMATION
            </div>
         </button>

         {/* Overlay Background */}
         <div
            className={`fixed inset-0 z-[70] bg-black/10 backdrop-blur-[1px] transition-opacity duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
               }`}
            onClick={() => setIsOpen(false)}
         />

         {/* Slide-in Card */}
         <div
            className={`fixed top-12 left-8 z-[80] w-[calc(100vw-64px)] sm:w-[500px] max-h-[82vh] bg-[#fdfdfd] rounded-[2.5rem] shadow-xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col overflow-hidden border border-gray-50 ${isOpen ? "translate-x-0" : "-translate-x-[125%]"
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
            <div className="flex-1 overflow-y-auto pt-20 pb-0 px-10 sm:px-14 hide-scrollbar font-merchant text-[12px]">

               {/* Header Area */}
               <h2 className="text-2xl sm:text-[24px] mb-12 tracking-tight text-gray-900 leading-none font-htc-hand">
                  re•bel•lious in•gen•ious <span className="bg-[#00ff00] text-black px-1.5 mx-0.5">none</span>•quiv•a•lent
               </h2>

               {/* Main Paragraph Section - High letter and line spacing for studio feel */}
               <div className="leading-[2] mb-12 space-y-10 text-gray-800 uppercase tracking-[0.1em]">
                  <p>
                     HOME TO AN ARSENAL <span className="bg-[#00ff00] text-black px-1 font-bold">OF</span> THE LEADING
                     CREATIVES THAT PRIDE THEMSELVES ON
                     BEING GENI<span className="bg-[#00ff00] text-black px-1 font-bold">USES</span>. WE <span className="bg-[#00ff00] text-black px-1 font-bold">ARE</span> UNCOMPROMISING
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
                     WE ARE GENI<span className="bg-[#00ff00] text-black px-1">US</span>.
                  </p>
                  <p>
                     WELCOME TO THE CLUB.
                  </p>
               </div>

               {/* Member List */}
               <div className="mb-20 relative">
                  <div className="flex justify-between border-b border-gray-50 pb-4 mb-8 font-bold uppercase tracking-[0.2em] text-gray-300">
                     <span>Geniuses</span>
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
            <div className="bg-[#fafafa] p-10 sm:px-14 mt-auto grid grid-cols-[100px_1fr] gap-y-4 font-mono text-[11px] border-t border-gray-50 rounded-b-[2.5rem]">
               <span className="uppercase text-gray-300 tracking-[0.15em]">Email:</span>
               <a href="mailto:contact@wearegeniusclub.com" className="text-gray-900 border-b border-transparent hover:border-black/10 transition-all w-fit tracking-[0.05em]">contact@wearegeniusclub.com</a>

               <span className="uppercase text-gray-300 tracking-[0.15em]">Instagram:</span>
               <a href="https://instagram.com/thegeniusclxb" target="_blank" rel="noopener noreferrer" className="text-gray-900 border-b border-transparent hover:border-black/10 transition-all w-fit tracking-[0.05em]">/thegeniusclxb</a>

               <span className="uppercase text-gray-300 tracking-[0.15em]">Vimeo:</span>
               <a href="#" className="text-gray-900 border-b border-transparent hover:border-black/10 transition-all w-fit uppercase tracking-[0.05em]">genius club</a>
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
