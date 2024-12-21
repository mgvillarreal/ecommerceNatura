import React, { useContext } from 'react';
import Item from './Item';
import { ProductsContext } from '../../context/ProductsContext';
import Button from '../Button/Button';

const ItemList = () => {
  const {products, loading, changeCategory, category} = useContext(ProductsContext);

  if (loading) return <p>Cargando productos...</p>;

  const changeCategoryContext = () => {
    changeCategory(category);
  };

  return (
    <>
      <div className="flex justify-center space-x-4 mb-6">
        <Button fn={() => changeCategory("Remeras/Tops")} text="Remeras/Tops" hovercolor="rosa"> </Button>
        <Button fn={() => changeCategory("Pantalones")} text="Pantalones" color="rosa"> </Button>
        <Button fn={() => changeCategory("Vestidos")} text="Vestidos" color="rosa"> </Button>
        <Button fn={() => changeCategory("")} text="Todos" color="rosa"> </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, id) => {
          return (
            <Item product={product} key={id}/>
          )}
        )}
      </div>
    </>
  );
}

export default ItemList;