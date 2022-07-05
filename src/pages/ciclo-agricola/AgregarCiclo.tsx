import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import LinkButton from "../../components/LinkButton";
import axiosClient from "../../config/axiosClient";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function AgregarCiclo() {
  const [ciclo, setCiclo] = useState({
    cicloAgricola: "",
    fecha: "",
    fase: "",
  });

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
    try {
      const response = await axiosClient.post("/ciclo-agricola", ciclo);
      console.log(response);
    } catch (error) {
      console.log("Este es el error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
            />
          </div>
          <div className="btn-a">
            <LinkButton
              icon={faXmark}
              variant="secondary"
              to="/cicloAgricola"
              title="Cancelar"
              size="1x"
            />
            <button type="submit" disabled={isLoading}>
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AgregarCiclo;
