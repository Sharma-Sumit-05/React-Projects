// import { Briefcase, Code, User } from "lucide-react"

// export const AboutMe = () => {
//   return <section id="about" className="py-24 px-24 relative">
//     <div className="container mx-auto max-w-5xl">
//       <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//         About <span className="text-primary"> Me</span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap=12 items-center">
//         <div className="space-y-6">
//           <h3 className="text-2xl font-semibold">Passionate web Developer & tech Creator</h3>

//           <p className="text-muted-foreground">
//             Passionate web developer & tech creator crafting pixel-perfect websites that blend stunning design with flawless functionality. I specialize in React, Tailwind CSS, Node.js, and modern full-stack solutions – turning your vision into high-performance digital experiences.
//           </p>

//           <p className="text-muted-foreground">
//             From responsive portfolios and e-commerce stores to SEO-optimized blogs, I build sites that not only look amazing but convert visitors into customers.

//             Clean code. Fast loading. Mobile-first. Let's create something extraordinary together.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
//             <a href="#contact" className="cosmic-button">
//               Get In Touch
//             </a>

//             <a href="#github" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
//               click here
//             </a>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 gap-6">
//           <div className="gradient-border p-6 card-hover">
//             <div className="flex items-start gap-4">
//               <div className="p-3 rounded-full bg-primary/10">
//                 <Code className="h-6 w-6 text-primary" />
//               </div>
//               <div className="text-left">
//                 <h4 className="font-semibold text-lg">Wev development</h4>
//                 <p className="text-muted-foreground">Creating respondive websites and wev applications with modern framewoeks.</p>
//               </div>
//             </div>
//           </div>
//           <div className="gradient-border p-6 card-hover">
//             <div className="flex items-start gap-4">
//               <div className="p-3 rounded-full bg-primary/10">
//                 <User className="h-6 w-6 text-primary" />
//               </div>
//                               <div className="text-left">
//                   <h4 className="font-semibold text-lg">Project Management </h4>
//                   <p className="text-muted-foreground">Leading projects from conception to completion with agile methodologies.</p>
//                 </div>
//             </div>
//           </div>
//           <div className="gradient-border p-6 card-hover">
//             <div className="flex items-start gap-4">
//               <div className="p-3 rounded-full bg-primary/10">
//                 <Briefcase className="h-6 w-6 text-primary" />
//               </div>
//                <div className="text-left">
//                   <h4 className="font-semibold text-lg">UI/UX Design</h4>
//                   <p className="text-muted-foreground">Desigining intuitive user interfaces and seamless user experiences.</p>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   </section>
// }

import { Briefcase, Code, User, ChevronRight } from "lucide-react"

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            About <span className="text-primary drop-shadow-lg">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer passionate about crafting exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8 lg:pr-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-foreground mb-4 leading-tight">
                Passionate Web Developer & Tech Creator
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I craft <span className="font-semibold text-primary">pixel-perfect websites</span> that blend stunning design with flawless functionality. Specializing in modern tech stacks like React, Tailwind CSS, and Node.js.
                </p>
                
                <p>
                  From <span className="font-semibold text-primary">responsive portfolios</span> and <span className="font-semibold text-primary">e-commerce stores</span> to <span className="font-semibold text-primary">SEO-optimized blogs</span>, I build sites that convert visitors into customers.
                </p>
                
                <p className="font-semibold text-lg text-foreground/90">
                  Clean code. Lightning fast. Mobile-first. <span className="text-primary">Let's build something extraordinary!</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a href="#contact" className="cosmic-button group shadow-xl hover:shadow-primary/25 hover:shadow-2xl hover:-translate-y-1">
                <span>Get In Touch</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform ml-2" />
              </a>
              <a href="#github" className="px-8 py-3 font-semibold text-lg border-2 border-primary hover:bg-primary/10 hover:shadow-lg rounded-2xl transition-all duration-500 hover:-translate-y-1 flex items-center gap-2">
                View GitHub →
              </a>
            </div>
          </div>

          {/* Right - Skills Cards */}
          <div className="space-y-6">
            {[
              {
                icon: Code,
                title: "Web Development",
                desc: "Building responsive websites and web applications with modern frameworks like React & Next.js"
              },
              {
                icon: Briefcase,
                title: "Project Management",
                desc: "Leading projects from concept to deployment using agile methodologies and clean code practices"
              },
              {
                icon: User,
                title: "UI/UX Design",
                desc: "Designing intuitive interfaces and seamless user experiences that users love"
              }
            ].map(({ icon: Icon, title, desc }, i) => (
              <div 
                key={title}
                className="group relative p-8 rounded-2xl bg-card hover:bg-accent/50 border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-3 transition-all duration-700 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="flex items-start gap-6 relative z-10">
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 flex-none">
                    <Icon className="h-7 w-7 text-primary drop-shadow-lg" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors tracking-tight">{title}</h4>
                    <p className="text-muted-foreground/90 group-hover:text-foreground/95 leading-relaxed text-lg font-medium">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
