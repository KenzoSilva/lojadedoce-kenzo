import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count <= stock) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count">
      <button onClick={handleSubtract} disabled={count <= 1}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd} disabled={count >= stock}>+</button>
      <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ItemCount;
