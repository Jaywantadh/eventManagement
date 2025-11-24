#!/bin/bash

echo "🚀 Deploying Event Management System to Vercel..."

if ! command -v vercel &> /dev/null
then
    echo "Installing Vercel CLI..."
    npm i -g vercel
fi

echo "Running build check..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "Deploying to Vercel..."
    vercel --prod
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi
