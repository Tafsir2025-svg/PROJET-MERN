<div className="p-8 bg-gray-100 min-h-screen">
  <h1 className="text-4xl font-bold mb-10 text-center flex items-center justify-center">
    🛍️ <span className="ml-2">Notre Boutique</span>
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {products.map((product, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center flex flex-col items-center">
        <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover rounded mb-4" />
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-green-600 font-bold mb-4">{product.price.toLocaleString('fr-FR')} FCFA</p>
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Ajouter au panier
        </button>
      </div>
    ))}
  </div>
</div>
