import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/fakedatabase';

const ItemDetail = () => {
  const {id} = useParams();
  const[product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(getProductById(id));
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-8 p-6">
            {/* Imagen del Producto 
            <div className="w-full md:w-1/2">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-cover rounded shadow-md"
                />
            </div>*/}

            {/* Información del Producto */}
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-bold mb-4">{product.nombre}</h1>
                <p className="text-2xl text-gray-800 font-semibold mb-6">${product.precio}</p>
                
                {/* Talles 
                <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2">Talles disponibles:</h3>
                    <div className="flex space-x-4">
                        {product.sizes.map((size, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 border rounded text-gray-700 hover:bg-gray-100 cursor-pointer"
                            >
                                {size}
                            </span>
                        ))}
                    </div>
                </div>*/}

                {/* Botón Agregar al Carrito 
                <div className="flex items-center space-x-4 mb-4">
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-16 px-2 py-1 border rounded text-center"
                    />
                    <button
                        onClick={handleAddToCart}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Agregar al carrito
                    </button>
                </div>*/}

                {/* Categoría */}
                <p className="text-sm text-gray-500 mt-4">Categoría: {product.categoria}</p>
            </div>
      </div>
    </>
  )
}

export default ItemDetail