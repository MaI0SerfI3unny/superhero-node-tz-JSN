import Image from 'next/image'
import HeroInfoContainer from "../../components/HeroInfoContainer/HeroInfoContainer"
import FormHero from "../../components/FormHero/FormHero"

const HeroProfile = ({hero, onDelete, setVision, vision, onEdit}) => {
    return(
        <div className="hero_info_container">
        <div className="hero_info_subcontainer">
            <Image 
                width={320}
                height={320}
                src={hero?.data?.hero_image.url ? 
                process.env.NEXT_PUBLIC_MEDIA_URL+hero?.data?.hero_image.url : "/incognito.jpeg"} 
                alt={hero?.data?.nickname}/>
        </div>
        <div className="hero_info_subcontainer">
            {!vision ?
                <HeroInfoContainer hero={hero}/> :
                <FormHero hero={hero} onCreate={onEdit}/>}
            <button onClick={() => onDelete(hero?.data?.id)}>Delete</button>
            <button onClick={() => setVision(!vision)}>Edit</button>
        </div>
        </div>)
}

export default HeroProfile