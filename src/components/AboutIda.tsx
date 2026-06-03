import { ShieldCheck, Award, MapPin, Users } from "lucide-react";

export default function AboutIda() {
  return (
    <section id="about" className="bg-transparent py-16 md:py-24 px-4 md:px-8 border-y border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Business Bio & Practitioner Context */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <span className="text-dark font-mono text-[10px] uppercase tracking-widest bg-[#e0dcce] px-3 py-1.5 rounded inline-block font-bold">
              MEET THE PRACTITIONER
            </span>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-dark font-serif tracking-tight leading-[1.1]">
              30 years. 5 staff. One focus: getting your visa approved.
            </h2>

            <div className="space-y-5 text-gray-text text-sm md:text-base leading-relaxed antialiased font-normal">
              <p>
                With more than three decades of experience in the South African immigration industry, Henry Oosthuizen has assisted clients through changing immigration regulations, evolving application processes, and complex Home Affairs requirements.
              </p>
              <p>
                His experience spans thousands of immigration applications, making him one of the most experienced practitioners in the industry.
              </p>
              <p>
                Throughout his career, his reputation has been built primarily through client referrals and long-term trust.
              </p>
            </div>

            {/* Minor Bullet badges for rapid recognition */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-black/10">
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full border border-black/10 bg-black/5 text-dark flex items-center justify-center shrink-0 shadow-sm group-hover:bg-black group-hover:text-white transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm text-dark font-serif tracking-tight font-medium">Practising since 1995</h4>
                  <p className="text-gray-text text-xs mt-1">30+ years constant experience</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full border border-black/10 bg-black/5 text-dark flex items-center justify-center shrink-0 shadow-sm group-hover:bg-black group-hover:text-white transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm text-dark font-serif tracking-tight font-medium">Thousands of applications</h4>
                  <p className="text-gray-text text-xs mt-1">Extensive knowledge of procedures</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Portrait Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[400px]">
              
              <div className="relative z-10 bg-white p-4 text-center border border-black/10 shadow-xl overflow-hidden w-full rounded-[24px]">
                <img
                  src="https://raw.githubusercontent.com/br332y/immigration-services-webby-v2/main/ida.png"
                  alt="Ida Oosthuizen Senior Immigration Consultant Portrait"
                  className="w-full h-auto object-cover object-top aspect-[4/5] rounded-[16px] filter grayscale opacity-90 transition-all hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual info card overlay context under image */}
                <div className="pt-6 pb-4 px-3 space-y-2">
                  <h3 className="text-dark font-serif text-2xl tracking-tight">
                    Ida Oosthuizen
                  </h3>
                  <p className="text-gray-text text-[10px] font-mono tracking-widest uppercase">
                    Founder & Principal Practitioner
                  </p>
                  
                  <div className="flex items-center justify-center gap-1.5 text-black/40 text-[10px] font-mono uppercase pt-4 mt-2">
                    <ShieldCheck className="w-3 h-3 text-dark" />
                    <span>FIPSA Member · Est 1995</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
