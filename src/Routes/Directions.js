import { Routes, Route } from "react-router-dom";
import CycleData from "../pages/cycle-a/CycleData";
import EditCycle from "../pages/cycle-a/EditCycle";
import Home from '../pages/Home';
import EditPrecipitation from "../pages/precipitation/EditPrecipitation";
import Precipitation from '../pages/precipitation/PrecipitationData'
import Producers from '../pages/producers/index'



function Directions() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/precipitacion" element={<Precipitation />} />
      <Route path="/productores" element={<Producers />} />
      <Route path="/precipitacion/editar" element={<EditPrecipitation />}/>
      <Route path="/cicloAgricola" element={<CycleData />}/>
      <Route path="/cicloAgricola/agregar" element={<EditCycle />}/>
    </Routes>
  );
}

export default Directions;
