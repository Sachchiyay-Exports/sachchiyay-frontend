// src/components/InquiryForm.jsx
import React from 'react';

const InquiryForm = () => {
    
    // **FIX 1: Define the API URL using the Render backend service URL.**
    // We append the endpoint /api/inquiries to this base URL later.
    // The safest way is to use an environment variable set in Vercel's Dashboard:
    const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://sachchiyay-api.onrender.com';

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
        
        // **CRITICAL FIX 2: Construct the complete API endpoint URL**
        // Appending /api/inquiries to the base URL to match your Express route.
        const endpointUrl = `${API_BASE_URL}/api/inquiries`;

        try {
            const response = await fetch(endpointUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                // Attempt to read the server error response for better debugging
                const errorText = await response.text();
                let errorMessage = `Server responded with status: ${response.status}.`;
                try {
                    const errorData = JSON.parse(errorText);
                    errorMessage = errorData.message || errorMessage;
                } catch {
                    // If the response is not JSON (e.g., HTML 404 page), use a simpler message
                    errorMessage = `Backend is inaccessible. Check your API URL or CORS setup.`;
                }
                throw new Error(errorMessage);
            }

            // Successfully received response
            const result = await response.json();
            alert(result.message || "Inquiry submitted successfully! Email notification sent.");
            
            event.target.reset(); // Clear the form fields

        } catch (error) {
            console.error('Submission Error:', error);
            // Display a user-friendly alert
            alert(`Failed to send inquiry: ${error.message}.`);
        }
    };

    return (
        <section className="inquiry-form" id="inquiry-form-section">
            <h2>Inquiry Form</h2>
            <hr className="section-divider" />
            <form onSubmit={handleSubmit}>
                <div className="form-group-half">
                    {/* Name attributes MUST match keys in handleSubmit: fullName, email, phone, subject, message */}
                    <input type="text" placeholder="Full Name*" name="fullName" required />
                    <input 
                        type="email" 
                        placeholder="Email*" 
                        name="email" 
                        required 
                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" // HTML5 validation
                        title="Must be a valid email address."
                    />
                </div>
                <div className="form-group-half">
                    <input 
                        type="tel" 
                        placeholder="Phone*" 
                        name="phone" 
                        required 
                        pattern="[0-9]{10,12}" // HTML5 validation for phone number
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