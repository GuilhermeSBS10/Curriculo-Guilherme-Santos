import { Certificados } from './sections/Certificados';
import { Contato } from './sections/Contato';
import { Curriculo } from './sections/Curriculo';
import { Habilidades } from './sections/Habilidades';
import { Hero } from './sections/Hero';
import { Projetos } from './sections/Projetos';
import { Sobre } from './sections/Sobre';
import { Timeline } from './sections/Timeline';

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-midnight text-slate-100">
      <Hero />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Certificados />
      <Timeline />
      <Curriculo />
      <Contato />
      <footer className="border-t border-white/10 px-5 py-8 text-sm text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <span>Guilherme dos Santos Barros Silva - João Pessoa, PB</span>
          <span>Desenvolvedor Full Stack em formação</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
