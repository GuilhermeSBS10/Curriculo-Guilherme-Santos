# Guilherme Santos | Currículo Digital

Currículo digital interativo de **Guilherme dos Santos Barros Silva**, desenvolvido para apresentar trajetória, habilidades técnicas, projetos, certificados e formas de contato em uma experiência moderna, responsiva e profissional.

O projeto foi criado com foco em recrutadores, oportunidades de estágio/desenvolvimento e apresentação profissional na web.

## Acesse

Após o deploy no GitHub Pages, o site ficará disponível em:

```txt
https://guilhermesbs10.github.io/Curriculo-Guilherme-Santos/
```

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Funcionalidades

- Hero section com foto, frase de impacto e links profissionais
- Seção sobre mim com perfil técnico e comportamental
- Habilidades técnicas organizadas em badges
- Cards de projetos com tecnologias e links para GitHub
- Galeria visual de certificados com modal de visualização
- Linha do tempo profissional e de experiências relevantes
- Download direto do currículo em PDF
- Contato por email, WhatsApp, GitHub e LinkedIn

## Rodar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Estrutura dos dados

Os conteúdos principais ficam centralizados em arquivos TypeScript:

- `src/data/habilidades.ts`
- `src/data/projetos.ts`
- `src/data/certificados.ts`
- `src/data/experiencias.ts`

Arquivos públicos ficam em:

- `public/Curriculo_Guilherme_Santos.pdf`
- `public/certificados/`
- `public/foto-perfil.png`

## Atualizações

Para atualizar o site depois de alguma alteração:

```bash
git add .
git commit -m "descrição da alteração"
git push
```

O GitHub Actions faz o build e publica automaticamente no GitHub Pages.
