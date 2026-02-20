"use client";

import React, { useState } from "react";

export default function DownloadPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    setDone(false);
    setError(false);
    try {
      const res = await fetch("/api/download");
      if (!res.ok) throw new Error("Failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "score-smart-website.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setDone(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0f0ff 0%, #e8f0fe 50%, #f8faff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', system-ui, sans-serif",
        padding: "24px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "24px",
          boxShadow: "0 25px 60px rgba(79,70,229,0.15)",
          padding: "48px 40px",
          maxWidth: "480px",
          width: "100%",
          textAlign: "center",
          border: "1px solid #e2e8f0",
        }}
      >
        {/* Logo / Icon */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #4f46e5, #3b82f6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            boxShadow: "0 8px 24px rgba(79,70,229,0.35)",
          }}
        >
          {/* Archive icon */}
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="21 8 21 21 3 21 3 8" />
            <rect x="1" y="3" width="22" height="5" />
            <line x1="10" y1="12" x2="14" y2="12" />
          </svg>
        </div>

        <h1
          style={{
            fontSize: "26px",
            fontWeight: "800",
            color: "#0f172a",
            marginBottom: "12px",
            lineHeight: "1.2",
          }}
        >
          Download Score Smart
        </h1>
        <p
          style={{
            color: "#64748b",
            fontSize: "15px",
            lineHeight: "1.6",
            marginBottom: "32px",
          }}
        >
          Download the complete source code of the Score Smart IELTS website as a
          ZIP file — ready to deploy.
        </p>

        {/* File contents list */}
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "12px",
            padding: "16px 20px",
            marginBottom: "32px",
            textAlign: "left",
            border: "1px solid #e2e8f0",
          }}
        >
          <p style={{ fontSize: "12px", fontWeight: "700", color: "#4f46e5", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
            What&apos;s included
          </p>
          {[
            "📁 src/ — All Next.js pages & components",
            "🖼️ public/ — Images & favicon",
            "⚙️ package.json, next.config.ts",
            "🎨 Tailwind CSS config",
            "📦 TypeScript config",
          ].map((item, i) => (
            <div key={i} style={{ fontSize: "13px", color: "#334155", padding: "4px 0", display: "flex", alignItems: "center", gap: "8px" }}>
              {item}
            </div>
          ))}
        </div>

        {/* Download button */}
        <button
          onClick={handleDownload}
          disabled={loading}
          style={{
            width: "100%",
            padding: "16px 24px",
            background: loading
              ? "#a5b4fc"
              : done
              ? "#10b981"
              : "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "14px",
            fontSize: "16px",
            fontWeight: "700",
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: loading ? "none" : "0 8px 24px rgba(79,70,229,0.35)",
            transition: "all 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            outline: "none",
          }}
          onMouseEnter={(e) => {
            if (!loading && !done)
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          {loading ? (
            <>
              <span
                style={{
                  display: "inline-block",
                  width: "18px",
                  height: "18px",
                  border: "3px solid rgba(255,255,255,0.4)",
                  borderTopColor: "#fff",
                  borderRadius: "50%",
                  animation: "spin 0.8s linear infinite",
                }}
              />
              Packaging...
            </>
          ) : done ? (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Downloaded!
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Full Code (.zip)
            </>
          )}
        </button>

        {error && (
          <p style={{ color: "#ef4444", marginTop: "12px", fontSize: "14px" }}>
            Something went wrong. Please try again.
          </p>
        )}

        {done && (
          <p style={{ color: "#10b981", marginTop: "12px", fontSize: "14px", fontWeight: "600" }}>
            Your ZIP has been saved to your Downloads folder.
          </p>
        )}

        <p style={{ color: "#94a3b8", fontSize: "12px", marginTop: "20px" }}>
          Run with{" "}
          <code style={{ background: "#f1f5f9", padding: "2px 6px", borderRadius: "4px", fontFamily: "monospace" }}>
            bun install &amp;&amp; bun dev
          </code>
        </p>

        <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #f1f5f9" }}>
          <a
            href="/"
            style={{
              color: "#4f46e5",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            ← Back to Website
          </a>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
