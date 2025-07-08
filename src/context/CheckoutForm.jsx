import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '../firebase';

export default function CheckoutForm() {
  const { cart, totalCart, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD

  const [form, setForm] = useState({ name: '', email: '', phone: '' });
=======
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });
>>>>>>> a46b95a (Mejoras finales)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();
=======
  const validateForm = () => {
    if (!form.name || !form.email || !form.phone) {
      setErrorMsg('Por favor completá todos los campos.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setErrorMsg('Ingresá un correo válido.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!validateForm()) return;

>>>>>>> a46b95a (Mejoras finales)
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
<<<<<<< HEAD
=======
      setErrorMsg('Hubo un problema al generar la orden. Intentá de nuevo.');
>>>>>>> a46b95a (Mejoras finales)
    } finally {
      setLoading(false);
    }
  };

<<<<<<< HEAD
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
=======
  if (loading) return <p>🕐 Generando tu orden...</p>;

  if (orderId) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>✅ ¡Compra realizada!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2>Checkout</h2>

      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        🧾 Confirmar compra
      </button>
>>>>>>> a46b95a (Mejoras finales)
    </form>
  );
}
