type HeadingProps = {
  title: string;
  className?: string;
};

export const Heading: React.FC<HeadingProps> = ({ title, className }) => {
  return <h1 className={`h6 mb-0 ${className}`}>{title}</h1>;
};
