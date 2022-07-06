import NavLink from "../../components/LinkButton";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Modal } from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../config/axiosClient";

function AgregarEstado() {
  const [estado, setEstado] = useState({
    clave: "",
    nombre: "",
  });

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [existsError, setExistsError] = useState(false);

  const navigate = useNavigate();

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axiosClient.post("estados", estado);
      setIsLoading(false);
      setIsModalOpened(true);
    } catch (error) {
      setExistsError(true);
    }
  };

  return (
    <>
      <div className="container-form">
        <div className="card-box">
          <form className="form-s" onSubmit={handleSubmit}>
            <div className="input-line">
              <label htmlFor="clave">Clave:</label>
              <input
                type="text"
                id="clave"
                name="clave"
                placeholder="22"
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
            </div>
            <div className="input-line">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="CDMX"
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>
            <div className="btn-a">
              <NavLink
                icon={faXmark}
                variant="secondary"
                to="/estados"
                title="Cancelar"
                size="1x"
              />
              <button type="submit" disabled={isLoading}>
                Guardar
              </button>
            </div>
            {existsError && <p>Ha ocurrido un error, intentalo más tarde</p>}
          </form>
        </div>
      </div>
      <Modal
        title="Éxito"
        icon="success"
        text="Estado creado con exito"
        didClose={() => navigate("/estados")}
        show={isModalOpened}
      />
    </>
  );
}

export default AgregarEstado;
