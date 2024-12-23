import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FaTrashAlt } from "react-icons/fa";
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="max-w-4xl mx-auto p-4 min-auto h-screen">
            <h1 className="text-2xl font-bold mb-4 text-rosaMedio">Carrito de Compras</h1>
            {cart.length === 0 ? (
                <p className="text-gray-600">Tu carrito está vacío.</p>
            ) : (
                <>
                    <div className="border rounded-md p-4">
                        {cart.map((item) => (
                            <div key={item.id} className="flex justify-between items-center border-b py-4">
                                <div className="flex items-center gap-4">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md"/>
                                    <div>
                                        <h2 className="font-bold">{item.name}</h2>
                                        <p className="text-sm text-gray-600">Categoría: {item.category}</p>
                                        <p className="text-sm">Precio unitario: ${item.price}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="font-bold text-bordo">Cantidad: <span className="font-bold text-black">{item.quantity}</span></p>
                                    <p className="font-bold text-bordo">Subtotal: <span className="font-bold text-black">${item.price * item.quantity}</span></p>
                                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 mt-2">
                                        <FaTrashAlt size={30} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-xl font-bold my-4 pb-4">Total: ${total}</h2>
                    <div className="mt-4 flex justify-between items-center">
                        <Button fn={clearCart} text="Vaciar carrito" color="lila"> </Button>
                        <Link to="/checkout">
                            <Button text="Finalizar compra" color="rosa"> </Button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;