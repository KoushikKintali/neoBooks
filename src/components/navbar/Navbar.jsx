import logo from '../../assets/logo.png';
import { useCart } from '../../context/cart-context';


const Navbar = () => {

    const { store } = useCart();
    console.log('store.itemsInWishlist', store.itemsInWishlist)
    return (
        <>
            <nav className="nav">
                <a className="nav-logo" href="../index.html" alt="logo">
                    <img className="logo" src={logo} alt="logo" />
                </a>
                <div className="nav-search">
                    <span className="material-icons-outlined search-icon">
                        search
                    </span>
                    <input className="search-input" placeholder="Titles, author, or topics" />
                </div>
                <ul className="nav-list nav-icons">
                    <li className="nav-item">
                        <a className="nav-link" href="./signin.html">Login</a>
                    </li>
                    <li className="badge nav-item">
                        <a className="nav-link" href="./wishlist.html">
                            <span className="material-icons-outlined icon">favorite_border</span>
                            {
                                store.itemsInWishlist && store.itemsInWishlist.length
                                    ? <span className="badge-count">{store.itemsInWishlist.length}</span>
                                    : <></>
                            }
                        </a>
                    </li>
                    <li className="badge nav-item">
                        <a className="nav-link" href="./cart.html">
                            <span className="material-icons-outlined icon">shopping_cart</span>
                            {
                                store.itemsInCart && store.itemsInCart.length
                                    ? <span className="badge-count">{store.itemsInCart.length}</span>
                                    : <></>
                            }
                        </a>
                    </li>
                </ul>
                <div className="nav-item" id="nav-hamburger-button">
                    <span className="material-icons-outlined">
                        menu
                    </span>
                </div>
            </nav>
            <ul className="nav-list nav-hamburger display-none" id="nav-hamburger">
                <li className="nav-item">
                    <a className="nav-link" href="../index.html">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./products.html">Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./wishlist.html">Wishlist</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./cart.html">Cart</a>
                </li>
            </ul>
        </>
    );
}

export default Navbar;