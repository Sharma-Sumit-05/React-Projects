

import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-primary/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container max-w-5xl mx-auto text-center z-10 relative">
        <div className="space-y-8 max-w-4xl mx-auto">
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            <span className="animate-fade-in block text-foreground/95 mb-4">Hi, I'm</span>
            <span className="animate-fade-in-delay-1 inline-block text-primary drop-shadow-lg">Trail</span>
            <span className="animate-fade-in-delay-2 inline-block ml-4 bg-primary to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">Portfolio</span>
          </h1>

        
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground/90 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-3 px-4">
            Full-Stack Web Developer crafting <span className="font-semibold text-primary">stunning portfolios</span>, 
            <span className="font-semibold text-primary"> e-commerce stores</span>, and 
            <span className="font-semibold text-primary">SEO-optimized blogs</span> that convert.
          </p>

          
          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button group shadow-2xl hover:shadow-primary/25 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <span>View My Work</span>
              <ArrowDown className="h-5 w-5 group-hover:translate-x-1 transition-transform ml-2" />
            </a>
            <a href="#contact" className="px-8 py-3 font-semibold text-lg border-2 border-primary/50 hover:bg-primary/5 hover:border-primary hover:shadow-lg rounded-2xl transition-all duration-500 hover:-translate-y-1">
              Get In Touch
            </a>
          </div>

          
          <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base text-muted-foreground/70 pt-8 animate-fade-in-delay-5">
            <span>⭐ Projects Delivered Fast</span>
            <span>⚡ Lightning Fast Sites</span>
            <span>📱 Mobile-First Design</span>
          </div>
        </div>
      </div>


      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center group z-20">
        <span className="text-sm font-semibold tracking-wider mb-4 relative group-hover:text-primary transition-all duration-500 bg-background/80 px-4 py-2 rounded-full backdrop-blur-sm">
          Scroll to Explore
        </span>
        <div className="relative">
          <ArrowDown className="h-7 w-7 text-primary/90 group-hover:text-primary group-hover:scale-125 transition-all duration-500 relative z-10 animate-bounce" style={{animationDelay: '0.2s'}} />
          <div className="absolute inset-0 w-8 h-8 border-2 border-primary/40 rounded-full animate-ping group-hover:border-primary/60"></div>
          <div className="absolute inset-1 w-6 h-6 border-2 border-primary/20 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </section>
  );
};
