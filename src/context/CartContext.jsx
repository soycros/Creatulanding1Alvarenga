<<<<<<< HEAD
import React, { createContext, useState } from 'react';
=======
import React, { createContext, useState, useEffect } from 'react';
>>>>>>> a46b95a (Mejoras finales)

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

<<<<<<< HEAD
  const addItem = (item, cantidad) => {
    const exist = cart.find(p => p.id === item.id);
    if (exist) {
      setCart(cart.map(p => p.id === item.id ? { ...p, cantidad: p.cantidad + cantidad } : p));
=======
  // 🔁 Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // 💾 Guardar carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // ➕ Agregar producto al carrito
  const addItem = (item, cantidad) => {
    if (cantidad <= 0) return; // Evita cantidades inválidas

    const exist = cart.find(p => p.id === item.id);
    if (exist) {
      setCart(cart.map(p =>
        p.id === item.id
          ? { ...p, cantidad: p.cantidad + cantidad }
          : p
      ));
>>>>>>> a46b95a (Mejoras finales)
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

<<<<<<< HEAD
  const clearCart = () => setCart([]);
  const removeItem = (id) => setCart(cart.filter(p => p.id !== id));
  const totalItems = () => cart.reduce((acc, p) => acc + p.cantidad, 0);
  const totalPrice = () => cart.reduce((acc, p) => acc + p.price * p.cantidad, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, clearCart, removeItem, totalItems, totalPrice }}>
=======
  // 🗑️ Vaciar carrito
  const clearCart = () => setCart([]);

  // ❌ Eliminar un producto por ID
  const removeItem = (id) => setCart(cart.filter(p => p.id !== id));

  // 🔢 Total de ítems
  const totalItems = () => cart.reduce((acc, p) => acc + p.cantidad, 0);

  // 💰 Total del precio
  const totalPrice = () => cart.reduce((acc, p) => acc + p.price * p.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clearCart,
        removeItem,
        totalItems,
        totalPrice
      }}
    >
>>>>>>> a46b95a (Mejoras finales)
      {children}
    </CartContext.Provider>
  );
}
