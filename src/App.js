import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./css/App.css"

function App() {
  return (
    <div className="App">
      <Nav /> 
      <div className="hero">
        <div className="left">
          <p className="best-prices">
            The best prices on baseball gear.
          </p>
          <p className="guaranteed">Guaranteed.</p>
          <button>Shop Now</button>
        </div>
        <div className="right">
          <img src={require("./images/hero.jpg")}/>
        </div>
      </div>
      <div className="gray">
        <div className="newsletter">
          <p className="signup">
            Sign up to our newsletter to receive a 10% off coupon!
          </p>
          <div className="signup-section">
            <input type="text" placeholder="First name" />
            <input type="email" placeholder="Email" />
            <button>Sign up!</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
