import Button from "../../components/Button";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function EditPrecipitation() {
  return (
    <div className="container-fluid container-form">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Estación:
        </label>
        <select class="form-select" aria-label="Default select example">
          <option selected> select </option>
          <option value="1">Museo del agua</option>
          <option value="2">Acatepec</option>
          <option value="4">Tlacotepec Plumas</option>
          <option value="5">Guadalupe Chindúa</option>
          <option value="6">San Isidro Huayápam</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Milimetros de Lluvia:
        </label>
        <input
          class="form-control"
          type="Number"
          placeholder=""
          aria-label="default input example"
        ></input>
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Condición ENOS:
        </label>
        <input
          class="form-control"
          type="text"
          placeholder=""
          aria-label="default input example"
        ></input>
      </div>

      <div class="input-group mb-3">
        <input
          type="date"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
        />
        <span class="input-group-text">Semana</span>
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Server"
          disabled
        />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Notas:
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="container-btn"> 
      <Button  title="Agregar" icon={faSave} size="1x" to="/precipitacion" />
      </div>
    </div>
  );
}

export default EditPrecipitation;
