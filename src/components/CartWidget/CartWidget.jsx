import React, { useContext } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../context/CartContext';

const CartWidget = ({valor}) => {
  const {cart, setCart} = useContext(CartContext);

  return (
    <div className="relative inline-block">
      <button className="hover:text-gray-400">
        <FaShoppingCart size={30} />
      </button>
      {cart.length > 0 && (
      <span className="absolute top-0 right-0 bg-bordo text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center translate-x-1/2 -translate-y-1/2">
        {cart.length}
      </span>
    )}
    </div>
  )
}

export default CartWidget