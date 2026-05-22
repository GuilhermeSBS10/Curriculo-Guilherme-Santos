import { motion } from 'framer-motion';
import { habilidades } from '../data/habilidades';
import { SectionTitle } from '../components/SectionTitle';

export function Habilidades() {
  return (
    <section className="px-5 py-24 sm:px-8" id="habilidades">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Stack"
          title="Habilidades tecnicas"
          description="Ferramentas e tecnologias que sustentam minha evolução em desenvolvimento full stack."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {habilidades.map((habilidade, index) => (
            <motion.span
              key={habilidade}
              className="rounded-full border border-white/10 bg-white/[0.07] px-5 py-3 text-sm font-semibold text-slate-100 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200/40 hover:text-cyan-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.025 }}
            >
              {habilidade}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
