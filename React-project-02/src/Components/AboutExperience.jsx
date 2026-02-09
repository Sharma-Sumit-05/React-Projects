
export const AboutExperience = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 px-4">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-black mb-6">
            OUR SERVICES
          </h1>
          <p className="text-2xl text-gray-600 font-medium">Navigate Regulations Confidently With Our Expert Compliance Services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">         
          <div className="group flex flex-col items-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl  hover:scale-110 transition-transform duration-300">
            <div className="">
              <img 
                src="/Logo/compliance.webp" 
                alt="Compliance Services"
                className="w-95 h-90 object-cover"
              />
            </div>
            <div className="text-center space-y-3">
              <h2 className="text-3xl  space-y-10 font-bold text-gray-900 group-hover:text-red-600 transition-colors">COMPLIANCE</h2>
              <p className="text-gray-900 font-semibold  leading-relaxed max-w-md">
                Navigate Regulations Confidently With Our Expert Compliance Services.
              </p>
            </div>
          </div>

          {/* Card 2 - Corporate Law */}
          <div className="group flex flex-col items-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl  hover:scale-110 transition-transform duration-300">
            <div className="">
              <img 
                src="/Logo/consulting2.jpg" 
                alt="Compliance Services"
                className="w-95 h-90 object-cover"
              />
            </div>
            <div className="text-center space-y-3">
              <h2 className="text-3xl  space-y-10 font-bold text-gray-900 group-hover:text-red-600 transition-colors">CONSULTING</h2>
              <p className="text-gray-900 
             font-semibold  leading-relaxed max-w-md">
                Navigate your business success with expert consulting corporate advisory.
              </p>
            </div>
          </div>

          {/* Card 3 - Advisory */}
          <div className="group flex flex-col items-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl  hover:scale-110 transition-transform duration-300">
            <div className="">
              <img 
                src="/Logo/tax.jpg" 
                alt="Compliance Services"
                className="w-95 h-90 object-cover"
              />
            </div>
            <div className="text-center space-y-3">
              <h2 className="text-3xl space-y-10 font-bold text-gray-900 group-hover:text-red-600 transition-colors">MANAGING TAX CONTROVERSIES</h2>
              <p className="text-gray-900 font-semibold leading-relaxed max-w-md">
                Tax Controversy Management That Is Skilled For Your Business Confidence.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
