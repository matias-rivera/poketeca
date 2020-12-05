import React from 'react'
import './Pokecard.css';

const Pokecard = ({pokemon}) => {


    return ( 
        <div className='pokecard' style={{backgroundColor: pokemon.species.color.name}}>
            <h2 className='poketitle'>{pokemon.name}</h2>
            <img className='pokeimage' src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <p className='poke-description'>{pokemon.species.flavor_text_entries[1].flavor_text}</p>

        </div>
     );
}
 
export default Pokecard;