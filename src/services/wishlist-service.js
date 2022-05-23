import axios from 'axios'

export const getWishlistService = async (token) => {
    try {
        const wishlistData = await axios.get('/api/user/wishlist', {
            headers: {
                authorization: token
            }
        });

        return wishlistData.data.wishlist;
    } catch (error) {
        console.error('Error in getWishList', error);
        setToastHandler({ type: 'danger', message: 'Something went wrong' })
    }
}

export const addToWishlistService = async (product, token) => {
    try {
        const wishlistData = await axios.post('/api/user/wishlist', { product }, {
            headers: {
                authorization: token
            },
        });
        return wishlistData.data.wishlist;
    } catch (error) {
        console.error('Error in getWishList', error);
        throw error;
    }
}

export const removeFromWishlistSerivce = async (productId, token) => {
    try {
        const wishlistData = await axios.delete(`/api/user/wishlist/${productId}`, {
            headers: {
                authorization: token
            },
        });
        return wishlistData.data.wishlist;
    } catch (error) {
        console.error('Error in removeFromWishList', error);
        throw error;
    }
}