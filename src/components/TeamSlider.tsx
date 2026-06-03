import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TEAM_MEMBERS = [
  {
    id: 0,
    name: "Ida Oosthuizen",
    title: "Founder & Senior Immigration Practitioner",
    quote: "With over 30 years of immigration experience, Ida personally evaluates every case to ensure the highest possible chance of success. We don't automate your situation.",
    image: "https://raw.githubusercontent.com/br332y/immigration-services-webby-v2/main/ida.png"
  },
  {
    id: 1,
    name: "John Maswanganyi",
    title: "Submission Specialist",
    quote: "With 21 years at the firm, John is responsible for VFS submissions and personal client accompaniment, ensuring navigate in-person processes smoothly.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Promise Sehlare",
    title: "Application Tracking Specialist",
    quote: "With 19 years at the firm, Promise closely monitors application outcomes and ensures our clients are always updated on their status.",
    image: "https://images.unsplash.com/photo-1623184663110-89ca32fb01b4?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Maryka Jacobs",
    title: "Administration & Application Processing",
    quote: "Responsible for application capturing and administration. Meticulous preparation of your submission file is what makes the difference.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop"
  }
];

export default function TeamSlider() {
  const [activeIndex, setActiveIndex] = useState(0); // Start with Ida
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length);
  };

  // Responsive dimensions
  const activeWidth = isMobile ? '75vw' : 282;
  const activeHeight = isMobile ? '95vw' : 360;
  const inactiveWidth = isMobile ? '35vw' : 180;
  const inactiveHeight = isMobile ? '45vw' : 230;

  return (
    <section className="relative overflow-hidden bg-green-light py-16 md:py-24 lg:py-32 w-full border-y border-black/5">

      <div className="relative z-10 w-full">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-16 md:mb-24 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="flex flex-col text-dark tracking-tight">
            <span className="font-serif text-3xl md:text-5xl lg:text-6xl mb-1 leading-[1.1]">Our immigration team</span>
            <span className="font-mono text-gray-text text-sm uppercase tracking-widest mt-4">Working directly on your case</span>
          </h2>
        </div>

        {/* Carousel & Info Section */}
        <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-20 max-w-[1400px] mx-auto overflow-visible relative">
          
          {/* Left: Images Slider */}
          <div className="w-full lg:w-[60%] flex gap-3 md:gap-6 items-end px-4 md:px-8 relative min-h-[340px] md:min-h-[380px] overflow-hidden lg:overflow-visible">
            {TEAM_MEMBERS.map((member, index) => {
              // Calculate distance from active
              let diff = index - activeIndex;
              if (diff < 0) diff += TEAM_MEMBERS.length;

              const isActive = diff === 0;
              const isVisible = diff < 3; // Show active and 2 next on right

              if (!isVisible) return null;

              return (
                <motion.div
                  key={member.id}
                  layout
                  className={`shrink-0 relative overflow-hidden flex-none ${!isActive ? 'grayscale opacity-60 mix-blend-multiply hidden sm:block' : ''}`}
                  initial={false}
                  animate={{
                    width: isActive ? activeWidth : inactiveWidth,
                    height: isActive ? activeHeight : inactiveHeight,
                    opacity: isActive ? 1 : 0.6,
                    x: 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  style={{
                    borderRadius: "20px",
                    boxShadow: isActive ? "0 20px 40px -10px rgba(0,0,0,0.15)" : "none",
                    order: diff,
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Right: Info Box */}
          <div className="w-full lg:w-[40%] flex flex-col justify-end px-4 md:px-8 pb-4 relative z-20">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-md space-y-6"
            >
              <div>
                <h3 className="font-serif tracking-tight font-bold text-dark text-2xl">{TEAM_MEMBERS[activeIndex].name}</h3>
                <p className="text-gray-text text-xs uppercase font-mono tracking-widest mt-2">{TEAM_MEMBERS[activeIndex].title}</p>
              </div>

              <div className="flex gap-4 items-start pt-4 border-t border-black/5">
                <p className="text-dark font-serif italic text-lg leading-relaxed antialiased">
                  "{TEAM_MEMBERS[activeIndex].quote}"
                </p>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-8 md:mt-12">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-dark hover:bg-black hover:text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center text-dark hover:bg-black hover:text-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
