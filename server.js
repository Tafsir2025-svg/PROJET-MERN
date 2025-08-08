// FILE: backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: 'Gants médicaux', price: 3000, imageUrl: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Masques chirurgicaux', price: 5000, imageUrl: 'https://via.placeholder.com/100' },
];

let orders = [];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/orders', (req, res) => {
  const { products } = req.body;
  orders.push({ id: orders.length + 1, products });
  res.status(201).json({ message: 'Commande enregistrée !' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


// FILE: frontend/src/ShopPage.js
import React, { useState, useEffect } from 'react';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleCheckout = () => {
    fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ products: cartItems }),
    })
      .then((res) => res.json())
      .then(() => {
        alert('Commande passée avec succès !');
        setCartItems([]);
      })
      .catch(console.error);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Notre Boutique</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded">
            <img src={p.imageUrl} alt={p.name} className="mb-2" />
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-green-600 font-bold">{p.price} FCFA</p>
            <button
              className="bg-blue-500 text-white mt-2 px-4 py-1 rounded"
              onClick={() => handleAddToCart(p)}
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Panier</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>{item.name} x {item.quantity}</li>
            ))}
          </ul>
          <button
            className="bg-green-600 text-white px-6 py-2 rounded mt-4"
            onClick={handleCheckout}
          >
            Passer la commande
          </button>
        </div>
      )}
    </div>
  );
}

export default ShopPage;
