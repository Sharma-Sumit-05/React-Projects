import { Users, FileSignature,ShieldAlert, Clock, User, Landmark, CheckCircle2, ShieldCheck, Scale } from "lucide-react";

export const Partnership = () => {
  return (
    <section className="relative min-h-screen font-sans bg-slate-50/50">
      <div className="fixed inset-0 flex items-center justify-center -z-10 pointer-events-none">
        <img
          className="max-h-[90vh] w-auto object-contain opacity-90 mt-20"
          src="/Logo/logo.png"
          alt="Arostat Background"
        />
      </div>

    
      <div className="relative z-10 flex flex-col items-center mx-auto pt-32 pb-20 px-6 max-w-6xl text-center">

        <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-none">
           Partnership
        </h1>

        <div className="mt-10 max-w-3xl">
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
            Under the 
            <span className="text-slate-900 italic"> Indian Partnership Act of 1932, </span>.
            a partnership firm is established through a formal agreement known as a Partnership Deed. This legal instrument outlines the specific terms and conditions of the association, defining the rights, duties, and liabilities of every partner involved.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em]">Explore Details</span>
          <div className="w-px h-12 bg-blue-800"></div>
        </div>
      </div>

      <div className="relative z-10 mx-auto px-6 pb-24 max-w-5xl space-y-12">

        <div className="group bg-white/60 border border-white/50 p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200/60 transition-all hover:shadow-blue-100/50">
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight group  group-hover:underline decoration-blue-600 underline-offset-4">
              Strategic Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-6">
              <p className="text-2xl font-bold text-slate-800 leading-tight tracking-tight text-justify">
                The most accessible gateway to the Indian market, designed for speed and total autonomy.
              </p>

              <div className="space-y-4 text-slate-600 leading-relaxed text-lg text-justify">
                <p>
                 Forming a partnership is an excellent strategy for entrepreneurs to synergize their resources and expertise.  In India, the partnership model is highly favored due to its inherent flexibility and ease of setup. While registration under the Indian Partnership Act (1932) is optional, finalizing the process is highly recommended to secure legal safeguards and enhance the firm's commercial credibility.
                </p>
                
              </div>
            </div>
          </div>
        </div>

       
        <div className="group bg-white/50 border border-slate-200 p-10 md:p-14 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
         
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 text-justify">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Process</h2>
              <p className="text-slate-500 font-medium mt-1">This version is ideal for a formal business presentation or a legal guide.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-justify">

            <div className="space-y-10">
              <div className="relative pl-12">
                <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">01</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Name Selection & Compliance</h3>
                <p className="text-slate-600 leading-relaxed">
                Choose a unique name that does not conflict with existing trademarks or registered firms. Ensure the name avoids restricted terms (like "Empire" or "Statutory") that imply government affiliation.
                </p>
              </div>

              <div className="relative pl-12">
                <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">02</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Drafting the Partnership Deed</h3>
                <p className="text-slate-600 leading-relaxed">
                  Create the firm’s foundational document. This must clearly define capital contributions, profit-sharing ratios, and the specific roles of each partner.
                </p>
              </div>
               <div className="relative pl-12">
                <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">03</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Execution & Notarization:</h3>
                <p className="text-slate-600 leading-relaxed">
                 Print the deed on judicial stamp paper (the value of which varies by state). All partners must sign the document in the presence of a Notary Public.
                </p>
              </div>
              <div className="relative pl-12">
                <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">04</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Submission to the Registrar of Firms (RoF):</h3>
                <p className="text-slate-600 leading-relaxed">
                 File Form 1 with the RoF in the state where your principal office is located. This must be accompanied by the notarized deed and identity proofs of all partners.
                </p>
              </div> 
                   <div className="relative pl-12">
                <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">05</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fee Settlement</h3>
                <p className="text-slate-600 leading-relaxed">
                Pay the prescribed statutory fees to the Registrar to initiate the processing of your application.
                </p>
              </div>
                   <div className="relative pl-12">
                <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">04</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Issuance of Certificate:</h3>
                <p className="text-slate-600 leading-relaxed">
                 Upon successful verification, the Registrar will record the firm’s details in the Register of Firms and issue a formal Certificate of Registration.
                </p>
              </div>            
            </div>
          </div>
        </div>

  
<div className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
  
  
  <div className="p-10 md:p-14 border-b border-slate-100 dark:border-slate-800">
    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
      <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
      The Registration Roadmap
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {[
        { n: "01", t: "Documentation", d: "Draft the Partnership Deed and prepare the formal Affidavit." },
        { n: "02", t: "Legalization", d: "Sign on state-specific stamp paper and obtain Notary approval." },
        { n: "03", t: "Submission", d: "File Form 1 with the Registrar of Firms along with required proofs." },
        { n: "04", t: "Certification", d: "Receive the official Certificate of Registration from the Registrar." }
      ].map((step, i) => (
        <div key={i} className="space-y-2 group/step">
          <span className="text-amber-600 font-black text-xs tracking-widest uppercase">{step.n}</span>
          <h4 className="font-bold text-slate-900 dark:text-slate-200 group-hover/step:underline decoration-amber-500 underline-offset-4 transition-all">
            {step.t}
          </h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.d}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Documents Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50/50 dark:bg-slate-800/20">
    
    {/* Partner Proofs */}
    <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
        <Users className="w-5 h-5 text-amber-600" /> Partner Credentials
      </h3>
      <ul className="space-y-4">
        {[
          "Personal PAN Cards of all Partners",
          "Aadhaar, Passport, or Driving License (KYC)",
          "Recent Passport Size Photographs",
          "Signed Affidavit (Intention to start firm)"
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
          </li>
        ))}
      </ul>
    </div>

    {/* Firm Proofs */}
    <div className="p-10 md:p-14">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
        <FileSignature className="w-5 h-5 text-amber-600" /> Registration Docs
      </h3>
      <ul className="space-y-4">
        {[
          "Duly filled Form 1 (Application)",
          "Original Notarized Partnership Deed",
          "Electricity Bill or Property Papers",
          "Rent Agreement & Landlord NOC"
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Footer Bar */}
  <div className="px-10 py-6 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-sm font-medium opacity-80 italic flex items-center gap-2">
      <ShieldAlert className="w-4 h-4 text-amber-500" />
      Pro-Tip: Ensure all partners sign across their photos in the application for extra compliance.
    </p>
    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
      <Clock className="w-4 h-4" /> 5-10 Working Days
    </div>
  </div>
</div>

      
        <div className="group bg-white/50 border border-slate-200 p-10 md:p-14 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 text-justify">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Investment Setup</h2>
            </div>          
          </div>
              <p>
                The cost of registering a partnership firm is determined by state-specific regulations and consists of three primary components: statutory government fees, mandatory stamp duty, and any professional consultancy charges. In many regions, the stamp duty is calculated based on the firm's total capital contribution. Furthermore, additional costs may be incurred for supplementary tax registrations such as PAN, TAN, and GST.
              </p>
        </div>


<div className="group bg-card border border-border p-10 md:p-14 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 text-left">
  
  {/* Header Section */}
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
    <div className="text-left">
      <h2 className="text-4xl font-black text-foreground tracking-tight italic">
        Strategic Advantage
      </h2>
      <p className="text-foreground/60 font-medium mt-1">
        Why savvy entrepreneurs choose registered partnerships over unregistered firms.
      </p>
    </div>
    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
      <ShieldCheck className="w-4 h-4 text-primary" />
      <span className="text-primary font-bold text-xs uppercase tracking-widest">
        Full Legal Protection
      </span>
    </div>
  </div>

  {/* Benefits Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative">
    {/* Optional horizontal line for desktop */}
    <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-border z-0"></div>

    {[
      { 
        tag: "Legal Identity", 
        title: "Rights Enforcement", 
        val: "Lawsuit Ready", 
        desc: "A registered firm gains the legal standing to sue third parties and enforce contractual rights in court." 
      },
      { 
        tag: "Trust Factor", 
        title: "Market Credibility", 
        val: "Client Trust", 
        desc: "Registration signals transparency, building immediate trust with vendors, clients, and large corporations." 
      },
      { 
        tag: "Conflict Resolution", 
        title: "Dispute Stability", 
        val: "Internal Safety", 
        desc: "Provides a structured legal framework to resolve internal partner conflicts or third-party disagreements." 
      },
      { 
        tag: "Capital Access", 
        title: "Funding Eligibility", 
        val: "Bank Preferred", 
        desc: "Financial institutions and banks prioritize registered entities for business loans and credit lines." 
      },
      { 
        tag: "Ease of Flow", 
        title: "Simple Compliance", 
        val: "Less Red Tape", 
        desc: "Enjoy the benefits of a formal structure with significantly fewer annual filings compared to a Pvt Ltd company." 
      }
    ].map((item, i) => (
      <div key={i} className="relative z-10 group/item text-left">
        
        {/* Step Number Circle */}
        <div className="w-20 h-20 bg-card border-4 border-background rounded-3xl flex items-center justify-center mb-6 shadow-sm group-hover/item:border-primary transition-all duration-300">
          <span className="text-primary font-black text-2xl">{i + 1}</span>
        </div>
        
        <h4 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">
          {item.tag}
        </h4>
        <h3 className="text-xl font-black text-foreground mb-2">
          {item.title}
        </h3>
        <p className="text-foreground/60 text-sm leading-relaxed mb-4">
          {item.desc}
        </p>
        
        {/* Status Badge */}
        <div className="inline-flex items-center px-3 py-1 bg-background border border-border rounded-lg text-[10px] font-bold text-foreground/70 uppercase">
          {item.val}
        </div>
      </div>
    ))}
  </div>

  {/* Footer Action Card */}
  <div className="mt-16 p-8 bg-foreground text-background rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
    <div className="flex items-center gap-4 text-left">
      <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center shrink-0">
        <Scale className="text-primary-foreground" size={24} />
      </div>
      <div>
        <p className="font-bold text-lg leading-tight">
          Establish Your Legal Ground
        </p>
        <p className="text-sm opacity-80 mt-1 italic">
          Unregistered firms cannot sue for dues over ₹100. Don't leave your business rights to chance.
        </p>
      </div>
    </div>
    <button className="whitespace-nowrap px-8 py-3 bg-primary text-primary-foreground rounded-2xl font-black hover:opacity-90 active:scale-95 transition-all">
      Get Registered Now
    </button>
  </div>
</div>
      </div>
    </section>
  );
};