"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          backgroundColor: "#f8fafa",
          color: "#383837",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div style={{ maxWidth: "34rem" }}>
          <p
            style={{
              margin: 0,
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#00727d",
            }}
          >
            Something went wrong
          </p>
          <h1 style={{ marginTop: "1rem", fontSize: "1.875rem", lineHeight: 1.2 }}>
            The site could not be loaded
          </h1>
          <p style={{ marginTop: "1rem", lineHeight: 1.7, color: "#5a5a58" }}>
            An unexpected error occurred. Please try again, or reload the page.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "1.75rem",
              border: 0,
              cursor: "pointer",
              borderRadius: "9999px",
              backgroundColor: "#00727d",
              color: "#fff",
              padding: "0.75rem 1.25rem",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
