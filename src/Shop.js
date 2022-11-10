import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./css/Shop.css";
import Data from "./components/Data";


function Shop() {

    const itemArray = Data.items;
    const [items, setItems] = React.useState(itemArray);
    const [currentSelection, setCurrentSelection] = React.useState("All Products");


    const listItems = items.map((item) =>
        <Card 
        title={item.title} 
        category={item.category}
        price={item.price}
        image={item.image}
        key={item.image}
        />
    );

    const filterItems = (category, event) => {
        setCurrentSelection(event.textContent);

        const categoryList = document.querySelector(".list-parent");
        for (let i = 0; i < categoryList.children.length; i++) {
            if (categoryList.children[i].classList.contains("bold")) {
                categoryList.children[i].classList.remove("bold");
            };
        };

        event.classList.add("bold");

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
                        <li onClick={(e) => filterItems("all", e.target)}>All Products</li>
                        <li onClick={(e) => filterItems("bat", e.target)}>Bats</li>
                        <li onClick={(e) => filterItems("glove", e.target)}>Gloves</li>
                        <li onClick={(e) => filterItems("ball", e.target)}>Balls</li>
                        <li onClick={(e) => filterItems("apparel", e.target)}>Apparel</li>
                        <li onClick={(e) => filterItems("training", e.target)}>Training Gear</li>
                        <li onClick={(e) => filterItems("accessory", e.target)}>Accessories</li>
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