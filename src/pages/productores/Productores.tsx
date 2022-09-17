import { faPlus } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "../../components/LinkButton";
import { useFetchData } from "../../hooks/useFetchData";
import { IProductores } from "../../interfaces/productores.model";

export const Productores = () => {
  const productores = useFetchData<IProductores>("/cooperativas");
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
              <th>Clave Productor</th>
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Clave Cooperativa</th>
            </tr>
          </thead>
          <tbody>
            {productores.map(
              (
                {
                  claveCooperativa,
                  claveProductor,
                  nombresProductor,
                  apellidoPaterno,
                  apellidoMaterno,
                },
                i
              ) => (
                <tr key={i}>
                  <td data-label="claveProductor">{claveProductor}</td>
                  <td data-label="nombresProductor">{nombresProductor}</td>
                  <td data-label="apellidoPaterno">{apellidoPaterno}</td>
                  <td data-label="apellidoMaterno">{apellidoMaterno}</td>
                  <td data-label="claveCooperativa">{claveCooperativa}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
