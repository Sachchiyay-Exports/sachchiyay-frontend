// src/components/InquiryForm.jsx
import React from 'react';

<<<<<<< HEAD
// PASTE YOUR ACTUAL GOOGLE FORM EMBED URL HERE!
const GOOGLE_FORM_URL = 'https://forms.gle/vm26sTt4ExFc7cYN6'; 

const InquiryForm = () => {
=======
// PASTE YOUR GOOGLE FORM EMBED URL HERE!
const GOOGLE_FORM_URL = 'https://forms.gle/vm26sTt4ExFc7cYN6'; 

const InquiryForm = () => {
    
    // The previous form submission logic is completely removed, using the iframe instead.

>>>>>>> 1626fd3dec1bfd4691c08afa1b8ac69b2d471a8f
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
<<<<<<< HEAD
            {/* The old functional form has been removed entirely. */}
=======
            {/* END CRITICAL FIX */}
            
>>>>>>> 1626fd3dec1bfd4691c08afa1b8ac69b2d471a8f
        </section>
    );
};

export default InquiryForm;
