import React, { useEffect, useState } from "react";
import axiosClient from "../../config/axiosClient";
import Button from "../../components/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./styleMunicipalities.css";

function Municipalities() {
  const [state, setSta] = useState([]);

  const getSta = async () => {
    const response = await axiosClient.get("/estados");
    //console.log(response.data.data[0]);
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
            <td data-label="clave"></td>
            <td data-label="nombre"></td>
            <td data-label="clave del estado"></td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
      <div > 
       <div className="container-tab" >
     <div className="button-box-m"><Button icon={faPlus} to='/municipios/agregar' style="default" title="Agregar" size="1x"/></div>
      <table className="table-m">
        <caption>Municipios</caption>
        <thead>
          <tr>
            <th >Clave del Municipio</th>
            <th >Nombre del Municipio</th>
            <th >Clave del estado</th>
          </tr>
        </thead>
       
      </table>
    </div>
      </div>
  );
}

export default Municipalities;