import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Metrics from "./components/Metrics";
import LandingPage from "./components/LandingPage";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="metrics" element={<Metrics />} />
          <Route path="checklist" element={<TodoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);