import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Pokecard.css';


const COLORS = {
    black: 'linear-gradient(90deg, rgb(112, 109, 107) 29%, rgb(71, 68, 68) 78%)',
    blue: 'linear-gradient(90deg, rgb(87, 142, 230) 29%, rgb(43, 95, 238) 78%)',
    brown: 'linear-gradient(90deg, rgb(218, 144, 75) 29%, rgb(202, 115, 34) 78%)',
    gray: 'linear-gradient(90deg, rgb(170, 162, 153) 29%, rgb(117, 111, 105) 78%)',
    green: 'linear-gradient(90deg, rgb(79, 214, 79) 29%, rgb(41, 158, 37) 78%)',
    pink: 'linear-gradient(90deg, rgb(224, 131, 204) 29%, rgb(238, 89, 218) 78%)',
    purple: 'linear-gradient(90deg, rgb(177, 128, 240) 29%, rgb(153, 67, 233) 78%)',
    red: 'linear-gradient(90deg, rgb(236, 92, 73) 29%, rgb(243, 62, 62) 78%)',
    white: 'linear-gradient(90deg, rgb(230, 230, 230) 29%, rgb(219, 209, 209) 78%)',
    yellow: 'linear-gradient(90deg, rgb(241, 233, 111) 29%, rgb(228, 216, 45) 78%)'
}

const Pokecard = ({pokemon, history}) => {

const [inList, setInList] = useState(false)

useEffect(() => {
    setInList(isPokemonInList(pokemon))
},[])

const addPokemon = (e,pokemon) => {
    e.preventDefault()
    if(!localStorage.getItem('pokemons')){
        localStorage.setItem('pokemons',JSON.stringify([{id: pokemon.id, name: pokemon.name}]))
        setInList(true)
    }else{
        let pokemons = JSON.parse(localStorage.getItem('pokemons'))
        const isPokemonInList = pokemons.find(poke => poke.id === pokemon.id)
        if(!isPokemonInList){
            pokemons = [...pokemons, {id: pokemon.id, name: pokemon.name}] 
            localStorage.setItem('pokemons', [JSON.stringify(pokemons)])
            setInList(true)
        }else{
            alert('Pokemon already in list')
        }
    }

}

const removePokemon = (e,pokemon) => {
    e.preventDefault()
    if(!localStorage.getItem('pokemons')){
        localStorage.setItem('pokemons',JSON.stringify([{id: pokemon.id, name: pokemon.name}]))
    }else{
        let pokemons = JSON.parse(localStorage.getItem('pokemons'))
        const isPokemonInList = pokemons.find(poke => poke.id === pokemon.id)
        if(isPokemonInList){
            pokemons = pokemons.filter(item => item.id !== pokemon.id)
            localStorage.setItem('pokemons', [JSON.stringify(pokemons)])
            setInList(false)
        }else{
            alert('Pokemon is not in list')
        }
    }

}

const isPokemonInList = (pokemon) => {
    let pokemons = JSON.parse(localStorage.getItem('pokemons'))
    if(pokemons){
        const isPokemon = pokemons.find(poke => poke.id === pokemon.id)
        return isPokemon ? true : false
    }
    return false
}

const checkDescriptionLength = (string) => {
    
    const limit = 120

    if(string.length > limit){
        return `${string.slice(0,limit)}...`
    }

    return string
}

const clearList = (e) => {
    e.preventDefault()
    localStorage.clear()
}



return ( 
        <div className='pokecard' style={{background: COLORS[`${pokemon.species.color.name}`]}}>
                <div className='poke-top'>
                    <h2 className='poke-title'  >{pokemon.name}</h2>
                    <h4 className='poke-number'>{pokemon.id}</h4>
                </div>
                    <img className='poke-image' src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <div className='poke-text'>
                    <h4 className='poke-types'>{pokemon.types.map((type,i) => (<span key={i} className='poke-type' style={{border:`2px solid ${pokemon.species.color.name === 'white' ? 'black' : pokemon.species.color.name}`}}>{type.type.name}</span>))}</h4>
                    <p className='poke-description'>{checkDescriptionLength(pokemon.species.flavor_text_entries[1].flavor_text)}</p>
                </div>
                <div className='btn-group'>
                    <Link className='btn-card btn-info' to={`/pokemon/${pokemon.id}`}>Info</Link>
                    {inList
                    ?   <button  className='btn-card btn-release' onClick={(e) => removePokemon(e,pokemon)}>Release</button> 
                    : <button  className='btn-card btn-add' onClick={(e) => addPokemon(e,pokemon)}>Catch</button> }
                   
                    
                </div>
                {/* <button onClick={(e) => clearList(e)}>Clear</button> */}
        </div>
     );
}
 
export default Pokecard;