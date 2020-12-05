import React from 'react'

const PokemonScreen = ({match}) => {
    const pokemon = match.params.pokemon
    return ( 
        <h1>{pokemon}</h1>
     );
}
 
export default PokemonScreen;