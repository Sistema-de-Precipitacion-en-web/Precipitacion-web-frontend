import LinkButton from "../../components/LinkButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./tableStyle.css";
import { useFetchData } from "../../hooks/useFetchData";
import { ICicloAgricola } from "../../interfaces/ciclo-agricola.model";

function TablaCicloAgricola() {
  const ciclos = useFetchData<ICicloAgricola>("/ciclo-agricola");

  const renderCycle = () => {
    return (
      <tbody>
        {ciclos.map(({ cicloAgricola, semana, mes, dia, anio, fase, id }) => (
          <tr key={id}>
            <td data-label="ciclo">{cicloAgricola}</td>
            <td data-label="semana">{semana}</td>
            <td data-label="dia">{dia}</td>
            <td data-label="mes">{mes}</td>
            <td data-label="año">{anio}</td>
            <td data-label="fase">{fase}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div className="container-table">
      <div className="button-p">
        <LinkButton
          icon={faPlus}
          to="/ciclo-agricola/agregar"
          variant="default"
          title="Agregar"
          size="1x"
        />{" "}
      </div>
      <table className="table-c">
        <caption>Ciclo agricola</caption>
        <thead>
          <tr>
            <th>Ciclo Agricola</th>
            <th>Semana</th>
            <th>Dia</th>
            <th>Mes</th>
            <th>Año</th>
            <th>Fase</th>
          </tr>
        </thead>
        {renderCycle()}
      </table>
    </div>
  );
}

export default TablaCicloAgricola;
