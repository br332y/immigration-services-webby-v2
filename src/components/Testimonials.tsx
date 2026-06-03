import { Quote, Star, ArrowRight } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-transparent py-16 md:py-24 px-4 md:px-8 border-y border-black/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block Display */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-gray-text font-mono text-[10px] uppercase tracking-widest bg-black/5 px-3 py-1.5 rounded inline-block">
            What Our Clients Say
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-dark font-serif tracking-tight leading-[1.1]">
            Trusted by clients across South Africa.
          </h2>
          <p className="text-gray-text text-sm md:text-base antialiased max-w-lg mx-auto">
            Our reputation has been built through years of client referrals and successful professional relationships. Read what past clients have shared about their experience working with our team.
          </p>
        </div>

        {/* 3 Testimonial Cards Layout - Scrollable */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 pb-8 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="w-[85vw] sm:w-[350px] shrink-0 snap-center bg-white border border-black/10 p-8 md:p-10 rounded-[20px] relative flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group/card"
            >
              <div className="space-y-4 relative">
                {/* Floating quote badge */}
                <div className="absolute -top-4 -left-2 z-0 opacity-10 group-hover/card:opacity-20 transition-all">
                  <Quote className="w-10 h-10 transform scale-x-[-1] fill-current" />
                </div>

                {/* 5 Star Graphic Rating */}
                <div className="flex gap-1 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0 opacity-90 group-hover/card:opacity-100 transition-opacity" />
                  ))}
                </div>

                {/* Actual quote paragraph */}
                <p className="text-gray-text text-sm italic leading-relaxed pt-2 antialiased relative z-10 font-serif">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Metadata Frame */}
              <div className="border-t border-black/5 pt-4 mt-8">
                <h4 className="text-dark font-serif font-bold text-sm tracking-tight">
                  {t.author}
                </h4>
                <div className="flex justify-between items-center text-[10px] text-gray-text mt-2 font-mono uppercase tracking-widest">
                  <span>{t.visaType}</span>
                  <span>{t.date}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Aggregate Ratings Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 bg-white border border-black/10 py-5 px-8 rounded-[20px] max-w-xl mx-auto text-center sm:text-left shadow-sm">
          {/* Simulated Google Logo Icon */}
          <div className="flex items-center gap-2 font-bold font-sans text-xl text-dark">
            <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="font-serif">Google</span>
          </div>
          
          <div className="h-6 w-[1px] bg-black/10 hidden sm:block" />

          {/* Aggregated stars count info precisely answering guideline */}
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-dark font-bold font-mono text-sm tracking-widest">4.5 Rating</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 shrink-0 ${i === 4 ? 'fill-transparent text-amber-400 stroke-[1.5px]' : 'fill-amber-400 text-amber-400 opacity-90'}`} />
                ))}
              </div>
            </div>
            <p className="text-gray-text text-[10px] font-mono tracking-widest uppercase mt-1">
              76+ reviews on Google
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
