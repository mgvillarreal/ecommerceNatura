import { createContext, useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from '../firebase/firebase';

export const ProductsContext = createContext(false);

export function ProductsProvider({children}){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);

            if(category){
                const productsList = await getProductsByCategory(category);
                if (productsList){
                    setProducts(productsList);
                    setLoading(false);
                }
                setLoading(false);
            } else {
                const productsList = await getProducts();
                if (productsList) {
                setProducts(productsList);
                }
                setLoading(false);
            }

            /*const productsList = await getThreeProducts();
            if (productsList){
                setProducts(productsList);
                setLoading(false);
            }*/
        };
    
        fetchProducts();
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