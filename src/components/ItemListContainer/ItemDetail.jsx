import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { getProductById } from '../../firebase/firebase';
import ItemCount from './ItemCount';
import ReactLoading from 'react-loading';

const ItemDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const {addToCart} = useContext(CartContext);
    const [addedToCart, setAddedToCart] = useState(false);

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
    }, [id]);

    const handleAddToCart = (quantity) =>{
        const updatedProduct = { ...product, id: id, quantity: quantity };
        addToCart(updatedProduct, quantity);
        setAddedToCart(true);
    }

    if (loading) {
        return (
          <div className="flex justify-center items-center h-auto">
            <ReactLoading type="spin" color="#ce9eb3" height={50} width={50} />
            <p className="ml-3 font-medium">Cargando productos...</p>
          </div>
        );
    }

    return (
        <>
            <div className="border rounded-md p-4 flex flex-col md:flex-row items-start gap-6 max-w-4xl mx-auto">
          
                <img src={product.image} alt={product.name} className="w-full md:w-56 object-cover rounded-md max-w-full h-auto"/>

                <div className="w-full md:w-2/3 flex flex-col items-start gap-4 pl-0 md:pl-8 text-center md:text-left">
                    <h1 className="font-bold text-2xl md:text-3xl">{product.name}</h1>
                    <p className="text-gray-600 text-lg md:text-xl">${product.price}</p>
                    <p className="text-gray-700 text-sm md:text-base">{product.description}</p>
                    <p className="text-gray-600 text-xs md:text-sm">Categoría: {product.category}</p>
                    
                    {/* Display ItemCount or success message */}
                    <div className="flex justify-center md:justify-start gap-4 mt-4 pt-4">
                        {!addedToCart ? (
                            <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
                        ) : (
                            <div className="py-2 text-rosaMedio text-lg font-bold rounded-md">
                                Producto agregado al carrito
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;