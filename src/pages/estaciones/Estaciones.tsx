import { faPlus } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "../../components/LinkButton";
import { useFetchData } from "../../hooks/useFetchData";
import { IEstacion } from "../../interfaces/estaciones.model";

export const Estaciones = () => {
  const estaciones = useFetchData<IEstacion>("/estaciones");
  return (
    <div>
      <div className="container-tab">
        <div className="button-box">
          <LinkButton
            icon={faPlus}
            to="/precipitacion/agregar"
            variant="default"
            title="Agregar"
            size="1x"
          />{" "}
        </div>
        <table className="table-s" style={{ width: 1000 }}>
          <caption>Estaciones</caption>
          <thead>
            <tr>
              <th>Clave Estación</th>
              <th>Nombre</th>
              <th>longDec</th>
              <th>latDec</th>
              <th>Clave Localidad</th>
            </tr>
          </thead>
          <tbody>
            {estaciones.map(
              ({
                claveEstacion,
                nombreEstacion,
                longDec,
                latDec,
                claveLocalidad,
              }) => (
                <tr key={claveEstacion}>
                  <td data-label="claveEstacion">{claveEstacion}</td>
                  <td data-label="nombreEstacion">{nombreEstacion}</td>
                  <td data-label="longDec">{longDec}</td>
                  <td data-label="latDec">{latDec}</td>
                  <td data-label="claveLocalidad">{claveLocalidad}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
