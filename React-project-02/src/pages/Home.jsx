import { FrontPage } from "../Components/FrontPage"
import { Navbar } from "../Components/Navbar"
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
     </main>
  </div>
}