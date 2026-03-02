import { Users, FileSignature, ShieldAlert, Clock, User, Landmark, CheckCircle2, ShieldCheck, Scale, Building2 } from "lucide-react";

export const PrivateLimitedCompany = () => {
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
Private Limited Comapny
        </h1>

        <div className="mt-8 md:mt-10 max-w-3xl">
          <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium">
            In India, the 
            <span className="text-slate-900 italic"> Private Limited </span>
           structure is the gold standard for businesses and service providers. Governed by the Ministry of Corporate Affairs (MCA) under the Companies Act, 2013, these entities are easily identified by the "Pvt. Ltd." suffix. Ready to formalize your vision? Partner with Arostat to streamline your company registration today.
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
             For many entrepreneurs in India, transforming a vision into a reality starts with choosing the right legal structure. A Private Limited Company stands out as the premier choice, offering a powerful combination of limited liability, enhanced market credibility, and seamless scalability.
             <br />
             By registering as a Pvt. Ltd. entity, you do more than just name your business; you create a distinct legal identity that safeguards your personal assets and attracts serious capital. This structure is highly favored by banks, angel investors, and venture capitalists, making it the ideal launchpad for those seeking external funding and long-term growth.
             </p>
          </div>
        </div>

        {/* Process Section */}
 <div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Registration Process</h2>
    <p className="text-slate-500 font-medium mt-1 italic">Step-by-step roadmap to incorporating your Private Limited Company.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
    {[
      { 
        n: "01", 
        t: "Digital Setup", 
        d: "Obtain Digital Signature Certificates (DSC) for all directors to sign electronic forms securely." 
      },
      { 
        n: "02", 
        t: "DIN & Name", 
        d: "Apply for Director Identification Numbers and reserve your unique brand name via SPICe+ Part A." 
      },
      { 
        n: "03", 
        t: "Legal Drafting", 
        d: "Prepare the MOA and AOA to define your company’s objectives and internal governing rules." 
      },
      { 
        n: "04", 
        t: "SPICe+ Filing", 
        d: "Submit the integrated SPICe+ form for incorporation, including PAN, TAN, and EPFO registrations." 
      },
      { 
        n: "05", 
        t: "Incorporation", 
        d: "Receive your Certificate of Incorporation (COI) from the MCA, marking your official business birth." 
      },
      { 
        n: "06", 
        t: "Bank Integration", 
        d: "Open your corporate bank account using the COI and PAN to commence commercial operations." 
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
      KYC & Compliance Checklist
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { n: "01", t: "Identity", d: "Mandatory PAN for Indians; Passport for Foreign Nationals." },
        { n: "02", t: "Residence", d: "Aadhar, Voter ID, or DL along with a recent utility bill." },
        { n: "03", t: "Digital", d: "Obtain DSC for secure electronic filing of MCA forms." },
        { n: "04", t: "Premises", d: "Proof of registered office address with owner's NOC." }
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
        <Users className="w-5 h-5 text-amber-600" /> Director Credentials
      </h3>
      <ul className="space-y-4">
        {[
          "Self-attested PAN Card Copy", 
          "ID Proof (Aadhar / Voter ID)", 
          "Recent Bank Statement (< 2 months)", 
          "Passport Size Photographs",
          "Active DSC (Digital Signatures)"
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
          </li>
        ))}
      </ul>
    </div>
    <div className="p-8 md:p-14">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Building2 className="w-5 h-5 text-amber-600" /> Registered Office Docs
      </h3>
      <ul className="space-y-4">
        {[
          "Latest Electricity/Water Bill", 
          "Signed Rent Agreement (if leased)", 
          "NOC from Property Owner", 
          "Drafted e-MOA & e-AOA",
          "Property Title Proof"
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
      Note: Foreign National documents must be Apostilled/Notarized per Indian regulations.
    </p>
    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm shrink-0">
      <Clock className="w-4 h-4" /> 7-15 Working Days
    </div>
  </div>
</div>

        {/* Investment Setup */}
<div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8">Fee Structure</h2>
  <p className="text-slate-600 leading-relaxed text-base md:text-lg text-justify max-w-4xl">
    The total investment for incorporation is dynamic, influenced by the company's **Authorized Share Capital** and the specific **State of Registration**. While the MCA has waived filing fees for many new small entities, total costs typically include state-specific **Stamp Duty**, Digital Signature (DSC) procurement, and professional consultancy charges.
  </p>
  <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
    <div className="mt-1">
      <ShieldAlert className="w-5 h-5 text-amber-600" />
    </div>
    <p className="text-sm text-amber-800 leading-relaxed">
      <strong>Note:</strong> Final estimates vary based on the number of directors, the scale of authorized capital, and any additional regulatory filings required for your specific industry.
    </p>
  </div>
</div>

        {/* Strategic Advantage - Responsive Grid Fix */}
<div className="group bg-card border border-border p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
    <div>
      <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight italic">Corporate Edge</h2>
      <p className="text-foreground/60 font-medium mt-1">Why entrepreneurs prefer the Private Limited structure.</p>
    </div>
    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 shrink-0">
      <ShieldCheck className="w-4 h-4 text-primary" />
      <span className="text-primary font-bold text-xs uppercase tracking-widest">Maximum Scalability</span>
    </div>
  </div>

  {/* Grid: 1 col on mobile, 2 on tablet, 5 on lg desktop */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 relative">
    <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-border z-0"></div>

    {[
      { 
        tag: "Asset Safety", 
        title: "Limited Liability", 
        val: "Risk Shield", 
        desc: "Your personal assets stay safe; liability is strictly limited to your share capital." 
      },
      { 
        tag: "Legal Status", 
        title: "Separate Entity", 
        val: "Legal Person", 
        desc: "The company functions as a distinct legal person—it can own, sue, and be sued." 
      },
      { 
        tag: "Fund Raising", 
        title: "Investor Ready", 
        val: "VC Preferred", 
        desc: "The only structure favored by Venture Capitalists and Private Equity investors." 
      },
      { 
        tag: "Continuity", 
        title: "Perpetual Life", 
        val: "Everlasting", 
        desc: "The company survives changes in ownership, directors, or even the death of a founder." 
      },
      { 
        tag: "Exit Strategy", 
        title: "Easy Transfer", 
        val: "Liquid Equity", 
        desc: "Transfer shares or bring in new partners with minimal legal hurdles and paperwork." 
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
        <Scale className="text-primary-foreground" size={24} />
      </div>
      <div>
        <p className="font-bold text-lg">Build a Fundable Startup</p>
        <p className="text-sm opacity-80 mt-1 italic">90% of funded Indian startups choose the Private Limited structure.</p>
      </div>
    </div>
    <button className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-2xl font-black hover:opacity-90 transition-all">
      Start Incorporation
    </button>
  </div>
</div>
      </div>
    </section>
  );
};