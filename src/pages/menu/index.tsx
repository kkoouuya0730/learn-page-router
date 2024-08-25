import Layout from "@/components/layouts/Layout";
import { MyInput } from "@/features/menu/MyInput";
import { useRef } from "react";

export default function Menu() {
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

Menu.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};