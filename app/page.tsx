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
          <a href="/Weekly Owner Update - Sample2.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get Sample Owner Update</a>
          <a href="#form" className="btn btn-secondary">Join Pilot Program</a>
        </div>
        
        <div className="small-text">
          Built for professional short-term rental managers.
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
        <h2>Standard PMS vs. PMS + OwnerPulse</h2>
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
                <span>Copy/paste data into emails</span>
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
                <span>3-5 hours/month per owner</span>
              </li>
            </ul>
          </div>
          <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '8px', border: '2px solid #86efac' }}>
            <h3 style={{ color: '#16a34a', marginBottom: '1rem' }}>With OwnerPulse</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#16a34a', marginRight: '0.5rem', fontSize: '1.2rem' }}>✅</span>
                <span>Automatic weekly updates sent</span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#16a34a', marginRight: '0.5rem', fontSize: '1.2rem' }}>✅</span>
                <span>Data pulled directly from Hostaway</span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#16a34a', marginRight: '0.5rem', fontSize: '1.2rem' }}>✅</span>
                <span>Owners get proactive insights</span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#16a34a', marginRight: '0.5rem', fontSize: '1.2rem' }}>✅</span>
                <span>You look like a pro operation</span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#16a34a', marginRight: '0.5rem', fontSize: '1.2rem' }}>✅</span>
                <span><strong>90% time saved</strong></span>
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
            Stop being the middleman. Let your PMS data do the talking.
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

      {/* PORTFOLIO DASHBOARD SECTION - NEW! */}
      <section style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)', border: '2px solid #667eea' }}>
        <h2>Portfolio Dashboard for Multi-Property Owners</h2>
        <p style={{ fontSize: '1.15rem', color: '#555' }}>
          Owners with multiple properties don&apos;t want 3 separate PDFs. They want one view of their entire portfolio.
        </p>
        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: '#667eea', marginBottom: '1rem' }}>Portfolio Summary</h3>
            <ul style={{ fontSize: '1rem' }}>
              <li>Combined revenue across all properties</li>
              <li>Average occupancy rate</li>
              <li>Best & worst performing properties</li>
              <li>Total maintenance costs this month</li>
              <li>Upcoming opportunities across portfolio</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: '#667eea', marginBottom: '1rem' }}>Individual Breakdowns</h3>
            <ul style={{ fontSize: '1rem' }}>
              <li>Click any property for detailed view</li>
              <li>Same weekly update format</li>
              <li>Property-specific insights</li>
              <li>Compare property performance</li>
              <li>Spot trends across portfolio</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'white', borderRadius: '8px', border: '2px solid #667eea' }}>
          <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#667eea', margin: 0, textAlign: 'center' }}>
            One glance. Full portfolio clarity. Then drill down as needed.
          </p>
        </div>
      </section>

      {/* PREVIEW SECTION */}
      <section>
        <h2>What Owners Receive Each Week</h2>
        <p>This is an example of the automated update your owners would get.</p>
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

      {/* WHO IT'S FOR SECTION */}
      <section>
        <h2>Who It&apos;s For</h2>
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
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Your data never leaves Hostaway</p>
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
