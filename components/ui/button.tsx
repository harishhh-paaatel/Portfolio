import { cn } from '@/lib/utils';

const styles = {
  base: 'inline-flex items-center justify-center rounded-full border border-transparent px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
  variant: {
    default: 'bg-orange-500 text-slate-950 shadow-glow hover:bg-orange-400',
    secondary: 'bg-white/5 text-white shadow-[0_0_40px_rgba(255,128,0,0.16)] hover:bg-white/10',
    ghost: 'bg-transparent text-white/80 hover:text-white',
  },
  size: {
    default: 'h-12',
    sm: 'h-10 px-4 text-sm',
  },
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'ghost';
  size?: 'default' | 'sm';
}

export function Button({ className, variant = 'default', size = 'default', ...props }: ButtonProps) {
  return <button className={cn(styles.base, styles.variant[variant], styles.size[size], className)} {...props} />;
}
