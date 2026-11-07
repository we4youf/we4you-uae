"use client";

export default function FloatingBackButton() {
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        right: "1rem",
        bottom: "1rem",
        zIndex: 50,
        border: "2px solid #080808",
        background: "#ffffff",
        color: "#080808",
        padding: "0.6rem 0.8rem",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: 700,
      }}
    >
      ↑
    </button>
  );
}
