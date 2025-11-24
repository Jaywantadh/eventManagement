# Event Management System - Environment Setup Script (PowerShell)

Write-Host "🔧 Event Management System - Environment Setup Script" -ForegroundColor Cyan
Write-Host "======================================================" -ForegroundColor Cyan
Write-Host ""

$MONGO_URI = Read-Host "Enter your MongoDB Atlas connection string"
$ADMIN_USER = Read-Host "Enter admin username (default: admin)"
if ([string]::IsNullOrWhiteSpace($ADMIN_USER)) { $ADMIN_USER = "admin" }

$ADMIN_PASS = Read-Host "Enter admin password (default: admin123)" -AsSecureString
$ADMIN_PASS_Plain = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($ADMIN_PASS))
if ([string]::IsNullOrWhiteSpace($ADMIN_PASS_Plain)) { $ADMIN_PASS_Plain = "admin123" }

Write-Host ""
Write-Host "Cloudinary Configuration (Optional - Press Enter to skip)" -ForegroundColor Yellow
$CLOUDINARY_CLOUD_NAME = Read-Host "Enter Cloudinary cloud name"
$CLOUDINARY_API_KEY = Read-Host "Enter Cloudinary API key"
$CLOUDINARY_API_SECRET = Read-Host "Enter Cloudinary API secret"

$NEXTAUTH_SECRET = -join ((65..90) + (97..122) + (48..57) | Get-Random -Count 32 | ForEach-Object {[char]$_})

if ([string]::IsNullOrWhiteSpace($CLOUDINARY_CLOUD_NAME)) { $CLOUDINARY_CLOUD_NAME = "demo" }
if ([string]::IsNullOrWhiteSpace($CLOUDINARY_API_KEY)) { $CLOUDINARY_API_KEY = "demo-key" }
if ([string]::IsNullOrWhiteSpace($CLOUDINARY_API_SECRET)) { $CLOUDINARY_API_SECRET = "demo-secret" }

$envContent = @"
MONGO_URI=$MONGO_URI
NEXTAUTH_SECRET=$NEXTAUTH_SECRET
NEXTAUTH_URL=http://localhost:3000
ADMIN_USER=$ADMIN_USER
ADMIN_PASS=$ADMIN_PASS_Plain
CLOUDINARY_CLOUD_NAME=$CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY=$CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=$CLOUDINARY_API_SECRET
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=$CLOUDINARY_CLOUD_NAME
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=events-upload
NEXT_PUBLIC_SITE_URL=http://localhost:3000
"@

$envContent | Out-File -FilePath ".env.local" -Encoding UTF8

Write-Host ""
Write-Host "✅ Environment file created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Summary:" -ForegroundColor Cyan
Write-Host "  - MongoDB URI: Configured"
Write-Host "  - NextAuth Secret: Auto-generated"
Write-Host "  - Admin User: $ADMIN_USER"
Write-Host "  - Cloudinary: $CLOUDINARY_CLOUD_NAME"
Write-Host ""
Write-Host "🚀 Next steps:" -ForegroundColor Yellow
Write-Host "  1. Run 'npm run dev' to start development server"
Write-Host "  2. Visit http://localhost:3000"
Write-Host "  3. Login with your admin credentials"
Write-Host ""
