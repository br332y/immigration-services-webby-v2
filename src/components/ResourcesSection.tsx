import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function ResourcesSection() {
  const links = [
    "Immigration Consultation Checklist",
    "Critical Skills Visa Guide",
    "Permanent Residence Guide",
    "Understanding VFS Submissions",
    "Common Reasons Applications Are Rejected",
    "Immigration Process Overview",
    "Frequently Asked Questions",
    "Latest Immigration Updates"
  ];

  return (
    <section className="bg-transparent py-16 md:py-24 px-4 md:px-8 border-y border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-gray-text mb-6">
            RESOURCES CENTRE
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-dark font-serif tracking-tight leading-[1.1]">
            Helpful guides and forms.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <Link 
              key={i} 
              to="/resources" 
              className="bg-white border border-black/10 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-black/30 transition-all group flex flex-col justify-between h-full min-h-[140px]"
            >
              <FileText className="w-6 h-6 text-slate-400 group-hover:text-black transition-colors mb-4" />
              <div className="flex items-end justify-between gap-4">
                <h3 className="text-sm font-medium text-dark flex-1 leading-snug">{link}</h3>
                <ArrowRight className="w-4 h-4 text-black opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
