import React,{useEffect, useState} from 'react'
import { getPokemons, getPokemonsDetails } from "../core/apiCore";
import Pokecard from "../components/pokecard/Pokecard";
import SearchBox from '../components/searchbox/SearchBox';


const HomeScreen = ({history}) => {
    const [pokemons, setPokemons] = useState([])
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [next, setNext] = useState('')
    const [previous, setPrevious] = useState('')
    const [loading, setLoading] = useState(true)
    //const [error, setError] = useState({})


    //get all products by sold units
    const loadPokemons = () => {
        getPokemons(url).then(data => {
            console.log(data.data.results)
            getPokemonsDetails(data.data.results, setPokemons).then(data => setLoading(false))
            if(data.data.previous){
                setPrevious(data.data.previous)
            }
            if(data.data.next){
                setNext(data.data.next)
            }
        })

    }

    
    //load products
    useEffect(() => {
        setPokemons([])
        loadPokemons()
    }, [url]);


    return ( 
        <>
        
        <SearchBox history={history}/>
        <div className='np-buttons'>
            {<button disabled={!previous ? true : previous === url ? true : false} className='btn-nav btn-previous btn-red' onClick={() => setUrl(previous)}>Previous</button>}
            {<button disabled={!next ? true : next === url ? true : false} className='btn-nav btn-next btn-red' onClick={() => setUrl(next)}>Next</button>}
        </div>
        <div className='poke-wrapper'>

            {loading 
            ? <p>Loading...</p>
            : (
            
            pokemons.map((pokemon,i) => (
                pokemon ? <Pokecard pokemon={pokemon} key={i}/> : ''
                ))
                
                
                )
                
            }
      </div>
      
      
      </>
     );
}
 
export default HomeScreen;