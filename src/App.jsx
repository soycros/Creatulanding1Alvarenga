import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
=======
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import CartProvider from './context/CartContext'; // Asegurate que este path esté bien
>>>>>>> a46b95a (Mejoras finales)

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Crissacio Shop!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
=======
      <CartProvider>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="¡Bienvenido a Crissacio Shop!" />}
            />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
        </Layout>
      </CartProvider>
>>>>>>> a46b95a (Mejoras finales)
    </BrowserRouter>
  );
}

export default App;
