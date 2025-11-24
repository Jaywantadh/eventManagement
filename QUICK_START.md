# 🚀 Quick Deployment Reference

## MongoDB Atlas Setup (5 minutes)
1. ✅ Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas/register)
2. ✅ Create FREE M0 cluster
3. ✅ Create database user (save password!)
4. ✅ Set network access to 0.0.0.0/0
5. ✅ Get connection string

**Connection String Format:**
```
mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/eventmanagement?retryWrites=true&w=majority
```

---

## Local Setup (2 minutes)

### Windows (PowerShell):
```powershell
.\setup-env.ps1
npm run dev
```

### Mac/Linux:
```bash
chmod +x setup-env.sh
./setup-env.sh
npm run dev
```

### Manual Setup:
Create `.env.local`:
```env
MONGO_URI=your-mongodb-connection-string
NEXTAUTH_SECRET=run-openssl-rand-base64-32
NEXTAUTH_URL=http://localhost:3000
ADMIN_USER=admin
ADMIN_PASS=admin123
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Vercel Deployment (3 minutes)

### Method 1: GitHub + Vercel Dashboard
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Then:
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repo
3. Add environment variables (same as .env.local but update URLs)
4. Deploy!

### Method 2: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
# Follow prompts, then add env vars:
vercel env add MONGO_URI
# ... add all other vars
vercel --prod
```

---

## Environment Variables Checklist

**Required:**
- ✅ `MONGO_URI` - MongoDB Atlas connection string
- ✅ `NEXTAUTH_SECRET` - Random secret (32+ chars)
- ✅ `NEXTAUTH_URL` - Your site URL
- ✅ `ADMIN_USER` - Admin username
- ✅ `ADMIN_PASS` - Admin password

**Optional (for image upload):**
- ⭕ `CLOUDINARY_CLOUD_NAME`
- ⭕ `CLOUDINARY_API_KEY`
- ⭕ `CLOUDINARY_API_SECRET`
- ⭕ `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`

---

## Default Login
```
Username: admin
Password: admin123
```
⚠️ **Change in production!**

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check MONGO_URI format |
| Can't login | Verify NEXTAUTH_URL matches site URL |
| No events showing | Check MongoDB connection & network access |
| Images not uploading | Configure Cloudinary or skip for now |

---

## Quick Links
- 📖 [Full Setup Guide](./MONGODB_VERCEL_SETUP.md)
- 🚀 [Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md)
- 📚 [Technical Documentation](./DOCUMENTATION.md)
- 🏠 [Main README](./README.md)

---

## Support
- MongoDB Atlas: [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
