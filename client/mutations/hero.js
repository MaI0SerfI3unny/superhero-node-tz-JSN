import axiosInstance from "../instances/axios"

export const editHero = async(id,hero) => {
    const { data } = await axiosInstance.put("/put/hero/" + id, {hero:hero})
    return data
}

export const deleteHero = async(id) => {
    const { data } = await axiosInstance.delete("/delete/hero/" + id)
    return data
}

export const createHero = async(hero) => {
    const { data } = await axiosInstance.post("/post/hero", { hero: hero })
    return data
}