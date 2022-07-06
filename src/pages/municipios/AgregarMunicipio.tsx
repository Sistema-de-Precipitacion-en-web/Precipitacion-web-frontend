import NavLink from "../../components/LinkButton";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useFetchData } from "../../hooks/useFetchData";
import { IEstado } from "../../interfaces/estado.model";
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import axiosClient from "../../config/axiosClient";
import { Modal } from "../../components/Modal";
import { useNavigate } from "react-router-dom";

function AgregarMunicipio() {
  const estados = useFetchData<IEstado>("/estados");
  const [municipio, setMunicipio] = useState({
    claveMunicipio: "",
    nombreMunicipio: "",
    claveEstado: "",
  });

  const [existsError, setExistsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const navigate = useNavigate();

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setMunicipio({
      ...municipio,
      claveEstado: event.target.value,
    });
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setMunicipio({
      ...municipio,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axiosClient.post("/municipios", municipio);
      setIsModalOpened(true);
    } catch (error) {
      setExistsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setMunicipio((prev) => ({ ...prev, claveEstado: estados[0]?.claveEstado }));
  }, [estados]);

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
        didClose={() => navigate("/municipios")}
        show={isModalOpened}
      />
    </>
  );
}

export default AgregarMunicipio;
