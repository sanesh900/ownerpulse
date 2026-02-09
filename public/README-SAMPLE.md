# Sample Owner Update - How to Use

This is a sample weekly owner report that demonstrates what property owners would receive from OwnerPulse.

## Files Included

- `sample-owner-update.html` - Full HTML version (can be viewed in browser or saved as PDF)

## How to Convert to PDF

### Option 1: Browser (Easiest)
1. Open `sample-owner-update.html` in Chrome or Safari
2. Press Cmd+P (Mac) or Ctrl+P (Windows)
3. Select "Save as PDF"
4. Save as `sample-owner-update.pdf`

### Option 2: Online Tool
1. Go to https://html2pdf.com or similar
2. Upload the HTML file
3. Download the generated PDF

### Option 3: Command Line (macOS)
```bash
# Using Chrome headless
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless \
  --disable-gpu \
  --print-to-pdf=sample-owner-update.pdf \
  sample-owner-update.html
```

## Using on the Landing Page

Once you have the PDF:

1. Add it to `/public/` folder:
   ```
   /public/sample-owner-update.pdf
   ```

2. Update the preview box in `app/page.tsx`:
   ```jsx
   <div className="preview-box">
     <a href="/sample-owner-update.pdf" target="_blank" 
        style={{color: '#667eea', textDecoration: 'none'}}>
       <img src="/preview-screenshot.png" 
            alt="Sample owner update preview" 
            style={{maxWidth: '100%', borderRadius: '8px'}} />
       <div style={{marginTop: '1rem', fontWeight: 600}}>
         Click to view full sample PDF →
       </div>
     </a>
   </div>
   ```

3. Or make it downloadable:
   ```jsx
   <a href="/sample-owner-update.pdf" download 
      className="btn btn-primary">
     Download Sample PDF
   </a>
   ```

## What's Included in the Sample

✅ **Performance Snapshot**
- Occupancy rate with trends
- Revenue vs. target
- Average nightly rate

✅ **Booking Details**
- Recent and upcoming reservations
- Revenue breakdown
- Booking sources

✅ **30-Day Pace**
- Visual progress bar
- Occupancy percentage
- Trend comparisons

✅ **Maintenance & Operations**
- Completed and scheduled work
- Costs tracked
- Budget status

✅ **What Changed This Week**
- Key updates in narrative form
- New bookings and pricing changes
- Guest feedback

✅ **Forward Looking**
- Opportunities and risks
- Actions being taken
- Upcoming maintenance

## Customization

Feel free to customize the HTML file:
- Update property details
- Change company branding
- Adjust colors (currently using #667eea purple)
- Modify data to match your use case

---

**Created:** February 9, 2026
