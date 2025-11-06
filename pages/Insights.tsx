// pages/Insights.tsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { insights } from "../src/content/insights"; // note: ../src/... because pages/ is at project root in your repo

export default function Insights() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string>("All");

  const tags = useMemo(
    () => ["All", ...Array.from(new Set(insights.flatMap(p => p.tags ?? [])))],
    []
  );

  const filtered = insights
    .filter(p =>
      (tag === "All" || (p.tags ?? []).includes(tag)) &&
      (p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.summary.toLowerCase().includes(query.toLowerCase()))
    )
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main style={{ padding: "64px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>Insights</h1>
        <p style={{ opacity: 0.8, marginTop: 8 }}>
          Practical, tenant-first guidance for Sydney occupiers.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          <input
            placeholder="Search insights…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{ padding: "10px 12px", flex: 1, border: "1px solid #e0e0e0", borderRadius: 8 }}
          />
          <select
            value={tag}
            onChange={e => setTag(e.target.value)}
            style={{ padding: "10px 12px", border: "1px solid #e0e0e0", borderRadius: 8 }}
          >
            {tags.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 24,
        }}
      >
        {filtered.map(post => (
          <Link
            key={post.slug}
            to={`/insights/${post.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <article style={{ border: "1px solid #f0f0f0", borderRadius: 16, overflow: "hidden" }}>
              {post.hero && (
                <img
                  src={post.hero}
                  alt=""
                  style={{ width: "100%", height: 160, objectFit: "cover" }}
                />
              )}
              <div style={{ padding: 16 }}>
                <div style={{ fontSize: 12, opacity: 0.7 }}>
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <h3 style={{ margin: "6px 0 8px" }}>{post.title}</h3>
                <p style={{ opacity: 0.8 }}>{post.summary}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                  {(post.tags ?? []).map(t => (
                    <span
                      key={t}
                      style={{ fontSize: 12, padding: "4px 8px", border: "1px solid #eee", borderRadius: 999 }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
