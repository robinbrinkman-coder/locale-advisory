import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-[120px] py-12 md:py-16 max-w-[1440px] mx-auto border-t border-[#4A372A]/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
        <Logo />
        <p className="opacity-60 text-sm">Designed with intelligence.</p>
      </div>
      <p className="opacity-60 text-sm">© Locale Advisory 2025</p>
    </footer>
  );
}
