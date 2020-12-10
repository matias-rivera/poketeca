import axios from 'axios'
import AllPokemons from '../data/pokemons.json'


//search for pokemon by keyword
export const searchPokemons = (keyword) => {
    //filter pokemons data
    const pokemons = AllPokemons.filter(item => (item.identifier.indexOf(keyword.toLowerCase()) > -1));
    return pokemons
}

//get pokemons details
export const getPokemonsDetails = async (bulk,setPokemons) => {
    let pokemons = []
    //create a promise
    return await new Promise((resolve, reject) => {
        //get each pokemon data
        bulk.forEach((pokemon, index, array) => {
            //get pokemon
            let field

            if(pokemon.name){
                field = 'name'
            }else{
                field = 'id'
            }
            console.log(field)
            getPokemon(pokemon[field]).then(result => {
                //set pokemons
                pokemons = [...pokemons, result]
                setPokemons(pokemons)
            }).catch(e => console.log(e.message))
            if (index === array.length -1) resolve();
        });
    });
    
}


//get pokemon by id
export const getPokemon = async (field) => {
        //Get pokemon data
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${field}`).then(data => {
            const poke = data.data
            //Get pokemon species details
            return axios.get(poke.species.url).then(result => {
                const species = result.data
                //populate
                const _pokemon = {...poke, species}
                return _pokemon
            }).catch(e => console.log(e.message))
        }).then(response => {return response}).catch(e => console.log(e.message))
        return pokemon
}

//get details from a single pokemon
export const getPokemonDetails = async (id) => {
    const pokemons = await getPokemon(id).then(result => {return result.data}).catch(e => console.log(e.message))
    return pokemons
}

//get all pokemons data
export const getAllPokemons = () =>{
    return AllPokemons
}



//get pokemons
export const getPokemons = async (url) => {
    const pokemons = await axios.get(url)
    return pokemons
};



