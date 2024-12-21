import React, { useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';

const CartWidget = ({valor}) => {
  const {cart, setCart} = useContext(CartContext);

  console.log(cart);

  return (
    <div>
      <button className="hover:text-gray-400">
        <FaShoppingCart size={30} />
      </button>
      <p>{cart.length}</p>
      <span>{valor}</span>
    </div>
  )
}

export default CartWidget