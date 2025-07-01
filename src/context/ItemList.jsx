import React from 'react';
import Item from './Item';

export default function ItemList({ productos }) {
  return (
    <div className="item-list">
      {productos.map(p => (
        <Item key={p.id} id={p.id} name={p.name} price={p.price} />
      ))}
    </div>
  );
}
