@echo off
echo Starting Portfolio Development Servers...
echo.

echo Starting Backend Server (Port 3001)...
start "Backend Server" cmd /k "npm run server:dev"

echo Waiting 3 seconds for backend to start...
timeout /t 3 /nobreak > nul

echo Starting Frontend Server (Port 8080)...
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ✅ Both servers are starting!
echo 🌐 Frontend: http://localhost:8080
echo 🔧 Backend:  http://localhost:3001
echo.
echo Press any key to exit this window...
pause > nul