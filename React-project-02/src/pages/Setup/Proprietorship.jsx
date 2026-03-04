import { Zap, User, Landmark, CheckCircle2, AlertCircle } from "lucide-react";

export const Proprietorship = () => {
  return (
    <section className="relative min-h-screen font-sans bg-background text-foreground transition-colors duration-300">
      <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none">
        <img
          className="max-h-[70vh] sm:max-h-[80vh] md:max-h-[90vh] w-auto object-contain 
               opacity-30 dark:opacity-50 
               mt-16 sm:mt-20 md:mt-24 lg:mt-20 transition-opacity duration-500"
          src="/Logo/logo.png"
          alt="Arostat Background"
        />
      </div>


      <div className="relative z-10 flex flex-col items-center mx-auto pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-10 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-6 max-w-6xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight tracking-tighter">
          PROPRIETORSHIP
        </h1>
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 max-w-3xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed font-medium text-justify px-2 sm:px-0">
            The most fundamental commercial structure in India, defined by
            <span className="text-foreground italic underline decoration-primary/60 underline-offset-4"> absolute singular control</span>.
            Perfect for visionaries seeking low-cost entry and zero compliance drag,
            while embracing the responsibility of unlimited personal liability.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-6 pb-12 sm:pb-16 md:pb-24 max-w-5xl space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-12">

        {/* WHY SECTION */}
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

        {/* OVERVIEW SECTION */}
<div className="group bg-card/60 dark:bg-card/30 border border-border p-6 sm:p-10 md:p-16 rounded-xl sm:rounded-2xl md:rounded-[3rem] shadow-2xl transition-all hover:shadow-primary/10 w-full">
  <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
    <h2 className="text-3xl sm:text-4xl md:text-4xl font-black tracking-tight group-hover:underline decoration-primary underline-offset-4">
      Overview
    </h2>
  </div>

  {/* Removed 'grid lg:grid-cols-5' - now it's just a standard block */}
  <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
    <p className="text-md sm:text-xl md:text-2xl font-bold text-foreground/90 leading-tight tracking-tight text-justify">
      The most accessible gateway to the Indian market, designed for speed and total autonomy.
    </p>

    <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg md:text-lg text-justify">
      <p className="px-2 sm:px-0 font-medium">
        Embarking on an entrepreneurial path in India is a significant milestone, and the <span className="text-primary font-semibold">Sole Proprietorship</span> stands as the most streamlined vehicle for that journey. This legal framework empowers a single visionary to oversee every facet of operations, exercising absolute decision-making authority without the need for board resolutions or partner consensus.
      </p>
      <p className="px-2 sm:px-0 font-medium">
        Engineered for maximum efficiency, it serves as the foundation for independent consultants and modern retailers who prioritize a <strong>rapid market launch</strong> over complex corporate hierarchy. While it offers unmatched simplicity and the lowest entry costs in the country, it remains a structure of high responsibility—the proprietor is the sole bearer of all outcomes, maintaining a direct legal link between personal success and business obligations.
      </p>
    </div>
  </div>
</div>

        {/* PROCESS SECTION */}
   <div className="group bg-card/50 dark:bg-card/20 border border-border p-6 sm:p-10 md:p-14 rounded-xl sm:rounded-2xl md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 text-justify px-2 sm:px-0">
    <div>
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-black">Process</h2>
      <p className="text-muted-foreground font-medium mt-1 text-sm sm:text-base px-2 sm:px-0">Establishing legal validity through strategic licensing.</p>
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 text-justify">
    <div className="space-y-6 sm:space-y-8 md:space-y-10">
      <div className="relative pl-10 sm:pl-12">
        <span className="absolute left-0 top-0 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-black group-hover:bg-primary transition-colors">01</span>
        <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 px-2 sm:px-0">Legal Identity & Branding</h3>
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-base px-2 sm:px-0">
          Finalize a unique <span className="relative inline-block font-semibold text-foreground group-hover:underline decoration-primary underline-offset-4">Business Name</span> that avoids trademark conflicts. Since the business is an extension of you, your <span className="font-semibold text-foreground">Personal PAN</span> serves as the permanent tax anchor.
        </p>
      </div>

      <div className="relative pl-10 sm:pl-12">
        <span className="absolute left-0 top-0 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-black group-hover:bg-primary transition-colors">02</span>
        <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 px-2 sm:px-0">Fiscal Activation</h3>
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-base px-2 sm:px-0">
          Open a dedicated <span className="relative inline-block font-semibold text-foreground group-hover:underline decoration-primary underline-offset-4">Corporate Current Account</span>. Most Indian banks require at least two government-issued business proofs to activate commercial banking services.
        </p>
      </div>
    </div>

    {/* Simplified Step 03 - No extra box wrapper */}
    <div className="relative pl-10 sm:pl-12">
      <span className="absolute left-0 top-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-black">03</span>
      <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 px-2 sm:px-0">Proof of Existence</h3>
      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-base mb-6 px-2 sm:px-0">
        Secure a minimum of two registrations based on your specific industry requirements:
      </p>

      {/* Cool, simple grid of badges instead of boxed cards */}
      <div className="flex flex-wrap gap-2 px-2 sm:px-0">
        {[
          { label: "GST Registration", hint: "Taxation" },
          { label: "MSME (Udyam)", hint: "Benefits" },
          { label: "Shop & Establishment", hint: "Permit" },
          { label: "Trade License", hint: "Industry" },
          { label: "FSSAI (Food)", hint: "Compliance" },
          { label: "Professional Tax", hint: "State" }
        ].map((item, i) => (
          <div key={i} className="group/item flex items-center gap-2 bg-foreground/5 hover:bg-primary/10 border border-border/50 rounded-full py-1.5 px-4 transition-all duration-300">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary" />
            <span className="text-xs font-bold text-foreground">{item.label}</span>
            <span className="hidden sm:inline text-[9px] uppercase tracking-widest text-muted-foreground/70">| {item.hint}</span>
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="mt-8 sm:mt-10 md:mt-12 flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-primary text-primary-foreground rounded-3xl shadow-xl transition-all duration-300 text-justify">
    <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-background/20 flex items-center justify-center shrink-0">
      <Zap className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />
    </div>
    <p className="font-bold text-sm sm:text-base leading-relaxed">
      Ready for Launch: <span className="font-normal opacity-90 ml-1">Once licenses are active and banking is live, your operations are 100% legally compliant.</span>
    </p>
  </div>
</div>

        {/* DOCUMENTS SECTION */}
        <div className="group bg-card/50 dark:bg-card/20 border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="p-6 sm:p-10 md:p-14 border-b border-border">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-black mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-6 sm:h-8 bg-primary rounded-full"></div>
              Documents
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { n: "01", t: "Identity", d: "Choose a name and link it to your PAN Card." },
                { n: "02", t: "Licensing", d: "Apply for MSME or GST registrations." },
                { n: "03", t: "Banking", d: "Open a Current Account with your licenses." },
                { n: "04", t: "Launch", d: "Start legal operations across the country." }
              ].map((step, i) => (
                <div key={i} className="space-y-2 px-2 sm:px-0">
                  <span className="text-primary font-black text-xs tracking-widest uppercase">{step.n}</span>
                  <h4 className="font-bold group-hover:underline decoration-primary underline-offset-4 text-sm sm:text-base">{step.t}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{step.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 bg-muted/20">
            <div className="p-6 sm:p-10 md:p-14 border-b md:border-b-0 md:border-r border-border">
              <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <User className="w-4 sm:w-5 h-4 sm:h-5 text-primary" /> Identity Proofs
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {["Owner's PAN Card (Mandatory)", "Aadhaar Card or Passport", "Recent Passport Size Photos"].map((doc, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3 text-foreground/80 font-medium text-sm sm:text-base">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-10 md:p-14">
              <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <Landmark className="w-4 sm:w-5 h-4 sm:h-5 text-primary" /> Business Address
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {["Electricity or Water Bill", "Rent Agreement (if applicable)", "NOC from the Property Owner"].map((doc, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3 text-foreground/80 font-medium text-sm sm:text-base">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="
  max-w-3xl mx-auto 
  w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] md:w-full
  -mt-2 sm:-mt-7 md:mt-6 lg:mt-10 
  mb-8 sm:mb-10 md:mb-12
  flex items-center gap-3 sm:gap-4 
  px-4 sm:px-6 py-3.5 sm:py-4 
  bg-blue-600 rounded-xl sm:rounded-2xl 
  shadow-xl text-white border border-blue-400/20
">

            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white" />
            </div>
            <p className="font-bold text-[11px] xs:text-xs sm:text-sm md:text-base leading-tight sm:leading-snug flex-1">
              Pro-Tip: <span className="font-medium opacity-90 ml-0.5 sm:ml-1 text-[10px] xs:text-[11px] sm:text-sm md:text-base">
                Ensure your mobile number is linked to your Aadhaar for e-KYC.
              </span>
            </p>
          </div>
        </div>

        {/* FEE SECTION */}
        <div className="group bg-card/50 dark:bg-card/20 border border-border p-6 sm:p-10 md:p-14 rounded-xl sm:rounded-2xl md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 text-justify">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">Fee</h2>
              <p className="text-muted-foreground font-medium mt-1 text-sm sm:text-base px-2 sm:px-0">A budget-friendly gateway compared to Corporate structures.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { label: "Statutory Filings", price: "₹2,500 – ₹5,000", desc: "Professional handling for GST & Udyam registrations to ensure zero-error submissions." },
              { label: "State Permits", price: "₹2,500 – ₹5,000", desc: "Costs for Shops & Establishment licenses, which vary based on your specific regional authority." },
              { label: "FULL-SERVICE PACKAGE", price: "₹10,000 – ₹15,000", desc: "End-to-end setup including banking assistance and business license compliance support." }
            ].map((fee, i) => (
              <div key={i} className="p-6 sm:p-8 rounded-2xl bg-muted/30 border border-border group/item transition-all hover:bg-background hover:shadow-lg">
                <h4 className="text-muted-foreground font-bold text-xs uppercase tracking-widest mb-1">{fee.label}</h4>
                <p className="text-lg sm:text-xl md:text-xl font-black mb-1">
                  <span className="group-hover/item:text-primary transition-all">{fee.price}</span>
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                  {fee.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10 flex items-center gap-2 text-muted-foreground text-xs sm:text-sm italic px-2 sm:px-0">
            <AlertCircle className="w-4 h-4 text-primary" />
            <p>Professional fees ensure accuracy; direct government portal fees (where applicable) are extra.</p>
          </div>
        </div>
<div className="text-justify bg-card/50 dark:bg-card/20 p-3 sm:p-5 border border-border rounded-lg shadow-sm">
  <div className="mb-2 sm:mb-3">
    <h1 className="text-xl sm:text-2xl md:text-2xl font-black text-foreground">Timeline</h1>
  </div>
  <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
    <p className="text-foreground/90 font-medium">Estimated Duration: 1 to 2 Weeks</p>
    <p className="text-foreground/80">The timeline depends on state-specific processing speeds and departmental approvals.</p>
  </div>
</div>


      </div>
    </section>
  );
};