import { Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="bg-transparent py-16 md:py-24 px-4 md:px-8 relative overflow-hidden border-y border-black/5">

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        {/* Sub-label flag */}
        <span className="text-gray-text font-mono text-[10px] uppercase tracking-widest bg-black/5 px-3 py-1.5 rounded inline-block">
          Take the first step today
        </span>

        {/* Descriptive Headings */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-dark font-serif tracking-tight leading-[1.1]">
            Ready to Discuss Your Immigration Matter?
          </h2>
          <p className="text-gray-text text-sm md:text-base leading-relaxed antialiased max-w-lg mx-auto">
            Speak with an experienced immigration practitioner and receive professional guidance tailored to your situation.
          </p>
        </div>

        {/* Double Primary Target Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-8">
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-between font-medium transition-transform active:scale-95 bg-black p-1 pl-6 rounded-[16px] text-white font-mono text-[11px] md:text-xs uppercase tracking-widest min-w-[260px] h-14 group/cta border-2 border-black overflow-hidden relative"
          >
            <span className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/cta:scale-x-100 bg-[#7BEAFB]"></span>
            <span className="relative z-10 truncate mr-4 flex-1 text-center sm:text-left transition-colors duration-500 group-hover/cta:text-black">Schedule a Call</span>
            <span className="relative z-10 flex items-center justify-center bg-[#7BEAFB] text-black w-12 h-full rounded-[10px] shrink-0 transition-transform group-hover/cta:translate-x-0.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </span>
          </Link>
          
          <a
            href="https://wa.me/27824497141"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white border border-black/10 text-dark px-8 py-4 rounded-[12px] font-mono text-[10px] md:text-xs tracking-widest uppercase hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            {/* Custom SVG icon for WhatsApp */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.714-1.458L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.8 1.45 5.5 0 10-4.5 10-10C21.4 5.3 17 .9 11.6.9c-5.4 0-9.8 4.4-9.8 9.9-.001 1.8.5 3.5 1.4 5l-.9 3.4 3.5-.9zM17.5 14.9c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.1-.1.2-.3.2-.6.1-.3-.1-1.4-.5-2.6-1.6-1-1-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5-.1-.3-.7-1.7-1-2.4-.3-.7-.6-.6-.7-.6l-.6-.1c-.2 0-.5.1-.7.3-.8.7-1.1 1.8-1.1 2.8 0 1.9 1.4 3.7 1.6 3.9.2.3 2.7 4.1 6.5 5.8.9.4 1.6.6 2.2.8.9.3 1.8.3 2.5.2.8-.1 2.4-1 2.7-2 .3-1 .3-1.9.2-2-.1-.2-.4-.3-.7-.4z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Clear direct verbal alternative line precisely as specified */}
        <div className="pt-8 border-t border-black/5 max-w-sm mx-auto mt-12">
          <p className="text-gray-text text-xs sm:text-sm font-sans flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Or call us directly at: <a href="tel:0824497141" className="text-dark hover:text-black font-mono font-medium transition-colors">082 449 7141</a>
          </p>
        </div>

      </div>
    </section>
  );
}
