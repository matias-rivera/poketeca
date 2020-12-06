import React, { useState, useEffect } from 'react'
import { getPokemonById } from '../core/apiCore'

const PokemonScreen = ({match}) => {
    const pokemonId = match.params.id
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        getPokemonById(pokemonId, setPokemon).then(result => setLoading(false))
    },[match])



    return ( 
        <>
            {loading ? 'loading' : (
                <>
                <div className='pokemon-wrapper'>
                    <div className='pokemon-top'>
                        <div className='pokemon-side_description'>
                            <h2 className='pokemon-side_description--title'>{pokemon.name}</h2>
                            <h4 className='pokemon-side_description--subtitle'>#{pokemon.id}</h4>
                            <div className='pokemon-side_description--type'>{pokemon.types && pokemon.types.map((type,i) => (<span key={i}>{type.type.name}</span>))}</div>
                        </div>
                        <img className='pokemon-image' src={pokemon.sprites && pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
                    <div className='pokemon-description'>{pokemon.species && pokemon.species.flavor_text_entries[1].flavor_text}</div>
                    <div className='pokemon-stats'>

                    </div>
                    
                </div>

                </>
            
            )}
        </>
     );
}
 
export default PokemonScreen;