import React from "react";
import { Users, FileSignature, ShieldAlert, Clock, User, Landmark, CheckCircle2, ShieldCheck, Scale, Zap, AlertCircle } from "lucide-react";

export const Partnership = () => {
  return (
    <section className="relative min-h-screen font-sans bg-background text-foreground transition-colors duration-300">
      {/* BACKGROUND WATERMARK */}
      <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none">
        <img
          className="max-h-[70vh] sm:max-h-[80vh] md:max-h-[90vh] w-auto object-contain 
               opacity-30 dark:opacity-50 
               mt-16 sm:mt-20 md:mt-24 lg:mt-20 transition-opacity duration-500"
          src="/Logo/logo.png"
          alt="Arostat Background"
        />
      </div>

      {/* HERO SECTION */}
      <div className="relative z-10 flex flex-col items-center mx-auto pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-10 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-6 max-w-6xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight tracking-tighter uppercase">
          PARTNERSHIP
        </h1>
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 max-w-3xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed font-medium text-justify px-2 sm:px-0">
            Governed by the 
            <span className="text-foreground italic underline decoration-primary/60 underline-offset-4 mx-2">
               Indian Partnership Act of 1932,
            </span> 
            this structure transforms mutual trust into a <span className="font-bold uppercase tracking-tight text-primary">formidable legal entity</span>. 
            Through a structured Partnership Deed, it codifies the rights and liabilities of every stakeholder for long-term commercial stability.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-6 pb-12 sm:pb-16 md:pb-24 max-w-6xl space-y-8 sm:y-10 md:space-y-12">
{/* why us */}
 <div className="space-y-8 sm:space-y-10 md:space-y-12 py-6 sm:py-8 md:py-10">
          <div className="text-center px-2 sm:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-black">Why Us</h2>
            <p className="text-muted-foreground mt-2 font-medium text-base sm:text-lg px-2 sm:px-0">Why entrepreneurs choose the Proprietorship model.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { t: "Absolute Control", d: "Exercise total authority over every business decision without partner consensus." },
              { t: "100% Profit Retention", d: "Every rupee of net profit belongs solely to you—no dividends or profit-sharing." },
              { t: "Financial Privacy", d: "Keep your business performance confidential; no public filing of annual accounts." },
              { t: "Minimal Entry Barrier", d: "The most cost-effective structure to launch, featuring the lowest registration fees." },
              { t: "Operational Agility", d: "Pivot your strategy, change products, or update marketing instantly as you see fit." },
              { t: "Lean Compliance", d: "Focus on growth rather than paperwork with significantly reduced statutory filings." }
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-card/50 dark:bg-card/20  border border-border p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col items-center text-center h-full "
              >
                <h3 className="font-bold mb-3 text-lg sm:text-xl group-hover:text-primary transition-colors w-full">
                  <span className="relative inline-block w-full">
                    {item.t}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </h3>
                <p className="text-muted-foreground text-sm sm:text-md">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* STRATEGIC OVERVIEW CARD */}
        <div className="group bg-card/60 dark:bg-card/30 border border-border p-6 sm:p-10 md:p-16 rounded-xl sm:rounded-2xl md:rounded-[3rem] shadow-2xl transition-all hover:shadow-primary/10">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-black tracking-tight group-hover:underline decoration-primary underline-offset-4 mb-8">
            Strategic Overview
          </h2>
          <div className="max-w-4xl space-y-6">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground/90 leading-tight tracking-tight text-justify">
              Synergize resources and expertise with the most favored model for collaborative entrepreneurship.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg text-justify font-medium">
              While formation is simple, <span className="text-primary font-bold italic text-sm uppercase">Registration</span> is the critical step that separates casual ventures from credible institutions. It provides the legal "teeth" required to enforce contracts and protects the firm’s interests in a competitive marketplace.
            </p>
          </div>
        </div>


        {/* PROCESS GRID */}
        <div className="group bg-card/50 dark:bg-card/20 border border-border p-6 sm:p-10 md:p-14 rounded-xl sm:rounded-2xl md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-black">Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
            {[
              { n: "01", t: "Name Selection", d: "Choose a unique identity that avoids trademark conflicts and restricted government terms." },
              { n: "02", t: "Drafting Deed", d: "Precisely define capital contributions, profit-sharing ratios, and partner-specific duties." },
              { n: "03", t: "Execution", d: "Legalize on judicial stamp paper and execute before a certified Notary Public." },
              { n: "04", t: "Submission", d: "File Form 1 with the Registrar of Firms (RoF) within your jurisdictional office." },
              { n: "05", t: "Fee Settlement", d: "Remit the prescribed statutory fees to trigger the Registrar's verification process." },
              { n: "06", t: "Certification", d: "Receive the formal Certificate of Registration, finalizing the firm's legal birth." }
            ].map((step, i) => (
              <div key={i} className="relative pl-12 text-justify group/step">
                <span className="absolute left-0 top-0 w-9 h-9 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-black group-hover/step:bg-primary transition-colors">{step.n}</span>
                <h3 className="text-lg sm:text-xl font-black text-foreground mb-2">{step.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium">{step.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DOCUMENT MODULE */}
        <div className="bg-card/50 dark:bg-card/20 border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="p-6 sm:p-10 md:p-14 border-b border-border">
            <h2 className="text-2xl sm:text-3xl font-black mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-primary rounded-full"></div>
              Documents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { n: "01", t: "Drafting", d: "Formulate Deed and prepare Affidavit." },
                { n: "02", t: "Legalization", d: "Stamp duty and Notary approval." },
                { n: "03", t: "Filing", d: "Submission of Form 1 to the RoF." },
                { n: "04", t: "Activation", d: "Receive the Official Certificate." }
              ].map((step, i) => (
                <div key={i} className="space-y-2">
                  <span className="text-primary font-black text-[10px] tracking-widest uppercase">{step.n}</span>
                  <h4 className="font-black text-foreground text-sm sm:text-base">{step.t}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">{step.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 bg-muted/20">
            <div className="p-6 sm:p-10 md:p-14 border-b md:border-b-0 md:border-r border-border">
              <h3 className="text-lg sm:text-xl font-bold mb-6 flex items-center gap-2 text-primary">
                <Users className="w-5 h-5" /> Partner Credentials
              </h3>
              <ul className="space-y-4">
                {["PAN Cards (Personal)", "Aadhaar / Passport / DL", "Passport Photos (Cross-signed)", "Signed Legal Affidavit"].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 sm:p-10 md:p-14">
              <h3 className="text-lg sm:text-xl font-bold mb-6 flex items-center gap-2 text-primary">
                <FileSignature className="w-5 h-5" /> Registration Docs
              </h3>
              <ul className="space-y-4">
                {["Original Notarized Deed", "Certified Utility Bills", "Rent Agreement & NOC", "Completed Form 1"].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-5 sm:py-6 bg-primary text-primary-foreground flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs sm:text-sm font-bold italic flex items-center gap-2 uppercase tracking-wide">
              <ShieldAlert className="w-4 h-4 fill-current" />
              RoF Compliance: Partners must sign across photos for validation.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground font-black text-xs sm:text-sm shrink-0 bg-white/20 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" /> 5-10 WORKING DAYS
            </div>
          </div>
        </div>



        {/* INVESTMENT SETUP */}
        <div className="group bg-card/50 dark:bg-card/20 border border-border p-6 sm:p-10 md:p-14 rounded-xl sm:rounded-2xl md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 text-justify">
           <h2 className="text-3xl sm:text-4xl font-black mb-8">Fee</h2>
           <p className="text-muted-foreground leading-relaxed text-base sm:text-lg max-w-4xl font-medium">
             Costs are determined by state regulations and consist of statutory fees, mandatory 
             <span className="text-foreground font-bold"> Stamp Duty</span> (based on capital contribution), and professional consultancy. Additional activation costs apply for secondary identifiers like PAN, TAN, and GST.
           </p>
           
           <div className="mt-8 flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-600">
             <AlertCircle size={20} />
             <p className="text-xs sm:text-sm font-bold uppercase tracking-tight">Timeline: 5 to 10 Working Days for full certification.</p>
           </div>
        </div>

        {/* TIMELINE SECTION - MATCHING PROPRIETORSHIP THEME */}
<div className="text-justify bg-card/50 dark:bg-card/20 p-6 sm:p-8 md:p-10 border border-border rounded-2xl sm:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500">
  <div className="mb-6 flex items-center gap-4">
    <div className="p-3 bg-primary/10 rounded-xl">
      <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse" />
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground uppercase tracking-tighter">
       Timeline
    </h2>
  </div>

  <div className="space-y-4 sm:space-y-6">
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
      <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-black rounded-full w-fit">
        ESTIMATED DURATION: 5 TO 7 WORKING DAYS
      </span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      <p className="text-foreground/80 leading-relaxed text-sm sm:text-lg font-medium">
        The Unregistered Partnership is engineered for **instant commercial activation**. Unlike registered firms that wait for government approval, your timeline is driven solely by internal documentation and mandatory tax anchoring.
      </p>
      
      <div className="space-y-3 border-l-2 border-primary/20 pl-6">
        <p className="text-sm sm:text-base text-muted-foreground italic leading-relaxed">
          "The process is linear: Drafting and notarization are completed within 48 hours. The remaining window is dedicated to **PAN processing** and bank account integration, allowing you to invoice clients in under a week."
        </p>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};