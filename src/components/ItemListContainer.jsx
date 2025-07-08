import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD

const productos = [
  { id: '1', name: 'Celular', category: 'electronica', price: 500 },
  { id: '2', name: 'Remera', category: 'ropa', price: 30 },
  { id: '3', name: 'Licuadora', category: 'hogar', price: 100 },
];
=======
import { getProducts } from '../services/getProducts';
import ItemCard from './ItemCard';
>>>>>>> a46b95a (Mejoras finales)

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
<<<<<<< HEAD

  useEffect(() => {
    new Promise((res) => {
      setTimeout(() => {
        const result = categoryId
          ? productos.filter(p => p.category === categoryId)
          : productos;
        res(result);
      }, 1000);
    }).then(setItems);
=======
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProducts(categoryId)
      .then(data => setItems(data))
      .catch(() => setError('Error al cargar productos'))
      .finally(() => setLoading(false));
>>>>>>> a46b95a (Mejoras finales)
  }, [categoryId]);

  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
<<<<<<< HEAD
      <h2>{greeting || `Categoría: ${categoryId}`}</h2>
      {items.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <a href={`/item/${p.id}`}>Ver más</a>
        </div>
      ))}
=======
      <h2>{greeting || (categoryId ? `Categoría: ${categoryId}` : 'Todos los productos')}</h2>

      {loading && <p>Cargando productos...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
>>>>>>> a46b95a (Mejoras finales)
    </section>
  );
}

export default ItemListContainer;
