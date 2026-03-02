import { Users, ShieldAlert, Clock, CheckCircle2, FileText, Building2, Landmark, ShieldCheck,Scale} from "lucide-react";

export const TrustRegistration = () => {
  return (
    <section className="relative min-h-screen font-sans bg-slate-50/50 overflow-x-hidden">
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
Trust Registration
        </h1>

        <div className="mt-8 md:mt-10 max-w-3xl">
          <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium">
           A Trust is a time-tested legal framework where a Settlor (owner) transfers assets or property to a Trustee to be managed for the benefit of specific Beneficiaries. While Private Trusts are regulated by the Indian Trusts Act, 1882, Public Charitable Trusts fall under state-specific jurisdictions. This structure is the preferred choice for family estate planning or localized community welfare projects where a flexible, yet legally recognized, governance model is required.
          </p>
        </div>
        
        <div className="mt-12 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em]">Explore Details</span>
          <div className="w-px h-12 bg-blue-800/40"></div>
        </div>
      </div>

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
  A Trust is a time-tested legal framework where a Settlor (owner) transfers assets or property to a Trustee to be managed for the benefit of specific Beneficiaries. While Private Trusts are regulated by the Indian Trusts Act, 1882, Public Charitable Trusts fall under state-specific jurisdictions. This structure is the preferred choice for family estate planning or localized community welfare projects where a flexible, yet legally recognized, governance model is required.
             </p>
          </div>
        </div>

                {/* Why */}
<div className="group bg-card border border-border p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
    <div>
      <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight italic">Why Us</h2>
      <p className="text-foreground/60 font-medium mt-1">Gaining legal recognition and donor trust through registration.</p>
    </div>
    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 shrink-0">
      <ShieldCheck className="w-4 h-4 text-primary" />
      <span className="text-primary font-bold text-xs uppercase tracking-widest">Credibility & Growth</span>
    </div>
  </div>

  {/* Grid: 1 col on mobile, 2 on tablet, 5 on lg desktop */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 relative">
    <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-border z-0"></div>

    {[
      { 
        tag: "Legal Status", 
        title: "Recognized Entity", 
        val: "Legal Identity", 
        desc: "Registration transforms the trust into a recognized legal entity, enabling it to hold assets and enter contracts." 
      },
      { 
        tag: "Fiscal Benefit", 
        title: "Tax Exemptions", 
        val: "12A & 80G", 
        desc: "Registered trusts are eligible for vital tax exemptions and offer tax deductions to their donors." 
      },
      { 
        tag: "Governance", 
        title: "Transparency", 
        val: "High Accountability", 
        desc: "Ensures institutional transparency, making the organization more reliable for government bodies." 
      },
      { 
        tag: "Sustainability", 
        title: "Perpetual Succession", 
        val: "Endless Legacy", 
        desc: "The trust remains operational indefinitely, unaffected by changes or the passing of its founders." 
      },
      { 
        tag: "Safety", 
        title: "Asset Protection", 
        val: "Personal Shield", 
        desc: "Assets are legally ring-fenced under the trust’s name, protecting them from personal liabilities." 
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
        <Landmark className="text-primary-foreground" size={24} />
      </div>
      <div>
        <p className="font-bold text-lg">Empower Your Fundraising</p>
        <p className="text-sm opacity-80 mt-1 italic">Registered trusts find it significantly easier to secure institutional grants, private donations, and CSR funding.</p>
      </div>
    </div>
    <button className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-2xl font-black hover:opacity-90 transition-all">
      Start Registration Now
    </button>
  </div>
</div>

        {/* Process Section */}
<div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Trust Formation Roadmap</h2>
    <p className="text-slate-500 font-medium mt-1 italic">The essential steps for establishing a charitable or private trust in India.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
    {[
      { 
        n: "01", 
        t: "Deed Drafting", 
        d: "Create a comprehensive Trust Deed detailing the Settlor, Trustees, Beneficiaries, and the specific charitable objectives." 
      },
      { 
        n: "02", 
        t: "Stamp Duty", 
        d: "Print the finalized deed on non-judicial stamp paper. Values vary by state and the valuation of the trust property." 
      },
      { 
        n: "03", 
        t: "Sub-Registrar Filing", 
        d: "Present the deed at the local Sub-Registrar's office. Physical presence of the Settlor and two witnesses is mandatory." 
      },
      { 
        n: "04", 
        t: "Registration", 
        d: "Pay the prescribed registration fees. Upon verification, the Registrar issues the officially registered Trust Deed copy." 
      },
      { 
        n: "05", 
        t: "Tax Identity", 
        d: "Apply for the Trust's PAN and TAN cards using the registered deed to enable formal financial operations." 
      },
      { 
        n: "06", 
        t: "Exemption Status", 
        d: "Apply for 12AB and 80G registrations with the Income Tax Department to secure tax-free status for the trust." 
      }
    ].map((step, i) => (
      <div key={i} className="relative pl-12 text-justify">
        <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">
          {step.n}
        </span>
        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{step.t}</h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">{step.d}</p>
      </div>
    ))}
  </div>
</div>

        {/* Roadmap & Document Module */}
<div className="group bg-white/80 backdrop-blur-md border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
  <div className="p-8 md:p-14 border-b border-slate-100">
    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
      <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
      Trust Filing Checklist
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { n: "01", t: "The Instrument", d: "Original Trust Deed drafted on Stamp Paper of appropriate state value." },
        { n: "02", t: "Settlor & Trustees", d: "KYC for the creator and managers (PAN & Aadhaar are mandatory)." },
        { n: "03", t: "Witnesses", d: "Two independent witnesses with valid IDs must be present for registration." },
        { n: "04", t: "Registered Seat", d: "Proof of ownership or a Rent Agreement with a valid owner NOC." }
      ].map((step, i) => (
        <div key={i} className="space-y-2">
          <span className="text-amber-600 font-black text-xs tracking-widest uppercase">{step.n}</span>
          <h4 className="font-bold text-slate-900">{step.t}</h4>
          <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50/50">
    <div className="p-8 md:p-14 border-b md:border-b-0 md:border-r border-slate-100">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Users className="w-5 h-5 text-amber-600" /> Identity & KYC
      </h3>
      <ul className="space-y-4">
        {[
          "Self-attested PAN Cards (Settlor & Trustees)", 
          "ID Proof (Aadhaar / Voter ID / Passport)", 
          "Two Passport Size Photographs each", 
          "Valid ID Proofs of Two Witnesses",
          "Email & Mobile details of all parties"
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
          </li>
        ))}
      </ul>
    </div>
    <div className="p-8 md:p-14">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Building2 className="w-5 h-5 text-amber-600" /> Property & Compliance
      </h3>
      <ul className="space-y-4">
        {[
          "Original Signed Trust Deed", 
          "Utility Bill (Electricity/Water < 2 months old)", 
          "NOC from the Property Owner", 
          "Rent Agreement or Sale Deed of Office",
          "Affidavit for Name Authenticity"
        ].map((doc, i) => (
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
      Note: Physical presence of the Settlor and Witnesses at the Sub-Registrar office is mandatory.
    </p>
    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm shrink-0">
      <FileText className="w-4 h-4" /> State Stamp Duty Applies
    </div>
  </div>
</div>

        {/* Investment Setup */}
<div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Trust Setup Economics</h2>
    <div className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-xl border border-amber-200 shrink-0">
      <Landmark className="w-4 h-4" />
      <span className="font-bold text-xs uppercase tracking-wider">State-Governed Fees</span>
    </div>
  </div>

  <p className="text-slate-600 leading-relaxed text-base md:text-lg text-justify max-w-4xl mb-8">
    The cost of establishing a Trust is primarily driven by <strong>State Stamp Duty</strong>, which typically ranges from <strong>1% to 4%</strong> of the trust property value. Unlike the central MCA fees for companies, Trust registration involves localized costs including a registration fee (₹500–₹5,000) and minor notarization charges. While there are no recurring government maintenance fees, achieving tax-exempt status requires separate 12AB and 80G filings.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Stamp Duty</p>
      <p className="text-2xl font-black text-slate-900">1% — 4%*</p>
      <p className="text-[10px] text-slate-400 mt-2 font-medium">Based on Property Value</p>
    </div>
    <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Registration</p>
      <p className="text-2xl font-black text-slate-900">₹500 — 5k</p>
      <p className="text-[10px] text-slate-400 mt-2 font-medium">State-specific variation</p>
    </div>
    <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Notarization</p>
      <p className="text-2xl font-black text-slate-900">~ ₹500</p>
      <p className="text-[10px] text-slate-400 mt-2 font-medium">Standard Deed verification</p>
    </div>
  </div>

  <div className="mt-8 flex items-start gap-3 p-5 bg-slate-900 rounded-2xl shadow-xl">
    <div className="mt-1 p-1.5 bg-amber-400 rounded-lg">
      <ShieldAlert className="w-4 h-4 text-slate-900" />
    </div>
    <div className="text-sm text-slate-300 leading-relaxed">
      <strong className="text-white">Professional Note:</strong> Statutory fees cover the legal birth of the Trust. However, separate professional consultations are recommended for drafting the <strong>Trust Deed</strong> and securing <strong>12AB/80G tax exemptions</strong> to ensure donor trust and fiscal sustainability.
    </div>
  </div>
</div>

{/* Timeline */}
<div className="p-6 md:p-10 border border-slate-200 rounded-xl bg-white shadow-sm">
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Registration Timeline</h2>
    <span className="px-4 py-1.5 bg-amber-50 text-amber-700 font-bold rounded-full text-sm">
      5 — 10 Working Days
    </span>
  </div>

  <div className="space-y-6">
    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
      The registration of a Trust is a state-level process. This window includes <strong>drafting the trust deed</strong>, <strong>purchasing stamp paper</strong>, and securing an appointment for the physical execution of the document at the local Sub-Registrar office.
    </p>
    
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {[
        { t: "Deed Drafting", d: "1-2 Days" },
        { t: "Stamp Paper", d: "1 Day" },
        { t: "Sub-Registrar", d: "2-5 Days" },
        { t: "Final Copy", d: "1-2 Days" }
      ].map((item, i) => (
        <div key={i} className="p-3 border border-slate-100 rounded-xl bg-slate-50/50 text-center">
          <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">{item.t}</p>
          <p className="text-sm font-bold text-slate-800">{item.d}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="mt-6 flex items-center gap-2 p-4 bg-slate-50 rounded-lg border-l-4 border-amber-400">
    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
    <span className="text-xs text-slate-500 italic">Timeline varies based on state-specific Sub-Registrar workload and document verification speed.</span>
  </div>
</div>
      </div>
    </section>
  );
};