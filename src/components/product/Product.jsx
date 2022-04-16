import './Product.css';

export default function Product(props) {
    const { _id, url, title, author, price, discount, categoryName } = props.product;

    const getDiscountedPrice = (price, discount) => {
        return Number(price - ((price * discount) / 100));
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
                    <button className="btn btn-outline">Go To Cart</button>
                </div>
            </div>
            <div className="card-wishlist is-active">
                <span className="material-icons-outlined">
                    favorite
                </span>
            </div>
        </div>
    );
}