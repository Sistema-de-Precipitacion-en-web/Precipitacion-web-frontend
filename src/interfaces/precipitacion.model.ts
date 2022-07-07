export interface IPrecipitacion {
  id: number;
  fecha: string;
  semana: number;
  dia: number;
  mes: string;
  anio: number;
  mm: number | null;
  enos: number | null;
  notas: null | string;
  claveEstacion: string;
}
