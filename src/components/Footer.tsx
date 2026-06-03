import { ShieldCheck, Facebook, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
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
    <footer id="footer" className="bg-transparent text-gray-text font-sans border-t border-black/5 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-12 gap-10">
          
          {/* Left Column: Brand, Tagline and Basic Trust Flags */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-black text-white p-1.5 rounded font-mono font-medium text-[10px] tracking-widest w-8 h-8 flex items-center justify-center">IDA</div>
              <span className="text-dark font-serif tracking-tight text-lg uppercase font-medium">
                Ida Immigration Practitioner
              </span>
            </div>
            
            <p className="text-gray-text text-sm leading-relaxed max-w-sm antialiased mt-4 pt-2">
              Practising South African Immigration Law since 1995. Navigating Home Affairs rules to provide secure paths for thousands of international residents.
            </p>

            <div className="mt-4 pt-4 border-t border-black/5 text-gray-text text-xs leading-relaxed max-w-sm">
              <span className="font-serif italic text-dark block mb-1">Disclaimer</span>
              Application outcomes are determined solely by the Department of Home Affairs. While we provide professional immigration assistance and guidance, no outcome can be guaranteed.
            </div>

            <div className="pt-4 flex items-center gap-3">
              <a
                href="https://facebook.com/immigration.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-dark hover:text-white hover:bg-black hover:border-black transition-all shadow-sm"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <span className="text-[10px] text-gray-text font-mono uppercase tracking-widest">facebook.com/immigration.co.za</span>
            </div>
          </div>

          {/* Central Section: Quick Links Menu */}
          <div className="md:col-span-3 space-y-4 mt-8 md:mt-0">
            <h4 className="text-dark font-mono font-medium text-[10px] tracking-widest uppercase border-b border-black/5 pb-3">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm pt-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-dark transition-colors cursor-pointer text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="hover:text-dark transition-colors cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-dark transition-colors cursor-pointer text-left"
                >
                  About Ida
                </button>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-dark transition-colors cursor-pointer text-left font-serif italic text-dark"
                >
                  Assessment Form
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-dark transition-colors cursor-pointer text-left"
                >
                  Contact Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section: Contact details list */}
          <div className="md:col-span-4 space-y-4 mt-8 md:mt-0">
            <h4 className="text-dark font-mono font-medium text-[10px] tracking-widest uppercase border-b border-black/5 pb-3">
              Practitioner Desk
            </h4>
            
            <ul className="space-y-4 text-xs md:text-sm text-gray-text pt-2">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-dark shrink-0 mt-0.5" />
                <span>51 Voortrekker Avenue, Edenvale, Gauteng</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-dark shrink-0" />
                <a href="tel:0824497141" className="hover:text-black hover:underline transition-colors font-mono font-medium text-dark">
                  082 449 7141
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-dark shrink-0" />
                <a href="mailto:idao@immigrationservices.co.za" className="hover:text-dark hover:underline transition-colors text-dark">
                  idao@immigrationservices.co.za
                </a>
              </li>
              <li className="flex items-start gap-3 border-t border-black/5 pt-4 mt-2">
                <Clock className="w-4 h-4 text-dark shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif italic text-dark">Office Hours:</p>
                  <p className="text-xs mt-1">Mon–Fri: 08:30–16:00</p>
                </div>
              </li>
            </ul>

            {/* Clickable Map */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=51+Voortrekker+Avenue,+Edenvale,+Gauteng" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block relative w-full h-32 md:h-40 rounded-xl overflow-hidden group border border-black/10 mt-6 shadow-sm"
            >
              <iframe 
                src="https://maps.google.com/maps?q=51%20Voortrekker%20Ave,%20Edenvale,%20Gauteng&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: 0 }} 
                allowFullScreen={false}
                loading="lazy"
                title="Office Location Map"
                className="absolute inset-0 pointer-events-none filter grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-white text-dark px-4 py-2 rounded-lg shadow-md text-[10px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  Open in Maps
                </div>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom copyright line strip precisely matching the user template */}
        <div className="border-t border-black/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center text-[10px] text-gray-text font-mono uppercase tracking-widest">
          <p className="antialiased">
            © 2025 Ida Immigration Practitioner · FIPSA Member · All visa submissions via VFS
          </p>
          
          <div className="flex items-center gap-2 bg-white border border-black/10 px-3 py-2 rounded-lg text-dark shadow-sm">
            <ShieldCheck className="w-4 h-4 text-dark shrink-0" />
            <span>FIPSA REG No: IP0027 · SAQA ID: 963</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
