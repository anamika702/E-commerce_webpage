import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MyStore</h2>
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/shop">Shop</a>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="details">
        <Link to="/Login"><button className="login_nav"> Login </button></Link>
        <Link to="/Cart"> <button className="cart">Cart<span className="cart-count"></span></button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
