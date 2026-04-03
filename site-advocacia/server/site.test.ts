import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module
vi.mock("./db", () => ({
  listPosts: vi.fn().mockResolvedValue([
    { id: 1, title: "Artigo Teste", slug: "artigo-teste", excerpt: "Resumo", content: "Conteúdo", category: "Direito Civil", tags: "civil", published: true, createdAt: new Date(), updatedAt: new Date() }
  ]),
  getPostBySlug: vi.fn().mockImplementation((slug: string) => {
    if (slug === "artigo-teste") return Promise.resolve({ id: 1, title: "Artigo Teste", slug, excerpt: "Resumo", content: "Conteúdo", category: "Direito Civil", tags: "civil", published: true, createdAt: new Date(), updatedAt: new Date() });
    return Promise.resolve(undefined);
  }),
  createPost: vi.fn().mockResolvedValue(undefined),
  updatePost: vi.fn().mockResolvedValue(undefined),
  deletePost: vi.fn().mockResolvedValue(undefined),
  listNews: vi.fn().mockResolvedValue([
    { id: 1, title: "Notícia Teste", slug: "noticia-teste", excerpt: "Resumo", content: "Conteúdo", source: "STJ", sourceUrl: null, coverImage: null, published: true, createdAt: new Date(), updatedAt: new Date() }
  ]),
  getNewsBySlug: vi.fn().mockImplementation((slug: string) => {
    if (slug === "noticia-teste") return Promise.resolve({ id: 1, title: "Notícia Teste", slug, excerpt: "Resumo", content: "Conteúdo", source: "STJ", sourceUrl: null, coverImage: null, published: true, createdAt: new Date(), updatedAt: new Date() });
    return Promise.resolve(undefined);
  }),
  createNews: vi.fn().mockResolvedValue(undefined),
  updateNews: vi.fn().mockResolvedValue(undefined),
  deleteNews: vi.fn().mockResolvedValue(undefined),
  listFaqs: vi.fn().mockResolvedValue([
    { id: 1, question: "Pergunta teste?", answer: "Resposta teste.", category: "Geral", order: 0, published: true, createdAt: new Date() }
  ]),
  createFaq: vi.fn().mockResolvedValue(undefined),
  updateFaq: vi.fn().mockResolvedValue(undefined),
  deleteFaq: vi.fn().mockResolvedValue(undefined),
  subscribeNewsletter: vi.fn().mockResolvedValue({ alreadyExists: false }),
  listNewsletterSubscribers: vi.fn().mockResolvedValue([
    { id: 1, name: "João Silva", email: "joao@teste.com", consentMarketing: true, consentPrivacy: true, active: true, createdAt: new Date() }
  ]),
  upsertUser: vi.fn().mockResolvedValue(undefined),
  getUserByOpenId: vi.fn().mockResolvedValue(undefined),
  getDb: vi.fn().mockResolvedValue(null),
}));

vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicCtx(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

function createAdminCtx(): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "admin-user",
      email: "admin@escritorio.com",
      name: "Admin",
      loginMethod: "manus",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

describe("blog router", () => {
  it("lista posts publicamente", async () => {
    const caller = appRouter.createCaller(createPublicCtx());
    const result = await caller.blog.list({ limit: 10, offset: 0 });
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].title).toBe("Artigo Teste");
  });

  it("busca post por slug", async () => {
    const caller = appRouter.createCaller(createPublicCtx());
    const post = await caller.blog.bySlug({ slug: "artigo-teste" });
    expect(post.slug).toBe("artigo-teste");
    expect(post.title).toBe("Artigo Teste");
  });

  it("lança NOT_FOUND para slug inexistente", async () => {
    const caller = appRouter.createCaller(createPublicCtx());
    await expect(caller.blog.bySlug({ slug: "nao-existe" })).rejects.toThrow("Artigo não encontrado");
  });

  it("admin pode criar post", async () => {
    const caller = appRouter.createCaller(createAdminCtx());
    const result = await caller.blog.create({
      title: "Novo Artigo",
      slug: "novo-artigo",
      excerpt: "Resumo do artigo",
      content: "Conteúdo completo",
      published: true,
    });
    expect(result.success).toBe(true);
  });

  it("usuário não-admin não pode criar post", async () => {
    const ctx = createPublicCtx();
    ctx.user = { id: 2, openId: "user", email: "user@test.com", name: "User", loginMethod: "manus", role: "user", createdAt: new Date(), updatedAt: new Date(), lastSignedIn: new Date() };
    const caller = appRouter.createCaller(ctx);
    await expect(caller.blog.create({ title: "T", slug: "t", excerpt: "E", content: "C", published: true })).rejects.toThrow();
  });
});

describe("news router", () => {
  it("lista notícias publicamente", async () => {
    const caller = appRouter.createCaller(createPublicCtx());
    const result = await caller.news.list({ limit: 10, offset: 0 });
    expect(Array.isArray(result)).toBe(true);
    expect(result[0].title).toBe("Notícia Teste");
  });

  it("busca notícia por slug", async () => {
    const caller = appRouter.createCaller(createPublicCtx());
    const item = await caller.news.bySlug({ slug: "noticia-teste" });
    expect(item.slug).toBe("noticia-teste");
  });
});

describe("faq router", () => {
  it("lista FAQs publicamente", async () => {
    const caller = appRouter.createCaller(createPublicCtx());
    const result = await caller.faq.list();
    expect(Array.isArray(result)).toBe(true);
    expect(result[0].question).toBe("Pergunta teste?");
  });
});

describe("newsletter router", () => {
  it("inscreve usuário na newsletter", async () => {
    const caller = appRouter.createCaller(createPublicCtx());
    const result = await caller.newsletter.subscribe({
      name: "Maria Silva",
      email: "maria@teste.com",
      consentPrivacy: true,
      consentMarketing: false,
    });
    expect(result.success).toBe(true);
  });

  it("rejeita inscrição sem consentimento de privacidade", async () => {
    const caller = appRouter.createCaller(createPublicCtx());
    await expect(
      caller.newsletter.subscribe({
        name: "João",
        email: "joao@teste.com",
        consentPrivacy: false,
        consentMarketing: false,
      })
    ).rejects.toThrow();
  });

  it("admin pode listar inscritos", async () => {
    const caller = appRouter.createCaller(createAdminCtx());
    const result = await caller.newsletter.listSubscribers();
    expect(Array.isArray(result)).toBe(true);
    expect(result[0].email).toBe("joao@teste.com");
  });
});
