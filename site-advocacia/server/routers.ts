import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import {
  createFaq, createNews, createPost,
  deleteFaq, deleteNews, deletePost,
  getNewsBySlug, getPostBySlug,
  listFaqs, listNews, listPosts,
  subscribeNewsletter, updateFaq, updateNews, updatePost,
  listNewsletterSubscribers,
  getAdminByUsername, updateAdminLastLogin
} from "./db";
import bcrypt from "bcryptjs";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  
  // ─── Admin Auth ────────────────────────────────────────────────────────────
  admin: router({
    login: publicProcedure
      .input(z.object({
        username: z.string().min(1),
        password: z.string().min(1),
      }))
      .mutation(async ({ input, ctx }) => {
        const admin = await getAdminByUsername(input.username);
        if (!admin) throw new TRPCError({ code: "UNAUTHORIZED", message: "Usuário ou senha inválidos" });
        
        const passwordMatch = await bcrypt.compare(input.password, admin.passwordHash);
        if (!passwordMatch) throw new TRPCError({ code: "UNAUTHORIZED", message: "Usuário ou senha inválidos" });
        
        await updateAdminLastLogin(admin.id);
        
        ctx.res.cookie("adminToken", admin.id.toString(), {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        
        return { success: true, adminId: admin.id };
      }),
  }),
  
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ─── Blog ──────────────────────────────────────────────────────────────────
  blog: router({
    list: publicProcedure
      .input(z.object({ limit: z.number().min(1).max(100).default(10), offset: z.number().min(0).default(0), search: z.string().optional(), category: z.string().optional() }))
      .query(({ input }) => listPosts(input.limit, input.offset, input.search, input.category)),

    bySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const post = await getPostBySlug(input.slug);
        if (!post) throw new TRPCError({ code: "NOT_FOUND", message: "Artigo não encontrado" });
        return post;
      }),

    create: protectedProcedure
      .input(z.object({
        title: z.string().min(1),
        slug: z.string().min(1),
        excerpt: z.string().min(1),
        content: z.string().min(1),
        coverImage: z.string().optional(),
        category: z.string().optional(),
        tags: z.string().optional(),
        published: z.boolean().default(true),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        await createPost(input);
        return { success: true };
      }),

    update: protectedProcedure
      .input(z.object({
        id: z.number(),
        title: z.string().min(1).optional(),
        slug: z.string().min(1).optional(),
        excerpt: z.string().min(1).optional(),
        content: z.string().min(1).optional(),
        coverImage: z.string().optional(),
        category: z.string().optional(),
        tags: z.string().optional(),
        published: z.boolean().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        const { id, ...data } = input;
        await updatePost(id, data);
        return { success: true };
      }),

    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        await deletePost(input.id);
        return { success: true };
      }),
  }),

  // ─── News ──────────────────────────────────────────────────────────────────
  news: router({
    list: publicProcedure
      .input(z.object({ limit: z.number().min(1).max(50).default(10), offset: z.number().min(0).default(0) }))
      .query(({ input }) => listNews(input.limit, input.offset)),

    bySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const item = await getNewsBySlug(input.slug);
        if (!item) throw new TRPCError({ code: "NOT_FOUND", message: "Notícia não encontrada" });
        return item;
      }),

    create: protectedProcedure
      .input(z.object({
        title: z.string().min(1),
        slug: z.string().min(1),
        excerpt: z.string().min(1),
        content: z.string().min(1),
        source: z.string().optional(),
        sourceUrl: z.string().optional(),
        coverImage: z.string().optional(),
        published: z.boolean().default(true),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        await createNews(input);
        return { success: true };
      }),

    update: protectedProcedure
      .input(z.object({
        id: z.number(),
        title: z.string().min(1).optional(),
        slug: z.string().min(1).optional(),
        excerpt: z.string().min(1).optional(),
        content: z.string().min(1).optional(),
        source: z.string().optional(),
        sourceUrl: z.string().optional(),
        coverImage: z.string().optional(),
        published: z.boolean().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        const { id, ...data } = input;
        await updateNews(id, data);
        return { success: true };
      }),

    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        await deleteNews(input.id);
        return { success: true };
      }),
  }),

  // ─── FAQ ───────────────────────────────────────────────────────────────────
  faq: router({
    list: publicProcedure.query(() => listFaqs()),

    create: protectedProcedure
      .input(z.object({
        question: z.string().min(1),
        answer: z.string().min(1),
        category: z.string().optional(),
        order: z.number().default(0),
        published: z.boolean().default(true),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        await createFaq(input);
        return { success: true };
      }),

    update: protectedProcedure
      .input(z.object({
        id: z.number(),
        question: z.string().min(1).optional(),
        answer: z.string().min(1).optional(),
        category: z.string().optional(),
        order: z.number().optional(),
        published: z.boolean().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        const { id, ...data } = input;
        await updateFaq(id, data);
        return { success: true };
      }),

    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
        await deleteFaq(input.id);
        return { success: true };
      }),
  }),

  // ─── Newsletter ────────────────────────────────────────────────────────────
  newsletter: router({
    subscribe: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        email: z.string().email("E-mail inválido"),
        consentPrivacy: z.boolean().refine(v => v === true, "Você deve aceitar a Política de Privacidade"),
        consentMarketing: z.boolean().default(false),
      }))
      .mutation(async ({ input }) => {
        const result = await subscribeNewsletter(input);
        await notifyOwner({
          title: "Nova inscrição na newsletter",
          content: `${input.name} (${input.email}) se inscreveu na newsletter do site.`,
        });
        return { success: true, alreadyExists: result.alreadyExists };
      }),

    listSubscribers: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") throw new TRPCError({ code: "FORBIDDEN" });
      return listNewsletterSubscribers();
    }),
  }),
});

export type AppRouter = typeof appRouter;
