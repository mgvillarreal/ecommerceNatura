import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { sendOrder } from '../../firebase/firebase';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [userInfo, setUserInfo] = useState({
      name: "",
      email: "",
      phone: "",
    });
    const [checkoutId, setCheckoutId] = useState(0);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      const order = {
        user: userInfo,
        items: cart,
        /*total*/
        date: new Date(),
      };

      e.preventDefault();

      sendOrder(order).
      then((orderId) => {
        setCheckoutId(orderId);
        clearCart();
      })
      
    };

  return (
    <section className="bg-gray-50 py-8">
      {checkoutId === 0 ? (
        <div className="container mx-auto max-w-md bg-white shadow-md rounded-md p-6">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input type="text" id="name" name="name" placeholder="Nombre" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-rosa focus:border-rosa text-gray-700" value={userInfo.name} onChange={handleInputChange} required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input type="tel" id="phone" name="phone" placeholder="Teléfono" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-rosa focus:border-rosa text-gray-700" value={userInfo.phone} onChange={handleInputChange} required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <input type="email" id="email" name="email" placeholder="Correo electrónico" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-rosa focus:border-rosa text-gray-700" value={userInfo.email} onChange={handleInputChange} required />
              </div>
              <button type="submit" className="w-full bg-rosa text-white font-bold py-2 px-4 rounded-md hover:bg-rosa-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rosa" >
                Comprar
              </button>
            </form>
        </div>
      ) : (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6 text-center">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">Gracias por tu compra!</h1>
          <p className="text-lg text-gray-600 mb-6">Tu orden de compra fue generada exitosamente.</p>
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-sm text-gray-500">ID de la compra:</p>
            <p id="purchase-id" className="text-xl font-bold text-gray-800">{checkoutId}</p>
          </div>
          <Link to="/">
            <button className="w-full bg-rosa text-white font-bold py-2 px-4 mt-6 rounded-md" >
              Volver a la tienda
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Checkout;