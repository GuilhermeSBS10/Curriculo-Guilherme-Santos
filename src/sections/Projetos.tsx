import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Card } from '../components/Card';
import { SectionTitle } from '../components/SectionTitle';
import { projetos } from '../data/projetos';

export function Projetos() {
  return (
    <section className="px-5 py-24 sm:px-8" id="projetos">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projetos"
          title="Evidências práticas de evolução técnica"
          description="Projetos com foco em backend, interface, responsividade, produto e aprendizagem aplicada."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projetos.map((projeto, index) => (
            <motion.article
              key={projeto.nome}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.07 }}
            >
              <Card className="group flex h-full flex-col justify-between overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30">
                <div>
                  {projeto.destaque ? (
                    <span className="mb-5 inline-flex rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                      Destaque
                    </span>
                  ) : null}
                  <h3 className="text-2xl font-semibold text-white">{projeto.nome}</h3>
                  <p className="mt-4 min-h-28 leading-7 text-slate-300">{projeto.descricao}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {projeto.tecnologias.map((tech) => (
                      <span key={tech} className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-semibold text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  {projeto.github ? (
                    <a
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition group-hover:text-white"
                      href={projeto.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={17} /> Ver no GitHub <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400">
                      Projeto atual <ArrowUpRight size={16} />
                    </span>
                  )}
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
