import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { X, Menu, ChevronDown, Moon, Sun, PhoneCall } from "lucide-react";

const navItems = [
  {
    name: "Setup",
    href: "#setup",
    dropdown: [
      { name: "Proprietorship", href: "/setup/proprietorship" },
      { name: "Unregistered Partnership", href: "#unregistered-partnership" },
      { name: "Partnership", href: "#partnership" },
      { name: "LLP Registration", href: "#llp-registration" },
      { name: "One Person Company Registration", href: "#one-person-company-registration" },
      { name: "Private Limited Company", href: "#private-limited-company" },
      { name: "Public Limited Company", href: "#public-limited-company" },
      { name: "Section 8 Company", href: "#section-8-company" },
      { name: "Trust Registration", href: "#trust-registration" },
      { name: "Society Registration", href: "#society-registration" },
      { name: "Foreign Subsidiary Company Registration", href: "#foreign-subsidiary-company-registration" },
    ]
  },
  {
    name: "Registrations",
    href: "#registrations",
    dropdown: [
      { name: "Udyam Registration", href: "#udyam-registration" },
      { name: "Trademark Registration", href: "#trademark-registration" },
      { name: "FSSAI Registration", href: "#fssai-registration" },
      { name: "Spice Board Registration", href: "#spice-board-registration" },
      { name: "Import Export Code", href: "#import-export-code" },
      { name: "Legal Metrology Registration", href: "#legal-metrology-registration" },
      { name: "Startup India Registration", href: "#startup-india-registration" },
      { name: "RGN Certification", href: "#rgn-certification" },
      { name: "APMC Licence", href: "#apmc-licence" },
      { name: "Trade Licence", href: "#trade-licence" },
    ]
  },
  {
    name: "Compliances",
    href: "#compliances",
    dropdown: [
      { name: "Annual Compliance of LLP", href: "#annual-compliance-of-llp" },
      { name: "Annual Compliance of Private Limited", href: "#annual-compliance-of-private-limited" },
      { name: "Annual Compliance of Public Ltd Company", href: "#annual-compliance-of-public-ltd-company" },
      { name: "Event Based Compliance", href: "#event-based-compliance" },
      { name: "Dematerialization of Shares", href: "#dematerialization-of-shares" },
      { name: "Statutory Records Maintenance", href: "#statutory-records-maintenance" },
      { name: "DIR-3 KYC", href: "#dir-3-kyc" },
      { name: "RBI Compliances", href: "#rbi-compliances" },
      { name: "FEMA Compliances", href: "#fema-compliances" },
      { name: "XBRL Filing", href: "#xbrl-filing" },
      { name: "Charge Creation & Satisfaction Compliances", href: "#charge-creation-satisfaction-compliances" },
      { name: "Foreign Subsidiary Company Compliance", href: "#foreign-subsidiary-company-compliance" },
    ]
  },
  {
    name: "Taxation",
    href: "#taxation",
    dropdown: [
      { name: "GST Registration", href: "#gst-registration" },
      { name: "EPF Registration", href: "#epf-registration" },
      { name: "ESI Registration", href: "#esi-registration" },
      { name: "ITR Filing", href: "#itr-filing" },
      { name: "GST Return", href: "#gst-return" },
      { name: "TDS Return Filing", href: "#tds-return-filing" },
      { name: "80 IAC Registration", href: "#80-iac-registration" },
      { name: "80G and 12AB Registration", href: "#80g-and-12ab-registration" },
      { name: "GST Refund Filing", href: "#gst-refund-filing" },
    ]
  },
  {
    name: "Restructuring",
    href: "#restructuring",
    dropdown: [
      { name: "Change in Name", href: "#change-in-name" },
      { name: "Change in Shareholding", href: "#change-in-shareholding" },
      { name: "Change in Object of Company", href: "#change-in-object-of-company" },
      { name: "Change in Registered Office", href: "#change-in-registered-office" },
      { name: "Change in Director", href: "#change-in-director" },
      { name: "Closure of LLP", href: "#closure-of-llp" },
      { name: "Closure of Private Company", href: "#closure-of-private-company" },
      { name: "Conversion of LLP into Pvt Ltd Company", href: "#conversion-llp-to-pvt-ltd" },
      { name: "Conversion of Pvt Ltd into LLP", href: "#conversion-pvt-ltd-to-llp" },
      { name: "Merger", href: "#merger" },
    ]
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300 border-b border-sky-500/20",
      isScrolled ? "py-2 bg-background/95 backdrop-blur-md shadow-lg" : "py-4 bg-background"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* LEFT: Logo Section */}
        <div className="flex-1 flex justify-start">
          <a href="/" className="flex items-center gap-3 shrink-0 relative z-50">
            <img src="/Logo/logo.png" className="h-14 w-auto" alt="Arostat" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-3xl font-black text-foreground uppercase tracking-tight">Arostat</span>
              <span className="text-[14px] font-bold text-sky-500 tracking-wider uppercase">Solutions LLP</span>
            </div>
          </a>
        </div>

        {/* MIDDLE: Nav Items */}
        <div className="hidden lg:flex flex-none items-center justify-center">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <button className="relative flex items-center gap-1 px-4 py-2 text-sm font-bold whitespace-nowrap text-foreground transition-all group-hover:font-black flex-col justify-center">
                <span className="flex items-center gap-1">
                  {item.name}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </span>
                {/* Width Protector (Prevents Shifting) */}
                <span className="block h-0 overflow-hidden font-black invisible select-none" aria-hidden="true">{item.name}</span>
                {/* Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full" />
              </button>

              <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-background border border-sky-500/30 shadow-2xl rounded-xl py-3 min-w-max">
                  {item.dropdown.map((sub) => (
                    <a key={sub.name} href={sub.href} className="block px-6 py-2.5 text-sm font-bold whitespace-nowrap text-foreground/80 hover:bg-sky-500/5 transition-all text-left">
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Contact Button & Dark Mode */}
        <div className="flex-1 flex justify-end items-center gap-3">
          
          {/* Desktop Only Contact Button */}
          <button className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full bg-sky-500 text-white text-sm font-black hover:bg-sky-600 transition-all active:scale-95 whitespace-nowrap shadow-md shadow-sky-500/20">
            <PhoneCall size={16} />
            CONTACT US
          </button>

          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground relative z-50">
            {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-sky-500 relative z-50">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE OVERLAY */}
        <div className={cn(
          "fixed inset-0 bg-background z-40 lg:hidden flex flex-col pt-24 px-6 overflow-y-auto transition-all duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {navItems.map((item, idx) => (
            <div key={item.name} className="border-b border-sky-500/10 py-4">
              <button 
                onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === idx ? null : idx)}
                className="flex items-center justify-between w-full text-lg font-bold text-foreground"
              >
                <span className="whitespace-nowrap">{item.name}</span>
                <ChevronDown className={cn("transition-transform", activeMobileSubmenu === idx && "rotate-180")} />
              </button>
              
              <div className={cn("overflow-hidden transition-all duration-300", activeMobileSubmenu === idx ? "max-h-screen mt-4 opacity-100" : "max-h-0 opacity-0")}>
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-sky-500/30">
                  {item.dropdown.map((sub) => (
                    <a key={sub.name} href={sub.href} className="text-foreground/70 text-[15px] font-bold whitespace-nowrap text-left py-1 hover:text-sky-500 transition-colors">
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* Mobile Contact Link (Optional addition for UX) */}
          <div className="mt-8 mb-12">
            <button className="w-full py-4 bg-sky-500 text-white font-black rounded-xl">CONTACT US</button>
          </div>
        </div>
      </div>
    </nav>
  );
};