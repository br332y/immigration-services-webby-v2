import { Play } from "lucide-react";

export default function VideoShowcase() {
  return (
    <section className="py-24 px-5 md:px-12 lg:px-20 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      
      {/* Background imagery texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply z-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <div className="text-center mb-16 lg:mb-20 max-w-3xl px-4 md:px-8 border-l border-r border-[#7BEAFB]/20 py-6 bg-slate-900/40 backdrop-blur-sm rounded-3xl">
          <p className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-[#7BEAFB] mb-4 font-semibold">
            Firm Overview
          </p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl tracking-tight font-serif !leading-tight">
            Immigration strategy that protects your workforce and accelerates international hiring. 
          </h2>
        </div>

        {/* Video Player Mockup Container */}
        <div className="w-full aspect-video rounded-[32px] overflow-hidden relative group cursor-pointer shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] bg-black border border-white/10 ring-1 ring-white/5 mx-auto max-w-5xl">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=2000"
            alt="Firm Overview Video Thumbnail"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] opacity-80"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center drop-shadow-xl transition-transform active:scale-95">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-slate-900 ml-1.5 fill-slate-900" />
              </div>
            </div>
          </div>
          
          {/* Lower controls overlay */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex justify-between items-end pointer-events-none">
             <div className="bg-black/50 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
               <span className="text-white font-mono text-[10px] md:text-xs uppercase tracking-widest font-semibold text-shadow-sm">Meet Our Director</span>
             </div>
             
             <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-sm">
                <span className="text-white font-mono text-[11px] font-medium">04:12</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
