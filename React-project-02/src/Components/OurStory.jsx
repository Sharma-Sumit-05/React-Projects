
import { Check } from "lucide-react";

export const OurStory = () => {
  return (
    <section className="min-h-screen bg-gray-300 flex flex-col justify-center items-center py-20 px-4">
      <div className="max-w-5xl w-full">
        {/* Fixed Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-semibold underline text-gray-800 pb-4">
            Our Story
          </h1>
        </div>

        {/* Fixed Paragraph */}
        <div className="text-lg leading-relaxed text-justify mb-10 space-y-6">
          <p>
            Arostat Solutions LLP is a professionally managed Corporate Legal Consultants firm operating from New Delhi. 
            It is run by qualified Company Secretaries, who hold multiple academic & professional qualifications at well systematized office.
          </p>
          <p>
            With a client-first approach and a deep understanding of company law, we ensure startups, SMEs, and established 
            companies get seamless corporate governance support. Our team ensures your business remains on the right side of the law—always.
          </p>
          <p>
            From business formation to boardroom governance, we deliver solutions built on reliability, confidentiality, and precision.
          </p>
          <p>
            Arostat Solutions LLP is a full-service corporate law advisory firm with boutique expertise in Companies Act, 
            Debt Syndication, FEMA, Joint Ventures, Mergers & Acquisitions, Due Diligence Services, Private Equity, 
            LLP Registration, Intellectual Property Rights, etc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

          <div className="flex items-center space-x-4 p-8  border border-gray-500 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all group">
            <div className="w-10 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Check className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <div className="font-bold text-2xl text-gray-900">+12</div>
              <div className="text-sm font-medium text-gray-600">Years of Industry Experience</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-8 border border-gray-500 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Check className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <div className="font-bold text-2xl text-gray-900">+30</div>
              <div className="text-sm font-medium text-gray-600">Team of Experts</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-8 border border-gray-500 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Check className="w-7 h-7 text-red-600" />
            </div>
            <div>
              <div className="font-bold text-2xl text-gray-900">100%</div>
              <div className="text-sm font-medium text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-8 border border-gray-500 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Check className="w-7 h-7 text-purple-600" />
            </div>
            <div>
              <div className="font-bold text-2xl text-gray-900">Quick</div>
              <div className="text-sm font-medium text-gray-600">Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
