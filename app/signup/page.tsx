// app/signup/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Signup form submitted:\nEmail: ${email}\nPassword: ${password}`);
  }

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        padding: 36,
        maxWidth: 400,
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 20 }}>Create your account</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 14 }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "10px 12px",
            borderRadius: 8,
            border: "1px solid #d1d5db",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: "10px 12px",
            borderRadius: 8,
            border: "1px solid #d1d5db",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px 18px",
            borderRadius: 8,
            background: "#111827",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sign up
        </button>
      </form>

      <p style={{ marginTop: 20, fontSize: 14 }}>
        Already have an account?{" "}
        <Link href="/" style={{ color: "#111827", textDecoration: "underline" }}>
          Go back home
        </Link>
      </p>
    </main>
  );
}
