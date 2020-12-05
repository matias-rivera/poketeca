import React,{ useState, useEffect } from 'react'
import Pokecard from '../components/pokecard/Pokecard';
import SearchBox from '../components/searchbox/SearchBox';
import { searchPokemons } from '../core/apiCore';


const SearchScreen = ({history, match}) => {
    
    const keyword = match.params.keyword ? match.params.keyword : ''

    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)

    //load pokemons
    useEffect(() => {
        searchPokemons(keyword,setPokemons).then(result => setLoading(false))
    }, [history, match]);

    return ( 
        <>
            <SearchBox history={history} placedKeyword={keyword}/>
            <h1>Searched Pokemons</h1>
            <div className='poke-wrapper'>
                {loading ? 'loading...' : pokemons.map(pokemon => (
                    <Pokecard key={pokemon.id} pokemon={pokemon}/>
                ))}
            </div>
        </>
     );
}
 
export default SearchScreen;