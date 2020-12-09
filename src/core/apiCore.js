import axios from 'axios'
import AllPokemons from '../data/pokemons.json'


export const searchPokemons = async (keyword, setPokemons) => {
    const pokemons = AllPokemons.filter(item => (item.identifier.indexOf(keyword.toLowerCase()) > -1));
    if(pokemons.length > 0){
        let pokeList = []
        pokemons.slice(0,20).forEach(item => {
            console.log(item)
        })
        try {
            pokemons.slice(0,20).forEach(pokemon => {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`).then(data => {
                    let poke = data.data
                    axios.get(poke.species.url).then(species_data =>{
                        if(species_data){
                            const species = species_data.data
                            pokeList = [...pokeList, {...poke,species}]
                            setPokemons(pokeList)
                        }
                        
                    }).catch(e => {return console.log(e.message)})
                })
            }).catch(e => {return console.log(e)})
        } catch (error) {
            console.log(error.message)
        }
       
    }
    //const pokemons = AllPokemons.find(pokemon => keyword === pokemon.identifier || parseInt(keyword) === pokemon.id)

}

export const getPokemonById = async (id, setPokemon) => {
    
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(data => {
        let poke = data.data
        axios.get(poke.species.url).then(species_data =>{
            const species = species_data.data
            const pokemon = {...poke,species}
            setPokemon(pokemon)
        }).catch(e => {return console.log(e.message)})   
    })
}

export const getAllPokemons = () =>{
    return AllPokemons
}

export const getMyPokemons = async (setPokemons) => {

    const myPokemons = JSON.parse(localStorage.getItem('pokemons'))
    let pokeList = []
    
    if(myPokemons){
        await myPokemons.forEach(pokemon => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`).then(data => {
            let poke = data.data
            axios.get(poke.species.url).then(species_data =>{
                const species = species_data.data
                pokeList = [...pokeList, {...poke,species}]
                setPokemons(pokeList)
                
            })   
            }).catch(e =>{return console.log(e.message)})
        })
    }
    else{
        return []
    }
}

//get pokemons
export const getPokemons = async (url) => {
    const pokemons = await axios.get(url)
    return pokemons
};


export const getPokemonsDetails = async(pokemons, setPokemons) => {
    let pokeList = []
    try {
        await pokemons.forEach(pokemon => {
            axios.get(pokemon.url).then(data => {
            let poke = data.data
            axios.get(poke.species.url).then(species_data =>{
                const species = species_data.data
                pokeList = [...pokeList, {...poke,species}]
                setPokemons(pokeList)
                
            }).catch(e => {return console.log(e.message)})
            })
        })
        
    } catch (error) {
        console.log(error.message)
    }
    
}

