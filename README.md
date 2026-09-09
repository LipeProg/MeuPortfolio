# Portfólio — Luis Felipe

Portfólio profissional criado para centralizar minha trajetória, projetos, experiências e competências em desenvolvimento de software.

O projeto apresenta aplicações web, projetos full stack e iniciativas voltadas a dados, reunindo em um único lugar os principais trabalhos que representam minha evolução técnica.

## Acesse o portfólio

https://meu-portfolio-three-mocha.vercel.app/

## Principais objetivos

- apresentar meus principais projetos de software;
- documentar minha evolução profissional e acadêmica;
- demonstrar competências em frontend, backend, arquitetura e dados;
- servir como ponto central entre GitHub, LinkedIn e oportunidades profissionais.

## Stack

- Next.js 15 com App Router
- React 19
- TypeScript strict
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Estrutura do projeto

```text
app/                  Rotas, layout compartilhado e estilos globais
components/layout/    Navbar e footer
components/sections/  Seções reutilizadas pelas páginas
components/ui/        Componentes reutilizáveis
data/                 Conteúdo, navegação e dados estruturados
lib/                  Tipos compartilhados
public/images/        Imagens de perfil e projetos
```

## Rotas

```text
/             Home
/sobre        Biografia e habilidades
/experiencia  Experiências profissionais
/projetos     Projetos em destaque
/escritos     Espaço para conteúdos futuros
/contato      Formulário e links de contato
```

Navbar e Footer são renderizados pelo layout raiz e compartilhados por todas as páginas.

Cada componente possui uma pasta própria com o componente e seus estilos:

```text
Hero/
├── Hero.tsx
└── Hero.styles.ts
```

O conteúdo do site é mantido prioritariamente nos arquivos de `data/`, separando conteúdo e apresentação sempre que possível.

## Como rodar localmente

### Requisitos

- Node.js 20 ou superior
- npm

### Instalação

```bash
npm install
npm run dev
```

## Validação

Antes de uma entrega ou deploy, o projeto pode ser validado com:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deploy

O projeto está preparado para deploy na Vercel ou em qualquer ambiente compatível com Next.js 15.

## Status

Em evolução contínua. Novos projetos e estudos são incorporados conforme atingem nível adequado para apresentação profissional.
