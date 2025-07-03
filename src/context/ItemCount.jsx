import React, { useState } from 'react';

export default function ItemCount({ stock, initial, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);
  const [agregado, setAgregado] = useState(false);

  const aumentar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAdd = () => {
    onAdd(cantidad);
    setAgregado(true);
  };

  // Mostrar mensaje si no hay stock
  if (stock === 0) {
    return <p>Producto sin stock 😞</p>;
  }

  return (
    <div>
      {!agregado ? (
        <>
          <div>
            <button onClick={disminuir}>−</button>
            <span style={{ margin: '0 10px' }}>{cantidad}</span>
            <button onClick={aumentar}>+</button>
          </div>
          <button onClick={handleAdd} style={{ marginTop: '10px' }}>
            Agregar al carrito
          </button>
        </>
      ) : (
        <p>✅ ¡Producto agregado al carrito!</p>
      )}
    </div>
  );
}
