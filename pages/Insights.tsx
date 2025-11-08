import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArticleCard } from '../components/ArticleCard';
import { articles } from '../data/articles';
import { SubscribeRSS } from '../components/SubscribeRSS';

interface InsightsProps {
  onNavigate: (page: string, slug?: string) => void;
}

export function Insights({ onNavigate }: InsightsProps) {
  const marketUpdates = articles.filter(a => a.category === 'market-update');
  const guides = articles.filter(a => a.category === 'guide');
  
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-start justify-between gap-6 mb-6 md:mb-8">
              <h1 className="flex-1">Insights & Market Intelligence</h1>
              <div className="hidden md:block shrink-0 mt-2">
                <SubscribeRSS />
              </div>
            </div>
            <p className="text-lg md:text-xl mb-4 md:mb-6 opacity-70">
              Data, design, and decisions shaping Sydney's commercial landscape.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-70 mb-6">
              Our insights blend market analysis, human experience, and AI-driven intelligence — 
              to help businesses make smarter property decisions.
            </p>
            <div className="md:hidden">
              <SubscribeRSS />
            </div>
          </div>
          <div className="lg:col-span-5">
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/yjrsepzincq0cvf1pkj7a/bee-balogun-4GRdEZ7Wots-unsplash.jpg?rlkey=3km2eh3fr65lf5ftpz8lchl01&st=afkrs15s&raw=1"
              alt="Architectural light and shadow"
              className="w-full h-[300px] md:h-[400px] object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 md:px-12 lg:px-[120px]">
        <div className="h-px bg-[#4A372A] opacity-20"></div>
      </div>

      {/* Market Briefs Section */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px]">
        <h2 className="mb-4 md:mb-6">Sydney Market Updates</h2>
        <p className="text-base md:text-lg leading-relaxed opacity-70 mb-8 md:mb-12 max-w-3xl">
          A snapshot of where the Sydney office market is — and where it's heading. We translate 
          data and on-the-ground intelligence into clear insights for occupiers.
        </p>
        
        <div className="space-y-6">
          {marketUpdates.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={() => onNavigate('insights', article.slug)}
              variant="horizontal"
            />
          ))}
        </div>
      </section>

      {/* Practical Guides Section */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px] bg-[#FAF9F7]">
        <h2 className="mb-4 md:mb-6">For Tenants: Practical Guides</h2>
        <p className="text-base md:text-lg leading-relaxed opacity-70 mb-8 md:mb-12 max-w-3xl">
          Whether you're planning a move or managing a renewal, these short guides simplify the 
          process — and help you make informed decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="md:col-span-1 lg:col-span-6 cursor-pointer text-left"
              onClick={() => onNavigate('insights', guide.slug)}
            >
              <div className="bg-white p-8 md:p-10 rounded-lg h-full transition-all hover:shadow-lg group">
                <h3 className="mb-3">{guide.title}</h3>
                <p className="opacity-60 mb-6">
                  {guide.excerpt}
                </p>
                <div className="h-0.5 bg-[#E6B450] w-0 group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Locale Perspective Section */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px]">
        <h2 className="mb-4 md:mb-6 text-center">Locale Perspective</h2>
        <p className="text-base md:text-lg leading-relaxed opacity-70 mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          Our point of view on the evolving relationship between workspace, brand, and people.
        </p>

        {/* Perspective Card 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/jzihaz6zpcpzjr87hbzdd/getty-images-5Wzbjd5CN_A-unsplash.jpg?rlkey=7h3lo3gkmodh0ta6mgmotzwe4&st=incx3tr3&raw=1"
              alt="Modern workspace design"
              className="w-full h-[300px] md:h-[400px] object-cover rounded"
            />
          </div>
          <div className="lg:col-span-6">
            <h3 className="mb-4">"Smaller, Smarter, Better."</h3>
            <p className="text-base md:text-lg leading-relaxed opacity-70">
              The post-pandemic era has redefined what makes a great workspace. Today's tenants 
              value flexibility, amenity, and purpose-built design — prioritising quality over 
              quantity, and wellbeing over square metres.
            </p>
          </div>
        </div>

        {/* Perspective Card 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 lg:order-2">
            <ImageWithFallback
              src="https://www.dropbox.com/scl/fi/a5mxxa510vwi4ryy55hve/kevin-bosc-O27iAdtKQ0k-unsplash.jpg?rlkey=2gtuzlly9g4ep9vsoxls8a9g2&st=paf26um7&raw=1"
              alt="Data and architecture"
              className="w-full h-[300px] md:h-[400px] object-cover rounded"
            />
          </div>
          <div className="lg:col-span-6 lg:order-1">
            <h3 className="mb-4">"Data Sharpens Instinct."</h3>
            <p className="text-base md:text-lg leading-relaxed opacity-70">
              At Locale, we combine two decades of experience with real-time analytics to guide 
              every decision. The best outcomes happen when market intelligence meets human 
              judgement — not algorithms alone.
            </p>
          </div>
        </div>
      </section>

      {/* RSS Subscription Section */}
      <section className="px-6 md:px-12 lg:px-[120px] py-12 md:py-16">
        <div className="border-t border-[#4A372A]/15 pt-8 md:pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="mb-2">Stay Updated</h3>
            <p className="text-base opacity-70">
              New market insights and practical guides added regularly. Subscribe to stay informed.
            </p>
          </div>
          <div className="shrink-0">
            <SubscribeRSS />
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px]">
        <div className="bg-[#E6B450] px-8 md:px-16 py-12 md:py-16 rounded-lg text-center">
          <p className="text-lg md:text-2xl mb-6 md:mb-8 text-[#4A372A]">
            Looking for tailored market insights or a lease strategy for your business?
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-[#4A372A] px-6 md:px-8 py-3 md:py-4 rounded hover:bg-[#F4EDE2] transition-colors"
          >
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
