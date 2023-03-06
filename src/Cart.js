import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CartItem from "./components/CartItem";
import "./css/Cart.css"
import { Link } from "react-router-dom";

function Cart(props) {
    const listItems = props.shoppingCart.map((item) =>
        <CartItem 
            title={item.title} 
            category={item.category}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
            key={item.image}
            removeFromCart={props.removeFromCart}
            adjustQuantity={props.adjustQuantity}
        />
    );

    const [totalStatus, setTotalStatus] = React.useState({items: 0, total: 0})
    const [shippingPrice, setShippingPrice] = React.useState(12);


    useEffect(() => {
        let tempItem = 0;
        let tempTotal = 0;
    
        if (props.shoppingCart.length) {
            for (let i = 0; i < props.shoppingCart.length; i++) {
                tempItem += props.shoppingCart[i]["quantity"];
                tempTotal += (props.shoppingCart[i]["quantity"]) * parseFloat(props.shoppingCart[i]["price"].slice(1));
            }
        }
    
        tempTotal += parseInt(shippingPrice);    
        setTotalStatus({items: tempItem, total: tempTotal.toFixed(2)});
    
    }, [props.shoppingCart, shippingPrice]);    

    return (
        <div className="App">
            <Nav />
            <div className="cart--main">
                <div className="item-title">Shopping Cart</div>
                <div className="cart">
                    {totalStatus.items > 0 && (
                        <>
                        <p>{totalStatus.items} Item{totalStatus.items > 1 ? "s" : ""}</p>
                        <div className="cart-items">
                            {listItems}
                        </div>
                        <div className="cart-options">
                            <div className="ship-promo">
                                <div className="shipping">
                                    <p className="cart-option-title">Shipping</p>
                                    <select onChange={(e) => setShippingPrice(e.target.value)}>
                                        <option value={12}>Expedited - $12</option>
                                        <option value={8}>Economy - $8</option>
                                    </select>
                                </div>
                                <div className="promo">
                                    <p className="cart-option-title">Promo Code</p>
                                    <input type="text" maxLength={5} />
                                </div>
                            </div>
                            <div className="total-checkout">
                                <div className="total">
                                    <p className="cart-option-title">Total</p>
                                    <p className="total-price">${totalStatus.total}</p>
                                </div>
                                <button className="add-to-cart" onClick={() => window.alert("This is a static site meant for demonstration purposes only!")}>Checkout</button>
                            </div>
                        </div>
                        </>
                        )
                    }       
                    {totalStatus.items <= 0 && (
                        <div className="no-items">
                            <h2>You have no items in your cart!</h2>
                            <button className="back-to-shop"><Link to="/shop">Shop Now</Link></button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart;