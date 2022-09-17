import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import Multiselect from "multiselect-react-dropdown";
import { usePrecipitacionesGraphics } from "../../hooks/usePrecipitacionesGraphics";

export const GraficaPrecipitaciones = () => {
  const { selectOptions, handleSelectChanges, chartData } =
    usePrecipitacionesGraphics();

  return (
    <>
      <div
        className="select__container"
        style={{ maxWidth: 900, margin: "40px auto" }}
      >
        <Multiselect
          options={selectOptions}
          selectedValues={selectOptions[0] ? [selectOptions[0]] : null}
          onSelect={handleSelectChanges}
          onRemove={handleSelectChanges}
          placeholder="Selecciona los años deseados"
          emptyRecordMsg="No hay más opciones disponibles"
          displayValue="name"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <ComposedChart
          width={1200}
          height={800}
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Milimetros" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="Mes" stroke="#ff7300" />
          <Line type="monotone" dataKey="Ciclo Agricola" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </>
  );
};
