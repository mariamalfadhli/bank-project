import axios from "axios";

const instance = axios.create({
  baseURL: "https://task-react-auth.herokuapp.com/api",
});

export default instance;
