import React from 'react';

function ItemDetail({ item }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', maxWidth: '400px' }}>
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: '8px' }} />
      <p>{item.description}</p>
      <h3>Preço: R$ {item.price}</h3>
    </div>
  );
}

export default ItemDetail;