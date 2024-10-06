import clsx from "clsx";

type Props = {
  label: string;
  radioValue: {
    id: string;
    name: string;
    value: string;
    label: string;
  }[];
  isColum?: boolean;
};

export default function CustomRadio({
  label,
  radioValue,
  isColum = false,
}: Props) {
  return (
    <fieldset>
      <legend className="text-amber-500">{label}</legend>
      <div
        className={clsx(
          isColum ? "flex flex-col" : "flex space-x-4"
        )}
      >
        {radioValue.map((item) => (
          <div key={item.name}>
            <input
              type="radio"
              id={item.id}
              name={item.name}
              value={item.value}
              className="mr-1"
            />
            <label
              htmlFor={item.id}
              className="text-amber-950"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
