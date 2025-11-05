// src/content/insights.tsx
import React from "react";

export type Insight = {
  slug: string;        // used in the URL
  title: string;       // H1 and <title>
  date: string;        // ISO string: YYYY-MM-DD
  summary: string;     // card teaser + meta description
  hero?: string;       // /images/insights/filename.jpg (public folder)
  tags?: string[];     // simple filter chips
  body: JSX.Element;   // render-ready content
};

/**
 * ARTICLE 1 — Sydney CBD 2025: Tenant Market Outlook
 * Hero image: /public/images/insights/outlook-2025.jpg
 */
export const insights: Insight[] = [
  {
    slug: "sydney-cbd-2025-tenant-outlook",
    title: "Sydney CBD 2025: Tenant Market Outlook",
    date: "2025-11-06",
    summary:
      "Incentives are holding but polarised by asset quality. Use timing, sublease stock, and ESG to pull better terms.",
    hero: "/images/insights/outlook-2025.jpg",
    tags: ["Market", "Sydney CBD", "ESG"],
    body: (
      <>
        <p>
          Sydney’s CBD enters 2025 with three forces shaping tenant outcomes:
          (1) a still-elevated incentive environment, (2) a persistent sublease
          overhang in mid-grade assets, and (3) a growing premium for ESG-ready
          space that de-risks corporate reporting. For occupiers, this is a
          “barbell” market: the best buildings and best floors move—everything
          else negotiates.
        </p>

        <h3>Incentives</h3>
        <p>
          In prime and near-prime, face rents stay resilient while incentives
          hold firm but disciplined. Landlords will lean into turnkey works to
          reduce tenant capex—provided covenant and term stack up. B-grade and
          some fringe locations are more flexible: longer rent-free,
          landlord-funded make-good, and staged escalations are all in play.
        </p>

        <h3>Sublease stock</h3>
        <p>
          The shadow market remains meaningful, especially for 500–2,000 sqm.
          True plug-and-play floors with existing compliance and services can
          cut 8–12 weeks off your timeline. Watch reinstatement liability and
          head-landlord consent—both can erase headline savings if not scoped in
          the HoA.
        </p>

        <h3>ESG premium</h3>
        <p>
          Demand concentrates in assets with credible NABERS, electrification
          roadmaps, and end-of-trip that staff actually use. If you’re reporting
          Scope 2/3, run an early building systems check: chiller age, BMS,
          lighting controls, and after-hours policy. The better the data, the
          sharper your business case.
        </p>

        <h3>Tactics for tenants (2025)</h3>
        <ul>
          <li>
            <b>Start earlier than you think.</b> Six months for small moves;
            9–12 months if you’re re-planning or consolidating.
          </li>
          <li>
            <b>Trade term for works.</b> Convert free rent into targeted
            landlord capex (base-build upgrades, services rectification,
            compliance items) when your covenant/tenure allows.
          </li>
          <li>
            <b>Leverage sublease without inheriting risk.</b> Cap reinstatement,
            secure back-to-back consents, and mirror rent review mechanics.
          </li>
          <li>
            <b>Pre-qualify buildings for ESG.</b> Ask for energy data and
            electrification milestones before you shortlist.
          </li>
          <li>
            <b>Document the walk-away.</b> Write your BATNA (renewal, flex swing
            space, staged move) so negotiations stay anchored.
          </li>
        </ul>

        <p>
          <b>Bottom line:</b> 2025 rewards preparation and clarity. If you know
          your timeline, data needs, and ESG stance, you’ll convert market noise
          into material value.
        </p>
      </>
    ),
  },
];
