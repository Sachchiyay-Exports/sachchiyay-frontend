// // src/components/Products.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Modal from './Modal'; 
// import ProductDetailsModal from './ProductDetailsModal'; // Assuming this component exists

// const productData = [
//   { name: "Tumeric Powder", image: "image/products/tumeric.jpg", description: "Rich golden color with high curcumin content, perfect for enhancing flavor and health benefits." },
//   { name: "Chilli Powder", image: "image/products/chillipowder.jpg", description: "Fiery red chillies, sun-dried and ground to perfection, ensuring purity and authentic aroma." },
//   { name: "Garlic Powder", image: "image/products/garlic.jpg", description: "Finely ground powder, a convenient and potent substitute for fresh garlic in any cuisine." },
// ];

// const Products = () => {
//   const navigate = useNavigate(); 
//   const [isGeneralModalOpen, setIsGeneralModalOpen] = useState(false); // State for the GENERAL Inquiry Modal
//   const [selectedProduct, setSelectedProduct] = useState(null); // State for the Product Details Modal

//   const openGeneralModal = () => setIsGeneralModalOpen(true);
//   const closeGeneralModal = () => setIsGeneralModalOpen(false);
  
//   // Handlers for the new Product Details Modal
//   const openProductDetailsModal = (product) => {
//       setSelectedProduct(product);
//   }
//   const closeProductDetailsModal = () => {
//       setSelectedProduct(null);
//   }

//   // Handler for "View All" button
//   const handleViewAll = () => {
//       navigate('/products'); 
//   };

//   return (
//     <section className="products" id="products-section"> 
//       <h2>Products</h2>
//       <hr className="section-divider" />

//       <div className="product-list">
//         {productData.map((product, index) => {
          
//           // FIX: Define the WhatsApp message and link INSIDE the loop
//           // This link is for the general Inquiry/WhatsApp button shown on the card
//           const whatsappMessage = encodeURIComponent(`Hello Sachchiyay Exports, I am interested in your products and would like to place an inquiry.`);
//           const whatsappLink = `https://wa.me/916353395275?text=${whatsappMessage}`;

//           return (
//             <div 
//                 key={index} 
//                 className="product-card"
//                 onClick={() => openProductDetailsModal(product)} // Opens product details on card click
//             >
//               <img src={product.image} alt={product.name} />
//               <h4>{product.name}</h4>
//               <div className="card-actions" onClick={(e) => e.stopPropagation()}> {/* Prevents card click when buttons are pressed */}
//                 <button className="btn-inquiry" onClick={openGeneralModal}>Inquiry</button>
//                 <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp</a>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="view-all-container">
//         <button className="btn-primary" onClick={handleViewAll}>View All</button>
//       </div>

//       {/* 1. General Inquiry Modal (Opened by button click) */}
//       <Modal isOpen={isGeneralModalOpen} onClose={closeGeneralModal} />
      
//       {/* 2. Product Details Modal (Opened by card click) */}
//       <ProductDetailsModal 
//           isOpen={!!selectedProduct} 
//           onClose={closeProductDetailsModal} 
//           product={selectedProduct} 
//           openGeneralModal={openGeneralModal} // Passes the function needed for the button inside the modal
//       />
//     </section>
//   );
// };

// export default Products;
// src/components/Products.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal'; // Assuming Modal handles the general inquiry form

const productData = [
  { name: "Tumeric Powder", image: "image/products/tumeric.jpg", description: "Rich golden color with high curcumin content, perfect for enhancing flavor and health benefits." },
  { name: "Chilli Powder", image: "image/products/chillipowder.jpg", description: "Fiery red chillies, sun-dried and ground to perfection, ensuring purity and authentic aroma." },
  { name: "Garlic Powder", image: "image/products/garlic.jpg", description: "Finely ground powder, a convenient and potent substitute for fresh garlic in any cuisine." },
];

// Define the style object for the Inquiry button
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
  // We remove the selectedProduct state since the card click should open the General Modal or redirect.
  const [isGeneralModalOpen, setIsGeneralModalOpen] = useState(false); 

  const openGeneralModal = () => setIsGeneralModalOpen(true);
  const closeGeneralModal = () => setIsGeneralModalOpen(false);
  
  // Handlers for the "Inquiry" button redirect
  const handleInquiryRedirect = (productName) => {
    // CRITICAL: Ensure this is the correct URL for the final user form.
    const baseUrl = 'https://forms.gle/vm26sTt4ExFc7cYN6'; 
    
    // Optional: Pre-fill the Google Form link based on the product if possible (requires Form field IDs)
    // For now, we redirect to the general link.
    window.open(baseUrl, '_blank');
  };
  
  // Handler for "View All" button
  const handleViewAll = () => {
    navigate('/products'); 
  };
  
  // CRITICAL FIX: Removed openProductDetailsModal and closeProductDetailsModal
  // Card click will now redirect or open the general modal.

  return (
    <section className="products" id="products-section"> 
      <h2>Products</h2>
      <hr className="section-divider" />

      <div className="product-list">
        {productData.map((product, index) => {
          
          // FIX: Corrected template literal for WhatsApp message syntax
          const whatsappMessage = encodeURIComponent(`Hello Sachchiyay Exports, I am interested in placing an inquiry for **${product.name}**.`);
          const whatsappLink = `https://wa.me/916353395275?text=${whatsappMessage}`;
          
          return (
            <div 
              key={index} 
              className="product-card"
              // Removed card click handler to avoid modal confusion
            >
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <div className="card-actions" onClick={(e) => e.stopPropagation()}> 
                
                {/* 1. Google Form Redirect (Inquiry Button) */}
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
                  style={{...inquiryButtonStyle, backgroundColor: '#25D366', color: 'white'}} // Inline style overwrite for WhatsApp
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

      {/* General Inquiry Modal (Used for separate Inquiry link/button on Navbar) */}
      <Modal isOpen={isGeneralModalOpen} onClose={closeGeneralModal} />
      
    </section>
  );
};

export default Products;