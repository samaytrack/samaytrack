// app/components/ClientActions.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function ClientActions() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <button
        onClick={() => alert("Create project (placeholder)")}
        style={{
          padding: "8px 12px",
          borderRadius: 8,
          border: "none",
          background: "#111827",
          color: "white",
          cursor: "pointer",
        }}
      >
        + New project
      </button>

      <Link
        href="/"
        style={{
          padding: "8px 12px",
          borderRadius: 8,
          border: "1px solid #111827",
          textDecoration: "none",
          color: "#111827",
        }}
      >
        Back to home
      </Link>
    </div>
  );
}
