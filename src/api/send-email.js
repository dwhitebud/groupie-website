// src/api/send-email.js
const emailjs = require('@emailjs/browser');

/**
 * Serverless function to send emails from the contact form
 * 
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get environment variables
    const SERVICE_ID = process.env.SERVICE_ID;
    const TEMPLATE_ID = process.env.TEMPLATE_ID;
    const PUBLIC_KEY = process.env.PUBLIC_KEY;

    // Check if required credentials are available
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('Missing EmailJS credentials:', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
      return res.status(500).json({ error: 'Server configuration error: EmailJS credentials are missing' });
    }

    // Get form data from request body
    const { name, email, instagram, destination, message } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    console.log('Sending email with EmailJS:', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY: PUBLIC_KEY?.substring(0, 3) + '...' });

    // Prepare template parameters
    const templateParams = {
      to_email: 'hello@devandbre.com',
      from_name: name,
      from_email: email,
      instagram: instagram || 'Not provided',
      destination: destination || 'Not specified',
      message: message || 'No additional message'
    };

    // Initialize EmailJS with the Public Key from environment variables
    emailjs.init(PUBLIC_KEY);

    // Send email using EmailJS
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    console.log('EmailJS response:', response);
    
    // Return success response
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error.message || error);
    return res.status(500).json({ error: 'Failed to send email: ' + (error.message || 'Unknown error') });
  }
}
