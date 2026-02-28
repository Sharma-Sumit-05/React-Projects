import { Users, FileSignature, ShieldAlert, Clock, User, Landmark, CheckCircle2, Zap } from "lucide-react";

export const UnregisteredPartnership = () => {
  return (
    <section className="relative min-h-screen font-sans bg-slate-50/50 overflow-x-hidden">
      {/* 1. Background Watermark - Adjusted z-index and opacity for legibility */}
      <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none">
        <img
          className="max-h-[80vh] w-auto object-contain opacity-5 md:opacity-10 mt-20"
          src="/Logo/logo.png"
          alt="Arostat Background"
        />
      </div>

      {/* 2. Hero Section - Responsive Typography */}
      <div className="relative z-10 flex flex-col items-center mx-auto pt-24 md:pt-32 pb-16 md:pb-20 px-6 max-w-5xl text-center">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-none">
          Unregistered <br className="hidden md:block" /> Partnership
        </h1>

        <div className="mt-8 md:mt-10 max-w-3xl">
          <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium">
            In the Indian legal landscape, an
            <span className="text-slate-900 italic font-bold"> Unregistered Partnership </span>
            remains a valid commercial arrangement, offering maximum flexibility. While formation is effortless, this structure introduces specific procedural constraints. It is a model chosen for its speed and privacy.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em]">Explore Details</span>
          <div className="w-px h-12 bg-blue-800/40"></div>
        </div>
      </div>

      {/* 3. Main Content Wrapper - Max-width keeps it readable on large screens */}
      <div className="relative z-10 mx-auto px-6 pb-24 max-w-7xl space-y-12 md:space-y-16">
        
        {/* Strategic Overview */}
        <div className="group bg-white/70 backdrop-blur-md border border-white/50 p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl shadow-slate-200/60 transition-all hover:shadow-blue-100/50">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8 group-hover:underline decoration-blue-600 underline-offset-4 transition-all">
            Strategic Overview
          </h2>
          <div className="max-w-4xl space-y-6">
            <p className="text-xl md:text-2xl font-bold text-slate-800 leading-tight tracking-tight text-justify">
              The most accessible gateway to the Indian market, designed for speed and total autonomy.
            </p>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed text-justify">
              Establishing an unregistered firm is a journey of mutual consent. It begins with the <span className="text-blue-600 font-semibold">drafting of a Partnership Deed—</span> the master document that defines your profit-sharing ratios. Once signed and notarized on appropriate stamp paper, you move to tax anchoring via a Firm-specific PAN, followed by commercial activation.
            </p>
          </div>
        </div>

        {/* Process Section - Responsive Grid */}
        <div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Process</h2>
            <p className="text-slate-500 font-medium mt-1 italic">"Contractual Activation" journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { n: "01", t: "Covenant Design", d: "Negotiate and codify terms into a comprehensive Partnership Deed." },
              { n: "02", t: "Legal Execution", d: "Formalize on state-specific non-judicial stamp paper with notarization." },
              { n: "03", t: "Fiscal Identity", d: "Secure a dedicated PAN in the firm's name for tax identity." },
              { n: "04", t: "Commercial Launch", d: "Activate banking and commence operations without state registrar filing." }
            ].map((step, i) => (
              <div key={i} className="relative pl-12 text-justify">
                <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">{step.n}</span>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{step.t}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Activation & Docs Card */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="p-8 md:p-14 border-b border-slate-100">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
              The 4-Step Activation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { n: "01", t: "Covenant", d: "Draft roles and profit ratios." },
                { n: "02", t: "Execution", d: "Sign on stamp paper with notary." },
                { n: "03", t: "Tax Identity", d: "Apply for Firm-specific PAN." },
                { n: "04", t: "Banking", d: "Open current account with Deed." }
              ].map((step, i) => (
                <div key={i} className="space-y-2 group/step">
                  <span className="text-amber-600 font-black text-xs tracking-widest uppercase">{step.n}</span>
                  <h4 className="font-bold text-slate-900 group-hover:underline decoration-amber-500 underline-offset-4 transition-all">{step.t}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50/50">
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-600" /> Partner Credentials
              </h3>
              <ul className="space-y-4">
                {["Partner PAN Cards", "Aadhaar / Voter ID", "Passport Photos", "Signed Declarations"].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileSignature className="w-5 h-5 text-amber-600" /> Entity Evidence
              </h3>
              <ul className="space-y-4">
                {["Notarized Deed", "Firm PAN Card", "Electricity Bill", "Rent Agreement & NOC"].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-10 py-6 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm font-medium opacity-80 italic flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-500" />
              Pro-Tip: Ensure your Deed is printed on correct state-specific Stamp Duty.
            </p>
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm shrink-0">
              <Clock className="w-4 h-4" /> 5-7 Working Days
            </div>
          </div>
        </div>

        {/* Identity & Address Proofs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white/50 border border-slate-200 p-8 md:p-12 rounded-[2.5rem] shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" /> Identity Proofs
            </h3>
            <ul className="space-y-4">
              {["Owner's PAN (Mandatory)", "Aadhaar or Passport", "Recent Photos"].map((doc, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {doc}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/50 border border-slate-200 p-8 md:p-12 rounded-[2.5rem] shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-blue-600" /> Business Address
            </h3>
            <ul className="space-y-4">
              {["Electricity / Water Bill", "Rent Agreement", "NOC from Owner"].map((doc, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Investment Setup */}
        <div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm transition-all text-justify">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Investment Setup</h2>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg max-w-4xl">
            Experience a lower entry barrier with zero government registration costs. Since this model remains unregistered, your setup capital is directed toward mandatory Stamp Duty and notarization. These costs vary across India based on state laws.
          </p>
        </div>

        {/* Operational Velocity - Horizontal Timeline for Large Screens */}
        <div className="bg-card border border-border p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-black text-foreground italic">Operational Velocity</h2>
              <p className="text-foreground/60 font-medium mt-1">A streamlined roadmap to market entry.</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 shrink-0">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Est. 7 Working Days</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-border z-0"></div>
            {[
              { phase: "Phase 01", title: "Covenant Design", days: "1–2 Days", desc: "Drafting and notarization on stamp paper." },
              { phase: "Phase 02", title: "Fiscal Identity", days: "5–7 Days", desc: "Processing of the Firm's PAN card." },
              { phase: "Phase 03", title: "Commercial Live", days: "2–5 Days", desc: "Bank KYC and current account activation." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 group/item text-left">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-card border-4 border-background rounded-3xl flex items-center justify-center mb-6 group-hover:border-primary transition-all duration-300 shadow-sm">
                  <span className="text-primary font-black text-xl md:text-2xl">{i + 1}</span>
                </div>
                <h4 className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2">{item.phase}</h4>
                <h3 className="text-lg md:text-xl font-black text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/60 text-xs md:text-sm mb-4 leading-relaxed">{item.desc}</p>
                <div className="inline-flex items-center px-3 py-1 bg-background border border-border rounded-lg text-[10px] font-bold text-foreground/70">{item.days}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 md:p-8 bg-foreground text-background rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4 text-left">
              <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                <Zap className="text-primary-foreground" size={24} />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">Ready for Market</p>
                <p className="text-sm opacity-80 mt-1 italic">Legally operational once Deed is notarized and PAN is issued.</p>
              </div>
            </div>
            <button className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-2xl font-black hover:opacity-90 active:scale-95 transition-all">
              Accelerate Now
            </button>
          </div>
        </div>

        {/* Strategic Edge - 3-Column Grid */}
        <div className="space-y-12 py-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black text-foreground italic">Strategic Edge</h2>
            <p className="text-foreground/60 mt-2 font-medium">Advantages of a lean collaborative model.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Rapid Activation", d: "Bypass gov processing; execute deed and start instantly." },
              { t: "Lean Capital Entry", d: "Most economical structure, eliminating state registrar fees." },
              { t: "Private Governance", d: "Absolute confidentiality of your partnership terms." },
              { t: "Internal Agility", d: "Modify roles via mutual consent without statutory approvals." },
              { t: "Compliance Neutral", d: "Zero requirement for annual ROC filings." },
              { t: "Fiscal Identity", d: "Full capacity to secure PAN, bank accounts, and GST." }
            ].map((item, i) => (
              <div key={i} className="group bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-bold text-foreground mb-3 text-lg group-hover:text-primary transition-colors">{item.t}</h3>
                <p className="text-foreground/60 leading-relaxed text-xs md:text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};