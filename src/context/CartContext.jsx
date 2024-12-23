import { createContext, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        setCart((prevCart) => {
            // Seek for the product in the cart
            const existingItem = prevCart.find((product) => product.id === item.id);

            if (existingItem) {
                // If exists, add one item
                return prevCart.map((product) =>
                    product.id === item.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
            } else {
                // If does not existe, add one
                return [...prevCart, { ...item}];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );
}