import React, { useEffect, useState } from "react";
import axiosClient from "../../config/axiosClient";
import Button from "../../components/Button";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './tableStyle.css'

function CycleData() {
  const [cycles, setCycles] = useState([]);

  const getCycles = async () => {
    const response = await axiosClient.get("/api/v1/ciclo-agricola");
    console.log(response.data.data[0]);
    setCycles(response.data.data);
  };
  
  useEffect(() => {
    getCycles();
  }, []);

  const rederCycle = () => {
    return (
      <tbody>
        {cycles.map((cycle, index) => (
          <tr key={index}>
            <td>{cycle.cicloAgricola}</td>
            <td>{cycle.semana}</td>
            <td>{cycle.dia}</td>
            <td>{cycle.mes}</td>
            <td>{cycle.anio}</td>
            <td>{cycle.fase}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div className="container-table" >
     <div className=""><Button icon={faUser} to="/cicloAgricola/agregar" title="Agregar" size="1x"/> </div>
      <table>
        <caption>Ciclo agricola</caption>
        <thead>
          <tr>
            <th >Ciclo Agricola</th>
            <th >Semana</th>
            <th >Dia</th>
            <th >Mes</th>
            <th >Año</th>
            <th >Fase</th>
          </tr>
        </thead>
        {rederCycle()}
      </table>
    </div>
  );
}

export default CycleData;
