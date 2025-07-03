import React from 'react';

export default function CartItem({ item, removeItem }) {
  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
      <h4>{item.title}</h4>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio unitario: ${item.price}</p>
      <p>Subtotal: ${item.price * item.quantity}</p>
      <button onClick={() => removeItem(item.id)}>❌ Eliminar</button>
    </div>
  );
}
