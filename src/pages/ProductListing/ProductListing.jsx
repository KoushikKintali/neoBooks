import axios from 'axios';
import { useState, useEffect } from 'react';
import Filter from '../../components/filter/Filter';
import Navbar from '../../components/navbar/Navbar';
import Product from '../../components/product/Product';
import './ProductListing.css';

const ProductListing = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const products = await axios.get('/api/products');
            setProducts([...products.data.products]);
        } catch (error) {
            console.error('Error in fetchProducts', error);
            throw error;
        }
    };

    useEffect(() => fetchProducts(), []);


    return (
        <>
            <Navbar />
            <section className="content-body products-body">
                <Filter />
                <div className="all-products-body">
                    <div className="products-section-title">
                        <p className="title">Showing All Products</p>
                        <p className="summary">(Showing 20 products)</p>
                    </div>
                    <div className="section-group-tiles">
                        {
                            products.map((product) => {
                                return (
                                    <Product product={product} key={product._id} />
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductListing;