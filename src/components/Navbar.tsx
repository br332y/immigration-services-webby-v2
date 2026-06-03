import { useState, useEffect } from "react";
import { Phone, Menu, X, Mail, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={`fixed w-full z-50 transition-all duration-500 flex justify-center ${isScrolled ? 'top-4 px-4' : 'top-0'}`}>
      <header
        id="main-nav"
        className={`w-full transition-all duration-500 flex flex-col ${
          isScrolled 
            ? "max-w-6xl bg-white/40 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/40 rounded-2xl" 
            : "bg-transparent"
        }`}
      >
        {/* Top Notice Section - Above Navbar */}
        <div 
          className={`w-full transition-all duration-300 overflow-hidden ${
            isScrolled 
              ? "h-0 py-0 opacity-0 pointer-events-none" 
              : "h-[32px] opacity-100 bg-transparent text-dark max-w-6xl mx-auto px-4 md:px-8 flex justify-end items-center"
          }`}
        >
          <div className="flex items-center gap-4 md:gap-6 font-mono text-[10px] uppercase tracking-widest text-gray-text">
            <a href="mailto:info@ida.co.za" className="flex items-center gap-2 hover:text-dark transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">info@ida.co.za</span>
            </a>
            <a href="tel:0824497141" className="flex items-center gap-2 hover:text-dark transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">082 449 7141</span>
            </a>
            <a href="https://facebook.com/immigration.co.za" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-dark transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              <span className="hidden sm:inline">Facebook</span>
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div 
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "py-4 max-w-6xl mx-auto"
              : "py-6 border-b border-transparent max-w-6xl mx-auto"
          }`}
        >
          <div className="w-full px-4 md:px-8">
            <div className="flex items-center justify-between">
            
            {/* Logo Brand Group */}
            <div className="flex-1 flex justify-start">
              <Link
                to="/"
                onClick={() => {
                  if (isHomePage) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="flex items-center gap-3 group transition-transform duration-200"
              >
                <div className="bg-black text-white p-1 rounded font-mono font-medium text-[12px] tracking-widest w-9 h-9 flex items-center justify-center">
                  IDA
                </div>
                <div className="flex flex-col">
                  <span className="text-dark font-serif tracking-tight text-xl font-medium leading-none">
                    Ida Oosthuizen
                  </span>
                  <span className="text-gray-text text-[10px] font-mono uppercase tracking-widest mt-1">
                    Immigration Practitioner
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Link Menu */}
            <div className="flex-1 hidden lg:flex justify-center">
              <nav className="flex items-center gap-8 text-[11px] font-mono uppercase tracking-widest">
                <Link to="/" className="text-gray-text hover:text-dark transition-colors duration-200 cursor-pointer">
                  Home
                </Link>
                {[
                  { label: "Services", id: "services" },
                  { label: "Pricing", id: "pricing" },
                  { label: "About", id: "about" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-text hover:text-dark transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
                <Link to="/resources" className="text-gray-text hover:text-dark transition-colors duration-200 cursor-pointer">
                  Resources
                </Link>
              </nav>
            </div>

            {/* General Actions (CTA + Hamburger Mobile) */}
            <div className="flex-1 flex items-center justify-end gap-4 lg:gap-6">
              <Link
                to="/contact"
                className="bg-black text-white p-[3px] pl-5 rounded-[12px] font-mono text-[10px] tracking-widest uppercase transition-transform active:scale-95 flex items-center justify-center shadow-sm hidden sm:flex group/cta h-10 border border-black overflow-hidden relative"
              >
                <span className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/cta:scale-x-100 bg-[#7BEAFB]"></span>
                <span className="relative z-10 mr-3 transition-colors duration-500 group-hover/cta:text-black">Inquire Now</span>
                <span className="relative z-10 flex items-center justify-center bg-[#7BEAFB] text-black w-8 h-full rounded-[8px] shrink-0 transition-transform group-hover/cta:translate-x-[1px]">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden transition-colors focus:outline-none p-2 rounded text-dark hover:bg-black/5"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-4 border-t border-black/5 bg-white px-4 pt-2 pb-6 absolute w-full top-full shadow-lg">
            <nav className="max-w-6xl mx-auto flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-left font-mono py-4 text-[11px] tracking-widest uppercase text-dark border-b border-black/5 last:border-0 hover:bg-black/5 px-2 transition-colors"
              >
                Home
              </Link>
              {[
                { label: "Services", id: "services" },
                { label: "Pricing", id: "pricing" },
                { label: "About", id: "about" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-mono py-4 text-[11px] tracking-widest uppercase text-dark border-b border-black/5 last:border-0 hover:bg-black/5 px-2 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Link
                to="/resources"
                onClick={() => setIsOpen(false)}
                className="text-left font-mono py-4 text-[11px] tracking-widest uppercase text-dark border-b border-black/5 last:border-0 hover:bg-black/5 px-2 transition-colors"
              >
                Resources
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-left font-mono py-4 text-[11px] tracking-widest uppercase text-dark px-2 font-bold block"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
      </header>
    </div>
  );
}
