import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import NavLink from "../../components/LinkButton";
import { Modal } from "../../components/Modal";
import { useFetchData } from "../../hooks/useFetchData";
import { useForm } from "../../hooks/useForm";
import { IEstacion } from "../../interfaces/estaciones.model";

function AgregarPrecipitacion() {
  const estaciones = useFetchData<IEstacion>("/estaciones");

  const {
    handleSelectChange,
    handleSubmitForm,
    handleInputChange,
    isLoading,
    existsError,
    isModalOpened,
    setForm,
    navigate,
  } = useForm("/precipitaciones", {
    fecha: "",
    claveEstacion: "",
    notas: "",
    mm: "",
    enos: 0,
  });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      claveEstacion: estaciones[0]?.claveEstacion,
    }));
  }, [estaciones, setForm]);
  return (
    <>
      <div className="container-form">
        <div className="card-form">
          <form className="form" onSubmit={handleSubmitForm}>
            <div className="input-line">
              <label htmlFor="fecha">Fecha:</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                placeholder="fecha"
                autoComplete="off"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-line">
              <label htmlFor="notas">Notas:</label>
              <input
                type="text"
                id="notas"
                name="notas"
                placeholder="Notas"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-line">
              <label htmlFor="mm">MM:</label>
              <input
                type="text"
                id="mm"
                name="mm"
                placeholder="mm"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-line">
              <label htmlFor="enos">ENOS:</label>
              <input
                type="number"
                id="enos"
                name="enos"
                placeholder="enos"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-line">
              <label htmlFor="fase">Estacion</label>
              <select
                name="estaciones"
                id="estaciones"
                className="selected"
                onChange={handleSelectChange}
              >
                {estaciones.map(({ claveEstacion, nombreEstacion }) => (
                  <option
                    key={`${claveEstacion}-${nombreEstacion}`}
                    value={claveEstacion}
                  >
                    {nombreEstacion}
                  </option>
                ))}
              </select>
            </div>
            <div className="btn-a">
              <NavLink
                icon={faXmark}
                variant="secondary"
                to="/municipios"
                title="Cancelar"
                size="1x"
              />
              <button type="submit" disabled={isLoading}>
                Guardar
              </button>
            </div>
            {existsError && <p>Hubo un error, intentar más tarde</p>}
          </form>
        </div>
      </div>
      <Modal
        title="Éxito"
        icon="success"
        text="Municipio  creado con exito"
        didClose={() => navigate("/precipitacion")}
        show={isModalOpened}
      />
    </>
  );
}

export default AgregarPrecipitacion;
