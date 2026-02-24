export const AboutExperience = () => {
  const services = [
    {
      title: "COMPLIANCE",
      desc: "Navigate Regulations Confidently With Our Expert Compliance Services.",
      img: "/Logo/compliance.webp",
    },
    {
      title: "CONSULTING",
      desc: "Navigate your business success with expert consulting corporate advisory.",
      img: "/Logo/consulting2.jpg",
    },
    {
      title: "TAX MANAGEMENT",
      desc: "Tax Controversy Management That Is Skilled For Your Business Confidence.",
      img: "/Logo/tax.jpg",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-16 md:py-24 px-4 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 uppercase">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto">
            Providing comprehensive corporate solutions to help your business thrive in a regulated environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center p-2 bg-card rounded-2xl shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="w-full overflow-hidden rounded-2xl aspect-auto">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="p-8 text-center space-y-4 flex-1 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-card-foreground">
                  {service.title}
                </h2>
                <div className="h-1 w-12 bg-primary mx-auto rounded-full transition-all duration-500 group-hover:w-24" />
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};