# 🏛️ Site Advocacia - Uriel Nascimento

Site profissional para escritório de advocacia especializado em **Direito da Saúde**, com funcionalidades de blog, notícias, FAQ e painel administrativo.

---

## 🚀 Quick Start

```bash
# 1. Instalar dependências
pnpm install

# 2. Configurar variáveis de ambiente 
cp .env.example .env

# 3. Iniciar banco de dados (opcional - frontend funciona sem DB)
pnpm run db:push

# 4. Rodei dev server
pnpm run dev
```

Acesse em **http://localhost:3000** (ou próxima porta disponível)

---

## ✨ Recursos

✅ **Frontend Moderno**
- React 19 + TypeScript
- Responsive mobile-first
- Dark/Light theme
- Animações com Framer Motion
- Design System ShadCN/UI

✅ **Backend Type-Safe**
- tRPC end-to-end type safety
- Autenticação OAuth + JWT
- Drizzle ORM MySQL
- Input validation com Zod

✅ **Conteúdo**
- 📝 Blog com busca e categorias
- 📰 Seção de notícias
- ❓ FAQ com acordeão
- 📧 Newsletter com LGPD

✅ **Admin**
- 🔐 Painel protegido
- ➕ Criar/editar posts e notícias
- 👥 Gerenciar usuários
- ⚙️ Configurações

---

## 📁 Estrutura

Ver [STRUCTURE.md](./STRUCTURE.md) para documentação completa da arquitetura.

```
project/
├── client/src/              # Frontend React
│   ├── app/                # Entry point
│   ├── components/         # UI components organizados por features
│   ├── pages/             # Page routes
│   └── styles/            # CSS global
├── server/                 # Backend Express
│   ├── routers.ts        # tRPC router central
│   ├── db.ts             # Database queries
│   └── _core/            # Config & middleware
├── shared/                # Tipos e constantes compartilhadas
├── drizzle/               # Schema MySQL e migrations
└── package.json
```

---

## 🛠️ Scripts

| Comando | Descrição |
|---------|-----------|
| `pnpm run dev` | Dev server com HMR |
| `pnpm run build` | Build para produção |
| `pnpm run start` | Rodeia build produção |
| `pnpm run check` | TypeScript check |
| `pnpm run test` | Rodar testes Vitest |
| `pnpm run db:push` | Sync schema Drizzle |
| `pnpm run format` | Prettier format |

---

## 🔐 Configuração

### Variáveis de Ambiente (`.env`)

```env
# Database
DATABASE_URL=mysql://user:password@localhost:3306/advocacia

# Autenticação
JWT_SECRET=sua_chave_super_secreta_aqui
VITE_APP_ID=seu_app_id

# OAuth (Opcional)
OAUTH_SERVER_URL=https://oauth.seu-provider.com
OWNER_OPEN_ID=seu_id_no_oauth

# APIs Externas (Opcional)
BUILT_IN_FORGE_API_URL=https://api.forge.com
BUILT_IN_FORGE_API_KEY=sua_chave_forge

# Node
NODE_ENV=development
```

---

## 🗄️ Banco de Dados

### Setup MySQL Local

```bash
# Terminal 1: Iniciar MySQL
mysql -u root

# Terminal 2: Criar banco
CREATE DATABASE advocacia CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Terminal 3: Aplicar schema
pnpm run db:push
```

### Sem Banco de Dados?
- Frontend funciona normalmente
- Blog/Notícias aparecem vazios
- Admin não salva dados (em memória)

---

## 🧪 Testing

```bash
# Rodar testes
pnpm run test

# Testes disponíveis
- auth.logout.test.ts    # Logout OAuth
- site.test.ts           # Tests gerais
```

---

## 🎨 Design System

Componentes ShadCN/UI pré-instalados:
- Buttons, Cards, Forms
- Dialogs, Modals, Drawers
- Accordions, Tabs, Dropdowns
- Tables, Pagination
- Inputs, Selects, Checkboxes

---

## 📚 Stack Tecnológico

### Frontend
```
React 19 → TypeScript → Vite → Tailwind CSS
   ↓
ShadCN/UI → Framer Motion → Wouter Router
   ↓
tRPC Client → React Query → React Hook Form
```

### Backend
```
Express → tRPC → Zod Validation
   ↓
Drizzle ORM → MySQL 8+
   ↓
JWT + Cookies → OAuth 2.0
```

---

## 🚢 Deployment

### Build
```bash
pnpm run build
```

Outputs:
- `dist/` - Frontend (Vite)
- `dist/index.js` - Server (esbuild)

### Produção
```bash
NODE_ENV=production pnpm run start
```

---

## 🐛 Troubleshooting

### Erro: "DATABASE_URL não configurada"
- Crie `.env` com `DATABASE_URL=mysql://...`

### Erro: "Port XXX is busy"
- Servidor busca próxima porta disponível automaticamente
- Ou mude: `PORT=3001 pnpm run dev`

### Erro: "Cannot find module"
- Execute: `pnpm run check` para verificar imports
- Limpe cache: `pnpm store prune`

---

## 📝 Convenções

### Imports
- Use `@/*` para `client/src/*`
- Organize por feature
- Exporte tudo em `index.ts`

### React Components
- Functional components com hooks
- TypeScript strict mode
- Nomes em PascalCase

### Banco de Dados
- Drizzle ORM para type-safety
- Migrations versionadas
- Prepared statements sempre

---

## 📄 Licença

MIT

---

## 👨‍💼 About

Site profissional para Uriel Nascimento - Sociedade Unipessoal de Advocacia

**Especialidades:**
- Direito da Saúde
- Ações contra planos de saúde
- Erro médico
- Medicamentos de alto custo
- SUS e direito sanitário

---

**Última atualização:** 10 de abril de 2026  
**Versão:** 3.0  
**Node:** 18+  
**pnpm:** 10.4.1+
