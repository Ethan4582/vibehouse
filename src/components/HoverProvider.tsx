"use client";

import { createContext, useContext, useState } from "react";

const HoverContext = createContext<{
   isGlobalHovered: boolean;
   setGlobalHovered: (v: boolean) => void;
}>({
   isGlobalHovered: false,
   setGlobalHovered: () => { },
});

export function HoverProvider({ children }: { children: React.ReactNode }) {
   const [isGlobalHovered, setGlobalHovered] = useState(false);

   return (
      <HoverContext.Provider value={{ isGlobalHovered, setGlobalHovered }}>
         <div
            className={`transition-colors duration-700 ease-in-out w-full min-h-screen ${isGlobalHovered ? "bg-black text-white" : "bg-white text-black"
               }`}
         >
            {children}
         </div>
      </HoverContext.Provider>
   );
}

export function useHoverStore() {
   return useContext(HoverContext);
}
