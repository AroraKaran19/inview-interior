export const Heading = ({ title, subtitle, className } : { title: string, subtitle?: string, className?: string }) => {
  return (
    <div className={`section-heading w-full flex justify-center items-center text-black ${className}`}>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
}