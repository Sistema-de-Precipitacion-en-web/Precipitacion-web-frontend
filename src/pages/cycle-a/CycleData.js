import React, { useEffect, useState } from "react";
import axiosClient from "../../config/axiosClient";
import Button from "../../components/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import './tableStyle.css'

function CycleData() {
  const [cycles, setCycles] = useState([]);

  const getCycles = async () => {
    const response = await axiosClient.get("/ciclo-agricola");
    //console.log(response.data.data[0]);
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
            <td data-label="ciclo">{cycle.cicloAgricola}</td>
            <td data-label="semana">{cycle.semana}</td>
            <td data-label="dia">{cycle.dia}</td>
            <td data-label="mes">{cycle.mes}</td>
            <td data-label="año">{cycle.anio}</td>
            <td data-label="fase">{cycle.fase}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div className="container-table" >
     <div className="button-p"><Button icon={faPlus} to='/cicloAgricola/agregar' style="default" title="Agregar" size="1x"/> </div>
      <table className="table-c">
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
