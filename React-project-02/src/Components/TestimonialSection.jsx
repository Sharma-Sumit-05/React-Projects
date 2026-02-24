export const TestimonialSection = () => {
  const testimonials = [
    { name: "Shivam Sharma", role: "CEO, Arostat", content: "Transformed our compliance workflow with seamless integration and expert guidance", avatar: "S" },
    { name: "Priya Patel", role: "CTO, FinTech Solutions", content: "Exceptional service delivery and deep regulatory knowledge.", avatar: "P" },
    { name: "Rajesh Kumar", role: "Founder, LegalTech Startup", content: "Outstanding results with proactive compliance strategies.", avatar: "R" }
  ];

  return (
    <section className="min-h-[70vh] md:min-h-screen py-12 md:py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto text-center mb-12 md:mb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground mb-4">
          Testimonials from <span className="text-primary font-bold">our clients</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Hear success stories from businesses we've helped thrive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="group bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-lg 
                      hover:shadow-2xl hover:-translate-y-3 hover:border-primary/50
                      transition-all duration-500 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-2xl flex items-center justify-center 
                              text-2xl md:text-3xl font-black text-primary-foreground shadow-lg">
                {testimonial.avatar}
              </div>
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl lg:text-2xl font-black text-foreground 
                              group-hover:text-primary truncate leading-tight">
                  {testimonial.name}
                </h3>
                <p className="text-foreground/70 text-sm md:text-base font-medium">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-foreground/90 leading-relaxed italic text-base md:text-lg font-medium">
              "{testimonial.content}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
