import { cn } from "@/src/utils/cn";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2
      className={cn(
        "font-serif text-5xl md:text-2xl lg:text-4xl xl:text-6xl font-bold leading-tight uppercase",
        className
      )}
    >
      {children}
    </h2>
  );
};