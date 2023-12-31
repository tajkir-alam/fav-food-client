import React, { createContext, useState } from 'react';

export const CartLengthContext = createContext(null);

const CartLengthProvider = ({children}) => {
    const [cartLength, setCartLength] = useState(0);

    const value = {
        cartLength,
        setCartLength
    }

    return (
        <CartLengthContext.Provider value={value}>
            {children}
        </CartLengthContext.Provider>
    );
};

export default CartLengthProvider;