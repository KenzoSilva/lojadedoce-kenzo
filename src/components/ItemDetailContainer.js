// src/components/ItemDetailContainer.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

// Simula uma API que busca detalhes do produto pelo ID
const getItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        title: 'Pudim de Leite Condensado',
        image: 'https://static.itdg.com.br/images/640-440/d1307a2e17cda187df76b78cfd3ac464/shutterstock-2322251819-1-.jpg',
        description: 'Um delicioso pudim de leite condensado, perfeito para sobremesas.',
        price: 25.0,
      });
    }, 2000); // Simula um atraso de 2 segundos
  });
};

function ItemDetailContainer() {
  const { id } = useParams(); // Captura o parâmetro dinâmico da URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(id).then((data) => setItem(data)); // Busca os dados do produto pelo ID
  }, [id]);

  return (
    <div>
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <p>Carregando detalhes do produto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;