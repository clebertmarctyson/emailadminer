type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

const FeatureCard = ({
  title,
  description,
  icon,
}: FeatureCardProps): JSX.Element => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
