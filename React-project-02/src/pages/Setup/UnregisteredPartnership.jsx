import React from "react";
import { Zap, Users, Landmark, CheckCircle2, AlertCircle, FileSignature, ShieldAlert, Clock } from "lucide-react";

export const UnregisteredPartnership = () => {
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight tracking-tighter uppercase">
          UNREGISTERED <br className="hidden md:block" /> PARTNERSHIP
        </h1>
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 max-w-3xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed font-medium text-justify px-2 sm:px-0">
            A flexible commercial arrangement defined by
            <span className="text-foreground italic underline decoration-primary/60 underline-offset-4"> mutual consent and rapid entry</span>. 
            Perfect for partners seeking a valid legal structure without the procedural lag of state registration, prioritizing 
            <span className="font-bold"> speed and internal privacy</span>.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-6 pb-12 sm:pb-16 md:pb-24 max-w-5xl space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-12">

        {/* STRATEGIC EDGE (Your "Why Us" section equivalent) */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 py-6 sm:py-8 md:py-10">
          <div className="text-center px-2 sm:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-black">Why Us</h2>
            <p className="text-muted-foreground mt-2 font-medium text-base sm:text-lg px-2 sm:px-0">Advantages of a lean collaborative model.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { t: "Rapid Activation", d: "Bypass government processing; execute the deed and start business operations instantly." },
              { t: "Lean Capital Entry", d: "Most economical structure, eliminating high state registrar fees and long wait times." },
              { t: "Private Governance", d: "Maintain absolute confidentiality of your partnership terms from the public domain." },
              { t: "Internal Agility", d: "Modify roles or profit-sharing via mutual consent without seeking statutory approvals." },
              { t: "Compliance Neutral", d: "Focus on growth with zero requirement for complex annual ROC or Registrar filings." },
              { t: "Fiscal Identity", d: "Full legal capacity to secure a business PAN, bank accounts, and GST registrations." }
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-card/50 dark:bg-card/20 border border-border p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col items-center text-center h-full"
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

        {/* STRATEGIC OVERVIEW */}
        <div className="group bg-card/60 dark:bg-card/30 border border-border p-6 sm:p-10 md:p-16 rounded-xl sm:rounded-2xl md:rounded-[3rem] shadow-2xl transition-all hover:shadow-primary/10 w-full">
          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-black tracking-tight group-hover:underline decoration-primary underline-offset-4">
              Strategic Overview
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
            <p className="text-md sm:text-xl md:text-2xl font-bold text-foreground/90 leading-tight tracking-tight text-justify">
              The most accessible gateway to the Indian market, designed for speed and total autonomy.
            </p>

            <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg md:text-lg text-justify">
              <p className="px-2 sm:px-0 font-medium">
                Establishing an unregistered firm is a journey of <span className="text-primary font-semibold">mutual consent</span>. It begins with the drafting of a Partnership Deed—the master document that defines your profit-sharing ratios and internal governance.
              </p>
              <p className="px-2 sm:px-0 font-medium">
                Once signed and notarized on appropriate state-specific stamp paper, you move to tax anchoring via a Firm-specific PAN. This model is engineered for those who prioritize a <strong>rapid market launch</strong> and absolute privacy, avoiding the procedural constraints of the Registrar of Firms while maintaining a strong legal foundation between partners.
              </p>
            </div>
          </div>
        </div>

        {/* PROCESS SECTION */}
        <div className="group bg-card/50 dark:bg-card/20 border border-border p-6 sm:p-10 md:p-14 rounded-xl sm:rounded-2xl md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 text-justify px-2 sm:px-0">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-black">Process</h2>
              <p className="text-muted-foreground font-medium mt-1 text-sm sm:text-base px-2 sm:px-0">"Contractual Activation" journey from drafting to launch.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 text-justify">
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <div className="relative pl-10 sm:pl-12">
                <span className="absolute left-0 top-0 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-black group-hover:bg-primary transition-colors">01</span>
                <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 px-2 sm:px-0">Covenant Design & Execution</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-base px-2 sm:px-0">
                  Negotiate and codify terms into a <span className="relative inline-block font-semibold text-foreground group-hover:underline decoration-primary underline-offset-4">Partnership Deed</span>. Formalize on state-specific non-judicial stamp paper with mandatory notarization for legal validity.
                </p>
              </div>

              <div className="relative pl-10 sm:pl-12">
                <span className="absolute left-0 top-0 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-black group-hover:bg-primary transition-colors">02</span>
                <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 px-2 sm:px-0">Fiscal & Identity Activation</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-base px-2 sm:px-0">
                  Secure a dedicated <span className="relative inline-block font-semibold text-foreground group-hover:underline decoration-primary underline-offset-4">Firm PAN Card</span>. Once the tax identity is active, open a corporate current account and secure proof of existence registrations.
                </p>
              </div>
            </div>

            <div className="relative pl-10 sm:pl-12">
              <span className="absolute left-0 top-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-black">03</span>
              <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 px-2 sm:px-0">Required Licenses</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-base mb-6 px-2 sm:px-0">
                Depending on your operational scale, activate the following commercial proofs:
              </p>

              <div className="flex flex-wrap gap-2 px-2 sm:px-0">
                {[
                  { label: "GST Registration", hint: "Taxation" },
                  { label: "MSME (Udyam)", hint: "Benefits" },
                  { label: "Shop & Establishment", hint: "Permit" },
                  { label: "Firm-specific PAN", hint: "Fiscal ID" },
                  { label: "Notarized Deed", hint: "Legal" },
                  { label: "Trade License", hint: "Industry" }
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
              <ShieldAlert className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />
            </div>
            <p className="font-bold text-sm sm:text-base leading-relaxed">
              Pro-Tip: <span className="font-normal opacity-90 ml-1">Ensure your Deed is printed on the correct state-specific Stamp Duty to avoid legal complications during bank account opening.</span>
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
                { n: "01", t: "Covenant", d: "Drafted roles and profit ratios." },
                { n: "02", t: "Execution", d: "Sign on stamp paper with notary." },
                { n: "03", t: "Tax Identity", d: "Apply for Firm-specific PAN." },
                { n: "04", t: "Banking", d: "Open current account with Deed." }
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
                <Users className="w-4 sm:w-5 h-4 sm:h-5 text-primary" /> Partner Credentials
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {["Partner PAN Cards (Mandatory)", "Aadhaar or Voter ID", "Passport Size Photos", "Signed Declarations"].map((doc, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3 text-foreground/80 font-medium text-sm sm:text-base">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-10 md:p-14">
              <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <Landmark className="w-4 sm:w-5 h-4 sm:h-5 text-primary" /> Entity Evidence
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {["Notarized Deed Copy", "Firm-specific PAN Card", "Electricity or Water Bill", "Rent Agreement & NOC"].map((doc, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3 text-foreground/80 font-medium text-sm sm:text-base">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] md:w-full -mt-2 sm:-mt-7 md:mt-6 lg:mt-10 mb-8 sm:mb-10 md:mb-12 flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3.5 sm:py-4 bg-blue-600 rounded-xl sm:rounded-2xl shadow-xl text-white border border-blue-400/20">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white" />
            </div>
            <p className="font-bold text-[11px] xs:text-xs sm:text-sm md:text-base leading-tight sm:leading-snug flex-1">
              Timeframe: <span className="font-medium opacity-90 ml-0.5 sm:ml-1">A partnership can be functional in 5–7 working days post-PAN issuance.</span>
            </p>
          </div>
        </div>

        {/* INVESTMENT SETUP */}
        <div className="group bg-card/50 dark:bg-card/20 border border-border p-6 sm:p-10 md:p-14 rounded-xl sm:rounded-2xl md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 text-justify">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">Investment Setup</h2>
              <p className="text-muted-foreground font-medium mt-1 text-sm sm:text-base px-2 sm:px-0">Lower entry barrier with zero government registrar costs.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { label: "Compliance & Notary", price: "₹2,000 – ₹4,000", desc: "Covers the cost of professional deed drafting and mandatory notarization services." },
              { label: "Stamp Duty", price: "Variable", desc: "State-specific costs calculated based on the total capital contribution of the firm." },
              { label: "FULL-SERVICE PACKAGE", price: "₹8,000 – ₹12,000", desc: "End-to-end setup including PAN, GST registration, and bank account facilitation." }
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
            <p>Investment amounts focus on mandatory legal executions; bank minimum balances are separate.</p>
          </div>
        </div>

        {/* TIMELINE SECTION */}
        <div className="text-justify bg-card/50 dark:bg-card/20 p-4 sm:p-8 border border-border rounded-xl sm:rounded-xl shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight">Timeline</h1>
          </div>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-lg">
            <p className="text-foreground/90 font-bold text-lg sm:text-xl">Estimated Duration: 5 to 7 Working Days</p>
            <p className="text-foreground/80 leading-relaxed font-medium">
              The timeline is optimized for speed. Drafting and notarization occur within <strong>1–2 days</strong>. The primary wait time is for <strong>PAN processing (5–7 days)</strong> and bank activation, allowing you to start operations almost immediately after tax anchoring.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};