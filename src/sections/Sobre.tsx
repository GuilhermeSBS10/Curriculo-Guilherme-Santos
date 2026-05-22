import { motion } from 'framer-motion';
import { BriefcaseBusiness, Code2, MessageCircle, Rocket } from 'lucide-react';
import { Card } from '../components/Card';
import { SectionTitle } from '../components/SectionTitle';

const pilares = [
  { icon: Code2, label: 'Web e APIs', text: 'React, JavaScript, HTML, CSS, Node, Java e Spring Boot básico.' },
  { icon: MessageCircle, label: 'Comunicação', text: 'Atendimento, vendas, SDR e relacionamento com pessoas.' },
  { icon: BriefcaseBusiness, label: 'Negócio', text: 'Experiência com e-commerce, marketing e tomada de decisão.' },
  { icon: Rocket, label: 'Execução', text: 'Projetos próprios, estudo constante e entrega responsiva.' },
];

export function Sobre() {
  return (
    <section className="px-5 py-24 sm:px-8" id="sobre">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Sobre mim"
          title="Técnica com repertório humano e visão de produto."
          description="Um perfil em formação, mas com vivência real em tecnologia, comunicação, operação e liderança."
        />
        <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <Card className="p-8 sm:p-10">
            <p className="text-xl leading-9 text-slate-200">
              Sou estudante de Ciência da Computação, atualmente no 4º período, focado em
              desenvolvimento web. Tenho experiência prática criando interfaces responsivas,
              consumindo e estruturando APIs, trabalhando com banco de dados e desenvolvendo
              projetos que saem do estudo para resolver problemas reais.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Além da parte técnica, trago uma base forte de liderança, atendimento ao cliente,
              vendas, marketing, design, eventos e projetos próprios. Isso me ajuda a enxergar
              tecnologia como produto, comunicação e resultado, não apenas como código.
            </p>
          </Card>
          <div className="grid gap-4 sm:grid-cols-2">
            {pilares.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30">
                  <item.icon className="mb-5 text-cyan-200" size={26} />
                  <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
