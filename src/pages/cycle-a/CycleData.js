import React, { useEffect, useState } from "react";
import axiosClient from "../../config/axiosClient";
import Button from "../../components/Button";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function CycleData() {
  const [cycles, setCycles] = useState([]);

  const getCycles = async () => {
    const response = await axiosClient.get("/api/v1/ciclo-agricola");
    console.log(response.data.data[0]);
    setCycles(response.data.data);
  };
  //resolver el como accesar a el objeto de un array
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
    <div className="" >
     <div className="d-flex justify-content-end p-3"><Button icon={faUser} to="/cicloAgricola/agregar" title="Agregar" size="1x"/> </div>
      <table className="table caption-top">
        <caption>Ciclo agricola</caption>
        <thead>
          <tr>
            <th scope="col">Ciclo Agricola</th>
            <th scope="col">Semana</th>
            <th scope="col">Dia</th>
            <th scope="col">Mes</th>
            <th scope="col">Año</th>
            <th scope="col">Fase</th>
          </tr>
        </thead>
        {rederCycle()}
      </table>
    </div>
  );
}

export default CycleData;
