type Post = { slug: string; title: string; summary: string; category: string };

const posts: Post[] = [
  {
    slug: "sydney-fringe-2025",
    title: "Sydney Fringe 2025: The Value Shift East",
    summary: "Where incentives are moving and why it matters for tenants.",
    category: "Market Insight",
  },
  {
    slug: "renew-or-relocate",
    title: "Renew or Relocate? The Three-Year Rule",
    summary: "A simple framework to time your decision and maximise leverage.",
    category: "Tenant Strategy",
  },
  {
    slug: "ai-lease-benchmarking",
    title: "AI & Lease Benchmarking: What Tenants Can Now See",
    summary: "Faster comps, sharper negotiations, clearer outcomes.",
    category: "Data Intelligence",
  },
];

export default function Insights() {
  return (
    <main
      style={{
        background: "#F4EDE2",
        minHeight: "100vh",
        padding: "64px 24px",
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <h1 style={{ color: "#4A372A", marginBottom: 8 }}>Insights</h1>
        <p style={{ color: "#4A372A", opacity: 0.85, marginBottom: 24 }}>
          Independent analysis for Sydney CBD & Fringe tenants.
        </p>

        <div
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
          }}
        >
          {posts.map((p) => (
            <a
              key={p.slug}
              href={`/insights/${p.slug}`}
              style={{
                background: "#fff",
                border: "1px solid #E6B45055",
                borderRadius: 10,
                padding: 20,
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  color: "#E6B450",
                  letterSpacing: 0.3,
                }}
              >
                {p.category}
              </span>
              <h3 style={{ color: "#4A372A", margin: "8px 0 6px" }}>
                {p.title}
              </h3>
              <p style={{ color: "#4A372A", opacity: 0.8, margin: 0 }}>
                {p.summary}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
