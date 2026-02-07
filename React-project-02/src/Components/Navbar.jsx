import { useState, useEffect } from "react";
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
      // { name: "Book Keeping", href: "#book-keeping" },
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
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const DesktopNav = () => (
    <div className="hidden md:flex space-x-8 mx-auto items-center">
      {navItems.map((item) => (
        <div key={item.name} className="relative group">
          <a
            href={item.href}
            className="flex items-center gap-1 text-foreground hover:text-[#53A2BE] font-medium transition-colors py-2"
            onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {item.name}
            {item.dropdown && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />}
          </a>
          {item.dropdown && activeDropdown === item.name && (
            <div className="absolute top-full left-0 mt-1 bg-background border border-border/50 rounded-lg shadow-xl py-2 min-w-[250px] z-50 text-left">
              {item.dropdown.map((subItem) => (
                <a
                  key={subItem.href}
                  href={subItem.href}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-[#53A2BE] transition-colors"
                >
                  {subItem.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <nav className={cn(
      "fixed w-full z-40 transition-all duration-300 border-b-2 border-[#53A2BE]/30",
      isScrolled ? "py-2 bg-background/95 backdrop-blur-md" : "py-4 bg-background"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#setup" className="flex flex-col items-center space-y-0.5 hover:scale-105 transition-all">
          <img src="/Logo/logo.png" className="h-10 w-auto drop-shadow-lg" alt="Arostat" />
          <span className="text-sm font-bold text-[#53A2BE] tracking-tight">Arostat Solutions LLP</span>
        </a>

        <DesktopNav />

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-all z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-30 flex flex-col items-center justify-center md:hidden transition-all duration-300",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col space-y-6 text-xl text-center">
            <h2 className="text-3xl text-[#53A2BE]">Arostat Solutions LLP</h2>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-[#ABDAFC] transition-colors duration-300 py-2 text-lg"
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
