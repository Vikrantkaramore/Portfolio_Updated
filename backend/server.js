const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
const localOrigins = ['http://localhost:8080', 'http://localhost:5173', 'http://localhost:3000'];
const envOrigins = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const allowedOrigins = [...new Set([...localOrigins, ...envOrigins])];

app.use(
  cors({
    // If CORS_ORIGINS is set, only allow those origins (plus localhost for dev).
    // Otherwise, allow any origin (reflect back request origin) so deployed frontends can reach the API.
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (envOrigins.length === 0) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`CORS blocked origin: ${origin}`));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false,
  })
);
app.use(express.json());

// Create transporter (configure with your email service)
const createTransporter = () => {
  // Check if using Ethereal (testing) or Gmail (production)
  const isEthereal = process.env.EMAIL_USER && process.env.EMAIL_USER.includes('ethereal.email');
  
  if (isEthereal) {
    // Ethereal configuration for testing
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  } else {
    // Gmail configuration for production
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: 'All fields are required',
      });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.status(500).json({
        error: 'Server email is not configured',
        details: 'Missing EMAIL_USER and/or EMAIL_PASS environment variables',
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER, // Where you want to receive emails
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p><strong>Reply-to:</strong> ${email}</p>
            <p><strong>Sent:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log(`Email sent to: ${process.env.RECIPIENT_EMAIL}`);
    
    // If using Ethereal, provide preview URL
    if (process.env.EMAIL_USER && process.env.EMAIL_USER.includes('ethereal.email')) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      console.log('Preview URL (Ethereal):', previewUrl);
      console.log('View your test email at: https://ethereal.email');
    }

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      error: 'Failed to send email',
      details: error.message,
    });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'Portfolio Email API',
    status: 'running',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      contact: '/api/contact (POST)'
    },
    message: 'Backend server is running. Use /api/health or /api/contact endpoints.'
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
});
