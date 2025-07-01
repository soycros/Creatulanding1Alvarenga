import React, { useState } from 'react';

export default function ItemCount({ stock, initial, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  const aumentar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div>
      <div>
        <button onClick={disminuir}>-</button>
        <span>{cantidad}</span>
        <button onClick={aumentar}>+</button>
      </div>
      <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
    </div>
  );
}
