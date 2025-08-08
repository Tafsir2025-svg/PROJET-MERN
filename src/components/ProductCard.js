// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">{product.price} FCFA</p>
        <button className="add-to-cart">Ajouter au panier</button>
      </div>
    </div>
  );
};

export default ProductCard;
