import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: 'Pudim de Leite Condensado',
        image: 'https://via.placeholder.com/400x300?text=Pudim', // Substitua por uma URL real de imagem
        description: 'Um delicioso pudim de leite condensado, perfeito para sobremesas.',
        price: 25.0,
      });
    }, 2000); // Simula um atraso de 2 segundos
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem().then((data) => setItem(data));
  }, []);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Carregando detalhes do produto...</p>}
    </div>
  );
}

export default ItemDetailContainer;