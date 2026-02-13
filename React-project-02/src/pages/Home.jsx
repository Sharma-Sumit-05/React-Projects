import { AboutExperience } from "../Components/AboutExperience"
import { BestServices } from "../Components/BestServices"
import { Footer } from "../Components/Footer"
import { Front02 } from "../Components/Front02"
import { FrontPage } from "../Components/FrontPage"
import { Navbar } from "../Components/Navbar"
import { OurStory } from "../Components/OurStory"
import { ThemeToggle } from "../Components/ThemeToggle"

export const Home = () => {
  return <div>
    {/* themetoggle */}
<ThemeToggle />

{/* navbar */}
     <Navbar /> 

     {/* Front Page */}
     <main>
<FrontPage />
<Front02 />
<OurStory />
<AboutExperience />
<BestServices />
     </main>
     {/* Footer */}
     <Footer />
  </div>
}