import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const productos = [
  { id: '1', name: 'Celular', category: 'electronica', price: 500 },
  { id: '2', name: 'Remera', category: 'ropa', price: 30 },
  { id: '3', name: 'Licuadora', category: 'hogar', price: 100 },
];

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((res) => {
      setTimeout(() => {
        const result = categoryId
          ? productos.filter(p => p.category === categoryId)
          : productos;
        res(result);
      }, 1000);
    }).then(setItems);
  }, [categoryId]);

  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{greeting || `Categoría: ${categoryId}`}</h2>
      {items.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <a href={`/item/${p.id}`}>Ver más</a>
        </div>
      ))}
    </section>
  );
}

export default ItemListContainer;
