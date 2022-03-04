import React, { useEffect, useState } from 'react';
import axiosClient from '../../config/axiosClient';


function CycleData() {
 const [cycles, setCycles] = useState([]);

 const getCycles = async () => {
   const response = await axiosClient.get('/api/v1/ciclo-agricola')
   console.log(response.data)
    setCycles(response.data);
 };

 useEffect(() => {
   getCycles();
 }, []);

 const rederCycle = () => {
   return (
<tbody>
  {
    cycles.map((cycle, index) => (
      <tr>
      <th scope="row">{index +1}</th>
      <td>{cycle.cicloAgricola}</td>
      <td>{cycle.fecha}</td>
      <td>{cycle.fase}</td>
    </tr>
    ))
  }
</tbody>
   );
 };

  return (
    <div>
      <table className="table caption-top">
  <caption>Ciclo agricola</caption>
  <thead>
    <tr>
      <th scope="col">Ciclo Agricola</th>
      <th scope="col">Fecha</th>
      <th scope="col">Fase</th>
    </tr>
  </thead>

</table>
    </div>
  )
}

export default CycleData