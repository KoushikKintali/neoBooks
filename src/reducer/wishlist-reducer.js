export function WishlistReducer(state, action) {
    switch (action.type) {
        case 'FETCH_WISHLIST':
        case 'ADD_TO_WISHLIST':
        case 'REMOVE_FROM_WISHLIST':
            return { ...state, itemsInWishlist: action.payload };
        default:
            return state;
    }
}