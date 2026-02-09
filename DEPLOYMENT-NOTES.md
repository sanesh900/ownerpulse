# OwnerPulse Deployment Notes

## ✅ Current Status

**GitHub Repository:** https://github.com/sanesh900/ownerpulse

**Last Updated:** February 9, 2026

### Completed Setup
- ✅ GitHub CLI installed (v2.86.0)
- ✅ Authenticated as: **sanesh900**
- ✅ Git configured:
  - Name: sanesh900
  - Email: sanesh3110@gmail.com
- ✅ Repository created and pushed to GitHub
- ✅ Using HTTPS protocol for Git operations

## 🔐 Where Your Credentials Are Stored

### GitHub CLI Authentication Token

**Location:** macOS Keychain (secure system storage)

**To access:**
1. Open **Keychain Access** app (Applications > Utilities)
2. Search for: `github.com` or `gh`
3. You'll find your GitHub token stored securely

**To view token:**
- Double-click the entry in Keychain Access
- Click "Show password" (requires your Mac password)

**To delete credentials:**

Option 1 - Via CLI (recommended):
```bash
gh auth logout
```

Option 2 - Via Keychain Access:
1. Find the "github.com" entry
2. Right-click → Delete
3. Confirm deletion

**To re-authenticate:**
```bash
gh auth login
```

### Check Authentication Status

```bash
gh auth status
```

Current output shows:
```
✓ Logged in to github.com account sanesh900 (keyring)
- Active account: true
- Git operations protocol: https
```

## 🚀 Next Steps for This Project

### 1. Set Up Formspree

1. Go to https://formspree.io/ and create account
2. Create a new form
3. Copy your endpoint URL
4. Edit `app/page.tsx` line 11:
   ```typescript
   const FORM_ACTION_URL = "https://formspree.io/f/YOUR_FORM_ID";
   ```
5. Commit and push:
   ```bash
   git add app/page.tsx
   git commit -m "Add Formspree URL"
   git push
   ```

### 2. Test Locally

```bash
cd ~/Work/Github/ownerpulse
npm install
npm run dev
```

Visit: http://localhost:3000

### 3. Deploy to Vercel

**Quick Deploy:**
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Select "ownerpulse" repository
5. Click "Deploy"

**Via CLI:**
```bash
npm i -g vercel
vercel
```

Vercel will auto-detect Next.js settings.

## 📝 Making Changes

### Update content:
```bash
# Edit files
# Then commit and push:
git add .
git commit -m "Update landing page content"
git push
```

### If Vercel is connected:
- Push to GitHub → Vercel auto-deploys
- Check deployment status at vercel.com

## 🔗 Important Links

- **GitHub Repo:** https://github.com/sanesh900/ownerpulse
- **Local Project:** ~/Work/Github/ownerpulse
- **Formspree:** https://formspree.io/
- **Vercel:** https://vercel.com

## 📚 Documentation References

For detailed instructions, see:
- `~/Work/Github/instructions/SETUP.md` - Setup guide
- `~/Work/Github/instructions/CREDENTIALS.md` - Credential management
- `~/Work/Github/instructions/GITHUB-WORKFLOW.md` - Daily workflows
- `README.md` (this project) - Project-specific docs

---

**Account:** sanesh900 (sanesh3110@gmail.com)
