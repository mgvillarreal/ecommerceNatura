import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
/*import { getProductById } from '../../data/fakedatabase';*/
import { CartContext } from '../../context/CartContext';
import { getProductById } from '../../firebase/firebase';

const ItemDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const {cart, setCart, addToCart} = useContext(CartContext);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const product = await getProductById(id);
            if (product) {
                setProduct(product);
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    const handleAddToCart = () =>{
        addToCart(product);
    }

    return (
        <>
            <div className="border rounded-md p-4 flex items-center gap-4">

                {/*if (loading) return <p>Cargando productos...</p>;*/}
          
                <img src={`/${product.image}`} alt={product.name} height="300px" className="w-2/3 h-49 object-cover rounded-md"/>

                <div className="w-2/3 flex flex-col gap-2">
                    <h1 className="font-bold text-2xl">{product.name}</h1>
                    <p className="text-gray-600">${product.price}</p>
                    <p className="text-gray-600">Categoría: {product.category}</p>
                    <p className="text-gray-700">{product.description}</p>

                    <div className="flex items-center gap-4 mt-4">
                        {/* Input de cantidad */}
                        <div className="flex items-center border rounded-md">
                            <button
                           
                            className="px-3 py-1 text-gray-500 hover:text-gray-700"
                            >
                            -
                            </button>
                            <input
                            type="number"
                           
                            className="w-12 text-center border-l border-r outline-none"
                            />
                            <button
                           
                            >
                            +
                            </button>
                        </div>

                        {/* Botón agregar al carrito */}
                        <button
                            
                            className="px-4 py-2 bg-bordo text-white font-bold rounded-md hover:bg-bordo-dark"
                        >
                            Agregar al carrito
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ItemDetail