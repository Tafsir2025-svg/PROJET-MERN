import React from 'react';
import ProductCard from './ProductCard';
import './ProductSection.css';

const ProductSection = ({ title, products }) => {
  return (
    <div className="product-section">
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
