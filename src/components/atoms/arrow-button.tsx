import { cn } from "@/src/utils/cn";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick?: () => void;
  className?: string;
}

export const ArrowButton = ({
  direction,
  onClick,
  className,
}: ArrowButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group transition-all duration-300 hover:scale-110",
        className,
      )}
      aria-label={direction === "left" ? "Précédent" : "Suivant"}
    >
      <svg
        width="60"
        height="24"
        viewBox="0 0 60 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "left" ? (
          <>
            {/* Ligne */}
            <line
              x1="60"
              y1="12"
              x2="10"
              y2="12"
              stroke="currentColor"
              strokeWidth="1.5"
              className="group-hover:stroke-2 transition-all"
            />
            {/* Pointe de flèche */}
            <path
              d="M 10 12 L 16 6 M 10 12 L 16 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-2 transition-all"
            />
          </>
        ) : (
          <>
            {/* Ligne */}
            <line
              x1="0"
              y1="12"
              x2="50"
              y2="12"
              stroke="currentColor"
              strokeWidth="1.5"
              className="group-hover:stroke-2 transition-all"
            />
            {/* Pointe de flèche */}
            <path
              d="M 50 12 L 44 6 M 50 12 L 44 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-2 transition-all"
            />
          </>
        )}
      </svg>
    </button>
  );
};
