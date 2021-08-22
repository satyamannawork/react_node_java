import React from 'react'
import './CartScreen.css'
import CartItem from '../component/CartItem';
const CartScreen = () => {
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">

                <h2>Shopping Cart </h2>
                <CartItem></CartItem>
            </div>

            <div className="cartscreen__right">

                <div className="cartscreen__info" >

                    <p>Sub Total (0)  items  </p>
                    <p> $20.00 </p>
                </div>

                <div >
                    <button >Proceed to checkout </button>
                </div>

            </div>
        </div>
    )
}

export default CartScreen;