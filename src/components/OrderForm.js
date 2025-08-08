import React, { useState } from 'react';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');  // <-- Ajout de l'état phone

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Commande reçue: ${name}, ${phone}`);
  };

  return (
    <div className="order-form">
      <h2>Passer une Commande</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Numéro de téléphone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ex: +221 77 123 45 67"
            required
          />
        </label>
        <button type="submit">Commander</button>
      </form>
    </div>
  );
};

export default OrderForm;
