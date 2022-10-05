import axios from "axios";

const api = axios.create({
  baseURL: "https://kregister.herokuapp.com",
});

export default api;
