# 🔧 Troubleshooting Guide - "Failed to Fetch" Error

If you're getting a "Failed to fetch" error when submitting the contact form, follow these steps:

## ✅ Quick Fix Steps

### 1. **Start Both Servers Properly**

**Option A: Use the batch file (Windows)**
```bash
.\start-dev.bat
```

**Option B: Manual start (2 separate terminals)**
```bash
# Terminal 1 - Backend
npm run server:dev

# Terminal 2 - Frontend  
npm run dev
```

**Option C: Single command (if concurrently works)**
```bash
npm run dev:full
```

### 2. **Verify Servers Are Running**

Open these URLs in your browser:

- **Frontend**: http://localhost:8080
- **Backend Health Check**: http://localhost:3001/api/health

You should see:
- Frontend: Your portfolio website
- Backend: `{"status":"Server is running!"}`

### 3. **Test API Directly**

Open the test file in your browser:
- **API Test Page**: Open `test-api.html` in your browser

This will test both endpoints and show you exactly where the issue is.

### 4. **Check Browser Console**

1. Open your portfolio (http://localhost:8080)
2. Open Developer Tools (F12)
3. Go to the Console tab
4. Submit the contact form
5. Look for debug messages:
   - 🚀 Sending email to: http://localhost:3001/api/contact
   - 📧 Email data: {...}
   - ✅ Response status: 200
   - 📨 Response data: {...}

## 🔍 Common Issues & Solutions

### Issue: "Failed to fetch" / Network Error

**Causes:**
- Backend server not running
- Wrong API URL
- CORS issues
- Firewall blocking requests

**Solutions:**
1. **Check if backend is running:**
   ```bash
   # PowerShell
   Invoke-RestMethod -Uri "http://localhost:3001/api/health"
   ```

2. **Restart backend server:**
   ```bash
   # Kill any existing Node processes
   taskkill /F /IM node.exe
   
   # Start fresh
   npm run server:dev
   ```

3. **Check environment variables:**
   Make sure `.env` contains:
   ```env
   VITE_API_URL=http://localhost:3001
   ```

### Issue: CORS Error

**Error:** "Access to fetch at 'http://localhost:3001/api/contact' from origin 'http://localhost:8080' has been blocked by CORS policy"

**Solution:** The server is already configured with CORS. If you still get this error:
1. Restart the backend server
2. Clear browser cache
3. Try incognito/private browsing mode

### Issue: Port Already in Use

**Error:** "EADDRINUSE: address already in use :::3001"

**Solution:**
```bash
# Find and kill process using port 3001
netstat -ano | findstr :3001
taskkill /F /PID [PID_NUMBER]

# Or kill all Node processes
taskkill /F /IM node.exe
```

### Issue: Environment Variables Not Loading

**Symptoms:** API calls going to wrong URL

**Solution:**
1. Make sure `.env` file exists in the root directory
2. Restart the frontend server after changing `.env`
3. Check that variables start with `VITE_` for frontend

## 📋 Debug Checklist

Use this checklist to diagnose issues:

- [ ] Backend server running on port 3001
- [ ] Frontend server running on port 8080  
- [ ] Health endpoint responds: http://localhost:3001/api/health
- [ ] `.env` file contains correct `VITE_API_URL`
- [ ] No CORS errors in browser console
- [ ] No firewall blocking localhost connections
- [ ] Browser cache cleared

## 🆘 Still Having Issues?

### Test with curl/PowerShell:
```bash
# Test health endpoint
Invoke-RestMethod -Uri "http://localhost:3001/api/health"

# Test contact endpoint
$body = @{
    name = "Test"
    email = "test@test.com" 
    subject = "Test"
    message = "Test message"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3001/api/contact" -Method POST -Body $body -ContentType "application/json"
```

### Check Network Tab:
1. Open DevTools → Network tab
2. Submit contact form
3. Look for the POST request to `/api/contact`
4. Check status code and response

## 💡 Pro Tips

1. **Always start backend before frontend**
2. **Use the batch file for easy startup**
3. **Check the API test page when in doubt**
4. **Keep both terminal windows open to see logs**
5. **Refresh browser after restarting servers**