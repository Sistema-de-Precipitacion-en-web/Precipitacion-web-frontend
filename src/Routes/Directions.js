import { Routes, Route } from "react-router-dom";
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
    </Routes>
  );
}

export default Directions;
