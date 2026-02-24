import { ShieldCheck, Users, Star, Zap } from "lucide-react";

export const OurStory = () => {
  const stats = [
    { num: "+5", label: "Years Exp.", icon: <ShieldCheck className="w-5 h-5" />, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { num: "+30", label: "Experts", icon: <Users className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-500/10" },
    { num: "100%", label: "Satisfied", icon: <Star className="w-5 h-5" />, color: "text-amber-500", bg: "bg-amber-500/10" },
    { num: "Fast", label: "Service", icon: <Zap className="w-5 h-5" />, color: "text-purple-500", bg: "bg-purple-500/10" }
  ];

  return (
    <section className="relative min-h-screen lg:h-screen w-full flex items-center justify-center overflow-hidden bg-background py-10 md:py-20 lg:py-0">
      
<div className="absolute inset-0 z-0 flex items-center justify-center lg:justify-end p-4 md:p-8 pointer-events-none">
  <img
    src="/Logo/logo.png"
    alt="Arostat Logo"
    className="w-[85%] md:w-[70%] opacity-35 md:opacity-30 lg:h-[110%] lg:w-auto object-contain transition-all duration-700 lg:translate-x-[5%] xl:translate-x-[5%] lg:opacity-40"
  />
</div>

      <div className="container relative z-10 px-6 md:px-12 mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* left side */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col justify-center space-y-6 md:space-y-10">
            
            <div className="space-y-3 md:space-y-5">
              <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black text-foreground">
                Our <span className="text-primary italic">Story</span>
              </h1>
            </div>

            <div className="space-y-4 md:space-y-6 text-base md:text-xl text-muted-foreground max-w-2xl p-5 md:p-0 rounded-3xl">
              <p className="leading-relaxed text-foreground font-semibold text-justify">
                Arostat Solutions LLP is a premier Corporate Legal firm in New Delhi, led by elite Company Secretaries with multiple professional qualifications.
              </p>
              <p className="leading-relaxed text-justify font-semibold">
                With a client-first approach, we ensure startups and SMEs get seamless corporate governance support. From business formation to M&A, our team ensures you stay compliant—always.
              </p>
              <p className="leading-relaxed text-justify font-semibold">
                We deliver boutique expertise in the Companies Act, FEMA, and Intellectual Property Rights for businesses of all sizes, ensuring reliability and precision.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="group p-4 rounded-2xl bg-card/90 lg:bg-card/40 border border-border/50 hover:border-primary transition-all flex flex-col items-start shadow-sm hover:shadow-2xl hover:-translate-y-2 dark:primary">
                  <div className={`w-7 h-7 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-foreground">{stat.num}</div>
                  <div className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />
        </div>
      </div>
    </section>
  );
};