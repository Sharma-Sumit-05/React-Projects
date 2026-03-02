import { Users, ShieldAlert, Clock, Landmark, CheckCircle2, Building2, TrendingUp } from "lucide-react";

export const PublicLimitedCompany = () => {
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
Public Limited Comapny
        </h1>

        <div className="mt-8 md:mt-10 max-w-3xl">
          <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium">
            A 
            <span className="text-slate-900 italic"> Public Limited Company (PLC) </span>
          is the ultimate vehicle for large-scale expansion in India. It allows you to list shares on major stock exchanges, inviting the general public to invest in your vision while protecting your personal assets through limited liability. Ready to take your business to the national stage? Consult with CRSPL experts to navigate the complex incorporation process with ease.
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
           Elevate your business to the national stage with a Public Limited Company (PLC). This elite corporate structure is the preferred vehicle for large-scale enterprises aiming for an Initial Public Offering (IPO) or global expansion. Governed by the Companies Act, 2013, a PLC allows you to raise significant capital from the general public and institutional investors.
             <br />
             To begin, you simply need a minimum of 3 Directors and 7 Shareholders. With no mandatory minimum paid-up capital, you gain the power of a separate legal entity and the safety of limited liability, all while accessing diverse funding avenues like public shares and debentures.
             </p>
          </div>
        </div>

        {/* Process Section */}
<div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Public Incorporation Roadmap</h2>
    <p className="text-slate-500 font-medium mt-1 italic">The definitive multi-stage process for launching a Public Limited Company.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
    {[
      { 
        n: "01", 
        t: "Director Credentials", 
        d: "Secure DSCs and DINs for all proposed directors (min. 3) to facilitate secure digital filing with the MCA." 
      },
      { 
        n: "02", 
        t: "Identity & Name", 
        d: "Reserve a unique corporate name via SPICe+ Part A, ensuring it reflects your brand's public-facing identity." 
      },
      { 
        n: "03", 
        t: "Charter Drafting", 
        d: "Formulate the MOA and AOA (e-MOA/e-AOA) to define the company’s share structure and public governance." 
      },
      { 
        n: "04", 
        t: "SPICe+ Integration", 
        d: "Submit comprehensive Part B filings including AGILE-PRO for GST, EPFO, and ESIC registrations." 
      },
      { 
        n: "05", 
        t: "Legal Recognition", 
        d: "Obtain the Certificate of Incorporation (COI) from the Registrar, officially establishing the public entity." 
      },
      { 
        n: "06", 
        t: "Operational Debut", 
        d: "Open a corporate bank account and file the 'Commencement of Business' declaration within 180 days." 
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
      PLC Compliance Checklist
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { n: "01", t: "Stakeholders", d: "Min. 3 Directors and 7 Shareholders with valid ID/Address proofs." },
        { n: "02", t: "Address Proof", d: "Aadhar or Passport supported by a bank statement (<2 months)." },
        { n: "03", t: "Digital Auth", d: "DSCs for all directors to facilitate high-security MCA filings." },
        { n: "04", t: "Office Seat", d: "Lease/Ownership proof for the registered office with a valid NOC." }
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
        <Users className="w-5 h-5 text-amber-600" /> Director & Member KYC
      </h3>
      <ul className="space-y-4">
        {[
          "Mandatory PAN Card for Indian Nationals", 
          "Aadhar Card / Voter ID / Driving License", 
          "Utility Bill or Bank Statement (< 2 months)", 
          "Recent Passport Size Photographs",
          "Digital Signature Certificates (DSC)"
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
          </li>
        ))}
      </ul>
    </div>
    <div className="p-8 md:p-14">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Building2 className="w-5 h-5 text-amber-600" /> Statutory & Premises Docs
      </h3>
      <ul className="space-y-4">
        {[
          "Registered Rent Agreement / Sale Deed", 
          "NOC from the Property Owner", 
          "Latest Electricity or Water Bill", 
          "Drafted Public e-MOA & e-AOA",
          "Board Resolution for Incorporation"
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
      Note: For Foreign Nationals, all documents must be Apostilled or Notarized in the home country.
    </p>
    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm shrink-0">
      <Clock className="w-4 h-4" /> 10-20 Working Days
    </div>
  </div>
</div>

        {/* Investment Setup */}
<div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8">PLC Investment Structure</h2>
  <p className="text-slate-600 leading-relaxed text-base md:text-lg text-justify max-w-4xl">
    The cost of incorporating a Public Limited Company is primarily governed by the **nominal authorized capital** and the **state-specific stamp duty** laws where the registered office is located. Unlike private firms, public entities often incur higher initial expenses due to the mandatory requirement of at least **seven shareholders**, three directors, and the increased complexity of filing high-volume share capital documents with the MCA.
  </p>
  <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
    <div className="mt-1">
      <ShieldAlert className="w-5 h-5 text-amber-600" />
    </div>
    <p className="text-sm text-amber-800 leading-relaxed">
      <strong>Pro-Tip:</strong> Statutory fees scale progressively with your authorized capital. We recommend a strategic capital assessment during the name approval stage to optimize your initial registration costs.
    </p>
  </div>
</div>

        {/* Strategic Advantage - Responsive Grid Fix */}
<div className="group bg-card border border-border p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
    <div>
      <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight italic">Public Enterprise Edge</h2>
      <p className="text-foreground/60 font-medium mt-1">Unlocking the power of public capital and market trust.</p>
    </div>
    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 shrink-0">
      <TrendingUp className="w-4 h-4 text-primary" />
      <span className="text-primary font-bold text-xs uppercase tracking-widest">Global Scalability</span>
    </div>
  </div>

  {/* Grid: 1 col on mobile, 2 on tablet, 5 on lg desktop */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 relative">
    <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-border z-0"></div>

    {[
      { 
        tag: "Public Capital", 
        title: "IPO & Rights Issue", 
        val: "Massive Funding", 
        desc: "Access vast capital reserves by issuing shares and debentures directly to the general public." 
      },
      { 
        tag: "Market Status", 
        title: "Exchange Listing", 
        val: "NSE / BSE Ready", 
        desc: "Eligible for listing on major stock exchanges, providing exit routes and liquidity for investors." 
      },
      { 
        tag: "Corporate Trust", 
        title: "Highest Credibility", 
        val: "Investor Magnet", 
        desc: "Stricter compliance norms lead to superior trust from banks, vendors, and global partners." 
      },
      { 
        tag: "Liquid Assets", 
        title: "Easy Transferability", 
        val: "Tradable Shares", 
        desc: "Shares are freely transferable, allowing for seamless ownership transitions and capital flow." 
      },
      { 
        tag: "Legal Fortress", 
        title: "Limited Liability", 
        val: "Total Protection", 
        desc: "Maintain a distinct legal identity that protects personal wealth while the company scales globally." 
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
        <p className="font-bold text-lg">Transition to a Public Limited Entity</p>
        <p className="text-sm opacity-80 mt-1 italic">The preferred choice for India's largest conglomerates and blue-chip firms.</p>
      </div>
    </div>
    <button className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-2xl font-black hover:opacity-90 transition-all">
      Go Public Now
    </button>
  </div>
</div>
{/* Timeline */}
<div className="p-6 md:p-10 border border-slate-200 rounded-xl bg-white">
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
    <h2 className="text-2xl font-bold text-slate-900">Registration Timeline</h2>
    <span className="px-4 py-1.5 bg-blue-50 text-blue-700 font-bold rounded-full text-sm">
      15 — 25 Working Days
    </span>
  </div>

  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
    The standard window for Public Limited incorporation depends on **MCA approval cycles** and document verification. Processing may extend beyond the estimated period if the Registrar requests clarifications or resubmissions.
  </p>

  <div className="flex items-center gap-2 p-4 bg-slate-50 rounded-lg border-l-4 border-slate-300">
    <Clock className="w-4 h-4 text-slate-500 shrink-0" />
    <span className="text-xs text-slate-500 italic">Timeline varies based on state-specific ROC workloads.</span>
  </div>
</div>
      </div>
    </section>
  );
};