import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import CharacterComp from './components/Character'

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.
const App = () => {
  const [characters, setCharacaters] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacaters(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className='App'>
      <CharacterComp characterData={characters} />
    </div >
  );
}

export default App;
