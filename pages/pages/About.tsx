import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px] text-center">
        <h1 className="mb-8">Independent. Intelligent. Sydney cool.</h1>
      </section>
      <section className="px-6 md:px-12 lg:px-[120px] pb-16 md:pb-24 lg:pb-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 md:mb-24">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/l6o4syr5vjyknmdal1vft/dominic-kurniawan-suryaputra-KgdemVma10w-unsplash.jpg?rlkey=3780d4i1jrp0zjuccy7lad7va&st=0ppz98la&raw=1"
              alt="Industrial workspace with brick"
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded"
            />
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <p className="text-lg leading-relaxed opacity-70 mb-6 md:mb-8">
              At Locale Advisory, we believe the best property outcomes come from alignment — not opposition. Our role is to act as a strategic extension of the tenant's team, helping navigate leasing decisions with clarity, insight, and confidence.
            </p>
            <p className="text-lg leading-relaxed opacity-70 mb-6 md:mb-8">
              We work collaboratively with landlords, leasing agents, and project partners, ensuring every conversation and negotiation moves toward a result that makes sense for all sides — but most importantly, supports our client's commercial objectives, culture, and long-term success.
            </p>
            <p className="text-lg leading-relaxed opacity-70 mb-6 md:mb-8">
              With experience across Sydney's CBD and city-fringe markets, Locale brings together data-driven analysis, creative thinking, and genuine local knowledge to help businesses find — and create — spaces that truly work for them.
            </p>
            <p className="text-lg leading-relaxed opacity-70">
              Our goal is simple: to make the leasing process smarter, more transparent, and mutually beneficial.
            </p>
          </div>
        </div>
        <div className="bg-[#FAF9F7] px-8 md:px-16 py-12 md:py-20 rounded text-center max-w-4xl mx-auto">
          <blockquote className="text-xl md:text-2xl mb-4">
            "We don't sell space. We find the right one."
          </blockquote>
          <p className="opacity-60">— Robin Brinkman, Founder</p>
        </div>
      </section>
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px] bg-[#FAF9F7]">
        <h2 className="mb-8 md:mb-12 text-center">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8">
          <div className="md:col-span-1 lg:col-span-4 text-center">
            <h3 className="mb-4">Independent</h3>
            <p className="opacity-70 leading-relaxed">
              We represent tenants only. No dual agency. No conflicts. Just smart advice aligned with your interests.
            </p>
          </div>
          <div className="md:col-span-1 lg:col-span-4 text-center">
            <h3 className="mb-4">Analytical</h3>
            <p className="opacity-70 leading-relaxed">
              Every recommendation is backed by data — market comparables, AI insights, and rigorous financial modeling.
            </p>
          </div>
          <div className="md:col-span-1 lg:col-span-4 text-center">
            <h3 className="mb-4">Creative</h3>
            <p className="opacity-70 leading-relaxed">
              We think beyond the lease. Workplace strategy, team dynamics, and cultural fit all factor into our approach.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
