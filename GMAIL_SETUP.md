# 📧 Gmail Setup Instructions

Your portfolio is now configured to send emails to **vikrantkaramore@gmail.com**. You need to set up a Gmail App Password to make it work.

## 🔑 Step 1: Enable 2-Factor Authentication

1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** on the left sidebar
3. Under "Signing in to Google," click **2-Step Verification**
4. Follow the steps to enable 2-factor authentication (if not already enabled)

## 🔐 Step 2: Generate App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** on the left sidebar
3. Under "Signing in to Google," click **2-Step Verification**
4. At the bottom, click **App passwords**
5. Select **Mail** and **Other (custom name)**
6. Type "Portfolio Contact Form" as the name
7. Click **Generate**
8. Google will show you a 16-character password (like: `abcd efgh ijkl mnop`)

## ⚙️ Step 3: Update Your Environment File

1. Open the `.env` file in your project root
2. Replace `your-gmail-app-password-here` with the App Password from step 2:

```env
# Gmail Configuration for Production
EMAIL_USER=vikrantkaramore@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
RECIPIENT_EMAIL=vikrantkaramore@gmail.com
```

**Important:** Use the App Password (16 characters), NOT your regular Gmail password!

## 🧪 Step 4: Test the Configuration

1. **Restart the backend server:**
   ```bash
   # Kill existing server
   taskkill /F /IM node.exe
   
   # Start fresh
   npm run server
   ```

2. **Test with PowerShell:**
   ```powershell
   $testEmail = @{
       name = "Test User"
       email = "test@example.com"
       subject = "Gmail Test"
       message = "Testing Gmail integration"
   } | ConvertTo-Json
   
   Invoke-RestMethod -Uri "http://localhost:3001/api/contact" -Method POST -Body $testEmail -ContentType "application/json"
   ```

3. **Check your Gmail inbox** - you should receive a test email!

## 🚀 Step 5: Start Your Portfolio

```bash
# Terminal 1: Backend
npm run server

# Terminal 2: Frontend
npm run dev
```

Now when someone fills out your contact form at http://localhost:8080, you'll receive the email at **vikrantkaramore@gmail.com**!

## 🔍 Troubleshooting

### "Invalid login" error:
- Make sure you're using the App Password, not your regular password
- Ensure 2-factor authentication is enabled
- Double-check the EMAIL_USER and EMAIL_PASS in your `.env`

### "Less secure app access" error:
- This shouldn't happen with App Passwords, but if it does:
- Go to https://myaccount.google.com/lesssecureapps
- Turn ON "Allow less secure apps" (not recommended, use App Password instead)

### Email not received:
- Check your Gmail spam folder
- Verify the RECIPIENT_EMAIL in `.env` is correct
- Check the server terminal for error messages

## 📧 Email Features

Your contact form emails will include:
- ✅ Professional HTML formatting
- ✅ Sender's name and email
- ✅ Subject line from the form
- ✅ Full message content
- ✅ Reply-to field (so you can reply directly to the sender)
- ✅ Timestamp of when the message was sent

## 🎉 You're All Set!

Once you've completed these steps, your portfolio contact form will send real emails directly to your Gmail inbox!

---

**Security Note:** Never share your App Password publicly. The `.env` file is already in `.gitignore` to prevent accidentally committing it to version control.