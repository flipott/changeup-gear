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

    function checkDisabled(operator) {
        if (operator === "-") {
            return quantity === 1 ? true : false;
        } else {
            return quantity >= 99 ? true : false;
        }
    }

    return (
        <div className="cart-item">
            <button className="delete-mobile" onClick={() => props.removeFromCart(title)}><img src="trash.svg" /></button>
            <img src={images[image]} />
            <div className="cart-item-description">
                <p className="cart-item-category">{category}</p>
                <p className="cart-item-title">{title}</p>
            </div>
            <p className="cart-item-price">{price}/ea</p>
            <div className="cart-quantity-row">
                <button className="quantity-adjust" onClick={() => props.adjustQuantity(title, "-")} disabled={checkDisabled("-")}>-</button>
                <p>{quantity}</p>
                <button className="quantity-adjust" onClick={() => props.adjustQuantity(title, "+")} disabled={checkDisabled("+")}>+</button>
            </div>
            <button className="delete-normal" onClick={() => props.removeFromCart(title)}><img src="trash.svg" /></button>
        </div>
    )
}