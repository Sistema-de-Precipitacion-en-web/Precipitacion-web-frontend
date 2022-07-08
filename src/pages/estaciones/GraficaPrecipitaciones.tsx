import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Semana 1",
    precipitaciones: 590,
  },
  {
    name: "Semana 2",
    precipitaciones: 868,
  },
  {
    name: "Semana 3",
    precipitaciones: 1397,
  },
  {
    name: "Page D",
    precipitaciones: 1480,
  },
  {
    name: "Page E",
    precipitaciones: 1520,
  },
  {
    name: "Page F",
    precipitaciones: 1400,
  },
];
export const GraficaPrecipitaciones = () => {
  return (
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
        data={data}
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
        <Bar dataKey="precipitaciones" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="precipitaciones" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};
