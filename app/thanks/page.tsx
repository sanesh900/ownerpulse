'use client';

import Link from "next/link";
import { useEffect } from "react";

export default function Thanks() {
  // Track conversion when page loads
  useEffect(() => {
    // Google Ads conversion tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17944653028/CONVERSION_LABEL', // Replace CONVERSION_LABEL with your actual label from Google Ads
      });
    }
  }, []);
  return (
    <div className="container">
      <div className="thanks-container">
        <h1>You&apos;re on the Pilot Waitlist</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
          Thanks for your interest in OwnerPulse. We&apos;ll reach out shortly to discuss your setup.
        </p>
        <div style={{ 
          background: '#f0f4ff', 
          padding: '1.5rem', 
          borderRadius: '8px', 
          marginBottom: '2rem',
          textAlign: 'left',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          <p style={{ fontWeight: 600, color: '#667eea', marginBottom: '0.75rem' }}>
            What happens next:
          </p>
          <ul style={{ marginBottom: 0, paddingLeft: '1.5rem', textAlign: 'left' }}>
            <li style={{ marginBottom: '0.5rem' }}>We&apos;ll review your submission</li>
            <li style={{ marginBottom: '0.5rem' }}>Reach out within 1-2 business days</li>
            <li style={{ marginBottom: '0.5rem' }}>Discuss your Hostaway setup</li>
            <li>Get you started with pilot access</li>
          </ul>
        </div>
        <p className="secondary-text" style={{ marginBottom: '1.5rem' }}>
          <strong>Didn&apos;t download the sample yet?</strong>
        </p>
        <Link href="/" className="back-link" style={{ 
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          background: '#667eea',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          marginBottom: '1rem'
        }}>
          Download Sample Owner Update
        </Link>
        <br />
        <Link href="/" className="back-link" style={{ fontSize: '0.9rem' }}>
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
