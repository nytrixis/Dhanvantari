import axios from 'axios';

// Set the base URL for Axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend server URL
});

export default axiosInstance;