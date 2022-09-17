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
  "Ciclo Agricola": string;
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

export const getCicloAgricola = (semana: number) => {
  let cicloAgricola = "";
  if (semana >= 1 && semana <= 5) {
    cicloAgricola = "Cosecha";
  }
  if (semana >= 14 && semana <= 18) {
    cicloAgricola = "Almácigos";
  }
  if (semana >= 18 && semana <= 26) {
    cicloAgricola = "Siembra";
  }
  if (semana >= 26 && semana <= 29) {
    cicloAgricola = "Transplante";
  }
  if (semana >= 29 && semana <= 33) {
    cicloAgricola = "Capicula";
  }
  if (semana >= 33 && semana <= 45) {
    cicloAgricola = "Crecimiento";
  }
  if (semana >= 45 && semana <= 43) {
    cicloAgricola = "Cosecha";
  }
  return cicloAgricola;
};

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

        const cicloAgricola = getCicloAgricola(i);

        auxChartData = [
          ...auxChartData,
          {
            name: `Semana ${i}`,
            Milimetros: milimetros,
            Mes: Meses[+filteredPrecipitations[0]?.mes - 1],
            "Ciclo Agricola": cicloAgricola,
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
