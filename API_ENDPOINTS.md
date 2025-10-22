# 📚 Portfolio Backend API Documentation

Your backend server is running successfully! Here are all the available endpoints:

## 🌐 Server Information

**Base URL**: `http://localhost:3001`

## 📋 Available Endpoints

### 1. **Root Endpoint** - `GET /`
Shows API information and available endpoints.

**Response:**
```json
{
  "name": "Portfolio Email API",
  "status": "running",
  "version": "1.0.0",
  "endpoints": {
    "health": "/api/health",
    "contact": "/api/contact (POST)"
  },
  "message": "Backend server is running. Use /api/health or /api/contact endpoints."
}
```

### 2. **Health Check** - `GET /api/health`
Simple health check to verify server is running.

**Response:**
```json
{
  "status": "Server is running!"
}
```

### 3. **Contact Form** - `POST /api/contact`
Sends contact form emails via Nodemailer.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Hello from portfolio",
  "message": "Your message here"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Email sent successfully",
  "previewUrl": "https://ethereal.email/message/[message-id]"
}
```

**Error Response:**
```json
{
  "error": "All fields are required"
}
```

## 🧪 Testing the API

### Using Browser
- **Root**: http://localhost:3001/
- **Health**: http://localhost:3001/api/health

### Using PowerShell
```powershell
# Test health endpoint
Invoke-RestMethod -Uri "http://localhost:3001/api/health"

# Test contact endpoint
$body = @{
    name = "Test User"
    email = "test@example.com"
    subject = "Test Subject"
    message = "Test message"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3001/api/contact" -Method POST -Body $body -ContentType "application/json"
```

### Using the Test Page
Open `test-api.html` in your browser for a graphical interface to test all endpoints.

## 🔧 CORS Configuration

The server accepts requests from:
- `http://localhost:8080` (Vite dev server)
- `http://localhost:5173` (Alternative Vite port)
- `http://localhost:3000` (Common React dev port)

## 📧 Email Configuration

- **Service**: Ethereal Email (for testing)
- **SMTP**: `smtp.ethereal.email:587`
- **Preview URLs**: Available in development mode
- **Email Template**: HTML formatted with professional styling

## 🚨 Error Handling

The API handles these error scenarios:
- Missing required fields (400 Bad Request)
- Email sending failures (500 Internal Server Error)
- CORS violations (handled automatically)
- Invalid JSON requests (handled by Express)

## 💡 Pro Tips

1. **Always check the root endpoint** (`/`) if you get "Cannot GET /" - it now shows useful info
2. **Use preview URLs** during development to see sent emails
3. **Check server logs** in the terminal for detailed error information
4. **Test with the HTML test page** for easy endpoint testing