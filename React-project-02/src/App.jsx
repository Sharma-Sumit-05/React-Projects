import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout"; // Path updated to point to Components
import { Home } from "./pages/Home";
import { Proprietorship } from "./pages/Setup/Proprietorship";
import { UnregisteredPartnership } from "./pages/Setup/UnregisteredPartnership"; 
import {Partnership} from "./pages/Setup/Partnership";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup/proprietorship" element={<Proprietorship />} />
           <Route path="/setup/unregistered-partnership" element={<UnregisteredPartnership />} />
            <Route path="/setup/partnership" element={<Partnership />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;