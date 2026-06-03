import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-slate-900 border-y border-slate-800 text-white relative overflow-hidden py-16 md:py-24 px-4 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/30 via-slate-900 to-slate-900 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-[#7BEAFB] mb-6 inline-block font-semibold">
            CONTACT
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-white">
            Get in touch with us.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
            <MapPin className="w-8 h-8 text-[#7BEAFB] mb-2" />
            <h3 className="font-serif text-xl">Office</h3>
            <p className="text-sm text-slate-300">
              Suite 1, La Piazza<br/>
              51 Voortrekker Avenue<br/>
              Edenvale, 1609
            </p>
          </div>
          
          <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
            <Clock className="w-8 h-8 text-[#7BEAFB] mb-2" />
            <h3 className="font-serif text-xl">Office Hours</h3>
            <p className="text-sm text-slate-300">
              Monday to Friday<br/>
              09:00 – 16:00
            </p>
          </div>

          <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
            <Phone className="w-8 h-8 text-[#7BEAFB] mb-2" />
            <h3 className="font-serif text-xl">New Client Enquiries</h3>
            <p className="text-sm text-slate-300">
              082 449 7141
            </p>
          </div>

          <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
            <Phone className="w-8 h-8 text-[#7BEAFB] mb-2" />
            <h3 className="font-serif text-xl">Application Follow-Ups</h3>
            <p className="text-sm text-slate-300">
              082 213 2329
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#7BEAFB] hover:bg-[#5EDCF0] text-black transition-colors px-8 py-4 rounded-[12px] font-mono text-[10px] md:text-xs tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer shadow-sm font-semibold"
          >
            Get Directions
          </a>
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-white/10 border border-white/20 hover:bg-white/20 text-white transition-colors px-8 py-4 rounded-[12px] font-mono text-[10px] md:text-xs tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            Contact Us <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
}
