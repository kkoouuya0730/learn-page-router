import Layout from "@/components/Layout";
import { forwardRef, useRef } from "react";

type MyInputProps = {
  className: string;
};

const MyInput = forwardRef<HTMLInputElement, MyInputProps>(
  function MyInput(props, ref) {
    return <input {...props} ref={ref} />;
  }
);
export default function About() {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleClick() {
    inputRef.current?.focus();
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <p className="grow flex">
          <MyInput
            ref={inputRef}
            className="border rounded-lg mx-auto"
          />
        </p>
        <p className="grow flex">
          <button
            onClick={handleClick}
            className="bg-red-600 rounded-lg mx-auto"
          >
            Focus the Input
          </button>
        </p>
      </div>
    </>
  );
}

About.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
