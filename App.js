import { useState } from 'react'; //Hook
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'






function App() {
  const [characters, setCharacter] = useState([]);

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "09d38d0a379a.47ee58661aa6af2a95d7" ;

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then(response => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacter((oldChars) => [...oldChars, data]);
        } else {
          alert("No hay personajes con ese ID");
        }
      });// data es el objeto del usuario
  };



  

const onClose =(id) => {
  setCharacter(
    characters.filter((char) => char.id !==id ));
}


  return (

    <div className='App'>
    <div className='Container'>


 <Nav onSearch = {onSearch} />
 
    <div className='Div'>
      <div className='Div--child'>
        
      </div>
      
      <div>
        <Cards
          characters={characters}  onClose = {onClose} />
      </div>
      </div>
      
      </div>
    </div>
  )
}

export default App



