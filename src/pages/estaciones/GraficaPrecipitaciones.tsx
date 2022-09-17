import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
          options={selectOptions} // Options to display in the dropdown
          selectedValues={selectOptions[0] ? [selectOptions[0]] : null}
          onSelect={handleSelectChanges}
          onRemove={handleSelectChanges}
          placeholder="Selecciona los años deseados"
          displayValue="name" // Property name to display in the dropdown options
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
        </ComposedChart>
      </div>
    </>
  );
};
