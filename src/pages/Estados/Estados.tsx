import NavLink from "../../components/LinkButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./stateStyle.css";
import { useFetchData } from "../../hooks/useFetchData";
import { IEstado } from "../../interfaces/estado.model";

function Estados() {
  const estados = useFetchData<IEstado>("/estados");
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
