import { useState, useEffect, useMemo } from "react";
import { Link, useSearch } from "wouter";
import { trpc } from "@/lib/trpc";
import { Search, ArrowRight, BookOpen, Calendar, Tag, ChevronRight, Filter, X } from "lucide-react";

const AREAS_JURIDICAS = [
  "Ação Contra Plano de Saúde",
  "Indenização por Erro Médico",
  "Indenização de Seguros em Geral",
  "Ação Contra o SUS",
  "Fornecimento de Medicamentos",
  "Direito Médico e Hospitalar",
];

export default function Blog() {
  const searchParams = useSearch();
  const params = new URLSearchParams(searchParams);
  const initialSearch = params.get("search") || "";
  const initialCategory = params.get("categoria") || "";

  const [search, setSearch] = useState(initialSearch);
  const [debouncedSearch, setDebouncedSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 400);
    return () => clearTimeout(timer);
  }, [search]);

  const { data: allPosts, isLoading } = trpc.blog.list.useQuery({
    limit: 100,
    offset: 0,
    search: debouncedSearch || undefined,
  });

  // Filtrar por categoria no frontend
  const posts = useMemo(() => {
    if (!allPosts) return [];
    if (!selectedCategory) return allPosts;
    return allPosts.filter((p) => p.category === selectedCategory);
  }, [allPosts, selectedCategory]);

  // Contar artigos por categoria
  const categoryCounts = useMemo(() => {
    if (!allPosts) return {};
    return allPosts.reduce<Record<string, number>>((acc, post) => {
      const cat = post.category || "Sem categoria";
      acc[cat] = (acc[cat] || 0) + 1;
      return acc;
    }, {});
  }, [allPosts]);

  // Coletar todas as tags únicas
  const allTags = useMemo(() => {
    if (!allPosts) return [];
    const tagSet = new Set<string>();
    allPosts.forEach((p) => {
      if (p.tags) p.tags.split(",").map((t) => t.trim()).filter(Boolean).forEach((t) => tagSet.add(t));
    });
    return Array.from(tagSet).slice(0, 15);
  }, [allPosts]);

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory((prev) => (prev === cat ? "" : cat));
    setMobileFilterOpen(false);
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("");
  };

  const hasActiveFilters = !!debouncedSearch || !!selectedCategory;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(98% 0.005 245)" }}>
      {/* Header */}
      <div className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, oklch(12% 0.055 245) 0%, oklch(18% 0.07 245) 100%)" }}>
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
            <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "oklch(74% 0.12 80)" }}>
              Conteúdo Jurídico
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Blog Jurídico
          </h1>
          <p className="text-base max-w-xl mx-auto mb-8" style={{ color: "oklch(75% 0.03 245)" }}>
            Artigos e análises jurídicas para informar e orientar sobre seus direitos.
          </p>
          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "oklch(55% 0.03 245)" }} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar artigos jurídicos..."
              className="w-full pl-12 pr-4 py-4 rounded-xl text-sm outline-none"
              style={{
                backgroundColor: "oklch(22% 0.07 245)",
                color: "white",
                border: "1px solid oklch(30% 0.06 245)",
              }}
            />
          </div>

          {/* Filtros rápidos por área — desktop */}
          <div className="hidden lg:flex flex-wrap justify-center gap-2 mt-6">
            {AREAS_JURIDICAS.filter((a) => (categoryCounts[a] || 0) > 0).map((area) => (
              <button
                key={area}
                onClick={() => handleCategoryClick(area)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={{
                  backgroundColor: selectedCategory === area ? "oklch(74% 0.12 80)" : "oklch(22% 0.07 245)",
                  color: selectedCategory === area ? "oklch(12% 0.055 245)" : "white",
                  border: `1px solid ${selectedCategory === area ? "oklch(74% 0.12 80)" : "oklch(30% 0.06 245)"}`,
                }}
              >
                {area}
                <span className="ml-1.5 opacity-70">({categoryCounts[area]})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile filter toggle */}
      <div className="lg:hidden container py-4">
        <button
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
          style={{ backgroundColor: "oklch(16% 0.065 245)", color: "white" }}
        >
          <Filter className="w-4 h-4" />
          Filtrar por Área
          {selectedCategory && <span className="ml-1 px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(12% 0.055 245)" }}>1</span>}
        </button>
        {mobileFilterOpen && (
          <div className="mt-3 p-4 rounded-xl border" style={{ backgroundColor: "white", borderColor: "oklch(90% 0.02 245)" }}>
            <div className="flex flex-wrap gap-2">
              {AREAS_JURIDICAS.filter((a) => (categoryCounts[a] || 0) > 0).map((area) => (
                <button
                  key={area}
                  onClick={() => handleCategoryClick(area)}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                  style={{
                    backgroundColor: selectedCategory === area ? "oklch(16% 0.065 245)" : "oklch(96% 0.01 245)",
                    color: selectedCategory === area ? "white" : "oklch(16% 0.065 245)",
                  }}
                >
                  {area} ({categoryCounts[area] || 0})
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="container py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Posts Grid */}
          <div className="flex-1">
            {/* Active filters bar */}
            {hasActiveFilters && (
              <div className="flex items-center gap-3 mb-6 p-3 rounded-xl" style={{ backgroundColor: "oklch(96% 0.01 245)", border: "1px solid oklch(90% 0.02 245)" }}>
                <span className="text-sm font-medium" style={{ color: "oklch(35% 0.04 245)" }}>Filtros ativos:</span>
                {selectedCategory && (
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "oklch(16% 0.065 245)", color: "white" }}>
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory("")}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {debouncedSearch && (
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "oklch(16% 0.065 245)", color: "white" }}>
                    "{debouncedSearch}"
                    <button onClick={() => setSearch("")}><X className="w-3 h-3" /></button>
                  </span>
                )}
                <button onClick={clearFilters} className="ml-auto text-xs font-semibold hover:underline" style={{ color: "oklch(55% 0.03 245)" }}>
                  Limpar tudo
                </button>
              </div>
            )}

            {/* Results count */}
            {!isLoading && (
              <p className="text-sm mb-5" style={{ color: "oklch(55% 0.03 245)" }}>
                {posts.length === 0 ? "Nenhum artigo encontrado" : `${posts.length} artigo${posts.length !== 1 ? "s" : ""} encontrado${posts.length !== 1 ? "s" : ""}`}
                {selectedCategory && ` em "${selectedCategory}"`}
              </p>
            )}

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="rounded-xl overflow-hidden border animate-pulse" style={{ borderColor: "oklch(90% 0.02 245)" }}>
                    <div className="h-3" style={{ backgroundColor: "oklch(90% 0.02 245)" }} />
                    <div className="p-6 space-y-3">
                      <div className="h-4 rounded" style={{ backgroundColor: "oklch(93% 0.01 245)" }} />
                      <div className="h-4 w-3/4 rounded" style={{ backgroundColor: "oklch(93% 0.01 245)" }} />
                      <div className="h-3 rounded" style={{ backgroundColor: "oklch(93% 0.01 245)" }} />
                    </div>
                  </div>
                ))}
              </div>
            ) : posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <div
                      className="group bg-white rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                      style={{ borderColor: "oklch(90% 0.02 245)" }}
                    >
                      <div className="h-1.5" style={{ backgroundColor: "oklch(74% 0.12 80)" }} />
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                          {post.category && (
                            <span
                              className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full cursor-pointer hover:opacity-80"
                              style={{ backgroundColor: "oklch(16% 0.065 245)", color: "white" }}
                              onClick={(e) => { e.preventDefault(); handleCategoryClick(post.category!); }}
                            >
                              {post.category}
                            </span>
                          )}
                          <span className="text-xs flex items-center gap-1 ml-auto" style={{ color: "oklch(60% 0.03 245)" }}>
                            <Calendar className="w-3 h-3" />
                            {new Date(post.createdAt).toLocaleDateString("pt-BR")}
                          </span>
                        </div>
                        <h2 className="font-bold text-base mb-3 leading-snug line-clamp-3 group-hover:underline flex-1" style={{ color: "oklch(16% 0.065 245)", fontFamily: "'Playfair Display', serif" }}>
                          {post.title}
                        </h2>
                        <p className="text-sm leading-relaxed line-clamp-3 mb-4" style={{ color: "oklch(45% 0.04 245)" }}>
                          {post.excerpt}
                        </p>
                        {post.tags && (
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {post.tags.split(",").map((t) => t.trim()).filter(Boolean).slice(0, 3).map((tag) => (
                              <span key={tag} className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "oklch(96% 0.01 245)", color: "oklch(40% 0.04 245)" }}>
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center gap-1 text-sm font-semibold mt-auto" style={{ color: "oklch(74% 0.12 80)" }}>
                          Ler Artigo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-20" style={{ color: "oklch(16% 0.065 245)" }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: "oklch(16% 0.065 245)" }}>
                  Nenhum artigo encontrado
                </h3>
                <p className="text-sm mb-4" style={{ color: "oklch(55% 0.03 245)" }}>
                  {debouncedSearch ? `Não encontramos artigos para "${debouncedSearch}"` : `Nenhum artigo publicado em "${selectedCategory}" ainda.`}
                </p>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-sm font-semibold underline" style={{ color: "oklch(74% 0.12 80)" }}>
                    Limpar filtros
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0 space-y-6">
            {/* Áreas Jurídicas */}
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: "oklch(90% 0.02 245)", backgroundColor: "white" }}>
              <div className="px-5 py-4 border-b" style={{ borderColor: "oklch(90% 0.02 245)", backgroundColor: "oklch(16% 0.065 245)" }}>
                <h3 className="font-bold text-sm uppercase tracking-wider text-white">Áreas Jurídicas</h3>
              </div>
              <ul className="divide-y" style={{ borderColor: "oklch(93% 0.01 245)" }}>
                <li>
                  <button
                    onClick={() => setSelectedCategory("")}
                    className="w-full flex items-center justify-between px-5 py-3 text-sm transition-colors hover:opacity-80"
                    style={{
                      backgroundColor: !selectedCategory ? "oklch(96% 0.01 245)" : "transparent",
                      color: !selectedCategory ? "oklch(16% 0.065 245)" : "oklch(40% 0.04 245)",
                      fontWeight: !selectedCategory ? "600" : "400",
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3" />
                      Todos os artigos
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "oklch(90% 0.02 245)" }}>
                      {allPosts?.length || 0}
                    </span>
                  </button>
                </li>
                {AREAS_JURIDICAS.map((area) => {
                  const count = categoryCounts[area] || 0;
                  if (count === 0) return null;
                  return (
                    <li key={area}>
                      <button
                        onClick={() => handleCategoryClick(area)}
                        className="w-full flex items-center justify-between px-5 py-3 text-sm transition-colors hover:opacity-80"
                        style={{
                          backgroundColor: selectedCategory === area ? "oklch(96% 0.01 245)" : "transparent",
                          color: selectedCategory === area ? "oklch(16% 0.065 245)" : "oklch(40% 0.04 245)",
                          fontWeight: selectedCategory === area ? "600" : "400",
                        }}
                      >
                        <span className="flex items-center gap-2">
                          <ChevronRight className="w-3 h-3" style={{ color: selectedCategory === area ? "oklch(74% 0.12 80)" : "currentColor" }} />
                          {area}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: selectedCategory === area ? "oklch(74% 0.12 80)" : "oklch(90% 0.02 245)", color: selectedCategory === area ? "oklch(12% 0.055 245)" : "inherit" }}>
                          {count}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Tags populares */}
            {allTags.length > 0 && (
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: "oklch(90% 0.02 245)", backgroundColor: "white" }}>
                <div className="px-5 py-4 border-b" style={{ borderColor: "oklch(90% 0.02 245)", backgroundColor: "oklch(16% 0.065 245)" }}>
                  <h3 className="font-bold text-sm uppercase tracking-wider text-white flex items-center gap-2">
                    <Tag className="w-4 h-4" /> Tags
                  </h3>
                </div>
                <div className="p-4 flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearch(tag)}
                      className="px-3 py-1 rounded-full text-xs font-medium transition-all hover:opacity-80"
                      style={{
                        backgroundColor: debouncedSearch === tag ? "oklch(16% 0.065 245)" : "oklch(96% 0.01 245)",
                        color: debouncedSearch === tag ? "white" : "oklch(40% 0.04 245)",
                      }}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Contato */}
            <div
              className="rounded-xl p-6 text-white"
              style={{ background: "linear-gradient(135deg, oklch(16% 0.065 245) 0%, oklch(22% 0.07 245) 100%)" }}
            >
              <h3 className="font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Precisa de orientação jurídica?
              </h3>
              <p className="text-sm mb-4 opacity-80">
                Entre em contato com o escritório e agende uma consulta.
              </p>
              <a
                href="https://wa.me/5511984708027?text=Olá! Li um artigo no blog e gostaria de uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "oklch(74% 0.12 80)", color: "oklch(12% 0.055 245)" }}
              >
                Falar no WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
