import React from 'react';
import { cn } from '../../utils/cn';

export const Badge = ({
  children,
  variant = 'default',
  showDot = false,
  className,
  ...props
}) => {
  const variants = {
    default: 'bg-dark-800/90 text-muted-300 border-white/10 hover:border-white/20',
    crimson: 'bg-crimson-950/40 text-crimson-300 border-crimson-900/60 shadow-glow-red-sm',
    outline: 'bg-transparent text-muted-400 border-white/15',
    subtle: 'bg-dark-850/80 text-muted-400 border-transparent',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-full border transition-colors',
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      {showDot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson-600"></span>
        </span>
      )}
      {children}
    </span>
  );
};

