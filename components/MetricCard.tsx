interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  className?: string;
}

export const MetricCard = ({
  title,
  value,
  icon,
  className = "",
}: MetricCardProps) => {
  return (
    <article
      className={`bg-gray-800 p-6 rounded-xl flex items-center justify-between ${className}`}
    >
      <div>
        <h3 className="text-gray-400 mb-1">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      {icon}
    </article>
  );
};
