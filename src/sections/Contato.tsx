import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';

const contatos = [
  {
    label: 'Email',
    value: 'guisbs68@gmail.com',
    href: 'mailto:guisbs68@gmail.com',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    value: '(83) 98659-1556',
    href: 'https://wa.me/5583986591556',
    icon: MessageCircle,
  },
  {
    label: 'GitHub',
    value: 'github.com/GuilhermeSBS10',
    href: 'https://github.com/GuilhermeSBS10',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/guilherme-santos-998b61251/',
    href: 'https://linkedin.com/in/guilherme-santos-998b61251/',
    icon: Linkedin,
  },
];

export function Contato() {
  return (
    <section className="px-5 py-24 sm:px-8" id="contato">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contato"
          title="Vamos conversar sobre oportunidades?"
          description="Disponível para conexões profissionais, desafios de desenvolvimento e conversas com times que valorizam iniciativa."
        />
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          {contatos.map((contato) => (
            <a
              key={contato.label}
              className="group rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40"
              href={contato.href}
              target={contato.href.startsWith('http') ? '_blank' : undefined}
              rel={contato.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <contato.icon className="text-cyan-200" size={25} />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">{contato.label}</p>
              <p className="mt-2 break-words text-lg font-semibold text-white group-hover:text-cyan-100">{contato.value}</p>
            </a>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="mailto:guisbs68@gmail.com" variant="primary">
            <Mail size={17} /> Enviar email
          </Button>
        </div>
      </div>
    </section>
  );
}
