import { socialUrls } from '@/data/social';
import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    slug: 'minerva-pdv',
    title: 'Minerva PDV',
    description:
      'MVP acadêmico full stack de um sistema web de ponto de venda para pequenos negócios, com gestão de produtos, vendas, estoque e indicadores.',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Node.js',
      'Express',
      'Prisma ORM',
      'PostgreSQL',
      'Zod',
      'Vitest',
      'Docker',
    ],
    details: {
      context: 'MVP acadêmico · Projeto full stack de portfólio',
      problem:
        'Pequenos negócios precisam registrar produtos, vendas e movimentações de estoque de forma consistente. O desafio do projeto foi representar esse fluxo em um sistema integrado, preservando regras importantes como disponibilidade de estoque, integridade dos valores e histórico das operações.',
      solution: [
        'Desenvolvimento de duas aplicações integradas: um frontend administrativo em Next.js e uma API REST em Node.js com Express.',
        'O backend foi organizado em rotas, controllers, services e repositories, usando Prisma para persistência no PostgreSQL.',
        'O fluxo principal percorre frontend, camada de serviço HTTP, API, regras de negócio, transações e banco de dados relacional.',
      ],
      features: [
        'Cadastro, edição, busca e desativação lógica de produtos.',
        'Código de barras único, preços armazenados em centavos e controle de estoque.',
        'Registro de vendas com múltiplos itens, desconto, subtotal e total.',
        'Agrupamento de produtos repetidos e validação de estoque antes da venda.',
        'Venda e baixa automática de estoque executadas na mesma transação.',
        'Entradas e saídas manuais de estoque com motivo obrigatório e histórico.',
        'Dashboard com indicadores de produtos, estoque, vendas e faturamento.',
        'Relatórios calculados no frontend a partir das listagens da API.',
      ],
      contributions: [
        'Estruturei o frontend e o backend como aplicações separadas e integradas por uma API REST.',
        'Modelei produtos, vendas, itens de venda e movimentações de estoque em banco relacional.',
        'Implementei regras de negócio, validações com Zod e transações com Prisma.',
        'Organizei o backend em camadas de rotas, controllers, services e repositories.',
        'Criei testes unitários das principais regras usando repositórios falsos em memória.',
        'Desenvolvi a interface administrativa e o tratamento de falhas de comunicação com a API.',
      ],
      competencies: [
        'Desenvolvimento full stack',
        'Arquitetura em camadas',
        'APIs REST',
        'Modelagem relacional',
        'Regras de negócio',
        'Transações e integridade de dados',
        'Validação de dados',
        'Testes automatizados',
        'Integração frontend e backend',
      ],
      limitations: [
        'Não possui autenticação, usuários ou níveis de acesso.',
        'Não contempla abertura e fechamento de caixa ou formas de pagamento.',
        'Não possui cancelamento, estorno, emissão de cupom ou recursos fiscais.',
        'Os relatórios ainda são processados no frontend.',
        'Ainda não possui preparação completa para ambiente de produção.',
      ],
    },
  },
  {
    slug: 'minerva-crm',
    title: 'Minerva CRM',
    description:
      'Projeto acadêmico frontend de CRM para pequenos negócios, com clientes, oportunidades, funil comercial, tarefas, interações e indicadores.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'App Router',
      'Git',
      'GitHub',
    ],
    details: {
      context: 'Projeto acadêmico · Case frontend de portfólio',
      problem:
        'Pequenos negócios precisam organizar clientes, oportunidades e atividades comerciais em um fluxo compreensível. O desafio foi interpretar esse domínio, relacionar seus diferentes registros e representar o processo de vendas em uma aplicação administrativa.',
      solution: [
        'Desenvolvimento de uma aplicação frontend em Next.js para centralizar a representação de clientes, leads, oportunidades, tarefas e interações comerciais.',
        'O domínio foi modelado com TypeScript, componentes reutilizáveis e módulos separados para organizar os diferentes fluxos do CRM.',
        'As regras de negócio, relacionamentos, métricas e operações são executados no frontend, sem backend ou persistência real em banco de dados.',
      ],
      features: [
        'Dashboard com indicadores de leads, oportunidades, conversão, ticket médio e valor do funil.',
        'Cadastro, edição, consulta, pesquisa e exclusão com confirmação de clientes.',
        'Organização de leads e oportunidades com responsável, valor, etapa e histórico.',
        'Funil de vendas em formato Kanban com movimentação entre etapas comerciais.',
        'Tarefas de follow-up relacionadas a clientes, leads e oportunidades.',
        'Registro de interações para representar o histórico de relacionamento.',
        'Relatórios de desempenho, conversões, valores, etapas e origem dos leads.',
        'Relacionamento entre os diferentes registros do processo comercial.',
      ],
      contributions: [
        'Defini individualmente a ideia, o escopo e as funcionalidades do projeto.',
        'Modelei conceitualmente o CRM e o fluxo do processo comercial.',
        'Organizei a estrutura da aplicação e desenvolvi seus componentes e módulos.',
        'Implementei as regras de negócio e os relacionamentos entre os dados no frontend.',
        'Desenvolvi o funil Kanban, os dashboards, as métricas e os relatórios.',
        'Refinei a experiência de uso e organizei a documentação do projeto.',
      ],
      competencies: [
        'Desenvolvimento frontend',
        'React e Next.js',
        'TypeScript',
        'Componentização',
        'Modelagem de domínio',
        'Interpretação de regras de negócio',
        'Relacionamento e manipulação de dados',
        'Dashboards e métricas',
        'Sistemas administrativos',
        'UX aplicada a sistemas empresariais',
      ],
      limitations: [
        'O projeto é exclusivamente frontend.',
        'Não possui backend ou API própria.',
        'Não utiliza banco de dados ou persistência real.',
        'Não possui autenticação ou gerenciamento real de usuários.',
      ],
    },
  },
  
];
