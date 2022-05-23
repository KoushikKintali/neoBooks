import { Navbar, Product } from '../../components/index';
import { useWishlist } from '../../context';

export const WishList = () => {

    const { wishlistStore } = useWishlist();

    return (
        <>
            <Navbar />
            <section className="content-body">
                <div className="all-products-body">
                    {
                        wishlistStore.itemsInWishlist && wishlistStore.itemsInWishlist.length ?
                            <>

                                <div className="products-section-title">
                                    <p className="title">Items in Wishist</p>
                                </div>
                                <div className="section-group-tiles">
                                    {
                                        wishlistStore.itemsInWishlist.length && wishlistStore.itemsInWishlist.map((product) => {
                                            return (
                                                <Product className="card-horizontal" product={product} key={product._id} />
                                            );
                                        })
                                    }
                                </div>
                            </>
                            :
                            <div className="products-section-title">
                                <p className="title">No Items in Wishist</p>
                            </div>
                    }
                </div>
            </section>
        </>
    );
}
