import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7018"
});


export default api;