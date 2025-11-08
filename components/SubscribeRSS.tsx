import { Rss } from 'lucide-react';

export function SubscribeRSS() {
  return (
    <a
      href="/rss.xml"
      rel="alternate"
      type="application/rss+xml"
      className="inline-flex items-center gap-2 bg-[#E6B450] text-[#4A372A] px-4 py-2.5 rounded hover:opacity-90 transition-opacity"
      aria-label="Subscribe to Locale Advisory Insights via RSS"
      title="Subscribe to Locale Advisory Insights via RSS"
    >
      <Rss size={16} />
      <span className="text-sm">Subscribe via RSS</span>
    </a>
  );
}
