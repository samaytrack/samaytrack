// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        padding: 48,
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: 42, marginBottom: 8 }}>Samaytrack</h1>
      <p style={{ fontSize: 18, color: "#374151", marginBottom: 24 }}>
        Simple, fast tracking for projects, tasks and time — built to help
        freelancers and small teams take control of work.
      </p>

      <section
        style={{
          display: "grid",
          gap: 12,
          gridTemplateColumns: "1fr 1fr",
          marginBottom: 28,
        }}
      >
        <div
          style={{
            padding: 18,
            borderRadius: 10,
            border: "1px solid #e6e6e6",
          }}
        >
          <h3 style={{ margin: 0 }}>Track projects</h3>
          <p style={{ marginTop: 8, color: "#6b7280" }}>
            Create projects, add tasks, and see progress at a glance.
          </p>
        </div>

        <div
          style={{
            padding: 18,
            borderRadius: 10,
            border: "1px solid #e6e6e6",
          }}
        >
          <h3 style={{ margin: 0 }}>Time & Reports</h3>
          <p style={{ marginTop: 8, color: "#6b7280" }}>
            Record time, generate simple reports, export CSV.
          </p>
        </div>
      </section>

      <div style={{ display: "flex", gap: 12 }}>
        <Link
          href="/signup"
          style={{
            padding: "12px 18px",
            borderRadius: 8,
            background: "#111827",
            color: "white",
            textDecoration: "none",
          }}
        >
          Get started — Free
        </Link>

        <Link
          href="/dashboard"
          style={{
            padding: "12px 18px",
            borderRadius: 8,
            border: "1px solid #111827",
            color: "#111827",
            textDecoration: "none",
          }}
        >
          View demo dashboard
        </Link>
      </div>

      <footer style={{ marginTop: 40, color: "#9ca3af" }}>
        <small>Built with ♥ — Samaytrack</small>
      </footer>
    </main>
  );
}
