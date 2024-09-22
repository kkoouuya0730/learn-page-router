import { SearchIcon } from "@/ui/icon/SearchIcon";
import { forwardRef, useId } from "react";
import RequiredLabel from "../../text/RequiredLabel";
import clsx from "clsx";
import { EmailIcon } from "@/ui/icon/EmailIcon";
import { LockIcon } from "@/ui/icon/LockIcon";

type Props = {
  label?: string;
  isRequired: boolean;
  iconType: IconType;
} & React.ComponentPropsWithoutRef<"input">;
export const TextForm = forwardRef<HTMLInputElement, Props>(
  function TextForm(
    {
      label,
      isRequired,
      iconType = "none",
      ...props
    }: Props,
    ref
  ) {
    const formId = useId();
    return (
      <div className="flex flex-col gap-2 w-fit mx-auto">
        <span className="flex justify-between">
          {label && <label htmlFor={formId}>{label}</label>}
          {isRequired && <RequiredLabel />}
        </span>
        <div className="relative">
          {iconType !== "none" && (
            <FormIconWrapper iconType={iconType} />
          )}
          <input
            id={formId}
            ref={ref}
            className={clsx([
              "border rounded-lg text-amber-700",
              iconType === "none" ? "pl-2" : "pl-8",
            ])}
            {...props}
          />
        </div>
      </div>
    );
  }
);
export type IconType =
  | "email"
  | "password"
  | "search"
  | "none";

type FormIconWrapperProps = {
  iconType: IconType;
  className?: string | string[];
};

const FormIconWrapper = ({
  iconType,
  className,
}: FormIconWrapperProps) => {
  const commonName =
    "absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-500";
  switch (iconType) {
    case "email":
      return (
        <EmailIcon
          className={clsx([commonName, className])}
        />
      );
    case "password":
      return (
        <LockIcon
          className={clsx([commonName, className])}
        />
      );
    case "search":
      return (
        <SearchIcon
          className={clsx([commonName, className])}
        />
      );
    default:
      return;
  }
};
