import axiosInstance from "../instances/axios"

export const getHeroes = async(page,pageSize) => {
    const { data } = await axiosInstance.get("/get/hero"+`?page=${page}&pageSize=${pageSize}`) 
    return data
}

export const getHero = async(id) => {
  const { data } = await axiosInstance.get("/get/hero/" + id) 
  return data
}
