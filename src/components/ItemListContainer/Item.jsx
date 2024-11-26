import React from 'react'

const Item = ({product}) => {
  return (
    <div>
        <h3>{product.nombre}</h3>
        <p>Categoría: {product.categoria}</p>
        <p>Precio: ${product.precio}</p>
    </div>
  )
}

export default Item