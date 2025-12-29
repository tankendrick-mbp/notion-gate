"use client";

import { useState } from "react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit() {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });

    if (res.ok) window.location.href = "/";
    else setError("Incorrect password");
  }

  return (
    <main className="container">
      <div className="card">
        <h1>Welcome</h1>
        <p>Enter the password to continue</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
        />
        <button onClick={submit}>Continue</button>
        {error && <span className="error">{error}</span>}
      </div>
    </main>
  );
}
