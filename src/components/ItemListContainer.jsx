import React from 'react';  // Asegúrate de agregar esta línea
// El resto de tu código

function ItemListContainer({ greeting }) {
  return (
    <section style={styles.container}>
      <h2>{greeting}</h2>
    </section>
  );
}

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
};

export default ItemListContainer;
  