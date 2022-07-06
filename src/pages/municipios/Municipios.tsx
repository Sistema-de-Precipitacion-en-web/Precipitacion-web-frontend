import NavLink from "../../components/LinkButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./styleMunicipalities.css";
import { useEffect, useState } from "react";
import { IMunicipio } from "../../interfaces/municipio.model";
import axiosClient from "../../config/axiosClient";

function Municipios() {
  const [municipios, setMunicipios] = useState<IMunicipio[]>([]);

  const getMunicipios = async () => {
    const {
      data: { data },
    } = await axiosClient.get("/municipios");

    setMunicipios(data);
  };

  useEffect(() => {
    getMunicipios();
  }, []);

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
          <tbody>
            {municipios.map(
              ({ claveMunicipio, claveEstado, nombreMunicipio }) => (
                <tr key={claveMunicipio}>
                  <td data-label="claveMunicipio">{claveMunicipio}</td>
                  <td data-label="nombreMunicipio">{nombreMunicipio}</td>
                  <td data-label="claveEstado">{claveEstado}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Municipios;
