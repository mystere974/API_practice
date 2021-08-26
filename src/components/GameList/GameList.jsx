import './GameList.css';

function GameList ({ name, background_image, released, genres, clip }) {
    return (

    <>
    <h1>{name}</h1>
    <div className="imgGame">
    <img src={background_image} alt="" />
    </div>
    <p>Date de sortie: {released}</p>
    <p>Genre: {genres[0].name}</p>
    <p>Extrait:</p>
    <iframe width="500" height="250" src={clip.clip}
        frameBorder='0'
        allow='encrypted-media'
        allowFullScreen
        title='video' />

    </>
)
}

export default GameList;