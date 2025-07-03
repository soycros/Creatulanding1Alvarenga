import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from '../context/ItemCount';

export default function ItemDetail({ productos }) {
  const { id } = useParams();
  const producto = productos.find(p => p.id === id);
  const { addItem } = useContext(CartContext);

  const handleAdd = (cantidad) => {
    addItem(producto, cantidad);
  };

  if (!producto) return <p>❌ Producto no encontrado</p>;
  if (producto.stock === 0) return <p>📦 Producto sin stock</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{producto.title}</h2>
      <p>💬 {producto.description}</p>
      <p>💲 Precio: ${producto.price}</p>
      <p>📦 Stock disponible: {producto.stock}</p>
      <ItemCount stock={producto.stock} initial={1} onAdd={handleAdd} />
    </div>
  );
}
