import axios from 'axios';
import { useState, useEffect } from 'react';
import Filter from '../../components/filter/Filter';
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
            <section className="content-body products-body">
                <Filter></Filter>
                <div class="all-products-body">
                    <div class="products-section-title">
                        <p class="title">Showing All Products</p>
                        <p class="summary">(Showing 20 products)</p>
                    </div>
                    <div class="section-group-tiles">
                        {
                            products.map((product) => {
                                return (
                                    <Product product={product} key={product._id}></Product>
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