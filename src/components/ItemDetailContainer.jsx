import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../context/ItemCount';
import { CartContext } from '../context/CartContext'; // 👈 conexión al carrito

const productos = [
  { id: '1', name: 'Celular', category: 'electronica', price: 500, stock: 10 },
  { id: '2', name: 'Remera', category: 'ropa', price: 30, stock: 15 },
  { id: '3', name: 'Licuadora', category: 'hogar', price: 100, stock: 5 },
];

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const { addItem } = useContext(CartContext); // 👈 usamos el contexto

  useEffect(() => {
    const found = productos.find(p => p.id === itemId);
    // simulamos carga asincrónica
    new Promise((res) => {
      setTimeout(() => res(found), 1000);
    }).then(setItem);
  }, [itemId]);

  const handleAddToCart = (cantidad) => {
    if (item) {
      addItem(item, cantidad);
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {item ? (
        <>
          <h2>{item.name}</h2>
          <p>Precio: ${item.price}</p>
          <ItemCount stock={item.stock || 10} initial={1} onAdd={handleAddToCart} />
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
