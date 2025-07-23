@echo off
echo 🔨 Starting build process...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not found. Please install Node.js first.
    pause
    exit /b 1
)

REM Run the build script
echo 📋 Running build validation...
npm run build

if %errorlevel% neq 0 (
    echo 💥 Build failed!
    pause
    exit /b 1
)

echo 🎉 Build completed successfully!
echo 📦 Ready for deployment
pause
