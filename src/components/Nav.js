import React from "react";
import "../css/Nav.css"
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="nav">
            <Link to="/"><img src="logo.svg" alt="Changeup Gear"></img></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </div>
    )
}