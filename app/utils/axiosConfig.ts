import axios from "axios";

const api = axios.create({
//baseURL: "http://192.168.1.3:8080",
 baseURL: "https://gsmt-backend.onrender.com",
  timeout: 10000,  
});

export default api;


