# Site Uriel Nascimento Sociedade de Advocacia - TODO

## Banco de Dados & Backend
- [x] Schema: tabelas posts (blog), news (notícias), faq, newsletter_subscribers
- [x] Seed com dados iniciais de blog, notícias e FAQ
- [x] Router tRPC: blog (listagem, busca, artigo individual)
- [x] Router tRPC: notícias (listagem, notícia individual)
- [x] Router tRPC: FAQ (listagem)
- [x] Router tRPC: newsletter (inscrição)
- [x] Router tRPC: admin (criar/editar posts e notícias)

## Frontend - Estrutura
- [x] Configurar paleta de cores: azul escuro #0d2137, verde #00d084, branco
- [x] Tipografia: fonte Playfair Display + Inter via Google Fonts
- [x] Navbar fixa com logo e links de navegação
- [x] Footer completo com contato, CNPJ, endereço e links

## Frontend - Páginas
- [x] Home: Hero section com foto do advogado, CTA WhatsApp
- [x] Home: Barra de busca de conteúdo jurídico
- [x] Home: Seção de áreas de atuação em cards com ícones
- [x] Home: Seção Quem Somos com foto e bio do advogado
- [x] Home: Seção de notícias recentes (3 cards)
- [x] Home: Seção de blog (3 artigos recentes)
- [x] Home: FAQ com acordeão expansível
- [x] Home: Newsletter com campos nome, email e checkboxes LGPD
- [x] Página /blog: listagem de artigos com busca
- [x] Página /blog/:slug: artigo individual completo
- [x] Página /noticias: listagem de notícias
- [x] Página /noticias/:slug: notícia individual
- [x] Página /admin: painel administrativo para criar/gerenciar conteúdo

## Design
- [x] Paleta azul escuro #0d2137, verde #00d084, branco
- [x] Responsividade mobile-first
- [x] Botão flutuante WhatsApp
- [x] Favicon e meta tags SEO
- [x] Upload de foto e logo para CDN

## Testes
- [x] Testes vitest para routers de blog, notícias, FAQ e newsletter (12 testes passando)

## Atualizações v2
- [x] Atualizar dados reais: nome completo, CNPJ, endereço, WhatsApp
- [x] Blog: filtros por área jurídica e assunto
- [x] Blog: sidebar com categorias e contagem de artigos

## Atualização v3 — Especialização em Direito da Saúde
- [x] Analisar áreas de atuação do site Dr. Elton Fernandes
- [x] Remover todas as áreas genéricas do direito
- [x] Substituir por áreas exclusivas de Direito da Saúde
- [x] Atualizar Hero, textos e blog para foco em saúde
- [x] Atualizar filtros do blog para categorias de Direito da Saúde

## Atualização v4 — Avaliações Google e ajustes
- [x] Remover "Piracicaba/SP" do badge OAB no Hero
- [x] Coletar avaliações reais do Google
- [x] Criar seção de avaliações Google no site

## Atualização v5 — Editor visual
- [x] Adicionar número OAB/SP: 491.479 no badge Hero e seção Quem Somos

## Atualização v6 — Botão Admin Visível
- [x] Adicionar botão de admin visível no menu ou rodapé
- [x] Botão leva para painel de criação de artigos (/admin)

## Atualização v7 — Login Admin com Senha
- [x] Criar tabela de admin_users com username e senha criptografada
- [x] Criar página de login admin (/admin/login)
- [x] Proteger painel admin com verificação de autenticação
- [x] Criar usuário: uriel / 937520 (criptografado)
- [x] Apenas admin pode acessar painel de criação de artigos

## Bug v7.1 — Painel Admin não mostra opções de editar
- [x] Painel admin carrega mas não mostra botões de editar/deletar artigos
- [x] Verificar se o token de admin está sendo salvo corretamente
- [x] Verificar se a página Admin.tsx está renderizando o conteúdo
- [x] Corrigir AdminLogin.tsx para salvar token no localStorage
