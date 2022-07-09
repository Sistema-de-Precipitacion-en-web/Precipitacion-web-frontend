import { faPlus } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "../../components/LinkButton";
import { useFetchData } from "../../hooks/useFetchData";
import { ICooperativa } from "../../interfaces/cooperativa.model";

export const Cooperativas = () => {
  const cooperativas = useFetchData<ICooperativa>("/cooperativas");
  return (
    <div>
      <div className="container-tab">
        <div className="button-box">
          <LinkButton
            icon={faPlus}
            to="/cooperativas/agregar"
            variant="default"
            title="Agregar"
            size="1x"
          />{" "}
        </div>
        <table className="table-s" style={{ width: 1000 }}>
          <caption>Cooperativas</caption>
          <thead>
            <tr>
              <th>Clave Cooperativa</th>
              <th>Nombre Cooperativa</th>
              <th>Clave Localidad</th>
              <th>clave_localidad</th>
            </tr>
          </thead>
          <tbody>
            {cooperativas.map(
              ({
                claveCooperativa,
                nombreCooperativa,
                clave_localidad,
                claveLocalidad,
              }) => (
                <tr key={claveCooperativa}>
                  <td data-label="claveCooperativa">{claveCooperativa}</td>
                  <td data-label="nombreCooperativa">{nombreCooperativa}</td>
                  <td data-label="claveLocalidad">{claveLocalidad}</td>
                  <td data-label="clave_localidad">{clave_localidad}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
