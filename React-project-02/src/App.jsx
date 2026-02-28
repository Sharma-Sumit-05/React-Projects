import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout"; // Path updated to point to Components
import { Home } from "./pages/Home";
import { Proprietorship } from "./pages/Setup/Proprietorship";
import { UnregisteredPartnership } from "./pages/Setup/UnregisteredPartnership"; 
import {Partnership} from "./pages/Setup/Partnership";
import {LLPRegistration} from "./pages/Setup/LLPRegistration";
import {OnePersonCompanyRegistration} from "./pages/Setup/OnePersonCompanyRegistration";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup/proprietorship" element={<Proprietorship />} />
           <Route path="/setup/unregistered-partnership" element={<UnregisteredPartnership />} />
            <Route path="/setup/partnership" element={<Partnership />} />
            <Route path="/setup/llp-registration" element={<LLPRegistration />} />
            <Route path="/setup/one-person-company-registration" element={<OnePersonCompanyRegistration />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;