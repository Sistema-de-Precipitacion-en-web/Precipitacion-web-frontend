import { useEffect, useState } from "react";
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
import { useFetchData } from "../../hooks/useFetchData";
import { IPrecipitacion } from "../../interfaces/precipitacion.model";

export const GraficaPrecipitaciones = () => {
  const precipitaciones = useFetchData<IPrecipitacion>("/precipitaciones");
  const [chartData, setchartData] = useState<
    Array<{ name: string; precipitaciones: number }>
  >([]);

  useEffect(() => {
    setchartData([]);
    if (precipitaciones.length === 0) {
      return;
    }
    for (let i = 1; i <= 53; i++) {
      const numeroPrecipitaciones = precipitaciones
        .filter(({ semana }) => semana === i)
        .reduce((a, b) => a + 1, 0);

      setchartData((prev) => [
        ...prev,
        {
          name: `Semana ${i}`,
          precipitaciones: numeroPrecipitaciones,
        },
      ]);
    }
  }, [precipitaciones]);
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
        <Bar dataKey="precipitaciones" barSize={20} fill="#413ea0" />
      </ComposedChart>
    </div>
  );
};
