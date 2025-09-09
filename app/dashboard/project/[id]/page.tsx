// app/dashboard/project/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

// Example placeholder "database"
const PROJECTS = [
  { id: "p1", name: "Website redesign", description: "Refresh UI and improve performance", progress: 72 },
  { id: "p2", name: "Client onboarding", description: "Automate welcome emails & docs", progress: 40 },
  { id: "p3", name: "Marketing sprint", description: "Run short campaigns and measure conversions", progress: 15 },
];

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    // show 404 if not found
    notFound();
  }

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 36, maxWidth: 900, margin: "0 auto" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div>
          <h1 style={{ margin: 0 }}>{project!.name}</h1>
          <div style={{ color: "#6b7280", marginTop: 6 }}>{project!.description}</div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 13, color: "#6b7280" }}>Progress</div>
          <div style={{ fontWeight: 700 }}>{project!.progress}%</div>
        </div>
      </header>

      <section style={{ marginBottom: 20 }}>
        <h3 style={{ marginBottom: 8 }}>Overview</h3>
        <p style={{ color: "#374151" }}>
          This is a placeholder detail page for <strong>{project!.name}</strong>. Later we’ll wire this to the database so you can add tasks, time entries and notes per project.
        </p>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h3 style={{ marginBottom: 8 }}>Quick actions</h3>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => alert("Add task (placeholder)")}
            style={{ padding: "8px 12px", borderRadius: 8, border: "none", background: "#111827", color: "white", cursor: "pointer" }}
          >
            + Add task
          </button>

          <Link href="/dashboard" style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #111827", textDecoration: "none", color: "#111827" }}>
            Back to dashboard
          </Link>
        </div>
      </section>

      <section>
        <h3 style={{ marginBottom: 8 }}>Recent activity</h3>
        <ul style={{ color: "#374151" }}>
          <li>Task “Design hero section” moved to In Progress • 2 days ago</li>
          <li>Time entry: 1.5h by You • 3 days ago</li>
          <li>Comment: “Initial draft ready” • 5 days ago</li>
        </ul>
      </section>
    </main>
  );
}
