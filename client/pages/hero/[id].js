import { useState } from "react"
import { useQuery,useMutation } from "react-query"
import Header from "../../components/Header/Header"
import { useRouter } from 'next/router'
import { editHero, deleteHero } from "../../mutations/hero"
import { getHero } from "../../queries/hero"
import Loader from "../../components/Loader/Loader"
import HeroProfile from "../../components/HeroProfile/HeroProfile"


export default function Hero() {
    const router = useRouter()
    const { id } = router.query
    const { data: hero, isLoading } = useQuery(["hero", id], () => getHero(id))
    const [vision,setVision] = useState(false)
    const mutateDel = useMutation(() => deleteHero(id))
    const mutateEdit = useMutation((data) => editHero(id, data))
   
    const onEdit = (e, data) => {
        e.preventDefault()
        if(data.nickname ||
            data.real_name ||
            data.origin_description ||
            data.superpowers ||
            data.catch_phrase)
            {
                mutateEdit.mutate(data)
                router.push("/")
            }
    }

    const onDelete = () => {
        mutateDel.mutate()
        router.push("/")
    }

    return (
        <div>
            <Header/>
            <main>
                {isLoading ? 
                    <Loader/> : 
                    <HeroProfile
                        onEdit={onEdit}
                        hero={hero}
                        vision={vision}
                        setVision={setVision}
                        onDelete={onDelete}/>}
            </main>
        </div>
    )
}
