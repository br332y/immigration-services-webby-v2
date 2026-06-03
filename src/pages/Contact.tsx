import { useState } from 'react';
import { ChevronRight, ArrowRight, CheckCircle2, ChevronLeft, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { GridPattern } from "../components/ui/grid-pattern";
import { cn } from "../lib/utils";

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    validVisa: '',
    asylumSeeker: '',
    refugee: '',
    country: '',
    saSpouse: '',
    saChildren: '',
    qualifications: '',
    employed: '',
    previouslyApplied: '',
    fullName: '',
    email: '',
  });

  const isStep1Valid = formData.validVisa !== '' && formData.asylumSeeker !== '' && formData.refugee !== '' && formData.country !== '' && formData.saSpouse !== '';
  const isStep2Valid = formData.saChildren !== '' && formData.qualifications !== '' && formData.employed !== '' && formData.previouslyApplied !== '';
  const isStep3Valid = formData.fullName !== '' && formData.email !== '';
  
  const canContinue = (step === 1 && isStep1Valid) || (step === 2 && isStep2Valid);

  const handleNext = () => {
    if (step === 1 && !isStep1Valid) return;
    if (step === 2 && !isStep2Valid) return;
    setStep(prev => Math.min(prev + 1, 3));
  };
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));
  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden flex flex-col">
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

      {/* Top Navbar specifically for Contact Page */}
      <div className="flex items-center justify-between p-6 md:px-12 absolute top-0 left-0 w-full z-50">
        <Link to="/" className="flex items-center gap-3 group transition-transform duration-200">
          <div className="bg-black text-white p-1 rounded font-mono font-medium text-[12px] tracking-widest w-9 h-9 flex items-center justify-center">
            IDA
          </div>
        </Link>
        <Link to="/" className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-black/10 bg-white/50 backdrop-blur-md hover:bg-white hover:border-black/20 text-slate-500 hover:text-black transition-all group" aria-label="Close and return to home">
          <X className="w-5 h-5 transition-transform group-hover:rotate-90 group-hover:scale-110 duration-300" />
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 flex-grow min-h-screen">
        
        {/* LEFT COLUMN - Brand Context */}
        <div className="bg-[#E5EEE8] relative flex items-center justify-center pt-32 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden">
          {/* Subtle gradient effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_50%)]" />
          <div className="absolute -left-16 bottom-0 h-80 w-80 rounded-full bg-white/40 blur-3xl" />
          
          <div className="relative z-10 w-full max-w-lg">
            <div className="bg-white/40 backdrop-blur-[16px] rounded-[24px] border border-white/60 p-8 md:p-12 shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
              <h1 className="text-3xl md:text-5xl font-serif tracking-tight text-dark leading-[1.05] mb-6">
                South African Immigration Solved.
              </h1>
              <p className="text-gray-text text-base md:text-lg antialiased mb-10 leading-relaxed font-normal">
                Make sure your application is prepared correctly, stay legally compliant, and get your visa approved.
              </p>

              {/* Trust block */}
              <div className="border-t border-black/10 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-black/50 mb-4">
                  Registered Professional
                </p>
                <div className="flex items-center gap-6">
                  <div className="font-serif italic text-xl text-dark opacity-80">FIPSA</div>
                  <div className="font-serif italic text-xl text-dark opacity-80">SAQA</div>
                </div>
              </div>

              {/* Testimonial block */}
              <div className="border-t border-black/10 pt-6 mt-8">
                <p className="font-mono text-[10px] uppercase tracking-widest text-black/50 mb-4">
                  What clients say
                </p>
                <div className="bg-white rounded-xl border border-black/5 p-6 shadow-sm">
                  <p className="font-serif italic text-dark text-[15px] leading-relaxed mb-4">
                    "Ida is an exceptional immigration partner, delivering fast and knowledgeable service. They managed our entire corporate transfer flawlessly."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" className="w-full h-full rounded-full object-cover grayscale" alt="Client" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest font-bold text-dark">Sarah J.</p>
                      <p className="text-[9px] font-mono uppercase tracking-widest text-black/50">Director of Ops</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - MultiStep Form */}
        <div className="bg-white flex flex-col justify-center px-6 py-16 md:px-16 lg:px-24">
          <div className="w-full max-w-xl mx-auto h-full flex flex-col justify-center">
            
            {/* Step Indicators */}
            <div className="grid grid-cols-3 relative mb-12">
              <div className={`border-t-2 pt-4 ${step >= 1 ? 'border-dark text-dark' : 'border-black/10 text-black/40'}`}>
                <p className="font-mono text-[10px] uppercase tracking-widest flex gap-2">
                  <span>1</span> <span className="hidden sm:inline">Initial status</span>
                </p>
              </div>
              <div className={`border-t-2 pt-4 ${step >= 2 ? 'border-dark text-dark' : 'border-black/10 text-black/40'}`}>
                <p className="font-mono text-[10px] uppercase tracking-widest flex gap-2">
                  <span>2</span> <span className="hidden sm:inline">Your situation</span>
                </p>
              </div>
              <div className={`border-t-2 pt-4 ${step >= 3 ? 'border-dark text-dark' : 'border-black/10 text-black/40'}`}>
                <p className="font-mono text-[10px] uppercase tracking-widest flex gap-2">
                  <span>3</span> <span className="hidden sm:inline">Submit</span>
                </p>
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif text-dark tracking-tight mb-8">
              {step === 1 && "Get Started"}
              {step === 2 && "Your Details"}
              {step === 3 && "Submit Your Info"}
            </h2>

            <div className="flex-1">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-3">
                      <p className="text-gray-text font-serif italic text-lg pb-1">Do you have a valid visa?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {['Yes', 'No'].map(opt => (
                          <button
                            key={opt}
                            onClick={() => handleSelect('validVisa', opt)}
                            className={`p-4 rounded-xl border text-sm transition-all focus:outline-none ${formData.validVisa === opt ? 'bg-black text-white border-black' : 'bg-white border-black/10 text-dark hover:border-black/30'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-gray-text font-serif italic text-lg pb-1">Are you an asylum seeker?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {['Yes', 'No'].map(opt => (
                          <button
                            key={opt}
                            onClick={() => handleSelect('asylumSeeker', opt)}
                            className={`p-4 rounded-xl border text-sm transition-all focus:outline-none ${formData.asylumSeeker === opt ? 'bg-black text-white border-black' : 'bg-white border-black/10 text-dark hover:border-black/30'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-gray-text font-serif italic text-lg pb-1">Are you a refugee?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {['Yes', 'No'].map(opt => (
                          <button
                            key={opt}
                            onClick={() => handleSelect('refugee', opt)}
                            className={`p-4 rounded-xl border text-sm transition-all focus:outline-none ${formData.refugee === opt ? 'bg-black text-white border-black' : 'bg-white border-black/10 text-dark hover:border-black/30'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-gray-text font-serif italic text-lg pb-1">What is your country of origin?</p>
                      <div className="relative">
                        <select
                          value={formData.country}
                          onChange={(e) => handleSelect('country', e.target.value)}
                          className="w-full p-4 rounded-xl border border-black/10 focus:border-black focus:outline-none focus:ring-1 focus:ring-black bg-white transition-colors appearance-none"
                        >
                          <option value="" disabled>Select a country</option>
                          {COUNTRIES.map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        <ChevronRight className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/40 transform rotate-90" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-gray-text font-serif italic text-lg pb-1">Are you married to a South African citizen?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {['Yes', 'No'].map(opt => (
                          <button
                            key={opt}
                            onClick={() => handleSelect('saSpouse', opt)}
                            className={`p-4 rounded-xl border text-sm transition-all focus:outline-none ${formData.saSpouse === opt ? 'bg-black text-white border-black' : 'bg-white border-black/10 text-dark hover:border-black/30'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-3">
                      <p className="text-gray-text font-serif italic text-lg pb-1">Do you have South African children?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {['Yes', 'No'].map(opt => (
                          <button
                            key={opt}
                            onClick={() => handleSelect('saChildren', opt)}
                            className={`p-4 rounded-xl border text-sm transition-all focus:outline-none ${formData.saChildren === opt ? 'bg-black text-white border-black' : 'bg-white border-black/10 text-dark hover:border-black/30'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-gray-text font-serif italic text-lg pb-1">What qualifications do you possess?</p>
                      <input
                        type="text"
                        value={formData.qualifications}
                        onChange={(e) => handleSelect('qualifications', e.target.value)}
                        placeholder="e.g. Bachelor's Degree, Trade Certificate"
                        className="w-full p-4 rounded-xl border border-black/10 focus:border-black bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-3">
                      <p className="text-gray-text font-serif italic text-lg pb-1">Are you currently employed?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {['Yes', 'No'].map(opt => (
                          <button
                            key={opt}
                            onClick={() => handleSelect('employed', opt)}
                            className={`p-4 rounded-xl border text-sm transition-all focus:outline-none ${formData.employed === opt ? 'bg-black text-white border-black' : 'bg-white border-black/10 text-dark hover:border-black/30'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-gray-text font-serif italic text-lg pb-1">Have you previously applied for a South African visa?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {['Yes', 'No'].map(opt => (
                          <button
                            key={opt}
                            onClick={() => handleSelect('previouslyApplied', opt)}
                            className={`p-4 rounded-xl border text-sm transition-all focus:outline-none ${formData.previouslyApplied === opt ? 'bg-black text-white border-black' : 'bg-white border-black/10 text-dark hover:border-black/30'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <p className="text-gray-text text-base">
                      Almost there. Let us know how to reach you to discuss your case.
                    </p>

                    <div className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-widest text-dark block">Full Name</label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => handleSelect('fullName', e.target.value)}
                          placeholder="Your Name"
                          className="w-full p-4 rounded-xl border border-black/10 focus:border-black bg-white focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-widest text-dark block">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleSelect('email', e.target.value)}
                          placeholder="you@example.com"
                          className="w-full p-4 rounded-xl border border-black/10 focus:border-black bg-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Actions */}
            <div className="mt-12 flex items-center justify-between pt-6 border-t border-black/5">
              {step > 1 ? (
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-text hover:text-dark transition-colors focus:outline-none pl-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <div /> // Placeholder
              )}

              {step < 3 ? (
                <button
                  onClick={handleNext}
                  disabled={!canContinue}
                  className={`px-8 py-4 rounded-xl font-mono text-[10px] md:text-xs uppercase tracking-widest focus:outline-none transition-all flex items-center gap-3 active:scale-95 ${canContinue ? 'bg-[#bbedfb] hover:bg-[#a6dceb] text-dark shadow-sm' : 'bg-black/5 text-black/40 cursor-not-allowed'}`}
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  disabled={!isStep3Valid}
                  className={`px-8 py-4 rounded-xl font-mono text-[10px] md:text-xs uppercase tracking-widest focus:outline-none transition-all flex items-center gap-3 active:scale-95 ${isStep3Valid ? 'bg-black hover:bg-black/90 text-white shadow-md' : 'bg-black/5 text-black/40 cursor-not-allowed'}`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Submit Inquiry
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
