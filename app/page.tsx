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
        <p style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1rem', color: 'white' }}>
          Stop writing weekly owner emails, spreadsheets, and explanations — send clear performance summaries automatically.
        </p>
        <p style={{ opacity: 0.95, marginBottom: '2rem' }}>
          Not just numbers — every update explains what changed and what we&apos;re doing next.
        </p>
        
        <div className="cta-buttons">
          <a href="/Weekly Owner Update - Sample2.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 2.5rem' }}>
            Get the Sample Owner Update
          </a>
        </div>
        
        <div className="small-text">
          Designed for teams using Hostaway who want to save hours per week on owner communication.
        </div>
      </section>

      {/* PROBLEM SECTION - REFRAMED */}
      <section>
        <h2>You Built a Great Business. Now You&apos;re Drowning in Owner Emails.</h2>
        <p style={{ fontSize: '1.15rem', color: '#555', marginBottom: '1.5rem' }}>
          Every week, the same exhausting cycle:
        </p>
        <ul>
          <li>Export last week&apos;s bookings from Hostaway</li>
          <li>Copy numbers into a spreadsheet</li>
          <li>Write the same update emails to each owner</li>
          <li>Field anxious calls: &ldquo;Why did revenue drop?&rdquo;</li>
          <li>Manually explain every maintenance charge</li>
          <li>Reassure owners that everything is on track</li>
        </ul>
        <p style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: '1.5rem', color: '#111' }}>
          You&apos;re stuck being the translator between your PMS and your owners.
        </p>
        <p style={{ fontSize: '1rem', color: '#666', marginTop: '1rem' }}>
          Your PMS tracks the numbers. Owners still want clarity.
        </p>
      </section>

      {/* DOES THIS SOUND LIKE YOU */}
      <section style={{ background: '#f0f4ff', border: '2px solid #667eea', borderRadius: '12px' }}>
        <h2 style={{ color: '#667eea' }}>Does This Sound Like You?</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', cursor: 'pointer', padding: '0.5rem' }}>
            <input type="checkbox" style={{ marginTop: '0.25rem', width: 'auto' }} disabled />
            <span>You manage 20+ properties across multiple owners</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', cursor: 'pointer', padding: '0.5rem' }}>
            <input type="checkbox" style={{ marginTop: '0.25rem', width: 'auto' }} disabled />
            <span>Owners constantly ask for updates: &ldquo;How&apos;s my property doing?&rdquo;</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', cursor: 'pointer', padding: '0.5rem' }}>
            <input type="checkbox" style={{ marginTop: '0.25rem', width: 'auto' }} disabled />
            <span>You spend 3-5 hours per month per owner on reporting</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', cursor: 'pointer', padding: '0.5rem' }}>
            <input type="checkbox" style={{ marginTop: '0.25rem', width: 'auto' }} disabled />
            <span>You wish Hostaway just... talked to owners directly</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', cursor: 'pointer', padding: '0.5rem' }}>
            <input type="checkbox" style={{ marginTop: '0.25rem', width: 'auto' }} disabled />
            <span>You want to look more professional vs. competitors</span>
          </label>
        </div>
        <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', fontWeight: 600, color: '#667eea' }}>
          If you checked 2 or more, OwnerPulse is built for you.
        </p>
      </section>

      {/* COMPARISON SECTION */}
      <section>
        <h2>Hostaway Tracks the Data. You Do the Manual Work.</h2>
        <p style={{ fontSize: '1.15rem', color: '#555', marginBottom: '2rem', textAlign: 'center' }}>
          Imagine saving <strong>5-10 hours per owner per month</strong> on reporting.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ background: '#fef2f2', padding: '1.5rem', borderRadius: '8px', border: '2px solid #fecaca' }}>
            <h3 style={{ color: '#dc2626', marginBottom: '1rem' }}>What You Do Today</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#dc2626', marginRight: '0.5rem', fontSize: '1.2rem' }}>❌</span>
                <span>Manual Excel exports every week</span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#dc2626', marginRight: '0.5rem', fontSize: '1.2rem' }}>❌</span>
                <span>Write the same explanation emails</span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#dc2626', marginRight: '0.5rem', fontSize: '1.2rem' }}>❌</span>
                <span>Answer &ldquo;what&apos;s happening?&rdquo; calls</span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#dc2626', marginRight: '0.5rem', fontSize: '1.2rem' }}>❌</span>
                <span>Owners feel disconnected</span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#dc2626', marginRight: '0.5rem', fontSize: '1.2rem' }}>❌</span>
                <span><strong>3-5 hours per owner per month</strong></span>
              </li>
            </ul>
          </div>
          <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '8px', border: '2px solid #86efac' }}>
            <h3 style={{ color: '#16a34a', marginBottom: '1rem' }}>With OwnerPulse</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#16a34a', marginRight: '0.5rem', fontSize: '1.2rem' }}>✅</span>
                <span>Weekly summaries emailed to owners</span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#16a34a', marginRight: '0.5rem', fontSize: '1.2rem' }}>✅</span>
                <span>Data pulled directly from Hostaway</span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#16a34a', marginRight: '0.5rem', fontSize: '1.2rem' }}>✅</span>
                <span>Metrics + narrative, no typing</span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#16a34a', marginRight: '0.5rem', fontSize: '1.2rem' }}>✅</span>
                <span>Proactive communication = happy owners</span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#16a34a', marginRight: '0.5rem', fontSize: '1.2rem' }}>✅</span>
                <span><strong>Cut owner emails by 60%+</strong></span>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
          color: 'white', 
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0, color: 'white' }}>
            This tool does what you&apos;re already paying or spending hours to do manually.
          </p>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section>
        <h2>A Communication Layer on Top of Hostaway</h2>
        <p>
          We&apos;re building a lightweight add-on that turns your Hostaway data into clear, 
          weekly owner-friendly updates.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>KPI Snapshots</h3>
            <p style={{ fontSize: '0.95rem', color: '#666', margin: 0 }}>Occupancy, revenue, ADR with trend arrows</p>
          </div>
          <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📅</div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>30-Day Pace</h3>
            <p style={{ fontSize: '0.95rem', color: '#666', margin: 0 }}>Forward-looking booking calendar</p>
          </div>
          <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💰</div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Revenue Tracking</h3>
            <p style={{ fontSize: '0.95rem', color: '#666', margin: 0 }}>MTD vs. target with explanations</p>
          </div>
          <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔧</div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Maintenance Log</h3>
            <p style={{ fontSize: '0.95rem', color: '#666', margin: 0 }}>Clear cost breakdowns & schedules</p>
          </div>
          <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📈</div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>What Changed</h3>
            <p style={{ fontSize: '0.95rem', color: '#666', margin: 0 }}>Weekly narrative updates</p>
          </div>
          <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Action Items</h3>
            <p style={{ fontSize: '0.95rem', color: '#666', margin: 0 }}>Proactive strategy insights</p>
          </div>
        </div>
        <p style={{ marginTop: '2rem', fontSize: '1.1rem', fontWeight: 600 }}>
          Sent automatically by email or portal. Fully white-labeled with your branding.
        </p>
      </section>

      {/* PORTFOLIO SUMMARY SECTION */}
      <section style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)', border: '2px solid #667eea' }}>
        <h2>Portfolio Summary for Multi-Property Owners</h2>
        <p style={{ fontSize: '1.15rem', color: '#555' }}>
          Owners with multiple properties don&apos;t want 3 separate emails. They get one weekly summary of their entire portfolio, then can drill into any property.
        </p>
        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: '#667eea', marginBottom: '1rem' }}>Portfolio Overview</h3>
            <ul style={{ fontSize: '1rem' }}>
              <li>Combined revenue across all properties</li>
              <li>Average occupancy rate</li>
              <li>Best & worst performing this week</li>
              <li>Total maintenance costs</li>
              <li>Upcoming opportunities across portfolio</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: '#667eea', marginBottom: '1rem' }}>Property Details</h3>
            <ul style={{ fontSize: '1rem' }}>
              <li>Drill into any property for full breakdown</li>
              <li>Same weekly update format per property</li>
              <li>Property-specific insights & actions</li>
              <li>Compare property performance trends</li>
              <li>All in one email, organized clearly</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'white', borderRadius: '8px', border: '2px solid #667eea' }}>
          <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#667eea', margin: 0, textAlign: 'center' }}>
            One weekly email. Full portfolio clarity. No manual compilation.
          </p>
        </div>
      </section>

      {/* PREVIEW SECTION */}
      <section>
        <h2>What Owners Receive Each Week</h2>
        <p style={{ fontSize: '1.15rem', color: '#555' }}>
          See exactly what your owners could receive every week — metrics + narrative, ready without typing an email.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <a href="/Weekly Owner Update - Sample2.pdf" target="_blank" rel="noopener noreferrer" 
             style={{ display: 'block', textDecoration: 'none' }}>
            <img 
              src="/Screenshot 2026-02-10 at 00.53.23.png" 
              alt="Sample owner update preview" 
              style={{ 
                maxWidth: '100%', 
                border: '2px solid #ddd',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </a>
          <p style={{ marginTop: '1rem', textAlign: 'center' }}>
            <a href="/Weekly Owner Update - Sample2.pdf" target="_blank" rel="noopener noreferrer"
               style={{ color: '#667eea', fontWeight: 600, fontSize: '1.1rem', textDecoration: 'none' }}>
              Click to view full sample PDF →
            </a>
          </p>
        </div>
      </section>

      {/* WHY SECTION */}
      <section>
        <h2>Why We&apos;re Building This</h2>
        <p>
          Most STR software focuses on bookings, payouts, accounting, and channel management.
        </p>
        <p>
          <strong>
            Almost none focus on proactive owner communication: explaining the numbers, 
            pacing forecasts, weekly confidence-building, and reducing owner anxiety.
          </strong>
        </p>
        <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f0f4ff', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
          <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#667eea', margin: 0 }}>
            We&apos;re the communication layer your PMS is missing.
          </p>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section style={{ textAlign: 'center', background: '#fafafa' }}>
        <h3 style={{ color: '#667eea', marginBottom: '1.5rem' }}>Built for Property Managers</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔒</div>
            <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Secure & Private</p>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Secure read-only access to your Hostaway data</p>
          </div>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎨</div>
            <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>White-Labeled</p>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Reports carry your branding</p>
          </div>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
            <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Fully Automated</p>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Set it once, runs forever</p>
          </div>
          <div>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔌</div>
            <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Hostaway Native</p>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Built specifically for Hostaway</p>
          </div>
        </div>
      </section>

      {/* FORM / CTA SECTION */}
      <section id="form">
        <h2>Get the Sample Owner Update</h2>
        <p>Enter your details to download the sample + join the pilot waitlist.</p>
        
        <p style={{ 
          fontSize: '0.95rem', 
          color: '#666', 
          fontStyle: 'italic', 
          marginBottom: '1.5rem',
          paddingTop: '0.5rem'
        }}>
          This is for STR property managers (not individual hosts).
        </p>
        
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
          <input type="hidden" name="_next" value="https://ownerpulse.vercel.app/thanks" />
          
          <button type="submit" className="btn-submit">
            Get Sample & Join Pilot Waitlist
          </button>
        </form>
        
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.25rem', 
          background: '#f0f4ff', 
          borderRadius: '8px',
          borderLeft: '4px solid #667eea',
          fontSize: '0.95rem',
          color: '#666'
        }}>
          <strong style={{ color: '#667eea' }}>This isn&apos;t another spreadsheet.</strong> This is a weekly summary designed for owners — not accountants. Clear, automated, and sent on your schedule.
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        © 2026 OwnerPulse · 
        <a href="#privacy">Privacy</a> · 
        <a href="#contact">Contact</a>
      </footer>
    </div>
  );
}
