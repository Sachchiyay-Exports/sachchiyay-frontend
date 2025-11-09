// src/components/InquiryForm.jsx
import React from 'react';

// NOTE: Paste your actual Google Form Embed URL here
const GOOGLE_FORM_URL = https://forms.gle/vm26sTt4ExFc7cYN6'; 

const InquiryForm = () => {
    
    // The previous form submission logic is completely removed.

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
            {/* END CRITICAL FIX */}
            
        </section>
    );
};

export default InquiryForm;
