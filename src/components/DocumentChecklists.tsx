export default function DocumentChecklists() {
  return (
    <section className="bg-transparent py-16 md:py-24 px-4 md:px-8 border-y border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-gray-text mb-6">
            DOCUMENT CHECKLISTS
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-dark font-serif tracking-tight leading-[1.1]">
            Common requirements for key applications.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          <div className="group bg-white border border-black/10 p-8 rounded-[24px] shadow-sm hover:shadow-lg hover:border-black/20 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-serif text-dark font-bold mb-4 group-hover:text-black transition-colors">Critical Skills Work Visa</h3>
              <p className="text-sm text-gray-text mb-6">Common requirements include:</p>
              <ul className="space-y-3 text-sm text-slate-600 font-medium">
                <li className="flex items-start gap-3"><span className="text-black/30 text-xs mt-0.5">01</span>Passport & Birth Certificate</li>
                <li className="flex items-start gap-3"><span className="text-black/30 text-xs mt-0.5">02</span>SAQA Evaluation</li>
                <li className="flex items-start gap-3"><span className="text-black/30 text-xs mt-0.5">03</span>Police Clearance</li>
                <li className="flex items-start gap-3"><span className="text-black/30 text-xs mt-0.5">04</span>Medical Reports</li>
                <li className="flex items-start gap-3"><span className="text-black/30 text-xs mt-0.5">05</span>Qualifications</li>
                <li className="flex items-start gap-3"><span className="text-black/30 text-xs mt-0.5">06</span>Employment Offer</li>
                <li className="flex items-start gap-3"><span className="text-black/30 text-xs mt-0.5">07</span>CV & Proof of Experience</li>
              </ul>
            </div>
          </div>

          <div className="group bg-white border border-black/10 p-8 rounded-[24px] shadow-sm hover:shadow-lg hover:border-black/20 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-serif text-dark font-bold mb-4 group-hover:text-black transition-colors">General Work Visa</h3>
              <p className="text-sm text-gray-text mb-6">Common requirements include:</p>
              <ul className="space-y-3 text-sm text-slate-600 font-medium">
                <li className="flex items-start gap-3"><span className="text-black/30 text-xs mt-0.5">01</span>Passport & Birth Certificate</li>
                <li className="flex items-start gap-3"><span className="text-black/30 text-xs mt-0.5">02</span>Police Clearance</li>
                <li className="flex items-start gap-3"><span className="text-black/30 text-xs mt-0.5">03</span>Qualifications</li>
                <li className="flex items-start gap-3"><span className="text-black/30 text-xs mt-0.5">04</span>SAQA Evaluation</li>
                <li className="flex items-start gap-3"><span className="text-black/30 text-xs mt-0.5">05</span>Employment Contract</li>
                <li className="flex items-start gap-3"><span className="text-black/30 text-xs mt-0.5">06</span>Registration With Council</li>
              </ul>
            </div>
          </div>

          <div className="group bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/30 via-slate-900 to-slate-900 text-white border border-black/10 p-8 rounded-[24px] shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col h-full">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-xl font-serif text-white font-bold mb-4">Permanent Residence</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Requirements vary heavily depending on the specific application category and individual circumstances. 
              </p>
              <div className="mt-auto pt-6 border-t border-white/10">
                <p className="text-sm text-white/90 font-medium pb-2">Consultations are highly recommended before preparation begins.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
