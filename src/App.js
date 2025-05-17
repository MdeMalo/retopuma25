import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboards";
import Categorias from "./pages/Categories";
import ScrollToTop from "./components/ScrollToTop";
import Rutas from "./pages/Ruta";
import Coleccion from "./pages/coleccion";
import Inscripciones from "./pages/inscripciones";
import Hoteles from "./pages/Hoteles";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/ruta" element={<Rutas />} />
        <Route path="/coleccion" element={<Coleccion />} />
        <Route path="/inscripciones" element={<Inscripciones />} />
        <Route path="/hoteles" element={<Hoteles />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
