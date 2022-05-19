import { useCart } from '../../context/cart-context';
import './Product.css';

export function Product(props) {
    const { _id, url, title, author, price, discount, categoryName } = props.product;

    const { store, dispatch } = useCart();

    const getDiscountedPrice = (price, discount) => {
        return Number(price - ((price * discount) / 100));
    }

    const isItemInCart = (id) => {
        const { itemsInCart } = store;
        return itemsInCart.includes(id);
    }

    const isItemInWishlist = (id) => {
        const { itemsInWishlist } = store;
        return itemsInWishlist.includes(id);
    }

    return (
        <div className="card section-tile">
            <div className="card-img">
                <img src={url} alt='book' />
            </div>
            <div className="card-body">
                <div className="card-header">
                    <div className="header">{title}</div>
                    <div className="category">{author}</div>
                </div>
                <div className="card-price">
                    <div className="discounted-price">₹{getDiscountedPrice(price, discount)}</div>
                    <div className="original-price">₹{price}</div>
                    <div className="saved-price">{discount}% off</div>
                </div>
                <div className="card-btn-group">
                    {isItemInCart(_id) && <button className="btn btn-outline">Go To Cart</button>}
                    {!isItemInCart(_id) && <button className="btn btn-fill" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: _id })}>Add To Cart</button>}
                </div>
            </div>
            {
                isItemInWishlist(_id) &&
                <div className="card-wishlist is-active" onClick={() => dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: _id })}>
                    <span className="material-icons-outlined">
                        favorite
                    </span>
                </div >
            }
            {
                !isItemInWishlist(_id) &&
                <div className="card-wishlist" onClick={() => dispatch({ type: 'ADD_TO_WISHLIST', payload: _id })}>
                    <span className="material-icons-outlined">
                        favorite_border
                    </span>
                </div >
            }
        </div >
    );
}