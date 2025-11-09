// src/components/InquiryForm.jsx
import React from 'react';

const InquiryForm = () => {
    
    // **CRITICAL FIX 1: Use the correct, hardcoded Render API URL.**
    // We are hardcoding the API base URL here for this solution.
    const API_BASE_URL = 'https://sachchiyay-api.onrender.com';

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        
        // Extract data based on input names from the form
        const data = {
            name: formData.get('fullName'),
            email: formData.get('email'),
            contactNumber: formData.get('phone'),
            subject: formData.get('subject') || 'General Website Inquiry',
            remark: formData.get('message'),
        };
        
        // **CRITICAL FIX 2: Construct the complete API endpoint URL.**
        // Appending /api/inquiries to the base URL to match your Express route (backend/server.js).
        const endpointUrl = `${API_BASE_URL}/api/inquiries`;

        try {
            const response = await fetch(endpointUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                // Handle non-JSON or other server errors gracefully
                const errorText = await response.text();
                let errorMessage = `Server responded with status: ${response.status}.`;
                try {
                    const errorData = JSON.parse(errorText);
                    errorMessage = errorData.message || errorMessage;
                } catch {
                    errorMessage = `Backend error. Check the API URL or CORS settings.`;
                }
                throw new Error(errorMessage);
            }

            // Successful response from API
            const result = await response.json();
            alert(result.message || "Inquiry submitted successfully! Email notification sent.");
            
            event.target.reset(); // Clear the form fields

        } catch (error) {
            console.error('Submission Error:', error);
            alert(`Failed to send inquiry: ${error.message}.`);
        }
    };

    return (
        <section className="inquiry-form" id="inquiry-form-section">
            <h2>Inquiry Form</h2>
            <hr className="section-divider" />
            <form onSubmit={handleSubmit}>
                <div className="form-group-half">
                    <input type="text" placeholder="Full Name*" name="fullName" required />
                    <input 
                        type="email" 
                        placeholder="Email*" 
                        name="email" 
                        required 
                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                        title="Must be a valid email address."
                    />
                </div>
                <div className="form-group-half">
                    <input 
                        type="tel" 
                        placeholder="Phone*" 
                        name="phone" 
                        required 
                        pattern="[0-9]{10,12}"
                        title="Phone number must be 10-12 digits long."
                        maxLength="12"
                    />
                    <input type="text" placeholder="Subject" name="subject" />
                </div>
                <textarea placeholder="Message" name="message" rows="5"></textarea>
                <button type="submit" className="btn-submit">Submit Now</button>
            </form>
        </section>
    );
};

export default InquiryForm;