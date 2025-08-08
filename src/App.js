import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Partners from './components/Partners';
import Delivery from './components/Delivery';
import OrderForm from './components/OrderForm';
import ProductSection from './components/ProductSection';
import './styles/App.css';


const sections = [
  {
    title: "Nouveautés",
    products: [
      { name: "Gant Sterile", price: 12_000, imageUrl: "https://dentalproject.ma/wp-content/uploads/2019/07/1532465214.gant_ster.jpg" },
      { name: "Seringue a insuline", price: 6_000, imageUrl: "https://www.omedit-centre.fr/stylo/res/Seringues_a_insuline.png" },
      { name: "Perfuseur", price: 5_000, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_OK00zp1iAo_eNzQfHSCfRXjIApW1pQNDQ&s" },
      { name: "Catheter", price: 17_000, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWcA5SkY6oXu05W5Rn_fhIgq5sp9TVhgxuA&s" },
    ],
  },
  {
    title: "Populaires",
    products: [
      { name: "Seringue 10cc", price: 5_000, imageUrl: "https://media.istockphoto.com/id/1272252760/photo/syringe-medical-equipment-with-blue-liquid-vaccine-on-white-background.jpg?s=612x612&w=0&k=20&c=GpkkRMSPijTLYEvl1b5HxCb4Jx9DYmvZosXecpKZUfs=" },
      { name: "Alcool 60 degres", price: 10_000, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sHTHnm_BhnEK0Rgm5VfcvYNsaUmfk_IlQg&s" },
      { name: "Speculum vaginal caisse", price: 45_000, imageUrl: "data:image/jpeg;base64,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" },
      { name: "Compresse", price: 11_000, imageUrl: "data:image/jpeg;base64,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" },
    ],
  },
  {
    title: "Promotions",
    products: [
      { name: "Stetoscope", price: 20_000, imageUrl: "https://cdn.pixabay.com/photo/2015/10/26/09/07/medical-1006787_1280.jpg" },
      { name: "Poche a urine", price: 3_500, imageUrl: "https://medical.sn/wp-content/uploads/2022/06/poche-a-urine-2l.jpg" },
      { name: "Chaise roulante", price: 90_000, imageUrl: "https://partenamutshop.be/web/image/product.template/77/image_1024?unique=b4c2ce4" },
      { name: "Lame laboratoire", price: 2_500, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm4VhChomwFFuNVhCnSRTCzfJnMna824abEw&s" },
    ],
  },
  {
    title: "Best Sellers",
    products: [
      { name: "Masque a oxygene", price: 2_500, imageUrl: "https://www.advacarepharma.com/static/9cffce4d03a6d29111a093dadbd62866/323c6/masque-a-oxygene.png" },
      { name: "Champ de table", price: 4_000, imageUrl: "https://www.neohm.fr/229-large_default/champ-de-table-pont-sterile.jpg" },
      { name: "Tube de prelevement", price: 7_000, imageUrl: "https://www.advacarepharma.com/images/tubes-de-collecte-de-sang.png" },
      { name: "Kit Cesarienne", price: 15_000, imageUrl: "https://fr.medicaldrape.com/uploadfile/202310/12/0de9b6dcf38aa3dfc6e72a1bd576bb7a_medium.jpg" },
    ],
  },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <Navbar />

      {/* Générer dynamiquement les Sections de Produits */}
      {sections.map((section, index) => (
        <ProductSection
          key={index}
          title={section.title}
          products={section.products.map(product => ({
            ...product,
            addToCart: () => handleAddToCart(product)
          }))}
        />
      ))}

      {/* Panier */}
      <h2>Panier</h2>
      <Cart cartItems={cartItems} total={total} />

      {/* Nos Partenaires */}
      <h2>Nos Partenaires</h2>
      <Partners />

      {/* Services de Livraison */}
      <h2>Nos Services de Livraison</h2>
      <Delivery />

      {/* Formulaire de Commande */}
      <OrderForm />
    </div>
  );
};

export default App;
