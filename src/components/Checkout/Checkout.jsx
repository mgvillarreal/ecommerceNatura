import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutPage from "./CheckoutPage";
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, total } = useContext(CartContext);

  const handleCheckoutSubmit = async (formData) => {
    const order = {
      user: formData,
      items: cart,
      total,
      date: new Date(),
    };

    console.log("orden: ", order);

    /*try {
      const docRef = await addDoc(collection(db, "orders"), order);
      alert(`Order placed successfully! Order ID: ${docRef.id}`);
    } catch (error) {
      console.error("Error placing order: ", error);
      alert("Error placing your order. Please try again.");
    }*/
  };

  return (
    <div>
      {/*<h1 className="text-center text-3xl font-bold mb-8">Your Order</h1>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-white shadow p-4 rounded-md"
          >
            <span>{item.name}</span>
            <span>{item.quantity} x ${item.price}</span>
          </li>
        ))}
      </ul>
      <div className="text-right font-bold text-xl mt-4">Total: ${total}</div>*/}
      <CheckoutPage onSubmit={handleCheckoutSubmit} />
    </div>
  );
};

export default Checkout;