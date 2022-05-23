import { createContext, useContext, useReducer } from 'react';
import { CartReducer } from '../reducer/cart-reducer';
import { addItemToCartService, getCartItemsService, increaseDecreaseItemQuantityService, removeItemFromCartSerivce } from '../services/cart-service';
import { useToastHandler } from './index';

const initialState = { itemsInCart: [] };

const CartContext = createContext(initialState);

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [store, dispatch] = useReducer(CartReducer, initialState);
    const { setToastHandler } = useToastHandler();

    const fetchCartItems = async (token) => {
        try {
            const wishlistData = await getCartItemsService(token);
            dispatch({ type: 'FETCH_CART_ITEMS', payload: wishlistData });
        } catch (error) {
            console.log('ERROR in fetchCartItems', error)
            setToastHandler({ type: 'danger', message: 'Something went wrong' });
        }
    }

    const addToCart = async (product, token) => {
        try {
            const wishlistData = await addItemToCartService(product, token);
            dispatch({ type: 'ADD_TO_CART', payload: wishlistData });
            setToastHandler({ type: 'success', message: 'Added to cart' });
        } catch (error) {
            console.log('ERROR in addToCart', error)
            setToastHandler({ type: 'danger', message: 'Something went wrong' });
        }
    }

    const removeFromCart = async (productId, token) => {
        try {
            const wishlistData = await removeItemFromCartSerivce(productId, token);
            dispatch({ type: 'REMOVE_FROM_CART', payload: wishlistData });
            setToastHandler({ type: 'success', message: 'Removed from cart' });
        } catch (error) {
            console.log('ERROR in removeFromCart', error)
            setToastHandler({ type: 'danger', message: 'Something went wrong' });
        }
    }

    const increaseDecreaseItemQuantity = async (productId, type, token) => {
        try {
            const wishlistData = await increaseDecreaseItemQuantityService(productId, type, token);
            if (type === 'increment') {
                dispatch({ type: 'INCREASE_ITEM_QUANTITY', payload: wishlistData });
            }
            if (type === 'decrement') {
                dispatch({ type: 'DECREASE_ITEM_QUANTITY', payload: wishlistData });
            }
        } catch (error) {
            console.log('ERROR in increaseDecreaseItemQuantity', error)
            setToastHandler({ type: 'danger', message: 'Something went wrong' });
        }
    }

    return (
        <CartContext.Provider value={{ fetchCartItems, addToCart, removeFromCart, increaseDecreaseItemQuantity, cartStore: store }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider, useCart };