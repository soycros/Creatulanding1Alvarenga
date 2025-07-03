import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '../firebase';

export default function CheckoutForm() {
  const { cart, totalCart, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const order = {
      buyer: form,
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      })),
      total: totalCart(),
      date: serverTimestamp()
    };

    try {
      const docRef = await addDoc(collection(db, 'ordenes'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al generar la orden', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Generando tu orden...</p>;

  if (orderId) {
    return <p>✅ ¡Compra realizada! Tu número de orden es: <strong>{orderId}</strong></p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input type="text" name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Correo" value={form.email} onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Teléfono" value={form.phone} onChange={handleChange} required />
      <button type="submit">🧾 Confirmar compra</button>
    </form>
  );
}
