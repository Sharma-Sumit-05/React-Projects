export const FrontPage = () => {
  return (
    <section className="relative min-h-screen bg-background flex flex-col justify-center px-4 py-10 md:py-16 text-center">
      <div className="container mx-auto w-full max-w-6xl">
        
        {/* Subtitle */}
        <div className="mb-6 md:mb-8 lg:mb-12">
          <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-foreground/80">
            Let's connect to save your{" "}
            <span className="text-primary font-semibold">Time & Money</span> on
          </span>
        </div>

        {/* Main Title */}
        <div className="space-y-3 md:space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground leading-tight">
            Legal Compliance
          </h1>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-5xl text-primary font-bold">
            In India
          </div>
        </div>

        {/* Search Input */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-8">
          <input
            type="search"
            placeholder="Search services..."
            className="
              w-full max-w-2xl px-6 py-4
              text-foreground font-medium
              rounded-2xl border-2 border-border
              bg-card
              shadow-lg
              
              focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary
              hover:border-primary/50 hover:shadow-xl
              transition-all duration-300 ease-out
              
              placeholder:text-foreground/60
            "
          />
        </div>

        {/* Search Button */}
        <button className="
          w-full sm:w-auto px-10 py-4 rounded-2xl text-lg font-semibold
          bg-card border-2 border-border shadow-lg
          text-foreground
          hover:bg-primary hover:text-primary-foreground 
          hover:shadow-xl hover:scale-105 hover:border-primary
          active:scale-95
          transition-all duration-300 ease-out
          md:px-12 md:py-4 md:text-xl
        ">
          Search
        </button>
      </div>
    </section>
  );
};
