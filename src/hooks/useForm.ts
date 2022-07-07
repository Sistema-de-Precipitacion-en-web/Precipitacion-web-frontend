import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../config/axiosClient";

export const useForm = () => {
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

  return {
    existsError,
    isLoading,
    handleSelectChange,
    handleInputChange,
    handleSubmitForm,
    isModalOpened,
    navigate,
    setMunicipio,
  };
};
