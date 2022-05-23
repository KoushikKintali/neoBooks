import { createContext, useContext, useReducer } from 'react';
import { WishlistReducer } from '../reducer/wishlist-reducer';
import { getWishlistService, addToWishlistService, removeFromWishlistSerivce } from '../services/wishlist-service';
import { useToastHandler } from './toast-context';

const initialState = { itemsInWishlist: [] };

const WishlistContext = createContext(initialState);

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
    const { setToastHandler } = useToastHandler();
    const [store, dispatch] = useReducer(WishlistReducer, initialState);

    const fetchWishList = async (token) => {
        try {
            const wishlistData = await getWishlistService(token);
            dispatch({ type: 'FETCH_WISHLIST_DATA', payload: wishlistData });
        } catch (error) {
            console.log('ERROR in fetchWishList', error)
            setToastHandler({ type: 'danger', message: 'Something went wrong' });
        }
    }

    const addToWishList = async (product, token) => {
        try {
            const wishlistData = await addToWishlistService(product, token);
            dispatch({ type: 'ADD_TO_WISHLIST', payload: wishlistData });
            setToastHandler({ type: 'success', message: 'Added to wishlist' });
        } catch (error) {
            console.log('ERROR in addToWishList', error)
            setToastHandler({ type: 'danger', message: 'Something went wrong' });
        }
    }

    const removeFromWishList = async (productId, token) => {
        try {
            const wishlistData = await removeFromWishlistSerivce(productId, token);
            dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: wishlistData });
            setToastHandler({ type: 'success', message: 'Removed from wishlist' });
        } catch (error) {
            console.log('ERROR in removeFromWishList', error)
            setToastHandler({ type: 'danger', message: 'Something went wrong' });
        }
    }

    return (
        <WishlistContext.Provider value={{ fetchWishList, addToWishList, removeFromWishList, wishlistStore: store }}>
            {children}
        </WishlistContext.Provider>
    );
}

export { WishlistProvider, useWishlist };