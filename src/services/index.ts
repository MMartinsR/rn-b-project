import axios from "axios";

const api = axios.create({
  baseURL: "https://musicapi-w7kn.onrender.com",
  // baseURL: "http://192.168.1.91:3000",
});

export default api;