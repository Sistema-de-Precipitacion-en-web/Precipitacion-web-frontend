import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPrecipitacion } from "../interfaces/precipitacion.model";
import { useFetchData } from "./useFetchData";

interface ISelectOption {
  name: string;
  id: number;
}

interface IChartData {
  name: string;
  Milimetros: number;
  Mes: string;
}

export const Meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function getDateOfWeek(w: number, y: number) {
  var d = 1 + (w - 1) * 7; // 1st of January + 7 days for each week

  return new Date(y, 0, d);
}

export const usePrecipitacionesGraphics = () => {
  const { claveEstacion } = useParams();

  const precipitaciones = useFetchData<IPrecipitacion>(
    `/estaciones/${claveEstacion}/precipitaciones`
  );

  const [chartData, setchartData] = useState<IChartData[]>([]);

  const [selectOptions, setSelectOptions] = useState<ISelectOption[]>([]);

  const handleSelectChanges = (
    selectedList: ISelectOption[],
    affectedItem: ISelectOption
  ) => {
    filterData(selectedList);
  };

  const filterData = useCallback(
    (selectedList: ISelectOption[]) => {
      setchartData([]);
      const selectedYears = selectedList.map(({ id }) => id);
      let auxChartData: IChartData[] = [];
      for (let i = 1; i <= 53; i++) {
        const filteredPrecipitations = precipitaciones.filter(
          ({ semana, anio }) => semana === i && selectedYears.includes(anio)
        );

        const milimetros = filteredPrecipitations.reduce(
          (a, b) => a + b.mm!,
          0
        );

        auxChartData = [
          ...auxChartData,
          {
            name: `Semana ${i}`,
            Milimetros: milimetros,
            Mes: Meses[+filteredPrecipitations[0]?.mes - 1],
          },
        ];
      }
      setchartData([...auxChartData]);
    },
    [precipitaciones]
  );

  useEffect(() => {
    if (precipitaciones.length === 0) {
      return;
    }
    filterData(selectOptions[0] ? [selectOptions[0]] : []);
  }, [precipitaciones, selectOptions, filterData]);

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

    auxSelectOptions.sort((a, b) => a.id - b.id);
    setSelectOptions([...auxSelectOptions]);
  }, [precipitaciones]);

  return {
    selectOptions,
    handleSelectChanges,
    chartData,
  };
};
