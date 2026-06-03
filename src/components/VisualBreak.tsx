export default function VisualBreak() {
  return (
    <section className="w-full h-[60vh] md:h-[80vh] min-h-[500px] relative overflow-hidden group">
       <div className="absolute inset-0 bg-slate-900 transform transition-transform duration-1000 group-hover:scale-105">
         <img 
            src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=2500" // Beautiful South African landscape or architecture
            alt="South Africa Landscape"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
         />
       </div>
       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8 md:p-16 lg:p-24">
         <div className="max-w-5xl w-full mx-auto">
           <p className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-[#7BEAFB] mb-6 font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
             Your Gateway to South Africa
           </p>
           <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-8 group-hover:translate-x-2 transition-transform duration-700 !leading-tight">
             Navigating the complexities of <br className="hidden md:block"/>South African Immigration.
           </h2>
           <div className="w-20 h-1 bg-[#7BEAFB] mt-8 group-hover:w-40 transition-all duration-700 delay-300 rounded-full"></div>
         </div>
       </div>
    </section>
  )
}
