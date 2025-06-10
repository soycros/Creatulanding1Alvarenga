import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import necesario
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Crissacio Shop</h1>
      <ul style={styles.links}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/electronica">Electrónica</Link></li>
        <li><Link to="/category/ropa">Ropa</Link></li>
        <li><Link to="/category/hogar">Hogar</Link></li>
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
