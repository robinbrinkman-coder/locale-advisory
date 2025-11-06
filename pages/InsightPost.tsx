// pages/InsightPost.tsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { insights } from "../src/content/insights";

function setMeta(opts: { title?: string; description?: string; image?: string }) {
  if (opts.title) document.title = `${opts.title} – Locale Advisory`;
  const ensure = (selector: string, attr: string, content: string) => {
    let el = document.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement("meta");
      if (selector.startsWith('meta[name="')) {
        el.setAttribute("name", selector.split('"')[1]);
      } else if (selector.startsWith('meta[property="')) {
        el.setAttribute("property", selector.split('"')[1]);
      }
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };
  if (opts.description) {
    ensure('meta[name="description"]', "content", opts.description);
    ensure('meta[property="og:description"]', "content", opts.description);
    ensure('meta[name="twitter:description"]', "content", opts.description);
  }
  if (opts.title) {
    ensure('meta[property="og:title"]', "content", opts.title);
    ensure('meta[name="twitter:title"]', "content", opts.title);
  }
  if (opts.image) {
    ensure('meta[property="og:image"]', "content", opts.image);
    ensure('meta[name="twitter:image"]', "content", opts.image);
  }
}

export default function InsightPost() {
  const { slug } = useParams();
  const post = insights.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) return;
    setMeta({
      title: post.title,
      description: post.summary,
      image: post.hero,
    });
  }, [post]);

  if (!post) {
    return (
      <main style={{ padding: 48 }}>
        <p>Post not found.</p>
        <Link to="/insights">← Back to Insights</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "64px 24px", maxWidth: 860, margin: "0 auto" }}>
      <Link to="/insights" style={{ textDecoration: "none" }}>← Back to Insights</Link>
      <article>
        <h1 style={{ marginTop: 12 }}>{post.title}</h1>
        <div style={{ opacity: 0.7, marginBottom: 16 }}>
          {new Date(post.date).toLocaleDateString()}
          {(post.tags?.length ?? 0) > 0 && <> · {post.tags!.join(" · ")}</>}
        </div>
        {post.hero && (
          <img
            src={post.hero}
            alt=""
            style={{ width: "100%", height: 360, objectFit: "cover", borderRadius: 16 }}
          />
        )}
        <div style={{ marginTop: 24, lineHeight: 1.6 }}>{post.body}</div>
      </article>
    </main>
  );
}
