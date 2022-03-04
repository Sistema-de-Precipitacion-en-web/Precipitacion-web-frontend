import axios from 'axios';

const axiosClient = axios.create({
baseURL: 'https://whispering-lake-40144.herokuapp.com/'
});

export default axiosClient;

