// src/components/Products.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal'; 

// CRITICAL: PASTE YOUR ACTUAL GOOGLE FORM URL HERE!
const GOOGLE_FORM_URL = 'https://forms.gle/vm26sTt4ExFc7cYN6'; // Sharing link is okay here as it opens in a new tab

const productData = [
  { name: "Tumeric Powder", image: "image/products/tumeric.jpg", description: "Rich golden color with high curcumin content, perfect for enhancing flavor and health benefits." },
  { name: "Chilli Powder", image: "image/products/chillipowder.jpg", description: "Fiery red chillies, sun-dried and ground to perfection, ensuring purity and authentic aroma." },
  { name: "Garlic Powder", image: "image/products/garlic.jpg", description: "Finely ground powder, a convenient and potent substitute for fresh garlic in any cuisine." },
];

const inquiryButtonStyle = {
    backgroundColor: '#c99e43', 
    color: '#4A2613', 
    padding: '8px 15px',
    borderRadius: '6px', 
    border: 'none',
    fontSize: '14px',
    fontWeight: '600', 
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    flex: 1, 
    minWidth: '100px',
};

const Products = () => {
  const navigate = useNavigate(); 
  // State for the GENERAL Inquiry Modal (if used via Navbar link)
  const [isGeneralModalOpen, setIsGeneralModalOpen] = useState(false); 

  // const openGeneralModal = () => setIsGeneralModalOpen(true);
  const closeGeneralModal = () => setIsGeneralModalOpen(false);

  // CRITICAL FIX: Direct Redirect Handler for Product Inquiry Button
  const handleInquiryRedirect = (productName) => {
    // Opens the Google Form in a new window/tab
    window.open(GOOGLE_FORM_URL, '_blank');
  };

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
              // Removed onClick={() => openProductDetailsModal(product)} from the card 
              // to simplify, as it caused conflict with the button clicks.
            >
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <div className="card-actions" onClick={(e) => e.stopPropagation()}> 
                
                {/* 1. Google Form Redirect Button */}
                <button 
                    style={inquiryButtonStyle}
                    onClick={() => handleInquiryRedirect(product.name)}
                >
                    Inquiry
                </button>
                
                {/* 2. Specific WhatsApp Link */}
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-whatsapp"
                  style={{...inquiryButtonStyle, backgroundColor: '#25D366', color: 'white'}}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="view-all-container">
        <button className="btn-primary" onClick={handleViewAll}>View All</button> 
      </div>

      {/* General Inquiry Modal (Used for the old 'Inquiry' button from the menu) */}
      <Modal isOpen={isGeneralModalOpen} onClose={closeGeneralModal} />
      
    </section>
  );
};

export default Products;
