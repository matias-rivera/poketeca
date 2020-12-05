import axios from 'axios'

//get pokemons
export const getPokemons = async (url) => {
    const pokemons = await axios.get(url)
    return pokemons
};


export const getPokemonsDetails = async(pokemons, setPokemons) => {
    let pokeList = []
    await pokemons.forEach(pokemon => {
        axios.get(pokemon.url).then(data => {
        let poke = data.data
        axios.get(poke.species.url).then(species_data =>{
            const species = species_data.data
            pokeList = [...pokeList, {...poke,species}]
            setPokemons(pokeList)
            
        })   
        })
    })
    
}

