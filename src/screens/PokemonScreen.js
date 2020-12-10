import React, { useState, useEffect } from 'react'
import PokemonInfo from '../components/PokemonInfo/PokemonInfo';
import { getPokemon } from '../core/apiCore'


const PokemonScreen = ({match, history}) => {
    const pokemonId = match.params.id
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
            getPokemon(pokemonId).then(result => {
            setPokemon(result)
            setLoading(false)
        })
    },[match, history])

    const handleRedirect = (id) => {
        history.push(`/pokemon/${id}`)
    }

    return ( 
        <>
            {loading ? 'loading' : (
                <>
                    {!pokemon ? 'Not Found' : <PokemonInfo pokemon={pokemon} handleRedirect={handleRedirect}/>}
                </>
            
            )}
        </>
     );
}
 
export default PokemonScreen;