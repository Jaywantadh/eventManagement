# Vercel Deployment Guide

## Prerequisites
- MongoDB Atlas connection string configured
- GitHub account (recommended) or Vercel CLI

## Option 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Prepare Your Code
1. Initialize git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Event Management System"
   ```

2. Push to GitHub:
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/yourusername/event-management.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Configure project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`

### Step 3: Add Environment Variables
In Vercel project settings, add these environment variables:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/eventmanagement?retryWrites=true&w=majority
NEXTAUTH_SECRET=your-generated-secret-here
NEXTAUTH_URL=https://your-project.vercel.app
ADMIN_USER=admin
ADMIN_PASS=your-secure-password
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=events-upload
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```

**Important Notes:**
- Replace `NEXTAUTH_URL` and `NEXT_PUBLIC_SITE_URL` with your actual Vercel URL after first deployment
- Generate `NEXTAUTH_SECRET` with: `openssl rand -base64 32`
- Use a strong password for `ADMIN_PASS` in production

### Step 4: Deploy
1. Click **"Deploy"**
2. Wait for build to complete (2-3 minutes)
3. Visit your live URL!

### Step 5: Update URLs (After First Deployment)
1. Copy your Vercel URL (e.g., `https://event-management-xyz.vercel.app`)
2. Go to **Settings** → **Environment Variables**
3. Update:
   - `NEXTAUTH_URL` → Your Vercel URL
   - `NEXT_PUBLIC_SITE_URL` → Your Vercel URL
4. Redeploy (Deployments → Click ⋯ → Redeploy)

---

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? (Select your account)
- Link to existing project? **N**
- Project name? **event-management**
- Directory? **./
**
- Override settings? **N**

### Step 4: Add Environment Variables
```bash
vercel env add MONGO_URI
vercel env add NEXTAUTH_SECRET
vercel env add NEXTAUTH_URL
vercel env add ADMIN_USER
vercel env add ADMIN_PASS
# ... add all other variables
```

### Step 5: Deploy to Production
```bash
vercel --prod
```

---

## Post-Deployment Checklist

- [ ] Site loads successfully
- [ ] Login page works
- [ ] Can login with admin credentials
- [ ] Can create events
- [ ] Can upload images (if Cloudinary configured)
- [ ] Public events page displays correctly
- [ ] MongoDB connection working (check events list)

---

## Troubleshooting

### Build Fails
- Check environment variables are set correctly
- Ensure MongoDB connection string is valid
- Check Vercel build logs for specific errors

### Can't Login
- Verify `NEXTAUTH_URL` matches your Vercel URL exactly
- Check `ADMIN_USER` and `ADMIN_PASS` are set
- Clear browser cookies and try again

### MongoDB Connection Error
- Verify connection string format
- Check MongoDB Atlas network access (0.0.0.0/0)
- Ensure database user has read/write permissions

### Images Not Uploading
- Verify Cloudinary credentials
- Check upload preset exists and is unsigned
- Check browser console for errors

---

## Custom Domain (Optional)

1. Go to Vercel project → **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXTAUTH_URL` and `NEXT_PUBLIC_SITE_URL` to your custom domain
5. Redeploy

---

## Security Recommendations for Production

1. **Change Default Credentials:**
   - Use a strong, unique password for `ADMIN_PASS`
   - Consider implementing proper user management

2. **Restrict MongoDB Access:**
   - In MongoDB Atlas, restrict IP access to Vercel's IPs
   - Enable audit logs

3. **Environment Variables:**
   - Never commit `.env.local` to git
   - Rotate `NEXTAUTH_SECRET` periodically
   - Use different credentials for production vs development

4. **HTTPS Only:**
   - Vercel provides HTTPS by default
   - Ensure all API calls use HTTPS

5. **Rate Limiting:**
   - Consider adding rate limiting to API routes
   - Use Vercel's Edge Config for IP blocking if needed

---

## Monitoring

- **Vercel Analytics:** Enable in project settings
- **MongoDB Atlas Monitoring:** Check database performance
- **Error Tracking:** Consider integrating Sentry

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com
- Next.js Docs: https://nextjs.org/docs
