import React, { useEffect, useState } from "react";
import axiosClient from "../../config/axiosClient";
import NavLink from "../../components/LinkButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./stateStyle.css";

function Estados() {
  const [estados, setEstados] = useState<
    { claveEstado: string; nombreEstado: string }[]
  >([]);

  const obtenerEstados = async () => {
    const {
      data: { data },
    } = await axiosClient.get("/estados");
    setEstados(data);
  };

  useEffect(() => {
    obtenerEstados();
  }, []);

  return (
    <div>
      <div className="container-tab">
        <div className="button-box">
          <NavLink
            icon={faPlus}
            to="/estados/agregar"
            variant="default"
            title="Agregar"
            size="1x"
          />{" "}
        </div>
        <table className="table-s">
          <caption>Estados</caption>
          <thead>
            <tr>
              <th>Clave</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {estados.map(({ claveEstado, nombreEstado }) => (
              <tr key={claveEstado}>
                <td data-label="clave">{claveEstado}</td>
                <td data-label="nombre">{nombreEstado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Estados;
