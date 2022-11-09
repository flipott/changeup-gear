import React from "react";
import "../css/Nav.css"
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="nav">
            <h1><Link to="/">Changeup Gear</Link></h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </div>
    )
}