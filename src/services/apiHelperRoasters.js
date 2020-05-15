import axios from "axios";
const api = axios.create({
  // baseURL: 'http://localhost:8080/'
  baseURL: "https://roasterscorner.herokuapp.com/",
});

export const getAllRoasters = async () => {
  const resp = await api.get("/roasters/");
  console.log("apihelper getallRoasters", resp);
  return resp.data;
};
export const deleteRoaster = async (id) => {
  const resp = await api.delete(`/roasters/${id}`);
  return resp.data;
};
export const createRoaster = async (roaster) => {
  const resp = await api.post("/roasters", roaster);
  return resp.data;
};
export const getAllCoffees = async () => {
  const resp = await api.get("/coffees/");
  console.log("apihelper getallCoffees", resp);
  return resp.data;
};
export const createCoffee = async (coffee) => {
  const resp = await api.post("/coffees", coffee);
  return resp.data;
};
export const deleteCoffee = async (id) => {
  const resp = await api.delete(`/coffees/${id}`);
  return resp.data;
};
