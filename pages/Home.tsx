import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/Button";

interface HomeProps {
  onNavigate?: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const go = (page: string) => (onNavigate ? onNavigate(page) : void 0);

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        <div className="lg:col-span-6">
          <h1 className="mb-6">Smarter space decisions.</h1>
          <p className="mb-8 md:mb-12 opacity-70 text-lg leading-relaxed">
            Independent tenant advisory for Sydney's most forward-thinking businesses.
          </p>
          <Button onClick={() => go("contact")}>Start your brief</Button>
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <h3 className="mb-4">Independent Advice</h3>
            <p className="opacity-70">Acting solely for tenants — your interests, your outcome.</p>
          </div>
          <div className="lg:col-span-4">
            <h3 className="mb-4">Data-Driven Insight</h3>
            <p className="opacity-70">Market intelligence and AI benchmarking to guide every decision.</p>
          </div>
          <div className="lg:col-span-4">
            <h3 className="mb-4">Creative Precision</h3>
            <p className="opacity-70">Blending strategy, design thinking, and negotiation expertise.</p>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="mb-6">Independent. Intelligent. Sydney cool.</h2>
            <p className="opacity-70 mb-6 leading-relaxed">
              At Locale Advisory, we believe the best property outcomes come from alignment — not opposition.
              Our role is to act as a strategic extension of the tenant's team, helping navigate leasing
              decisions with clarity, insight, and confidence.
            </p>
            <p className="opacity-70 mb-6 leading-relaxed">
              With experience across Sydney's CBD and fringe markets, Locale brings together data-driven
              analysis, creative thinking, and genuine local knowledge to help businesses find — and create —
              spaces that truly work for them.
            </p>
            <button onClick={() => go("about")} className="text-[#E6B450] hover:underline">
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
          {["p3i1j8mneb5eexz529m0u/getty-images-XPbHfJovRJE-unsplash.jpg",
            "e8cdx9imh4a3c5lhyyjv8/phillip-flores-qTKGE9R3SYA-unsplash.jpg",
            "yjrsepzincq0cvf1pkj7a/bee-balogun-4GRdEZ7Wots-unsplash.jpg"].map((id, i) => (
              <div
                key={i}
                className="lg:col-span-4 group cursor-pointer"
                onClick={() => go("insights")}
              >
                <div className="relative overflow-hidden rounded">
                  <ImageWithFallback
                    src={`https://www.dropbox.com/scl/fi/${id}?raw=1`}
                    alt="Insight Preview"
                    className="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#E6B450] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
              </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px] text-center">
        <h2 className="mb-6">Planning a move or renewal?</h2>
        <p className="opacity-70 mb-8 text-lg">Let's discuss your options.</p>
        <Button onClick={() => go("contact")}>Start your brief</Button>
      </section>
    </div>
  );
}
