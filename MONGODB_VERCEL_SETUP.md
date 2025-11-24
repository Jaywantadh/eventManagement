# MongoDB Atlas & Vercel Deployment Guide

## Part 1: MongoDB Atlas Setup

### Step 1: Create MongoDB Atlas Account
1. The MongoDB Atlas page is already open in your browser
2. Sign up with Google, GitHub, or email
3. Complete the registration process

### Step 2: Create a Free Cluster
1. After logging in, click **"Build a Database"** or **"Create"**
2. Choose **"M0 FREE"** tier (perfect for development)
3. Select a cloud provider (AWS recommended)
4. Choose a region closest to you (e.g., Mumbai for India)
5. Cluster name: `EventManagement` (or keep default)
6. Click **"Create Cluster"** (takes 3-5 minutes)

### Step 3: Create Database User
1. While cluster is creating, you'll see **"Security Quickstart"**
2. Choose **"Username and Password"** authentication
3. Create credentials:
   - Username: `eventadmin` (or your choice)
   - Password: Click **"Autogenerate Secure Password"** and COPY IT
   - ⚠️ **SAVE THIS PASSWORD** - you'll need it for the connection string
4. Click **"Create User"**

### Step 4: Set Up Network Access
1. Click **"Add IP Address"** or go to **Network Access** in left sidebar
2. For development, click **"Allow Access from Anywhere"** (0.0.0.0/0)
   - ⚠️ For production, restrict to specific IPs
3. Click **"Confirm"**

### Step 5: Get Connection String
1. Wait for cluster to finish creating (green status)
2. Click **"Connect"** button on your cluster
3. Choose **"Connect your application"**
4. Driver: **Node.js**, Version: **5.5 or later**
5. Copy the connection string - it looks like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Replace `<username>` with your username (e.g., `eventadmin`)
7. Replace `<password>` with the password you saved
8. Add database name before the `?`: `/eventmanagement?`

**Final connection string example:**
```
mongodb+srv://eventadmin:YourPassword123@cluster0.xxxxx.mongodb.net/eventmanagement?retryWrites=true&w=majority
```

---

## Part 2: Update Local Environment

Once you have your connection string, I'll help you:
1. Update the `.env.local` file
2. Test the connection locally
3. Deploy to Vercel

**Please complete the MongoDB Atlas setup above, then share your connection string (or just confirm it's ready), and I'll proceed with the next steps!**

---

## Quick Checklist
- [ ] MongoDB Atlas account created
- [ ] Free M0 cluster created
- [ ] Database user created (username & password saved)
- [ ] Network access configured (0.0.0.0/0 for development)
- [ ] Connection string copied and modified
- [ ] Ready to update .env.local

**Current Status:** Waiting for you to complete MongoDB Atlas setup
**Next Step:** Update environment variables and test connection
