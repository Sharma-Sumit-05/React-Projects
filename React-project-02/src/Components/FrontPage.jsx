export const FrontPage = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 py-10 text-center">
      <div className="max-w-6xl mx-auto w-full">

        <div className="mb-8 md:mb-10 lg:mb-14">
          <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-medium">
            Let's connect to save your{" "}
            <span className="text-blue-500">Time & Money</span> on
          </span>
        </div>


        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl xl:text-7xl font-bold">
            Legal Compliance
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-5xl text-blue-500 font-semibold">
            In India
          </div>
        </div>


        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
            type="search"
            placeholder="Search services..."
            className="
    w-full
    max-w-6xl
    px-6 py-4
    text-black *:text-semibold
    rounded-xl border
    bg-white
    border-gray-500
    transition-all duration-300 ease-out

    hover:border-[#53A2BE] hover:bg-[#53A2BE]/10
    hover:ring-2 hover:ring-[#53A2BE]/50
    hover:shadow-[0_0_20px_rgba(83,162,190,0.4)]

    dark:hover:border-[#ABDAFC] dark:hover:bg-[#ABDAFC]/10
    dark:hover:ring-2 dark:hover:ring-[#ABDAFC]/50
    dark:hover:shadow-[0_0_20px_rgba(171,218,252,0.5)]
     dark:hover:text-white

    focus:outline-none focus:ring-2 focus:ring-blue-400
  "
          />
        </div>

        <button
          className="w-full sm:w-auto px-8 py-3 rounded-full text-lg mt-10 text-black
              border border-gray-500 bg-white
              transition-all duration-300 ease-out
              
              hover:border-[#53A2BE] hover:bg-[#53A2BE]/10
              hover:ring-2 hover:ring-[#53A2BE]/50
              hover:shadow-[0_0_20px_rgba(83,162,190,0.4)]
               dark:hover:text-white

            "
        >
          Search
        </button>
      </div>


    </section>
  );
};
