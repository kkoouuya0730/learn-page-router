import { forwardRef } from "react";

type MyInputProps = {
  className: string;
};

export const MyInput = forwardRef<
  HTMLInputElement,
  MyInputProps
>(function MyInput(props, ref) {
  return <input {...props} ref={ref} />;
});
