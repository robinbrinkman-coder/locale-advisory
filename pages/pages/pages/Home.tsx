import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/Button';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        <div className="lg:col-span-6">
          <h1 className="mb-6">Smarter space decisions.</h1>
          <p className="mb-8 md:mb-12 opacity-70 text-lg leading-relaxed">
            Independent tenant advisory for Sydney's most forward-thinking businesses.
          </p>
          <Button onClick={() => onNavigate('contact')}>Start your brief</Button>
        </div>
        <div className="lg:col-span-6">
          <ImageWithFallback
            src="https://www.dropbox.com/scl/fi/tbjw6k5vjo2kzevxixti1/getty-images-7I7U9pJlueE-unsplash.jpg?rlkey=5hs878i0000zsdwuennj3m68l&st=pqrv7jfe&raw=1"
            alt="Industrial loft office"
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded"
          />
        </div>
      </section>

      {/* Three Pillars */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px] bg-[#FAF9F7]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 md:gap-6">
          <div className="md:col-span-1 lg:col-span-4">
            <h3 className="mb-4">Independent Advice</h3>
            <p className="opacity-70 leading-relaxed">
              Acting solely for tenants — your interests, your outcome.
            </p>
          </div>
          <div className="md:col-span-1 lg:col-span-4">
            <h3 className="mb-4">Data-Driven Insight</h3>
            <p className="opacity-70 leading-relaxed">
              Market intelligence and AI benchmarking to guide every decision.
            </p>
          </div>
          <div className="md:col-span-1 lg:col-span-4">
            <h3 className="mb-4">Creative Precision</h3>
            <p className="opacity-70 leading-relaxed">
              Blending strategy, design thinking, and negotiation expertise.
            </p>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="mb-6">Independent. Intelligent. Sydney cool.</h2>
            <p className="opacity-70 leading-relaxed mb-6">
              At Locale Advisory, we believe the best property outcomes come from alignment — not opposition. Our role is to act as a strategic extension of the tenant's team, helping navigate leasing decisions with clarity, insight, and confidence.
            </p>
            <p className="opacity-70 leading-relaxed mb-6">
              With experience across Sydney's CBD and city-fringe markets, Locale brings together data-driven analysis, creative thinking, and genuine local knowledge to help businesses find — and create — spaces that truly work for them.
            </p>
            <button 
              onClick={() => onNavigate('about')}
              className="text-[#E6B450] hover:underline"
            >
              Learn more →
            </button>
          </div>
          <div className="lg:col-span-6">
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/2x8ubhjz6mcxkp06ifx5w/jesse-hammer-AMCO1LF2B-Y-unsplash.jpg?rlkey=rilddt5nkqx5pa5vrtkzsiztd&st=8hxvzv1n&raw=1"
              alt="Exposed brick office"
              className="w-full h-[300px] md:h-[400px] object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px] bg-[#FAF9F7]">
        <h2 className="mb-8 md:mb-12">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          <div className="md:col-span-1 lg:col-span-4 group cursor-pointer" onClick={() => onNavigate('insights')}>
            <div className="relative overflow-hidden rounded">
              <ImageWithFallback
                src="https://www.dropbox.com/scl/fi/p3i1j8mneb5eexz529m0u/getty-images-XPbHfJovRJE-unsplash.jpg?rlkey=t4jzhg2t9hkwa7rgejkely14h&st=d4g05tna&raw=1"
                alt="Sydney CBD Snapshot"
                className="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#E6B450] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-4 group cursor-pointer" onClick={() => onNavigate('insights')}>
            <div className="relative overflow-hidden rounded">
              <ImageWithFallback
                src="https://www.dropbox.com/scl/fi/e8cdx9imh4a3c5lhyyjv8/phillip-flores-qTKGE9R3SYA-unsplash.jpg?rlkey=uw0mz1gqhon6nu46vp2xhe7kl&st=cl5jt1pc&raw=1"
                alt="Fringe Advantage"
                className="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#E6B450] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-4 group cursor-pointer" onClick={() => onNavigate('insights')}>
            <div className="relative overflow-hidden rounded">
              <ImageWithFallback
                src="https://www.dropbox.com/scl/fi/yjrsepzincq0cvf1pkj7a/bee-balogun-4GRdEZ7Wots-unsplash.jpg?rlkey=3km2eh3fr65lf5ftpz8lchl01&st=afkrs15s&raw=1"
                alt="2025 Outlook"
                className="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#E6B450] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px] text-center">
        <h2 className="mb-6">Planning a move or renewal?</h2>
        <p className="opacity-70 mb-8 text-lg">Let's discuss your options.</p>
        <Button onClick={() => onNavigate('contact')}>Start your brief</Button>
      </section>
    </div>
  );
}
