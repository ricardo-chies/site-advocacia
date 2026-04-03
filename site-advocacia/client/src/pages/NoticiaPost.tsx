import { Link, useParams } from "wouter";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, Calendar, ExternalLink, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Vi uma notícia no site e gostaria de uma consulta jurídica.";

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} style={{ color: "oklch(16% 0.065 245)", fontSize: "1.5rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem", fontFamily: "'Playfair Display', serif" }}>{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} style={{ color: "oklch(16% 0.065 245)", fontSize: "1.15rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.75rem", fontFamily: "'Playfair Display', serif" }}>{line.slice(4)}</h3>);
    } else if (line.startsWith("- ")) {
      elements.push(<li key={key++} style={{ color: "oklch(30% 0.04 245)", lineHeight: "1.8", marginBottom: "0.25rem", listStyle: "disc", marginLeft: "1.5rem" }}>{line.slice(2)}</li>);
    } else if (line.trim() === "") {
      elements.push(<br key={key++} />);
    } else {
      const formatted = line.replace(/\*\*(.+?)\*\*/g, '<strong style="color:oklch(16% 0.065 245);font-weight:700">$1</strong>');
      elements.push(<p key={key++} style={{ color: "oklch(30% 0.04 245)", lineHeight: "1.8", marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: formatted }} />);
    }
  }
  return elements;
}

export default function NoticiaPost() {
  const { slug } = useParams<{ slug: string }>();
  const { data: item, isLoading, error } = trpc.news.bySlug.useQuery({ slug: slug || "" }, { enabled: !!slug });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24" style={{ backgroundColor: "oklch(99% 0 0)" }}>
        <div className="container py-16 max-w-3xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 rounded w-3/4" style={{ backgroundColor: "oklch(90% 0.02 245)" }} />
            <div className="h-4 rounded" style={{ backgroundColor: "oklch(90% 0.02 245)" }} />
          </div>
        </div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "oklch(16% 0.065 245)" }}>Notícia não encontrada</h1>
          <Link href="/noticias" className="text-sm font-medium" style={{ color: "oklch(74% 0.12 80)" }}>← Voltar às Notícias</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(99% 0 0)" }}>
      <div className="pt-24 pb-12" style={{ backgroundColor: "oklch(16% 0.065 245)" }}>
        <div className="container max-w-3xl">
          <Link href="/noticias" className="inline-flex items-center gap-2 text-sm mb-6 transition-opacity hover:opacity-80" style={{ color: "oklch(74% 0.12 80)" }}>
            <ArrowLeft className="w-4 h-4" /> Voltar às Notícias
          </Link>
          {item.source && (
            <div
              className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded mb-4"
              style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
            >
              {item.source}
            </div>
          )}
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {item.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: "oklch(65% 0.03 245)" }}>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(item.createdAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
            </span>
            {item.sourceUrl && (
              <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:opacity-80" style={{ color: "oklch(74% 0.12 80)" }}>
                <ExternalLink className="w-4 h-4" /> Fonte Original
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="container max-w-3xl py-12">
        <div>{renderMarkdown(item.content)}</div>

        <div className="mt-12 p-8 rounded-2xl text-center" style={{ backgroundColor: "oklch(16% 0.065 245)" }}>
          <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Tem dúvidas sobre esta matéria?
          </h3>
          <p className="text-sm mb-6" style={{ color: "oklch(75% 0.03 245)" }}>
            Consulte o escritório Uriel Nascimento Sociedade de Advocacia para orientação jurídica personalizada.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
          >
            <MessageCircle className="w-5 h-5" />
            Falar com Advogado
          </a>
        </div>
      </div>
    </div>
  );
}
