import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { X, Menu, ChevronDown } from "lucide-react";

const navItems = [
  {
    name: "Setup",
    href: "#setup",
    dropdown: [
      { name: "Proprietorship", href: "#proprietorship" },
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
  const [hoveredItem, setHoveredItem] = useState(null);
  const containerRef = useRef(null);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setHoveredItem(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const DesktopNav = () => (
    <div ref={containerRef} className="hidden md:flex space-x-8 mx-auto items-center">
      {navItems.map((item) => (
        <div key={item.name} className="relative group">
          <a
            href={item.href}
            className="flex items-center gap-1 text-foreground hover:text-[#53A2BE] font-medium transition-all duration-200 py-2 relative z-10 bg-background px-2 rounded-md group-hover:shadow-lg hover:shadow-[#53A2BE]/25"
            onMouseEnter={() => item.dropdown && setHoveredItem(item.name)}
          >
            {item.name}
            {item.dropdown && (
              <ChevronDown 
                size={16} 
                className="group-hover:rotate-180 transition-all duration-200 ease-in-out" 
              />
            )}
          </a>
          
          {/* Enhanced Dropdown */}
          {item.dropdown && hoveredItem === item.name && (
            <div className="absolute top-full left-0 mt-1 bg-background/95 backdrop-blur-xl border border-[#53A2BE]/20 rounded-xl shadow-2xl py-2 w-72 z-50 overflow-hidden">
              {/* Dropdown Header */}
              <div className="p-3 border-b border-[#53A2BE]/10 bg-gradient-to-r from-[#53A2BE]/5 to-transparent">
                <span className="text-xs font-semibold text-[#53A2BE] uppercase tracking-wider px-2 block">
                  {item.name}
                </span>
              </div>
              
              {/* Dropdown Items */}
              <div className="py-1 divide-y divide-[#53A2BE]/10">
                {item.dropdown.map((subItem, index) => (
                  <a
                    key={subItem.href}
                    href={subItem.href}
                    className={cn(
                      "group/subitem flex items-center px-4 py-3 text-sm font-medium transition-all duration-300 relative overflow-hidden hover:cursor-pointer",
                      "hover:bg-gradient-to-r hover:from-[#53A2BE]/10 hover:to-[#53A2BE]/20",
                      "hover:text-[#53A2BE] hover:shadow-md hover:shadow-[#53A2BE]/25 hover:translate-x-1",
                      "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#53A2BE] before:to-transparent before:opacity-0 before:group-hover/subitem:opacity-100 before:transition-all before:duration-300 before:ease-out",
                      "after:absolute after:left-3 after:top-1/2 after:-translate-y-1/2 after:w-1.5 after:h-1.5 after:bg-[#53A2BE]/20 after:rounded-full after:opacity-0 after:group-hover/subitem:opacity-100 after:transition-all after:duration-300"
                    )}
                    onClick={() => {
                      setHoveredItem(null); // Close dropdown on click
                    }}
                  >
                    <span className="relative z-10 flex-1">{subItem.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <nav className={cn(
      "fixed w-full z-40 transition-all duration-300 border-b-2 border-[#53A2BE]/30",
      isScrolled ? "py-2 bg-background/95 backdrop-blur-md shadow-lg shadow-[#53A2BE]/10" : "py-4 bg-background"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#setup" className="flex flex-col items-center space-y-0.5">
          <img src="/Logo/logo.png" className="h-14 w-auto " alt="Arostat" />
          <span className="text-sm font-bold text-blue-400 ">Arostat Solutions LLP</span>
        </a>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg hover:bg-primary/10 hover:shadow-lg hover:shadow-[#53A2BE]/25 transition-all duration-200 z-50 relative"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} className="text-[#53A2BE]" /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-30 flex flex-col items-center justify-center md:hidden transition-all duration-300",
          isMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-10"
        )}>
          <div className="flex flex-col space-y-8 text-xl text-center max-w-md mx-4">
            <h2 className="text-3xl font-bold text-[#53A2BE] drop-shadow-lg">Arostat Solutions LLP</h2>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-[#ABDAFC] hover:bg-[#53A2BE]/10 px-6 py-3 rounded-xl transition-all duration-300 text-lg font-medium border border-transparent hover:border-[#53A2BE]/30"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
