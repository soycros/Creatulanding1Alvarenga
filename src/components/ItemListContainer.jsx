import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/getProducts';
import ItemCard from './ItemCard';

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProducts(categoryId)
      .then(data => setItems(data))
      .catch(() => setError('Error al cargar productos'))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{greeting || (categoryId ? `Categoría: ${categoryId}` : 'Todos los productos')}</h2>

      {loading && <p>Cargando productos...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ItemListContainer;
