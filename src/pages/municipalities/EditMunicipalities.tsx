import Button from "../../components/Button.tsx";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function EditMunicipalities() {
  return (
    <div className="container-form">
      <div className="card-form">
        <form className="form">
          <div className="input-line">
            <label htmlFor="ciclo">Clave del Municipio:</label>
            <input
              type="text"
              id="ciclo"
              name="ciclo"
              placeholder="dddd"
              required
            />
          </div>
          <div className="input-line">
            <label htmlFor="fecha">Nombre del Municipio:</label>
            <input type="text" id="fecha" name="fecha" placeholder="dddd" />
          </div>
          <div className="input-line">
            <label htmlFor="fase">Clave del Estado</label>
            <select name="estates" id="states" className="selected">
              <option>item de prueba 1</option>
              <option>item de prueba 1</option>
              <option>item de prueba 1</option>
            </select>
          </div>
          <div className="btn-a">
            <Button
              icon={faXmark}
              variant="secondary"
              to="/municipios"
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

export default EditMunicipalities;
