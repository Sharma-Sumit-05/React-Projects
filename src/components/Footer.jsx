import { ArrowUp } from "lucide-react"

export const FooterSection = () => {
  return (
    <footer className="py-12 px-4 md:px-8 bg-gradient-to-t from-card to-muted/50 relative border-t border-border/50 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-muted-foreground font-medium">
          © {new Date().getFullYear()} Sumitdev.co. All rights reserved.
        </p>

        <a 
          href="#hero" 
          className="group p-3 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 text-primary transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </footer>
  )
}
