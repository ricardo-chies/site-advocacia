import { Link, useParams } from "wouter";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, Calendar, Tag, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999999999?text=Olá! Li um artigo no site e gostaria de uma consulta jurídica.";

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="prose-legal" style={{ color: "oklch(16% 0.065 245)", fontSize: "1.5rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem", fontFamily: "'Playfair Display', serif" }}>{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} style={{ color: "oklch(16% 0.065 245)", fontSize: "1.15rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.75rem", fontFamily: "'Playfair Display', serif" }}>{line.slice(4)}</h3>);
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*: (.+)/);
      if (match) {
        elements.push(
          <li key={key++} style={{ color: "oklch(30% 0.04 245)", lineHeight: "1.8", marginBottom: "0.25rem", listStyle: "disc", marginLeft: "1.5rem" }}>
            <strong style={{ color: "oklch(16% 0.065 245)", fontWeight: 700 }}>{match[1]}</strong>: {match[2]}
          </li>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(<li key={key++} style={{ color: "oklch(30% 0.04 245)", lineHeight: "1.8", marginBottom: "0.25rem", listStyle: "disc", marginLeft: "1.5rem" }}>{line.slice(2)}</li>);
    } else if (/^\d+\. /.test(line)) {
      elements.push(<li key={key++} style={{ color: "oklch(30% 0.04 245)", lineHeight: "1.8", marginBottom: "0.25rem", listStyle: "decimal", marginLeft: "1.5rem" }}>{line.replace(/^\d+\. /, "")}</li>);
    } else if (line.trim() === "") {
      elements.push(<br key={key++} />);
    } else {
      const formatted = line
        .replace(/\*\*(.+?)\*\*/g, '<strong style="color:oklch(16% 0.065 245);font-weight:700">$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>');
      elements.push(<p key={key++} style={{ color: "oklch(30% 0.04 245)", lineHeight: "1.8", marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: formatted }} />);
    }
  }
  return elements;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = trpc.blog.bySlug.useQuery({ slug: slug || "" }, { enabled: !!slug });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24" style={{ backgroundColor: "oklch(99% 0 0)" }}>
        <div className="container py-16 max-w-3xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 rounded w-3/4" style={{ backgroundColor: "oklch(90% 0.02 245)" }} />
            <div className="h-4 rounded w-1/2" style={{ backgroundColor: "oklch(90% 0.02 245)" }} />
            <div className="h-4 rounded" style={{ backgroundColor: "oklch(90% 0.02 245)" }} />
            <div className="h-4 rounded w-5/6" style={{ backgroundColor: "oklch(90% 0.02 245)" }} />
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center" style={{ backgroundColor: "oklch(99% 0 0)" }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "oklch(16% 0.065 245)" }}>Artigo não encontrado</h1>
          <Link href="/blog" className="text-sm font-medium" style={{ color: "oklch(74% 0.12 80)" }}>
            ← Voltar ao Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(99% 0 0)" }}>
      {/* Header */}
      <div className="pt-24 pb-12" style={{ backgroundColor: "oklch(16% 0.065 245)" }}>
        <div className="container max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-6 transition-opacity hover:opacity-80" style={{ color: "oklch(74% 0.12 80)" }}>
            <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
          </Link>
          {post.category && (
            <div
              className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded mb-4"
              style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
            >
              {post.category}
            </div>
          )}
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: "oklch(65% 0.03 245)" }}>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.createdAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
            </span>
            {post.tags && (
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {post.tags.split(",").slice(0, 3).join(", ")}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-3xl py-12">
        <div className="prose-legal">
          {renderMarkdown(post.content)}
        </div>

        {/* CTA */}
        <div
          className="mt-12 p-8 rounded-2xl text-center"
          style={{ backgroundColor: "oklch(16% 0.065 245)" }}
        >
          <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Precisa de Orientação Jurídica?
          </h3>
          <p className="text-sm mb-6" style={{ color: "oklch(75% 0.03 245)" }}>
            Entre em contato com o escritório Uriel Nascimento Sociedade de Advocacia 
            para uma consulta personalizada sobre o seu caso.
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
