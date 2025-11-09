// src/components/Products.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal'; 
// import ProductDetailsModal from './ProductDetailsModal'; // Assuming this component exists

const productData = [
  { name: "Tumeric Powder", image: "image/products/tumeric.jpg", description: "Rich golden color with high curcumin content, perfect for enhancing flavor and health benefits." },
  { name: "Chilli Powder", image: "image/products/chillipowder.jpg", description: "Fiery red chillies, sun-dried and ground to perfection, ensuring purity and authentic aroma." },
  { name: "Garlic Powder", image: "image/products/garlic.jpg", description: "Finely ground powder, a convenient and potent substitute for fresh garlic in any cuisine." },
];

// Define the style object for the Inquiry button outside the component 
// (or inside, but outside the render loop for performance)
const inquiryButtonStyle = {
    // Background Color (The golden/mustard hue from the image)
    backgroundColor: '#c99e43', 
    // Text Color (Dark brown/black for contrast)
    color: '#4A2613', 
    // Padding and size
    padding: '8px 15px', // Slightly smaller than View All
    // Rounded Corners
    borderRadius: '6px', 
    // Remove default border
    border: 'none',
    // Font styling
    fontSize: '14px', // Slightly smaller font
    fontWeight: '600', 
    // Cursor
    cursor: 'pointer',
    // Box Shadow
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    // Ensures the button takes up space in the flex container
    flex: 1, 
    minWidth: '100px', // Ensures it looks decent
};

const Products = () => {
  const navigate = useNavigate(); 
  const [isGeneralModalOpen, setIsGeneralModalOpen] = useState(false); // State for the GENERAL Inquiry Modal
  // const [selectedProduct, setSelectedProduct] = useState(null); // State for the Product Details Modal

  // const openGeneralModal = () => setIsGeneralModalOpen(true);
  const closeGeneralModal = () => setIsGeneralModalOpen(false);
  
  // Handlers for the new Product Details Modal
  const openProductDetailsModal = (product) => {
      // setSelectedProduct(product);
  }
  // const closeProductDetailsModal = () => {
      // setSelectedProduct(null);
  // }

  // Handler for "View All" button
  const handleViewAll = () => {
      navigate('/products'); 
  };
  
  return (
    <section className="products" id="products-section"> 
      <h2>Products</h2>
      <hr className="section-divider" />

      <div className="product-list">
        {productData.map((product, index) => {
          
          const whatsappMessage = encodeURIComponent(`Hello Sachchiyay Exports, I am interested in placing an inquiry for **${product.name}**.`);
          const whatsappLink = `https://wa.me/916353395275?text=${whatsappMessage}`;
          
          return (
            <div 
                key={index} 
                className="product-card"
                onClick={() => openProductDetailsModal(product)} // Opens product details on card click
            >
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <div className="card-actions" onClick={(e) => e.stopPropagation()}> 
                {/* 1. Google Form Link (Inquiry Button) */}
                <a href='https://forms.gle/vm26sTt4ExFc7cYN6' target="_blank" rel="noopener noreferrer">
                    <button style={inquiryButtonStyle}>Inquiry</button> {/* <-- Style applied here */}
                </a>
                {/* 2. Specific WhatsApp Link */}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp</a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="view-all-container">
        {/* Keeping the class name for 'View All' as it likely relies on external CSS for hover/active states */}
        <button className="btn-primary" onClick={handleViewAll}>View All</button> 
      </div>

      {/* 1. General Inquiry Modal (Opened by button click) */}
      <Modal isOpen={isGeneralModalOpen} onClose={closeGeneralModal} />
      
      {/* 2. Product Details Modal (Opened by card click) */}
      {/* <ProductDetailsModal 
          isOpen={!!selectedProduct} 
          onClose={closeProductDetailsModal} 
          product={selectedProduct} 
          openGeneralModal={openGeneralModal} 
      /> */}
    </section>
  );
};

export default Products;
