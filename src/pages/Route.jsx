import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../pages/ Home.jsx';
import About from '../pages/AboutUs.jsx';
import Contact from '../pages/Contact.jsx';
import Login from '../pages/Login.jsx';
import Shop from '../pages/Shop.jsx';
import Cart from '../pages/Cart.jsx';

const AppRoutes = () => {
    return (
        <Router>
            <nav>
                <Link to="/"></Link>
                <Link to="/about"></Link>
                <Link to="/Contact"></Link>
                <Link to="/Login"></Link>
                <Link to="/Shop"></Link>
                <Link to="/Cart"></Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/Cart" element={<Cart />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
