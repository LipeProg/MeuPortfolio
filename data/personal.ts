import type { PersonalData } from '@/lib/types';

export const personal: PersonalData = {
  name: 'Luis Felipe',
  professionalTitle: 'Desenvolvedor de Software',
  hero: {
    greeting: 'Olá, eu sou',
    title: 'Desenvolvedor de Software',
    specialties: 'Full Stack, Backend & Dados',
    description:
      'Desenvolvo aplicações, sistemas empresariais e soluções orientadas a dados, transformando problemas reais em produtos bem estruturados e preparados para evoluir.',
    technologies: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  metaDescription:
    'Portfólio de Luis Felipe, desenvolvedor de software com atuação em full stack, backend, dados e sistemas empresariais.',
  biography: [
    'Sou desenvolvedor de software e estudante de Ciência da Computação, com formação técnica em Desenvolvimento de Sistemas e experiência prática na criação de aplicações web, sistemas empresariais e projetos orientados a dados.',
    'Atuo desde a compreensão do problema até a implementação, documentação e organização técnica do projeto. Trabalho principalmente com TypeScript, React, Next.js, Node.js, Express e PostgreSQL em soluções frontend, backend e full stack.',
    'Na InnoForge Tech, sou responsável técnico por desenvolvimento e arquitetura, contribuindo para a definição das soluções, organização dos processos, padronização técnica e evolução dos produtos. Busco evoluir em engenharia de software com uma atuação multidisciplinar entre desenvolvimento, arquitetura, dados e tecnologia aplicada a negócios.',
  ],
  educationHighlights: [
    { value: 'CC', label: 'Graduação em andamento' },
    { value: 'TDS', label: 'Formação técnica concluída' },
    { value: 'Full Stack', label: 'Frontend, backend e banco' },
    { value: 'InnoForge', label: 'Responsabilidade técnica' },
  ],
  email: 'proflipe@outlook.com',
  profileImage: '/images/profile/fotoperfil.png',
  profileImageAlt: 'Foto de Luis Felipe',
  footerDescription:
    'Desenvolvedor de Software com atuação em full stack, backend, dados e automação.',
};
