import { useState } from "react"
import { useMutation } from "react-query"
import Header from "../../components/Header/Header"
import { useRouter } from 'next/router'
import FormHero from "../../components/FormHero/FormHero"
import { createHero } from "../../mutations/hero"

export default function createHeroPage() {
    const router = useRouter()
    const mutate = useMutation((data) => createHero(data))

    const onCreate = (e, data) => {
        e.preventDefault()
        if(data.nickname ||
            data.real_name ||
            data.origin_description ||
            data.superpowers ||
            data.catch_phrase)
            {
                mutate.mutate(data)
                router.push("/")
            }
    }
    return (
        <div>
            <Header/>
            <main>
                <FormHero onCreate={onCreate}/>
            </main>
        </div>
    )
}