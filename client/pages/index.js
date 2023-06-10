import { useState } from "react"
import { useQuery } from "react-query"
import Header from "../components/Header/Header"
import HeroItem from "../components/HeroItem/HeroItem"
import Loader from "../components/Loader/Loader"
import { getHeroes } from "../queries/hero"
import Pagination from '@mui/material/Pagination';

export default function Home() {
  const [page, setPage] = useState(0)
  const pageSize = 15
  const { data: heroes, isLoading } = useQuery(["heroes-list", page], () => getHeroes(page,pageSize))
  const totalPageCount = Math.ceil(heroes?.data.count / pageSize);
  const handleChangePage = (_, newPage) => setPage(newPage-1)
  return (
    <div>
      <Header/>
      <main>
        <a href="/create">Create</a>
        {!isLoading ? 
        <div>
          {heroes?.data.rows.map(({id, nickname, hero_image}) => 
            <HeroItem
              key={id}
              id={id} 
              nickname={nickname} 
              hero_image={hero_image}/>)}
            <Pagination
              onChange={handleChangePage}
              page={page+1}
              count={totalPageCount} 
              shape="rounded"/>
        </div> : 
          <Loader/>}
      </main>
    </div>
  )
}
