import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { X, Menu, ChevronDown, Moon, Sun, PhoneCall } from "lucide-react";

const navItems = [
  {
    name: "Setup",
    href: "#",
    dropdown: [
      { name: "Proprietorship", href: "/setup/proprietorship" },
      { name: "Unregistered Partnership", href: "/setup/unregistered-partnership" },
      { name: "Partnership", href: "/setup/partnership" },
      { name: "LLP Registration", href: "/setup/llp-registration" },
      { name: "One Person Company Registration", href: "/setup/one-person-company-registration" },
      { name: "Private Limited Company", href: "/setup/private-limited-company" },
      { name: "Public Limited Company", href: "/setup/public-limited-company" },
      { name: "Section 8 Company", href: "/setup/section-8-company" },
      { name: "Trust Registration", href: "/setup/trust-registration" },
      { name: "Society Registration", href: "/setup/society-registration" },
      { name: "Foreign Subsidiary Company Registration", href: "/setup/foreign-subsidiary-company-registration" },
    ]
  },
  {
    name: "Registrations",
    href: "#",
    dropdown: [
      { name: "Udyam Registration", href: "/registration/udyam" },
      { name: "Trademark Registration", href: "/registration/trademark" },
      { name: "FSSAI Registration", href: "/registration/fssai" },
      { name: "Spice Board Registration", href: "/registration/spice-board" },
      { name: "Import Export Code", href: "/registration/iec" },
      { name: "Legal Metrology Registration", href: "/registration/legal-metrology" },
      { name: "Startup India Registration", href: "/registration/startup-india" },
      { name: "RGN Certification", href: "/registration/rgn" },
      { name: "APMC Licence", href: "/registration/apmc" },
      { name: "Trade Licence", href: "/registration/trade-licence" },
    ]
  },
  {
    name: "Compliances",
    href: "#",
    dropdown: [
      { name: "Annual Compliance of LLP", href: "/compliance/llp" },
      { name: "Annual Compliance of Private Limited", href: "/compliance/pvt-ltd" },
      { name: "Annual Compliance of Public Ltd Company", href: "/compliance/public-ltd" },
      { name: "Event Based Compliance", href: "/compliance/event-based" },
      { name: "Dematerialization of Shares", href: "/compliance/demat" },
      { name: "Statutory Records Maintenance", href: "/compliance/statutory-records" },
      { name: "DIR-3 KYC", href: "/compliance/dir3-kyc" },
      { name: "RBI Compliances", href: "/compliance/rbi" },
      { name: "FEMA Compliances", href: "/compliance/fema" },
      { name: "XBRL Filing", href: "/compliance/xbrl" },
      { name: "Charge Creation & Satisfaction", href: "/compliance/charge" },
      { name: "Foreign Subsidiary Company Compliance", href: "/compliance/foreign-sub" },
    ]
  },
  {
    name: "Taxation",
    href: "#",
    dropdown: [
      { name: "GST Registration", href: "/tax/gst-reg" },
      { name: "EPF Registration", href: "/tax/epf" },
      { name: "ESI Registration", href: "/tax/esi" },
      { name: "ITR Filing", href: "/tax/itr" },
      { name: "GST Return", href: "/tax/gst-return" },
      { name: "TDS Return Filing", href: "/tax/tds" },
      { name: "80 IAC Registration", href: "/tax/80iac" },
      { name: "80G and 12AB Registration", href: "/tax/80g" },
      { name: "GST Refund Filing", href: "/tax/gst-refund" },
    ]
  },
  {
    name: "Restructuring",
    href: "#",
    dropdown: [
      { name: "Change in Name", href: "/restructure/name" },
      { name: "Change in Shareholding", href: "/restructure/shares" },
      { name: "Change in Object of Company", href: "/restructure/object" },
      { name: "Change in Registered Office", href: "/restructure/office" },
      { name: "Change in Director", href: "/restructure/director" },
      { name: "Closure of LLP", href: "/restructure/close-llp" },
      { name: "Closure of Private Company", href: "/restructure/close-pvt" },
      { name: "Conversion of LLP into Pvt Ltd", href: "/restructure/llp-to-pvt" },
      { name: "Conversion of Pvt Ltd into LLP", href: "/restructure/pvt-to-llp" },
      { name: "Merger", href: "/restructure/merger" },
    ]
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // The cool blue-line effect with bold-on-hover
  const hoverEffect = "relative py-1 transition-all duration-300 hover:text-sky-500 hover:font-black before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-[1px] before:bg-sky-500 before:transition-all before:duration-300 hover:before:w-full after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full block w-fit";

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
        
        {/* LOGO */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-3 shrink-0 relative z-50">
            <img src="/Logo/logo.png" className="h-14 w-auto" alt="Arostat" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-3xl font-black text-foreground uppercase tracking-tight">Arostat</span>
              <span className="text-[14px] font-bold text-sky-500 tracking-wider uppercase">Solutions LLP</span>
            </div>
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex flex-none items-center justify-center">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <button className="relative flex items-center gap-1 px-4 py-2 text-sm font-bold text-foreground transition-all flex-col justify-center">
                <span className="flex items-center gap-1">
                  {item.name}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-background border border-sky-500/30 shadow-2xl rounded-xl py-4 px-2 min-w-max grid gap-1">
                  {item.dropdown.map((sub) => (
                    <Link 
                      key={sub.name} 
                      to={sub.href} 
                      className={cn(hoverEffect, "px-4 py-1.5 text-xs font-extrabold text-foreground/80")}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex-1 flex justify-end items-center gap-3">
          <button className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full bg-sky-500 text-white text-sm font-black hover:bg-sky-600 transition-all active:scale-95 shadow-md shadow-sky-500/20">
            <PhoneCall size={16} /> CONTACT
          </button>
          
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-secondary text-foreground relative z-50">
            {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-sky-500 relative z-50">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
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
                <span>{item.name}</span>
                <ChevronDown className={cn("transition-transform", activeMobileSubmenu === idx && "rotate-180")} />
              </button>
              
              <div className={cn("overflow-hidden transition-all duration-300", activeMobileSubmenu === idx ? "max-h-screen mt-4 opacity-100" : "max-h-0 opacity-0")}>
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-sky-500/30">
                  {item.dropdown.map((sub) => (
                    <Link 
                      key={sub.name} 
                      to={sub.href} 
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(hoverEffect, "text-[14px] font-bold text-foreground/70")}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="mt-8 mb-12">
            <button className="w-full py-4 bg-sky-500 text-white font-black rounded-xl">CONTACT US</button>
          </div>
        </div>
      </div>
    </nav>
  );
};