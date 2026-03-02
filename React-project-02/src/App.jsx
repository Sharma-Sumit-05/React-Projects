import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout"; // Path updated to point to Components
import { Home } from "./pages/Home";
import { Proprietorship } from "./pages/Setup/Proprietorship";
import { UnregisteredPartnership } from "./pages/Setup/UnregisteredPartnership"; 
import {Partnership} from "./pages/Setup/Partnership";
import {LLPRegistration} from "./pages/Setup/LLPRegistration";
import {OnePersonCompanyRegistration} from "./pages/Setup/OnePersonCompanyRegistration";
import { PrivateLimitedCompany } from "./pages/Setup/PrivateLimitedCompany";
import { PublicLimitedCompany } from "./pages/Setup/PublicLimitedCompany";
import { Section8Company } from "./pages/Setup/Section8Company";

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
             <Route path="/setup/private-limited-company" element={<PrivateLimitedCompany />} />
             <Route path="/setup/public-limited-company" element={<PublicLimitedCompany />} />
             <Route path="/setup/section-8-company" element={<Section8Company />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;