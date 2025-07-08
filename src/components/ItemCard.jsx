import React from 'react';
import { Link } from 'react-router-dom';

function ItemCard({ item }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <Link to={`/item/${item.id}`}>Ver más</Link>
    </div>
  );
}

export default ItemCard;
