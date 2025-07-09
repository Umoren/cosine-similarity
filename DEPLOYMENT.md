# Deployment Guide

## 🚀 Option 1: Render.com (Recommended - FREE)

### Steps:
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/cosine-similarity.git
   git push -u origin main
   ```

2. **Deploy on Render:**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repo
   - Use these settings:
     - **Name:** `cosine-similarity-guide`
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
     - **Plan:** Free

3. **Done!** Your site will be live at `https://cosine-similarity-guide.onrender.com`

---

## 🚀 Option 2: Railway (Alternative - FREE)

### Steps:
1. **Push to GitHub** (same as above)
2. **Deploy on Railway:**
   - Go to [railway.app](https://railway.app)
   - Click "Deploy from GitHub"
   - Select your repo
   - Railway auto-detects Node.js and deploys

---

## 🚀 Option 3: Heroku (Paid only)

### Steps:
1. **Install Heroku CLI**
2. **Create Heroku app:**
   ```bash
   heroku create cosine-similarity-guide
   git push heroku main
   ```

---

## 🚀 Option 4: Vercel (Advanced - Serverless)

For Vercel, you'd need to convert to serverless functions. Let me know if you want this approach.

---

## 📝 Notes:
- All options will automatically install dependencies
- PDF generation works on all platforms
- Free tiers are perfect for this project
- Render.com is most reliable for Puppeteer apps

## 🔧 If deployment fails:
1. Check the build logs
2. Ensure Node.js version compatibility
3. Verify Puppeteer works in production environment