# 🤝 Guia de Contribuição e Desenvolvimento

Bem-vindo ao projeto! Este guia ajuda você a entender a arquitetura e as convenções do projeto.

---

## 🏗️ Arquitetura

### Full-Stack Type-Safe

```
Frontend (React/TS) ←→ tRPC ←→ Backend (Node/TS) ←→ MySQL
```

**Vantagens:**
- Um type é compartilhado automaticamente entre cliente e servidor
- Erros de tipo detectados em tempo de desenvolvimento
- IntelliSense perfeito em ambos os lados

---

## 📂 Estrutura de Pastas

### Client (`client/src/`)

```
app/              → Entry point React + Routing
components/
  ├── common/    → Navbar, Footer, Layout globais
  ├── features/  → Componentes por funcionalidade
  │   ├── home/
  │   ├── admin/
  │   └── news/
  └── ui/        → ShadCN components
contexts/         → React Context (Theme, User, etc)
hooks/            → Custom React hooks
lib/             → Bibliotecas (tRPC, utils)
pages/           → Page components
utils/           → Helper functions
styles/          → CSS global
```

**Padrão de Feature:**
```
features/
  └── myfeature/
       ├── MyFeature.tsx (main component)
       ├── useMyFeature.ts (hook)
       ├── MyFeatureCard.tsx (subcomponent)
       └── index.ts (export)
```

### Server (`server/`)

```
routers.ts        → tRPC router principal (todas as endpoints)
db.ts            → Database queries
storage.ts       → File upload S3
_core/
  ├── index.ts    → Express app setup
  ├── context.ts  → tRPC context (user, cookies)
  ├── trpc.ts     → tRPC config
  ├── cookies.ts  → Session management
  ├── oauth.ts    → OAuth login
  └── ... outros
```

### Shared (`shared/`)

```
types/            → TypeScript types (re-export schema)
constants/        → Constantes globais
utils/            → Funções compartilhadas
```

---

## 🔄 Fluxo de Dados

### Adicionando uma Nova Feature

#### 1️⃣ Backend - Criar Procedimento tRPC

```typescript
// server/routers.ts

export const appRouter = router({
  myfeature: router({
    list: publicProcedure
      .input(z.object({ 
        limit: z.number().default(10) 
      }))
      .query(async ({ input }) => {
        // buscar dados do DB
        return db.query(...);
      }),
    
    create: protectedProcedure
      .input(z.object({
        title: z.string(),
        content: z.string()
      }))
      .mutation(async ({ input, ctx }) => {
        // ctx.user = usuário autenticado
        return db.insert(...);
      })
  })
});
```

#### 2️⃣ Frontend - Usar com Hook

```typescript
// client/src/components/MyFeature.tsx

import { trpc } from "@/lib/trpc";

export function MyFeature() {
  const { data, isLoading, error } = trpc.myfeature.list.useQuery({
    limit: 20
  });

  const createMutation = trpc.myfeature.create.useMutation({
    onSuccess: () => {
      // Refetch data
      queryClient.invalidateQueries();
    }
  });

  if (isLoading) return <Skeleton />;
  if (error) return <ErrorBoundary error={error} />;

  return (
    <div>
      {data?.map(item => (
        <Card key={item.id}>{item.title}</Card>
      ))}
      <button onClick={() => createMutation.mutate(...)}>
        Criar
      </button>
    </div>
  );
}
```

---

## 💾 Banco de Dados

### Adicionando uma Nova Tabela

```typescript
// drizzle/schema.ts

export const myentity = mysqlTable('my_entity', {
  id: int().primaryKey().autoincrement(),
  title: varchar({ length: 255 }).notNull(),
  content: text().notNull(),
  createdAt: timestamp().defaultNow(),
});

export type MyEntity = typeof myentity.$inferSelect;
export type InsertMyEntity = typeof myentity.$inferInsert;
```

### Adicionando Queries

```typescript
// server/db.ts

export async function listMyEntity(limit = 10, offset = 0) {
  const db = await getDb();
  if (!db) return [];
  return db.select()
    .from(myentity)
    .limit(limit)
    .offset(offset)
    .orderBy(desc(myentity.createdAt));
}

export async function createMyEntity(data: InsertMyEntity) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(myentity).values(data);
  return result;
}
```

### Migração

```bash
# Gerar migration automática
pnpm run db:push

# Ver migrations geradas
ls drizzle/migrations/
```

---

## 🔒 Autenticação

### Proteger Endpoints

```typescript
// public = qualquer pessoa
publicProcedure.query(...)

// protected = precisa estar autenticado
protectedProcedure.query(async ({ ctx }) => {
  // ctx.user está garantido aqui
  console.log(ctx.user.id);
  return ...;
})

// admin = precisa ser admin
protectedProcedure
  .use(async (opts) => {
    if (opts.ctx.user?.role !== 'admin') {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return opts.next(opts);
  })
  .mutation(...)
```

### Verificar Autenticação no Frontend

```typescript
const { data: user } = trpc.system.me.useQuery();

if (!user) {
  return <Navigate to="/admin/login" />;
}

if (user.role !== 'admin') {
  return <ErrorBoundary error="Access denied" />;
}
```

---

## 🧹 Linting e Formatting

```bash
# Type check
pnpm run check

# Format código
pnpm run format

# Verificar imports
grep -r "from \"" client/src/ server/
```

---

## 🧪 Testes

```typescript
// server/myfeature.test.ts

import { describe, it, expect } from 'vitest';
import { appRouter } from './routers';

describe('myfeature', () => {
  it('should list items', async () => {
    const result = await appRouter.createCaller({}).myfeature.list({
      limit: 10
    });
    
    expect(Array.isArray(result)).toBe(true);
  });
});
```

```bash
pnpm run test
```

---

## 📦 Componentes

### Criar Novo Componente

```typescript
// client/src/components/features/myfeature/MyFeature.tsx

interface MyFeatureProps {
  title: string;
  onSubmit?: (data: string) => void;
}

export function MyFeature({ title, onSubmit }: MyFeatureProps) {
  const [value, setValue] = useState('');

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <Input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={() => onSubmit?.(value)}>
        Submit
      </Button>
    </div>
  );
}
```

### Usar ShadCN Components

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormField } from "@/components/ui/form";

// Veja mais em: client/src/components/ui/
```

---

## 🎯 Padrões

### Import Paths
```typescript
// ✅ BOM - usar alias
import { MyComponent } from "@/components/features/home";

// ❌ RUIM - relative paths em imports
import { MyComponent } from "../../../../../components/...";
```

### Error Handling
```typescript
// Backend
throw new TRPCError({
  code: 'UNAUTHORIZED',
  message: 'Você precisa fazer login'
});

// Frontend
if (error instanceof TRPCClientError) {
  console.log(error.message);
  toast.error(error.message);
}
```

### Loading States
```typescript
// Com React Query automaticamente
const { isLoading, isPending } = trpc.myfeature.list.useQuery();

if (isLoading) return <Skeleton />;
```

---

## 🚀 Performance

### Lazy Load Components
```typescript
import { lazy, Suspense } from 'react';

const Admin = lazy(() => import('./Admin'));

<Suspense fallback={<Skeleton />}>
  <Admin />
</Suspense>
```

### Otimize Queries
```typescript
// Evitar N+1 queries
const data = await db.select()
  .from(posts)
  .leftJoin(authors, eq(posts.authorId, authors.id))
  .limit(10);
```

### Cache
```typescript
// React Query cuida disso automaticamente
// Mas você pode invalidar manualmente:
queryClient.invalidateQueries({
  queryKey: ['myfeature.list']
});
```

---

## 📝 Git Workflow

```bash
# 1. Criar branch
git checkout -b feature/minha-feature

# 2. Fazer commits com mensagens claras
git commit -m "feat: adicionar novo componente MyFeature"

# 3. Push e criar PR
git push origin feature/minha-feature

# 4. PR workflow
# - Type check passa? ✅
# - Tests passam? ✅
# - Code review ✅
# Merge!
```

---

## 🐛 Debugging

### Print Debug
```typescript
// To see in browser console
console.log('[DEBUG]', variando);

// Backend logs aparecem no terminal
console.log('[API]', data);
```

### DevTools
- React DevTools (browser)
- Network tab (XHR → tRPC calls)
- TypeScript errors (pnpm run check)

---

## 📚 Recursos Úteis

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [tRPC Docs](https://trpc.io/docs)
- [Drizzle ORM](https://orm.drizzle.team)
- [TailwindCSS](https://tailwindcss.com)
- [ShadCN/UI](https://ui.shadcn.com)

---

## ❓ Dúvidas?

- Veja [STRUCTURE.md](./STRUCTURE.md) para arquitetura completa
- Veja [README.md](./README.md) para setup
- Abra uma issue no repositório

Happy coding! 🚀
