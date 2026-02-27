import Link from "next/link";
import { SITE_CONFIG } from "../site-config";

export default function SiteFooter() {
    return (
        <footer style={{
            borderTop: "1px solid #e5e7eb",
            marginTop: "2rem",
            paddingTop: "2rem",
            textAlign: "center",
            color: "#666",
            fontSize: "0.9rem",
        }}>
            <nav style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "0.25rem 1.25rem",
                marginBottom: "1rem",
            }}>
                <Link href="/" style={{ color: "#667eea", textDecoration: "none" }}>Home</Link>
                <span style={{ color: "#ccc" }}>|</span>
                <a
                    href={SITE_CONFIG.samplePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#667eea", textDecoration: "none" }}
                >
                    Sample PDF
                </a>
                <span style={{ color: "#ccc" }}>|</span>
                <Link href="/about" style={{ color: "#667eea", textDecoration: "none" }}>About</Link>
                <span style={{ color: "#ccc" }}>|</span>
                <Link href="/contact" style={{ color: "#667eea", textDecoration: "none" }}>Contact</Link>
                <span style={{ color: "#ccc" }}>|</span>
                <Link href="/privacy" style={{ color: "#667eea", textDecoration: "none" }}>Privacy</Link>
                <span style={{ color: "#ccc" }}>|</span>
                <Link href="/terms" style={{ color: "#667eea", textDecoration: "none" }}>Terms</Link>
            </nav>
            <p style={{ marginBottom: "0.25rem" }}>© {SITE_CONFIG.year} {SITE_CONFIG.name}</p>
            <p style={{ fontSize: "0.8rem", color: "#999", margin: "0.25rem 0 0" }}>
                OwnerPulse is an independent tool and is not affiliated with or endorsed by Hostaway or any other PMS provider.
            </p>
        </footer>
    );
}
