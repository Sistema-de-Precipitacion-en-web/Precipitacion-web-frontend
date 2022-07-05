import LinkButton from "../../components/LinkButton";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function EditPrecipitation() {
  return (
    <div className="container-fluid container-form">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Estación:
        </label>
        <select className="form-select" aria-label="Default select example">
          <option selected> select </option>
          <option value="1">Museo del agua</option>
          <option value="2">Acatepec</option>
          <option value="4">Tlacotepec Plumas</option>
          <option value="5">Guadalupe Chindúa</option>
          <option value="6">San Isidro Huayápam</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Milimetros de Lluvia:
        </label>
        <input
          className="form-control"
          type="Number"
          placeholder=""
          aria-label="default input example"
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Condición ENOS:
        </label>
        <input
          className="form-control"
          type="text"
          placeholder=""
          aria-label="default input example"
        ></input>
      </div>

      <div className="input-group mb-3">
        <input
          type="date"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
        />
        <span className="input-group-text">Semana</span>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label="Server"
          disabled
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Notas:
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
        ></textarea>
      </div>
      <div className="container-btn">
        <LinkButton
          title="Agregar"
          icon={faSave}
          size="1x"
          to="/precipitacion"
        />
      </div>
    </div>
  );
}

export default EditPrecipitation;
