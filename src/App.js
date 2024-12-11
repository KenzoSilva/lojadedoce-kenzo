// src/App.js
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer'; // Importação do ItemDetailContainer

function App() {
  const handleAdd = (quantity) => {
    alert(`Você adicionou ${quantity} item(s) ao carrinho!`);
  };

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bem-vindo à nossa loja de doces!" />
      {/* Integração do ItemCount */}
      <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      {/* Integração do ItemDetailContainer */}
      <ItemDetailContainer /> {/* Adicionado aqui */}
    </div>
  );
}

export default App;