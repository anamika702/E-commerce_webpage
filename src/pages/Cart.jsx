import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace("£","")), 0);
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    localStorage.removeItem("cart");
    alert("Your order has been placed successfully!");
  };

  if (orderPlaced) {
    return (
      <div className="order-confirmation">
        <h2>Your order has been placed successfully!</h2>
        <p>Thank you for your purchase.</p>
        <a href="/shop">Go back to products</a>
      </div>
    );
  }

  return (
    <div>
    <Navbar/>
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: £{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total: £{calculateTotal().toFixed(2)}</p>
            <button className="checkout-button" onClick={handlePlaceOrder}>Place Order </button>
          </div>
        </>
      ) : (  
        <p>Your cart is empty. Go back to the <a href="/shop">Product</a> to add items.</p>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default CartPage;
