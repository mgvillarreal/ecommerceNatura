import React from 'react';
import Item from './Item';

const ItemList = ({products}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, id) => {
        return (
          <Item product={product} key={id}/>
        )}
      )}
    </div>
  );
}

export default ItemList