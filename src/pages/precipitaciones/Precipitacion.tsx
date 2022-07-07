import NavLink from "../../components/LinkButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { useFetchData } from "../../hooks/useFetchData";
import { IPrecipitacion } from "../../interfaces/precipitacion.model";

function Precipitacion() {
  const precipitaciones = useFetchData<IPrecipitacion>("/precipitaciones");
  return (
    <div>
      <div className="container-tab">
        <div className="button-box">
          <NavLink
            icon={faPlus}
            to="/precipitacion/agregar"
            variant="default"
            title="Agregar"
            size="1x"
          />{" "}
        </div>
        <table className="table-s" style={{ width: 1000 }}>
          <caption>Precipitaciones</caption>
          <thead>
            <tr>
              <th>id</th>
              <th>Semana</th>
              <th>Día</th>
              <th>Año</th>
              <th>MM</th>
              <th>ENOS</th>
              <th>Notas</th>
              <th>Clave Estacion</th>
            </tr>
          </thead>
          <tbody>
            {precipitaciones.map(
              ({ id, semana, dia, anio, mm, enos, notas, claveEstacion }) => (
                <tr key={id}>
                  <td data-label="id">{id}</td>
                  <td data-label="semana">{semana}</td>
                  <td data-label="dia">{dia}</td>
                  <td data-label="anio">{anio}</td>
                  <td data-label="mm">{mm}</td>
                  <td data-label="enos">{enos}</td>
                  <td data-label="notas">{notas}</td>
                  <td data-label="claveEstacion">{claveEstacion}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Precipitacion;
