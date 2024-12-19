import React, { useState } from 'react';
import ItemCount from './ItemCount'; 
import { useNavigate } from 'react-router-dom';

function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate(); // Hook para navegar entre rotas

  // Função chamada ao adicionar itens
  const handleAdd = (count) => {
    setQuantity(count); // Define a quantidade adicionada
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', maxWidth: '400px' }}>
      <h2>{item.title}</h2>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <p>{item.description}</p>
      <h3>Preço: R$ {item.price}</h3>

      {/* Mostra o contador se nenhum item foi adicionado, caso contrário, o botão para finalizar */}
      {quantity === 0 ? (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <button
  onClick={() => navigate('/cart')}
  style={{
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }}
>
  Finalizar Compra
</button>
      )}
    </div>
  );
}

export default ItemDetail;