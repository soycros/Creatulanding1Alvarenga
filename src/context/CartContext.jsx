import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    const exist = cart.find(p => p.id === item.id);
    if (exist) {
      setCart(cart.map(p => p.id === item.id ? { ...p, cantidad: p.cantidad + cantidad } : p));
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const clearCart = () => setCart([]);
  const removeItem = (id) => setCart(cart.filter(p => p.id !== id));
  const totalItems = () => cart.reduce((acc, p) => acc + p.cantidad, 0);
  const totalPrice = () => cart.reduce((acc, p) => acc + p.price * p.cantidad, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, clearCart, removeItem, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
