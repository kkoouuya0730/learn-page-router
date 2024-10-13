import { SearchIcon } from "@/ui/icon/SearchIcon";
import { forwardRef, useId } from "react";
import RequiredLabel from "../../text/RequiredLabel";
import clsx from "clsx";
import { EmailIcon } from "@/ui/icon/EmailIcon";
import { LockIcon } from "@/ui/icon/LockIcon";
import { CloseIcon } from "@/ui/icon/CloseIcon";

type Props = {
  label?: string;
  isRequired: boolean;
  iconType: IconType;
  onClickClearButton: () => void;
  shouldShowClearButton: boolean;
} & React.ComponentPropsWithoutRef<"input">;
export const TextForm = forwardRef<HTMLInputElement, Props>(
  function TextForm(
    {
      label,
      isRequired,
      iconType = "none",
      onClickClearButton,
      shouldShowClearButton,
      ...props
    }: Props,
    ref
  ) {
    const formId = useId();
    return (
      <div className="flex flex-col gap-2 max-w-[400px] mx-auto">
        <span className="flex justify-between">
          {label && <label htmlFor={formId}>{label}</label>}
          {isRequired && <RequiredLabel />}
        </span>
        <div className="relative">
          {iconType !== "none" && (
            <span className="absolute left-2 top-6 h-6 w-6 -translate-y-1/2 text-amber-500">
              <FormIconWrapper iconType={iconType} />
            </span>
          )}
          <input
            id={formId}
            ref={ref}
            className={clsx([
              "border rounded-lg text-amber-700 w-full h-10",
              iconType === "none" ? "pl-2" : "pl-8",
            ])}
            {...props}
          />
          {shouldShowClearButton && (
            <span className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-amber-500 cursor-pointer">
              <CloseIcon onClick={onClickClearButton} />
            </span>
          )}
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
}: FormIconWrapperProps) => {
  switch (iconType) {
    case "email":
      return <EmailIcon />;
    case "password":
      return <LockIcon />;
    case "search":
      return <SearchIcon />;
    default:
      return;
  }
};
