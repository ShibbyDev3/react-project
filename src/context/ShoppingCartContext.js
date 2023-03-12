import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(id){
        setCartItems( currentItems => {
            return [...currentItems, id];
        })
    }

    function removeFromCart(event){
       const id = parseInt(event.target.closest(`.removeButton `).getAttribute(`data-movieid`));
       setCartItems( currentItems => {
        return currentItems.filter( item => { return item !== id });
       })
    }

    return(
        <ShoppingCartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 