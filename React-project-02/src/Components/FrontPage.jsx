export const FrontPage = () => {
  return (
  <section className=" relative min-h-screen flex flex-col px-4 pb-10 text-center justify-center ">
    <div className="container max-w-6xl mx-auto">
     <div className="">
      <span className="text-4xl">
        Let's connect to save your <span className="text-blue-500">Time & Money</span> on
      </span>
     </div>
     <div className="text-8xl pt-10 ">
      <h1>Legal Compliance</h1>
      <div className="text-6xl text-blue-500">In India</div>
     </div>
     {/* Search bar */}
     <div>
      <input type="search" placeholder="Search services... "
      className="w-full pl-10 pr-4 py-3 mt-10 rounded-xl border placeholder-white  hover:border-[#53A2BE] hover:bg-[#53A2BE]/10
  hover:ring-2 hover:ring-[#53A2BE]/50
  hover:shadow-[0_0_20px_rgba(83,162,190,0.4)]
  

  dark:border-gray-700 dark:bg-gray-900/80
  dark:hover:border-[#ABDAFC] dark:hover:bg-[#ABDAFC]/10
  dark:hover:ring-2 dark:hover:ring-[#ABDAFC]/50
  dark:hover:shadow-[0_0_20px_rgba(171,218,252,0.5)]
  
  hover:scale-[1.02] transition-all duration-400 ease-out"/>

<button className="px-12 py-5 mt-10 rounded-full text-xl font-semibold border border-gray-200 bg-white backdrop-blur-sm

  hover:border-[#53A2BE] hover:bg-[#53A2BE]/10
  hover:ring-2 hover:ring-[#53A2BE]/50
  hover:shadow-[0_0_20px_rgba(83,162,190,0.4)]
  

  dark:border-gray-700 dark:bg-gray-900/80
  dark:hover:border-[#ABDAFC] dark:hover:bg-[#ABDAFC]/10
  dark:hover:ring-2 dark:hover:ring-[#ABDAFC]/50
  dark:hover:shadow-[0_0_20px_rgba(171,218,252,0.5)]
  
  hover:scale-[1.02] transition-all duration-400 ease-out">
  Search
</button>
     </div>
      </div>
  </section>
  );
};