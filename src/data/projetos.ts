export type Projeto = {
  nome: string;
  descricao: string;
  tecnologias: string[];
  github?: string;
  destaque?: boolean;
};

export const projetos: Projeto[] = [
  {
    nome: 'SmartCommerce - SaaS Financeiro',
    descricao:
      'SaaS criado para ajudar pequenas empresas e usuários individuais a organizarem finanças, acompanharem receitas, despesas e terem mais clareza sobre a saúde financeira.',
    tecnologias: ['React', 'TypeScript', 'SaaS', 'UI Design'],
    destaque: true,
  },
  {
    nome: 'SmartCards - Plataforma de Estudos',
    descricao:
      'Sistema web de estudos com flashcards, permitindo criar matérias, cadastrar perguntas e respostas, editar conteúdos e acompanhar desempenho para melhorar a retenção do aprendizado.',
    tecnologias: ['React', 'TypeScript', 'Flashcards', 'UI Design'],
    destaque: true,
  },
  {
    nome: 'Sistema Financeiro - Backend',
    descricao:
      'Sistema para controle de receitas e despesas, com estruturação de backend, rotas de API e lógica da aplicação.',
    tecnologias: ['Java', 'Spring Boot', 'APIs REST'],
    github: 'https://github.com/GuilhermeSBS10/Projeto-Financeiro-Backend',
  },
  {
    nome: 'StepUp - Plataforma para Personal Trainers',
    descricao:
      'Sistema voltado para organização de treinos, dietas e acompanhamento de evolução de alunos.',
    tecnologias: ['React', 'TypeScript', 'UI Design'],
    github: 'https://github.com/GuilhermeSBS10/pjt-Stepup',
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
