import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Briefcase, 
  Building, 
  Users, 
  Handshake, 
  Sunset, 
  BookOpen, 
  Home, 
  ArrowRight, 
  X, 
  Check, 
  AlertCircle,
  FileText
} from "lucide-react";
import { SERVICES_DATA, POINTS_SYSTEM_TABLE } from "../data";
import { VisaService } from "../types";

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<VisaService | null>(null);
  const [pointsTotal, setPointsTotal] = useState<number>(0);
  const [checkedPoints, setCheckedPoints] = useState<Record<number, boolean>>({});

  const [[page, direction], setPage] = useState([0, 0]);
  const activeIndex = (page % SERVICES_DATA.length + SERVICES_DATA.length) % SERVICES_DATA.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handlePointsChange = (index: number, points: number) => {
    const isChecked = !checkedPoints[index];
    setCheckedPoints({
      ...checkedPoints,
      [index]: isChecked
    });
    setPointsTotal(prev => isChecked ? prev + points : prev - points);
  };

  const mapIcon = (iconName: string) => {
    const iconProps = { className: "w-7 h-7 stroke-current", strokeWidth: 1.25 };
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap {...iconProps} />;
      case "Briefcase":
        return <Briefcase {...iconProps} />;
      case "Building":
        return <Building {...iconProps} />;
      case "Users":
        return <Users {...iconProps} />;
      case "Handshake":
        return <Handshake {...iconProps} />;
      case "Sunset":
        return <Sunset {...iconProps} />;
      case "BookOpen":
        return <BookOpen {...iconProps} />;
      case "Home":
        return <Home {...iconProps} />;
      default:
        return <FileText {...iconProps} />;
    }
  };

  const handleOpenModal = (service: VisaService) => {
    setSelectedService(service);
    // Reset points calculator state
    setPointsTotal(0);
    setCheckedPoints({});
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="bg-transparent py-16 md:py-24 px-4 md:px-8 border-y border-black/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading & Sub-heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-gray-text mb-6">
            Professional Visa Management
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-dark font-serif tracking-tight leading-[1.1]">
            Everything you need to live, work, or do business in South Africa.
          </h2>
        </div>

        {/* Booklet Carousel Wrapper */}
        <div className="relative w-full max-w-5xl mx-auto h-[380px] sm:h-[350px] mb-12 group perspective-[1200px]">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  x: dir > 0 ? 200 : -200,
                  opacity: 0,
                  rotateY: dir > 0 ? 25 : -25,
                  scale: 0.95,
                  transformOrigin: "center"
                }),
                center: {
                  zIndex: 1,
                  x: 0,
                  opacity: 1,
                  rotateY: 0,
                  scale: 1,
                },
                exit: (dir: number) => ({
                  zIndex: 0,
                  x: dir < 0 ? 200 : -200,
                  opacity: 0,
                  rotateY: dir < 0 ? 25 : -25,
                  scale: 0.95,
                  transformOrigin: "center"
                })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 350, damping: 35 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.4, ease: "easeOut" }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(e, { offset, velocity }) => {
                const swipePower = Math.abs(offset.x) * velocity.x;
                if (swipePower < -5000 || offset.x < -100) {
                  paginate(1);
                } else if (swipePower > 5000 || offset.x > 100) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 flex items-center justify-center py-4 px-2 sm:px-8 cursor-grab active:cursor-grabbing w-full"
            >
              <div
                className="w-full h-full bg-white border border-black/5 p-6 md:p-10 rounded-2xl flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow group/card"
              >
                <div className="space-y-6">
                  {/* Accent Icon & Legal Section tag */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-white border border-black/5 shadow-sm transition-all duration-500 rounded-[14px] flex items-center justify-center group-hover/card:border-black/10 group-hover/card:shadow-md relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f8f8] to-[#ffffff]"></div>
                      <div className="relative z-10 transition-transform duration-500 group-hover/card:scale-110 text-black">
                        {mapIcon(SERVICES_DATA[activeIndex].iconName)}
                      </div>
                    </div>
                    <span className="text-gray-text font-mono text-[10px] tracking-widest uppercase bg-black/5 px-3 py-1 rounded">
                      {SERVICES_DATA[activeIndex].section}
                    </span>
                  </div>

                  {/* Card description text */}
                  <div className="space-y-3">
                    <h3 className="text-dark font-serif text-2xl md:text-3xl font-bold tracking-tight">
                      {SERVICES_DATA[activeIndex].title}
                    </h3>
                    <p className="text-gray-text text-sm md:text-base leading-relaxed antialiased max-w-3xl">
                      {SERVICES_DATA[activeIndex].description}
                    </p>
                  </div>
                </div>

                {/* Multi-trigger learn link */}
                <button
                  onClick={() => handleOpenModal(SERVICES_DATA[activeIndex])}
                  className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-dark hover:text-[#7BEAFB] transition-colors pt-6 w-fit group-hover/card:text-[#7BEAFB]"
                >
                  Learn credentials & details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Controls */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 md:-ml-6 w-10 h-10 md:w-12 md:h-12 bg-white text-dark border-2 border-transparent hover:border-black rounded-full flex items-center justify-center z-10 shadow-lg hover:shadow-xl transition-all"
            onClick={() => paginate(-1)}
            aria-label="Previous service"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 md:-mr-6 w-10 h-10 md:w-12 md:h-12 bg-white text-dark border-2 border-transparent hover:border-black rounded-full flex items-center justify-center z-10 shadow-lg hover:shadow-xl transition-all"
            onClick={() => paginate(1)}
            aria-label="Next service"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
          
          {/* Pagination Indicators */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
            {SERVICES_DATA.map((_, i) => (
               <button
                 key={i}
                 onClick={() => {
                   setPage([i, i > activeIndex ? 1 : -1]);
                 }}
                 className={`w-1.5 h-1.5 rounded-full transition-all ${
                   i === activeIndex ? "bg-dark w-4" : "bg-black/20 hover:bg-black/40"
                 }`}
                 aria-label={`Go to slide ${i + 1}`}
               />
            ))}
          </div>
        </div>

        {/* Highlighted bottom note */}
        <div className="bg-transparent border border-black/10 p-5 rounded-2xl text-center mt-12 max-w-4xl mx-auto">
          <p className="text-gray-text text-xs md:text-sm antialiased leading-relaxed font-medium flex flex-col md:block items-center">
            <span className="text-dark font-mono uppercase tracking-widest text-[10px] md:mr-2 mb-3 md:mb-0 bg-black/5 px-2 py-1 rounded inline-block">
              Additional Services
            </span>
            <span className="inline-block md:inline">
              We also assist with Visitor / Holiday Visas (Section 11.1), Short-term Work (11.2), Medical Visas (Section 17), and Relative Visas (Section 18). Contact us if your situation isn't listed.
            </span>
          </p>
        </div>

      </div>

      {/* Interactive Modal Slider & Requirement Visualizer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          {/* Modal overlay */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity cursor-pointer"
            onClick={handleCloseModal}
          />

          {/* Modal card wrapper */}
          <div className="relative bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl border border-black/10 z-10 animate-scale-up max-h-[90vh] flex flex-col">
            
            {/* Modal header with business accent bar */}
            <div className="bg-dark text-white p-6 relative shrink-0">
              <div className="flex items-center justify-between pr-8">
                <div className="space-y-1">
                  <span className="text-gray-400 font-mono text-[10px] tracking-widest uppercase text-white/60">
                    Department of Home Affairs Code: {selectedService.section}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif tracking-tight">
                    {selectedService.title} Details
                  </h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="absolute top-5 right-5 text-white/50 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1">
              
              {/* Detailed description paragraph */}
              <div className="space-y-2">
                <h4 className="text-dark font-mono uppercase tracking-widest text-[10px] border-b border-black/5 pb-2">
                  Legislation & Strategy Overview
                </h4>
                <p className="text-gray-text text-sm md:text-base leading-relaxed antialiased">
                  {selectedService.longDescription}
                </p>
              </div>

              {/* POINTS SYSTEM WIDGET (Exclusive tool for General Work Visa matching Slide 7) */}
              {selectedService.pointsSystemApplicable && (
                <div className="bg-green-light border border-black/10 p-5 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-dark shrink-0" />
                    <h5 className="text-dark font-serif text-sm md:text-base tracking-tight">
                      Interactive Points System Evaluator (Section 19 Work Visa)
                    </h5>
                  </div>
                  <p className="text-xs text-gray-text leading-relaxed">
                    To qualify for a Critical/General Work Visa under South Africa's Points-Based System, you must achieve a minimum of <strong>100 points</strong>. Try selecting your eligible categories below to compute your point tally:
                  </p>
                  
                  {/* Table & Checklist */}
                  <div className="border border-black/10 rounded-xl overflow-hidden bg-white shadow-sm">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-white text-gray-text font-mono uppercase text-[10px] border-b border-black/10">
                        <tr>
                          <th className="p-3">Select</th>
                          <th className="p-3">Criteria Type</th>
                          <th className="p-3">Requirement Detail</th>
                          <th className="p-3 text-right">Points</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/5">
                        {POINTS_SYSTEM_TABLE.map((item, idx) => (
                          <tr key={idx} className="hover:bg-white transition-colors">
                            <td className="p-3">
                              <label className="relative flex items-center justify-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="w-4 h-4 rounded text-black accent-black"
                                  checked={!!checkedPoints[idx]}
                                  onChange={() => handlePointsChange(idx, item.points)}
                                />
                              </label>
                            </td>
                            <td className="p-3 font-medium text-dark">{item.criteria}</td>
                            <td className="p-3 text-gray-text">{item.detail}</td>
                            <td className="p-3 text-right font-mono text-dark">+{item.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Calculated Points result box */}
                  <div className="flex items-center justify-between bg-dark text-white rounded-xl p-4 shadow-inner border border-[#7BEAFB]/20">
                    <div className="space-y-1">
                      <p className="text-[10px] text-white/60 font-mono tracking-widest uppercase">Your Point Estimate</p>
                      <p className="text-xl font-serif">
                        {pointsTotal} Points <span className="text-white/40 font-mono text-xs">/ 100 needed</span>
                      </p>
                    </div>
                    <div>
                      {pointsTotal >= 100 ? (
                        <span className="bg-whitemerald-500/20 text-emerald-300 px-3 py-1 text-[10px] font-mono tracking-widest uppercase rounded-lg flex items-center gap-1">
                          ✓ Threshold Achieved
                        </span>
                      ) : (
                        <span className="bg-amber-500/20 text-amber-300 px-3 py-1 text-[10px] font-mono tracking-widest uppercase rounded-lg flex items-center gap-1">
                          Needs 100
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Required Documentation Checklist Grid */}
              <div className="space-y-3">
                <h4 className="text-dark font-mono uppercase tracking-widest text-[10px] border-b border-black/5 pb-2 flex items-center gap-2">
                  <FileText className="w-4.5 h-4.5 text-dark shrink-0" />
                  Official Required Document Checklist (VFS Submission Gate):
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {selectedService.requirements.map((req, i) => (
                    <li key={i} className="flex gap-2.5 items-start text-xs text-gray-text bg-white p-2.5 rounded border border-black/5">
                      <Check className="w-3.5 h-3.5 text-dark shrink-0 mt-0.5" />
                      <span className="leading-tight antialiased">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer Call-to-Action */}
            <div className="bg-white px-6 py-4 border-t border-black/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shrink-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-text antialiased">
                Verify this list with expert guidance.
              </span>
              <Link
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-between font-medium transition-transform active:scale-95 bg-black p-1 pl-5 rounded-[12px] text-white font-mono text-[10px] md:text-[11px] uppercase tracking-widest min-w-[200px] h-12 group/cta border-2 border-black overflow-hidden relative"
              >
                <span className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/cta:scale-x-100 bg-[#7BEAFB]"></span>
                <span className="relative z-10 truncate mr-3 text-center sm:text-left flex-1 transition-colors duration-500 group-hover/cta:text-black">Start Assessment</span>
                <span className="relative z-10 flex items-center justify-center bg-[#7BEAFB] text-black w-10 h-full rounded-[8px] shrink-0 transition-transform group-hover/cta:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
