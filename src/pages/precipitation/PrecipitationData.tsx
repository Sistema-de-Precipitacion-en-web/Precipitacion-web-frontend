import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "../../components/LinkButton";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function PrecipitationData() {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-end size-form">
        <div></div>
        <NavLink
          title="Agregar"
          icon={faPlus}
          size="1x"
          to="/precipitacion/editar"
        />
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre Estación</th>
              <th scope="col">Fecha</th>
              <th scope="col">Semana</th>
              <th scope="col">Milimetros</th>
              <th scope="col">ENOS</th>
              <th scope="col">Notas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>
                <FontAwesomeIcon icon={faEdit} size="1x" /> |
                <FontAwesomeIcon icon={faTrash} size="1x" />
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PrecipitationData;
