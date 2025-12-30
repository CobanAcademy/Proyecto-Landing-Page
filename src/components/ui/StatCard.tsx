// landing-app/src/components/ui/StatCard.tsx
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="card text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {value}
      </div>
      <p className="text-sm text-muted-foreground">
        {label}
      </p>
    </div>
  );
};

export default StatCard;