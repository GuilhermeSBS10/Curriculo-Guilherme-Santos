export type Experiencia = {
  cargo: string;
  empresa: string;
  descricao: string;
  competencias: string[];
};

export const experiencias: Experiencia[] = [
  {
    cargo: 'Liderança e Gestão de Equipes',
    empresa: 'Trabalho Voluntário',
    descricao:
      'Condução de equipes, organização de atividades, comunicação com pessoas e desenvolvimento de senso de responsabilidade coletiva.',
    competencias: ['Liderança', 'Equipe', 'Responsabilidade'],
  },
  {
    cargo: 'Operador de Multimídia',
    empresa: 'Produção de Eventos',
    descricao:
      'Operação de mídias e suporte técnico em ambientes ao vivo, com foco em precisão, agilidade e trabalho sob pressão.',
    competencias: ['Tecnologia', 'Eventos', 'Pressão'],
  },
  {
    cargo: 'Fundador e Gestor',
    empresa: 'E-commerce Próprio',
    descricao:
      'Criação e gestão de operação digital própria, envolvendo atendimento, posicionamento, produto, marketing e tomada de decisão.',
    competencias: ['Visão de negócio', 'Marketing', 'Gestão'],
  },
  {
    cargo: 'Jovem Aprendiz: Auxiliar Administrativo',
    empresa: 'Newland Toyota',
    descricao:
      'Apoio em rotinas administrativas, organização de processos, atendimento interno e contato com padrões corporativos de qualidade.',
    competencias: ['Organização', 'Atendimento', 'Disciplina operacional'],
  },
  {
    cargo: 'SDR e Designer',
    empresa: 'Empresa de Marketing',
    descricao:
      'Prospecção, comunicação com clientes, criação de peças visuais e apoio em estratégias comerciais orientadas a resultado.',
    competencias: ['Vendas', 'Design', 'Comunicação'],
  },
  {
    cargo: '2º Lugar em Olimpíada de Programação',
    empresa: 'UNIESP',
    descricao:
      'Participação em competição de programação promovida pela UNIESP, conquistando o 2º lugar e demonstrando raciocínio lógico, resolução de problemas, foco técnico e desempenho sob pressão.',
    competencias: ['Programação', 'Lógica', 'Resolução de problemas', 'Competição'],
  },
  {
    cargo: 'Estagiário do Setor Financeiro',
    empresa: 'Fundação Cidade Viva',
    descricao:
      'Apoio às rotinas do setor financeiro, organização de documentos, conferência de informações, acompanhamento de processos internos e desenvolvimento de visão administrativa com responsabilidade e atenção aos detalhes.',
    competencias: ['Financeiro', 'Organização', 'Processos internos', 'Responsabilidade'],
  },
];
