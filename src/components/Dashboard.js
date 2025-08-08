import React from 'react';
import { ShoppingCart, Package, Truck, Users } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="space-y-4">
          <a href="#products" className="block text-gray-700 hover:text-blue-500">Produits</a>
          <a href="#orders" className="block text-gray-700 hover:text-blue-500">Commandes</a>
          <a href="#partners" className="block text-gray-700 hover:text-blue-500">Partenaires</a>
          <a href="#delivery" className="block text-gray-700 hover:text-blue-500">Livraisons</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <Package className="w-10 h-10 text-blue-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">150</h3>
              <p className="text-gray-500">Produits</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <ShoppingCart className="w-10 h-10 text-green-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">45</h3>
              <p className="text-gray-500">Commandes</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <Truck className="w-10 h-10 text-yellow-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">12</h3>
              <p className="text-gray-500">Livraisons</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <Users className="w-10 h-10 text-purple-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">8</h3>
              <p className="text-gray-500">Partenaires</p>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <section id="products">
          <h2 className="text-2xl font-bold mb-4">Produits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Card Example */}
            <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
              <img src="https://via.placeholder.com/100" alt="Produit" className="mb-4" />
              <h3 className="text-lg font-semibold">Produit 1</h3>
              <p className="text-green-600 font-bold">15 000 FCFA</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Détails
              </button>
            </div>
            {/* Répéter pour les autres produits... */}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Dashboard;
