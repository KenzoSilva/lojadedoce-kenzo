// src/components/ItemListContainer.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams(); // Captura o parâmetro dinâmico da URL

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      {id ? (
        <p>Exibindo produtos da categoria: <strong>{id}</strong></p>
      ) : (
        <p>Exibindo todos os produtos...</p>
      )}
    </div>
  );
};

export default ItemListContainer;