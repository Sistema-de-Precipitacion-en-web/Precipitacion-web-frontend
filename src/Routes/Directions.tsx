import { Routes, Route } from "react-router-dom";
import CycleData from "../pages/cycle-a/CycleData.tsx";
import EditCycle from "../pages/cycle-a/EditCycle.tsx";
import Home from "../pages/Home.tsx";
import EditPrecipitation from "../pages/precipitation/EditPrecipitation.tsx";
import Precipitation from "../pages/precipitation/PrecipitationData.tsx";
import Producers from "../pages/producers/index.tsx";
import States from "../pages/states/States.tsx";
import EditStates from "../pages/states/EditStates.tsx";
import Municipalities from "../pages/municipalities/Municipalities.tsx";
import EditMunicipalities from "../pages/municipalities/EditMunicipalities.tsx";

function Directions() {
  return (
    <Routes>
      <Route path="/Precipitacion-web-frontend" element={<Home />} />
      {/* Rutas ciclo agricola*/}
      <Route path="/cicloAgricola" element={<CycleData />} />
      <Route path="/cicloAgricola/agregar" element={<EditCycle />} />
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

export default Directions;
