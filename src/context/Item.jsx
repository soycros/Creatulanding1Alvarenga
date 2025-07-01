import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ id, name, price }) {
  return (
    <div className="item-card">
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <Link to={`/item/${id}`}>Ver más</Link>
    </div>
  );
}
