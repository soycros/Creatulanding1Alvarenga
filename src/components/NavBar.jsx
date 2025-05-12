import React from 'react';  // Asegúrate de agregar esta línea
// El resto de tu código

import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Crissacio Shop</h1>
      <ul style={styles.links}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#1e1e1e',
    color: '#fff',
  },
  logo: { margin: 0 },
  links: { listStyle: 'none', display: 'flex', gap: '1rem' }
};

export default NavBar;
