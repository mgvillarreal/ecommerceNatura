import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import ItemList from './ItemList';
import { getProducts, getProductsByCategory } from '../../data/fakedatabase';

const ItemListContainer = (fn) => {
    const[products, setProducts] = useState([]);
    const[category, setCategory] = useState("");
    const[loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true)

        if(category){
            getProductsByCategory(category)
            .then(res => setProducts(res))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
        }else{
            getProducts()
            .then(res => setProducts(res))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
        }

    }, [category]);
    
    const changeCategory = (category) => {
        setCategory(category)
    }

    return (
        <>
            {/*<div>
                <Button fn={fn} text="Agregar al carrito"/>
            </div>*/}

            <div>
                <div className="flex justify-center space-x-4 mb-6">
                    <Button fn={() => changeCategory("Remeras/Tops")} text="Remeras/Tops"> </Button>
                    <Button fn={() => changeCategory("Pantalones")} text="Pantalones"> </Button>
                    <Button fn={() => changeCategory("Vestidos")} text="Vestidos"> </Button>
                    <Button fn={() => changeCategory("")} text="Todos"> </Button>
                </div>

                {
                    loading ? <h2>Cargando...</h2> : <ItemList products={products}/>
                }

            </div>
        </>
    )
}

export default ItemListContainer