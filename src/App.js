import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboards";
import Categorias from "./pages/Categories";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/categorias" element={<Categorias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
