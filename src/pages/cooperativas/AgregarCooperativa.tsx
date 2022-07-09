import { faXmark } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "../../components/LinkButton";
import { Modal } from "../../components/Modal";
import { useFetchData } from "../../hooks/useFetchData";
import { useForm } from "../../hooks/useForm";
import { ILocalidad } from "../../interfaces/localidad.model";
import { useEffect } from "react";

export const AgregarCooperativa = () => {
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
  } = useForm("/cooperativas", {
    claveCooperativa: "",
    nombreCooperativa: "",
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
              <label htmlFor="claveCooperativa">Clave:</label>
              <input
                type="text"
                id="claveCooperativa"
                name="claveCooperativa"
                placeholder="clave cooperativa"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-line">
              <label htmlFor="nombreCooperativa">Nombre:</label>
              <input
                type="text"
                id="nombreCooperativa"
                name="nombreCooperativa"
                placeholder="nombre cooperativa"
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
        didClose={() => navigate("/cooperativas")}
        show={isModalOpened}
      />
    </>
  );
};
