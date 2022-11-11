import React from "react";
import "../css/CartItem.css"

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item);});
    return images;
}

export default function CartItem(props) {

    const {title, category, price, image, quantity} = props;
    const images = importAll(require.context('../images/items', false, /\.(png|jpe?g|svg)$/));
    return (
        <div className="cart-item">
            <img src={images[image]} />
            <div className="cart-item-description">
                <p className="cart-item-category">{category}</p>
                <p className="cart-item-title">{title}</p>
            </div>
            <p className="cart-item-price">{price}</p>
            <div className="cart-quantity-row">
                <button>-</button>
                <input type="text" maxLength={2} value={quantity} />
                <button>+</button>
            </div>
            <button>x</button>
        </div>
    )
}