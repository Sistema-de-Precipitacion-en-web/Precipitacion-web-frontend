import React, { useState } from "react";
import Button from "../../components/Button";
import axiosClient from "../../config/axiosClient";
import { faFloppyDisk, faXmark } from "@fortawesome/free-solid-svg-icons";

function EditCycle() {

  const [cycle, setCycle] = useState({
    cicloAgricola: '',
    fecha: '',
    fase: '',
  });

  const handleChange = (e) => {
    setCycle({
      ...cycle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Save Cycle
    saveCycle();
  };

  const saveCycle = () => {
    axiosClient.post('/api/v1/ciclo-agricola', cycle)
    .then(res => {
      console.log(res);
      alert(res.message);
    });
  };

  return (
    <div className="container-form">
      <div className="card-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-line">
            <label htmlFor="ciclo">Ciclo Agricola:</label>
            <input
              type="text"
              id="ciclo"
              name="ciclo"
              placeholder="dddd"
              defaultValue={cycle.cicloAgricola}
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
              defaultValue={cycle.fecha}
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
              defaultValue={cycle.fase}
              onChange={handleChange}
            />
          </div>
          <div className="btn-a">
            <Button
              icon={faXmark}
              style="secondary"
              to="/cicloAgricola"
              title="Cancelar"
              size="1x"
            />
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCycle;
