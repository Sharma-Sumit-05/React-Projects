import { Users, FileSignature,ShieldAlert, Clock, User, Landmark, CheckCircle2, Zap } from "lucide-react";

export const UnregisteredPartnership = () => {
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
          Unregistered Partnership
        </h1>

        <div className="mt-10 max-w-3xl">
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
            In the Indian legal landspace, an
            <span className="text-slate-900 italic"> Unregistered Partnership</span>.
            remains a valid commercial arrangement, offering maximum flexibility through either oral or written covenants. However, while the formation is effortless, this structure introduces specific procedural constraints regarding litigation and third-party claims. It is a model chosen for its speed, provided partners acknowledge the balance between simplicity and legal standing.
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
                  Establishing an unregistered firm is a journey of mutual consent. It begins with the <span className="text-blue-600 font-semibold">drafting of a Partnership Deed—</span> the master document that defines your profit-sharing ratios and operational roles. Once signed and notarized on appropriate stamp paper, you move to tax anchoring via a Firm-specific PAN, followed by commercial activation through a current account.
                </p>
                
              </div>
            </div>
          </div>
        </div>

       
        <div className="group bg-white/50 border border-slate-200 p-10 md:p-14 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
         
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 text-justify">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Process</h2>
              <p className="text-slate-500 font-medium mt-1">Instead of a basic list, we frame this as a "Contractual Activation" journey.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-justify">

            <div className="space-y-10">
              <div className="relative pl-12">
                <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">01</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Covenant Design</h3>
                <p className="text-slate-600 leading-relaxed">
                 Negotiate and codify the mutual terms of engagement into a comprehensive Partnership Deed.
                </p>
              </div>

              <div className="relative pl-12">
                <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">02</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Legal Execution</h3>
                <p className="text-slate-600 leading-relaxed">
                  Formalize the agreement on state-specific non-judicial stamp paper, validated by all partners.
                </p>
              </div>
               <div className="relative pl-12">
                <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">03</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fiscal Identity</h3>
                <p className="text-slate-600 leading-relaxed">
                  Secure a dedicated Permanent Account Number (PAN) in the firm's name to establish a tax identity.
                </p>
              </div>
              <div className="relative pl-12">
                <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">04</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Commercial Launch</h3>
                <p className="text-slate-600 leading-relaxed">
                  Activate your banking gateway and commence operations immediately without state registrar filing
                </p>
              </div>             
            </div>
          </div>
        </div>

  
        <div className="group bg-white/50 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">

         <div className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
  
  
  <div className="p-10 md:p-14 border-b border-slate-100 dark:border-slate-800">
    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
      <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
      The 4-Step Activation
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {[
        { n: "01", t: "Covenant", d: "Draft a comprehensive Deed outlining partner roles and profit ratios." },
        { n: "02", t: "Execution", d: "Sign the deed on non-judicial stamp paper with formal notarization." },
        { n: "03", t: "Tax Identity", d: "Apply for a dedicated Firm PAN for independent tax filing." },
        { n: "04", t: "Banking", d: "Activate a Current Account using the deed and firm credentials." }
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

  <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50/50 dark:bg-slate-800/20">
    
    
    <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
        <Users className="w-5 h-5 text-amber-600" /> Partner Credentials
      </h3>
      <ul className="space-y-4">
        {[
          "Personal PAN Cards of all Partners",
          "Aadhaar, Passport, or Voter ID (KYC)",
          "Recent Passport Size Photographs",
          "Duly signed Declarations or Affidavits"
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
          </li>
        ))}
      </ul>
    </div>

    
    <div className="p-10 md:p-14">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
        <FileSignature className="w-5 h-5 text-amber-600" /> Entity Evidence
      </h3>
      <ul className="space-y-4">
        {[
          "Notarized Partnership Deed",
          "Firm's Permanent Account Number (PAN)",
          "Electricity Bill or Property Tax Receipt",
          "Registered Rent Agreement & Landlord NOC"
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
          </li>
        ))}
      </ul>
    </div>
  </div>

  
  <div className="px-10 py-6 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-sm font-medium opacity-80 italic flex items-center gap-2">
      <ShieldAlert className="w-4 h-4 text-amber-500" />
      Pro-Tip: Ensure your Deed is printed on correct state-specific Stamp Duty value.
    </p>
    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
      <Clock className="w-4 h-4" /> 5-7 Working Days
    </div>
  </div>
</div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50/50">

            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" /> Identity Proofs
              </h3>
              <ul className="space-y-4">
                {[
                  "Owner's PAN Card (Mandatory)",
                  "Aadhaar Card or Passport",
                  "Recent Passport Size Photos"
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {doc}
                  </li>
                ))}
              </ul>
            </div>

          
            <div className="p-10 md:p-14">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-blue-600" /> Business Address
              </h3>
              <ul className="space-y-4">
                {[
                  "Electricity or Water Bill",
                  "Rent Agreement (if applicable)",
                  "NOC from the Property Owner"
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

           
          <div className="px-10 py-6 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-medium opacity-80 italic">Pro-Tip: Ensure your mobile number is linked to your Aadhaar for e-KYC.</p>
            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
              <Clock className="w-4 h-4" /> 7-10 Working Days
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
                Experience a lower entry barrier with zero government registration costs. Since this model remains unregistered with the state authorities, your setup capital is directed toward the mandatory Stamp Duty and notarization of your deed. Please note that these costs vary across India, shifting according to your state's specific stamp laws and business scale.
              </p>
        </div>


<div className="group bg-card border border-border p-10 md:p-14 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 text-left">
  
 
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
    <div className="text-left">
      <h2 className="text-4xl font-black text-foreground tracking-tight italic">
        Operational Velocity
      </h2>
      <p className="text-foreground/60 font-medium mt-1">
        A streamlined roadmap from agreement to market entry.
      </p>
    </div>
    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
      <Clock className="w-4 h-4 text-primary" />
      <span className="text-primary font-bold text-xs uppercase tracking-widest">
        Est. 7 Working Days
      </span>
    </div>
  </div>


  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
    <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-border -z-0"></div>

    {[
      { 
        phase: "Phase 01", 
        title: "Covenant Design", 
        days: "1–2 Days", 
        desc: "Drafting the partnership deed and completing notarization on stamp paper." 
      },
      { 
        phase: "Phase 02", 
        title: "Fiscal Identity", 
        days: "5–7 Days", 
        desc: "Processing of the Firm's PAN card through the NSDL/UTI portal." 
      },
      { 
        phase: "Phase 03", 
        title: "Commercial Live", 
        days: "2–5 Days", 
        desc: "Bank KYC verification and activation of the corporate current account." 
      }
    ].map((item, i) => (
      <div key={i} className="relative z-10 group/item text-left">
        
        <div className="w-20 h-20 bg-card border-4 border-background rounded-3xl flex items-center justify-center mb-6 shadow-sm group-hover/item:border-primary transition-all duration-300">
          <span className="text-primary font-black text-2xl">{i + 1}</span>
        </div>
        
        <h4 className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">
          {item.phase}
        </h4>
        <h3 className="text-xl font-black text-foreground mb-2">
          {item.title}
        </h3>
        <p className="text-foreground/60 text-sm leading-relaxed mb-4">
          {item.desc}
        </p>
        
    
        <div className="inline-flex items-center px-3 py-1 bg-background border border-border rounded-lg text-[10px] font-bold text-foreground/70 uppercase">
          {item.days}
        </div>
      </div>
    ))}
  </div>

 
  <div className="mt-16 p-8 bg-foreground text-background rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
    <div className="flex items-center gap-4 text-left">
      <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center shrink-0">
        <Zap className="text-primary-foreground" size={24} />
      </div>
      <div>
        <p className="font-bold text-lg leading-tight">
          Ready for Market
        </p>
        <p className="text-sm opacity-80 mt-1 italic">
          Your business becomes legally operational as soon as the Deed is notarized and the PAN is issued.
        </p>
      </div>
    </div>
    <button className="whitespace-nowrap px-8 py-3 bg-primary text-primary-foreground rounded-2xl font-black hover:opacity-90 active:scale-95 transition-all">
      Accelerate Now
    </button>
  </div>
</div>

        
       <div className="space-y-12 py-10">
  <div className="text-center">
    <h2 className="text-4xl font-black text-foreground tracking-tight italic">
      Strategic Edge
    </h2>
    <p className="text-foreground/60 mt-2 font-medium">
      The advantages of choosing a lean, unregistered collaborative model.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { t: "Rapid Activation", d: "Bypass government processing times; execute your deed and commence commercial operations instantly." },
      { t: "Lean Capital Entry", d: "The most economical multi-member structure, eliminating state registrar fees and corporate levies." },
      { t: "Private Governance", d: "Maintain absolute confidentiality of your partnership terms; no public disclosure of internal deeds." },
      { t: "Internal Agility", d: "Modify profit-sharing or operational roles through mutual consent without statutory approvals." },
      { t: "Compliance Neutral", d: "Zero requirement for annual ROC filings, allowing you to focus entirely on venture growth." },
      { t: "Fiscal Identity", d: "Full legal capacity to secure a Firm PAN, open bank accounts, and participate in the GST tax ecosystem." }
    ].map((item, i) => (
      <div
        key={i}
        className="group bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center"
      >
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
           <div className="w-2 h-2 bg-primary rounded-full"></div>
        </div>
        
        <h3 className="font-bold text-foreground mb-3 text-xl group-hover:text-primary transition-colors">
          <span className="relative inline-block">
            {item.t}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h3>
        <p className="text-foreground/60 leading-relaxed text-sm">
          {item.d}
        </p>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};