import { useState, useEffect } from "react";



const Characters = () => {
    const [characters, setCharacters] = useState ([])

    useEffect (() => {
        const getData = () => {
            fetch('https://apis.wilders.dev/wild-games/games/')
                .then(resp => resp.json())
                .then(data => console.log(data) || setCharacters(data))
        }
        getData()
    },[]) 

    return (
        <div>
            {characters.map((character) => (

                    <div>
                    {character.name}
                    <p>Date de sortie : {character.released}</p>
                    <p>Genre: {character.genres[0].name}</p>
                    <img src={character.background_image} />
                    </div>
    
            ))}
        </div>
        )
    }
export default Characters;