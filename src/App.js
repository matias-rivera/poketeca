import React, { useState, useEffect } from "react";
import { getPokemons } from "./core/apiCore";
import axios from 'axios'
import Navbar from "./components/navbar/Navbar";


function App() {

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({})


  //get all products by sold units
  const loadPokemons = () => {
    getPokemons().then(data => {
      const pokemons_ = data.data.results
      let pokeList = []
      pokemons_.forEach(pokemon => {
        axios.get(pokemon.url).then(data => {
          pokeList = [...pokeList, data.data]   
          setPokemons(pokeList)
        })
      });
      setLoading(false)
        
    })
  }

  //load products
  useEffect(() => {
    loadPokemons()
}, []);

  return (
    <div className="App">
      <Navbar />
      <div className='wrapper'>

        {loading 
        ? <p>Loading...</p>
        : (
          
          pokemons.map((pokemon,i) => (
            <div className='pokecard' key={i}>
                <h2 className='poketitle'>{pokemon.name}</h2>
                <img className='pokeimage' src={pokemon.sprites.front_default}/>

              </div>
            ))
            
            
            )
            
          }
      </div>

    </div>
  );
}

export default App;
