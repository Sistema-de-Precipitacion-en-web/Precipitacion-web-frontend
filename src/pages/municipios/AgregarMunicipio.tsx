import LinkButton from "../../components/LinkButton";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useFetchData } from "../../hooks/useFetchData";
import { IEstado } from "../../interfaces/estado.model";
import { useEffect } from "react";
import { Modal } from "../../components/Modal";
import { useForm } from "../../hooks/useForm";

function AgregarMunicipio() {
  const estados = useFetchData<IEstado>("/estados");

  const {
    existsError,
    isLoading,
    handleSelectChange,
    handleInputChange,
    handleSubmitForm,
    isModalOpened,
    navigate,
    setForm,
  } = useForm("/municipios", {
    claveMunicipio: "",
    nombreMunicipio: "",
    claveEstado: "",
  });

  useEffect(() => {
    setForm((prev) => ({ ...prev, claveEstado: estados[0]?.claveEstado }));
  }, [estados, setForm]);

  return (
    <>
      <div className="container-form">
        <div className="card-form">
          <form className="form" onSubmit={handleSubmitForm}>
            <div className="input-line">
              <label htmlFor="claveMunicipio">Clave del Municipio:</label>
              <input
                type="text"
                id="claveMunicipio"
                name="claveMunicipio"
                placeholder="ddd"
                autoComplete="off"
                onChange={handleInputChange}
                maxLength={3}
                minLength={3}
                required
              />
            </div>
            <div className="input-line">
              <label htmlFor="nombreMunicipio">Nombre del Municipio:</label>
              <input
                type="text"
                id="nombreMunicipio"
                name="nombreMunicipio"
                placeholder="Nombre"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-line">
              <label htmlFor="fase">Estado</label>
              <select
                name="estates"
                id="states"
                className="selected"
                onChange={handleSelectChange}
              >
                {estados.map(({ claveEstado, nombreEstado }) => (
                  <option
                    key={`${claveEstado}-${nombreEstado}`}
                    value={claveEstado}
                  >
                    {nombreEstado}
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
        didClose={() => navigate("/municipios")}
        show={isModalOpened}
      />
    </>
  );
}

export default AgregarMunicipio;
