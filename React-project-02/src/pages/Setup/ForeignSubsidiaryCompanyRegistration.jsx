import { Users, ShieldAlert, Clock, CheckCircle2, FileText, Scale, Gavel, Globe, ShieldCheck, Building2, Landmark, FileCheck, Network, AlertCircle, Banknote, Percent, FileStack, ClipboardCheck, RefreshCw, CreditCard} from "lucide-react";

export const ForiegnSubsidiaryCompanyRegistration = () => {
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
Foriegn Subsidiary Company Registration
        </h1>

        <div className="mt-8 md:mt-10 max-w-3xl">
          <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium">
      A Foreign Subsidiary is a powerful vehicle for international expansion, defined as an Indian entity where a foreign parent corporation holds at least 51% (up to 100%) of the equity. This structure allows global enterprises to establish a separate legal identity in India, providing a robust framework to hire local talent, own intellectual property, and execute a long-term market strategy while retaining absolute ownership and management control.
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
A Foreign Subsidiary is a robust corporate vehicle that allows global enterprises to establish a distinct legal presence in India. Defined as an Indian company where an overseas body corporate holds 50% or more of the share capital, it offers international investors absolute ownership and management control. The setup is strictly governed by the Companies Act, 2013, while capital inflows are regulated by FEMA (Non-Debt Instruments) Rules, 2019 and the latest FDI Policy issued by the DPIIT, ensuring a transparent and compliant market entry.
             </p>
          </div>
        </div>

                {/* Why */}
<div className="group bg-card border border-border p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
    <div>
      <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight italic">Eligibility Framework</h2>
      <p className="text-foreground/60 font-medium mt-1">Foundational requirements for establishing your Indian subsidiary.</p>
    </div>
    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 shrink-0">
      <Globe className="w-4 h-4 text-primary" />
      <span className="text-primary font-bold text-xs uppercase tracking-widest">Global Entry</span>
    </div>
  </div>

  {/* Grid: 1 col on mobile, 2 on tablet, 5 on lg desktop */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 relative">
    <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-border z-0"></div>

    {[
      { 
        tag: "Shareholding", 
        title: "Foreign Control", 
        val: "> 50% Equity", 
        desc: "Majority or 100% of share capital must be held by a foreign body corporate or individual." 
      },
      { 
        tag: "Directorship", 
        title: "Resident Director", 
        val: "Min. 2 Directors", 
        desc: "Requires at least two directors, one of whom must have stayed in India for ≥ 182 days." 
      },
      { 
        tag: "Structure", 
        title: "Shareholders", 
        val: "Min. 2 Members", 
        desc: "Must have at least two shareholders; the overseas parent entity can be the primary member." 
      },
      { 
        tag: "Compliance", 
        title: "Registered Office", 
        val: "Local Presence", 
        desc: "The subsidiary must maintain a physical, verifiable office address within Indian territory." 
      },
      { 
        tag: "FDI Policy", 
        title: "Sector Entry", 
        val: "DPIIT Routes", 
        desc: "Activities must fall under 100% Automatic Route or obtain specific Government approval." 
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
        <ShieldCheck className="text-primary-foreground" size={24} />
      </div>
      <div>
        <p className="font-bold text-lg">Incorporate Your Global Vision</p>
        <p className="text-sm opacity-80 mt-1 italic">Foreign Subsidiaries offer the most comprehensive legal shield and ownership control for international MNCs.</p>
      </div>
    </div>
    <button className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-2xl font-black hover:opacity-90 transition-all">
      Start FDI Filing
    </button>
  </div>
</div>

        {/* Process Section */}
<div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Incorporation Roadmap</h2>
    <p className="text-slate-500 font-medium mt-1 italic">The digital-first process for establishing a Foreign Subsidiary in India.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
    {[
      { 
        n: "01", 
        t: "Digital Signatures", 
        d: "Obtain DSCs for all proposed directors and subscribers. These are essential for authenticating all online filings on the MCA portal." 
      },
      { 
        n: "02", 
        t: "Name Reservation", 
        d: "Submit unique name proposals via Part A of the SPICe+ form. Usually, names reflecting the global parent are preferred for brand consistency." 
      },
      { 
        n: "03", 
        t: "E-Documentation", 
        d: "Prepare the electronic Memorandum (e-MOA) and Articles of Association (e-AOA) defining the subsidiary's constitution and internal bylaws." 
      },
      { 
        n: "04", 
        t: "Portal Filing", 
        d: "Complete Part B of the SPICe+ form. This single-window application handles incorporation, DIN allotment, and EPFO/ESIC registration." 
      },
      { 
        n: "05", 
        t: "Tax Allotment", 
        d: "Upon submission, the system automatically processes the allotment of PAN and TAN, ensuring the entity is ready for financial operations." 
      },
      { 
        n: "06", 
        t: "COI Issuance", 
        d: "Once the Registrar (ROC) approves the filing, the Certificate of Incorporation is issued, featuring your unique Corporate Identity Number (CIN)." 
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
      <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
      Foreign Subsidiary Checklist
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { n: "01", t: "Parent Charter", d: "Certificate of Incorporation and M&A/By-laws of the foreign body corporate." },
        { n: "02", t: "Board Authority", d: "Resolution from the parent entity authorizing the Indian investment and signatory." },
        { n: "03", t: "Director KYC", d: "ID and Address proofs for at least two directors (one must be Indian resident)." },
        { n: "04", t: "Registered Seat", d: "Indian office address proof via Utility Bill and NOC from the premises owner." }
      ].map((step, i) => (
        <div key={i} className="space-y-2">
          <span className="text-blue-600 font-black text-xs tracking-widest uppercase">{step.n}</span>
          <h4 className="font-bold text-slate-900">{step.t}</h4>
          <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50/50">
    <div className="p-8 md:p-14 border-b md:border-b-0 md:border-r border-slate-100">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Globe className="w-5 h-5 text-blue-600" /> Overseas Parent Dossier
      </h3>
      <ul className="space-y-4">
        {[
          "Apostilled Certificate of Incorporation", 
          "Charter Documents (MOA & AOA equivalents)", 
          "Authorized Signatory's Passport/ID Copy", 
          "Address Proof of the Registered Office abroad",
          "Board Resolution for Indian Incorporation"
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> {doc}
          </li>
        ))}
      </ul>
    </div>
    <div className="p-8 md:p-14">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Building2 className="w-5 h-5 text-blue-600" /> Indian Subsidiary Setup
      </h3>
      <ul className="space-y-4">
        {[
          "PAN of the proposed Indian Directors", 
          "Address Proof (Aadhaar/Voter ID/Driving License)", 
          "Passport Size Photos of all Directors", 
          "Digital Signature Certificate (DSC) for all",
          "NOC & Utility Bill for Indian Office"
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> {doc}
          </li>
        ))}
      </ul>
    </div>
  </div>
  <div className="px-10 py-6 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
    <p className="text-sm font-medium opacity-80 italic flex items-center gap-2">
      <ShieldCheck className="w-4 h-4 text-blue-400" />
      Note: Foreign documents must be Apostilled or Notarized in the home country.
    </p>
    <div className="flex items-center gap-2 text-blue-400 font-bold text-sm shrink-0">
      <FileText className="w-4 h-4" /> Compliant with FEMA & Companies Act
    </div>
  </div>
</div>
{/* post incorporation rbi and fema compliance */}
<div className="group bg-slate-900 border border-slate-800 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl transition-all duration-500">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
    <div>
      <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight italic">Post-Incorporation RBI & FEMA</h2>
      <p className="text-slate-400 font-medium mt-1 uppercase tracking-widest text-xs">Mandatory Compliance for Foreign Capital</p>
    </div>
    <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 shrink-0">
      <ShieldAlert className="w-4 h-4 text-blue-400" />
      <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">Regulatory Deadlines</span>
    </div>
  </div>

  {/* Grid: 3 specialized columns for RBI/FEMA flow */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
    
    {/* Step 1: Banking */}
    <div className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors group/card">
      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
        <Landmark className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">Capital Injection</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        Open the corporate bank account in the subsidiary's name to receive the <strong>Foreign Direct Investment (FDI)</strong> from the parent entity.
      </p>
      <div className="inline-flex items-center px-3 py-1 bg-slate-900 border border-slate-700 rounded-lg text-[10px] font-bold text-blue-400 uppercase tracking-tighter">Bank Account Setup</div>
    </div>

    {/* Step 2: RBI Reporting */}
    <div className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors group/card">
      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
        <FileCheck className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">FC-GPR Filing</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        Report share allotment via <strong>Form FC-GPR</strong> on the RBI FIRMS portal within <strong>30 days</strong>, as per FEMA (Non-Debt Instruments) Rules, 2019.
      </p>
      <div className="inline-flex items-center px-3 py-1 bg-slate-900 border border-slate-700 rounded-lg text-[10px] font-bold text-blue-400 uppercase tracking-tighter">FIRMS Portal Compliance</div>
    </div>

    {/* Step 3: FOCC Norms */}
    <div className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors group/card">
      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
        <Network className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">Downstream Norms</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        Internal investments in other Indian firms must comply with <strong>FOCC (Foreign Owned or Controlled Company)</strong> guidelines under FEMA.
      </p>
      <div className="inline-flex items-center px-3 py-1 bg-slate-900 border border-slate-700 rounded-lg text-[10px] font-bold text-blue-400 uppercase tracking-tighter">Investment Compliance</div>
    </div>

  </div>

  {/* Footer Disclaimer */}
  <div className="mt-12 p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20">
    <div className="flex items-center gap-4">
      <div className="p-2 bg-blue-600 rounded-lg shrink-0">
        <AlertCircle className="text-white" size={20} />
      </div>
      <p className="text-sm text-slate-300 italic">
        <strong>Critical Note:</strong> Non-compliance with FC-GPR filings within the 30-day window can lead to heavy LSF (Late Submission Fees) or compounding by the Reserve Bank of India.
      </p>
    </div>
  </div>
</div>
{/* Regular and tax compliance */}
<div className="group bg-slate-50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
    <div>
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight italic">Regulatory & Tax Compliance</h2>
      <p className="text-slate-500 font-medium mt-1">Navigating the fiscal landscape for Foreign Subsidiaries in India.</p>
    </div>
    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full border border-emerald-200 shrink-0">
      <Banknote className="w-4 h-4 text-emerald-700" />
      <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Fiscal Governance</span>
    </div>
  </div>

  {/* Grid: 2x2 for clean categorization */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
    
    {/* Tax Framework */}
    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-emerald-500/30 transition-all">
      <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
        <Percent className="w-5 h-5 text-emerald-600" /> Income Tax
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        Taxed as a domestic company at <strong>22% or 25%</strong> (plus surcharge/cess). Specific eligibility under <strong>Section 115BAA/115BAB</strong> can further optimize the effective tax rate.
      </p>
    </div>

    {/* Statutory Filings */}
    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-emerald-500/30 transition-all">
      <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
        <FileStack className="w-5 h-5 text-emerald-600" /> Annual Filings
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        Mandatory submission of financial statements via <strong>Form AOC-4</strong> and annual returns via <strong>Form MGT-7A</strong> with the Ministry of Corporate Affairs (MCA).
      </p>
    </div>

    {/* Audit Standards */}
    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-emerald-500/30 transition-all">
      <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
        <ClipboardCheck className="w-5 h-5 text-emerald-600" /> Audit & Accounting
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        Statutory maintenance of books is required. Accounts must be <strong>audited annually</strong> by a qualified Chartered Accountant as per the Companies Act, 2013.
      </p>
    </div>

    {/* Profit Movement */}
    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-emerald-500/30 transition-all">
      <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
        <RefreshCw className="w-5 h-5 text-emerald-600" /> Profit Repatriation
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        Dividends and royalties can be seamlessly <strong>repatriated abroad</strong> in compliance with FEMA guidelines and the RBI Master Direction on Remittance.
      </p>
    </div>

  </div>

  {/* Footer Compliance Badge */}
  <div className="mt-10 flex items-center justify-between p-6 bg-slate-900 rounded-2xl">
    <div className="flex items-center gap-3">
      <Scale className="text-emerald-400" size={20} />
      <span className="text-white text-sm font-bold tracking-tight">Governed by the Income Tax Act, 1961 & FEMA Regulations.</span>
    </div>
    <div className="hidden md:block text-[10px] text-slate-400 font-bold uppercase tracking-widest">
      Updated for FY 2025-26
    </div>
  </div>
</div>

        {/* Investment Setup */}
<div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight italic">Subsidiary Setup Economics</h2>
    <div className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-800 rounded-xl border border-indigo-200 shrink-0">
      <CreditCard className="w-4 h-4" />
      <span className="font-bold text-xs uppercase tracking-wider">Capital-Linked Costs</span>
    </div>
  </div>

  <p className="text-slate-600 leading-relaxed text-base md:text-lg text-justify max-w-4xl mb-8">
    The cost of establishing a Foreign Subsidiary is primarily determined by the <strong>Authorized Share Capital</strong>. This includes statutory government fees and State-specific <strong>Stamp Duty</strong> on incorporation documents. For global entities, professional fees also account for the complexity of the structure, international document <strong>Apostillation</strong>, and mandatory compliance with <strong>FEMA/RBI guidelines</strong>.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Government Fee</p>
      <p className="text-2xl font-black text-slate-900">Capital-Based</p>
      <p className="text-[10px] text-slate-400 mt-2 font-medium">Includes ROC & Stamp Duty</p>
    </div>
    <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Global Verification</p>
      <p className="text-2xl font-black text-slate-900">Variable</p>
      <p className="text-[10px] text-slate-400 mt-2 font-medium">Apostille & Notarization</p>
    </div>
    <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Professional</p>
      <p className="text-2xl font-black text-slate-900">Scope-Linked</p>
      <p className="text-[10px] text-slate-400 mt-2 font-medium">FDI Policy & Legal Advisory</p>
    </div>
  </div>

  <div className="mt-8 flex items-start gap-3 p-5 bg-slate-900 rounded-2xl shadow-xl">
    <div className="mt-1 p-1.5 bg-indigo-400 rounded-lg">
      <ShieldAlert className="w-4 h-4 text-slate-900" />
    </div>
    <div className="text-sm text-slate-300 leading-relaxed">
      <strong className="text-white">Investor Note:</strong> While initial setup costs cover the Certificate of Incorporation, please budget separately for post-incorporation <strong>RBI/FC-GPR filings</strong>. These are mandatory for foreign capital recognition and are typically quoted based on the complexity of the share allotment.
    </div>
  </div>
</div>

{/* Timeline */}
<div className="p-6 md:p-10 border border-slate-200 rounded-xl bg-white shadow-sm">
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Incorporation Timeline</h2>
    <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 font-bold rounded-full text-sm">
      15 — 20 Working Days
    </span>
  </div>

  <div className="space-y-6">
    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
      Establishing a Foreign Subsidiary is an efficient, digital-first process. This timeline accounts for <strong>global document verification</strong>, Digital Signature (DSC) issuance, and the centralized <strong>SPICe+ incorporation workflow</strong> overseen by the Registrar of Companies (ROC).
    </p>
    
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {[
        { t: "KYC & DSC", d: "3-5 Days" },
        { t: "Name Approval", d: "2-3 Days" },
        { t: "ROC Filing", d: "5-7 Days" },
        { t: "COI Issuance", d: "2-3 Days" }
      ].map((item, i) => (
        <div key={i} className="p-3 border border-slate-100 rounded-xl bg-slate-50/50 text-center">
          <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">{item.t}</p>
          <p className="text-sm font-bold text-slate-800">{item.d}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="mt-6 flex items-center gap-2 p-4 bg-slate-50 rounded-lg border-l-4 border-indigo-400">
    <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
    <span className="text-xs text-slate-500 italic">Processing time may extend if there are delays in obtaining Apostilled documents from the home country or name-related queries from the ROC.</span>
  </div>
</div>
      </div>
    </section>
  );
};