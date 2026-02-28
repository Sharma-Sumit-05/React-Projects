import { Users, FileSignature, ShieldAlert, Clock, User, Landmark, CheckCircle2, ShieldCheck, Scale, Award } from "lucide-react";

export const OnePersonCompanyRegistration = () => {
  return (
    <section className="relative min-h-screen font-sans bg-slate-50/50 overflow-x-hidden">
      {/* Background Image - Adjusted opacity and z-index */}
      <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none">
        <img
          className="max-h-[80vh] w-auto object-contain opacity-5 md:opacity-10 mt-20"
          src="/Logo/logo.png"
          alt="Arostat Background"
        />
      </div>

      {/* Hero Section - Added max-width and padding */}
      <div className="relative z-10 flex flex-col items-center mx-auto pt-24 md:pt-32 pb-16 md:pb-20 px-6 max-w-5xl text-center">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-none">
          One Person Company Registration
        </h1>

        <div className="mt-8 md:mt-10 max-w-3xl">
          <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium">
            For the visionary solo founder, the 
            <span className="text-slate-900 italic"> One Person Company (OPC) </span>
          represents the ultimate fusion of absolute autonomy and corporate fortification. This unique vehicle empowers you to command 100% ownership while operating under the protective shield of a Private Limited entity. By choosing an OPC, you establish a structure that protects your personal assets and builds institutional credibility, all without the necessity of a secondary shareholder.
          </p>
        </div>
        
        <div className="mt-12 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em]">Explore Details</span>
          <div className="w-px h-12 bg-blue-800/40"></div>
        </div>
      </div>

      {/* Main Content Container - Added max-w-7xl to stop it looking weird on wide screens */}
      <div className="relative z-10 mx-auto px-6 pb-24 max-w-7xl space-y-12">

        {/* Strategic Overview */}
        <div className="group bg-white/70 backdrop-blur-md border border-white/50 p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl shadow-slate-200/60 transition-all hover:shadow-blue-100/50">
          <div className="flex items-center gap-6 mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight group-hover:underline decoration-blue-600 underline-offset-4">
              Strategic Overview
            </h2>
          </div>
          <div className="max-w-4xl">
            <p className="text-slate-600 leading-relaxed text-base md:text-lg text-justify">
              For the visionary founder, the One Person Company (OPC) represents the ultimate fusion of absolute autonomy and corporate fortification. This specialized vehicle empowers you to command 100% ownership while operating under the protective shield of a Private Limited entity. Introduced under the Companies Act, 2013, the OPC framework was engineered to bridge the gap between individual passion and the organized corporate sector, allowing solo architects to scale with institutional credibility
            </p>
          </div>
        </div>

        {/* Process Section */}
<div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Incorporation Journey</h2>
    <p className="text-slate-500 font-medium mt-1 italic">A centralized, high-velocity digital incorporation process.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
    {[
      { 
        n: "01", 
        t: "Identity Security", 
        d: "Obtain a Class 3 Digital Signature Certificate (DSC) for the sole director to authorize all statutory electronic filings." 
      },
      { 
        n: "02", 
        t: "Director Credentialing", 
        d: "Secure a Director Identification Number (DIN) through the integrated SPICe+ portal for unified solo governance." 
      },
      { 
        n: "03", 
        t: "Brand Reservation", 
        d: "File for a unique company name via the RUN-OPC portal, ensuring compliance with MCA naming conventions." 
      },
      { 
        n: "04", 
        t: "Charter Composition", 
        d: "Draft the Memorandum of Association (MOA) and Articles of Association (AOA) to define the company’s structural DNA." 
      },
      { 
        n: "05", 
        t: "SPICe+ Integration", 
        d: "Simultaneously apply for Incorporation, PAN, TAN, GSTIN, and EPFO/ESIC through the unified SPICe+ interface." 
      },
      { 
        n: "06", 
        t: "Corporate Activation", 
        d: "Obtain the official Certificate of Incorporation (COI) from the Registrar, marking your entity’s legal birth." 
      }
    ].map((step, i) => (
      <div key={i} className="relative pl-12 text-justify">
        <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">
          {step.n}
        </span>
        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{step.t}</h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          {step.d}
        </p>
      </div>
    ))}
  </div>
</div>

        {/* Roadmap & Document Module */}
<div className="group bg-white/80 backdrop-blur-md border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
  {/* Step-by-Step Incorporation Section */}
  <div className="p-8 md:p-14 border-b border-slate-100">
    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
      <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
      Corporate Activation Roadmap
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { n: "01", t: "Identity & DSC", d: "Acquire a Class 3 Digital Signature Certificate to authorize digital filings." },
        { n: "02", t: "Name Reservation", d: "Secure your brand identity through the MCA's RUN-OPC statutory interface." },
        { n: "03", t: "Charter Drafting", d: "Compose the MOA and AOA to define the company's DNA and solo-governance." },
        { n: "04", t: "Final Activation", d: "Submit the SPICe+ form to receive your COI, PAN, and TAN simultaneously." }
      ].map((step, i) => (
        <div key={i} className="space-y-2">
          <span className="text-amber-600 font-black text-xs tracking-widest uppercase">{step.n}</span>
          <h4 className="font-bold text-slate-900">{step.t}</h4>
          <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Documentation Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50/50">
    {/* Founder Section */}
    <div className="p-8 md:p-14 border-b md:border-b-0 md:border-r border-slate-100">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Users className="w-5 h-5 text-amber-600" /> Founder & Nominee Credentials
      </h3>
      <ul className="space-y-4">
        {[
          "Founder’s PAN Card (Mandatory)",
          "Aadhaar, Passport, or Voter ID",
          "Recent Bank Statement or Utility Bill",
          "Nominee Consent (Form INC-3)",
          "High-Resolution Passport Photographs"
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
          </li>
        ))}
      </ul>
    </div>

    {/* Office & Charter Section */}
    <div className="p-8 md:p-14">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <FileSignature className="w-5 h-5 text-amber-600" /> Entity & Office Evidence
      </h3>
      <ul className="space-y-4">
        {[
          "Memorandum of Association (MOA)",
          "Articles of Association (AOA)",
          "Registered Office Proof (Rent/Sale Deed)",
          "Owner’s No-Objection Certificate (NOC)",
          "Specimen Signature of Sole Director"
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Footer Status Card */}
  <div className="px-10 py-6 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
    <p className="text-sm font-medium opacity-80 italic flex items-center gap-2">
      <ShieldAlert className="w-4 h-4 text-amber-500" />
      Pro-Tip: Ensure the Nominee is an Indian resident and a natural person to meet MCA criteria.
    </p>
    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm shrink-0">
      <Clock className="w-4 h-4" /> 7-12 Working Days
    </div>
  </div>
</div>

        {/* Investment Setup */}
       <div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8">
    Capital & Compliance Architecture
  </h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    <div className="space-y-6">
      <p className="text-slate-600 leading-relaxed text-base md:text-lg text-justify">
        The fiscal investment for a <span className="text-slate-900 font-bold">One Person Company (OPC)</span> is strategically tiered based on your 
        <span className="text-slate-900 font-bold"> Authorized Share Capital</span> and state-mandated duties. 
        Our structure ensures that your solo-corporate entity is launched with full compliance, integrating all necessary federal and state-level registrations into a single professional engagement.
      </p>
      
      <div className="flex flex-wrap gap-3">
        <div className="px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-700 text-sm font-bold">
          MCA Statutory Filings
        </div>
        <div className="px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-700 text-sm font-bold">
          Integrated PAN/TAN/GST
        </div>
      </div>
    </div>

    <div className="space-y-4 bg-slate-50/80 p-6 rounded-3xl border border-slate-100">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h4 className="font-bold text-slate-900">Statutory & Stamp Duty</h4>
          <p className="text-sm text-slate-500">Variables depend on your chosen capital slab and the specific stamp laws of your state of incorporation.</p>
        </div>
      </div>
      <div className="h-px bg-slate-200 w-full"></div>
      <div className="flex justify-between items-start gap-4">
        <div>
          <h4 className="font-bold text-slate-900">Professional Advisory Fee</h4>
          <p className="text-sm text-slate-500">Includes comprehensive drafting of Charters (MOA/AOA), DSC procurement, and end-to-end ROC coordination.</p>
        </div>
        <div className="text-right shrink-0">
          <span className="text-xs text-slate-400 uppercase font-black tracking-tighter">Est. Starting</span>
          <p className="text-lg font-black text-slate-900">₹10,000+</p>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Strategic Advantage - Responsive Grid Fix */}
<div className="group bg-card border border-border p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
    <div>
      <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight italic">Strategic Advantage</h2>
      <p className="text-foreground/60 font-medium mt-1">Transitioning from individual venture to corporate entity.</p>
    </div>
    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 shrink-0">
      <ShieldCheck className="w-4 h-4 text-primary" />
      <span className="text-primary font-bold text-xs uppercase tracking-widest">Corporate Fortification</span>
    </div>
  </div>

  {/* Grid: Optimized for OPC specific benefits */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 relative">
    <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-border z-0"></div>

    {[
      { 
        tag: "Asset Protection", 
        title: "Limited Liability", 
        val: "Personal Safety", 
        desc: "Strictly separates personal wealth from business debt, insulating your private assets." 
      },
      { 
        tag: "Legal Status", 
        title: "Separate Entity", 
        val: "Independent Power", 
        desc: "Own property, enter high-value contracts, and litigate in the company’s unique name." 
      },
      { 
        tag: "Legacy", 
        title: "Perpetual Existence", 
        val: "Nominee Driven", 
        desc: "Ensures business continuity beyond the owner through a legally mandated nominee structure." 
      },
      { 
        tag: "Financial Reach", 
        title: "Capital Access", 
        val: "Bank Preferred", 
        desc: "Gain superior leverage for corporate loans and venture capital compared to solo firms." 
      },
      { 
        tag: "Tax Efficiency", 
        title: "Fiscal Optimization", 
        val: "Profit Shield", 
        desc: "Access corporate tax deductions and benefits reserved for registered entities." 
      }
    ].map((item, i) => (
      <div key={i} className="relative z-10 group/item">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-card border-4 border-background rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 shadow-sm group-hover/item:border-primary transition-all duration-300">
          <span className="text-primary font-black text-xl md:text-2xl">{i + 1}</span>
        </div>
        <h4 className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2">{item.tag}</h4>
        <h3 className="text-lg md:text-xl font-black text-foreground mb-2 leading-tight">{item.title}</h3>
        <p className="text-foreground/60 text-xs md:text-sm leading-relaxed mb-4">{item.desc}</p>
        <div className="inline-flex items-center px-3 py-1 bg-background border border-border rounded-lg text-[10px] font-bold text-foreground/70 uppercase">{item.val}</div>
      </div>
    ))}
  </div>

  {/* Footer Action Card */}
  <div className="mt-16 p-6 md:p-8 bg-foreground text-background rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
    <div className="flex items-center gap-4 text-left">
      <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center shrink-0">
        <Award className="text-primary-foreground" size={24} />
      </div>
      <div>
        <p className="font-bold text-lg">Command Institutional Trust</p>
        <p className="text-sm opacity-80 mt-1 italic">Corporates prefer B2B contracts with OPCs over unregistered proprietorships.</p>
      </div>
    </div>
    <button className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-2xl font-black hover:scale-105 transition-all duration-300">
      Incorporate Your Solo Venture
    </button>
  </div>
</div>
      </div>
    </section>
  );
};