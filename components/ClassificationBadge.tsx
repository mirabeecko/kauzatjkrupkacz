interface ClassificationBadgeProps {
  type: 'dolozeno' | 'evidovano' | 'spor' | 'hypoteza';
  className?: string;
}

export default function ClassificationBadge({ type, className = '' }: ClassificationBadgeProps) {
  const badges = {
    dolozeno: {
      label: 'DOLOŽENO',
      bgColor: 'bg-green-700',
      textColor: 'text-white',
      description: 'Existuje konkrétní dokument (faktura, výpis, smlouva, e-mail, zápis)'
    },
    evidovano: {
      label: 'EVIDOVÁNO',
      bgColor: 'bg-blue-700',
      textColor: 'text-white',
      description: 'Vychází z interní evidence spolku (účetní kniha, členská evidence)'
    },
    spor: {
      label: 'SPOR',
      bgColor: 'bg-orange-700',
      textColor: 'text-white',
      description: 'Druhá strana tvrdí opak nebo probíhá právní řízení'
    },
    hypoteza: {
      label: 'HYPOTÉZA',
      bgColor: 'bg-slate-700',
      textColor: 'text-white',
      description: 'Vysvětlení nebo interpretace události'
    }
  };

  const badge = badges[type];

  return (
    <span
      className={`inline-flex items-center text-xs font-semibold px-2 py-1 rounded ${badge.bgColor} ${badge.textColor} ${className}`}
      title={badge.description}
    >
      {badge.label}
    </span>
  );
}

// Convenience exports for specific badge types
export function DolozenoBadge({ className }: { className?: string }) {
  return <ClassificationBadge type="dolozeno" className={className} />;
}

export function EvidovanoBadge({ className }: { className?: string }) {
  return <ClassificationBadge type="evidovano" className={className} />;
}

export function SporBadge({ className }: { className?: string }) {
  return <ClassificationBadge type="spor" className={className} />;
}

export function HypotezaBadge({ className }: { className?: string }) {
  return <ClassificationBadge type="hypoteza" className={className} />;
}
