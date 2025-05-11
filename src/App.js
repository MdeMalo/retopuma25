import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboards";
import Categorias from "./pages/Categories";
import ScrollToTop from "./components/ScrollToTop";
import Rutas from "./pages/Ruta";
import Coleccion from "./pages/coleccion";
import Inscripciones from "./pages/inscripciones";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/retopuma25" element={<Dashboard />} />
        <Route path="/retopuma25/categorias" element={<Categorias />} />
        <Route path="/retopuma25/ruta" element={<Rutas />} />
        <Route path="/retopuma25/coleccion" element={<Coleccion />} />
        <Route path="/retopuma25/inscripciones" element={<Inscripciones />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
