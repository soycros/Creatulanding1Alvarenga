import { useEffect, useState } from 'react';
import { getProducts } from '../services/getProducts';

export function useProducts(categoryId) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then(setItems)
      .catch(() => setError('Error al cargar productos'))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return { items, loading, error };
}
