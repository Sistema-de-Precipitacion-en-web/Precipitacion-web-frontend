import NavLink from "../../components/LinkButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./styleMunicipalities.css";

function Municipalities() {
  return (
    <div>
      <div className="container-tab">
        <div className="button-box-m">
          <NavLink
            icon={faPlus}
            to="/municipios/agregar"
            variant="default"
            title="Agregar"
            size="1x"
          />
        </div>
        <table className="table-m">
          <caption>Municipios</caption>
          <thead>
            <tr>
              <th>Clave del Municipio</th>
              <th>Nombre del Municipio</th>
              <th>Clave del estado</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default Municipalities;
