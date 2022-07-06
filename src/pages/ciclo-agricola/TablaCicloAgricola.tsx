import React, { useEffect, useState } from "react";
import axiosClient from "../../config/axiosClient";
import NavLink from "../../components/LinkButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./tableStyle.css";

function TablaCicloAgricola() {
  const [cycles, setCycles] = useState([]);

  const getCycles = async () => {
    const response = await axiosClient.get("/ciclo-agricola");
    setCycles(response.data.data);
  };

  useEffect(() => {
    getCycles();
  }, []);

  const renderCycle = () => {
    return (
      <tbody>
        {cycles.map((cycle: any, index) => (
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
    <div className="container-table">
      <div className="button-p">
        <NavLink
          icon={faPlus}
          to="/ciclo-agricola/agregar"
          variant="default"
          title="Agregar"
          size="1x"
        />{" "}
      </div>
      <table className="table-c">
        <caption>Ciclo agricola</caption>
        <thead>
          <tr>
            <th>Ciclo Agricola</th>
            <th>Semana</th>
            <th>Dia</th>
            <th>Mes</th>
            <th>Año</th>
            <th>Fase</th>
          </tr>
        </thead>
        {renderCycle()}
      </table>
    </div>
  );
}

export default TablaCicloAgricola;
