import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
            <div className="border rounded-md p-4 flex items-start gap-4 max-w-4xl mx-auto">

                {/*if (loading) return <p>Cargando productos...</p>;*/}
          
                <img src={`/${product.image}`} alt={product.name} width="280px" className="object-cover rounded-md"/>

                <div className="w-2/3 flex flex-col items-start gap-2 pl-8">
                    <h1 className="font-bold text-3xl">{product.name}</h1>
                    <p className="text-gray-600 text-xl">${product.price}</p>
                    <p className="text-gray-700 text-base">{product.description}</p>
                    <p className="text-gray-600 text-sm">Categoría: {product.category}</p>
                    
                    {/* Add to cart */}
                    <div className="flex gap-4 mt-4 pt-8">
                        <button onClick={handleAddToCart} className="px-4 py-2 bg-bordo text-white font-bold rounded-md hover:bg-bordo-dark">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail