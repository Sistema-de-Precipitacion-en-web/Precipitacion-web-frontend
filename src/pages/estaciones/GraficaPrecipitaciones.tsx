import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useFetchData } from "../../hooks/useFetchData";
import { IPrecipitacion } from "../../interfaces/precipitacion.model";
import Multiselect from "multiselect-react-dropdown";

interface ISelectOption {
  name: string;
  id: number;
}

export const GraficaPrecipitaciones = () => {
  const { claveEstacion } = useParams();

  const precipitaciones = useFetchData<IPrecipitacion>(
    `/estaciones/${claveEstacion}/precipitaciones`
  );

  const [chartData, setchartData] = useState<
    Array<{ name: string; Milimetros: number }>
  >([]);

  const [selectOptions, setSelectOptions] = useState<ISelectOption[]>([]);

  useEffect(() => {
    setchartData([]);
    if (precipitaciones.length === 0) {
      return;
    }

    for (let i = 1; i <= 53; i++) {
      const numeroPrecipitaciones = precipitaciones
        .filter(({ semana }) => semana === i)
        .reduce((a, b) => a + b.mm!, 0);

      setchartData((prev) => [
        ...prev,
        {
          name: `Semana ${i}`,
          Milimetros: numeroPrecipitaciones,
        },
      ]);
    }
  }, [precipitaciones]);

  useEffect(() => {
    let auxSelectOptions: ISelectOption[] = [];

    const optionAlreadyExists = (option: ISelectOption) => {
      return auxSelectOptions.find(({ id }) => id === option.id);
    };

    precipitaciones
      .map<ISelectOption>(({ anio }) => ({
        name: `Año ${anio}`,
        id: anio,
      }))
      .forEach((option) => {
        if (!optionAlreadyExists(option)) {
          auxSelectOptions = [...auxSelectOptions, option];
        }
      });

    setSelectOptions([...auxSelectOptions]);
  }, [precipitaciones]);

  return (
    <>
      <div
        className="select__container"
        style={{ maxWidth: 900, margin: "40px auto" }}
      >
        <Multiselect
          options={selectOptions} // Options to display in the dropdown
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
