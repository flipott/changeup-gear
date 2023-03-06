import React from "react";
import "../css/Nav.css"
import { Link } from "react-router-dom";

export default function Nav() {
    
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    return (
        <div className="nav">
            <div>
                <Link to="/"><img src={process.env.PUBLIC_URL + "logo.png"} alt="Changeup Gear"></img></Link>
                <ul className="desktop-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
                <div className="mobile-menu-container">
                    <a className={showMobileMenu ? "hamburger-icon show-mobile-menu" : "hamburger-icon"} onClick={() => setShowMobileMenu(prevValue => !prevValue)}><span></span></a>
                    <ul id="mobile-menu" className={showMobileMenu ? "show-mobile-menu" : ""}>
                        <li onClick={() => setShowMobileMenu(false)}><Link to="/">Home</Link></li>
                        <li onClick={() => setShowMobileMenu(false)}><Link to="/shop">Shop</Link></li>
                        <li onClick={() => setShowMobileMenu(false)}><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}