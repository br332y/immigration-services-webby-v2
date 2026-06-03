import { Info } from "lucide-react";
import { motion } from "motion/react";

export default function HowItWorks() {
  const steps = [
    {
      no: "01",
      title: "Initial Consultation",
      text: "Meet with our team to discuss your immigration requirements and assess your situation."
    },
    {
      no: "02",
      title: "Receive Requirements List",
      text: "Receive a detailed list of requirements and supporting documents needed for your application."
    },
    {
      no: "03",
      title: "Submit Supporting Documents",
      text: "Gather and submit the required documentation."
    },
    {
      no: "04",
      title: "File Opened & Fees Paid",
      text: "We formally open your file once all fees are settled."
    },
    {
      no: "05",
      title: "Application Prepared",
      text: "We review your documentation and prepare your application for submission."
    },
    {
      no: "06",
      title: "Submission Appointment Scheduled",
      text: "Applications are submitted through the appropriate VFS channels and appointments are arranged."
    },
    {
      no: "07",
      title: "Application Monitoring & Follow-Up",
      text: "We monitor application progress and provide updates where possible."
    },
    {
      no: "08",
      title: "Outcome Received",
      text: "If approved: Permit collected. If rejected: Appeal options reviewed."
    }
  ];

  return (
    <section id="how-it-works" className="bg-transparent py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block Description */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase text-gray-text mb-6 inline-block">
            THE IMMIGRATION PROCESS
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-dark font-serif tracking-tight leading-[1.1]">
            How we get your visa approved.
          </h2>
        </div>

        {/* Dynamic Animated Roadmap Flow */}
        <div className="relative">
          {/* Animated SVG Path for Desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[50px] right-[50px] h-[1px] bg-black/10 z-0 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 bottom-0 w-full bg-black origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="group flex flex-row lg:flex-col gap-6 lg:gap-8 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                
                {/* Stage Indicator Node */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white border border-black/20 group-hover:border-black flex items-center justify-center text-dark transition-colors duration-300 relative z-10 shadow-sm group-hover:shadow-md">
                    <span className="font-mono font-medium text-sm">
                      {step.no}
                    </span>
                  </div>
                  {/* Vertical connecting line for mobile only */}
                  {index < steps.length - 1 && (
                    <div className="w-[1px] h-full min-h-[40px] bg-black/10 mt-2 lg:hidden">
                       <motion.div 
                         className="w-full bg-black origin-top h-full"
                         initial={{ scaleY: 0 }}
                         whileInView={{ scaleY: 1 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                       />
                    </div>
                  )}
                </div>

                {/* Step Copy Content Block */}
                <div className="flex-1 pb-8 lg:pb-0 pt-3 lg:pt-0">
                  <div className="mb-2">
                     <span className="text-gray-text font-mono text-[10px] tracking-widest uppercase mb-2 block group-hover:text-dark transition-colors">
                       Stage {step.no}
                     </span>
                     <h3 className="text-dark text-lg md:text-xl font-serif tracking-tight font-medium group-hover:text-dark transition-colors">
                       {step.title}
                     </h3>
                  </div>
                  <p className="text-gray-text text-sm leading-relaxed antialiased mt-3">
                    {step.text}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* Processing Times warning box mapping instruction precisely */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.8 }}
           className="bg-green-light border border-black/5 p-6 md:p-8 rounded-2xl mt-20 max-w-3xl mx-auto flex gap-5 items-start shadow-sm"
        >
          <Info className="w-5 h-5 text-dark shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="text-dark font-serif text-[15px] tracking-tight">
              Processing Timelines
            </h4>
            <p className="text-gray-text text-xs md:text-sm antialiased leading-relaxed">
              Home Affairs processing times are outside our control and we cannot guarantee specific timeframes. What we can guarantee is that your application will be correctly prepared and submitted — giving you the best possible chance of approval.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
