import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { getProductById } from '../../firebase/firebase';
import ItemCount from './ItemCount';

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

    if (loading) return <p>Cargando productos...</p>;

    return (
        <>
            <div className="border rounded-md p-4 flex items-start gap-4 max-w-4xl mx-auto">
          
                <img src={`/${product.image}`} alt={product.name} width="280px" className="object-cover rounded-md"/>

                <div className="w-2/3 flex flex-col items-start gap-2 pl-8">
                    <h1 className="font-bold text-3xl">{product.name}</h1>
                    <p className="text-gray-600 text-xl">${product.price}</p>
                    <p className="text-gray-700 text-base">{product.description}</p>
                    <p className="text-gray-600 text-sm">Categoría: {product.category}</p>
                    
                    {/* Display ItemCount or success message */}
                    <div className="flex gap-4 mt-4 pt-8">
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