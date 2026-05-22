import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, FileText, X } from 'lucide-react';
import type { Certificado } from '../data/certificados';
import { assetPath } from '../utils/assets';
import { Button } from './Button';

type CertificateModalProps = {
  certificado: Certificado | null;
  onClose: () => void;
};

export function CertificateModal({ certificado, onClose }: CertificateModalProps) {
  const isPdf = certificado?.arquivo.toLowerCase().endsWith('.pdf');
  const arquivoBase = certificado ? assetPath(certificado.arquivo) : '';
  const arquivo = certificado ? `${arquivoBase}${isPdf ? '#toolbar=0&navpanes=0' : ''}` : '';

  return (
    <AnimatePresence>
      {certificado ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/82 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/[0.12] bg-slate-950 shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Fechar certificado"
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 p-2 text-white transition hover:bg-white/10"
              onClick={onClose}
              type="button"
            >
              <X size={18} />
            </button>
            <div className="grid gap-0 md:grid-cols-[1.35fr_.75fr]">
              <div className="flex min-h-[360px] items-center justify-center bg-slate-900">
                {isPdf ? (
                  <iframe className="h-[72vh] w-full bg-white" src={arquivo} title={certificado.titulo} />
                ) : (
                  <img
                    alt={certificado.titulo}
                    className="max-h-[68vh] w-full object-contain"
                    src={arquivo}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                )}
              </div>
              <aside className="flex flex-col justify-between gap-8 p-7">
                <div>
                  <p className="text-sm font-semibold text-cyan-200">{certificado.instituicao}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{certificado.titulo}</h3>
                  <div className="mt-5 flex flex-wrap gap-2 text-sm text-slate-300">
                    <span className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1">
                      {certificado.cargaHoraria}
                    </span>
                    <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-emerald-100">
                      {certificado.status}
                    </span>
                  </div>
                </div>
                <Button href={arquivoBase} target="_blank" rel="noreferrer" variant="primary">
                  Abrir arquivo <ExternalLink size={16} />
                </Button>
              </aside>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
