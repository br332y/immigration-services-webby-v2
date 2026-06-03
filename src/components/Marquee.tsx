import { motion } from "motion/react";

const LOGOS = [
  "Standard Bank", 
  "Investec", 
  "Vodacom", 
  "MTN", 
  "Deloitte", 
  "PwC", 
  "RMB", 
  "Discovery", 
  "Anglo American", 
  "Sasol",
  "Microsoft",
  "Amazon"
];

export default function Marquee() {
  return (
    <div className="w-full bg-transparent py-10 md:py-14 border-b border-black/5 overflow-hidden flex flex-col items-center select-none">
      <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-8 font-semibold px-4 text-center">
        Trusted by 10,000+ immigrants and professionals from leading organizations
      </p>
      
      <div className="relative w-full flex overflow-hidden">
        {/* Fade masks for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex whitespace-nowrap gap-12 md:gap-20 px-6 md:px-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 80, repeat: Infinity }}
        >
          {/* We repeat the array sufficiently to ensure continuous scrolling */}
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default">
              <span className="font-serif text-xl md:text-2xl text-dark font-medium tracking-tight">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
