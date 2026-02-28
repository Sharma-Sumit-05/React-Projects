import { Users, FileSignature, ShieldAlert, Clock, User, Landmark, CheckCircle2, ShieldCheck, Scale } from "lucide-react";

export const Partnership = () => {
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
          Partnership
        </h1>

        <div className="mt-8 md:mt-10 max-w-3xl">
          <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium">
            Under the 
            <span className="text-slate-900 italic"> Indian Partnership Act of 1932, </span>
            a partnership firm is established through a formal agreement known as a Partnership Deed. This legal instrument defines the rights, duties, and liabilities of every partner involved.
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
            <p className="text-xl md:text-2xl font-bold text-slate-800 leading-tight tracking-tight text-justify mb-6">
              The most accessible gateway to the Indian market, designed for speed and total autonomy.
            </p>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg text-justify">
              Forming a partnership is an excellent strategy for entrepreneurs to synergize their resources and expertise. In India, the partnership model is highly favored due to its inherent flexibility and ease of setup. While registration is optional, it is highly recommended to secure legal safeguards and enhance commercial credibility.
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Process</h2>
            <p className="text-slate-500 font-medium mt-1 italic">Formal business presentation & legal guide.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
            {[
              { n: "01", t: "Name Selection", d: "Choose a unique name that avoids restricted terms and trademark conflicts." },
              { n: "02", t: "Drafting Deed", d: "Define capital contributions, profit ratios, and specific partner roles." },
              { n: "03", t: "Execution", d: "Print on judicial stamp paper and sign before a Notary Public." },
              { n: "04", t: "Submission", d: "File Form 1 with the Registrar of Firms (RoF) at your principal office." },
              { n: "05", t: "Fee Settlement", d: "Pay prescribed statutory fees to the Registrar to initiate processing." },
              { n: "06", t: "Certification", d: "Obtain the formal Certificate of Registration upon successful verification." }
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
          <div className="p-8 md:p-14 border-b border-slate-100">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
              Registration Roadmap
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { n: "01", t: "Documentation", d: "Draft the Partnership Deed and prepare the Affidavit." },
                { n: "02", t: "Legalization", d: "Sign on stamp paper and obtain Notary approval." },
                { n: "03", t: "Submission", d: "File Form 1 with the Registrar along with required proofs." },
                { n: "04", t: "Certification", d: "Receive the official Certificate of Registration." }
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
                <Users className="w-5 h-5 text-amber-600" /> Partner Credentials
              </h3>
              <ul className="space-y-4">
                {["Personal PAN Cards", "Aadhaar / Passport / DL", "Passport Photos", "Signed Affidavit"].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-14">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileSignature className="w-5 h-5 text-amber-600" /> Registration Docs
              </h3>
              <ul className="space-y-4">
                {["Filled Form 1", "Original Notarized Deed", "Utility Bill / Property Docs", "Rent Agreement & NOC"].map((doc, i) => (
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
              Pro-Tip: Ensure partners sign across their photos for RoF compliance.
            </p>
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm shrink-0">
              <Clock className="w-4 h-4" /> 5-10 Working Days
            </div>
          </div>
        </div>

        {/* Investment Setup */}
        <div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8">Investment Setup</h2>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg text-justify max-w-4xl">
            Costs are determined by state regulations and consist of statutory fees, mandatory stamp duty (often based on capital contribution), and consultancy charges. Additional costs apply for supplementary registrations like PAN, TAN, and GST.
          </p>
        </div>

        {/* Strategic Advantage - Responsive Grid Fix */}
        <div className="group bg-card border border-border p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight italic">Strategic Advantage</h2>
              <p className="text-foreground/60 font-medium mt-1">Choosing registered over unregistered firms.</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 shrink-0">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Full Legal Protection</span>
            </div>
          </div>

          {/* Grid: 1 col on mobile, 2 on tablet, 5 on lg desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 relative">
            <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-border z-0"></div>

            {[
              { tag: "Legal Identity", title: "Rights Enforcement", val: "Lawsuit Ready", desc: "Standing to sue third parties and enforce contractual rights in court." },
              { tag: "Trust Factor", title: "Market Credibility", val: "Client Trust", desc: "Builds immediate trust with vendors, banks, and large corporations." },
              { tag: "Conflict Resolution", title: "Dispute Stability", val: "Internal Safety", desc: "Structured legal framework to resolve partner or third-party conflicts." },
              { tag: "Capital Access", title: "Funding Eligibility", val: "Bank Preferred", desc: "Prioritized for business loans and formal credit lines." },
              { tag: "Ease of Flow", title: "Simple Compliance", val: "Less Red Tape", desc: "Fewer annual filings compared to a Private Limited Company." }
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
                <p className="font-bold text-lg">Establish Your Legal Ground</p>
                <p className="text-sm opacity-80 mt-1 italic">Unregistered firms cannot sue for dues over ₹100.</p>
              </div>
            </div>
            <button className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-2xl font-black hover:opacity-90 transition-all">
              Get Registered Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};