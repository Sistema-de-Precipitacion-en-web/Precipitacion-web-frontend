import axios from "axios";
//baseURL direccion principal de la API, cambiar si se envia a produccion
const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export default axiosClient;
