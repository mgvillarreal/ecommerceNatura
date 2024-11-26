import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const CartWidget = ({valor}) => {
  return (
    <div>
      <AiOutlineShoppingCart />
      <span>{valor}</span>
    </div>
  )
}

export default CartWidget