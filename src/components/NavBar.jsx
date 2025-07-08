<<<<<<< HEAD
import React, { useContext } from 'react';
=======
import React from 'react';
>>>>>>> a46b95a (Mejoras finales)
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logoLink}>
        <h1 style={styles.logo}>Crissacio Shop</h1>
      </Link>
      <ul style={styles.links}>
<<<<<<< HEAD
        <li><Link to="/category/electronica">Electrónica</Link></li>
        <li><Link to="/category/ropa">Ropa</Link></li>
        <li><Link to="/category/hogar">Hogar</Link></li>
      </ul>
      <CartWidget />
=======
        <li><Link to="/category/electronica" style={styles.link}>Electrónica</Link></li>
        <li><Link to="/category/ropa" style={styles.link}>Ropa</Link></li>
        <li><Link to="/category/hogar" style={styles.link}>Hogar</Link></li>
      </ul>
      <Link to="/cart" style={styles.cartLink}>
        <CartWidget />
      </Link>
>>>>>>> a46b95a (Mejoras finales)
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1e1e1e',
    color: '#fff',
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
  },
  logoLink: {
    textDecoration: 'none',
    color: '#fff',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
<<<<<<< HEAD
=======
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  cartLink: {
    cursor: 'pointer',
>>>>>>> a46b95a (Mejoras finales)
  }
};

export default NavBar;
