// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa o roteamento
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const handleAdd = (quantity) => {
    alert(`Você adicionou ${quantity} item(s) ao carrinho!`);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* Navbar visível em todas as páginas */}
        <NavBar />

        {/* Configuração das rotas */}
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<ItemListContainer greeting="Bem-vindo à nossa loja de doces!" />} />
          
          {/* Rota para categorias com parâmetro dinâmico */}
          <Route path="/category/:id" element={<ItemListContainer greeting="Filtrando por categoria" />} />
          
          {/* Rota para detalhes do produto com parâmetro dinâmico */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>

        {/* ItemCount exibido apenas na Home (opcional) */}
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      </div>
    </BrowserRouter>
  );
}

export default App;