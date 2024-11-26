import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <div>
      {products.map((product, index) => {
        return (
          <Item product={product} key={index}/>
        )}
      )}
    </div>
  )
}

export default ItemList