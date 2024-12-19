// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa o roteamento
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './pages/Cart/Cart';

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
          {/* Página inicial */}
          <Route
            path="/"
            element={<ItemListContainer greeting="Bem-vindo à nossa loja de doces!" />}
          />

          {/* Categoria com parâmetro dinâmico */}
          <Route
            path="/category/:id"
            element={<ItemListContainer greeting="Filtrando por categoria" />}
          />

          {/* Detalhes do produto com parâmetro dinâmico */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />

          {/* Rota para o carrinho */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;