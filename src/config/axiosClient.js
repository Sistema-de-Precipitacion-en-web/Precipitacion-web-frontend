import axios from 'axios';

const axiosClient = axios.create({
baseURL: 'http://localhost:'
});

export default axiosClient;

