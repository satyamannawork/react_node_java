import React from 'react';
import './SideDrawer.css'
import { Link } from 'react-router-dom'

const SideDrawer = ({ showStatus }) => {

    console.log("this is show drawer" + JSON.stringify(showStatus));
    let sideDrawerCss = "";

    if (showStatus) {
        sideDrawerCss = "sidedrawer_show"
    } else {
        sideDrawerCss = "sidedrawer"
    }
    console.log("this is show drawer" + JSON.stringify(sideDrawerCss));
    return (

        <div className={sideDrawerCss}>

            <h1>This is side bar </h1>
            <ul className="sidedrawer___links">
                <li>
                    <Link to="/cart" className="">
                        <i className="fas fa-shopping-cart"></i>
                        Cart
                        <span className="cartlog_badge">0</span>
                    </Link>
                </li>

                <li>
                    <Link to="/" >
                        {/* Icon */}
                        Shop

                    </Link>
                </li>
            </ul>


        </div>
    )


}

export default SideDrawer

//  export {state1 , state2 } -- we can write also like this 