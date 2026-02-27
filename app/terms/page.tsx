import PageShell from "../components/PageShell";
import { SITE_CONFIG } from "../site-config";

export const metadata = {
    title: "Terms of Service | OwnerPulse",
    description: "Terms governing use of the OwnerPulse pilot programme.",
};

export default function TermsPage() {
    return (
        <PageShell title="Terms of Service" lastUpdated={SITE_CONFIG.lastUpdated}>
            <h2>1. Pilot / Early Access Disclaimer</h2>
            <p>
                OwnerPulse is currently in an early access / pilot phase. Features, pricing,
                availability, and scope may change without notice. By submitting the sign-up form,
                you are expressing interest in the pilot programme — not purchasing a subscription.
                Participation in the pilot is at our discretion and does not constitute a binding
                commercial agreement.
            </p>

            <h2>2. As-Is Service</h2>
            <p>
                Any materials, sample reports, or communications provided by OwnerPulse during
                the pilot phase are provided &ldquo;as is&rdquo; without warranties of any kind, express or
                implied. We do not guarantee that the service will be error-free, uninterrupted,
                or meet any specific performance standard.
            </p>

            <h2>3. User Responsibilities</h2>
            <ul>
                <li>You agree to provide accurate information when signing up.</li>
                <li>You will not use OwnerPulse for unlawful purposes.</li>
                <li>You are responsible for your own data and the data of your property owners.</li>
                <li>You will not attempt to access systems or data you are not authorised to access.</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
                OwnerPulse owns all rights to the OwnerPulse product, branding, report templates,
                and website content. Your own business data — including data about your properties
                and your owners — remains yours. No transfer of IP is implied by participating in
                the pilot.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
                To the maximum extent permitted by applicable law, OwnerPulse and its founders
                shall not be liable for any indirect, incidental, special, or consequential damages
                arising from your use of or inability to use the service. Our total liability to
                you, if any, shall not exceed the amounts you have paid us (which, during the
                free pilot phase, is zero).
            </p>

            <h2>6. No Credential Collection</h2>
            <p>
                OwnerPulse does not request or collect your PMS passwords, login credentials, or
                any sensitive account information at this stage. Do not share passwords with anyone
                claiming to represent OwnerPulse &mdash; we will never ask.
            </p>

            <h2>7. Termination</h2>
            <p>
                We may suspend or terminate your participation in the pilot at any time for any
                reason, including but not limited to misuse, inaccurate information, or business
                decisions. You may withdraw from the pilot at any time by emailing us.
            </p>

            <h2>8. Governing Law</h2>
            <p>
                These terms are governed by the laws of the Republic of South Africa. Any disputes
                shall be subject to the jurisdiction of the South African courts.
            </p>

            <h2>9. Changes to These Terms</h2>
            <p>
                We may update these Terms from time to time. We will post the updated version on
                this page with a revised &ldquo;Last updated&rdquo; date. Continued participation after changes
                constitutes acceptance of the updated terms.
            </p>

            <h2>10. Contact</h2>
            <p>
                Questions about these Terms? Email us at:{" "}
                <a href={`mailto:${SITE_CONFIG.contactEmail}`} style={{ color: "#667eea" }}>
                    {SITE_CONFIG.contactEmail}
                </a>
            </p>
        </PageShell>
    );
}
