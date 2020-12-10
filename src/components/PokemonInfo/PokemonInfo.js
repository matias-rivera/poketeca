import React from 'react'
import './PokemonInfo.css'

const PokemonInfo = ({ pokemon, handleRedirect }) => {

    const getNext = (id) => {
        return id === 10220 ?  10220 : id === 898 ? 10001 : id + 1
    }
    
    const getBefore = (id) => {
        return id === 1 ?  1 : id === 10001 ? 898 : id - 1
        
    }

    const handleBefore = () => {
        handleRedirect(getBefore(pokemon.id))
    }

    const handleNext = () => { 
        handleRedirect(getNext(pokemon.id))
    }

    return ( 
        <div className='pokemon-wrapper'>
            <div className='pokemon-top'>
                {pokemon.id === 1 ? '' : <button className='btn-redirect' onClick={() => handleBefore()}><i className="fas fa-chevron-left"></i></button>}
 
                    <div className='pokemon-top__side'>
                        <h2 className='pokemon-top__side-title'>{pokemon.name}</h2>
                        <h4 className='pokemon-top__side-subtitle'>#{pokemon.id}</h4>
                        <div className='pokemon-top__side-type'>{pokemon.types && pokemon.types.map((type,i) => (<span key={i}>{type.type.name}</span>))}</div>
                    </div>
     
                <img className='pokemon-top__image' src={pokemon.sprites && pokemon.sprites.front_default} alt={pokemon.name}/>
                {pokemon.id === 10220 ? '' : <button className='btn-redirect' onClick={() => handleNext()}><i className="fas fa-chevron-right"></i></button>}
            </div>
            <div className='pokemon-description'>{pokemon.species && pokemon.species.flavor_text_entries[1].flavor_text}</div>
            <div className='pokemon-stats'>
                <ul className='pokemon-stats-list'>
                    <li className='pokemon-stats-item'>
                        <h3>{pokemon.height}</h3>
                        <hr/>
                        <p>Height</p>
                    </li>
                    <li className='pokemon-stats-item'>
                        <h3>{pokemon.weight}</h3>
                        <hr/>
                        <p>Weight</p>
                    </li>
                    <li className='pokemon-stats-item'>
                        <h3>{pokemon.stats[0].base_stat}</h3>
                        <hr/>
                        <p>Base Stat</p>
                    </li>
                    <li className='pokemon-stats-item'>
                        <h3>{pokemon.abilities[0].ability.name}</h3>
                        <hr/>
                        <p>Item</p>
                    </li>
                    <li className='pokemon-stats-item'>
                        <h3>{pokemon.species.generation.name}</h3>
                        <hr/>
                        <p>Generation</p>
                    </li>
                    <li className='pokemon-stats-item'>
                       <h3>{pokemon.species.habitat ? pokemon.species.habitat.name : 'None'}</h3>
                       <hr/>
                       <p>Habitat</p>
                    </li>
                </ul>
            </div>
            {console.log(pokemon)}
        </div>

     );
}
 
export default PokemonInfo;