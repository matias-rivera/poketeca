import React,{useState, useEffect} from 'react'
import Pokecard from "../components/pokecard/Pokecard";
import { getPokemonsDetails } from '../core/apiCore';

const MyPokemonsScreen = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)

    //load pokemons
    useEffect(() => {
        const myPokemons = JSON.parse(localStorage.getItem('pokemons'))
        getPokemonsDetails(myPokemons,setPokemons).then(() => setLoading(false)) 
    }, []);

    return ( 
    <>
        <h1>My Pokemons</h1>
        <div className='poke-wrapper'>
            {loading ? 'loading...' : pokemons.map(pokemon => (
                <Pokecard key={pokemon.id} pokemon={pokemon}/>
            ))}
        </div>
    </>
     );
}

 
export default MyPokemonsScreen;