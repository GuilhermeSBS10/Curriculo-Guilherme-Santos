import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils/cn';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-white/10 bg-white/[0.06] shadow-card backdrop-blur-xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
