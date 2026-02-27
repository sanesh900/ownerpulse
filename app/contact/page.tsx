import Link from "next/link";
import PageShell from "../components/PageShell";
import { SITE_CONFIG } from "../site-config";

export const metadata = {
    title: "Contact | OwnerPulse",
    description: "Get in touch with the OwnerPulse team.",
};

export default function ContactPage() {
    return (
        <PageShell title="Contact Us" lastUpdated={SITE_CONFIG.lastUpdated}>
            <p style={{ fontSize: "1.15rem" }}>
                Have a question about OwnerPulse, the pilot programme, or your submission?
                We&apos;d love to hear from you.
            </p>

            <div style={{
                background: "#f0f4ff",
                border: "2px solid #667eea",
                borderRadius: "8px",
                padding: "2rem",
                marginTop: "1.5rem",
                marginBottom: "2rem",
            }}>
                <h2 style={{ color: "#667eea", marginBottom: "1rem" }}>Get in Touch</h2>

                <p style={{ marginBottom: "0.5rem" }}>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${SITE_CONFIG.contactEmail}`} style={{ color: "#667eea" }}>
                        {SITE_CONFIG.contactEmail}
                    </a>
                </p>

                <p style={{ marginBottom: "0.5rem" }}>
                    <strong>Location:</strong> {SITE_CONFIG.location}
                </p>

                <p style={{ marginBottom: 0, fontSize: "0.95rem", color: "#666" }}>
                    Response time: typically within 1–2 business days.
                </p>
            </div>

            <h2>What to Include in Your Email</h2>
            <ul>
                <li>Your name and company</li>
                <li>What you&apos;d like help with (e.g., pilot questions, the sample report, a general inquiry)</li>
                <li>Your PMS and roughly how many units you manage (optional but helpful)</li>
            </ul>

            <div style={{
                marginTop: "2rem",
                padding: "1.25rem",
                background: "#fff7ed",
                border: "2px solid #fed7aa",
                borderRadius: "8px",
                fontSize: "0.95rem",
                color: "#92400e",
            }}>
                <strong>🔒 Security note:</strong> We will never ask for your PMS password, login
                credentials, or any payment details over email. If anyone contacts you claiming to
                be OwnerPulse and requests these, do not respond — contact us at the email above
                to verify.
            </div>

            <p style={{ marginTop: "2rem", fontSize: "0.95rem", color: "#666" }}>
                You can also use the{" "}
                <Link href="/#form" style={{ color: "#667eea" }}>
                    sign-up form on our home page
                </Link>{" "}
                to get the sample PDF and join the pilot waitlist.
            </p>
        </PageShell>
    );
}
