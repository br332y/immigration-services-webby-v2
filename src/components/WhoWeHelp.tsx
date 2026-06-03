import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhoWeHelp() {
  return (
    <section className="bg-transparent py-16 md:py-24 px-4 md:px-8 border-y border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 space-y-4">
          <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-gray-text mb-4 inline-block">
            WHO WE HELP
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-dark font-serif tracking-tight leading-[1.1]">
            Expert guidance for every journey.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Link to="#" className="group bg-white border border-black/10 p-8 rounded-[24px] shadow-sm hover:shadow-lg hover:border-black/20 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative z-10 flex-grow">
              <h3 className="text-xl font-serif text-dark font-bold mb-3">Individuals</h3>
              <p className="text-gray-text text-sm leading-relaxed mb-6">
                Foreign nationals seeking legal status in South Africa.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-widest text-slate-500 group-hover:text-black transition-colors font-semibold mt-auto pt-4 border-t border-black/5">
              <span>Learn more about Individuals</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link to="#" className="group bg-white border border-black/10 p-8 rounded-[24px] shadow-sm hover:shadow-lg hover:border-black/20 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative z-10 flex-grow">
              <h3 className="text-xl font-serif text-dark font-bold mb-3">Families</h3>
              <p className="text-gray-text text-sm leading-relaxed mb-6">
                Spouses, life partners, children, and relatives seeking immigration assistance.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-widest text-slate-500 group-hover:text-black transition-colors font-semibold mt-auto pt-4 border-t border-black/5">
              <span>Learn more about Families</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link to="#" className="group bg-white border border-black/10 p-8 rounded-[24px] shadow-sm hover:shadow-lg hover:border-black/20 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative z-10 flex-grow">
              <h3 className="text-xl font-serif text-dark font-bold mb-3">Professionals</h3>
              <p className="text-gray-text text-sm leading-relaxed mb-6">
                Skilled individuals seeking Critical Skills and General Work Visas.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-widest text-slate-500 group-hover:text-black transition-colors font-semibold mt-auto pt-4 border-t border-black/5">
              <span>Learn more about Professionals</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link to="#" className="group bg-white border border-black/10 p-8 rounded-[24px] shadow-sm hover:shadow-lg hover:border-black/20 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative z-10 flex-grow">
              <h3 className="text-xl font-serif text-dark font-bold mb-3">Employers</h3>
              <p className="text-gray-text text-sm leading-relaxed mb-6">
                Businesses seeking Corporate Visas and foreign talent.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-widest text-slate-500 group-hover:text-black transition-colors font-semibold mt-auto pt-4 border-t border-black/5">
              <span>Learn more about Employers</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
