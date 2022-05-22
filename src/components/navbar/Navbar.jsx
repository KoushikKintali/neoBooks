import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useAuth, useCart, useToastHandler, useWishlist } from '../../context';


export const Navbar = () => {

    const { store } = useCart();
    const { isLoggedIn, removeToken } = useAuth();
    const navigate = useNavigate();
    const { setToastHandler } = useToastHandler();
    const { wishlistStore } = useWishlist();

    const isLoginSignupPage = window.location.pathname.includes('login') || window.location.pathname.includes('signup');

    const handleLogoutLogin = () => {
        if (isLoggedIn) {
            removeToken();
            setToastHandler({ type: 'success', message: 'Logged out successfully' });
            navigate('/login', { replace: true });
        } else {
            navigate('/login');
        }
    }

    const navigateToWishlistPage = () => {
        navigate('/wishlist');
    }
    return (
        <>
            <nav className="nav">
                <a className="nav-logo" onClick={() => navigate('/products')} alt="logo">
                    <img className="logo" src={logo} alt="logo" />
                </a>
                <div className="nav-search">
                    <span className="material-icons-outlined search-icon">
                        search
                    </span>
                    <input className="search-input" placeholder="Titles, author, or topics" />
                </div>
                <ul className="nav-list nav-icons">
                    {!isLoginSignupPage &&
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => handleLogoutLogin()}>{isLoggedIn ? 'Logout' : 'Login'}</a>
                        </li>
                    }
                    {isLoggedIn && <li className="badge nav-item">
                        <a className="nav-link" onClick={() => navigateToWishlistPage()}>
                            <span className="material-icons-outlined icon">favorite_border</span>
                            {
                                wishlistStore && wishlistStore.itemsInWishlist && wishlistStore.itemsInWishlist.length
                                    ? <span className="badge-count">{wishlistStore.itemsInWishlist.length}</span>
                                    : <></>
                            }
                        </a>
                    </li>}
                    {isLoggedIn && <li className="badge nav-item">
                        <a className="nav-link" href="./cart.html">
                            <span className="material-icons-outlined icon">shopping_cart</span>
                            {
                                store.itemsInCart && store.itemsInCart.length
                                    ? <span className="badge-count">{store.itemsInCart.length}</span>
                                    : <></>
                            }
                        </a>
                    </li>}
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
