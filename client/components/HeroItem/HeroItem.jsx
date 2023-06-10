import Image from 'next/image'

const HeroItem = ({id, nickname, hero_image}) => {
    return(
        <a key={id} className="hero_link" href={`/hero/${id}`}>
            <div className='heroes_item_container' >
                <div className='hero-subcontainer'>
                    <Image 
                    width={150}
                    height={150}
                    src={hero_image.url ? 
                    process.env.NEXT_PUBLIC_MEDIA_URL+hero_image.url : "/incognito.jpeg"} 
                    alt={nickname}/>
                </div>
                <div className='hero-subcontainer'>
                    <h2>{nickname}</h2>
                </div>
            </div>
        </a>
    )
}

export default HeroItem