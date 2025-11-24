#!/bin/bash

echo "🔧 Event Management System - Environment Setup Script"
echo "======================================================"
echo ""

read -p "Enter your MongoDB Atlas connection string: " MONGO_URI
read -p "Enter admin username (default: admin): " ADMIN_USER
ADMIN_USER=${ADMIN_USER:-admin}
read -sp "Enter admin password (default: admin123): " ADMIN_PASS
ADMIN_PASS=${ADMIN_PASS:-admin123}
echo ""
read -p "Enter Cloudinary cloud name (optional, press Enter to skip): " CLOUDINARY_CLOUD_NAME
read -p "Enter Cloudinary API key (optional, press Enter to skip): " CLOUDINARY_API_KEY
read -sp "Enter Cloudinary API secret (optional, press Enter to skip): " CLOUDINARY_API_SECRET
echo ""

NEXTAUTH_SECRET=$(openssl rand -base64 32)

cat > .env.local << EOF
MONGO_URI=$MONGO_URI
NEXTAUTH_SECRET=$NEXTAUTH_SECRET
NEXTAUTH_URL=http://localhost:3000
ADMIN_USER=$ADMIN_USER
ADMIN_PASS=$ADMIN_PASS
CLOUDINARY_CLOUD_NAME=${CLOUDINARY_CLOUD_NAME:-demo}
CLOUDINARY_API_KEY=${CLOUDINARY_API_KEY:-demo-key}
CLOUDINARY_API_SECRET=${CLOUDINARY_API_SECRET:-demo-secret}
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=${CLOUDINARY_CLOUD_NAME:-demo}
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=events-upload
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF

echo ""
echo "✅ Environment file created successfully!"
echo ""
echo "📝 Summary:"
echo "  - MongoDB URI: Configured"
echo "  - NextAuth Secret: Auto-generated"
echo "  - Admin User: $ADMIN_USER"
echo "  - Cloudinary: ${CLOUDINARY_CLOUD_NAME:-Not configured}"
echo ""
echo "🚀 Next steps:"
echo "  1. Run 'npm run dev' to start development server"
echo "  2. Visit http://localhost:3000"
echo "  3. Login with your admin credentials"
echo ""
