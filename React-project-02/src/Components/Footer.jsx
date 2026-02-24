import { MapPin, Mail, Phone, Copyright, Heart   } from "lucide-react"

export const Footer = () => {
  return <section className="min-h-screen flex justify-center">
    <div className="w-full p-10">
      <div className="">
        <p className="text-justify text-xl pt-5 pb-10">This website is privately operated and is not affiliated with any government entity. We do not represent, are not endorsed by and are in no way connected to any government body or department. Our role is to act as an intermediary (Business Consultant) between registered users and professionals (such as chartered accountants, company secretaries, cost accountants, advocates, etc.). Additionally, we maintain our own team of experts. The form provided on this website is not intended for official registration purposes; it is designed to gather information from our clients to better understand their business or needs. By continuing to use this website, you acknowledge that we are a private company managing our operations independently. We offer assistance based on customer requests, and the fees collected on this website are for consulting services.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pb-10">
        <div>
          <h1 className="text-3xl text-left font-semibold text-blue-500 pt-5 pb-5 hover:border-b hover:border-blue-500 hover:border-t">Setup</h1>
          <ul className="text-left text-xl">
            <li className="hover:text-blue-600 p-2"><a href="#proprietorship">Proprietorship</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#unregistered-partnership">Unregistered Partnership</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#partnership">Partnership</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#llp-registration">LLP Registration</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#one-person-company-registration">One Person Company Registration</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#private-limited-company">Private Limited Company</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#public-limited-company">Public Limited Company</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#section-8-company">Section 8 Company</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#trust-registration">Trust Registration</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#society-registration">Society Registration</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#foreign-subsidiary-company-registration">Foreign Subsidiary Company Registration</a></li>
          </ul>
        </div>

        <div>
          <h1 className="text-3xl text-left font-semibold text-blue-500 pt-5 pb-5 hover:border-b hover:border-blue-500 hover:border-t">Registration</h1>
          <ul className="text-left text-xl">
            <li className="hover:text-blue-600 p-2"><a href="#udyam-registration">Udyam Registration</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#trademark-registration">Trademark Registration</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#fssai-registration">FSSAI Registration</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#spice-board-registration">Spice Board Registration</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#import-export-code">Import Export Code</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#legal-metrology-registration">Legal Metrology Registration</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#startup-india-registration">Startup India Registration</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#rgn-certification">RGN Certification</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#apmc-licence">APMC Licence</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#trade-licence">Trade Licence</a></li>
          </ul>
        </div>

        <div>
          <h1 className="text-3xl text-left font-semibold text-blue-500 pt-5 pb-5 hover:border-b hover:border-blue-500 hover:border-t">Compliances</h1>
          <ul className="text-left text-xl">
            <li className="hover:text-blue-600 p-2"><a href="#annual-compliance-of-llp">Annual Compliance of LLP</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#annual-compliance-of-private-limited">Annual Compliance of Private Limited</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#annual-compliance-of-public-ltd-company">Annual Compliance of Public Ltd Company</a></li>
            <li className="hover:text-blue-600 p-1"><a href="#event-based-compliance">Event Based Compliance</a></li>
            <li className="hover:text-blue-600 p-1"><a href="#dematerialization-of-shares">Dematerialization of Shares</a></li>
            <li className="hover:text-blue-600 p-1"><a href="#statutory-records-maintenance">Statutory Records Maintenance</a></li>
            <li className="hover:text-blue-600 p-1"><a href="#dir-3-kyc">DIR-3 KYC</a></li>
            <li className="hover:text-blue-600 p-1"><a href="#rbi-compliances">RBI Compliances</a></li>
            <li className="hover:text-blue-600 p-1"><a href="#fema-compliances">FEMA Compliances</a></li>
            <li className="hover:text-blue-600 p-1"><a href="#xbrl-filing">XBRL Filing</a></li>
            <li className="hover:text-blue-600 p-1"><a href="#charge-creation-satisfaction-compliances">Charge Creation & Satisfaction Compliances</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#foreign-subsidiary-company-compliance">Foreign Subsidiary Company Compliance</a></li>
          </ul>
        </div>

        <div>
          <h1 className="text-3xl text-left font-semibold text-blue-500 pt-5 pb-5 hover:border-b hover:border-blue-500 hover:border-t">Taxation</h1>
          <ul className="text-left text-xl">
            <li className="hover:text-blue-600 p-2"><a href="#gst-registration">GST Registration</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#epf-registration">EPF Registration</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#esi-registration">ESI Registration</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#itr-filing">ITR Filing</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#gst-return">GST Return</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#tds-return-filing">TDS Return Filing</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#80-iac-registration">80 IAC Registration</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#80g-and-12ab-registration">80G and 12AB Registration</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#gst-refund-filing">GST Refund Filing</a></li>
          </ul>
        </div>

        <div>
          <h1 className="text-3xl text-left font-semibold text-blue-500 pt-5 pb-5 hover:border-b hover:border-blue-500 hover:border-t">Restructuring</h1>
          <ul className="text-left text-xl">
            <li className="hover:text-blue-600 p-2"><a href="#change-in-name">Change in Name</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#change-in-shareholding">Change in Shareholding</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#change-in-object-of-company">Change in Object of Company</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#change-in-registered-office">Change in Registered Office</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#change-in-director">Change in Director</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#closure-of-llp">Closure of LLP</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#closure-of-private-company">Closure of Private Company</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#conversion-llp-to-pvt-ltd">Conversion of LLP into Pvt Ltd Company</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#conversion-pvt-ltd-to-llp">Conversion of Pvt Ltd into LLP</a></li>
            <li className="hover:text-blue-600 p-2"><a href="#merger">Merger</a></li>
          </ul>
        </div>
      </div>


<div className="space-y-10">
  {/* Contact Bar - Fully Responsive and Theme-Aware */}
  <div className="relative py-8 border-t border-b border-primary/30 bg-card/50 dark:bg-muted/20 rounded-2xl mx-4">
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-6xl mx-auto px-6">
      
      {/* Address */}
      <span className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-200 group text-center md:text-left">
        <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
        <span className="font-medium text-sm md:text-base">G-45/1, Laxmi-Park, Nangloi, West-Delhi-41</span>
      </span>

      {/* Email */}
      <span className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-200 group">
        <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
        <span className="font-medium text-sm md:text-base">xyz@arostatsolutionllp.com</span>
      </span>

      {/* Phone */}
      <span className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-200 group">
        <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
        <span className="font-medium text-sm md:text-base">+91 9999888877</span>
      </span>
    </div>
  </div>

  {/* Policy Links */}
  <div className="text-sm md:text-lg font-semibold flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
    <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
    <span className="hidden md:inline">|</span>
    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
    <span className="hidden md:inline">|</span>
    <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
  </div>

  {/* Copyright Line */}
  <div className="flex justify-center items-center pb-10">
    <span className="flex flex-wrap justify-center items-center gap-2 text-base md:text-xl font-semibold text-muted-foreground">
      <Copyright className="w-4 h-4" />
      <span>2025-2026</span>
      <span>|</span>
      <span>Made With</span>
      <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
      <span className="text-foreground">Arostate</span>
      <span>|</span>
      <span className="text-center">All Rights Reserved.</span>
    </span>
  </div>
</div>

    </div>
  </section>
}