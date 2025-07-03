import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, totalCart, removeItem, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <p>🛒 El carrito está vacío</p>;
  }

  return (
    <div>
      <h2>Tu Carrito</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeItem={removeItem} />
      ))}
      <h3>Total: ${totalCart()}</h3>
      <button onClick={clearCart}>🧹 Vaciar carrito</button>
      <br />
      <Link to="/checkout">
        <button>🧾 Finalizar compra</button>
      </Link>
    </div>
  );
}
