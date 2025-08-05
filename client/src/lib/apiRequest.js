import axios from "axios";


const Backend_url = import.meta.env.VITE_BACKEND_URL;

const apiRequest = axios.create({
  baseURL: `${Backend_url}/api`,
  withCredentials: true,
});

export default apiRequest;