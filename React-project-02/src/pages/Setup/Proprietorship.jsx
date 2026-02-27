import { Zap, Clock, User, Landmark, CheckCircle2, AlertCircle } from "lucide-react";

export const Proprietorship = () => {
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
          Proprietorship
        </h1>

        <div className="mt-10 max-w-3xl">
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
            The most fundamental commercial structure in India, defined by
            <span className="text-slate-900 italic"> absolute singular control</span>.
            Perfect for visionaries seeking low-cost entry and zero compliance drag,
            while embracing the responsibility of unlimited personal liability.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Explore Details</span>
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
                  Embarking on an entrepreneurial path in India is a significant milestone, and the <span className="text-blue-600 font-semibold">Sole Proprietorship</span> stands as the most streamlined vehicle for that journey. This legal framework empowers a single visionary to oversee every facet of operations, exercising absolute decision-making authority without the need for board resolutions or partner consensus.
                </p>
                <p>
                  Engineered for maximum efficiency, it serves as the foundation for independent consultants and modern retailers who prioritize a <strong>rapid market launch</strong> over complex corporate hierarchy. While it offers unmatched simplicity and the lowest entry costs in the country, it remains a structure of high responsibility—the proprietor is the sole bearer of all outcomes, maintaining a direct legal link between personal success and business obligations.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="p-8 bg-white/50 rounded-2xl border border-slate-100 space-y-6">
                <h4 className="text-lg font-black text-blue-600 uppercase tracking-widest">Target Ecosystem</h4>

                <div className="space-y-4">
                  {[
                    { category: "Expertise", items: "Consultants, Coaches, Freelancers" },
                    { category: "Commerce", items: "Retailers, E-commerce Sellers" },
                    { category: "Services", items: "Agency Owners, Digital Creators" }
                  ].map((group, i) => (
                    <div key={i} className="border-b border-slate-200 pb-4 last:border-0">
                      <p className="text-xs font-bold text-slate-400 mb-1">{group.category}</p>
                      <p className="text-slate-900 font-bold">{group.items}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-800 duration-300">
                <span className="font-bold">Zero Profit Sharing</span>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <span className="text-blue-100 text-sm">You keep 100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* process */}
        <div className="group bg-white/50 border border-slate-200 p-10 md:p-14 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 text-justify">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Process</h2>
              <p className="text-slate-500 font-medium mt-1">Establishing legal validity through strategic licensing.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-justify">

            <div className="space-y-10">
              <div className="relative pl-12">
                <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">01</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Legal Identity & Branding</h3>
                <p className="text-slate-600 leading-relaxed">
                  Finalize a unique <span className="relative inline-block font-semibold text-slate-900 group-hover:underline decoration-blue-500 underline-offset-4">Business Name</span> that avoids trademark conflicts. Since the business is an extension of you, your <span className="font-semibold text-slate-900">Personal PAN</span> serves as the permanent tax anchor.
                </p>
              </div>

              <div className="relative pl-12">
                <span className="absolute left-0 top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">02</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fiscal Activation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Open a dedicated <span className="relative inline-block font-semibold text-slate-900 group-hover:underline decoration-blue-500 underline-offset-4">Corporate Current Account</span>. Most Indian banks require at least two government-issued business proofs to activate commercial banking services.
                </p>
              </div>
            </div>

            
            <div className="bg-white/50 p-8 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-black">03</span>
                <h3 className="text-xl font-bold text-slate-900">Proof of Existence</h3>
              </div>
              <p className="text-sm text-slate-500 mb-6 font-medium">Secure a minimum of two registrations based on your industry:</p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "GST Registration", hint: "For Inter-state/High Turnover" },
                  { label: "MSME (Udyam)", hint: "For Govt. Benefits" },
                  { label: "Shop & Establishment", hint: "Local Municipal Permit" },
                  { label: "Trade / Drug License", hint: "Industry Specific" },
                  { label: "FSSAI (Food)", hint: "For Eateries/Cloud Kitchens" },
                  { label: "Professional Tax", hint: "State Compliance" }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                    <p className="text-xs font-bold text-slate-900 mb-0.5">{item.label}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-tighter">{item.hint}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-4 p-6 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-100 hover:bg-blue-800 text-justify">
            <div className="h-10 w-10 rounded-full bg-blue-400/30 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <p className="font-bold">
              Ready for Launch: <span className="font-normal opacity-90 ml-1">Once licenses are active and banking is live, your operations are 100% legally compliant.</span>
            </p>
          </div>
        </div>

  
        <div className="group bg-white/50 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">

          <div className="p-10 md:p-14 border-b border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
              The 4-Step Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { n: "01", t: "Identity", d: "Choose a name and link it to your PAN Card." },
                { n: "02", t: "Licensing", d: "Apply for MSME or GST registrations." },
                { n: "03", t: "Banking", d: "Open a Current Account with your licenses." },
                { n: "04", t: "Launch", d: "Start legal operations across the country." }
              ].map((step, i) => (
                <div key={i} className="space-y-2">
                  <span className="text-blue-600 font-black text-xs tracking-widest uppercase">{step.n}</span>
                  <h4 className="font-bold text-slate-900 group-hover:underline decoration-blue-500 underline-offset-4">{step.t}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50/50">

            {/* Identity Column */}
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
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Investment Setup</h2>
              <p className="text-slate-500 font-medium mt-1">A budget-friendly gateway compared to Corporate structures.</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-100">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-bold text-xs uppercase tracking-widest">Lowest Entry Cost</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 group/item transition-all hover:bg-white hover:shadow-lg">
              <h4 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-4">Statutory Filings</h4>
              <p className="text-2xl font-black text-slate-900 mb-2">
                <span className="group-hover/item:underline decoration-blue-600 underline-offset-4 transition-all">₹2,500 – ₹5,000</span>
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Professional handling for <strong>GST & Udyam</strong> registrations to ensure zero-error submissions.
              </p>
            </div>

            {/* Tier 2: State Compliance */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 group/item transition-all hover:bg-white hover:shadow-lg">
              <h4 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-4">State Permits</h4>
              <p className="text-2xl font-black text-slate-900 mb-2">
                <span className="group-hover/item:underline decoration-blue-600 underline-offset-4 transition-all">₹2,500 – ₹5,000</span>
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Costs for <strong>Shops & Establishment</strong> licenses, which vary based on your specific regional authority.
              </p>
            </div>

            {/* Tier 3: Complete Setup */}
            <div className="p-8 rounded-2xl bg-blue-600 text-white hover:bg-blue-800 shadow-xl shadow-blue-100 group/item transition-all hover:scale-[1.02]">
              <h4 className="text-blue-200 font-bold text-xs uppercase tracking-widest mb-4">Full-Service Package</h4>
              <p className="text-2xl font-black mb-2 ">
                <span className="group-hover/item:underline decoration-white underline-offset-4 transition-all">₹10,000 – ₹15,000</span>
              </p>
              <p className="text-blue-100 text-sm leading-relaxed">
                An <strong>end-to-end activation</strong> including all licenses, bank assistance, and expert consultation.
              </p>
            </div>

          </div>

          {/* Footer Note */}
          <div className="mt-10 flex items-center gap-3 text-slate-500 text-sm italic">
            <AlertCircle className="w-4 h-4 text-blue-600" />
            <p>Professional fees ensure accuracy; direct government portal fees (where applicable) are extra.</p>
          </div>
        </div>

        {/* WHY SECTION (Grid Layout) */}
        <div className="space-y-12 py-10">
          <div className="text-center">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Strategic Advantages</h2>
            <p className="text-slate-500 mt-2 font-medium">Why entrepreneurs choose the Proprietorship model.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Absolute Control", d: "Exercise total authority over every business decision without partner consensus." },
              { t: "100% Profit Retention", d: "Every rupee of net profit belongs solely to you—no dividends or profit-sharing." },
              { t: "Financial Privacy", d: "Keep your business performance confidential; no public filing of annual accounts." },
              { t: "Minimal Entry Barrier", d: "The most cost-effective structure to launch, featuring the lowest registration fees." },
              { t: "Operational Agility", d: "Pivot your strategy, change products, or update marketing instantly as you see fit." },
              { t: "Lean Compliance", d: "Focus on growth rather than paperwork with significantly reduced statutory filings." }
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/50 border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center"
              >
                <h3 className="font-bold text-slate-900 mb-3 text-xl group-hover:text-blue-600 transition-colors">
                  <span className="relative inline-block">
                    {item.t}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
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