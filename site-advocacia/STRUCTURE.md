# Estrutura do Projeto - Site Advocacia

Projeto de site para escritório de advocacia especializado em Direito da Saúde, construído com **React 19**, **TypeScript**, **Vite**, **tRPC**, **Drizzle ORM** e **Express**.

---

## 📁 Estrutura de Pastas

### `client/src/` - Frontend React

```
client/src/
├── app/                          # Entrada e configuração principal
│   ├── App.tsx                   # Componente raiz com rotas
│   └── main.tsx                  # Ponto de entrada React + tRPC setup
│
├── components/
│   ├── common/                   # Componentes reutilizáveis globais
│   │   ├── Navbar.tsx           # Navegação principal
│   │   ├── Footer.tsx           # Rodapé
│   │   ├── WhatsAppButton.tsx    # Botão flutuante WhatsApp
│   │   └── ErrorBoundary.tsx    # Tratamento de erros
│   │
│   ├── features/                 # Componentes por funcionalidade
│   │   ├── home/                # Seções da página inicial
│   │   │   ├── ManusDialog.tsx
│   │   │   ├── Map.tsx
│   │   │   └── AIChatBox.tsx
│   │   │
│   │   ├── admin/               # Painel administrativo
│   │   │   ├── DashboardLayout.tsx
│   │   │   └── DashboardLayoutSkeleton.tsx
│   │   │
│   │   └── news/                # Componentes de notícias
│   │
│   └── ui/                       # Componentes ShadCN (design system)
│       ├── button.tsx
│       ├── card.tsx
│       ├── form.tsx
│       ├── accordion.tsx
│       └── ... (50+ componentes)
│
├── pages/                        # Páginas (wouter router)
│   ├── Home.tsx                 # Página inicial
│   ├── Blog.tsx                 # Listagem de artigos
│   ├── BlogPost.tsx             # Artigo individual
│   ├── Noticias.tsx             # Listagem de notícias
│   ├── NoticiaPost.tsx          # Notícia individual
│   ├── Admin.tsx                # Painel admin
│   ├── AdminLogin.tsx           # Login admin
│   └── NotFound.tsx             # Página 404
│
├── contexts/                     # React Context API
│   └── ThemeContext.tsx         # Sistema de temas (light/dark)
│
├── hooks/                        # React Hooks customizados
│   ├── useComposition.ts        # Composição de dados
│   ├── useMobile.tsx            # Detecção mobile
│   ├── usePersistFn.ts          # Persistência de funções
│   └── useAuth.ts               # Autenticação
│
├── lib/                          # Bibliotecas e utilitários
│   ├── trpc.ts                  # Cliente tRPC configurado
│   └── utils.ts                 # Funções utilitárias
│
├── utils/                        # Novo - Convertores e helpers
│   └── (será preenchido)
│
├── styles/                       # Estilos CSS
│   └── index.css                # Estilos globais (Tailwind)
│
├── const.ts                      # Constantes do cliente
└── index.html                    # Template HTML
```

---

### `server/` - Backend Node.js/Express

```
server/
├── routers.ts                    # Hub central de todas as rotas tRPC
│   ├── admin.*                  # Autenticação e painel
│   ├── blog.*                   # Listagem e busca de posts
│   ├── news.*                   # Notícias
│   ├── faq.*                    # FAQ
│   └── newsletter.*             # Inscrições
│
├── db.ts                         # Conexão com banco e queries
│   ├── getDb()                  # Singleton MySQL
│   ├── listPosts()              # Queries de blog
│   ├── listNews()               # Queries de notícias
│   ├── subscribeNewsletter()    # Newsletter
│   └── ... (25+ funções)
│
├── storage.ts                    # Upload para S3/CDN
│
├── _core/                        # Configurações internas
│   ├── index.ts                 # Servidor Express principal
│   ├── context.ts               # Contexto tRPC (user, cookies)
│   ├── cookies.ts               # Gerenciamento de sessão
│   ├── env.ts                   # Variáveis de ambiente validadas
│   ├── trpc.ts                  # Setup tRPC
│   ├── vite.ts                  # Middleware Vite (dev)
│   ├── oauth.ts                 # Autenticação OAuth
│   ├── llm.ts                   # Integração com LLM
│   ├── dataApi.ts               # APIs externas
│   ├── imageGeneration.ts       # Geração de imagens
│   ├── voiceTranscription.ts    # Transcrição de áudio
│   ├── sdk.ts                   # SDK customizado
│   ├── systemRouter.ts          # Rotas do sistema
│   └── notification.ts          # Notificações
│
├── auth.logout.test.ts           # Testes de logout
└── site.test.ts                  # Testes gerais
```

---

### `shared/` - Código Compartilhado

```
shared/
├── types/
│   └── index.ts                 # TypeScript types (re-export do schema)
│
├── constants/
│   └── index.ts                 # Constantes globais
│       ├── COOKIE_NAME
│       ├── UNAUTHED_ERR_MSG
│       └── ONE_YEAR_MS
│
├── utils/
│   └── errors.ts                # Classes de erro customizadas
│
├── const.ts                      # Compatibilidade (re-export)
└── types.ts                      # Compatibilidade (re-export)
```

---

### `drizzle/` - Database Schema & Migrations

```
drizzle/
├── schema.ts                     # Schema MySQL com Drizzle ORM
│   ├── users                     # Usuários OAuth
│   ├── posts                     # Blog Posts
│   ├── news                      # Notícias
│   ├── faqs                      # Perguntas frequentes
│   ├── adminUsers               # Credenciais admin
│   └── newsletterSubscribers    # Inscrições newsletter
│
├── migrations/                   # SQL migrations automáticas
│   ├── 0000_wet_sally_floyd.sql
│   ├── 0001_tiresome_mordo.sql
│   └── 0002_shiny_puck.sql
│
├── meta/                         # Metadados do Drizzle
│   ├── _journal.json            # Histórico de migrações
│   └── *_snapshot.json
│
├── relations.ts                  # Relações entre tabelas
└── config.ts                     # Configuração Drizzle
```

---

## 🔗 Rotas da Aplicação

### Cliente (React Router via Wouter)
- `/` → Página inicial
- `/blog` → Listagem de posts
- `/blog/:slug` → Post individual
- `/noticias` → Listagem de notícias
- `/noticias/:slug` → Notícia individual
- `/admin/login` → Login administrativo
- `/admin` → Painel de controle
- `/404` → Página não encontrada

### Servidor (tRPC)
- `/api/trpc` → Endpoint tRPC (batch)
- `/api/oauth/callback` → OAuth callback

---

## 🛠️ Tecnologias

### Frontend
- **React 19** - UI
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **ShadCN/UI** - Component library
- **tRPC** - Type-safe API
- **Wouter** - Lightweight router
- **Framer Motion** - Animações
- **React Hook Form** - Formulários

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **tRPC** - Type-safe API
- **Drizzle ORM** - Database
- **MySQL** - Database
- **OAuth 2.0** - Autenticação
- **Jose** - JWT tokens

### Database
- **MySQL 8+** - Relational database
- **Drizzle Kit** - Schema migrations

### DevTools
- **TypeScript** - Type checking
- **Vitest** - Unit tests
- **Vite Plugins** - HMR, JSX location
- **Manus Runtime** - Debug collector

---

## 📋 Scripts npm

```bash
pnpm run dev         # Inicia dev server (port 3000+)
pnpm run build       # Build para produção
pnpm run start       # Roda em produção
pnpm run check       # TypeScript type check
pnpm run test        # Rodaciona testes
pnpm run db:push     # Sync schema & migrations
pnpm run format      # Prettier format
```

---

## 🔐 Variáveis de Ambiente

```env
DATABASE_URL=mysql://user:pass@localhost/dbname
JWT_SECRET=sua_chave_super_secreta
VITE_APP_ID=seu_app_id
OAUTH_SERVER_URL=https://oauth.provider.com
OWNER_OPEN_ID=seu_open_id
BUILT_IN_FORGE_API_URL=https://api.forge.com
BUILT_IN_FORGE_API_KEY=sua_chave_forge
NODE_ENV=development|production
```

---

## 🚀 Como Rodar

1. **Instale dependências:**
   ```bash
   pnpm install
   ```

2. **Configure `.env`:**
   - Copie as variáveis de ambiente acima
   - Configure seu banco MySQL

3. **Sincronize banco de dados:**
   ```bash
   pnpm run db:push
   ```

4. **Inicie dev server:**
   ```bash
   pnpm run dev
   ```

5. **Acesse a aplicação:**
   - Frontend: http://localhost:3000
   - API tRPC: http://localhost:3000/api/trpc

---

## 📊 Padrões de Código

### Imports
- Use path aliases (`@/*` para `client/src/*`)
- Organize por feature no client
- Re-export em `index.ts` para composição

### React Components
- Functional components com hooks
- TypeScript strict mode
- CSS Modules quando necessário

### tRPC Router
- Procedures: `publicProcedure`, `protectedProcedure`
- Input validation com Zod
- Error handling customizado

### Database
- Drizzle ORM para type-safety
- Prepared statements
- Migrations versionadas

---

## 📝 Notas

- **Sem banco de dados?** Frontend funciona com dados vazios
- **OAuth opcional** - Login padrão por username/password disponível
- **AWS S3** - Integrado para upload de arquivos
- **Testes** - Vitest para unit tests de routers e queries

---

**Atualizado:** 10 de abril de 2026  
**Versão:** 3.0 - Especializada em Direito da Saúde
