// src/components/InquiryForm.jsx
import React from 'react';

// PASTE YOUR ACTUAL GOOGLE FORM EMBED URL HERE! (Make sure it has ?embedded=true at the end)
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSftGnFk00iKwP9XKvQqDoYwSwL1VhOFy4_dy8A9v9dGpwSQUA/viewform?embedded=true'; 

const InquiryForm = () => {
    return (
        <section className="inquiry-form" id="inquiry-form-section">
            <h2>Inquiry Form</h2>
            <hr className="section-divider" />
            
            {/* CRITICAL FIX: Embed Google Form via iframe */}
            <div className="google-form-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <iframe 
                    src={GOOGLE_FORM_URL} 
                    width="100%" 
                    height="700" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0"
                    title="Sachchiyay Exports Inquiry Form"
                    style={{ border: 'none', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                >
                    Loading...
                </iframe>
            </div>
        </section>
    );
};

export default InquiryForm;