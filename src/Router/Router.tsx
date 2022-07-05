import { Routes, Route } from "react-router-dom";
import TablaCicloAgricola from "../pages/ciclo-agricola/TablaCicloAgricola";
import AgregarCiclo from "../pages/ciclo-agricola/AgregarCiclo";
import Home from "../pages/Home";
import EditPrecipitation from "../pages/precipitation/EditPrecipitation";
import Precipitation from "../pages/precipitation/PrecipitationData";
import Producers from "../pages/producers/index";
import States from "../pages/states/States";
import EditStates from "../pages/states/EditStates";
import Municipalities from "../pages/municipalities/Municipalities";
import EditMunicipalities from "../pages/municipalities/EditMunicipalities";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Rutas ciclo agricola*/}
      <Route path="/cicloAgricola" element={<TablaCicloAgricola />} />
      <Route path="/cicloAgricola/agregar" element={<AgregarCiclo />} />
      {/* Rutas estados*/}
      <Route path="/estados" element={<States />} />
      <Route path="/estados/agregar" element={<EditStates />} />
      {/* Rutas precipitacion*/}
      <Route path="/precipitacion" element={<Precipitation />} />
      <Route path="/precipitacion/agregar" element={<EditPrecipitation />} />
      {/* Rutas municipios */}
      <Route path="/municipios" element={<Municipalities />} />
      <Route path="/municipios/agregar" element={<EditMunicipalities />} />
      {/* Rutas productores */}
      <Route path="/productores" element={<Producers />} />
    </Routes>
  );
}

export default Router;
