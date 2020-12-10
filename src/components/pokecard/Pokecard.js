import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Pokecard.css';
import { COLORS } from '../../data/colors';


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
                <div className='pokecard__top'>
                    <h2 className='pokecard__top-title'  >{pokemon.name}</h2>
                    <h4 className='pokecard__top-number'>{pokemon.id}</h4>
                </div>
                <img className='pokecard__image' src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <div className='pokecard__text'>
                    <h4 className='pokecard__text-types'>{pokemon.types.map((type,i) => (<span key={i} className='pokecard__text-type' style={{border:`2px solid ${pokemon.species.color.name === 'white' ? 'black' : pokemon.species.color.name}`}}>{type.type.name}</span>))}</h4>
                    <p className='pokecard__text-description'>{checkDescriptionLength(pokemon.species.flavor_text_entries[1].flavor_text)}</p>
                </div>
                <div className='pokecard__btn-group'>
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