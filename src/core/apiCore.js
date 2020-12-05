import axios from 'axios'

//get pokemons
export const getPokemons = async () => {
    const pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    return pokemons
};