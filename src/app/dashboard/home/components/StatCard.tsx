export interface StatCardProps {
  name: string;
  value: number | string;
}

export default function StatCard({ name, value }: StatCardProps) {
  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 flex flex-col justify-between items-start overflow-hidden p-6 flex-1 min-w-[220px]">
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-zinc-800/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-20 flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1.5 w-1.5 bg-zinc-500 rounded-full"></div>
          <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">{name}</span>
        </div>
        <span className="font-black text-5xl text-white tracking-tighter">{value}</span>
      </div>

      <div className="absolute -bottom-6 -right-6 text-zinc-800/50 group-hover:text-zinc-800/80 transition-colors duration-500 font-black text-9xl tracking-tighter italic select-none pointer-events-none">
        {value}
      </div>
    </div>
  );
}

