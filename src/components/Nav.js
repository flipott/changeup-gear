import React from "react";
import "../css/Nav.css"

export default function Nav() {
    return (
        <div className="nav">
            <h1><a href="">Changeup Gear</a></h1>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Cart</a></li>
            </ul>
        </div>
    )
}