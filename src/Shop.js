import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./css/Shop.css";
import Data from "./components/Data";


function Shop(props) {

    const itemArray = Data.items;
    const [items, setItems] = React.useState(itemArray);
    const [currentSelection, setCurrentSelection] = React.useState("All Products");
    const [showFilterMenu, setShowFilterMenu] = React.useState(false);

    const checkInCart = (item) => {
        for (let i = 0; i<props.shoppingCart.length; i++) {
            if (props.shoppingCart[i]["title"] === item.title) {
                return true;
            }
        }
        return false;
    }

    const listItems = items.map((item) =>
        <Card 
        title={item.title} 
        category={item.category}
        price={item.price}
        image={item.image}
        key={item.image}
        addToCart={props.addToCart}
        inCart={checkInCart(item)}
        />
    );

    const filterItems = (category, event) => {
        setCurrentSelection(event.textContent);
        const categoryList = document.querySelector(".list-parent");
        const mobileList = document.querySelector(".list-mobile")
        for (let i = 0; i < categoryList.children.length; i++) {
            if (categoryList.children[i].classList.contains("bold")) {
                categoryList.children[i].classList.remove("bold");
            };
            if (mobileList.children[i].classList.contains("bold")) {
                mobileList.children[i].classList.remove("bold");
            };
        };

        event.classList.add("bold");

        for (let i = 0; i < categoryList.children.length; i++) {
            if (categoryList.children[i].innerText === event.innerText) {
                categoryList.children[i].classList.add("bold");
            }
            if (mobileList.children[i].innerText === event.innerText) {
                mobileList.children[i].classList.add("bold");
            }
        };

        if (category === "all") {
            setItems(itemArray);
        } else {
            setItems(itemArray.filter((item) => item.category === category));
        }

    }

    return (
        <div className="App">
            <Nav />
            <div className="shop--main">
                <div className="sidebar">
                    <ul className="list-parent">
                        <li className="bold" onClick={(e) => filterItems("all", e.target)}>All Products</li>
                        <li onClick={(e) => filterItems("bat", e.target)}>Bats</li>
                        <li onClick={(e) => filterItems("glove", e.target)}>Gloves</li>
                        <li onClick={(e) => filterItems("ball", e.target)}>Balls</li>
                        <li onClick={(e) => filterItems("apparel", e.target)}>Apparel</li>
                        <li onClick={(e) => filterItems("training", e.target)}>Training Gear</li>
                        <li onClick={(e) => filterItems("accessory", e.target)}>Accessories</li>
                    </ul>
                </div>
                <div className="filter-container">
                    <button onClick={() => setShowFilterMenu(prevVal => !prevVal)}><img src="filter.svg" /></button>
                    <ul className="filter-dropdown animate-dropdown list-mobile" style={{ display: showFilterMenu ? "flex" : "none" }}>
                        <li className="bold" onClick={(e) => { setShowFilterMenu(false); filterItems("all", e.target); }}>All Products</li>                    
                        <li onClick={(e) => { setShowFilterMenu(false); filterItems("bat", e.target); }}>Bats</li>                    
                        <li onClick={(e) => { setShowFilterMenu(false); filterItems("glove", e.target); }}>Gloves</li>                    
                        <li onClick={(e) => { setShowFilterMenu(false); filterItems("ball", e.target); }}>Balls</li>                    
                        <li onClick={(e) => { setShowFilterMenu(false); filterItems("apparel", e.target); }}>Apparel</li>                    
                        <li onClick={(e) => { setShowFilterMenu(false); filterItems("training", e.target); }}>Training Gear</li>                    
                        <li onClick={(e) => { setShowFilterMenu(false); filterItems("accessory", e.target); }}>Accessories</li>                    
                    </ul>
                </div>
                <div className="item-section">
                    <div className="item-title">Viewing {currentSelection}</div>
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