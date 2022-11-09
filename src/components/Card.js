import React from "react";
import "../css/Card.css"

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item);});
    return images;
}

export default function Card(props) {

    const {title, category, price, image} = props;
    const images = importAll(require.context('../images/items', false, /\.(png|jpe?g|svg)$/));
    return (
        <div className="card">
            <img src={images[image]} />
            <p className="item-card-title">{title}</p>
            <p className="item-card-price">{price}</p>
            <div className="shop-add-row">
                <input type="text" maxLength={2} placeholder={1} className="quantity" />
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    )
}