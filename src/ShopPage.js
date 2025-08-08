import React, { useEffect, useState } from 'react';

function ShopPage  () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Erreur chargement produits:", err));
  }, []);
};
export default ShopPage;
