import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <di className="App">
      <Navbar/>
      <ItemListContainer greetings={"Pagina en construccion"}/>
      <h1>aqui van a ir mas componentes en el futuro cercano</h1>
      <img id="img"src="../src/kiwi-feliz.jpg"></img>
    </di>
  )
}

export default App
