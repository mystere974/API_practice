import { useState, useEffect } from 'react';
import GameList from '../GameList/GameList';
import GameDetail from '../GameDetail/GameDetail';
import './Characters.css';

function Characters () {
    const [characters, setCharacters] = useState ([])
    

    useEffect(() => {
        const getList = () => {
            fetch('https://apis.wilders.dev/wild-games/games/')
                .then(resp => resp.json())
                .then(data => setCharacters(data))
        }
        getList()
    },[])
    

    return (
        <>
        {characters.map((game) => {
            return (
                <GameList {...game} />
                )
        })}
        </>
    )
        
    }
        
export default Characters;