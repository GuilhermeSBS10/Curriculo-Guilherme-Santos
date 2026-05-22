import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils/cn';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const variants = {
  primary:
    'border-cyan-300/40 bg-cyan-300 text-slate-950 shadow-[0_0_34px_rgba(94,234,212,.32)] hover:bg-white',
  secondary:
    'border-white/[0.12] bg-white/10 text-white hover:border-cyan-200/50 hover:bg-white/[0.16]',
  ghost: 'border-white/10 bg-transparent text-slate-200 hover:border-white/25 hover:bg-white/[0.08]',
};

export function Button({ children, className, variant = 'secondary', ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 focus:ring-offset-2 focus:ring-offset-midnight',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
