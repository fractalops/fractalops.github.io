# 🚀 Deployment Guide - Rands & Sense

## GitHub Pages Deployment

### Prerequisites
- GitHub account
- Git installed locally

### Step 1: Create GitHub Repository
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit v0.1.0
git commit -m "🎉 Initial release v0.1.0 - Rands & Sense financial blog"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

### Step 3: Custom Domain (Optional)
If using `nomsa.dev`:
1. In your domain registrar, add these DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A  
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```

2. In GitHub Pages settings, add `nomsa.dev` as custom domain
3. Enable **Enforce HTTPS**

### Step 4: Verify Deployment
- Visit `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
- Or your custom domain: `https://nomsa.dev`
- Check that dark mode, sidebar, and author profile work correctly

## 🎯 You're Live!

Your professional South African financial education blog is now live and ready for content creation!

## Next Steps
1. **Content Creation**: Use the templates in `CONTENT_GUIDE.md`
2. **New Posts**: Run `./scripts/new-post.sh "Post Title"`
3. **Updates**: Push changes to main branch for automatic deployment