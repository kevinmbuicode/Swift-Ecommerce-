import React, { createContext, useContext, useState } from 'react';


const Cart = createContext();

const CartContext = ({children}) => {
    //const [ cart, setCart ] = useState(0);
    const [ count, setCount ] = useState(0)
    
    const handleAddition = () => {
        setCount(prevCount => prevCount + 1)
    }

    const handleSubtraction = () => {
        setCount(prevCount => prevCount - 1)
    }

  return (
    <Cart.Provider value={{ handleAddition, handleSubtraction, count, setCount }}>{children}</Cart.Provider>
  )
}

export default CartContext;

export const CartState = () => {
    return useContext(Cart)
}