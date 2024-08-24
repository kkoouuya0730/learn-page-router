import clsx from "clsx";

type ButtonProps = {
  color: string;
  label: string;
  onClick: () => void;
};

export default function SimpleButton({
  color,
  label,
  onClick,
}: ButtonProps) {
  return (
    <>
      <button
        className={clsx([
          `font-semibold
           p-2
           rounded-xl
           hover:shadow-sm
           hover:translate-y-0.5
          `,
          color === "primary"
            ? "bg-amber-400 hover:bg-amber-500"
            : "hover:bg-amber-100 border",
        ])}
        onClick={onClick}
      >
        <p className="whitespace-nowrap">{label}</p>
      </button>
    </>
  );
}
