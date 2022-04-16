export function CartReducer(state, action) {
    console.log('called')
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, itemsInCart: state.itemsInCart.concat(action.payload) };
        case 'ADD_TO_WISHLIST':
            return { ...state, itemsInWishlist: state.itemsInWishlist.concat(action.payload) };
        case 'REMOVE_FROM_WISHLIST':
            return { ...state, itemsInWishlist: state.itemsInWishlist.filter((id) => id !== action.payload) };
        default:
            return state;
    }
}