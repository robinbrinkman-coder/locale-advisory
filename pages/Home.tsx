import { useNavigate } from "react-router-dom"; // if you’re not using Router, remove this line

interface HomeProps {
  onNavigate?: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const go = (page: string) => (onNavigate ? onNavigate(page) : void 0);

  return (
    <main className="min-h-screen bg-[#F4EDE2] text-[#4A372A]">
      {/* ...your existing sections... */}
      <button onClick={() => go("contact")} className="text-[#E6B450]">Start your brief</button>
    </main>
  );
}
