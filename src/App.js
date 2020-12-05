import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import MyPokemonsScreen from './screens/MyPokemonsScreen';
import MyTeamsScreen from './screens/MyTeamsScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {

  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main className='main'>
          <Route path='/mypokemons' component={MyPokemonsScreen} exact/>
          <Route path='/myteams' component={MyTeamsScreen} exact/>
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/' component={HomeScreen} exact/>
        </main>
      </Router>
    </div>
  );
}

export default App;
