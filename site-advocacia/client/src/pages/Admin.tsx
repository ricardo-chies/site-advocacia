import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Plus, Edit2, Trash2, Eye, EyeOff, BookOpen, Newspaper, HelpCircle, Users } from "lucide-react";
import { toast } from "sonner";

type Tab = "posts" | "news" | "faq" | "subscribers";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function PostForm({ onSuccess }: { onSuccess: () => void }) {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [published, setPublished] = useState(true);

  const create = trpc.blog.create.useMutation({
    onSuccess: () => { toast.success("Artigo criado com sucesso!"); onSuccess(); },
    onError: (e) => toast.error(e.message),
  });

  const handleTitleChange = (v: string) => {
    setTitle(v);
    setSlug(slugify(v));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "oklch(16% 0.065 245)" }}>Título *</label>
          <input value={title} onChange={e => handleTitleChange(e.target.value)} className="w-full px-3 py-2 rounded-lg border text-sm outline-none" style={{ borderColor: "oklch(85% 0.02 245)" }} placeholder="Título do artigo" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "oklch(16% 0.065 245)" }}>Slug *</label>
          <input value={slug} onChange={e => setSlug(e.target.value)} className="w-full px-3 py-2 rounded-lg border text-sm outline-none" style={{ borderColor: "oklch(85% 0.02 245)" }} placeholder="slug-do-artigo" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: "oklch(16% 0.065 245)" }}>Resumo *</label>
        <textarea value={excerpt} onChange={e => setExcerpt(e.target.value)} rows={2} className="w-full px-3 py-2 rounded-lg border text-sm outline-none resize-none" style={{ borderColor: "oklch(85% 0.02 245)" }} placeholder="Breve descrição do artigo..." />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: "oklch(16% 0.065 245)" }}>Conteúdo * (suporta Markdown)</label>
        <textarea value={content} onChange={e => setContent(e.target.value)} rows={12} className="w-full px-3 py-2 rounded-lg border text-sm outline-none resize-none font-mono" style={{ borderColor: "oklch(85% 0.02 245)" }} placeholder="## Título&#10;&#10;Conteúdo do artigo em Markdown..." />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "oklch(16% 0.065 245)" }}>Categoria</label>
          <input value={category} onChange={e => setCategory(e.target.value)} className="w-full px-3 py-2 rounded-lg border text-sm outline-none" style={{ borderColor: "oklch(85% 0.02 245)" }} placeholder="Ex: Direito Trabalhista" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "oklch(16% 0.065 245)" }}>Tags (separadas por vírgula)</label>
          <input value={tags} onChange={e => setTags(e.target.value)} className="w-full px-3 py-2 rounded-lg border text-sm outline-none" style={{ borderColor: "oklch(85% 0.02 245)" }} placeholder="Ex: trabalhista, direitos, CLT" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={published} onChange={e => setPublished(e.target.checked)} className="w-4 h-4 rounded" />
          <span className="text-sm" style={{ color: "oklch(35% 0.04 245)" }}>Publicar imediatamente</span>
        </label>
      </div>
      <button
        onClick={() => create.mutate({ title, slug, excerpt, content, category: category || undefined, tags: tags || undefined, published })}
        disabled={create.isPending || !title || !slug || !excerpt || !content}
        className="px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: "oklch(16% 0.065 245)", color: "white" }}
      >
        {create.isPending ? "Salvando..." : "Publicar Artigo"}
      </button>
    </div>
  );
}

function NewsForm({ onSuccess }: { onSuccess: () => void }) {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [source, setSource] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [published, setPublished] = useState(true);

  const create = trpc.news.create.useMutation({
    onSuccess: () => { toast.success("Notícia criada com sucesso!"); onSuccess(); },
    onError: (e) => toast.error(e.message),
  });

  const handleTitleChange = (v: string) => { setTitle(v); setSlug(slugify(v)); };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "oklch(16% 0.065 245)" }}>Título *</label>
          <input value={title} onChange={e => handleTitleChange(e.target.value)} className="w-full px-3 py-2 rounded-lg border text-sm outline-none" style={{ borderColor: "oklch(85% 0.02 245)" }} placeholder="Título da notícia" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "oklch(16% 0.065 245)" }}>Slug *</label>
          <input value={slug} onChange={e => setSlug(e.target.value)} className="w-full px-3 py-2 rounded-lg border text-sm outline-none" style={{ borderColor: "oklch(85% 0.02 245)" }} placeholder="slug-da-noticia" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: "oklch(16% 0.065 245)" }}>Resumo *</label>
        <textarea value={excerpt} onChange={e => setExcerpt(e.target.value)} rows={2} className="w-full px-3 py-2 rounded-lg border text-sm outline-none resize-none" style={{ borderColor: "oklch(85% 0.02 245)" }} placeholder="Breve descrição da notícia..." />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: "oklch(16% 0.065 245)" }}>Conteúdo * (suporta Markdown)</label>
        <textarea value={content} onChange={e => setContent(e.target.value)} rows={10} className="w-full px-3 py-2 rounded-lg border text-sm outline-none resize-none font-mono" style={{ borderColor: "oklch(85% 0.02 245)" }} placeholder="## Título&#10;&#10;Conteúdo da notícia..." />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "oklch(16% 0.065 245)" }}>Fonte</label>
          <input value={source} onChange={e => setSource(e.target.value)} className="w-full px-3 py-2 rounded-lg border text-sm outline-none" style={{ borderColor: "oklch(85% 0.02 245)" }} placeholder="Ex: STJ, Folha de SP" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "oklch(16% 0.065 245)" }}>URL da Fonte</label>
          <input value={sourceUrl} onChange={e => setSourceUrl(e.target.value)} className="w-full px-3 py-2 rounded-lg border text-sm outline-none" style={{ borderColor: "oklch(85% 0.02 245)" }} placeholder="https://..." />
        </div>
      </div>
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" checked={published} onChange={e => setPublished(e.target.checked)} className="w-4 h-4 rounded" />
        <span className="text-sm" style={{ color: "oklch(35% 0.04 245)" }}>Publicar imediatamente</span>
      </label>
      <button
        onClick={() => create.mutate({ title, slug, excerpt, content, source: source || undefined, sourceUrl: sourceUrl || undefined, published })}
        disabled={create.isPending || !title || !slug || !excerpt || !content}
        className="px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: "oklch(16% 0.065 245)", color: "white" }}
      >
        {create.isPending ? "Salvando..." : "Publicar Notícia"}
      </button>
    </div>
  );
}

export default function Admin() {
  const [adminToken, setAdminToken] = useState(() => typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null);
  const { user, loading, isAuthenticated } = useAuth();
  const [tab, setTab] = useState<Tab>("posts");
  const [showForm, setShowForm] = useState(false);

  // Se não tem token de admin, redireciona para login
  if (!adminToken) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "oklch(16% 0.065 245)" }}>Acesso Restrito</h1>
          <p className="text-sm mb-6" style={{ color: "oklch(45% 0.04 245)" }}>Você precisa fazer login para acessar o painel administrativo.</p>
          <a href="/admin/login" className="px-6 py-3 rounded-lg font-semibold text-sm inline-block" style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}>Fazer Login</a>
        </div>
      </div>
    );
  }

  const { data: posts, refetch: refetchPosts } = trpc.blog.list.useQuery({ limit: 50 });
  const { data: newsList, refetch: refetchNews } = trpc.news.list.useQuery({ limit: 50 });
  const { data: faqs, refetch: refetchFaqs } = trpc.faq.list.useQuery();
  const { data: subscribers } = trpc.newsletter.listSubscribers.useQuery(undefined, { enabled: isAuthenticated && user?.role === "admin" });

  const deletePost = trpc.blog.delete.useMutation({ onSuccess: () => { toast.success("Artigo excluído!"); refetchPosts(); } });
  const deleteNews = trpc.news.delete.useMutation({ onSuccess: () => { toast.success("Notícia excluída!"); refetchNews(); } });
  const deleteFaq = trpc.faq.delete.useMutation({ onSuccess: () => { toast.success("FAQ excluído!"); refetchFaqs(); } });

  if (loading) return <div className="min-h-screen pt-24 flex items-center justify-center"><div className="animate-spin w-8 h-8 rounded-full border-4" style={{ borderColor: "oklch(16% 0.065 245)", borderTopColor: "transparent" }} /></div>;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "oklch(16% 0.065 245)" }}>Acesso Restrito</h1>
          <p className="text-sm mb-6" style={{ color: "oklch(45% 0.04 245)" }}>Faça login para acessar o painel administrativo.</p>
          <a href={getLoginUrl()} className="px-6 py-3 rounded-lg font-semibold text-sm" style={{ backgroundColor: "oklch(16% 0.065 245)", color: "white" }}>Fazer Login</a>
        </div>
      </div>
    );
  }

  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2" style={{ color: "oklch(16% 0.065 245)" }}>Sem Permissão</h1>
          <p className="text-sm" style={{ color: "oklch(45% 0.04 245)" }}>Você não tem permissão para acessar esta área.</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "posts" as Tab, label: "Blog", icon: BookOpen, count: posts?.length },
    { id: "news" as Tab, label: "Notícias", icon: Newspaper, count: newsList?.length },
    { id: "faq" as Tab, label: "FAQ", icon: HelpCircle, count: faqs?.length },
    { id: "subscribers" as Tab, label: "Newsletter", icon: Users, count: subscribers?.length },
  ];

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: "oklch(97% 0.005 245)" }}>
      {/* Header */}
      <div className="py-8" style={{ backgroundColor: "oklch(16% 0.065 245)" }}>
        <div className="container">
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Painel Administrativo
          </h1>
          <p className="text-sm mt-1" style={{ color: "oklch(65% 0.03 245)" }}>Gerencie o conteúdo do site</p>
        </div>
      </div>

      <div className="container py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => { setTab(t.id); setShowForm(false); }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                backgroundColor: tab === t.id ? "oklch(16% 0.065 245)" : "white",
                color: tab === t.id ? "white" : "oklch(35% 0.04 245)",
                border: `2px solid ${tab === t.id ? "oklch(16% 0.065 245)" : "oklch(88% 0.02 245)"}`,
              }}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
              {t.count !== undefined && (
                <span className="text-xs px-1.5 py-0.5 rounded-full" style={{ backgroundColor: tab === t.id ? "oklch(74% 0.12 80)" : "oklch(93% 0.01 245)", color: tab === t.id ? "oklch(16% 0.065 245)" : "oklch(45% 0.04 245)" }}>
                  {t.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        {(tab === "posts" || tab === "news") && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold" style={{ color: "oklch(16% 0.065 245)", fontFamily: "'Playfair Display', serif" }}>
                {tab === "posts" ? "Artigos do Blog" : "Notícias"}
              </h2>
              <button
                onClick={() => setShowForm(!showForm)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(16% 0.065 245)" }}
              >
                <Plus className="w-4 h-4" />
                {showForm ? "Cancelar" : tab === "posts" ? "Novo Artigo" : "Nova Notícia"}
              </button>
            </div>

            {showForm && (
              <div className="bg-white rounded-xl p-6 mb-6 border-2" style={{ borderColor: "oklch(74% 0.12 80)" }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: "oklch(16% 0.065 245)" }}>
                  {tab === "posts" ? "Novo Artigo" : "Nova Notícia"}
                </h3>
                {tab === "posts"
                  ? <PostForm onSuccess={() => { setShowForm(false); refetchPosts(); }} />
                  : <NewsForm onSuccess={() => { setShowForm(false); refetchNews(); }} />
                }
              </div>
            )}

            <div className="space-y-3">
              {(tab === "posts" ? posts : newsList)?.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-5 border-2 flex items-center justify-between gap-4" style={{ borderColor: "oklch(90% 0.02 245)" }}>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm truncate" style={{ color: "oklch(16% 0.065 245)" }}>{item.title}</h3>
                      {item.published ? (
                        <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ backgroundColor: "oklch(96% 0.05 155)", color: "oklch(45% 0.15 155)" }}>Publicado</span>
                      ) : (
                        <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ backgroundColor: "oklch(96% 0.01 245)", color: "oklch(55% 0.03 245)" }}>Rascunho</span>
                      )}
                    </div>
                    <p className="text-xs truncate" style={{ color: "oklch(55% 0.03 245)" }}>{item.excerpt}</p>
                    <p className="text-xs mt-1" style={{ color: "oklch(65% 0.03 245)" }}>
                      {new Date(item.createdAt).toLocaleDateString("pt-BR")} · /{tab === "posts" ? "blog" : "noticias"}/{item.slug}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a
                      href={`/${tab === "posts" ? "blog" : "noticias"}/${item.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg transition-colors hover:opacity-70"
                      style={{ color: "oklch(45% 0.04 245)" }}
                    >
                      <Eye className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => {
                        if (confirm("Tem certeza que deseja excluir?")) {
                          tab === "posts" ? deletePost.mutate({ id: item.id }) : deleteNews.mutate({ id: item.id });
                        }
                      }}
                      className="p-2 rounded-lg transition-colors hover:opacity-70"
                      style={{ color: "oklch(55% 0.22 25)" }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              {(tab === "posts" ? posts : newsList)?.length === 0 && (
                <div className="text-center py-12 text-sm" style={{ color: "oklch(55% 0.03 245)" }}>
                  Nenhum item publicado. Clique em "Novo" para criar.
                </div>
              )}
            </div>
          </div>
        )}

        {tab === "subscribers" && (
          <div>
            <h2 className="text-xl font-bold mb-6" style={{ color: "oklch(16% 0.065 245)", fontFamily: "'Playfair Display', serif" }}>
              Inscritos na Newsletter ({subscribers?.length || 0})
            </h2>
            <div className="bg-white rounded-xl border-2 overflow-hidden" style={{ borderColor: "oklch(90% 0.02 245)" }}>
              <table className="w-full text-sm">
                <thead style={{ backgroundColor: "oklch(96% 0.01 245)" }}>
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: "oklch(16% 0.065 245)" }}>Nome</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: "oklch(16% 0.065 245)" }}>E-mail</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: "oklch(16% 0.065 245)" }}>Data</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: "oklch(16% 0.065 245)" }}>Marketing</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers?.map((sub, i) => (
                    <tr key={sub.id} style={{ borderTop: i > 0 ? "1px solid oklch(93% 0.01 245)" : undefined }}>
                      <td className="px-4 py-3" style={{ color: "oklch(25% 0.04 245)" }}>{sub.name}</td>
                      <td className="px-4 py-3" style={{ color: "oklch(35% 0.04 245)" }}>{sub.email}</td>
                      <td className="px-4 py-3" style={{ color: "oklch(55% 0.03 245)" }}>{new Date(sub.createdAt).toLocaleDateString("pt-BR")}</td>
                      <td className="px-4 py-3">
                        {sub.consentMarketing
                          ? <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "oklch(96% 0.05 155)", color: "oklch(45% 0.15 155)" }}>Sim</span>
                          : <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "oklch(96% 0.01 245)", color: "oklch(55% 0.03 245)" }}>Não</span>
                        }
                      </td>
                    </tr>
                  ))}
                  {(!subscribers || subscribers.length === 0) && (
                    <tr><td colSpan={4} className="px-4 py-8 text-center text-sm" style={{ color: "oklch(55% 0.03 245)" }}>Nenhum inscrito ainda.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
