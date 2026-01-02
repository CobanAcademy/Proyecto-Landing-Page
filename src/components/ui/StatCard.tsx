// landing-app/src/components/ui/StatCard.tsx
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  compact?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, compact = false }) => {
  return (
    <div className={`
      card text-center 
      ${compact ? 'p-3' : 'p-4 md:p-5'}
      flex flex-col justify-center
      min-h-[120px] md:min-h-[140px]
      h-full
    `}>
      {/* Valor - Siempre en una línea */}
      <div className={`
        ${compact ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'} 
        font-bold text-primary mb-2 md:mb-3
        leading-none
        break-keep
      `}>
        {value}
      </div>
      

      <p className={`
        ${compact ? 'text-xs' : 'text-sm md:text-base'} 
        text-muted-foreground 
        line-clamp-3 md:line-clamp-4
        leading-tight md:leading-snug
        px-1
      `}>
        {label}
      </p>
    </div>
  );
};

export default StatCard;