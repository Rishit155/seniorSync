import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./components/Games";
import LandingPage from "./components/LandingPage";
import TodoList from "./components/TodoList";
import Medicine from "./components/Medicine";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          {/* Set the default route to the checklist */}
          <Route path="/" element={<TodoList />} />
          <Route path="checklist" element={<TodoList />} />
          <Route path="medicine" element={<Medicine />} />
          <Route path="games" element={<Games />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
