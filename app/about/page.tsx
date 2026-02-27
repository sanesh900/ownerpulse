import Link from "next/link";
import PageShell from "../components/PageShell";
import { SITE_CONFIG } from "../site-config";

export const metadata = {
    title: "About | OwnerPulse",
    description: "OwnerPulse is an independent tool that turns short-term rental data into owner-ready weekly summaries.",
};

export default function AboutPage() {
    return (
        <PageShell title="About OwnerPulse" lastUpdated={SITE_CONFIG.lastUpdated}>
            <h2>What Is OwnerPulse?</h2>
            <p>
                OwnerPulse is an independent product that gives short-term rental property managers
                a simple way to send owner-ready weekly summaries — automatically.
            </p>
            <p>
                Instead of spending hours each week exporting data, writing individual update emails,
                and fielding &quot;how&apos;s my property doing?&quot; calls, property managers can
                send clear, professional updates on a schedule — without typing a word.
            </p>

            <h2>What We Provide</h2>
            <ul>
                <li>Weekly performance summaries (occupancy, revenue, ADR, pace)</li>
                <li>Narrative context — not just numbers, but what changed and why</li>
                <li>Maintenance highlights and upcoming action items</li>
                <li>Portfolio summaries for owners with multiple properties</li>
                <li>White-labeled output with your branding</li>
            </ul>

            <h2>Who We Built This For</h2>
            <p>
                Professional property managers who handle 20 or more short-term rental units and
                are currently spending significant time on owner communication each month.
                OwnerPulse works best with <strong>Hostaway</strong> today — with more PMS
                integrations planned.
            </p>

            <h2>Independence &amp; No Affiliations</h2>
            <div style={{
                background: "#f0f4ff",
                border: "2px solid #667eea",
                borderRadius: "8px",
                padding: "1.5rem",
                marginBottom: "1.5rem",
            }}>
                <p style={{ margin: 0, fontWeight: 600, color: "#667eea" }}>
                    OwnerPulse is an independent product and is not affiliated with, endorsed by,
                    or officially connected to Hostaway or any other property management software
                    provider. Any PMS names mentioned are solely to describe compatibility.
                </p>
            </div>

            <h2>Who Is Behind OwnerPulse?</h2>
            <p>
                OwnerPulse is built by an independent founder based in Durban, South Africa. It
                was created out of first-hand observation of how much time property managers waste
                on manual owner reporting — time that could be spent growing their business.
            </p>
            <p>
                We are a solo operation at this stage, which means we move fast, are highly
                responsive, and genuinely care about whether this tool saves you time.
            </p>

            <h2>No Credential Collection — Ever</h2>
            <p>
                OwnerPulse does not collect, request, or store your PMS login credentials,
                passwords, or any sensitive account access information. Our onboarding will
                never ask for your password. If anyone contacts you claiming to be OwnerPulse
                and requests login details, that is not us.
            </p>

            <h2>Current Status</h2>
            <p>
                OwnerPulse is currently in an early pilot phase. We are working directly with
                property managers to refine the product before a wider release. If you&apos;re
                interested in being an early pilot partner, use the{" "}
                <Link href="/#form" style={{ color: "#667eea" }}>sign-up form on our home page</Link>.
            </p>

            <h2>Questions?</h2>
            <p>
                Reach us at:{" "}
                <a href={`mailto:${SITE_CONFIG.contactEmail}`} style={{ color: "#667eea" }}>
                    {SITE_CONFIG.contactEmail}
                </a>
            </p>
        </PageShell>
    );
}
