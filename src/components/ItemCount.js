import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  // Incrementa o contador, respeitando o limite de estoque
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  // Decrementa o contador, garantindo que seja pelo menos 1
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Chama a função onAdd para passar o número de itens ao pai
  const addToCart = () => {
    if (count > 0 && count <= stock) {
      onAdd(count); // Envia o número de itens selecionados ao componente pai
    }
  };

  return (
    <div className="item-count">
      <button onClick={decrement} disabled={count <= 1}>
        -
      </button>
      <span>{count}</span>
      <button onClick={increment} disabled={count >= stock}>
        +
      </button>
      <button onClick={addToCart} disabled={stock === 0}>
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ItemCount;