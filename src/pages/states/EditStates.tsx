import React from "react";
import Button from "../../components/Button.tsx";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function EditStates() {
  return (
    <div className="container-form">
      <div className="card-box">
        <form className="form-s">
          <div className="input-line">
            <label htmlFor="ciclo">Clave:</label>
            <input
              type="text"
              id="ciclo"
              name="ciclo"
              placeholder="22"
              required
            />
          </div>
          <div className="input-line">
            <label htmlFor="fecha">Nombre:</label>
            <input type="text" id="fecha" name="fecha" placeholder="CDMX" />
          </div>
          <div className="btn-a">
            <Button
              icon={faXmark}
              variant="secondary"
              to="/estados"
              title="Cancelar"
              size="1x"
            />
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditStates;
