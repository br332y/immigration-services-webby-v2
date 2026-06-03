import { useEffect, Suspense } from "react";
import { ArrowRight, MoveDown } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="overflow-x-clip transition-[padding-top] duration-300 ease-out" style={{ paddingTop: '96px' }}>
      <div className="-mt-24 pt-24 min-h-[100svh] bg-[#edf4f2] relative flex flex-col 2xl:max-h-[1080px] rounded-b-lg md:rounded-b-[40px] overflow-hidden">
        {/* Image Container (Left Side) - Now positioned relative to full viewport height container */}
        <div className="absolute inset-0 lg:w-[50%] z-0 pointer-events-none opacity-15 lg:opacity-90 flex items-center justify-center lg:justify-start overflow-hidden">
          <div className="w-[150%] sm:w-full h-[150%] lg:h-[130%] origin-center lg:origin-left lg:translate-x-12 2xl:translate-x-24 drop-shadow-xl relative flex items-center justify-center lg:justify-start">
            <img 
              src="https://raw.githubusercontent.com/br332y/immigration-services-webby-v2/main/coa_angled_coloured_improved.svg" 
              alt="South African Coat of Arms" 
              className="w-full h-full object-cover lg:object-contain object-center lg:object-left"
            />
          </div>
        </div>

        <div className="w-full relative z-10 flex-1 flex flex-col">
          <div className="main md:px-12 lg:px-20 mx-auto max-w-[1920px] flex-1 w-full relative z-10 px-5 flex flex-col justify-center pb-16 lg:pb-0">
            <div className="overlay absolute inset-0 z-[1] hidden md:block xl:hidden pointer-events-none">
              <div className="w-full h-full bg-gradient-to-b from-[#EDF4F2]/60 to-transparent">
              </div>
            </div>
              
            {/* Text Container (Right Side) */}
            <div className="flex flex-col flex-none items-start justify-center ml-auto lg:ml-[50%] w-full lg:w-[50%] z-10 relative pt-16 lg:pt-0 pr-0 md:pr-8">
                <p className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-slate-500 mb-4 lg:mb-6 font-semibold">
                  Over 30 Years of Experience in South African Immigration Services.
                </p>
                <h1 className="text-[#111827] text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[60px] !leading-[1.1] tracking-[-0.03em] mb-6 font-serif max-w-2xl">
                  Professional Immigration Guidance You Can Trust
                </h1>

                <div className="w-full border-t border-black/10 mb-6 max-w-2xl"></div>

                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-12 w-full z-10 max-w-2xl mb-8">
                  <p className="text-sm sm:text-base font-medium text-slate-500 leading-relaxed max-w-lg">
                    From visas and work permits to permanent residence applications, we provide professional support throughout every stage of the immigration process.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 z-10 w-full max-w-2xl">
                  <Link to="/contact" className="w-full sm:w-auto flex items-center justify-between font-medium transition-transform active:scale-95 bg-black p-1 pl-6 rounded-[16px] text-white font-mono text-[11px] md:text-xs uppercase tracking-widest min-w-[260px] h-14 group/cta border-2 border-black max-w-fit overflow-hidden relative">
                    <span className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/cta:scale-x-100 bg-[#7BEAFB]"></span>
                    <span className="relative z-10 truncate mr-4 text-center sm:text-left flex-1 transition-colors duration-500 group-hover/cta:text-black">Book a Consultation</span>
                    <span className="relative z-10 flex items-center justify-center bg-[#7BEAFB] text-black w-12 h-full rounded-[10px] shrink-0 transition-transform group-hover/cta:translate-x-0.5">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>

              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
