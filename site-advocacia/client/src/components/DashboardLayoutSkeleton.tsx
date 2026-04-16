import { Skeleton } from './ui/skeleton';

export function DashboardLayoutSkeleton() {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "oklch(16% 0.065 245)" }}>
      
      {/* SIDEBAR */}
      <div
        className="w-[280px] p-4 flex flex-col justify-between"
        style={{
          backgroundColor: "oklch(18% 0.065 245)",
          borderRight: "1px solid oklch(25% 0.06 245)",
        }}
      >
        <div className="space-y-6">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 px-2">
            <Skeleton className="h-10 w-10 rounded-lg bg-white/10" />
            <Skeleton className="h-4 w-32 bg-white/10" />
          </div>

          {/* MENU */}
          <div className="space-y-3 px-2">
            {[1, 2, 3, 4].map((_, i) => (
              <Skeleton
                key={i}
                className="h-10 w-full rounded-lg bg-white/10"
              />
            ))}
          </div>
        </div>

        {/* USER */}
        <div className="flex items-center gap-3 px-2">
          <Skeleton className="h-9 w-9 rounded-full bg-white/10" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-24 bg-white/10" />
            <Skeleton className="h-2 w-32 bg-white/10" />
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-6 space-y-6">
        
        {/* HEADER */}
        <Skeleton className="h-12 w-64 rounded-lg bg-white/10" />

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((_, i) => (
            <Skeleton
              key={i}
              className="h-32 rounded-xl bg-white/10"
            />
          ))}
        </div>

        {/* BLOCO GRANDE */}
        <Skeleton className="h-64 rounded-xl bg-white/10" />

      </div>
    </div>
  );
}