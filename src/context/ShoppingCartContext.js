import { useContext, createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(id){
        setCartItems( currentItems => {
            return [...currentItems, id];
        })
    }

    return(
        <ShoppingCartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 