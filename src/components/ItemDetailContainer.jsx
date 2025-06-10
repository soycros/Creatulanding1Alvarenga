import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const productos = [
  { id: '1', name: 'Celular', category: 'electronica', price: 500 },
  { id: '2', name: 'Remera', category: 'ropa', price: 30 },
  { id: '3', name: 'Licuadora', category: 'hogar', price: 100 },
];

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    new Promise((res) => {
      setTimeout(() => res(productos.find(p => p.id === itemId)), 1000);
    }).then(setItem);
  }, [itemId]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {item ? (
        <>
          <h2>{item.name}</h2>
          <p>Precio: ${item.price}</p>
        </>
      ) : <p>Cargando...</p>}
    </div>
  );
}
