import React from 'react';  // Asegúrate de agregar esta línea
// El resto de tu código

function CartWidget() {
  return (
    <div style={styles.cart}>
      🛒<span style={styles.count}>3</span>
    </div>
  );
}

const styles = {
  cart: {
    fontSize: '1.5rem',
    position: 'relative',
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
