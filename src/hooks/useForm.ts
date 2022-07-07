import { useState, ChangeEventHandler, FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../config/axiosClient";

export const useForm = <T extends Object>(url: string, data: T) => {
  const [form, setForm] = useState(data);

  const [existsError, setExistsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const navigate = useNavigate();

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setForm({
      ...form,
      claveEstado: event.target.value,
    });
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axiosClient.post(url, form);
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
    setMunicipio: setForm,
  };
};
