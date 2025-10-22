Write-Host "🚀 Starting Portfolio Email System..." -ForegroundColor Green
Write-Host ""

# Kill any existing Node processes
Write-Host "🧹 Cleaning up existing processes..." -ForegroundColor Yellow
try {
    Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue
} catch {}

Start-Sleep -Seconds 2

# Start backend server
Write-Host "🔧 Starting backend server..." -ForegroundColor Blue
Start-Process -FilePath "powershell" -ArgumentList "-NoExit", "-Command", "cd '$PWD'; Write-Host '🔧 Backend Server' -ForegroundColor Blue; npm run server"

Start-Sleep -Seconds 8

# Test backend
Write-Host "🔍 Testing backend connection..." -ForegroundColor Magenta
try {
    $healthResponse = Invoke-RestMethod -Uri "http://localhost:3001/api/health" -Method GET -TimeoutSec 5
    Write-Host "✅ Backend is running: $($healthResponse.status)" -ForegroundColor Green
} catch {
    Write-Host "❌ Backend connection failed: $_" -ForegroundColor Red
    Write-Host "Please check if the backend server started properly." -ForegroundColor Yellow
    exit 1
}

# Test email functionality
Write-Host "📧 Testing email functionality..." -ForegroundColor Magenta
$testData = @{
    name = "Test User"
    email = "test@example.com"
    subject = "Portfolio Test Email"
    message = "This is a test email to verify the contact form is working properly."
} | ConvertTo-Json

try {
    $emailResponse = Invoke-RestMethod -Uri "http://localhost:3001/api/contact" -Method POST -Body $testData -ContentType "application/json" -TimeoutSec 10
    Write-Host "✅ Email sent successfully!" -ForegroundColor Green
    if ($emailResponse.previewUrl) {
        Write-Host "🔗 Email preview: $($emailResponse.previewUrl)" -ForegroundColor Cyan
        Write-Host "   Click the link above to view your email!" -ForegroundColor Cyan
    }
} catch {
    Write-Host "❌ Email test failed: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "🌐 Starting frontend server..." -ForegroundColor Blue
Start-Process -FilePath "powershell" -ArgumentList "-NoExit", "-Command", "cd '$PWD'; Write-Host '🌐 Frontend Server' -ForegroundColor Blue; npm run dev"

Write-Host ""
Write-Host "🎉 System is ready!" -ForegroundColor Green
Write-Host "   Frontend: http://localhost:8080" -ForegroundColor Cyan
Write-Host "   Backend:  http://localhost:3001" -ForegroundColor Cyan
Write-Host "   API Test: Open test-api.html in browser" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Yellow
Write-Host "   1. Open http://localhost:8080 in your browser"
Write-Host "   2. Navigate to the Contact section" 
Write-Host "   3. Fill out and submit the contact form"
Write-Host "   4. Check this terminal for email preview links!"
Write-Host ""