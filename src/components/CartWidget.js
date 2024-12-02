import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="bi bi-cart-fill" style={{ fontSize: '1.5rem', color: 'black' }}></i>
    </div>
  );
};

export default CartWidget;