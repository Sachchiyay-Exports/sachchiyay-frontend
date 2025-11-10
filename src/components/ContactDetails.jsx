// src/components/ContactDetails.jsx
import React from 'react';

const ContactDetails = () => {
  return (
    <section className="contact-details">
      <h2>Contact Details</h2>
      <hr className="section-divider" />
      <div className="contact-map-info">
        <div className="map-container">
          <img src="image/address.png" alt="Location on Map"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
        </div>
        <div className="contact-info">
    <h4>Sachchiyay Exports</h4>
    
    <p>
        <i 
            className="fas fa-map-marker-alt" 
            style={{ color: '#4A2613', marginRight: '8px' }} // Added marginRight
        ></i> 
        G-3 DADA BHAI CHAMBERS<br /> SARDAR GANJ ANAND 388001
    </p>
    
    <p className="contact-detail">
        <i 
            className="fas fa-phone-alt" 
            style={{ transform: 'scaleX(-1)', color: '#4A2613', marginRight: '8px' }} // Added marginRight
        ></i> +91 6353395275
    </p>
    
    <p>
        <i 
            className="fas fa-envelope" 
            style={{ color: '#4A2613', marginRight: '8px' }} // Added marginRight
        ></i> 
        sachchiyayexports@gmail.com
    </p>
</div>
      </div>
    </section>
  );
};

export default ContactDetails;
