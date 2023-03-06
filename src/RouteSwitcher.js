import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Cart from "./Cart";
import React, { useEffect } from "react";



export default function RouteSwitcher() {
    const [shoppingCart, setShoppingCart] = React.useState([]);


    const addToCart = (title, category, price, image, quantity) => {
        let quantityFlag = false;
        let itemIndex = null;

        for (let i = 0; i<shoppingCart.length; i++) {
            if (shoppingCart[i].title === title) {
                quantityFlag = true;
                itemIndex = i;
            }
        }

        if (!quantityFlag) {
            setShoppingCart(prevCart => [...prevCart, {"title": title, "category": category, "price": price, "image": image, "quantity": quantity}]);
        }
    }

    const removeFromCart = (title) => {
        setShoppingCart(prevCart => [...prevCart].filter(item => item.title !== title));
    }

    const adjustQuantity = (title, operator) => {
        setShoppingCart(prevCart => prevCart.map(item => 
            {
                if (item["title"] === title) {
                    if (operator === "-") {
                        return {...item, quantity: parseInt(item["quantity"])-1}
                    } else if (operator === "+") {
                        return {...item, quantity: parseInt(item["quantity"])+1}
                    }
                }
                return item;

            }))
    }

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Shop addToCart={addToCart} shoppingCart={shoppingCart}/>} />
                <Route path="/cart" element={<Cart shoppingCart={shoppingCart} removeFromCart={removeFromCart} adjustQuantity={adjustQuantity} />} />
            </Routes>
        </BrowserRouter>
    )
}