import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CartItem from "./components/CartItem";
import "./css/Cart.css"

const dummyCart = [
    {
        title: "Pitchers Power Drive",
        category: "training",
        price: "$199.95",
        image: "training_7.jpg",
        quantity: 1,
    },
    {
        title: "MVP Portable Sock Screen - 7x7 feet",
        category: "training",
        price: "$109.95",
        image: "training_8.jpg",
        quantity: 3,
    },
    {
        title: "MVP Portable Sock Screen - 7x7 feet",
        category: "training",
        price: "$109.95",
        image: "training_8.jpg",
        quantity: 3,
    },
    {
        title: "MVP Portable Sock Screen - 7x7 feet",
        category: "training",
        price: "$109.95",
        image: "training_8.jpg",
        quantity: 3,
    },
    {
        title: "MVP Portable Sock Screen - 7x7 feet",
        category: "training",
        price: "$109.95",
        image: "training_8.jpg",
        quantity: 3,
    },
    {
        title: "MVP Portable Sock Screen - 7x7 feet",
        category: "training",
        price: "$109.95",
        image: "training_8.jpg",
        quantity: 3,
    },
]

function Cart() {

    const listItems = dummyCart.map((item) =>
        <CartItem 
            title={item.title} 
            category={item.category}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
            key={item.image}
        />
    );


    return (
        <div className="App">
            <Nav />
            <div className="cart--main">
                <div className="item-title">Shopping Cart</div>
                <div className="cart">
                    <p>{listItems.length} Items</p>
                    <div className="cart-items">
                        {listItems}
                    </div>
                    <div className="cart-options">
                        <div className="ship-promo">
                            <div className="shipping">
                                <p className="cart-option-title">Shipping</p>
                                <select><option>Expedited - $12</option></select>
                            </div>
                            <div className="promo">
                                <p className="cart-option-title">Promo Code</p>
                                <input type="text" maxLength={5} />
                            </div>
                        </div>
                        <div className="total-checkout">
                            <div className="total">
                                <p className="cart-option-title">Total</p>
                                <p className="total-price">$999.99</p>
                            </div>
                            <button className="add-to-cart">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart;