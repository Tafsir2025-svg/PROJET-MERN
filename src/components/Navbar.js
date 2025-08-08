// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">GMINA</div>
      <ul>
        <li><a href="#products">Nos Produits</a></li>
        <li><a href="#cart">Panier</a></li>
        <li><a href="#partners">Nos Partenaires</a></li>
        <li><a href="#delivery">Livraison</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
