# Quick Start Guide

## Initial Setup (First Time)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/eventmanagement
NEXTAUTH_SECRET=your-random-secret-key
NEXTAUTH_URL=http://localhost:3000
ADMIN_USER=admin
ADMIN_PASS=admin123
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your-upload-preset
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string and update `MONGO_URI`

### 4. Set Up Cloudinary (Optional for Image Upload)

1. Go to [Cloudinary](https://cloudinary.com/)
2. Create a free account
3. Get your cloud name, API key, and API secret from the dashboard
4. Create an unsigned upload preset in Settings > Upload
5. Update the Cloudinary variables in `.env.local`

### 5. Generate NextAuth Secret

```bash
openssl rand -base64 32
```

Copy the output and use it as `NEXTAUTH_SECRET`

## Running the Application

### Development Mode
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

## Default Login Credentials

- **Username:** admin
- **Password:** admin123

## Available Routes

- `/` - Redirects to events page
- `/events` - Public events listing
- `/login` - Admin login
- `/admin` - Admin dashboard
- `/admin/events` - Event management
- `/admin/gallery` - Gallery (placeholder)
- `/admin/contacts` - Contacts (placeholder)

## Common Issues

### MongoDB Connection Error
- Check your connection string
- Verify IP whitelist in MongoDB Atlas
- Ensure database user has correct permissions

### Image Upload Not Working
- Verify Cloudinary credentials
- Check upload preset is unsigned
- Ensure API keys are correct

### Build Errors
- Delete `.next` folder and rebuild
- Clear npm cache: `npm cache clean --force`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## Development Workflow

1. Make changes to code
2. Hot reload will update automatically
3. Check browser console for errors
4. Test functionality
5. Run `npm run lint` to check code quality
6. Run `npm run build` to verify production build

## Deployment

See README.md for detailed deployment instructions to Vercel.

Quick deploy:
```bash
npm i -g vercel
vercel
```

## Support

For issues or questions, refer to:
- README.md - Comprehensive documentation
- DOCUMENTATION.md - Technical details
- GitHub Issues - Report bugs
