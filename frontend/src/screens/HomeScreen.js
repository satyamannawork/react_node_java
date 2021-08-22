import './HomeScreen.css'
import React from 'react';
import Product from '../component/Product';
const HomeScreen = () => {
    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__product">
                <Product></Product>


            </div>
        </div>
    );
}

export default HomeScreen;