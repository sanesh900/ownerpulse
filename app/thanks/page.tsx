import Link from "next/link";

export default function Thanks() {
  return (
    <div className="container">
      <div className="thanks-container">
        <h1>You&apos;re in.</h1>
        <p>Thanks — we&apos;ll email the sample owner update shortly.</p>
        <p className="secondary-text">
          If you want to move faster, reply with: PMS used + units managed + how you report to owners today.
        </p>
        <Link href="/" className="back-link">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
