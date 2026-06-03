import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const FAQ_DATA = [
  {
    question: "Can you guarantee approval?",
    answer: "No. All application decisions are made by the Department of Home Affairs."
  },
  {
    question: "How long does the process take?",
    answer: "Processing times vary depending on application type and Home Affairs processing timelines."
  },
  {
    question: "Do I need a consultation?",
    answer: "Yes. Every case is unique, and a consultation allows us to assess your situation properly."
  },
  {
    question: "Do you assist clients outside Gauteng?",
    answer: "Yes. While in-person consultations are preferred where practical, clients across South Africa can be assisted remotely."
  },
  {
    question: "What happens if my application is unsuccessful?",
    answer: "Where appropriate, we can assist with appeals or identifying alternative options."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-transparent py-16 md:py-24 px-4 md:px-8 border-y border-black/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-gray-text font-mono text-[10px] uppercase tracking-widest bg-black/5 px-3 py-1.5 rounded inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-dark font-serif tracking-tight leading-[1.1]">
            Clear answers to common questions.
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="border border-black/10 rounded-[16px] overflow-hidden bg-white transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-serif text-lg md:text-xl text-dark font-medium pr-8">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-black text-white border-black' : 'border-black/20 text-dark'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-text text-sm md:text-base leading-relaxed antialiased">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
