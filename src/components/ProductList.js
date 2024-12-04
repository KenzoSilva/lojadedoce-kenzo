import React from 'react';
import './ProductList.css'; // Arquivo para estilizar (se necessário)
import ItemCount from './ItemCount'; // Contador com botão

// Lista de produtos
const products = [
  { id: 1, name: 'Pudim', image: '/images/pudim.jpg', stock: 10 },
  { id: 2, name: 'Bolo', image: '/images/bolo.jpg', stock: 5 },
  { id: 3, name: 'Brigadeiro', image: '/images/brigadeiro.jpg', stock: 20 },
  { id: 4, name: 'Beijinho', image: '/images/beijinho.jpg', stock: 15 },
  { id: 5, name: 'Sonho', image: '/images/sonho.jpg', stock: 8 },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <ItemCount stock={product.stock} initial={1} onAdd={(quantity) => alert(`Adicionado ${quantity} ${product.name}`)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;