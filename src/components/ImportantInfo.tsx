export default function ImportantInfo() {
  return (
    <section className="bg-green-light py-16 md:py-24 px-4 md:px-8 border-y border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-gray-text mb-6 inline-block">
            IMPORTANT INFORMATION
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-dark font-serif tracking-tight leading-[1.1]">
            Things you need to know.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          <div className="group bg-white border border-black/10 p-8 rounded-[24px] shadow-sm hover:shadow-lg hover:border-black/20 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-xl font-serif text-dark font-bold mb-4 group-hover:text-black transition-colors">No Approval Can Be Guaranteed</h3>
              <p className="text-sm text-gray-text leading-relaxed">
                All immigration decisions are made by the Department of Home Affairs.
              </p>
              <div className="mt-auto pt-6 border-t border-black/5">
                <p className="text-sm text-slate-800 font-medium">No immigration practitioner can legally guarantee an approval outcome.</p>
              </div>
            </div>
          </div>

          <div className="group bg-[#fff5f5] border border-red-500/10 hover:border-red-500/20 p-8 rounded-[24px] shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col h-full">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff000008_1px,transparent_1px),linear-gradient(to_bottom,#ff000008_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-serif text-red-950 font-bold mb-4">Beware Of False Promises</h3>
              <p className="text-sm text-red-900/70 mb-6">Avoid service providers who advertise:</p>
              <ul className="space-y-3 text-sm text-red-900 font-medium">
                <li className="flex items-center gap-3"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-500 text-xs font-bold leading-none select-none">✕</span> Guaranteed Approvals</li>
                <li className="flex items-center gap-3"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-500 text-xs font-bold leading-none select-none">✕</span> Instant Approvals</li>
                <li className="flex items-center gap-3"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-500 text-xs font-bold leading-none select-none">✕</span> Fast-Tracked Visas</li>
                <li className="flex items-center gap-3"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-500 text-xs font-bold leading-none select-none">✕</span> Secret Methods</li>
              </ul>
            </div>
          </div>

          <div className="group bg-white border border-black/10 p-8 rounded-[24px] shadow-sm hover:shadow-lg hover:border-black/20 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-xl font-serif text-dark font-bold mb-4 group-hover:text-black transition-colors">Why Experience Matters</h3>
              <p className="text-sm text-gray-text leading-relaxed">
                Immigration laws change regularly.
              </p>
              <div className="mt-auto pt-6 border-t border-black/5">
                <p className="text-sm text-slate-800 font-medium">Having experienced practitioners review and prepare applications helps minimise avoidable mistakes and delays.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
