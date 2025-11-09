// // src/components/ProductDetailsModal.jsx
// import React from 'react';

// // CRITICAL: PASTE YOUR ACTUAL GOOGLE FORM URL HERE!
// const GOOGLE_FORM_URL = 'https://forms.gle/vm26sTt4ExFc7cYN6'; 

// const ProductDetailsModal = ({ isOpen, onClose, product }) => { 
//     if (!isOpen || !product) {
//         return null;
//     }
    
//     // WhatsApp message setup
//     const whatsappMessage = encodeURIComponent(`Hello Sachchiyay Exports, I am interested in your product: ${product.name}.`);
//     const whatsappLink = `https://wa.me/916353395275?text=${whatsappMessage}`;

//     // CRITICAL FIX: Handler redirects directly to Google Form
//     const handleInquiryRedirect = () => {
//         onClose(); 
//         window.open(GOOGLE_FORM_URL, '_blank'); 
//     }

//     return (
//         <div id="productDetailsModal" className="modal" style={{ display: 'flex' }}>
//             <div 
//                 className="modal-content" 
//                 style={{ 
//                     maxWidth: '850px', 
//                     padding: '0', 
//                     backgroundColor: '#fff', 
//                     zIndex: 1001 
//                 }}
//             >
                
//                 <div className="modal-header" style={{backgroundColor: '#6B3E26'}}>
//                     <h3>Product Details: {product.name}</h3>
//                     <button className="close-button" onClick={onClose}>&times;</button>
//                 </div>
                
//                 <div 
//                     style={{ 
//                         display: 'flex', 
//                         flexDirection: 'row', 
//                         padding: '20px', 
//                         gap: '20px', 
//                         alignItems: 'flex-start' 
//                     }}
//                 >
                    
//                     {/* Image Container */}
//                     <div className="product-modal-image" style={{ width: '40%', flexShrink: 0 }}>
//                         <img 
//                             src={product.image} 
//                             alt={product.name} 
//                             style={{ 
//                                 width: '100%', 
//                                 maxHeight: '300px', 
//                                 height: 'auto', 
//                                 borderRadius: '8px', 
//                                 objectFit: 'cover' 
//                             }} 
//                         />
//                     </div>
                    
//                     {/* Text and Button Container */}
//                     <div className="product-modal-info" style={{ width: '60%' }}>
//                         <h4 style={{ color: '#4A2613', fontSize: '1.4em', marginBottom: '10px', marginTop: '5px' }}>{product.name}</h4> 
                        
//                         <p style={{ margin: '15px 0 25px 0', fontSize: '1em', color: '#3a2e28' }}>
//                             {product.description || "Premium quality spice sourced directly from Indian farms, ensuring purity and authentic aroma."}
//                         </p>

//                         <div 
//                             className="card-actions" 
//                             onClick={(e) => e.stopPropagation()} 
//                             style={{ 
//                                 display: 'flex', 
//                                 justifyContent: 'flex-start', 
//                                 borderTop: 'none', 
//                                 padding: '0', 
//                                 gap: '10px',
//                                 backgroundColor: 'transparent',
//                                 zIndex: 10 
//                             }}
//                         >
//                             {/* Inquiry button now redirects */}
//                             <button 
//                                 className="btn-inquiry" 
//                                 onClick={handleInquiryRedirect}
//                                 // Inline styles for button omitted for brevity but should be defined in CSS
//                             >
//                                 Inquiry
//                             </button> 
                            
//                             {/* WhatsApp link */}
//                             <a 
//                                 href={whatsappLink} 
//                                 target="_blank" 
//                                 rel="noopener noreferrer" 
//                                 className="btn-whatsapp"
//                                 // Inline styles for button omitted for brevity but should be defined in CSS
//                             >
//                                 WhatsApp
//                             </a>
//                         </div>
//                     </div>
//                 </div>
                
//             </div>
//         </div>
//     );
// };

// export default ProductDetailsModal;