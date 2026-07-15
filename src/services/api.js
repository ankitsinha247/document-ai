import axios from "axios";

const api = axios.create({
  /*  baseURL: "http://127.0.0.1:8001/documents", */
  baseURL: "https://document-ai-backend-923w.onrender.com/documents/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
