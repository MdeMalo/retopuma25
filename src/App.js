import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboards";
import Categorias from "./pages/Categories";
import ScrollToTop from "./components/ScrollToTop";
import Rutas from "./pages/Ruta";
import Catalogo from "./pages/catalogo";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/ruta" element={<Rutas />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
