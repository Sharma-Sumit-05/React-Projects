
const projects = [
  {
    id: 1,
    title: "Full Stack App",
    description: "Complete full-stack application with modern frontend and backend integration",
    image: "/project/good.jpg",
    tags: ["React", "Tailwind", "Supabase"]
  },
  {
    id: 2,
    title: "Frontend Mastery", 
    description: "Advanced frontend project showcasing modern React patterns and animations",
    image: "/project/images.jpg",
    tags: ["JavaScript", "React", "Tailwind"]
  },
  {
    id: 3,
    title: "Web Dev Showcase",
    description: "Portfolio demonstrating comprehensive web development skills and concepts",
    image: "/project/maxresdefault.jpg",
    tags: ["React", "Tailwind", "Supabase"]
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Featured <span className="text-primary drop-shadow-lg">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Here are my recent projects, each carefully crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-4 transition-all duration-700 border border-border/50 hover:border-primary/50 cursor-pointer h-full"
            >
              
              <div className="h-64 overflow-hidden relative group/image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/image:scale-110 group-hover/image:brightness-110"
                />
              </div>

              
              <div className="p-8 relative z-10">
              
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full group-hover:scale-105 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground/90 leading-relaxed mb-8 text-lg font-medium">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
