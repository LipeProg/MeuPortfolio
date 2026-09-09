import type { SkillCategory } from '@/lib/types';

export const skills: SkillCategory[] = [
  {
    category: 'Linguagens e Frontend',
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'HTML e CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'APIs REST', 'Integrações full stack'],
  },
  {
    category: 'Dados e Banco',
    items: ['PostgreSQL', 'SQLite', 'SQL','ETL e visualização'],
  },
  {
    category: 'Engenharia e Ferramentas',
    items: [
      'Arquitetura e modelagem',
      'Git e GitHub',
      'Docker e Linux',
      'Documentação técnica',
      'Automação de processos',
    ],
  },
];
