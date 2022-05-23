import { Navbar, Product } from '../../components/index';
import { useAuth, useCart } from '../../context';
import './Cart.css';

export const Cart = () => {
    const { cartStore } = useCart();
    const { token } = useAuth();

    const getTotalPrice = () => {
        if (cartStore.itemsInCart && cartStore.itemsInCart.length) {
            return cartStore.itemsInCart.reduce((acc, item) => acc + (Number(item.price) * item.qty), 0)
        } else {
            return 0;
        }
    }

    const getTotalSavings = () => {
        if (cartStore.itemsInCart && cartStore.itemsInCart.length) {
            return cartStore.itemsInCart.reduce((acc, item) => acc + ((Number(item.price) - Number(item.discountedPrice)) * item.qty), 0)
        } else {
            return 0;
        }
    }

    const getTotalPriceWithDiscountAndDelivery = () => {
        if (cartStore.itemsInCart && cartStore.itemsInCart.length) {
            return cartStore.itemsInCart.reduce((acc, item) => acc + ((Number(item.discountedPrice) * item.qty) + Number(item.deliveryCharge)), 0)
        } else {
            return 0;
        }
    }

    const getTotalDeliveryCharges = () => {
        if (cartStore.itemsInCart && cartStore.itemsInCart.length) {
            return cartStore.itemsInCart.reduce((acc, item) => acc + Number(item.deliveryCharge), 0)
        } else {
            return 0;
        }
    }

    return (
        <>
            <Navbar />
            <section className="content-body">
                {cartStore && cartStore.itemsInCart && cartStore.itemsInCart.length ?
                    <section className="section-body">
                        <div className="section-title">My Cart({cartStore.itemsInCart.length})</div>
                        <div className="cart-body">
                            <aside className="cart-products">
                                {
                                    cartStore.itemsInCart.length && cartStore.itemsInCart.map((product) => {
                                        return (
                                            <Product product={product} key={product._id} />
                                        );
                                    })
                                }
                            </aside>
                            <aside className="cart-price">
                                <div className="cart-price-content">
                                    <div className="cart-price-header">
                                        <p>Price Details</p>
                                    </div>
                                    <hr></hr>
                                    <div className="cart-price-breakdown">
                                        <div>
                                            <p>Price ({cartStore.itemsInCart.length} items)</p>
                                            <p>₹{getTotalPrice()}</p>
                                        </div>
                                        <div>
                                            <p>Discount</p>
                                            <p>- ₹{getTotalSavings()}</p>
                                        </div>
                                        <div>
                                            <p>Delivery Charges</p>
                                            <p>₹{getTotalDeliveryCharges()}</p>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="cart-price-total">
                                        <p>Total Amount</p>
                                        <p>₹{getTotalPriceWithDiscountAndDelivery()}</p>
                                    </div>
                                    <hr></hr>
                                    <div className="cart-price-save">
                                        <p>You will save ₹{getTotalSavings()} on this order</p>
                                    </div>
                                    <div className="card-btn-group">
                                        <button className="btn btn-fill">Place Order</button>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </section>
                    :
                    <section className="section-body">
                        <div className="section-title">No items in cart</div>
                    </section>
                }
            </section>
        </>
    );
}
