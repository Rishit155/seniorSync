import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./components/Metrics";
import LandingPage from "./components/LandingPage";
import Metrics from "./components/Metrics";
import Medicine from "./components/Medicine";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          {/* Set the default route to the checklist */}
          <Route path="/" element={<Metrics />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="medicine" element={<Medicine />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
