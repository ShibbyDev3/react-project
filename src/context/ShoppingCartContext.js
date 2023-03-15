import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(id){
        setCartItems( currentItems => {
            return [...currentItems, {id: id, time: -1, timeValue: `` ,qty: 1}];
        })
    }

    function modifyTime(id, time, timeValue){
        const cartItemsIndex = cartItems.findIndex( item => item.id === parseInt(id));
        const updatedItem = {...cartItems[cartItemsIndex], time: time, timeValue: timeValue};
        const newCartItems = [...cartItems];
        newCartItems[cartItemsIndex] = updatedItem;
        setCartItems(newCartItems);   
    }

    function modifyQty(id, qty){
        const cartItemsIndex = cartItems.findIndex( item => item.id === parseInt(id));
        const updatedItem = {...cartItems[cartItemsIndex], qty: parseInt(qty)};
        const newCartItems = [...cartItems];
        newCartItems[cartItemsIndex] = updatedItem;
        setCartItems(newCartItems);  
    }

    function removeFromCart(event){
       const id = parseInt(event.target.closest(`.removeButton `).getAttribute(`data-movieid`));
       setCartItems( currentItems => {
        return currentItems.filter( item => { return item.id !== id });
       })
    }

    return(
        <ShoppingCartContext.Provider value={{cartItems, addToCart, removeFromCart, modifyTime, modifyQty}}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 