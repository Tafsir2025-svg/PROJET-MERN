import React, { useState, useEffect } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center flex flex-col items-center">
      <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover rounded mb-4" />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-green-600 font-bold mb-4">{product.price.toLocaleString('fr-FR')} FCFA</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Ajouter au panier
      </button>
    </div>
  );
};

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mt-10 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Votre Panier</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Votre panier est vide.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center py-4">
              <div>
                <span className="font-medium text-lg">{item.name}</span>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => onUpdateQuantity(item, item.quantity - 1)}
                    className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400"
                    disabled={item.quantity === 1}
                  >-
                  </button>
                  <span className="px-4 text-lg">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item, item.quantity + 1)}
                    className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400"
                  >+
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-green-600 font-bold text-lg">{(item.price * item.quantity).toLocaleString('fr-FR')} FCFA</span>
                <button
                  onClick={() => onRemoveItem(item)}
                  className="text-red-500 text-sm mt-2 hover:underline"
                >Supprimer</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-6 text-xl font-bold text-right">Total : {total.toLocaleString('fr-FR')} FCFA</p>
      {cartItems.length > 0 && (
        <button
          onClick={onCheckout}
          className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Passer la commande
        </button>
      )}
    </div>
  );
};

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    setProducts([
      { name: 'Produit 1', price: 15000, imageUrl: 'https://via.placeholder.com/100' },
      { name: 'Produit 2', price: 20000, imageUrl: 'https://via.placeholder.com/100' },
    ]);
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (product, newQuantity) => {
    if (newQuantity <= 0) return;
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.name === product.name ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (product) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.name !== product.name));
  };

  const handleCheckout = () => {
    setShowConfirmation(true);
    setCartItems([]);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center">🛍️ Notre Boutique</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cart
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-600">Commande effectuée ✅</h2>
            <p className="mb-6 text-lg">Merci pour votre achat !</p>
            <button
              onClick={() => setShowConfirmation(false)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
