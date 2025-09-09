// app/dashboard/project/[id]/page.tsx
import { notFound } from "next/navigation";
import TaskActions from "../../../components/TaskActions"; // relative to this file

type Props = {
  params: { id: string };
};

const PROJECTS = [
  {
    id: "p1",
    name: "Website redesign",
    description: "Refresh UI and improve performance",
    progress: 72,
  },
  {
    id: "p2",
    name: "Client onboarding",
    description: "Automate welcome emails & docs",
    progress: 40,
  },
  {
    id: "p3",
    name: "Marketing sprint",
    description: "Run short campaigns and measure conversions",
    progress: 15,
  },
];

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="page">
      <div className="container stack" style={{ gap: 24 }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{ margin: 0 }}>{project!.name}</h1>
            <div className="muted" style={{ marginTop: 6 }}>{project!.description}</div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div className="kv">Progress</div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>{project!.progress}%</div>
          </div>
        </header>

        <section className="card">
          <h3 style={{ marginTop: 0 }}>Overview</h3>
          <p style={{ color: "var(--text)" }}>
            This is a placeholder detail page for <strong>{project!.name}</strong>.
            Later this will be backed by the database so you can add tasks, time entries, and notes for this project.
          </p>

          <div style={{ marginTop: 12 }}>
            <div className="progress" aria-hidden>
              <i style={{ width: `${project!.progress}%` }} />
            </div>
          </div>
        </section>

        <section>
          <h3 style={{ marginBottom: 8 }}>Quick actions</h3>
          <div className="card">
            {/* Client component handles interactive actions like onClick */}
            <TaskActions />
          </div>
        </section>

        <section>
          <h3 style={{ marginBottom: 8 }}>Recent activity</h3>
          <div className="card">
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>Task “Design hero section” moved to In Progress • 2 days ago</li>
              <li>Time entry: 1.5h by You • 3 days ago</li>
              <li>Comment: “Initial draft ready” • 5 days ago</li>
            </ul>
          </div>
        </section>

        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/dashboard" className="btn btn-outline" style={{ padding: "8px 12px" }}>Back to dashboard</a>
          <span className="muted">Project ID: {project!.id}</span>
        </nav>
      </div>
    </main>
  );
}
