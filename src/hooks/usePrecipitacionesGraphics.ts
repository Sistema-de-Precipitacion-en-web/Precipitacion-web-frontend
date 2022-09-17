import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPrecipitacion } from "../interfaces/precipitacion.model";
import { useFetchData } from "./useFetchData";

interface ISelectOption {
  name: string;
  id: number;
}

export const usePrecipitacionesGraphics = () => {
  const { claveEstacion } = useParams();

  const precipitaciones = useFetchData<IPrecipitacion>(
    `/estaciones/${claveEstacion}/precipitaciones`
  );

  const [chartData, setchartData] = useState<
    Array<{ name: string; Milimetros: number }>
  >([]);

  const [selectOptions, setSelectOptions] = useState<ISelectOption[]>([]);

  const handleSelectChanges = (
    selectedList: ISelectOption[],
    affectedItem: ISelectOption
  ) => {
    filterData(selectedList);
  };

  const filterData = useCallback(
    (selectedList: ISelectOption[]) => {
      const selectedYears = selectedList.map(({ id }) => id);
      setchartData([]);
      for (let i = 1; i <= 53; i++) {
        const numeroPrecipitaciones = precipitaciones
          .filter(
            ({ semana, anio }) => semana === i && selectedYears.includes(anio)
          )
          .reduce((a, b) => a + b.mm!, 0);

        setchartData((prev) => [
          ...prev,
          {
            name: `Semana ${i}`,
            Milimetros: numeroPrecipitaciones,
          },
        ]);
      }
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

    setSelectOptions([...auxSelectOptions]);
  }, [precipitaciones]);

  return {
    selectOptions,
    handleSelectChanges,
    chartData,
  };
};
