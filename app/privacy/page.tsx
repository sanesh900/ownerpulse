import PageShell from "../components/PageShell";
import { SITE_CONFIG } from "../site-config";

export const metadata = {
    title: "Privacy Policy | OwnerPulse",
    description: "How OwnerPulse collects, uses, and protects your information.",
};

export default function PrivacyPage() {
    return (
        <PageShell title="Privacy Policy" lastUpdated={SITE_CONFIG.lastUpdated}>
            <h2>Overview</h2>
            <p>
                OwnerPulse is an independent product built to help short-term rental property managers
                send automated weekly owner updates. This Privacy Policy explains what information we
                collect, why we collect it, and how we handle it.
            </p>

            <h2>What We Collect</h2>
            <p>When you submit our sign-up form, we collect:</p>
            <ul>
                <li><strong>Name</strong> — to address you personally</li>
                <li><strong>Company name</strong> — to understand your business</li>
                <li><strong>Email address</strong> — to send the sample update and follow up</li>
                <li><strong>PMS used</strong> — to understand your workflow</li>
                <li><strong>Number of units managed</strong> — to assess fit for pilot</li>
                <li><strong>Your biggest owner-reporting headache</strong> — to tailor our response</li>
            </ul>

            <h2>What We Do NOT Collect</h2>
            <ul>
                <li>Passwords or login credentials of any kind</li>
                <li>Payment information or billing details</li>
                <li>Government IDs or sensitive personal data</li>
                <li>Access to your PMS account (we do not request OAuth or API tokens at this stage)</li>
            </ul>

            <h2>Why We Collect This Information</h2>
            <ul>
                <li>To send you the sample weekly owner update PDF</li>
                <li>To follow up about pilot onboarding</li>
                <li>To understand how we can best serve property managers</li>
            </ul>

            <h2>How Your Data Is Stored</h2>
            <p>
                Form submissions are processed through Formspree, a third-party form service. Your
                submission data is stored in our Formspree account inbox for operational purposes.
                We do not operate our own database servers at this stage. We take reasonable care to
                limit access to submission data to the product team only.
            </p>

            <h2>Sharing Your Information</h2>
            <p>
                We do not sell, rent, or trade your personal information. We only share data with
                service providers (such as Formspree) as necessary to operate our contact and
                pilot onboarding process. These providers are contractually limited in how they
                may use your data.
            </p>

            <h2>Cookies &amp; Analytics</h2>
            <p>
                Our website may use basic analytics to understand site traffic (e.g., page views,
                referral sources). We may use Google Ads conversion tracking. These tools may set
                cookies on your browser. We do not use cookies to identify you personally beyond
                standard analytics purposes.
            </p>

            <h2>Data Retention</h2>
            <p>
                We retain your submission data while it is needed for pilot evaluation and follow-up.
                You may request deletion of your data at any time by emailing us at{" "}
                <a href={`mailto:${SITE_CONFIG.contactEmail}`} style={{ color: "#667eea" }}>
                    {SITE_CONFIG.contactEmail}
                </a>
                . We will action deletion requests within 14 business days.
            </p>

            <h2>Your Rights</h2>
            <p>
                You have the right to access, correct, or request deletion of any personal data we
                hold about you. To exercise these rights, contact us at the email address below.
            </p>

            <h2>Contact</h2>
            <p>
                For privacy-related questions or requests, email:{" "}
                <a href={`mailto:${SITE_CONFIG.contactEmail}`} style={{ color: "#667eea" }}>
                    {SITE_CONFIG.contactEmail}
                </a>
            </p>
        </PageShell>
    );
}
