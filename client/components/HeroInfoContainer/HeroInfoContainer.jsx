const HeroInfoContainer = ({hero}) => {
    return(
        <div>
            <p>ID : {hero?.data?.id}</p>
            <p>Nickname : {hero?.data?.nickname}</p>
            <p>Real Name : {hero?.data?.real_name}</p>
            <p>Description : {hero?.data?.origin_description}</p>
            <p>Superpowers : {hero?.data?.superpowers}</p>
            <p>Phrase : {hero?.data?.catch_phrase}</p>
        </div>
    )
}

export default HeroInfoContainer