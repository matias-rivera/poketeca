import React,{ useState, useEffect } from 'react'
import Pokecard from '../components/pokecard/Pokecard';
import SearchBox from '../components/searchbox/SearchBox';
import { searchPokemons, getPokemonsDetails } from '../core/apiCore';
import { Route } from 'react-router-dom';

const SearchScreen = ({history, match}) => {
    
    const keyword = match.params.keyword ? match.params.keyword : ''

    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)


    //get all pokemons
    const loadPokemons = async () => {
        //search for pokemons
        const search = searchPokemons(keyword).slice(0,20)
        //get
        if(search.length > 0){
            getPokemonsDetails(search,setPokemons).then(() => setLoading(false)) 
        }else{
            setPokemons([])
            setLoading(false)
        }
    }


  

    //load pokemons
    useEffect( async () => {
        loadPokemons()
    }, [history, match, keyword]);

    return ( 
        <>
            <Route render={({history}) =>  <SearchBox history={history} placedKeyword={keyword}/>} />
            <h1>Searched Pokemons</h1>
            <h2>{pokemons.length < 1 && 'No pokemons found'}</h2>
            <div className='poke-wrapper'>
                {loading
                 ? 'loading...' : pokemons.map(pokemon => (
                    pokemon ? <Pokecard key={pokemon.id} pokemon={pokemon}/> : ''
                ))}
            </div>
        </>
     );
}
 
export default SearchScreen;