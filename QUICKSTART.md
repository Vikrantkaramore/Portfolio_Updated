# 🚀 Quick Start Guide - Ethereal Email Setup

Your portfolio is now configured with **Ethereal Email** for testing the contact form! 

## ✅ What's Already Set Up

- ✅ Nodemailer integrated with Ethereal Email
- ✅ Express server ready to handle contact forms
- ✅ Frontend contact component updated
- ✅ Environment variables configured
- ✅ Email functionality tested and working

## 🎯 How to Use

### 1. Start the Development Server

Run both frontend and backend:
```bash
npm run dev:full
```

Or run them separately in two terminals:
```bash
# Terminal 1 - Backend
npm run server:dev

# Terminal 2 - Frontend  
npm run dev
```

### 2. Test the Contact Form

1. Open your browser to `http://localhost:5173` (or the Vite dev server URL)
2. Navigate to the Contact section
3. Fill out and submit the contact form
4. Check the terminal running the server - you'll see:
   - ✅ "Email sent successfully"
   - 🔗 A preview URL like: `https://ethereal.email/message/[message-id]`

### 3. View Your Emails

Click the preview URL from the terminal to see your email in Ethereal Email's web interface!

## 📧 About Ethereal Email

**Ethereal Email** is a fake SMTP service perfect for development:
- ✅ Emails never actually get delivered (safe for testing)
- ✅ All emails are captured and viewable online
- ✅ No setup required - works out of the box
- ✅ Messages are kept for 15 days
- ✅ Free to use

**Current Ethereal Account:**
- **Email:** lorna79@ethereal.email
- **Password:** rT8gT1QnzDyNxHxrEs
- **Inbox:** Visit https://lorna79@ethereal.email to view emails

## 🔧 Quick Test

Want to test email functionality right now?
```bash
node test-email.cjs
```

This will send a test email and show you the preview URL!

## 🚀 Ready for Production?

When you're ready to use real email:

1. Update `.env` with your real SMTP credentials:
```env
EMAIL_USER=your-real-email@gmail.com
EMAIL_PASS=your-app-password
```

2. Update `server/index.js` to use Gmail or your preferred email service:
```javascript
// For Gmail
return nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend only |
| `npm run server` | Start backend only |
| `npm run server:dev` | Start backend with nodemon |
| `npm run dev:full` | Start both frontend and backend |
| `node test-email.cjs` | Test email functionality |

## 🎉 You're All Set!

Your portfolio contact form is now fully functional with Ethereal Email testing. Happy coding! 

---

**Preview URL from last test:** https://ethereal.email/message/aO6W1kHLt3QrNf46aO6ZxfCm3db-HvyuAAAAAuKILgD5BJbF2f7I.hfyTp4