import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, FileText } from 'lucide-react';
import { Card } from '../components/Card';
import { CertificateModal } from '../components/CertificateModal';
import { SectionTitle } from '../components/SectionTitle';
import { certificados, type Certificado } from '../data/certificados';
import { assetPath } from '../utils/assets';

export function Certificados() {
  const [selecionado, setSelecionado] = useState<Certificado | null>(null);

  return (
    <section className="px-5 py-24 sm:px-8" id="certificados">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Certificados"
          title="Galeria visual de formação complementar"
          description="Espaço preparado para apresentar certificados com preview, modal premium e suporte para imagens ou PDF."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificados.map((certificado, index) => {
            const isPdf = certificado.arquivo.toLowerCase().endsWith('.pdf');
            const arquivo = assetPath(certificado.arquivo);
            const imagem = assetPath(certificado.imagem);
            const preview = isPdf ? `${arquivo}#toolbar=0&navpanes=0&scrollbar=0` : imagem;

            return (
              <motion.button
                key={certificado.titulo}
                className="h-full text-left"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                onClick={() => setSelecionado(certificado)}
                type="button"
              >
                <Card className="group flex h-full min-h-[430px] flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:shadow-glow">
                  <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-slate-900">
                    {isPdf ? (
                      <iframe
                        className="pointer-events-none absolute left-0 top-0 h-[155%] w-full origin-top scale-[1.02] bg-white transition duration-500 group-hover:scale-[1.06]"
                        loading="lazy"
                        src={preview}
                        title={`Preview do certificado ${certificado.titulo}`}
                      />
                    ) : (
                      <img
                        alt={certificado.titulo}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        src={preview}
                        onError={(event) => {
                          event.currentTarget.src = assetPath('certificados/placeholder-certificado.svg');
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-white/[0.08] opacity-80" />
                    <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/35 p-2 text-white backdrop-blur">
                      <Eye size={17} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                    <p className="text-sm font-semibold text-cyan-200">{certificado.instituicao}</p>
                    <h3 className="mt-2 line-clamp-2 min-h-[3.5rem] text-xl font-semibold leading-7 text-white">
                      {certificado.titulo}
                    </h3>
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <span className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-semibold text-slate-200">
                        {certificado.cargaHoraria}
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
                        <FileText size={15} /> Ver certificado
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.button>
            );
          })}
        </div>
      </div>
      <CertificateModal certificado={selecionado} onClose={() => setSelecionado(null)} />
    </section>
  );
}
