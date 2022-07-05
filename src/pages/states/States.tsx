import React, { useEffect, useState } from "react";
import axiosClient from "../../config/axiosClient";
import LinkButton from "../../components/LinkButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./stateStyle.css";

function States() {
  const [state, setSta] = useState([]);

  const getSta = async () => {
    const response = await axiosClient.get("/estados");
    setSta(response.data.data);
  };

  useEffect(() => {
    getSta();
  }, []);

  const renderState = () => {
    return (
      <tbody>
        {state.map((states, index) => (
          <tr key={index}>
            <td data-label="clave">22</td>
            <td data-label="nombre">CDMX</td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div>
      <div className="container-tab">
        <div className="button-box">
          <LinkButton
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
          {renderState()}
        </table>
      </div>
    </div>
  );
}

export default States;
