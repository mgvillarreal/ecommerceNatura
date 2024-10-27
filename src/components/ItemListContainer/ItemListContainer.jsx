import React, { useState } from 'react'
import Button from '../Button/Button'

const ItemListContainer = ({mensaje, fn}) => {
    const[products, setProducts] = useState([]);

    

    return (
        <>
        <div>{mensaje}</div>
        <Button fn={fn} text="Agregar al carrito"/>
        </>
    )
}

export default ItemListContainer