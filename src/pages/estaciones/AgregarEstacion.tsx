import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import LinkButton from "../../components/LinkButton";
import { Modal } from "../../components/Modal";
import { useFetchData } from "../../hooks/useFetchData";
import { useForm } from "../../hooks/useForm";
import { ILocalidad } from "../../interfaces/localidad.model";

export const AgregarEstacion = () => {
  const localidades = useFetchData<ILocalidad>("/localidades");
  const {
    handleSelectChange,
    handleSubmitForm,
    handleInputChange,
    isLoading,
    existsError,
    isModalOpened,
    setForm,
    navigate,
  } = useForm("/estaciones", {
    claveEstacion: "",
    nombreEstacion: "",
    longDec: 0,
    latDec: 0,
    claveLocalidad: "",
  });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      claveLocalidad: localidades[0]?.claveDeLaLocalidad,
    }));
  }, [localidades, setForm]);

  return (
    <>
      <div className="container-form">
        <div className="card-form">
          <form className="form" onSubmit={handleSubmitForm}>
            <div className="input-line">
              <label htmlFor="claveEstacion">Clave Estacion:</label>
              <input
                type="text"
                id="claveEstacion"
                name="claveEstacion"
                placeholder="clave estacion"
                autoComplete="off"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-line">
              <label htmlFor="nombreEstacion">Nombre Estacion:</label>
              <input
                type="text"
                id="nombreEstacion"
                name="nombreEstacion"
                placeholder="nombre estacion"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-line">
              <label htmlFor="longDec">longDec:</label>
              <input
                type="number"
                id="longDec"
                name="longDec"
                placeholder="longDec"
                step="0.01"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-line">
              <label htmlFor="latDec">latDec:</label>
              <input
                type="number"
                step="0.01"
                id="latDec"
                name="latDec"
                placeholder="latDec"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-line">
              <label htmlFor="fase">Localidad</label>
              <select
                name="claveLocalidad"
                id="claveLocalidad"
                className="selected"
                onChange={handleSelectChange}
              >
                {localidades.map(({ claveDeLaLocalidad, nombreLocalidad }) => (
                  <option
                    key={`${claveDeLaLocalidad}-${nombreLocalidad}`}
                    value={claveDeLaLocalidad}
                  >
                    {nombreLocalidad}
                  </option>
                ))}
              </select>
            </div>
            <div className="btn-a">
              <LinkButton
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
        didClose={() => navigate("/estaciones")}
        show={isModalOpened}
      />
    </>
  );
};
