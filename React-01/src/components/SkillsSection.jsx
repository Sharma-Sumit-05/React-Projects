


import { useState } from "react"
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 80, category: "backend" },  
  { name: "Express", level: 85, category: "backend" },  
  { name: "MongoDB", level: 90, category: "backend" }, 
  { name: "GraphQL", level: 65, category: "backend" }, 
  
  // Tools
  { name: "Git/GitHub", level: 92, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "VS Code", level: 98, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill) => 
    activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            My <span className="text-primary drop-shadow-lg">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Proficiency levels across modern web technologies
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wider transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 group",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-primary/25"
                  : "bg-card text-foreground border border-border/50 hover:bg-accent hover:border-primary/50"
              )}
            >
              {activeCategory === category && (
                <div className="w-2 h-2 bg-primary-foreground rounded-full animate-ping group-hover:hidden" />
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group relative bg-card/90 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 hover:bg-accent/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-4 transition-all duration-700 overflow-hidden cursor-pointer"
            >
              {/* Background shine effect */}
              <div className="absolute inset-0 bg-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                {/* Skill name */}
                <div className="mb-6">
                  <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors tracking-tight">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-secondary/40 h-2 rounded-full overflow-hidden group-hover:bg-secondary/60 transition-all duration-500">
                    <div 
                      className="bg-primary to-primary/80 h-2 rounded-full shadow-md flex-none origin-left transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                {/* Level indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-primary group-hover:scale-110 transition-transform">
                    {skill.level}%
                  </span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground/70">
                    <span className="w-3 h-3 bg-primary/50 rounded-full group-hover:bg-primary/70 transition-colors"></span>
                    <span className="font-medium">{skill.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 pt-16 border-t border-border/30 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group p-8 rounded-2xl hover:bg-accent/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
            <div className="text-4xl font-black text-primary mb-2">{skills.length}+</div>
            <div className="text-muted-foreground font-semibold">Skills Mastered</div>
          </div>
          <div className="group p-8 rounded-2xl hover:bg-accent/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
            <div className="text-4xl font-black text-primary mb-2">95%</div>
            <div className="text-muted-foreground font-semibold">Client Satisfaction</div>
          </div>
          <div className="group p-8 rounded-2xl hover:bg-accent/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
            <div className="text-4xl font-black text-primary mb-2">50+</div>
            <div className="text-muted-foreground font-semibold">Projects Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
};
