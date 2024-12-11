import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: 'Pudim de Leite Condensado',
        image: 'https://static.itdg.com.br/images/640-440/d1307a2e17cda187df76b78cfd3ac464/shutterstock-2322251819-1-.jpg',
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