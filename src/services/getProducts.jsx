import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export const getProducts = async (categoryId) => {
  const querySnapshot = await getDocs(collection(db, 'products'));
  const allProducts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  if (categoryId) {
    return allProducts.filter(p => p.category === categoryId);
  }

  return allProducts;
};
