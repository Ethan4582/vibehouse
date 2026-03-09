import { notFound } from "next/navigation";
import Link from "next/link";
import { assets, getAsset, type Asset } from "../../../lib/assetData";
import RelatedAssetsSlider from "../../../components/RelatedAssetsSlider";

// Static generation
export async function generateStaticParams() {
   return Object.keys(assets).map((id) => ({ id }));
}

export default async function BlogPage(props: { params: Promise<{ id: string }> }) {
   const { id } = await props.params;
   const asset = getAsset(id);

   if (!asset) {
      notFound();
   }

   // Randomize 8 other distinct assets to show at the bottom
   const otherAssets = (Object.values(assets) as Asset[])
      .filter((a) => a.id !== id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);

   // Two shorter metadata blocks to display randomly around the page
   const extraMetadataLabel = ["CREATIVE DIRECTION", "STUDIO ARCHIVE", "PROJECT HIGHLIGHT"];
   const randomLabel = extraMetadataLabel[Math.floor(Math.random() * extraMetadataLabel.length)];

   return (
      <main className="min-h-screen bg-black text-white relative flex flex-col pt-12 overflow-x-hidden max-w-full">
         {/* Navigation / Header */}
         <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 pointer-events-none mix-blend-difference font-merchant">
            <Link href="/" className="uppercase text-[12px] md:text-sm tracking-widest pointer-events-auto hover:text-[#00ff00] transition-colors border-b border-transparent hover:border-[#00ff00]">
               ← BACK TO VIBEHOUSE
            </Link>
            <div className="uppercase text-[12px] md:text-sm tracking-widest pointer-events-auto opacity-70">
               {asset.id.toUpperCase()}
            </div>
         </header>

         {/* Hero Section */}
         <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden px-6 md:px-12">
            <div className="absolute inset-0 z-0 opacity-40">
               {/* Background blur/shadow element */}
               {asset.image ? (
                  <img src={asset.image} className="w-full h-full object-cover blur-3xl scale-110" alt="" />
               ) : null}
            </div>

            <div className="relative z-10 w-full max-w-4xl h-full mt-20 mb-10 overflow-hidden shadow-2xl rounded-sm">
               {asset.video ? (
                  <video
                     src={asset.video}
                     muted
                     loop
                     autoPlay
                     playsInline
                     className="absolute inset-0 w-full h-full object-cover"
                  />
               ) : (
                  <img
                     src={asset.image}
                     alt={asset.label}
                     className="absolute inset-0 w-full h-full object-cover"
                  />
               )}
            </div>
         </section>

         {/* Meta & Info Section */}
         <section className="px-6 md:px-12 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto w-full font-merchant text-white">
            <div className="space-y-6">
               <div className="text-[#00ff00] tracking-[0.2em] text-[10px] md:text-[12px] uppercase">
                  {randomLabel}
               </div>
               <h1 className="text-4xl md:text-7xl font-htc-hand leading-none tracking-tight">
                  {asset.label}
               </h1>
               <div className="pt-4 border-t border-white/10 mt-6 grid grid-cols-2 gap-4 uppercase text-[10px] md:text-[12px] tracking-widest text-white/60">
                  <div>
                     <span className="block mb-1 text-white/30">RUNTIME</span>
                     <span className="text-white">{asset.time}</span>
                  </div>
                  <div>
                     <span className="block mb-1 text-white/30">ID HASH</span>
                     <span className="text-white">vbh_{asset.id}</span>
                  </div>
               </div>
            </div>

            <div className="flex flex-col justify-end">
               <p className="text-xl md:text-2xl leading-[1.8] text-white/80 uppercase tracking-widest md:text-right">
                  "WE ARE UNCOMPROMISING DOERS AND DREAMERS.
                  <span className="bg-[#00ff00] text-black px-1 font-bold ml-2">MASTERING</span> THE ART OF THE UNSEEN."
               </p>
            </div>
         </section>

         {/* Image/Asset Collage (Using available assets as moodboard elements) */}
         <section className="px-6 md:px-12 pb-32 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {otherAssets.slice(0, 4).map((a, idx) => (
                  <div key={a.id} className={`relative overflow-hidden ${idx === 0 || idx === 3 ? "aspect-square" : "aspect-[3/4]"}`}>
                     {a.image ? (
                        <img src={a.image} className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700" alt="" />
                     ) : null}
                  </div>
               ))}
            </div>
         </section>

         {/* Related / Footer Slider */}
         <div className="mt-auto">
            <RelatedAssetsSlider assets={otherAssets.slice(4)} />
         </div>
      </main>
   );
}
