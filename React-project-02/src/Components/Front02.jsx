import { useState } from "react";

export const Front02 = () => {
  const [activeButton, setActiveButton] = useState("Start Business");

  const servicesData = {
    "Start Business": [
      { title: "Private Limited Incorporation", desc: "Most popular type of Corporate entity and recommended for the Start-ups." },
      { title: "Limited Liability Partnership(LLP)", desc: "Registered under MCA and ensuring Limited liabilities for its Partners." },
      { title: "One Person Company", desc: "Registered under MCA and is recommended to the Start-ups having Single Founder." },
      { title: "Partnership Firm", desc: "Governed by Partnership Act and is recommended for Idea stage business." },
      { title: "Proprietorship Firm", desc: "Simplest form of doing the business and has no individual business existence." },
      { title: "Foreign Subsidiary", desc: "Company whose shares are majorly owned by foreign Parent Company." }
    ],
    "Manage Business": [
      { title: "GST Filing", desc: "Monthly and quarterly GST return filing to keep your business compliant with tax laws." },
      { title: "TDS Return", desc: "Expert assistance in filing TDS returns and generating Form 16/16A efficiently." },
      { title: "Payroll Management", desc: "Complete salary processing, PF, and ESI compliance for your growing team." },
      { title: "Accounting Services", desc: "Professional bookkeeping and financial statement preparation for your company." },
      { title: "Annual Filing", desc: "MCA annual return filing and financial statement submission for Companies and LLPs." },
      { title: "Income Tax Return", desc: "Filing of business income tax returns with maximum tax optimization." }
    ],
    "Protect Business": [
      { title: "Trademark Registration", href: "#", desc: "Protect your brand name and logo from being used by competitors." },
      { title: "Copyright Registration", href: "#", desc: "Secure your creative works, software code, and literary content legally." },
      { title: "Patent Filing", href: "#", desc: "Protect your unique inventions and technical innovations with expert filing." },
      { title: "Design Registration", href: "#", desc: "Secure the unique visual appearance and shape of your products." },
      { title: "ISO Certification", href: "#", desc: "Enhance business credibility with internationally recognized quality standards." },
      { title: "MSME/Udyam", href: "#", desc: "Get government benefits and protection against delayed payments for small businesses." }
    ]
  };

  return (
    <section className="min-h-screen flex flex-col mb-10">
      <div className="w-full overflow-hidden py-8 bg-blue-50">
        <div className="marquee w-[200%] flex gap-8 whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 p-2 min-w-fit">
              <img src="/Logo/logo.png" alt="Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-foreground dark:text-black">Arostat Solutions LLP</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mt-10 md:mt-14 mb-14 md:mb-18">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-tight bg-clip-text">
            Most Popular <span className="text-primary">Offering!</span>
          </h1>
        </div>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20 px-4">
          {Object.keys(servicesData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveButton(tab)}
              className={cn(
                "flex-1 max-w-sm sm:flex-none px-8 py-4 rounded-2xl font-bold text-lg border-2 shadow-xl transition-all duration-500 md:px-12 md:py-5 md:text-xl active:scale-95 hover:-translate-y-2",
                activeButton === tab 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-card text-foreground border-border hover:bg-primary/10"
              )}
            >
              {tab}
            </button>
          ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData[activeButton].map((service, index) => (
            <div
              key={`${activeButton}-${index}`}
              className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:border-primary/50 transition-all duration-500 group"
            >
              <h2 className="text-xl md:text-2xl lg:text-2xl font-black text-foreground mb-4 group-hover:text-primary">
                {service.title}
              </h2>
              <p className="text-foreground/80 mb-8 leading-relaxed text-sm md:text-base">
                {service.desc}
              </p>
              <button className="w-full sm:w-auto px-6 py-2.5 rounded-full font-semibold text-sm md:text-base bg-card border-2 border-primary text-primary shadow-md hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}