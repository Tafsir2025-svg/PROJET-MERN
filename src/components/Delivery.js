// src/components/Delivery.js
import React from 'react';
import './Delivery.css';

const Delivery = () => {
  return (
    <div className="delivery">
      <h2>Nos Services de Livraison</h2>
      <p>Nous offrons une livraison rapide et fiable dans tout le pays.</p>
      <ul>
        <li>Livraison standard (5-7 jours)</li>
        <li>Livraison express (1-2 jours)</li>
        <li>Suivi en temps réel de votre commande</li>
      </ul>
    </div>
  );
};

export default Delivery;
