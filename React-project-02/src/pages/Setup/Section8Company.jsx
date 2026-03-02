import { Users, ShieldAlert, Clock, CheckCircle2, FileText,  Heart, HandHeart} from "lucide-react";

export const Section8Company = () => {
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
Section 8 Comapany
        </h1>

        <div className="mt-8 md:mt-10 max-w-3xl">
          <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium">
            In India, a
            <span className="text-slate-900 italic"> Seciton 8 Company</span>
          is the premier legal structure for social entrepreneurs and philanthropists. Established to promote causes like education, environmental protection, and the arts, these organizations operate exclusively for the public good. Governed by the Companies Act, 2013, all surpluses are reinvested into the mission rather than paid as dividends. Ready to make an impact? Launch your non-profit with expert registration guidance today.
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
        A Section 8 Company is the gold standard for social entrepreneurs in India. Governed by the Companies Act, 2013, this non-profit structure is designed specifically to advance causes like education, environmental protection, sports, and social welfare. It offers the professional prestige of a corporate entity while ensuring that every rupee of surplus is reinvested into your mission. Because profit distribution is prohibited, your organization gains immediate public trust and philanthropic credibility.
             </p>
          </div>
        </div>

        {/* Process Section */}
<div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Non-Profit Roadmap</h2>
    <p className="text-slate-500 font-medium mt-1 italic">The specialized legal journey to establishing your Section 8 Organization.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
    {[
      { 
        n: "01", 
        t: "Digital Identity", 
        d: "Obtain DSC and DIN for all proposed directors to enable secure, verified electronic filings with the MCA." 
      },
      { 
        n: "02", 
        t: "Name Selection", 
        d: "Reserve a name through RUN, typically including terms like Foundation, Association, or Society to reflect your mission." 
      },
      { 
        n: "03", 
        t: "Charter Design", 
        d: "Draft the MOA and AOA as per Section 8 guidelines, strictly ensuring all surpluses are dedicated to charitable goals." 
      },
      { 
        n: "04", 
        t: "License Grant", 
        d: "File Form INC-12 with the RoC to secure the Central Government’s license to operate as a non-profit entity." 
      },
      { 
        n: "05", 
        t: "Incorporation", 
        d: "Submit the integrated SPICe+ forms for the official Certificate of Incorporation and statutory tax registrations." 
      },
      { 
        n: "06", 
        t: "Social Launch", 
        d: "Receive your COI and Section 8 License, allowing you to open a corporate bank account and begin your mission." 
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
      Section 8 Filing Checklist
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { n: "01", t: "Promoters", d: "KYC for all proposed directors and members (PAN & Aadhaar mandatory)." },
        { n: "02", t: "Mission Proof", d: "Detailed Project Report outlining the proposed social welfare activities." },
        { n: "03", t: "Fiscal Plan", d: "A 3-year estimate of projected income and expenditure for the entity." },
        { n: "04", t: "Declarations", d: "Mandatory INC-14 (Professional) and INC-15 (Promoters) declarations." }
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
        <Users className="w-5 h-5 text-amber-600" /> Promoter & Director KYC
      </h3>
      <ul className="space-y-4">
        {[
          "Self-attested PAN Card Copy", 
          "ID Proof (Voter ID / DL / Passport)", 
          "Recent Utility Bill or Bank Statement", 
          "Passport Size Photographs",
          "Email ID and Active Mobile Numbers"
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
          </li>
        ))}
      </ul>
    </div>
    <div className="p-8 md:p-14">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <FileText className="w-5 h-5 text-amber-600" /> Statutory & Project Docs
      </h3>
      <ul className="space-y-4">
        {[
          "INC-14 (Declaration by CA/CS/CMA)", 
          "INC-15 (Declaration by Promoters)", 
          "3-Year Financial Forecast", 
          "NOC from Property Owner",
          "Utility Bill (not older than 2 months)"
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
      Note: All directors must declare that the intent is purely charitable with zero profit distribution.
    </p>
    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm shrink-0">
      <Clock className="w-4 h-4" /> 20-30 Working Days
    </div>
  </div>
</div>

        {/* Investment Setup */}
<div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8">Non-Profit Setup Costs</h2>
  <p className="text-slate-600 leading-relaxed text-base md:text-lg text-justify max-w-4xl">
    Incorporating a Section 8 Company is financially unique, as the MCA provides significant **fee exemptions** to promote social welfare. While standard incorporation filing fees are often nil or minimal, the primary statutory cost is the **INC-12 License Application fee** (typically ₹2,000). Additionally, many Indian states offer **highly subsidized or zero stamp duty** for non-profits, making it a cost-effective choice for charitable ventures compared to commercial structures.
  </p>
  <div className="mt-6 flex items-start gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
    <div className="mt-1">
      <ShieldAlert className="w-5 h-5 text-blue-600" />
    </div>
    <p className="text-sm text-blue-800 leading-relaxed">
      <strong>Compliance Note:</strong> While government fees are lower, the complexity of drafting project reports and multi-year financial forecasts usually requires specialized professional consultation to ensure a successful license grant.
    </p>
  </div>
</div>

        {/* Strategic Advantage - Responsive Grid Fix */}
<div className="group bg-card border border-border p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
    <div>
      <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight italic">Social Impact Edge</h2>
      <p className="text-foreground/60 font-medium mt-1">Institutionalizing your mission for greater social change.</p>
    </div>
    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 shrink-0">
      <Heart className="w-4 h-4 text-primary" />
      <span className="text-primary font-bold text-xs uppercase tracking-widest">Trust & Transparency</span>
    </div>
  </div>

  {/* Grid: 1 col on mobile, 2 on tablet, 5 on lg desktop */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 relative">
    <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-border z-0"></div>

    {[
      { 
        tag: "Fiscal Benefit", 
        title: "Tax Exemptions", 
        val: "12A & 80G", 
        desc: "Eligible for zero tax on income and provides tax deductions to your donors." 
      },
      { 
        tag: "Fundraising", 
        title: "CSR Eligibility", 
        val: "Grant Ready", 
        desc: "The preferred structure for receiving Corporate Social Responsibility (CSR) funds." 
      },
      { 
        tag: "Legal Status", 
        title: "Separate Entity", 
        val: "Corporate NGO", 
        desc: "Enjoys a distinct legal identity, allowing the foundation to own property and enter contracts." 
      },
      { 
        tag: "Capital", 
        title: "Zero Min. Capital", 
        val: "Low Entry", 
        desc: "No mandatory paid-up capital requirement, making it accessible for grassroots initiators." 
      },
      { 
        tag: "Asset Safety", 
        title: "Limited Liability", 
        val: "Risk Shield", 
        desc: "Personal assets of promoters are protected from the organization's legal or financial debts." 
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
        <HandHeart className="text-primary-foreground" size={24} />
      </div>
      <div>
        <p className="font-bold text-lg">Launch Your Foundation Today</p>
        <p className="text-sm opacity-80 mt-1 italic">Section 8 companies receive 3x more corporate grants compared to private trusts.</p>
      </div>
    </div>
    <button className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-2xl font-black hover:opacity-90 transition-all">
      Start Registration
    </button>
  </div>
</div>
{/* Timeline */}
<div className="p-6 md:p-10 border border-slate-200 rounded-xl bg-white">
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
    <h2 className="text-2xl font-bold text-slate-900">Non-Profit Timeline</h2>
    <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 font-bold rounded-full text-sm">
      15 — 20 Working Days
    </span>
  </div>

  <div className="space-y-4 mb-6">
    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
      Establishing a Section 8 entity involves a multi-tier approval process. While **DSC and Name Approval** are completed within the first week, the **INC-12 License** remains the primary milestone, typically requiring 7–10 days for Central Government verification.
    </p>
    
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {[
        { t: "DSC/DIN", d: "1-2 Days" },
        { t: "Name Appr.", d: "2-3 Days" },
        { t: "INC-12", d: "7-10 Days" },
        { t: "SPICe+", d: "3-5 Days" }
      ].map((item, i) => (
        <div key={i} className="p-2 border border-slate-100 rounded-lg text-center">
          <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">{item.t}</p>
          <p className="text-sm font-bold text-slate-700">{item.d}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="flex items-center gap-2 p-4 bg-slate-50 rounded-lg border-l-4 border-emerald-400">
    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
    <span className="text-xs text-slate-500 italic">Final COI issuance follows immediately after successful license verification.</span>
  </div>
</div>
      </div>
    </section>
  );
};