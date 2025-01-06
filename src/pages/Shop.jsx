import React, {useState} from "react";
import  "../styles/shop.css";
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx';
import shop1 from '../styles/shop_1.jpg';
import shop2 from '../styles/shop_2.webp';
import shop3 from '../styles/shop_3.jpeg';
import shop4 from '../styles/shop_4.webp';
import shop5 from '../styles/shop_5.webp';
import shop6 from '../styles/shop_6.jpeg';
import shop7 from '../styles/shop_7.jpg';
import shop8 from '../styles/shop_8.jpeg';


const Shop = () => {
    const [cart, setCart] = useState([]);

const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart); 
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
    alert(`${product.name} added to cart!`);
  };
        
const Product = [
  {
    id: 1,
    image: shop1,
    name: "Lorem ipsum dolor sit amet",
    price: "£12.50",
    originalPrice: null,
  },
  {
    id: 2,
    image: shop2,
    name: "Nulla imperdiet sit amet",
    price: "£25.00",
    originalPrice: null,
  },
  {
    id: 3,
    image: shop3,
    name: "Nullam wisi ultricies",
    price: "£12.50",
    originalPrice: null,
  },
  {
    id: 4,
    image: shop4,
    name: "Quisque cursus et porttitor risus",
    price: "£17.00",
    originalPrice: null,
  },
  {
    id: 5,
    image: shop5,
    name: "Quisque lorem tortor",
    price: "£26.00",
    originalPrice: "£29.00",
  },
  {
    id: 6,
    image: shop6,
    name: "Quisque lorem tortor",
    price: "£28.00",
    originalPrice: null,
  },
  {
    id: 7,
    image: shop7,
    name: "Quisque lorem tortor",
    price: "£70.00",
    originalPrice: null,
  },
  {
    id: 8,
    image: shop8,
    name: "Vestibulum dapibus",
    price: "£32.00",
    originalPrice: null,
  },
];


  return (
    <div>
        <Navbar/>
        <div className="shop-grid">
          {Product.map((product) => (
            <div key={product.id} className="shop-card">
              <img src={product.image} alt={product.name} className="shop-image" />
              <h3 className="shop-name">{product.name}</h3>
              <div className="shop-price">
                {product.originalPrice && (
                  <span className="original-price">{product.originalPrice}</span>
                )}
                <span className="current-price">{product.price}</span>
              </div>
              <div className="shop-actions">
                <button onClick={() => addToCart(product)}className="cart-button">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <Footer/>
    </div>    
      );
    };
    
    export default Shop;