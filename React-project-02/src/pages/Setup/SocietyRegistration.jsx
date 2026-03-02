import { Users, ShieldAlert, Clock, CheckCircle2, FileText, Building2, Landmark, Scale, Gavel} from "lucide-react";

export const SocietyRegistration = () => {
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
Society Registration
        </h1>

        <div className="mt-8 md:mt-10 max-w-3xl">
          <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium">
         A Society is a multi-member association formed by individuals coming together to achieve a shared mission in fields such as art, education, or public charity. Regulated primarily by the Societies Registration Act, 1860, this structure is ideal for organizations requiring a democratic governance model. It allows for a rotating body of members to oversee operations, ensuring that the institution remains committed to its founding welfare objectives while adapting to state-specific legal amendments.
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
A Society is a multi-member association formed by individuals coming together to achieve a shared mission in fields such as art, education, or public charity. Regulated primarily by the Societies Registration Act, 1860, this structure is the gold standard for organizations requiring a democratic governance model. By registering, the association attains a separate legal identity, allowing it to own property, enter into binding contracts, and maintain institutional transparency while adapting to state-specific legal amendments.
             </p>
          </div>
        </div>

                {/* Why */}
<div className="group bg-card border border-border p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
    <div>
      <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight italic">Why Us</h2>
      <p className="text-foreground/60 font-medium mt-1">Gaining institutional recognition and collective legal strength.</p>
    </div>
    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 shrink-0">
      <Users className="w-4 h-4 text-primary" />
      <span className="text-primary font-bold text-xs uppercase tracking-widest">Democratic & Legal</span>
    </div>
  </div>

  {/* Grid: 1 col on mobile, 2 on tablet, 5 on lg desktop */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 relative">
    <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-border z-0"></div>

    {[
      { 
        tag: "Legal Identity", 
        title: "Separate Entity", 
        val: "Recognized Status", 
        desc: "A registered society is a distinct legal person capable of owning property and entering contracts." 
      },
      { 
        tag: "Funding", 
        title: "Grants & Aid", 
        val: "Govt. Eligible", 
        desc: "Registration is the primary prerequisite for applying for government grants and financial assistance." 
      },
      { 
        tag: "Fiscal Benefit", 
        title: "Tax Exemptions", 
        val: "12A & 80G", 
        desc: "Avail tax benefits and provide deduction certificates to donors under the Income Tax Act." 
      },
      { 
        tag: "Banking", 
        title: "Official Accounts", 
        val: "Mandatory Step", 
        desc: "Legally required to open a dedicated bank account in the society’s name for transparent transactions." 
      },
      { 
        tag: "Governance", 
        title: "Accountability", 
        val: "Public Trust", 
        desc: "Annual filings ensure transparency in functioning, enhancing credibility with donors and the public." 
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
        <Building2 className="text-primary-foreground" size={24} />
      </div>
      <div>
        <p className="font-bold text-lg">Institutionalize Your Association</p>
        <p className="text-sm opacity-80 mt-1 italic">Societies are the preferred choice for cultural, educational, and welfare associations seeking democratic management.</p>
      </div>
    </div>
    <button className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-2xl font-black hover:opacity-90 transition-all">
      Register Your Society
    </button>
  </div>
</div>

        {/* Process Section */}
<div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Society Registration Roadmap</h2>
    <p className="text-slate-500 font-medium mt-1 italic">The formal journey to establishing a democratic association in India.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
    {[
      { 
        n: "01", 
        t: "Name Selection", 
        d: "Choose a unique name that does not conflict with existing societies or government bodies to ensure smooth approval." 
      },
      { 
        n: "02", 
        t: "Drafting the MOA", 
        d: "Prepare the Memorandum of Association detailing the society's objectives, office address, and founding member details." 
      },
      { 
        n: "03", 
        t: "Rules & Bylaws", 
        d: "Draft the internal Rules and Regulations that govern membership, meetings, and the roles of the managing committee." 
      },
      { 
        n: "04", 
        t: "Official Filing", 
        d: "Submit the MOA and Bylaws, signed by at least seven members, to the Registrar of Societies for the respective state." 
      },
      { 
        n: "05", 
        t: "Verification", 
        d: "The Registrar reviews the documents and may request clarifications to ensure compliance with the 1860 Act." 
      },
      { 
        n: "06", 
        t: "Certification", 
        d: "Upon successful approval, the Registrar issues the Certificate of Registration, granting the society legal status." 
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
      Society Filing Checklist
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { n: "01", t: "The Constitution", d: "MOA and Rules & Regulations signed by a minimum of 7 founding members." },
        { n: "02", t: "Governing Body", d: "A certified list of office bearers (President, Secretary, etc.) with signatures." },
        { n: "03", t: "Legal Request", d: "A formal covering letter and an authenticity affidavit from the President." },
        { n: "04", t: "Registered Office", d: "Address proof of the office via Rent Agreement or Ownership Proof with NOC." }
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
        <Users className="w-5 h-5 text-amber-600" /> Member KYC (Min. 7)
      </h3>
      <ul className="space-y-4">
        {[
          "Self-attested PAN Cards of all members", 
          "Aadhaar / Passport / Voter ID of all members", 
          "Recent Passport Size Photographs", 
          "List of Governing Body Members",
          "Signatures of all founding members on MOA"
        ].map((doc, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" /> {doc}
          </li>
        ))}
      </ul>
    </div>
    <div className="p-8 md:p-14">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <FileText className="w-5 h-5 text-amber-600" /> Statutory & Compliance
      </h3>
      <ul className="space-y-4">
        {[
          "Memorandum of Association (MOA)", 
          "Certified Rules & Regulations (Bylaws)", 
          "Affidavit by President/Secretary", 
          "NOC from Landlord for Registered Office",
          "Electricity/Utility Bill of the Office"
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
      Note: Minimum 7 members are required for National level (8 for some states like Delhi).
    </p>
    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm shrink-0">
      <Scale className="w-4 h-4" /> Governed by Societies Act, 1860
    </div>
  </div>
</div>

        {/* Investment Setup */}
<div className="group bg-white/50 border border-slate-200 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Society Setup Economics</h2>
    <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-xl border border-blue-200 shrink-0">
      <Gavel className="w-4 h-4" />
      <span className="font-bold text-xs uppercase tracking-wider">Registrar Fees</span>
    </div>
  </div>

  <p className="text-slate-600 leading-relaxed text-base md:text-lg text-justify max-w-4xl mb-8">
    The financial layout for a Society is characterized by <strong>State-specific registration fees</strong>, which vary significantly across India. Unlike Trusts, there is typically no property-based stamp duty, making it a cost-effective choice for membership-based groups. Additional expenses often include <strong>notarization of affidavits</strong> and professional charges for drafting the mandatory Memorandum of Association (MOA) and Rules & Regulations.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Registration Fee</p>
      <p className="text-2xl font-black text-slate-900">State-Specific</p>
      <p className="text-[10px] text-slate-400 mt-2 font-medium">As per local Societies Act</p>
    </div>
    <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Affidavits</p>
      <p className="text-2xl font-black text-slate-900">~ ₹200 — 1k</p>
      <p className="text-[10px] text-slate-400 mt-2 font-medium">Notarization & Stamp Paper</p>
    </div>
    <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Drafting</p>
      <p className="text-2xl font-black text-slate-900">Professional</p>
      <p className="text-[10px] text-slate-400 mt-2 font-medium">MOA & Rules specialized setup</p>
    </div>
  </div>

  <div className="mt-8 flex items-start gap-3 p-5 bg-slate-900 rounded-2xl shadow-xl">
    <div className="mt-1 p-1.5 bg-blue-400 rounded-lg">
      <ShieldAlert className="w-4 h-4 text-slate-900" />
    </div>
    <div className="text-sm text-slate-300 leading-relaxed">
      <strong className="text-white">Compliance Note:</strong> While the government fees are localized, remember that professional services for <strong>12A and 80G tax registration</strong> are separate. These are crucial for providing tax-deductibility to your society’s donors.
    </div>
  </div>
</div>

{/* Timeline */}
<div className="p-6 md:p-10 border border-slate-200 rounded-xl bg-white shadow-sm">
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Society Timeline</h2>
    <span className="px-4 py-1.5 bg-blue-50 text-blue-700 font-bold rounded-full text-sm">
      30 — 45 Working Days
    </span>
  </div>

  <div className="space-y-6">
    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
      Registering a Society is a multi-step administrative process. This timeline covers <strong>drafting the MOA & Rules</strong>, member signatures, and the thorough <strong>verification process</strong> conducted by the Registrar of Societies to ensure legal compliance.
    </p>
    
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {[
        { t: "Drafting/Signing", d: "5-7 Days" },
        { t: "Filing", d: "2-3 Days" },
        { t: "Registrar Review", d: "20-30 Days" },
        { t: "Certificate", d: "3-5 Days" }
      ].map((item, i) => (
        <div key={i} className="p-3 border border-slate-100 rounded-xl bg-slate-50/50 text-center">
          <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">{item.t}</p>
          <p className="text-sm font-bold text-slate-800">{item.d}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="mt-6 flex items-center gap-2 p-4 bg-slate-50 rounded-lg border-l-4 border-blue-400">
    <Clock className="w-4 h-4 text-blue-600 shrink-0" />
    <span className="text-xs text-slate-500 italic">Timeline varies based on state-specific Registrar workloads and the promptness of clarifications.</span>
  </div>
</div>
      </div>
    </section>
  );
};