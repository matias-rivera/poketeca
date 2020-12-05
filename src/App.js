import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomeScreen from "./screens/HomeScreen";


function App() {

  

  return (
    <div className="App">
      <Navbar />
      <main className='main'>
        <HomeScreen />
      </main>
    </div>
  );
}

export default App;
