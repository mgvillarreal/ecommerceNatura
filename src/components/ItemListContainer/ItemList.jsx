import React, { useContext } from 'react';
import Item from './Item';
import { ProductsContext } from '../../context/ProductsContext';
import Button from '../Button/Button';
import ReactLoading from 'react-loading';

import { Link } from 'react-router-dom';

const ItemList = () => {
  const {products, loading, changeCategory, category} = useContext(ProductsContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-auto">
        <ReactLoading type="spin" color="#ce9eb3" height={50} width={50} />
        <p className="ml-3 font-medium">Cargando productos...</p>
      </div>
    );
  }

  const changeCategoryContext = () => {
    changeCategory(category);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap gap-2 mb-6">
        <Link to={'/category/remerastops'}>
          <Button fn={() => changeCategory("Remeras/Tops")} text="Remeras/Tops" color="rosa"> </Button>
        </Link>
        <Link to={'/category/pantalones'}>
          <Button fn={() => changeCategory("Pantalones")} text="Pantalones" color="rosa"> </Button>
        </Link>
        <Link to={'/category/vestidos'}>
          <Button fn={() => changeCategory("Vestidos")} text="Vestidos" color="rosa"> </Button>
        </Link>
        <Link to={'/shop'}>
          <Button fn={() => changeCategory("")} text="Todos" color="rosa"> </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-8">
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