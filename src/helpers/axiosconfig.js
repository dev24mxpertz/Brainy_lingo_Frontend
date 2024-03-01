import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3000/api/",
  baseURL: "https://child-vocability.onrender.com/api/",
  withCredentials: true,
  // https://childrenvocab.onrender.com/api/
  // baseURL: "https://childrenvocabserver.onrender.com/api/",
  ///api/
});

export default instance;
