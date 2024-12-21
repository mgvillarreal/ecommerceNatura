import { createContext, useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from '../data/fakedatabase';
/*import { getProducts } from '../firebase/firebase';*/

export const ProductsContext = createContext(false);

export function ProductsProvider({children}){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState("");

    useEffect(() => {
        setLoading(true);
        
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
        setCategory(category);
    }

    return(
        <ProductsContext.Provider value={{products, loading, changeCategory, category}}>
            {children}
        </ProductsContext.Provider>
    );
}