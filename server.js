const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose'); // Assuming this is needed for MongoDB connection
const sgMail = require('@sendgrid/mail'); // SendGrid Mailer

// Load environment variables (from standard .env file)
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- SendGrid Configuration ---
// This uses the SENDGRID_API_KEY environment variable.
if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log("SendGrid API Key successfully loaded.");
} else {
    // This will now crash the application if the key is missing, ensuring fast feedback.
    console.error("SENDGRID_API_KEY is NOT set. Email sending will fail.");
}

// Middleware
app.use(cors({
    // Uses FRONTEND_URL to handle CORS for your Vercel site
    origin: ['http://localhost:3000', process.env.FRONTEND_URL], 
    credentials: true,
})); 
app.use(express.json()); // To handle JSON bodies
app.use(express.urlencoded({ extended: true })); // To handle URL-encoded data


// --- Inquiry Submission Route (Using SendGrid) ---
app.post('/api/inquiries', asyncHandler(async (req, res) => {
    // Data received from the React InquiryForm component
    const { name, email, contactNumber, subject, remark } = req.body;

    // Input Validation
    if (!name || !email || !contactNumber) {
        res.status(400);
        throw new Error('Missing required fields: Name, Email, and Contact Number.');
    }

    const msg = {
        // Use the verified sender email from your Render variables
        to: process.env.RECIPIENT_EMAIL || 'sachchiyayexports@gmail.com', 
        from: process.env.EMAIL_USER, // Your verified sender email
        subject: `[Sachchiyay Inquiry] New Client: ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${contactNumber || 'N/A'}</p>
                <hr>
                <h3 style="color: #1f2937;">Message Details:</h3>
                <p style="white-space: pre-wrap;">${remark}</p>
            </div>
        `,
    };

    // Send the email and wait for the API response
    // The previous error was crashing the server here because the package wasn't installed.
    await sgMail.send(msg); 
    console.log('Email sent successfully via SendGrid API!');


    res.status(200).json({ 
        message: "Inquiry submitted successfully! Email notification sent." 
    });
}));

// Default API route for health checks
app.get('/', (req, res) => res.send('Sachchiyay Exports API is running and ready for inquiries...'));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
