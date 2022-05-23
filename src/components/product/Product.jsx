import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth, useCart, useWishlist } from '../../context';
import './Product.css';

export function Product(props) {
    const { _id, url, title, author, price, discountPercentage, discountedPrice, qty, categoryName } = props.product;

    const { cartStore, addToCart, removeFromCart, increaseDecreaseItemQuantity } = useCart();

    const { token } = useAuth();

    const { addToWishList, removeFromWishList, wishlistStore } = useWishlist();

    const location = useLocation();

    const navigate = useNavigate();

    const isItemInCart = (id) => {
        const { itemsInCart } = cartStore;
        return !!(itemsInCart.find(item => id === item._id));
    }

    const isItemInWishlist = (id) => {
        const { itemsInWishlist } = wishlistStore;
        return !!(itemsInWishlist.find(item => id === item._id));
    }

    const handleAddToWishList = (product, token) => {
        addToWishList(product, token);
    }

    const isCartPage = () => {
        return location.pathname === '/cart'
    }

    const isWishlistPage = () => {
        return location.pathname === '/wishlist'
    }

    const increaseItemQuantity = (productId, token) => {
        increaseDecreaseItemQuantity(productId, 'increment', token);
    }
    const decreaseItemQuantity = (productId, token) => {
        increaseDecreaseItemQuantity(productId, 'decrement', token);
    }

    const handleMoveToWishlist = (product, token) => {
        if (!wishlistStore.itemsInWishlist.find(item => item._id === product._id)) {
            addToWishList(product, token);
        }
        removeFromCart(product._id, token);
    }

    return (
        <div className={isCartPage() ? "card card-horizontal section-tile" : "card section-tile"}>
            <div className="card-img">
                <img src={url} alt='book' />
            </div>
            <div className="card-body">
                <div className="card-header">
                    <div className="header">{title}</div>
                    <div className="category">{author}</div>
                </div>
                {
                    isCartPage() ?
                        <div className="card-quantity">
                            <p>Quantity</p>
                            <button className="plus" onClick={() => increaseItemQuantity(_id, token)} >+</button>
                            <input className="quantity-input" readOnly value={qty} />
                            <button className="minus" disabled={(qty === 1)} title={qty === 1 ? "Min quantity is 1" : ""} onClick={() => decreaseItemQuantity(_id, token)}>-</button>
                        </div> : <></>
                }
                <div className="card-price">
                    <div className="discounted-price">₹{discountedPrice}</div>
                    <div className="original-price">₹{price}</div>
                    <div className="saved-price">{discountPercentage}% off</div>
                </div>
                <div className="card-btn-group">
                    {isItemInCart(_id) && !isCartPage() && <button className="btn btn-outline" onClick={() => navigate('/cart')}>Go To Cart</button>}
                    {isItemInCart(_id) && isCartPage() &&
                        <>
                            <button className="btn btn-fill" onClick={() => removeFromCart(_id, token)}>Remove From Cart</button>
                            <button className="btn btn-outline" onClick={() => handleMoveToWishlist(props.product, token)}>Move To Wishlist</button>
                        </>}
                    {!isItemInCart(_id) && <button className="btn btn-fill" onClick={() => addToCart(props.product, token)}>Add To Cart</button>}
                </div>
            </div>
            {
                !isCartPage() ? <>
                    {
                        isItemInWishlist(_id) &&
                        <div className="card-wishlist is-active" onClick={() => removeFromWishList(_id, token)}>
                            <span className="material-icons-outlined">
                                favorite
                            </span>
                        </div >
                    }
                    {
                        !isItemInWishlist(_id) &&
                        <div className="card-wishlist" onClick={() => handleAddToWishList(props.product, token)}>
                            <span className="material-icons-outlined">
                                favorite_border
                            </span>
                        </div >
                    }
                </> : <></>
            }

        </div >
    );
}