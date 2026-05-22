import { motion } from 'framer-motion';
import { experiencias } from '../data/experiencias';
import { Card } from '../components/Card';
import { SectionTitle } from '../components/SectionTitle';

export function Timeline() {
  return (
    <section className="px-5 py-24 sm:px-8" id="experiencias">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Trajetoria"
          title="Experiências que ampliam minha entrega"
          description="Uma linha do tempo com tecnologia, comunicação, liderança, vendas, design e operação sob pressão."
        />
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-200 via-white/20 to-transparent md:left-1/2" />
          <div className="space-y-6">
            {experiencias.map((experiencia, index) => (
              <motion.div
                key={`${experiencia.empresa}-${experiencia.cargo}`}
                className={`relative md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="absolute left-2.5 top-8 h-3.5 w-3.5 rounded-full border-2 border-cyan-100 bg-midnight shadow-glow md:left-1/2 md:-ml-[7px]" />
                <Card className="ml-10 w-full p-6 md:ml-0 md:w-[46%]">
                  <p className="text-sm font-semibold text-cyan-200">{experiencia.empresa}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{experiencia.cargo}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{experiencia.descricao}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experiencia.competencias.map((competencia) => (
                      <span key={competencia} className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-semibold text-slate-200">
                        {competencia}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
