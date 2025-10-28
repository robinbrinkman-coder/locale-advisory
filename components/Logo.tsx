export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-baseline gap-0.5">
        <span className="text-xl tracking-tight">locale</span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#E6B450] mb-[3px]" />
      </div>
      <span className="text-[10px] tracking-[0.2em] opacity-60">ADVISORY</span>
    </div>
  );
}
