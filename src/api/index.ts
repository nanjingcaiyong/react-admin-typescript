import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:7001",
});

function getUser(id: number) {
  return instance.get(`/home/${id}`);
}

export { getUser };
