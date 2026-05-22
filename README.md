# Guilherme Currículo Digital

Currículo digital interativo premium de Guilherme dos Santos Barros Silva, criado com React, TypeScript, Vite, Tailwind CSS, Framer Motion e Lucide React.

## Rodar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Arquivos públicos

- Coloque a foto de perfil em `public/foto-perfil.png`.
- Coloque o currículo tradicional em `public/Curriculo_Guilherme_Santos.pdf`.
- Coloque certificados em `public/certificados/`.

## Editar dados

Os conteúdos editáveis ficam em:

- `src/data/habilidades.ts`
- `src/data/projetos.ts`
- `src/data/certificados.ts`
- `src/data/experiencias.ts`

Para adicionar um certificado real, coloque o arquivo em `public/certificados/` e edite `src/data/certificados.ts`:

```ts
{
  titulo: 'Nome do certificado',
  instituicao: 'Instituição',
  cargaHoraria: '40h',
  status: 'Concluído',
  imagem: '/certificados/preview.png',
  arquivo: '/certificados/certificado.pdf',
}
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie este projeto para o repositório.
3. No GitHub, acesse `Settings > Pages`.
4. Em `Build and deployment`, escolha `GitHub Actions`.
5. Crie um workflow de deploy para Vite ou use uma action pronta de GitHub Pages.
6. Depois disso, cada `commit` e `push` na branch principal pode atualizar o site.

O projeto já está preparado para GitHub Pages com `base: './'` no Vite.
