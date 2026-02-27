import Link from "next/link";
import SiteFooter from "./SiteFooter";

interface PageShellProps {
    title: string;
    lastUpdated?: string;
    children: React.ReactNode;
}

/**
 * Reusable shell for legal / informational pages.
 * Provides a header with back link, a title with last-updated date,
 * page content, and the shared footer.
 */
export default function PageShell({ title, lastUpdated, children }: PageShellProps) {
    return (
        <div className="container" style={{ maxWidth: "760px" }}>
            <div style={{ paddingTop: "2rem", marginBottom: "2rem" }}>
                <Link
                    href="/"
                    style={{
                        color: "#667eea",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                    }}
                >
                    ← Back to OwnerPulse
                </Link>
            </div>

            <section style={{ background: "white", padding: "2.5rem 2rem", borderRadius: "8px" }}>
                <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{title}</h1>
                {lastUpdated && (
                    <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: "2rem" }}>
                        Last updated: {lastUpdated}
                    </p>
                )}
                <div style={{ lineHeight: 1.75 }}>{children}</div>
            </section>

            <SiteFooter />
        </div>
    );
}
