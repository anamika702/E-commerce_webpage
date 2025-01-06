import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx';
import Home1 from '../styles/clothing2-home-icon1.png';
import Home2 from '../styles/clothing2-home-icon2.png';
import Home3 from '../styles/clothing2-home-icon3.png';
import Home4 from '../styles/clothing2-home-icon4.png';
import container1 from '../styles/container1.webp';
import container2 from '../styles/container2.webp';
import container3 from '../styles/container3.png';
import container4 from '../styles/container4.jpg';
import container5 from '../styles/container5.jpg';
import container6 from '../styles/container6.jpg';
import About_container1  from '../styles/about_container1.png';
import About_container2  from '../styles/about_container2.png';
import "../styles/Home.css";


const Home = () =>  {
  return (
      <div>
      <Navbar/>
      <div className="home-page">
      <section className="hero-banner">
        <div className="hero-content">
        
          <h1>Welcome to MyStore</h1>
          <p>Discover amazing deals and exclusive collections!</p>
          <Link to="/shop">
            <button className="btn-primary">Shop Now</button>
          </Link>
        </div>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-cards">
          <div className="category-card">
            <img src={container1} alt=""/>
            <h3>Elegant Gown</h3>
            <Link to="/shop">Explore</Link>
          </div>
          <div className="category-card">
            <img src={container2} alt=""/>
            <h3>Sleek Blue Gown</h3>
            <Link to="/shop">Explore</Link>
          </div>
          <div className="category-card">
            <img src={container3} alt=""/>
            <h3>Black High-Neck Dress</h3>
            <Link to="/shop">Explore</Link>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src={container4} alt=""/>
            <h3>Fashion</h3>
            <Link to="/shop">
              <button className="btn-secondary">Buy Now</button>
            </Link>
          </div>
          <div className="product-card">
            <img src={container5} alt=""/>
            <h3>Designer Dresses</h3>
            <Link to="/shop">
              <button className="btn-secondary">Buy Now</button>
            </Link>
          </div>
          <div className="product-card">
            <img src={container6} alt=""/>
            <h3>Modern Apparel</h3>
            <Link to="/shop">
              <button className="btn-secondary">Buy Now</button>
            </Link>
          </div>
        </div>
      </section>

      <div className="about-us-container">
      <div className="about-us-text">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
      </div>
      <div className="cards-container">
        <div className="card">
          <img src={About_container1} alt=""/>
          <h3>Every Project is Different</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          </p>
          <Link to="/about" >
          <button>More</button>
          </Link>
        </div>
        <div className="card">
          <img src={About_container2} alt=""/>
          <h3>We are more than a Web Shop</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
          </p>
          <Link to="/about" >
          <button>More</button>
          </Link>
        </div>
      </div>
    </div>

      
      <div className="features">
            <div className="features-container">
                <div className="feature">
                    <img src={Home1} alt="Free Shipping" />
                    <h4>Always Free Shipping</h4>
                    <p>Lorem ipsum dolor sit amet mauris dolor bibendum sapien.</p>
                </div>
                <div className="feature">
                    <img src={Home2} alt="Return Policy" />
                    <h4>14 Day Return Policy</h4>
                    <p>Nulla imperdiet sit amet magna vestibulum dapibus.</p>
                </div>
                <div className="feature">
                    <img src={Home3} alt="Quick Delivery" />
                    <h4>Quick Delivery in 48h</h4>
                    <p>Nullam wisi ultricies gravida vitae dapibus risus.</p>
                </div>
                <div className="feature">
                    <img src={Home4} alt="Online Payment" />
                    <h4>Online Payment</h4>
                    <p>Lorem ipsum dolor sit amet mauris dolor bibendum sapien.</p>
                </div>
            </div>
            <div className="discount-section">
                <div className="discount-banner">
                    <h3>GET 20% OFF</h3>
                    <p>Fusce dolor velit laoreet.</p>
                    <button className="learn-more">Learn More</button>
                </div>
            </div>
        </div>
      <Footer/>    
    </div>
    </div>
  );
}

export default Home;


