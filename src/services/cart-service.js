import axios from 'axios'

export const getCartItemsService = async (token) => {
    try {
        const wishlistData = await axios.get('/api/user/cart', {
            headers: {
                authorization: token
            }
        });

        return wishlistData.data.cart;
    } catch (error) {
        console.error('Error in getCartItemsService', error);
        setToastHandler({ type: 'danger', message: 'Something went wrong' })
    }
}

export const addItemToCartService = async (product, token) => {
    try {
        const wishlistData = await axios.post('/api/user/cart', { product }, {
            headers: {
                authorization: token
            },
        });
        return wishlistData.data.cart;
    } catch (error) {
        console.error('Error in addItemToCartService', error);
        throw error;
    }
}

export const removeItemFromCartSerivce = async (productId, token) => {
    try {
        const wishlistData = await axios.delete(`/api/user/cart/${productId}`, {
            headers: {
                authorization: token
            },
        });
        return wishlistData.data.cart;
    } catch (error) {
        console.error('Error in removeItemFromCartSerivce', error);
        throw error;
    }
}

export const increaseDecreaseItemQuantityService = async (productId, type, token) => {
    try {
        const wishlistData = await axios.post(`/api/user/cart/${productId}`,
            {
                action: {
                    type
                }
            },
            {
                headers: {
                    authorization: token
                },
            });
        return wishlistData.data.cart;
    } catch (error) {
        console.error('Error in removeItemFromCartSerivce', error);
        throw error;
    }
}