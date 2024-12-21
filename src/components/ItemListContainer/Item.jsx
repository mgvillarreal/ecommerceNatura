import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  return (
    <div key={product.id} className="border rounded-md p-4 text-center">
        <img src={product.image} alt={product.name} className="w-full h-65 object-cover rounded mb-2" />
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-600">Precio: ${product.price}</p>
        <p className="text-gray-500 text-sm">Categoría: {product.category}</p>

        <div className="font-bold text-bordo">
          <Link to={`/item/${product.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item