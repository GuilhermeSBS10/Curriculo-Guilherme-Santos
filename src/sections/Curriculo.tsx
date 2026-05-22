import { Download, FileText } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { assetPath } from '../utils/assets';

export function Curriculo() {
  return (
    <section className="px-5 py-20 sm:px-8" id="curriculo">
      <div className="mx-auto max-w-5xl">
        <Card className="relative overflow-hidden p-8 sm:p-10">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-cyan-300/10 to-transparent" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.08] p-3 text-cyan-100">
                <FileText size={24} />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-200/80">Currículo</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Prefere a versão tradicional?</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Baixe o PDF com os dados profissionais, experiências, formação e contatos em formato direto para recrutadores.
              </p>
            </div>
            <Button
              href={assetPath('Curriculo_Guilherme_Santos.pdf')}
              download="Curriculo_Guilherme_Santos.pdf"
              variant="primary"
            >
              <Download size={17} /> Baixar Currículo em PDF
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
