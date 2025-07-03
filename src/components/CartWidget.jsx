import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { totalItems } = useContext(CartContext);

  return (
    <Link to="/cart" style={{ textDecoration: 'none' }}>
      <div style={styles.cart}>
        🛒
        {totalItems() > 0 && (
          <span style={styles.count}>{totalItems()}</span>
        )}
      </div>
    </Link>
  );
}

const styles = {
  cart: {
    fontSize: '1.5rem',
    position: 'relative',
    cursor: 'pointer',
    color: 'black',
  },
  count: {
    position: 'absolute',
    top: '-8px',
    right: '-10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '0.75rem',
  },
};

export default CartWidget;
