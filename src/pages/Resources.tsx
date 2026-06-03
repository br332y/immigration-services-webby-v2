import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GridPattern } from "../components/ui/grid-pattern";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { 
  FileText, 
  ArrowRight, 
  BookOpen, 
  AlertCircle,
  Download,
  Newspaper,
  Calendar,
  CheckCircle2,
  Clock,
  Shield,
  Search,
  ChevronRight
} from "lucide-react";

export default function Resources() {
  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-x-hidden antialiased selection:bg-gold-500 selection:text-navy-950">
      
      {/* Background Grid Pattern */}
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]",
          "fixed inset-0 z-0 opacity-60",
        )}
      />

      <Navbar />

      <main className="pt-32 md:pt-40 pb-20 relative z-10 w-full max-w-[1920px] mx-auto">
        {/* Header Section */}
        <section className="px-5 md:px-12 lg:px-20 mb-20 lg:mb-32">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <p className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-slate-500 mb-6 font-semibold">
              Resources Centre
            </p>
            <h1 className="text-[#111827] text-4xl md:text-6xl lg:text-7xl !leading-[1.1] tracking-[-0.03em] mb-8 font-serif">
              Trusted Immigration Guidance <br className="hidden md:block" />
              & Practical Information
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mb-10">
              Access guides and resources designed to help you better understand South African immigration processes, requirements, and common challenges. Whether you're exploring your options or preparing an application, these resources will help you make informed decisions.
            </p>
            
            {/* Search Bar matching design style */}
            <div className="w-full max-w-lg relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-black transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search guides, checklists, and articles..." 
                className="w-full bg-white border-2 border-slate-200 text-black placeholder:text-slate-400 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-black transition-colors shadow-sm text-sm"
              />
            </div>
          </div>
        </section>

        {/* Featured Resources Section */}
        <section className="px-5 md:px-12 lg:px-20 mb-24 lg:mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif text-[#111827] tracking-tight mb-4">Featured Resources</h2>
                <div className="w-16 h-1 bg-black"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Featured Card 1 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#edf4f2] rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500"></div>
                <div className="bg-[#edf4f2] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <CheckCircle2 className="w-6 h-6 text-slate-800" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-4 relative z-10">Immigration Consultation Checklist</h3>
                <p className="text-sm text-slate-500 mb-8 flex-grow relative z-10 leading-relaxed">
                  Everything you should prepare before meeting with an immigration practitioner.
                </p>
                <Link to="#" className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-widest text-[#111827] group-hover:text-blue-600 transition-colors relative z-10 w-fit">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Featured Card 2 */}
              <div className="bg-slate-900 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow group flex flex-col h-full relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500"></div>
                <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10 backdrop-blur-sm">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-white mb-4 relative z-10">Understanding the Immigration Process</h3>
                <p className="text-sm text-slate-300 mb-8 flex-grow relative z-10 leading-relaxed">
                  A step-by-step overview of what happens from consultation through to application outcome.
                </p>
                <Link to="#" className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-widest text-white group-hover:text-blue-300 transition-colors relative z-10 w-fit">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Featured Card 3 */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full relative overflow-hidden">
                <div className="bg-[#edf4f2] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <Clock className="w-6 h-6 text-slate-800" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-4 relative z-10">Common Reasons Applications Are Delayed</h3>
                <p className="text-sm text-slate-500 mb-8 flex-grow relative z-10 leading-relaxed">
                  Learn about common factors that may affect processing times and how to avoid preventable delays.
                </p>
                <Link to="#" className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-widest text-[#111827] group-hover:text-blue-600 transition-colors relative z-10 w-fit">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Immigration Guides - Bento Grid Style */}
        <section className="px-5 md:px-12 lg:px-20 mb-24 lg:mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 lg:mb-16">
              <p className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-slate-500 mb-4">KNOWLEDGE BASE</p>
              <h2 className="text-3xl md:text-5xl font-serif text-[#111827] tracking-tight">Immigration Guides</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Category 1: Before You Apply */}
              <div className="col-span-1 flex flex-col gap-6">
                <div className="bg-[#edf4f2] rounded-2xl p-6 lg:p-8">
                  <h3 className="font-mono text-sm tracking-widest uppercase font-semibold text-slate-800 mb-6 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-[10px]">1</span>
                    Before You Apply
                  </h3>
                  <div className="space-y-4">
                    <Link to="#" className="block group">
                      <h4 className="font-serif text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex justify-between items-center">
                        Do I Need a Valid Visa?
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                      </h4>
                      <p className="text-sm text-slate-500 line-clamp-2">Learn when a valid visa is required and why your current immigration status matters.</p>
                    </Link>
                    <div className="w-full h-px bg-black/5"></div>
                    <Link to="#" className="block group">
                      <h4 className="font-serif text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex justify-between items-center">
                        Can I Apply From Inside SA?
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                      </h4>
                      <p className="text-sm text-slate-500 line-clamp-2">Understand when applications can be submitted locally and when country-of-origin requirements apply.</p>
                    </Link>
                    <div className="w-full h-px bg-black/5"></div>
                    <Link to="#" className="block group">
                      <h4 className="font-serif text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex justify-between items-center">
                        Preparing for Consultation
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                      </h4>
                      <p className="text-sm text-slate-500 line-clamp-2">A complete checklist of documents and information to bring to your consultation.</p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Category 2: During Process */}
              <div className="col-span-1 flex flex-col gap-6">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8">
                  <h3 className="font-mono text-sm tracking-widest uppercase font-semibold text-slate-800 mb-6 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-[10px]">2</span>
                    During the Process
                  </h3>
                  <div className="space-y-4">
                    <Link to="#" className="block group">
                      <h4 className="font-serif text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex justify-between items-center">
                        Understanding VFS
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                      </h4>
                      <p className="text-sm text-slate-500 line-clamp-2">What happens during submission appointments and what you should expect.</p>
                    </Link>
                    <div className="w-full h-px bg-black/5"></div>
                    <Link to="#" className="block group">
                      <h4 className="font-serif text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex justify-between items-center">
                        How Apps Are Processed
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                      </h4>
                      <p className="text-sm text-slate-500 line-clamp-2">An overview of the stages involved after an application is submitted.</p>
                    </Link>
                    <div className="w-full h-px bg-black/5"></div>
                    <Link to="#" className="block group">
                      <h4 className="font-serif text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex justify-between items-center">
                        Processing Timelines
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                      </h4>
                      <p className="text-sm text-slate-500 line-clamp-2">Why application timelines vary and what factors influence waiting periods.</p>
                    </Link>
                  </div>
                </div>
              </div>

               {/* Category 3: After Submission */}
               <div className="col-span-1 flex flex-col gap-6">
                <div className="bg-[#edf4f2] rounded-2xl p-6 lg:p-8">
                  <h3 className="font-mono text-sm tracking-widest uppercase font-semibold text-slate-800 mb-6 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-[10px]">3</span>
                    After Submission
                  </h3>
                  <div className="space-y-4">
                    <Link to="#" className="block group">
                      <h4 className="font-serif text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex justify-between items-center">
                        Tracking Your Application
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                      </h4>
                      <p className="text-sm text-slate-500 line-clamp-2">Understanding what information is available during processing.</p>
                    </Link>
                    <div className="w-full h-px bg-black/5"></div>
                    <Link to="#" className="block group">
                      <h4 className="font-serif text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex justify-between items-center">
                        Application Approvals
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                      </h4>
                      <p className="text-sm text-slate-500 line-clamp-2">Next steps after receiving a positive outcome. What to do now.</p>
                    </Link>
                    <div className="w-full h-px bg-black/5"></div>
                    <Link to="#" className="block group">
                      <h4 className="font-serif text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex justify-between items-center">
                        Handling Rejections
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                      </h4>
                      <p className="text-sm text-slate-500 line-clamp-2">Understanding appeals, reviews, and alternative options.</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Info & Downloads (2 Col layout) */}
        <section className="px-5 md:px-12 lg:px-20 mb-24 lg:mb-32">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Important Information */}
            <div className="flex-1">
              <div className="mb-10">
                <h2 className="text-3xl md:text-5xl font-serif text-[#111827] tracking-tight mb-4">Important Information</h2>
                <p className="text-sm text-slate-500 max-w-md">Key disclaimers and professional advice guidelines you should understand.</p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-medium text-slate-900 mb-2">No Guaranteed Outcomes</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Application outcomes are determined by the Department of Home Affairs. Our role is to provide professional guidance, application preparation, submission support, and ongoing assistance throughout the immigration process.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <Shield className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-medium text-slate-900 mb-2">Beware of Unrealistic Claims</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Be cautious of service providers who advertise guaranteed approvals or unrealistic success rates. Immigration outcomes are ultimately determined by the relevant authorities, not by immigration practitioners.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-medium text-slate-900 mb-2">Why Experience Matters</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">Immigration regulations and procedures can change frequently. Working with experienced practitioners helps ensure that applications are prepared correctly, submitted appropriately, and supported throughout the process.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resource Downloads */}
            <div className="lg:w-[40%] bg-slate-50 border border-slate-200 p-8 md:p-10 rounded-3xl mt-12 lg:mt-0">
              <h3 className="text-2xl font-serif text-slate-900 mb-8">Resource Downloads</h3>
              
              <div className="space-y-4">
                <Link to="#" className="group flex items-center justify-between bg-white p-5 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#edf4f2] transition-colors">
                      <FileText className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-serif font-medium text-slate-900 text-sm md:text-base">Consultation Checklist</h4>
                      <p className="text-xs text-slate-500 mt-1">Download PDF Document</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-black transition-colors" />
                </Link>

                <Link to="#" className="group flex items-center justify-between bg-white p-5 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#edf4f2] transition-colors">
                      <FileText className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-serif font-medium text-slate-900 text-sm md:text-base">Process Overview Map</h4>
                      <p className="text-xs text-slate-500 mt-1">Download PDF visual guide</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-black transition-colors" />
                </Link>

                <Link to="#" className="group flex items-center justify-between bg-white p-5 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#edf4f2] transition-colors">
                      <FileText className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="font-serif font-medium text-slate-900 text-sm md:text-base">Doc Prep Guide</h4>
                      <p className="text-xs text-slate-500 mt-1">Download PDF instruction</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-black transition-colors" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Latest Insights Banner */}
        <section className="px-5 md:px-12 lg:px-20 mb-24 lg:mb-32">
          <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-slate-900 text-white flex flex-col md:flex-row items-stretch">
            <div className="p-10 md:p-16 flex-1 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-6 mt-0">Latest Immigration Insights</h2>
                <p className="text-slate-300 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
                  Stay informed with articles and updates covering Immigration law changes, Department of Home Affairs updates, Processing trends, Application best practices, and Common applicant mistakes.
                </p>

                <Link to="#" className="w-full sm:w-auto flex items-center justify-between font-medium transition-transform active:scale-95 bg-white p-1 pl-6 rounded-[16px] text-black font-mono text-[11px] md:text-xs uppercase tracking-widest min-w-[220px] h-14 group/cta max-w-fit overflow-hidden relative">
                  <span className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/cta:scale-x-100 bg-[#7BEAFB]"></span>
                  <span className="relative z-10 truncate mr-6 text-center sm:text-left flex-1 transition-colors duration-500 group-hover/cta:text-black">View All Articles</span>
                  <span className="relative z-10 flex items-center justify-center bg-[#edf4f2] text-black w-12 h-full rounded-[10px] shrink-0 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:bg-white border border-slate-200">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Visual Right Side for insights layout */}
            <div className="hidden md:flex md:w-[40%] bg-slate-800 p-8 flex-col justify-center gap-4 relative overflow-hidden">
              <div className="absolute -right-12 top-20 text-slate-700/30">
                <Newspaper className="w-64 h-64" />
              </div>
              <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 z-10 translate-x-4">
                <p className="text-[10px] text-slate-400 font-mono tracking-wider mb-2">NEW UPDATE</p>
                <h4 className="font-serif text-lg leading-tight mb-2">Home Affairs Processing Times Q3...</h4>
              </div>
              <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 z-10 -translate-x-4 opacity-70">
                <p className="text-[10px] text-slate-400 font-mono tracking-wider mb-2">LEGAL BRIEF</p>
                <h4 className="font-serif text-lg leading-tight mb-2">Critical Skills List Modifications 2026</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Container */}
        <section className="px-5 md:px-12 lg:px-20 mb-8">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center bg-[#edf4f2] p-12 lg:p-20 rounded-[40px]">
             <h2 className="text-3xl md:text-5xl font-serif text-[#111827] tracking-tight mb-6">Need Personal Guidance?</h2>
             <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed">
               Every immigration matter is unique. If you're unsure which option applies to your circumstances, schedule a consultation and receive professional guidance tailored to your situation.
             </p>
             <Link to="/contact" className="w-full sm:w-auto flex items-center justify-between font-medium transition-transform active:scale-95 bg-black p-1 pl-6 rounded-[16px] text-white font-mono text-[11px] md:text-xs uppercase tracking-widest min-w-[260px] h-14 group/cta max-w-fit overflow-hidden relative">
                <span className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/cta:scale-x-100 bg-[#7BEAFB]"></span>
                <span className="relative z-10 truncate mr-6 text-center sm:text-left flex-1 transition-colors duration-500 group-hover/cta:text-black">Book a Consultation</span>
                <span className="relative z-10 flex items-center justify-center bg-[#7BEAFB] text-black w-12 h-full rounded-[10px] shrink-0 transition-transform group-hover/cta:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
