import React from "react";

const About: React.FC = () => {
  return (
    <main className="page about-page">
      <section className="hero">
        <h1>About Locale Advisory</h1>
        <p>
          Locale Advisory is an independent tenant advisory and leasing partner
          focused on helping businesses find, negotiate, and secure the right
          commercial spaces – on terms that actually work for them.
        </p>
      </section>

      <section className="content">
        <h2>What we do</h2>
        <p>
          We work exclusively with occupiers, not landlords, so our incentives
          are fully aligned with your business outcomes. From shortlisting and
          inspections through to negotiation and documentation, we sit on your
          side of the table the whole way through.
        </p>
      </section>

      <section className="content">
        <h2>How we work</h2>
        <ul>
          <li>Data-led search and shortlisting of suitable locations</li>
          <li>Clear advice on rents, incentives, and total occupancy costs</li>
          <li>Structured negotiations to maximise value and flexibility</li>
          <li>Coordination with legal, design, and project teams</li>
        </ul>
      </section>

      <section className="content">
        <h2>Who we work with</h2>
        <p>
          From growing startups to established corporates, we support tenants
          across the Sydney CBD and wider metro markets who want a transparent,
          collaborative approach to leasing decisions.
        </p>
      </section>
    </main>
  );
};

export default About;
