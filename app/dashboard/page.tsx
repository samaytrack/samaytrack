// app/dashboard/page.tsx
import Link from "next/link";
import ClientActions from "../components/ClientActions";

export default function Dashboard() {
  const projects = [
    { id: "p1", name: "Website redesign", progress: 72 },
    { id: "p2", name: "Client onboarding", progress: 40 },
    { id: "p3", name: "Marketing sprint", progress: 15 },
  ];

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 36, maxWidth: 1000, margin: "0 auto" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>Dashboard</h1>
        <nav>
          <Link href="/" style={{ marginRight: 12, textDecoration: "none", color: "#374151" }}>Home</Link>
          <Link href="/signup" style={{ textDecoration: "none", color: "#374151" }}>Signup</Link>
        </nav>
      </header>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 18, marginBottom: 12 }}>Your projects</h2>

        <div style={{ display: "grid", gap: 12 }}>
          {projects.map((p) => (
            <div key={p.id} style={{ padding: 16, borderRadius: 8, border: "1px solid #e6e6e6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 600 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: "#6b7280" }}>Progress: {p.progress}%</div>
              </div>

              <div style={{ minWidth: 160, textAlign: "right" }}>
                <div style={{ height: 10, background: "#f3f4f6", borderRadius: 6, overflow: "hidden", marginBottom: 6 }}>
                  <div style={{ width: `${p.progress}%`, height: "100%", background: "#111827" }} />
                </div>
                <Link href={`/dashboard/project/${p.id}`} style={{ fontSize: 13, textDecoration: "none", color: "#111827" }}>
                  Open
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 style={{ marginTop: 0 }}>Quick actions</h3>
        <ClientActions />
      </section>
    </main>
  );
}
