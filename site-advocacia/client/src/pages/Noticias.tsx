import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { ArrowRight, Scale, Calendar, ExternalLink } from "lucide-react";

export default function Noticias() {
  const { data: newsList, isLoading } = trpc.news.list.useQuery({ limit: 20 });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(99% 0 0)" }}>
      {/* Header */}
      <div className="pt-24 pb-16" style={{ backgroundColor: "oklch(16% 0.065 245)" }}>
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "oklch(74% 0.12 80)" }}>
              Imprensa
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Notícias Jurídicas
          </h1>
          <p className="text-base max-w-xl mx-auto" style={{ color: "oklch(75% 0.03 245)" }}>
            Acompanhe as principais novidades do mundo jurídico, decisões relevantes 
            e atualizações legislativas.
          </p>
        </div>
      </div>

      {/* News Grid */}
      <div className="container py-16">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden border animate-pulse" style={{ borderColor: "oklch(90% 0.02 245)" }}>
                <div className="h-48" style={{ backgroundColor: "oklch(93% 0.01 245)" }} />
                <div className="p-6 space-y-3">
                  <div className="h-4 rounded" style={{ backgroundColor: "oklch(93% 0.01 245)" }} />
                  <div className="h-4 w-3/4 rounded" style={{ backgroundColor: "oklch(93% 0.01 245)" }} />
                </div>
              </div>
            ))}
          </div>
        ) : newsList && newsList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsList.map((item) => (
              <Link key={item.id} href={`/noticias/${item.slug}`}>
                <div
                  className="group rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-xl cursor-pointer h-full flex flex-col bg-white"
                  style={{ borderColor: "oklch(90% 0.02 245)" }}
                >
                  <div
                    className="h-48 flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: "oklch(16% 0.065 245)" }}
                  >
                    <Scale className="w-20 h-20 opacity-10 text-white" />
                    {item.source && (
                      <div
                        className="absolute bottom-3 left-3 text-xs font-semibold px-2 py-1 rounded"
                        style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
                      >
                        {item.source}
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs flex items-center gap-1" style={{ color: "oklch(60% 0.03 245)" }}>
                        <Calendar className="w-3 h-3" />
                        {new Date(item.createdAt).toLocaleDateString("pt-BR")}
                      </span>
                    </div>
                    <h2 className="font-bold text-base mb-3 leading-snug line-clamp-3 group-hover:underline flex-1" style={{ color: "oklch(16% 0.065 245)", fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </h2>
                    <p className="text-sm leading-relaxed line-clamp-2 mb-4" style={{ color: "oklch(45% 0.04 245)" }}>
                      {item.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-sm font-semibold mt-auto" style={{ color: "oklch(74% 0.12 80)" }}>
                      Ver Conteúdo <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Scale className="w-16 h-16 mx-auto mb-4 opacity-20" style={{ color: "oklch(16% 0.065 245)" }} />
            <h3 className="text-xl font-bold mb-2" style={{ color: "oklch(16% 0.065 245)" }}>
              Nenhuma notícia publicada ainda
            </h3>
            <p className="text-sm" style={{ color: "oklch(55% 0.03 245)" }}>Em breve novidades serão publicadas.</p>
          </div>
        )}
      </div>
    </div>
  );
}
