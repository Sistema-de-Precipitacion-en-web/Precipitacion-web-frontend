import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import NavLink from "../../components/LinkButton";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../components/Modal";
import axiosClient from "../../config/axiosClient";
import { useNavigate } from "react-router-dom";

function AgregarCiclo() {
  const [ciclo, setCiclo] = useState({
    cicloAgricola: "",
    fecha: "",
    fase: "",
  });

  const navigate = useNavigate();

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [existsError, setExistsError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCiclo({
      ...ciclo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    //Save Cycle
    saveCycle();
  };

  const saveCycle = async () => {
    setIsLoading(true);
    setExistsError(false);
    try {
      await axiosClient.post("/ciclo-agricola", ciclo);
      setIsModalOpened(true);
    } catch (error) {
      setExistsError(true);
      console.log("Este es el error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    navigate("/ciclo-agricola");
  };

  return (
    <>
      <div className="container-form">
        <div className="card-form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-line">
              <label htmlFor="ciclo">Ciclo Agricola:</label>
              <input
                type="text"
                id="cicloAgricola"
                name="cicloAgricola"
                placeholder="dddd"
                defaultValue={ciclo.cicloAgricola}
                onChange={handleChange}
                autoComplete="off"
                minLength={4}
                maxLength={4}
                required
              />
            </div>
            <div className="input-line">
              <label htmlFor="fecha">Fecha:</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                placeholder="dddd"
                defaultValue={ciclo.fecha}
                onChange={handleChange}
              />
            </div>
            <div className="input-line">
              <label htmlFor="fase">Fase:</label>
              <input
                type="text"
                id="fase"
                name="fase"
                placeholder="dddd"
                defaultValue={ciclo.fase}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="btn-a">
              <NavLink
                icon={faXmark}
                variant="secondary"
                to="/ciclo-agricola"
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
        text="Ciclo agricola creado con exito"
        didClose={handleCloseModal}
        show={isModalOpened}
      />
    </>
  );
}

export default AgregarCiclo;
