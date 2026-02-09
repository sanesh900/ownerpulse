'use client';

/**
 * OwnerPulse Landing Page
 * 
 * FORMSPREE SETUP: ✅ COMPLETE
 * Form endpoint: https://formspree.io/f/xzdazoek
 * Form submissions will be sent to your Formspree account.
 */

const FORM_ACTION_URL = "https://formspree.io/f/xzdazoek";

export default function Home() {
  return (
    <div className="container">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Automated Weekly Owner Updates for Hostaway Property Managers</h1>
        <p>Bookings, revenue pacing, maintenance, and forward outlook — sent automatically to owners.</p>
        
        <div className="cta-buttons">
          <a href="#form" className="btn btn-primary">Get Sample Owner Update</a>
          <a href="#form" className="btn btn-secondary">Join Pilot Program</a>
        </div>
        
        <div className="small-text">
          Built for professional short-term rental managers.
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section>
        <h2>Owner Reporting Still Eats Too Much Time</h2>
        <ul>
          <li>write long "explainer" emails to owners</li>
          <li>export spreadsheets every month</li>
          <li>answer "why did revenue drop?" calls</li>
          <li>manually explain maintenance charges</li>
          <li>screenshot calendars and bookings</li>
          <li>worry owners don't understand what's happening</li>
        </ul>
        <p><strong>Your PMS tracks the numbers. Owners still want clarity.</strong></p>
      </section>

      {/* SOLUTION SECTION */}
      <section>
        <h2>A Communication Layer on Top of Hostaway</h2>
        <p>
          We're building a lightweight add-on that turns your Hostaway data into clear, 
          weekly owner-friendly updates.
        </p>
        <ul>
          <li>KPI snapshots and trends</li>
          <li>Booking pace for the next 30 days</li>
          <li>Revenue to date</li>
          <li>Maintenance & operations summary</li>
          <li>"What changed this week" narrative</li>
          <li>Upcoming risks and opportunities</li>
          <li>Fully white-labelled reports</li>
        </ul>
        <p>Sent automatically by email or portal.</p>
      </section>

      {/* PREVIEW SECTION */}
      <section>
        <h2>What Owners Receive Each Week</h2>
        <p>This is an example of the automated update your owners would get.</p>
        <div className="preview-box">
          Preview goes here — fake PDF screenshot added later.
        </div>
      </section>

      {/* WHO IT'S FOR SECTION */}
      <section>
        <h2>Who It's For</h2>
        <ul>
          <li>Professional STR managers</li>
          <li>20–200+ units under management</li>
          <li>Multiple property owners</li>
          <li>Using Hostaway</li>
          <li>Spending hours each month on owner communication</li>
          <li>Wanting to look polished and proactive</li>
        </ul>
      </section>

      {/* WHY SECTION */}
      <section>
        <h2>Why We're Building This</h2>
        <p>
          Most STR software focuses on bookings, payouts, accounting, and channel management.
        </p>
        <p>
          <strong>
            Almost none focus on proactive owner communication: explaining the numbers, 
            pacing forecasts, weekly confidence-building, and reducing owner anxiety.
          </strong>
        </p>
      </section>

      {/* FORM / CTA SECTION */}
      <section id="form">
        <h2>Get Early Access</h2>
        <p>Download the sample update and join our pilot group.</p>
        
        <form action={FORM_ACTION_URL} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input 
              type="text" 
              id="company" 
              name="company" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="pms">PMS used</label>
            <select id="pms" name="pms" required>
              <option value="">Select...</option>
              <option value="Hostaway">Hostaway</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="units">Units managed</label>
            <input 
              type="text" 
              id="units" 
              name="units" 
              placeholder="e.g., 50 units"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="headache">Biggest owner-reporting headache</label>
            <textarea 
              id="headache" 
              name="headache" 
              placeholder="Tell us what takes the most time..."
              required
            ></textarea>
          </div>

          {/* Hidden field for Formspree redirect */}
          <input type="hidden" name="_next" value="/thanks" />
          
          <button type="submit" className="btn-submit">
            Request Sample & Pilot Access
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        © 2026 OwnerPulse (working name) · 
        <a href="#privacy">Privacy</a> · 
        <a href="#contact">Contact</a>
      </footer>
    </div>
  );
}
