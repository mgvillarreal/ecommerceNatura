import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import ItemList from './ItemList';
import { getProducts, getProductsByCategory } from '../../data/fakedatabase';

const ItemListContainer = ({mensaje, fn}) => {
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
            <div>
                <div>{mensaje}</div>
                <Button fn={fn} text="Agregar al carrito"/>
            </div>

            <div>
                <div>
                    <Button fn={() => changeCategory("Remeras/Tops")} text="Remeras/Tops"> </Button>
                    <Button fn={() => changeCategory("Polleras")} text="Polleras"> </Button>
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