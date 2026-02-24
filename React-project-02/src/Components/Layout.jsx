import { Navbar } from "./Navbar"; // Now in the same folder, so use "./"
import { Footer } from "./Footer"; // Now in the same folder, so use "./"
import { ThemeToggle } from "./ThemeToggle"; // Now in the same folder, so use "./"

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ThemeToggle />
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};