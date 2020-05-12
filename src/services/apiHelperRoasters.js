import axios from 'axios';
//axios is a library with a few methods, there to make requests from the back-end. the methods are promises to give response
const api = axios.create({
  baseURL: 'http://localhost:8080/'
})

export const getAllRoasters = async () => {
    const resp = await api.get('/roasters/')
    console.log('apihelper getallRoasters',resp)
    return resp.data
  }
  export const deleteRoaster = async (id) => {
    const resp  = await api.delete(`/roasters/${id}`)
    return resp.data
  }
  export const createRoaster = async (roaster) => {
      const resp = await api.post('/roasters', roaster)
      return resp.data
  }
  export const getAllCoffees = async () => {
    const resp = await api.get('/coffees/')
    console.log('apihelper getallCoffees',resp)
    return resp.data
  }
  export const createCoffee = async (coffee) => {
    const resp = await api.post('/coffees', coffee)
    return resp.data
}
//need to change parameter on back end to name
export const deleteCoffee = async (name) => {
  const resp  = await api.delete(`/roasters/${name}`)
  return resp.data
}
