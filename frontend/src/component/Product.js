import './Product.css'
import React from 'react';
import { Link } from 'react-router-dom'
const Product = () => {
    return (
        <div className="product">
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="" />

            <div className="product__info" >
                <p className="info__name">
                    Product 1 Name

                </p>
                <p className="info__description">

                    lorem asdsajdkasjdksjdkjsdksjdk
                </p>


                <p className="info__price">

                    $ 1.00
                </p>

                <Link to={`product/${11111}`} className="info__button" > View  </Link>
            </div>

        </div>
    );
}

export default Product;