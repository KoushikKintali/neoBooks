export function CartReducer(state, action) {
    switch (action.type) {
        case 'FETCH_CART_ITEMS':
        case 'ADD_TO_CART':
        case 'REMOVE_FROM_CART':
        case 'INCREASE_ITEM_QUANTITY':
        case 'DECREASE_ITEM_QUANTITY':
            return { ...state, itemsInCart: action.payload };
        default:
            return state;
    }
}