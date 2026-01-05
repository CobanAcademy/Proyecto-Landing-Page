import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  compact?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, compact = false }) => {
  return (
    <div className={`
      relative bg-card border border-border rounded-xl
      ${compact ? 'p-3' : 'p-4 md:p-5'}
      flex flex-col justify-center items-center
      min-h-[120px] md:min-h-[140px]
      h-full w-full
      overflow-hidden
    `}>
      {/* Valor - con ancho máximo */}
      <div className={`
        ${compact ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'} 
        font-bold text-primary mb-2 md:mb-3
        leading-none
        text-center
        w-full
        px-2
      `}>
        {value}
      </div>
      
      {/* Label - con control de texto estricto */}
      <div className="w-full px-2">
        <p className={`
          ${compact ? 'text-xs' : 'text-sm md:text-base'} 
          text-muted-foreground 
          text-center
          leading-tight md:leading-snug
          line-clamp-3
          max-h-[4.5em]
          overflow-hidden
          text-ellipsis
          break-words
          hyphens-auto
          w-full
        `}>
          {label}
        </p>
      </div>
    </div>
  );
};

export default StatCard;