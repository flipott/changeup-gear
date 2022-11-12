import React from "react";
import "../css/Card.css"
import { Link } from "react-router-dom";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item);});
    return images;
}

export default function Card(props) {

    const {title, category, price, image, inCart} = props;
    const images = importAll(require.context('../images/items', false, /\.(png|jpe?g|svg)$/));
    const [quantity, setQuantity] = React.useState(1);

    const clickHandler = () => {
        props.addToCart(title, category, price, image, parseInt(quantity))
    }
    
    return (
        <div className="card">
            <img src={images[image]} />
            <p className="item-card-title">{title}</p>
            <p className="item-card-price">{price}</p>
            <div className="shop-add-row">
                {inCart ? "" : <input type="text" maxLength={2} defaultValue={1} onChange={(e) => {setQuantity(e.target.value)}} className="quantity" />}
                <button className="add-to-cart" onClick={() => {clickHandler()}}>{inCart ? <Link to="/cart">In Cart</Link>  : "Add to Cart"}</button>
            </div>
        </div>
    )
}