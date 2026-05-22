export type Certificado = {
  titulo: string;
  instituicao: string;
  cargaHoraria: string;
  status: 'Concluído' | 'Em andamento';
  imagem: string;
  arquivo: string;
};

// Adicione seus certificados reais em public/certificados/ e atualize esta lista.
// Para PDFs, use uma imagem de preview em "imagem" e o PDF em "arquivo".
export const certificados: Certificado[] = [
  {
    titulo: 'UI Design para HTML e CSS',
    instituicao: 'Curso complementar',
    cargaHoraria: 'Certificado',
    status: 'Concluído',
    imagem: '/certificados/ui-design-html-css.pdf',
    arquivo: '/certificados/ui-design-html-css.pdf',
  },
  {
    titulo: 'Fundamentos de Programação Web',
    instituicao: 'Curso complementar',
    cargaHoraria: 'Certificado',
    status: 'Concluído',
    imagem: '/certificados/fundamentos-web-html-css-js-git-github.pdf',
    arquivo: '/certificados/fundamentos-web-html-css-js-git-github.pdf',
  },
  {
    titulo: 'GitHub, Commits e Controle de Versão',
    instituicao: 'Curso complementar',
    cargaHoraria: 'Certificado',
    status: 'Concluído',
    imagem: '/certificados/commits-github-controle-versao.pdf',
    arquivo: '/certificados/commits-github-controle-versao.pdf',
  },
  {
    titulo: 'Bootcamp Git e GitHub do Zero',
    instituicao: 'Curso complementar',
    cargaHoraria: 'Certificado',
    status: 'Concluído',
    imagem: '/certificados/bootcamp-git-github-do-zero.pdf',
    arquivo: '/certificados/bootcamp-git-github-do-zero.pdf',
  },
  {
    titulo: 'Bootcamp Programação Frontend com Angular',
    instituicao: 'Curso complementar',
    cargaHoraria: 'Certificado',
    status: 'Concluído',
    imagem: '/certificados/bootcamp-programacao-frontend-angular.pdf',
    arquivo: '/certificados/bootcamp-programacao-frontend-angular.pdf',
  },
  {
    titulo: 'Empreendendo com Tecnologia',
    instituicao: 'Curso complementar',
    cargaHoraria: 'Certificado',
    status: 'Concluído',
    imagem: '/certificados/empreendendo-com-tecnologia.pdf',
    arquivo: '/certificados/empreendendo-com-tecnologia.pdf',
  },
  {
    titulo: 'Competição Olimpíada de Programação',
    instituicao: 'Curso complementar',
    cargaHoraria: 'Certificado',
    status: 'Concluído',
    imagem: '/certificados/competicao-olimpiada-programacao.pdf',
    arquivo: '/certificados/competicao-olimpiada-programacao.pdf',
  },
  {
    titulo: 'Construa seu Próprio Chatbot com OpenAI',
    instituicao: 'Curso complementar',
    cargaHoraria: 'Certificado',
    status: 'Concluído',
    imagem: '/certificados/chatbot-openai.pdf',
    arquivo: '/certificados/chatbot-openai.pdf',
  },
];
