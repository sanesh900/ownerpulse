# OwnerPulse Landing Page

A Next.js landing page for OwnerPulse - an automated weekly owner update system for Hostaway property managers.

## 🚀 Quick Start

### Run Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Setup Instructions

### 1. Formspree Integration

This form uses Formspree for form submissions.

**Steps:**
1. Go to [https://formspree.io/](https://formspree.io/) and sign up
2. Create a new form
3. Copy your form endpoint URL (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
4. Open `app/page.tsx`
5. Find line 11 and replace the `FORM_ACTION_URL` value with your Formspree URL:

```typescript
const FORM_ACTION_URL = "https://formspree.io/f/YOUR_FORM_ID"; // ⚠️ Replace with your URL
```

6. Save the file

The form will automatically redirect to `/thanks` after submission.

### 2. Deploy to Vercel

**Option A: Deploy via Vercel Dashboard**

1. Push your code to GitHub (see below)
2. Go to [https://vercel.com](https://vercel.com)
3. Sign up or log in
4. Click "New Project"
5. Import your GitHub repository
6. Vercel will auto-detect Next.js settings
7. Click "Deploy"

**Option B: Deploy via Vercel CLI**

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel

# Follow the prompts to link your project
```

### 3. Push to GitHub

From this directory:

```bash
# Add all files
git add .

# Commit
git commit -m "Initial Next.js landing page"

# Create GitHub repo and push
gh repo create ownerpulse --public --source=. --push
```

Or use the helper script from the parent directory:

```bash
cd ..
./scripts/quick-commit.sh "Initial Next.js landing page"
```

## 📁 Project Structure

```
ownerpulse/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page (/)
│   ├── globals.css         # Global styles
│   └── thanks/
│       └── page.tsx        # Thank you page (/thanks)
├── public/                 # Static assets (add images here)
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Add a Preview Image

1. Add your PDF screenshot to `/public/preview.png`
2. Replace the preview box in `app/page.tsx`:

```jsx
<div className="preview-box">
  <img src="/preview.png" alt="Owner update preview" style={{maxWidth: '100%'}} />
</div>
```

### Change Colors

Edit the color values in `app/globals.css`:
- Primary gradient: `.hero` section (lines 72-74)
- Primary button: `.btn-primary` (lines 106-109)
- Links: `footer a` and `.back-link` (around lines 172-188)

### Modify Form Fields

Edit the form in `app/page.tsx` (starting around line 123).

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules (no Tailwind)
- **Forms:** Formspree
- **Deployment:** Vercel-ready

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Environment

- Node.js 18+ required
- Works on macOS, Linux, and Windows

## 📄 License

Private project - all rights reserved.

## 🤝 Support

For questions or issues, contact the development team.

---

**Last Updated:** February 9, 2026
