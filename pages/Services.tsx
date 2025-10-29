export function Services() {
  const services = [
    {
      title: 'Tenant Representation',
      description:
        'End-to-end site search, analysis, and negotiation for optimal results. We handle everything from brief development to lease execution, ensuring you secure the best possible terms.',
    },
    {
      title: 'Lease Renewal',
      description:
        'Evaluate and renegotiate your lease with data-backed strategy. We analyze market conditions, comparable rents, and leverage renewal timing to maximize your position.',
    },
    {
      title: 'Workplace Strategy',
      description:
        'Align your workspace with your team\'s culture and performance goals. We consider team dynamics, work styles, and growth projections to design optimal spatial solutions.',
    },
    {
      title: 'AI Market Insights',
      description:
        'Leverage predictive analytics for faster, smarter space decisions. Our proprietary AI tools analyze thousands of data points to identify market opportunities and trends.',
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px] text-center bg-[#FAF9F7]">
        <h1 className="mb-6">What we do.</h1>
        <p className="text-lg opacity-70 max-w-2xl mx-auto">
          Comprehensive tenant advisory services designed to optimize your workspace decisions.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="md:col-span-1 lg:col-span-6 p-8 md:p-12 bg-[#FAF9F7] rounded">
              <h3 className="mb-4 md:mb-6">{service.title}</h3>
              <p className="opacity-70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px] bg-[#FAF9F7]">
        <h2 className="mb-8 md:mb-12 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-1 lg:col-span-3">
            <div className="text-[#E6B450] mb-4">01</div>
            <h4 className="mb-3">Discovery</h4>
            <p className="opacity-70 text-sm leading-relaxed">
              Understand your business, culture, and workspace requirements through detailed consultation.
            </p>
          </div>
          <div className="md:col-span-1 lg:col-span-3">
            <div className="text-[#E6B450] mb-4">02</div>
            <h4 className="mb-3">Research</h4>
            <p className="opacity-70 text-sm leading-relaxed">
              Conduct comprehensive market analysis using our AI tools and industry connections.
            </p>
          </div>
          <div className="md:col-span-1 lg:col-span-3">
            <div className="text-[#E6B450] mb-4">03</div>
            <h4 className="mb-3">Strategy</h4>
            <p className="opacity-70 text-sm leading-relaxed">
              Develop tailored recommendations aligned with your business objectives and budget.
            </p>
          </div>
          <div className="md:col-span-1 lg:col-span-3">
            <div className="text-[#E6B450] mb-4">04</div>
            <h4 className="mb-3">Execution</h4>
            <p className="opacity-70 text-sm leading-relaxed">
              Negotiate terms and manage the transaction through to successful completion.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
