import { Users, FileSignature, ShieldAlert, Clock, CheckCircle2, ShieldCheck, Scale, Zap } from "lucide-react";

export const LLPRegistration = () => {
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
          LLP Registration
        </h1>

        <div className="mt-8 md:mt-10 max-w-3xl">
          <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium text-justify">
            Transform your entrepreneurial vision into a robust legal reality through 
            <span className="text-slate-900 italic"> Limited Liability Partnership (LLP) Registration </span>
           By harmonizing the operational flexibility of a partnership with the corporate shield of limited liability, an LLP provides the ideal framework for modern growth. Our process meticulously navigates Digital Signature (DSC) acquisition, name reservation, and the drafting of a bespoke LLP Agreement, ensuring your entity is built on a foundation of structural integrity.
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
              In the evolving Indian corporate landscape, the Limited Liability Partnership (LLP) stands as the premier hybrid vehicle for modern enterprise. It ingeniously fuses the operational agility of a traditional partnership with the robust asset protection of a private limited company. By choosing an LLP, you establish a structure that scales with your ambition—offering a transparent governance framework while insulating partners from personal liability. It is the definitive choice for professionals seeking a sophisticated, yet lean, commercial identity.
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Process</h2>
            <p className="text-slate-500 font-medium mt-1 italic">The transition to a Limited Liability Partnership is a digitally-driven statutory process governed by the Ministry of Corporate Affairs (MCA). We facilitate this evolution through a six-phase activation journey:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
            {[
              { n: "01", t: "Digital Identity Authentication", d: "Before any statutory filing, each designated partner must secure a Class 3 Digital Signature Certificate (DSC). This serves as the primary cryptographic tool for verifying and authorizing all electronic submissions throughout the firm’s lifecycle." },
              { n: "02", t: "DIN Acquisition & Credentialing", d: "Partners who do not hold a Director Identification Number (DIN) undergo a formal credentialing process. This unique identifier is mandatory for all individuals steering the governance of the LLP and is integrated into the primary incorporation filing." },
              { n: "03", t: "Strategic Name Reservation", d: "Utilizing the RUN-LLP (Reserve Unique Name) portal, we navigate the selection of your brand identity. This phase ensures your proposed name is both distinctive and compliant with Trademark laws and MCA guidelines to prevent future legal friction." },
              { n: "04", t: "Statutory FiLLiP Submission", d: "The core of the incorporation is the FiLLiP (Form for Incorporation of Limited Liability Partnership). This comprehensive filing includes the firm’s structural blueprint, registered office verification, and the formal consent of all participating partners." },
              { n: "05", t: "The Charter of Governance (LLP Agreement)", d: "Post-incorporation, the internal architecture is finalized via Form 3. Within 30 days, we file the LLP Agreement—a vital legal instrument that defines the mutual rights, duties, capital contributions, and profit-sharing ratios that will govern the partnership." },
              { n: "06", t: "Issuance of the LLPIN", d: "Upon successful validation by the Registrar of Companies (RoC), your entity is granted a Certificate of Incorporation. This document contains your unique LLPIN (Limited Liability Partnership Identification Number), marking the official birth of your legally recognized business entity." }
            ].map((step, i) => (
              <div key={i} className="relative pl-12 text-justify">
                <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">{step.n}</span>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{step.t}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">{step.d}</p>
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
      Incorporation Milestone
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { n: "01", t: "Identity & DIN", d: "Secure Class 3 DSC and obtain Director Identification Numbers for all partners." },
        { n: "02", t: "Name Approval", d: "Reserve a unique brand identity through the MCA's RUN-LLP statutory portal." },
        { n: "03", t: "FiLLiP Filing", d: "Submit the digital incorporation charter with office and partner credentials." },
        { n: "04", t: "LLP Agreement", d: "Finalize and file the governance charter defining mutual rights and duties." }
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
    {/* Partners Section */}
    <div className="p-8 md:p-14 border-b md:border-b-0 md:border-r border-slate-100">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Users className="w-5 h-5 text-amber-600" /> Stakeholder Credentials
      </h3>
      <ul className="space-y-4">
        {[
          "PAN Card (Mandatory for Indians)",
          "Passport (Foreign Nationals)",
          "Aadhaar, Voter ID, or DL",
          "Digital Signature (Class 3)",
          "Recent Passport Photographs"
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
          </li>
        ))}
      </ul>
    </div>

    {/* Entity Section */}
    <div className="p-8 md:p-14">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <FileSignature className="w-5 h-5 text-amber-600" /> Registered Office Evidence
      </h3>
      <ul className="space-y-4">
        {[
          "Latest Utility Bill (Elec/Water)",
          "Registered Rent Agreement",
          "Property Ownership Proof",
          "Landlord's No-Objection (NOC)",
          "Notarized LLP Agreement"
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Footer Pro-Tip */}
  <div className="px-10 py-6 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
    <p className="text-sm font-medium opacity-80 italic flex items-center gap-2">
      <ShieldAlert className="w-4 h-4 text-amber-500" />
      Pro-Tip: Use a distinct business name to ensure 100% success in the RUN-LLP reservation phase.
    </p>
    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm shrink-0">
      <Clock className="w-4 h-4" /> 10-15 Working Days
    </div>
  </div>
</div>

        {/* Investment Setup */}
<div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8">
    Investment Architecture
  </h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    <div className="space-y-6">
      <p className="text-slate-600 leading-relaxed text-base md:text-lg text-justify">
        The fiscal setup for an LLP is structured around your entity's 
        <span className="text-slate-900 font-bold"> Total Contribution</span>. 
        Unlike traditional models, the investment is bifurcated into statutory MCA filings and state-specific mandates. 
        This ensures a transparent, scalable entry into the Indian market.
      </p>
      
      <div className="flex flex-wrap gap-3">
        <div className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-xl text-blue-700 text-sm font-bold">
          Statutory MCA Fees
        </div>
        <div className="px-4 py-2 bg-amber-50 border border-amber-100 rounded-xl text-amber-700 text-sm font-bold">
          State Stamp Duty
        </div>
      </div>
    </div>

    <div className="space-y-4 bg-slate-50/80 p-6 rounded-3xl border border-slate-100">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h4 className="font-bold text-slate-900">Government Filing Fees</h4>
          <p className="text-sm text-slate-500">Calculated based on the authorized capital contribution slabs as per MCA norms.</p>
        </div>
      </div>
      <div className="h-px bg-slate-200 w-full"></div>
      <div className="flex justify-between items-start gap-4">
        <div>
          <h4 className="font-bold text-slate-900">State-Specific Stamp Duty</h4>
          <p className="text-sm text-slate-500">Mandatory duty on the LLP Agreement, varying significantly based on the state of registration.</p>
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
      <p className="text-foreground/60 font-medium mt-1">Why modern enterprises choose the LLP framework.</p>
    </div>
    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 shrink-0">
      <ShieldCheck className="w-4 h-4 text-primary" />
      <span className="text-primary font-bold text-xs uppercase tracking-widest">Corporate Shielding</span>
    </div>
  </div>

  {/* Grid: 1 col on mobile, 2 on tablet, 5 on lg desktop */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 relative">
    <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-border z-0"></div>

    {[
      { 
        tag: "Liability Guard", 
        title: "Asset Protection", 
        val: "Limited Risk", 
        desc: "Personal assets are legally insulated from business liabilities and partner misconduct." 
      },
      { 
        tag: "Legal Persona", 
        title: "Distinct Entity", 
        val: "Sovereign Rights", 
        desc: "The LLP exists independently, capable of owning property and entering contracts in its own name." 
      },
      { 
        tag: "Capital Entry", 
        title: "Zero Min. Capital", 
        val: "Lean Start", 
        desc: "No mandatory paid-up capital requirement, offering a lower entry barrier than companies." 
      },
      { 
        tag: "Governance", 
        title: "Direct Control", 
        val: "Agile Mgmt", 
        desc: "Partners manage operations directly without the rigid board-structure of a private limited." 
      },
      { 
        tag: "Tax Efficiency", 
        title: "Fiscal Edge", 
        val: "DDT Exempt", 
        desc: "Profits are taxed at a flat rate with zero Dividend Distribution Tax on shared surpluses." 
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
        <Zap className="text-primary-foreground" size={24} />
      </div>
      <div>
        <p className="font-bold text-lg">Achieve Perpetual Succession</p>
        <p className="text-sm opacity-80 mt-1 italic">An LLP remains a living entity despite changes in partners or ownership.</p>
      </div>
    </div>
    <button className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-2xl font-black hover:opacity-90 transition-all active:scale-95">
      Initiate Incorporation
    </button>
  </div>
</div>
      </div>
    </section>
  );
};