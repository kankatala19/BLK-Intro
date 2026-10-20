import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const Button = React.forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className,
      icon: Icon,
      iconPosition = 'right',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-crimson-500/40 disabled:opacity-50 disabled:cursor-not-allowed select-none';

    const variants = {
      primary:
        'bg-crimson-gradient text-white border border-crimson-500/40 shadow-glow-red-sm hover:shadow-glow-red hover:brightness-110 active:scale-[0.98]',
      secondary:
        'bg-dark-800 text-white border border-dark-700/80 hover:bg-dark-750 hover:border-crimson-600/40 active:scale-[0.98]',
      outline:
        'bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5 active:scale-[0.98]',
      ghost:
        'bg-transparent text-muted-300 hover:text-white hover:bg-white/5 active:scale-[0.98]',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

