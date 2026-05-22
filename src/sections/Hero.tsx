import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { assetPath } from '../utils/assets';

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 py-8 sm:px-8" id="inicio">
      <div className="absolute inset-0 bg-radial-blue" />
      <div className="absolute inset-0 bg-radial-violet" />
      <div className="absolute inset-x-0 top-0 h-24 border-b border-white/10 bg-white/[0.03] backdrop-blur-2xl" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
        <a className="flex items-center gap-3 text-sm font-bold text-white" href="#inicio">
          <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-1">
            <img
              alt="Logo Guilherme Santos"
              className="h-full w-full object-contain"
              src={assetPath('logo-gs.svg?v=4')}
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          </span>
          Guilherme Santos
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          <a className="hover:text-white" href="#sobre">Sobre</a>
          <a className="hover:text-white" href="#projetos">Projetos</a>
          <a className="hover:text-white" href="#certificados">Certificados</a>
          <a className="hover:text-white" href="#contato">Contato</a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-12 pb-12 pt-20 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            <Sparkles size={16} /> Desenvolvedor Full Stack em formação
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] text-white sm:text-7xl lg:text-8xl">
            Guilherme Santos
          </h1>
          <p className="mt-6 max-w-2xl text-2xl font-medium text-cyan-100 sm:text-3xl">
            Transformo aprendizado em soluções reais.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Estudante de Ciência da Computação, no 4º período, com foco em Desenvolvimento Web,
            interfaces responsivas, APIs REST e projetos com visão prática de negócio.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              href={assetPath('Curriculo_Guilherme_Santos.pdf')}
              download="Curriculo_Guilherme_Santos.pdf"
              variant="primary"
            >
              <Download size={17} /> Baixar Currículo
            </Button>
            <Button href="#certificados">Ver Certificados</Button>
            <Button href="#projetos">Ver Projetos</Button>
            <Button href="https://github.com/GuilhermeSBS10" target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub
            </Button>
            <Button href="https://linkedin.com/in/guilherme-santos-998b61251/" target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[520px]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="absolute inset-4 rounded-[2rem] bg-cyan-300/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.06] p-4 shadow-glow backdrop-blur-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-900">
              <img
                alt="Foto de perfil de Guilherme Santos"
                className="absolute inset-0 h-full w-full scale-110 object-cover object-[center_42%]"
                src={assetPath('guilherme-foto-hero.png?v=6')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/86 via-slate-950/18 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Full Stack</p>
                <p className="mt-3 max-w-sm text-3xl font-semibold text-white">Código, comunicação e iniciativa.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        aria-label="Ir para sobre mim"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.08] p-3 text-slate-200 transition hover:bg-white/[0.14] md:block"
        href="#sobre"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
