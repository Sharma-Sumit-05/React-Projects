export const Front02 = () => {
  return <section className=" min-h-screen flex flex-col mb-10">
    <div className="bottom-0 left-0 w-full overflow-hidden bg-blue-50 py-7">
      <div className="flex w-max animate-scroll whitespace-nowrap items-center">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="flex items-center mx-12 gap-4"
          >

            <img
              src="/Logo/logo.png"
              alt="Arostat Logo"
              className="h-10 w-auto"
            />


            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
              Arostat Solutions LLP
            </span>
          </div>
        ))}

      </div>
    </div>
    <div>
<div className="mt-12">
  <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl">
    Most Popular <span className="font-bold">Offering!</span>
  </h1>
</div>

      <div className= "flex items-center justify-evenly mb-10">
      <button className="
    px-8 py-4 mt-10
    rounded-full border
    bg-white text-black text-bold 
    border-gray-500
    transition-all duration-300 ease-out

    hover:border-[#53A2BE] hover:bg-[#53A2BE]/10
    hover:ring-2 hover:ring-[#53A2BE]/50
    hover:shadow-[0_0_20px_rgba(83,162,190,0.4)]
">StartBusiness</button>
      <button className="
    px-8 py-4 mt-10
    rounded-full border
    bg-white text-black text-bold 
    border-gray-500
    transition-all duration-300 ease-out

    hover:border-[#53A2BE] hover:bg-[#53A2BE]/10
    hover:ring-2 hover:ring-[#53A2BE]/50
    hover:shadow-[0_0_20px_rgba(83,162,190,0.4)]
">Manage Business</button>
      <button className="
    px-8 py-4 mt-10
    rounded-full border
     border-gray-500
    bg-white text-black text-bold 
    transition-all duration-300 ease-out

    hover:border-[#53A2BE] hover:bg-[#53A2BE]/10
    hover:ring-2 hover:ring-[#53A2BE]/50
    hover:shadow-[0_0_20px_rgba(83,162,190,0.4)]
">Protect Business</button>
</div>

<div className="grid grid-cols-1 gap-6 p-6 text-left md:grid-cols-2 lg:grid-cols-3">
  <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
    <h1 className="text-2xl font-bold mb-2">Private Limited Incorporation</h1>
    <p className="text-gray-800 mb-4">
      Most popular type of Corporate entity and recommended for the Start-ups.
    </p>
    <button className="mt-10 bg-white text-blue-600 border border-blue-500 rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white">
      View More
    </button>
  </div>

  <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 ">
    <h1 className="text-2xl font-bold mb-2">Limited Liability Partnership(LLP)</h1>
    <p className="text-gray-800 mb-4">
      Registered under MCA and ensuring Limited liabilities for its Partners.
    </p>
    <button className="mt-10 bg-white text-blue-600 border border-blue-500 rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white">
      View More
    </button>
  </div>

  <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
    <h1 className="text-2xl font-bold mb-2">One Person Company</h1>
    <p className="text-gray-800 mb-4">
     Registered under MCA and is recommended to the Start-ups having Single Founder.
    </p>
    <button className="mt-10 bg-white text-blue-600 border border-blue-500 rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white">
      View More
    </button>
  </div>

  <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
    <h1 className="text-2xl font-bold mb-2">Partnership Firm</h1>
    <p className="text-gray-800 mb-4">
      Governed by Partnership Act and is recommended for Idea stage business.
    </p>
    <button className="mt-10 bg-white text-blue-600 border border-blue-500 rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white">
      View More
    </button>
  </div>

  <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
    <h1 className="text-2xl font-bold mb-2">Proprietorship Firm</h1>
    <p className="text-gray-800 mb-4">
      Simplest form of doing the business and has no individual business existence.
    </p>
    <button className="mt-10 bg-white text-blue-600 border border-blue-500 rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white">
      View More
    </button>
  </div>

  <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
    <h1 className="text-2xl font-bold mb-2">Foreign Subsidiary</h1>
    <p className="text-gray-800 mb-4">
      Company whose shares are majorly owned by foreign Parent Company.
    </p>
    <button className="mt-10 bg-white text-blue-600 border border-blue-500 rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white">
      View More
    </button>
  </div>
</div>

    </div>
  </section>
}