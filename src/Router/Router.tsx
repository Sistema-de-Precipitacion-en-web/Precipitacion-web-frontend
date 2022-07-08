import { Routes, Route } from "react-router-dom";
import TablaCicloAgricola from "../pages/ciclo-agricola/TablaCicloAgricola";
import AgregarCiclo from "../pages/ciclo-agricola/AgregarCiclo";
import Home from "../pages/Home";
import AgregarPrecipitacion from "../pages/precipitaciones/AgregarPrecipitacion";
import Precipitation from "../pages/precipitaciones/Precipitacion";
import Producers from "../pages/producers/index";
import Estados from "../pages/estados/Estados";
import AgregarEstado from "../pages/estados/AgregarEstado";
import Municipios from "../pages/municipios/Municipios";
import AgregarMunicipio from "../pages/municipios/AgregarMunicipio";
import { Estaciones } from "../pages/estaciones/Estaciones";
import { AgregarEstacion } from "../pages/estaciones/AgregarEstacion";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Rutas ciclo agricola*/}
      <Route path="/ciclo-agricola" element={<TablaCicloAgricola />} />
      <Route path="/ciclo-agricola/agregar" element={<AgregarCiclo />} />
      {/* Rutas estados*/}
      <Route path="/estados" element={<Estados />} />
      <Route path="/estados/agregar" element={<AgregarEstado />} />
      {/* Rutas precipitacion*/}
      <Route path="/precipitacion" element={<Precipitation />} />
      <Route path="/precipitacion/agregar" element={<AgregarPrecipitacion />} />
      {/* Rutas municipios */}
      <Route path="/municipios" element={<Municipios />} />
      <Route path="/municipios/agregar" element={<AgregarMunicipio />} />
      {/* Rutas productores */}
      <Route path="/productores" element={<Producers />} />
      <Route path="/estaciones" element={<Estaciones />} />
      <Route path="/estaciones/agregar" element={<AgregarEstacion />} />
    </Routes>
  );
}

export default Router;
