import React from "react";

const CTA = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "480px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        marginTop: "64px", // space below pricing
      }}
    >
      {/* Gradient and grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background:
            "repeating-linear-gradient(transparent, transparent 48px, rgba(255,255,255,0.07) 49px, transparent 50px), repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(255,255,255,0.07) 49px, transparent 50px)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", width: "100%" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "600",
            marginBottom: "32px",
            lineHeight: "1.1",
            color: "#fff",
          }}
        >
          Intelligent Campaigns at <br /> your Click
        </h1>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
          }}
          onSubmit={e => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email"
            style={{
              padding: "12px 18px",
              borderRadius: "8px",
              border: "1px solid #444",
              background: "rgba(30,30,30,0.7)",
              color: "#fff",
              fontSize: "1rem",
              outline: "none",
              width: "240px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              background: "#fff",
              color: "#222",
              fontWeight: "500",
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              transition: "background 0.2s",
            }}
          >
            Join waitlist
          </button>
        </form>
        <div
          style={{
            color: "#ccc",
            fontSize: "1.1rem",
            marginTop: "8px",
            letterSpacing: "0.01em",
          }}
        >
          No credit card required &nbsp;·&nbsp; 7-days free trial
        </div>
      </div>
    </section>
  );
};

export default CTA;