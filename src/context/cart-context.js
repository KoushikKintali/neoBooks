import { createContext, useContext, useReducer } from 'react';
import { CartReducer } from '../reducer/cart-reducer';

const initialState = { itemsInCart: [], itemsInWishlist: [] };

const CartContext = createContext(initialState);

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [store, dispatch] = useReducer(CartReducer, initialState);

    return (
        <CartContext.Provider value={{ store, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider, useCart };