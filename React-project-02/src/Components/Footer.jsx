import { MapPin, Mail, Phone, Copyright, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  // Animated blue lines (Top and Bottom) - optimized for small text
  const hoverEffect = "relative py-0.5 transition-all duration-300 hover:text-blue-500 before:content-[''] before:absolute before:top-[-2px] before:left-0 before:w-0 before:h-[1px] before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full after:content-[''] after:absolute after:bottom-[-2px] after:right-0 after:w-0 after:h-[1px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full block w-fit cursor-pointer";

  return (
    <section className="flex justify-center bg-background border-t border-muted/20">
      <div className="container mx-auto px-6 md:px-10">
        
        {/* Disclaimer Section */}
        <div className="mb-10">
          <p className="text-justify text-xl md:text-sm text-muted-foreground leading-relaxed mt-5">
            This website is privately operated and is not affiliated with any government entity. We do not represent, are not endorsed by and are in no way connected to any government body or department. Our role is to act as an intermediary (Business Consultant) between registered users and professionals (such as chartered accountants, company secretaries, cost accountants, advocates, etc.). Additionally, we maintain our own team of experts. The form provided on this website is not intended for official registration purposes; it is designed to gather information from our clients to better understand their business or needs. By continuing to use this website, you acknowledge that we are a private company managing our operations independently. We offer assistance based on customer requests, and the fees collected on this website are for consulting services.
          </p>
        </div>

        {/* Links Grid - text-sm applied to all columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">
          
          {/* Setup */}
          <div>
            <h1 className="text-lg font-bold text-blue-500 mb-4 border-b border-blue-500/20 pb-1 text-left">Setup</h1>
            <ul className="space-y-1.5 text-muted-foreground text-sm">
              <li><Link to="/setup/proprietorship" className={hoverEffect}>Proprietorship</Link></li>
              <li><Link to="/setup/unregistered-partnership" className={hoverEffect}>Unregistered Partnership</Link></li>
              <li><Link to="/setup/partnership" className={hoverEffect}>Partnership</Link></li>
              <li><Link to="/setup/llp-registration" className={hoverEffect}>LLP Registration</Link></li>
              <li><Link to="/setup/one-person-company-registration" className={hoverEffect}>One Person Company Registration</Link></li>
              <li><Link to="/setup/private-limited-company" className={hoverEffect}>Private Limited Company</Link></li>
              <li><Link to="/setup/public-limited-company" className={hoverEffect}>Public Limited Company</Link></li>
              <li><Link to="/setup/section-8-company" className={hoverEffect}>Section 8 Company</Link></li>
              <li><Link to="/setup/trust-registration" className={hoverEffect}>Trust Registration</Link></li>
              <li><Link to="/setup/society-registration" className={hoverEffect}>Society Registration</Link></li>
              <li><Link to="/setup/foreign-subsidiary-company-registration" className={hoverEffect}>Foreign Subsidiary Registration</Link></li>
            </ul>
          </div>

          {/* Registration */}
          <div>
            <h1 className="text-lg font-bold text-blue-500 mb-4 border-b border-blue-500/20 pb-1 text-left">Registration</h1>
            <ul className="space-y-1.5 text-muted-foreground text-sm">
              <li><Link to="/registration/udyam-registration" className={hoverEffect}>Udyam Registration</Link></li>
              <li><Link to="/registration/trademark-registration" className={hoverEffect}>Trademark Registration</Link></li>
              <li><Link to="/registration/fssai-registration" className={hoverEffect}>FSSAI Registration</Link></li>
              <li><Link to="/registration/spice-board-registration" className={hoverEffect}>Spice Board Registration</Link></li>
              <li><Link to="/registration/import-export-code" className={hoverEffect}>Import Export Code</Link></li>
              <li><Link to="/registration/legal-metrology-registration" className={hoverEffect}>Legal Metrology Registration</Link></li>
              <li><Link to="/registration/startup-india-registration" className={hoverEffect}>Startup India Registration</Link></li>
              <li><Link to="/registration/rgn-certification" className={hoverEffect}>RGN Certification</Link></li>
              <li><Link to="/registration/apmc-licence" className={hoverEffect}>APMC Licence</Link></li>
              <li><Link to="/registration/trade-licence" className={hoverEffect}>Trade Licence</Link></li>
            </ul>
          </div>

          {/* Compliances */}
          <div>
            <h1 className="text-lg font-bold text-blue-500 mb-4 border-b border-blue-500/20 pb-1 text-left">Compliances</h1>
            <ul className="space-y-1.5 text-muted-foreground text-sm">
              <li><Link to="/compliance/annual-llp" className={hoverEffect}>Annual Compliance of LLP</Link></li>
              <li><Link to="/compliance/annual-pvt-ltd" className={hoverEffect}>Annual Compliance Private Ltd</Link></li>
              <li><Link to="/compliance/annual-public-ltd" className={hoverEffect}>Annual Compliance Public Ltd</Link></li>
              <li><Link to="/compliance/event-based" className={hoverEffect}>Event Based Compliance</Link></li>
              <li><Link to="/compliance/shares" className={hoverEffect}>Dematerialization of Shares</Link></li>
              <li><Link to="/compliance/statutory-records" className={hoverEffect}>Statutory Records</Link></li>
              <li><Link to="/compliance/dir3-kyc" className={hoverEffect}>DIR-3 KYC</Link></li>
              <li><Link to="/compliance/rbi" className={hoverEffect}>RBI Compliances</Link></li>
              <li><Link to="/compliance/fema" className={hoverEffect}>FEMA Compliances</Link></li>
              <li><Link to="/compliance/xbrl" className={hoverEffect}>XBRL Filing</Link></li>
              <li><Link to="/compliance/charge" className={hoverEffect}>Charge Creation & Satisfaction</Link></li>
              <li><Link to="/compliance/foreign-sub" className={hoverEffect}>Foreign Subsidiary Compliance</Link></li>
            </ul>
          </div>

          {/* Taxation */}
          <div>
            <h1 className="text-lg font-bold text-blue-500 mb-4 border-b border-blue-500/20 pb-1 text-left">Taxation</h1>
            <ul className="space-y-1.5 text-muted-foreground text-sm">
              <li><Link to="/tax/gst-registration" className={hoverEffect}>GST Registration</Link></li>
              <li><Link to="/tax/epf-registration" className={hoverEffect}>EPF Registration</Link></li>
              <li><Link to="/tax/esi-registration" className={hoverEffect}>ESI Registration</Link></li>
              <li><Link to="/tax/itr-filing" className={hoverEffect}>ITR Filing</Link></li>
              <li><Link to="/tax/gst-return" className={hoverEffect}>GST Return</Link></li>
              <li><Link to="/tax/tds-return" className={hoverEffect}>TDS Return Filing</Link></li>
              <li><Link to="/tax/80-iac" className={hoverEffect}>80 IAC Registration</Link></li>
              <li><Link to="/tax/80g-12ab" className={hoverEffect}>80G and 12AB Registration</Link></li>
              <li><Link to="/tax/gst-refund" className={hoverEffect}>GST Refund Filing</Link></li>
            </ul>
          </div>

          {/* Restructuring */}
          <div>
            <h1 className="text-lg font-bold text-blue-500 mb-4 border-b border-blue-500/20 pb-1 text-left">Restructuring</h1>
            <ul className="space-y-1.5 text-muted-foreground text-sm">
              <li><Link to="/restructuring/name-change" className={hoverEffect}>Change in Name</Link></li>
              <li><Link to="/restructuring/shareholding" className={hoverEffect}>Change in Shareholding</Link></li>
              <li><Link to="/restructuring/object" className={hoverEffect}>Change in Object</Link></li>
              <li><Link to="/restructuring/office" className={hoverEffect}>Change in Office</Link></li>
              <li><Link to="/restructuring/director" className={hoverEffect}>Change in Director</Link></li>
              <li><Link to="/restructuring/closure-llp" className={hoverEffect}>Closure of LLP</Link></li>
              <li><Link to="/restructuring/closure-pvt" className={hoverEffect}>Closure of Private Company</Link></li>
              <li><Link to="/restructuring/conversion-llp" className={hoverEffect}>LLP to Pvt Ltd</Link></li>
              <li><Link to="/restructuring/conversion-pvt" className={hoverEffect}>Pvt Ltd to LLP</Link></li>
              <li><Link to="/restructuring/merger" className={hoverEffect}>Merger</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact & Legal Section */}
        <div className="space-y-6 border-t border-muted/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl mx-auto px-4">
            <span className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>G-45/1, Laxmi-Park, Nangloi, West-Delhi-41</span>
            </span>
            <span className="flex items-center gap-2 text-muted-foreground text-sm">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>xyz@arostatsolutionllp.com</span>
            </span>
            <span className="flex items-center gap-2 text-muted-foreground text-sm">
              <Phone className="w-4 h-4 text-blue-500" />
              <span>+91 9999888877</span>
            </span>
          </div>

          <div className="text-xs md:text-sm font-bold flex flex-wrap items-center justify-center gap-6 text-muted-foreground uppercase tracking-widest">
            <Link to="/terms" className={hoverEffect}>Terms & Conditions</Link>
            <Link to="/privacy" className={hoverEffect}>Privacy Policy</Link>
            <Link to="/refund" className={hoverEffect}>Refund Policy</Link>
          </div>

          <div className="flex justify-center items-center pb-6">
            <span className="flex flex-wrap justify-center items-center gap-2 text-xs md:text-sm font-medium text-muted-foreground">
              <Copyright className="w-3.5 h-3.5" />
              <span>2025-2026</span>
              <span>|</span>
              <span>Made With</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span className="text-foreground font-bold">Arostate</span>
              <span>|</span>
              <span>All Rights Reserved.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};