# Email Setup Guide

This portfolio now uses Nodemailer instead of Supabase for handling contact form submissions. Follow these steps to set up email functionality:

## Prerequisites

1. A Gmail account (or another email service provider)
2. An App Password for Gmail (not your regular password)

## Setup Instructions

### 1. Create Environment File

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and configure your email settings:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   PORT=3001
   ```

### 2. Gmail App Password Setup

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. At the bottom of the page, select "App passwords"
4. Select "Mail" and your device
5. Google will generate a 16-character password
6. Use this password in your `.env` file as `EMAIL_PASS`

**Important:** Use the App Password, not your regular Gmail password!

### 3. Alternative Email Services

If you don't want to use Gmail, you can configure other email services by modifying the `createTransporter` function in `server/index.js`:

#### Outlook/Hotmail
```javascript
return nodemailer.createTransporter({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

#### Custom SMTP
```javascript
return nodemailer.createTransporter({
  host: 'your-smtp-host.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## Running the Application

### Development Mode

To run both the frontend and backend simultaneously:
```bash
npm run dev:full
```

Or run them separately:

Frontend only:
```bash
npm run dev
```

Backend only:
```bash
npm run server:dev
```

### Production Mode

Build the frontend:
```bash
npm run build
```

Run the backend:
```bash
npm run server
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `EMAIL_USER` | Your email address | Required |
| `EMAIL_PASS` | Your email password/app password | Required |
| `RECIPIENT_EMAIL` | Where to receive contact emails | Uses EMAIL_USER |
| `PORT` | Server port | 3001 |
| `VITE_API_URL` | Frontend API URL | http://localhost:3001 |

## Troubleshooting

### Common Issues

1. **"Invalid login"** error:
   - Make sure you're using an App Password for Gmail
   - Enable 2-factor authentication first
   - Double-check your EMAIL_USER and EMAIL_PASS

2. **CORS errors**:
   - Make sure the server is running on port 3001
   - Check that VITE_API_URL points to the correct server URL

3. **Port already in use**:
   - Change the PORT in your .env file
   - Update VITE_API_URL accordingly

### Testing

You can test the email service by:

1. Starting the server: `npm run server:dev`
2. Visiting: `http://localhost:3001/api/health`
3. You should see: `{"status":"Server is running!"}`

## Security Notes

- Never commit your `.env` file to version control
- Use App Passwords instead of regular passwords
- Consider using environment-specific configurations for production
- For production, use a proper email service like SendGrid, AWS SES, or similar

## Deployment

For production deployment:

1. Set environment variables on your hosting platform
2. Make sure to update `VITE_API_URL` to point to your production server
3. Consider using a dedicated email service for better deliverability
4. Enable HTTPS in production