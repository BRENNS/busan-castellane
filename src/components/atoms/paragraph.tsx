import { cn } from "@/src/utils/cn";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p
      className={cn(
        "text-sm md:text-md lg:text-base leading-relaxed tracking-wide uppercase",
        className
      )}
    >
      {children}
    </p>
  );
};