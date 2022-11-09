import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./css/Shop.css";
import Data from "./components/Data";

const itemArray = Data.items;
const listItems = itemArray.map((item) =>
    <Card 
    title={item.title} 
    category={item.category}
    price={item.price}
    image={item.image}
    />
);

function Shop() {
    return (
        <div className="App">
            <Nav />
            <div className="shop--main">
                <div className="sidebar">
                    <ul>
                        <li><a href="">All Products</a></li>
                        <li><a href="">Bats</a></li>
                        <li><a href="">Gloves</a></li>
                        <li><a href="">Balls</a></li>
                        <li><a href="">Apparel</a></li>
                        <li><a href="">Training Gear</a></li>
                        <li><a href="">Accessories</a></li>
                    </ul>
                </div>
                <div className="item-section">
                    <div className="item-title">Viewing All Products</div>
                    <div className="items">
                        {listItems}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shop;