// src/components/Modal.jsx
import React from 'react';

// PASTE YOUR ACTUAL GOOGLE FORM EMBED URL HERE!
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSftGnFk00iKwP9XKvQqDoYwSwL1VhOFy4_dy8A9v9dGpwSQUA/viewform?embedded=true'; 

const Modal = ({ isOpen, closeModal, product }) => {
    if (!isOpen) return null;

    const currentProduct = product || { name: 'Product Inquiry', description: 'Please fill out the form below.' };

    return (
        <div className="modal" style={{ display: isOpen ? 'flex' : 'none' }}>
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Product Inquiry: {currentProduct.name}</h3>
                    <button className="close-button" onClick={closeModal}>&times;</button>
                </div>
                
                <div style={{ padding: '20px' }}>
                    <h4>Product: {currentProduct.name}</h4>
                    <p>{currentProduct.description}</p>
                </div>

                <div className="modal-header" style={{ backgroundColor: '#4A2613', color: '#fff', borderTop: '1px solid #E2B04A' }}>
                    <h3>Submit Inquiry via Google Forms</h3>
                </div>

                {/* CRITICAL FIX: EMBED GOOGLE FORM VIA IFRAME IN MODAL */}
                <div className="modal-form-container" style={{ padding: '20px' }}>
                    <iframe 
                        src={GOOGLE_FORM_URL} 
                        width="100%" 
                        height="400" 
                        frameBorder="0" 
                        marginHeight="0" 
                        marginWidth="0"
                        title={`Inquiry for ${currentProduct.name}`}
                        style={{ border: 'none' }}
                    >
                        Loading...
                    </iframe>
                </div>
                {/* END CRITICAL FIX */}

                <div className="modal-footer" style={{ justifyContent: 'center' }}>
                    <button onClick={closeModal} className="btn-cancel">Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;