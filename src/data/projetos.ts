export type Projeto = {
  nome: string;
  descricao: string;
  tecnologias: string[];
  github?: string;
  destaque?: boolean;
};

export const projetos: Projeto[] = [
  {
    nome: 'Sistema Financeiro - Backend',
    descricao:
      'Sistema para controle de receitas e despesas, com estruturação de backend, rotas de API e lógica da aplicação.',
    tecnologias: ['Java', 'Spring Boot', 'APIs REST'],
    github: 'https://github.com/GuilhermeSBS10/Projeto-Financeiro-Backend',
    destaque: true,
  },
  {
    nome: 'StepUp - Plataforma para Personal Trainers',
    descricao:
      'Sistema voltado para organização de treinos, dietas e acompanhamento de evolução de alunos.',
    tecnologias: ['React', 'TypeScript', 'UI Design'],
    github: 'https://github.com/GuilhermeSBS10/pjt-Stepup',
    destaque: true,
  },
  {
    nome: 'Projeto Iates - Landing Page',
    descricao:
      'Landing page desenvolvida para prática de estruturação, estilização e responsividade.',
    tecnologias: ['HTML', 'CSS'],
    github: 'https://github.com/GuilhermeSBS10/projeto-iates',
  },
  {
    nome: 'Projetos de Estudo',
    descricao:
      'Calculadora, IMC e páginas web para prática de lógica, JavaScript e manipulação do DOM.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/GuilhermeSBS10/Estudos-Full-Stack',
  },
];
