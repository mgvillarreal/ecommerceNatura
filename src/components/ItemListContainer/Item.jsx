import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Item = ({product}) => {
  return (
    <div key={product.id} className="border rounded-md p-4 text-center">
        {/*<img src={producto.imagen} alt={producto.nombre} className="w-full h-40 object-cover rounded mb-2" />*/}
        <h3 className="font-bold text-lg">{product.nombre}</h3>
        <p className="text-gray-600">Precio: ${product.precio}</p>
        <p className="text-gray-500 text-sm">Categoría: {product.categoria}</p>

        <div className="font-bold text-bordo">
          <Link to={`/item/${product.id}`}>Ver más</Link>
        </div>
        {/*<Button fn={() => showDetails()} text="Ver Detalle"> </Button>*/}
    </div>
  )
}

export default Item