# 🚀 Your Deployment Configuration

## ✅ Local Setup Complete!

Your application is now running locally at http://localhost:3000 and connected to MongoDB Atlas!

**MongoDB Connection:** ✅ Connected to `ratingmanagement.upm8dog.mongodb.net`
**Database:** `eventmanagement`
**Status:** Ready for deployment

---

## 📋 Environment Variables for Vercel

When deploying to Vercel, copy and paste these EXACT values into your environment variables:

### Required Variables:

```
MONGO_URI
mongodb+srv://eventadmin:RxuKyOPnN7e9j1om@ratingmanagement.upm8dog.mongodb.net/eventmanagement?retryWrites=true&w=majority&appName=ratingManagement

NEXTAUTH_SECRET
J8kL9mN2pQ5rS7tU3vW6xY1zA4bC8dE0fG2hI5jK7lM9nO

ADMIN_USER
admin

ADMIN_PASS
admin123

CLOUDINARY_CLOUD_NAME
demo

CLOUDINARY_API_KEY
demo-key

CLOUDINARY_API_SECRET
demo-secret

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
demo

NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
events-upload
```

### ⚠️ Update After First Deployment:

After your first deployment, you'll get a Vercel URL (e.g., `https://event-management-xyz.vercel.app`).

Update these two variables with your actual URL:

```
NEXTAUTH_URL
https://your-actual-vercel-url.vercel.app

NEXT_PUBLIC_SITE_URL
https://your-actual-vercel-url.vercel.app
```

Then **redeploy** for the changes to take effect.

---

## 🚀 Deploy to Vercel - Step by Step

### Option 1: GitHub + Vercel Dashboard (Recommended)

#### Step 1: Push to GitHub

```powershell
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Event Management System with MongoDB Atlas"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/event-management.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy on Vercel

1. Go to **[vercel.com](https://vercel.com)** and sign in with GitHub
2. Click **"Add New Project"**
3. Click **"Import"** next to your `event-management` repository
4. Configure project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./`
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
5. Click **"Environment Variables"** and add ALL variables from above
6. Click **"Deploy"**
7. Wait 2-3 minutes for build to complete

#### Step 3: Update URLs and Redeploy

1. Copy your Vercel URL from the deployment success page
2. Go to **Settings** → **Environment Variables**
3. Edit `NEXTAUTH_URL` and set it to your Vercel URL
4. Edit `NEXT_PUBLIC_SITE_URL` and set it to your Vercel URL
5. Go to **Deployments** → Click the three dots (⋯) → **Redeploy**

---

### Option 2: Vercel CLI (Alternative)

```powershell
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (Select your account)
# - Link to existing project? N
# - Project name? event-management
# - Directory? ./
# - Override settings? N

# Add environment variables
vercel env add MONGO_URI production
# Paste: mongodb+srv://eventadmin:RxuKyOPnN7e9j1om@ratingmanagement.upm8dog.mongodb.net/eventmanagement?retryWrites=true&w=majority&appName=ratingManagement

vercel env add NEXTAUTH_SECRET production
# Paste: J8kL9mN2pQ5rS7tU3vW6xY1zA4bC8dE0fG2hI5jK7lM9nO

vercel env add NEXTAUTH_URL production
# Paste: https://your-vercel-url.vercel.app (update after first deploy)

vercel env add ADMIN_USER production
# Paste: admin

vercel env add ADMIN_PASS production
# Paste: admin123

# ... add remaining variables

# Deploy to production
vercel --prod
```

---

## ✅ Post-Deployment Checklist

After deployment, test these features:

- [ ] Site loads at your Vercel URL
- [ ] Login page appears correctly
- [ ] Can login with `admin` / `admin123`
- [ ] Can access `/admin/events`
- [ ] Can create a new event
- [ ] Event appears in the list
- [ ] Can edit an event
- [ ] Can delete an event
- [ ] Public `/events` page shows created events
- [ ] MongoDB connection working (events persist after refresh)

---

## 🔒 Security Recommendations

### Before Going Live:

1. **Change Admin Password:**
   ```
   Update ADMIN_PASS in Vercel environment variables
   Use a strong password (16+ characters, mixed case, numbers, symbols)
   ```

2. **Secure MongoDB Access:**
   - In MongoDB Atlas, go to **Network Access**
   - Remove `0.0.0.0/0` (allow from anywhere)
   - Add Vercel's IP ranges or use MongoDB's Vercel integration

3. **Rotate Secrets:**
   ```powershell
   # Generate new NEXTAUTH_SECRET
   openssl rand -base64 32
   # Update in Vercel and redeploy
   ```

4. **Enable Cloudinary (Optional):**
   - Sign up at [cloudinary.com](https://cloudinary.com)
   - Get your credentials
   - Update Cloudinary variables in Vercel
   - Create an unsigned upload preset named `events-upload`

---

## 🐛 Troubleshooting

### Build Fails on Vercel

**Error: "Failed to connect to MongoDB"**
- ✅ Check `MONGO_URI` is set correctly in Vercel
- ✅ Verify MongoDB Atlas network access allows Vercel IPs
- ✅ Check MongoDB user has read/write permissions

**Error: "NEXTAUTH_SECRET is required"**
- ✅ Ensure `NEXTAUTH_SECRET` is added to Vercel environment variables
- ✅ Redeploy after adding variables

### Can't Login After Deployment

**Issue: Login redirects to error page**
- ✅ Verify `NEXTAUTH_URL` matches your Vercel URL EXACTLY (including https://)
- ✅ Check `ADMIN_USER` and `ADMIN_PASS` are set in Vercel
- ✅ Clear browser cookies and try again

### Events Not Saving

**Issue: Events disappear after refresh**
- ✅ Check MongoDB connection in Vercel logs
- ✅ Verify database name is `eventmanagement` in connection string
- ✅ Check MongoDB Atlas shows the database and collections

---

## 📊 Monitoring Your Deployment

### Vercel Dashboard:
- **Deployments:** View build logs and deployment history
- **Analytics:** Track page views and performance (enable in settings)
- **Logs:** Real-time function logs for debugging

### MongoDB Atlas:
- **Metrics:** Monitor database performance
- **Data Explorer:** View your events collection
- **Alerts:** Set up alerts for connection issues

---

## 🎯 Quick Commands Reference

```powershell
# Start local development
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Deploy to Vercel
vercel --prod

# View deployment logs
vercel logs

# Check environment variables
vercel env ls
```

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **MongoDB Atlas Docs:** https://docs.atlas.mongodb.com
- **Next.js Docs:** https://nextjs.org/docs
- **NextAuth Docs:** https://next-auth.js.org

---

## ✨ Your Application is Ready!

**Local URL:** http://localhost:3000
**Login:** admin / admin123
**MongoDB:** Connected to Atlas ✅

**Next Step:** Deploy to Vercel using the guide above! 🚀
