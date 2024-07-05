type ButtonProps = {
  color: string;
  label: string;
  onClick: () => void;
};

const colorMapping = {
  primary: "bg-amber-400 hover:bg-amber-500",
  secondary: "hover:bg-amber-100",
};

export default function SimpleButton({
  color,
  label,
  onClick,
}: ButtonProps) {
  const isPrimary =
    color === "primary"
      ? colorMapping.primary
      : colorMapping.secondary;
  return (
    <>
      <button
        className={`
          font-semibold
          p-2
          rounded-xl
          hover:shadow-sm
          hover:translate-y-0.5
          ${isPrimary}
          `}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
}
