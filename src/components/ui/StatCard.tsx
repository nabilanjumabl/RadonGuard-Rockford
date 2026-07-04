import { ReactNode } from 'react';

interface StatCardProps {
  value: string;
  label: string;
  subtext?: string;
  variant?: 'primary' | 'accent' | 'success' | 'warning';
  children?: ReactNode;
  size?: 'default' | 'large';
}

export function StatCard({ value, label, subtext, variant = 'primary', children, size = 'default' }: StatCardProps) {
  const variantClasses = {
    primary: 'bg-gradient-to-br from-primary-600 to-primary-700 text-white',
    accent: 'bg-gradient-to-br from-accent-500 to-accent-600 text-white',
    success: 'bg-gradient-to-br from-success-600 to-success-700 text-white',
    warning: 'bg-gradient-to-br from-warning-500 to-warning-600 text-white',
  };

  const sizeClasses = {
    default: 'p-6',
    large: 'p-8 md:p-10',
  };

  const valueSizeClasses = {
    default: 'text-4xl md:text-5xl',
    large: 'text-5xl md:text-6xl lg:text-7xl',
  };

  return (
    <div className={`${variantClasses[variant]} ${sizeClasses[size]} rounded-2xl shadow-lg relative overflow-hidden`}>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-12 -translate-x-12" />

      <div className="relative">
        <div className={`${valueSizeClasses[size]} font-heading font-bold mb-2 flex items-baseline gap-1`}>
          {value}
        </div>
        <div className={`${size === 'large' ? 'text-base md:text-lg' : 'text-sm md:text-base'} font-medium opacity-90 mb-1`}>
          {label}
        </div>
        {subtext && (
          <div className={`${size === 'large' ? 'text-sm' : 'text-xs'} opacity-80 mt-2`}>
            {subtext}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
